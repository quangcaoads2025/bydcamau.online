$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$CssPath = Join-Path $Root "assets\css\styles.css"

if (-not (Test-Path $CssPath)) {
    Write-Host "KHONG TIM THAY assets\css\styles.css" -ForegroundColor Red
    exit 1
}

$Current = [System.IO.File]::ReadAllText($CssPath, [System.Text.Encoding]::UTF8)

# Xoa block v30 neu co
$Marker30Start = "/* ===== VEHICLE CARD SIZE NORMALIZATION v30 START ===== */"
$Marker30End   = "/* ===== VEHICLE CARD SIZE NORMALIZATION v30 END ===== */"
$Pattern30 = [regex]::Escape($Marker30Start) + ".*?" + [regex]::Escape($Marker30End)
$Current = [regex]::Replace($Current, $Pattern30, "", [System.Text.RegularExpressions.RegexOptions]::Singleline)

# Xoa block v31 cu neu co
$Marker31Start = "/* ===== VEHICLE CARD SIZE BOOST v31 START ===== */"
$Marker31End   = "/* ===== VEHICLE CARD SIZE BOOST v31 END ===== */"
$Pattern31 = [regex]::Escape($Marker31Start) + ".*?" + [regex]::Escape($Marker31End)
$Current = [regex]::Replace($Current, $Pattern31, "", [System.Text.RegularExpressions.RegexOptions]::Singleline)

$Patch = @'
/* ===== VEHICLE CARD SIZE BOOST v31 START ===== */

/* Gỡ triết lý hiển thị nhỏ trước đây, ưu tiên xe to - đều - đẹp */
.vehicle-card--catalog .vehicle-card__visual,
.vehicle-card .vehicle-card__visual {
  min-height: 255px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 14px 14px 8px !important;
  overflow: hidden !important;
}

.vehicle-card--catalog .vehicle-card__visual > a,
.vehicle-card .vehicle-card__visual > a {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  height: 100% !important;
  position: static !important;
}

.vehicle-card--catalog .vehicle-card__image,
.vehicle-card .vehicle-card__image,
.vehicle-card--catalog img.vehicle-card__image,
.vehicle-card img.vehicle-card__image {
  display: block !important;
  width: auto !important;
  height: 178px !important;
  max-height: 178px !important;
  max-width: 94% !important;
  object-fit: contain !important;
  object-position: center center !important;
  margin: 0 auto !important;
  transform: scale(1.18) !important;
  transform-origin: center center !important;
}

/* Với các ảnh có nhiều khoảng trắng, phóng thêm một chút nhưng không làm vỡ layout */
.vehicle-card--catalog .vehicle-card__media,
.vehicle-card .vehicle-card__media {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.vehicle-card--catalog .vehicle-card__body,
.vehicle-card .vehicle-card__body {
  padding-top: 14px !important;
}

.vehicle-card--catalog .vehicle-card__chips,
.vehicle-card .vehicle-card__chips {
  margin-bottom: 6px !important;
}

/* Màn hình lớn */
@media (min-width: 1500px) {
  .vehicle-card--catalog .vehicle-card__visual,
  .vehicle-card .vehicle-card__visual {
    min-height: 270px !important;
  }

  .vehicle-card--catalog .vehicle-card__image,
  .vehicle-card .vehicle-card__image,
  .vehicle-card--catalog img.vehicle-card__image,
  .vehicle-card img.vehicle-card__image {
    height: 188px !important;
    max-height: 188px !important;
    transform: scale(1.2) !important;
  }
}

/* Tablet/mobile */
@media (max-width: 991px) {
  .vehicle-card--catalog .vehicle-card__visual,
  .vehicle-card .vehicle-card__visual {
    min-height: 205px !important;
    padding: 12px 10px 6px !important;
  }

  .vehicle-card--catalog .vehicle-card__image,
  .vehicle-card .vehicle-card__image,
  .vehicle-card--catalog img.vehicle-card__image,
  .vehicle-card img.vehicle-card__image {
    height: 138px !important;
    max-height: 138px !important;
    max-width: 95% !important;
    transform: scale(1.16) !important;
  }

  .vehicle-card--catalog .vehicle-card__body,
  .vehicle-card .vehicle-card__body {
    padding-top: 12px !important;
  }
}

/* Máy rất nhỏ */
@media (max-width: 575px) {
  .vehicle-card--catalog .vehicle-card__visual,
  .vehicle-card .vehicle-card__visual {
    min-height: 188px !important;
  }

  .vehicle-card--catalog .vehicle-card__image,
  .vehicle-card .vehicle-card__image,
  .vehicle-card--catalog img.vehicle-card__image,
  .vehicle-card img.vehicle-card__image {
    height: 126px !important;
    max-height: 126px !important;
    transform: scale(1.12) !important;
  }
}

/* ===== VEHICLE CARD SIZE BOOST v31 END ===== */
'@

$Current = $Current.TrimEnd() + "`r`n`r`n" + $Patch.Trim() + "`r`n"
[System.IO.File]::WriteAllText($CssPath, $Current, (New-Object System.Text.UTF8Encoding($false)))

# Cap nhat cache css
Get-ChildItem -Path $Root -Filter "*.html" -Recurse -File | ForEach-Object {
    $Html = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    $Updated = [regex]::Replace(
        $Html,
        'assets/css/styles\.css\?v=[^"''\s>]+',
        'assets/css/styles.css?v=20260731-vehicle-size-v31'
    )
    if ($Updated -ne $Html) {
        [System.IO.File]::WriteAllText($_.FullName, $Updated, (New-Object System.Text.UTF8Encoding($false)))
    }
}

Write-Host ""
Write-Host "HOAN TAT v31" -ForegroundColor Green
Write-Host "Da tang xe to hon va dong deu hon trong card san pham."
Write-Host "Mo GitHub Desktop -> Commit to main -> Push origin."

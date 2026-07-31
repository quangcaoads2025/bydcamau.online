$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

function Find-RepoRoot {
    $candidates = @(
        $PSScriptRoot,
        (Split-Path -Parent $PSScriptRoot),
        (Get-Location).Path
    ) | Select-Object -Unique

    foreach ($candidate in $candidates) {
        if ($candidate -and (Test-Path (Join-Path $candidate 'assets\css\styles.css'))) {
            return (Resolve-Path $candidate).Path
        }
    }

    throw 'Khong tim thay thu muc website. Hay chep ca 2 file cai dat vao Documents\GitHub\bydcamau.online roi chay lai.'
}

function Read-Utf8([string]$Path) {
    return [System.IO.File]::ReadAllText($Path, [System.Text.Encoding]::UTF8)
}

function Write-Utf8NoBom([string]$Path, [string]$Content) {
    $encoding = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($Path, $Content, $encoding)
}

function Replace-Exact([string]$Path, [string]$OldText, [string]$NewText) {
    if (-not (Test-Path $Path)) {
        Write-Host "Bo qua, khong tim thay: $Path" -ForegroundColor Yellow
        return
    }

    $content = Read-Utf8 $Path

    if ($content.Contains($OldText)) {
        $content = $content.Replace($OldText, $NewText)
        Write-Utf8NoBom $Path $content
        Write-Host "Da sua: $Path" -ForegroundColor Green
    }
    elseif ($content.Contains($NewText)) {
        Write-Host "Da co tieu de moi: $Path" -ForegroundColor Cyan
    }
    else {
        Write-Host "Khong tim thay tieu de can thay: $Path" -ForegroundColor Yellow
    }
}

$root = Find-RepoRoot
$cssPath = Join-Path $root 'assets\css\styles.css'
$indexPath = Join-Path $root 'index.html'
$aboutPath = Join-Path $root 'gioi-thieu\index.html'
$chargingPath = Join-Path $root 'tram-sac\index.html'

Write-Host "Website: $root" -ForegroundColor Cyan

Replace-Exact $indexPath 'Chọn mẫu xe phù hợp hành trình của bạn' 'Chọn mẫu xe phù hợp với hành trình'
Replace-Exact $indexPath 'Nhận ưu đãi đúng phiên bản bạn quan tâm' 'Ưu đãi đúng phiên bản bạn quan tâm'
Replace-Exact $indexPath 'Showroom hiện đại, hành trình dịch vụ liền mạch' 'Showroom hiện đại, dịch vụ liền mạch'
Replace-Exact $indexPath 'Thông tin nổi bật từ đại lý và BYD' 'Tin nổi bật từ đại lý và BYD'
Replace-Exact $aboutPath 'Trải nghiệm BYD chuyên nghiệp, rõ ràng và thuận tiện' 'Trải nghiệm BYD chuyên nghiệp và thuận tiện'
Replace-Exact $chargingPath 'Chủ động điểm sạc, an tâm mọi hành trình' 'Chủ động sạc, an tâm mọi hành trình'
Replace-Exact $chargingPath 'Chưa chắc phương án nào phù hợp?' 'Cần tư vấn phương án phù hợp?'

$start = '/* ===== MOBILE HEADING SYSTEM V27 START ===== */'
$end = '/* ===== MOBILE HEADING SYSTEM V27 END ===== */'

$block = @'
/* ===== MOBILE HEADING SYSTEM V27 START ===== */
@media (max-width: 768px) {
  :where(
    #vehicles .section-heading h2,
    #news .section-heading h2,
    #faq .section-heading h2,
    #technology .section-heading h2,
    #services .section-heading h2,
    #showroom .showroom-content h2,
    #khuyen-mai .offer-visual__content h2,
    .about-page-main .about-content h2,
    .charging-page-hero h1,
    .charging-map-layout .section-heading h2,
    .charging-support-card h2
  ) {
    max-width: 100%;
    text-wrap: balance;
    overflow-wrap: normal;
    word-break: normal;
    -webkit-hyphens: none;
    hyphens: none;
    letter-spacing: -.03em;
  }

  #vehicles .section-heading h2 {
    max-width: 20ch;
    margin: 8px 0 12px;
    font-size: clamp(1.58rem, 6.6vw, 1.84rem);
    line-height: 1.16;
  }

  #news .section-heading h2,
  #faq .section-heading h2 {
    max-width: 20ch;
    margin: 8px 0 13px;
    font-size: clamp(1.62rem, 6.8vw, 1.9rem);
    line-height: 1.15;
  }

  #technology .section-heading h2,
  #services .section-heading h2 {
    max-width: 20ch;
    font-size: clamp(1.58rem, 6.5vw, 1.84rem);
    line-height: 1.15;
  }

  #showroom .showroom-content h2 {
    max-width: 20ch;
    margin: 10px 0 14px;
    font-size: clamp(1.62rem, 6.8vw, 1.9rem);
    line-height: 1.13;
  }

  #khuyen-mai .offer-visual__content {
    right: 24px;
    left: 24px;
  }

  #khuyen-mai .offer-visual__content h2 {
    max-width: 20ch;
    margin: 9px 0 12px;
    font-size: clamp(1.62rem, 6.8vw, 1.9rem);
    line-height: 1.12;
  }

  .about-page-main .about-content h2 {
    max-width: 21ch;
    margin: 8px 0 13px;
    font-size: clamp(1.62rem, 6.8vw, 1.9rem);
    line-height: 1.13;
  }

  .charging-page-hero h1 {
    max-width: 17ch;
    margin: 11px 0 16px;
    font-size: clamp(2rem, 8.6vw, 2.38rem);
    line-height: 1.06;
    letter-spacing: -.04em;
  }

  .charging-map-layout .section-heading h2 {
    max-width: 20ch;
    margin: 8px 0 13px;
    font-size: clamp(1.66rem, 7vw, 1.96rem);
    line-height: 1.13;
  }

  .charging-support-card h2 {
    max-width: 21ch;
    margin: 9px 0 13px;
    font-size: clamp(1.5rem, 6.4vw, 1.78rem);
    line-height: 1.16;
  }

  #vehicles .section-heading p,
  #news .section-heading p,
  #faq .section-heading p,
  .about-page-main .about-content > p,
  .charging-map-layout .section-heading > p {
    font-size: .9rem;
    line-height: 1.62;
  }
}

@media (max-width: 390px) {
  #vehicles .section-heading h2,
  #news .section-heading h2,
  #faq .section-heading h2,
  #showroom .showroom-content h2,
  #khuyen-mai .offer-visual__content h2,
  .about-page-main .about-content h2,
  .charging-map-layout .section-heading h2 {
    font-size: 1.65rem;
  }

  .charging-page-hero h1 {
    font-size: 2rem;
  }

  .charging-support-card h2 {
    font-size: 1.5rem;
  }
}
/* ===== MOBILE HEADING SYSTEM V27 END ===== */
'@

$css = Read-Utf8 $cssPath

$patterns = @(
    '/\* ===== MOBILE HEADING SYSTEM V25 START ===== \*/.*?/\* ===== MOBILE HEADING SYSTEM V25 END ===== \*/',
    '/\* ===== MOBILE HEADING SYSTEM V26 START ===== \*/.*?/\* ===== MOBILE HEADING SYSTEM V26 END ===== \*/',
    [regex]::Escape($start) + '.*?' + [regex]::Escape($end)
)

foreach ($pattern in $patterns) {
    $css = [regex]::Replace(
        $css,
        $pattern,
        '',
        [System.Text.RegularExpressions.RegexOptions]::Singleline
    )
}

$css = $css.TrimEnd() + "`r`n`r`n" + $block.Trim() + "`r`n"
Write-Utf8NoBom $cssPath $css

Write-Host ''
Write-Host 'HOAN TAT.' -ForegroundColor Green
Write-Host 'GitHub Desktop se hien cac file thay doi:' -ForegroundColor Cyan
Write-Host '  assets/css/styles.css'
Write-Host '  index.html'
Write-Host '  gioi-thieu/index.html'
Write-Host '  tram-sac/index.html'
Write-Host ''
Write-Host 'Tiep theo: Commit to main, sau do Push origin.'

/**
 * Backend nhận lead cho website BYD Thành Công Cà Mau.
 *
 * Cài đặt:
 * 1. Tạo Google Sheet và sao chép SHEET_ID trong URL.
 * 2. Mở Extensions > Apps Script, dán toàn bộ file này.
 * 3. Sửa SHEET_ID và SHEET_NAME.
 * 4. Deploy > New deployment > Web app.
 *    Execute as: Me; Who has access: Anyone.
 * 5. Dán URL /exec vào formEndpoint trong assets/js/config.js.
 */

const SHEET_ID = 'PASTE_GOOGLE_SHEET_ID_HERE';
const SHEET_NAME = 'Leads';
const ALLOWED_ORIGIN_NOTE = 'bydthanhcong.vn';
const DUPLICATE_WINDOW_SECONDS = 30;

function doGet() {
  return jsonResponse_({ ok: true, service: 'BYD lead receiver' });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);

    const payload = parsePayload_(e);
    validatePayload_(payload);

    // Honeypot: bot thường tự điền trường ẩn này.
    if (String(payload.website || '').trim()) {
      return jsonResponse_({ ok: true });
    }

    const cache = CacheService.getScriptCache();
    const duplicateKey = `lead:${payload.phone}:${payload.intent || ''}`;
    if (cache.get(duplicateKey)) {
      return jsonResponse_({ ok: false, code: 'DUPLICATE', message: 'Yêu cầu vừa được ghi nhận.' });
    }

    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
    ensureHeader_(sheet);

    sheet.appendRow([
      new Date(),
      safeCell_(payload.name),
      safeCell_(payload.phone),
      safeCell_(payload.vehicle),
      safeCell_(payload.area),
      safeCell_(payload.intent),
      safeCell_(payload.pageUrl),
      safeCell_(payload.createdAt),
      safeCell_(ALLOWED_ORIGIN_NOTE),
      safeCell_(e && e.parameter ? JSON.stringify(e.parameter) : '')
    ]);

    cache.put(duplicateKey, '1', DUPLICATE_WINDOW_SECONDS);
    return jsonResponse_({ ok: true, message: 'Lead saved' });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ ok: false, code: 'SERVER_ERROR', message: String(error.message || error) });
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) throw new Error('EMPTY_REQUEST');
  try {
    return JSON.parse(e.postData.contents);
  } catch (_) {
    throw new Error('INVALID_JSON');
  }
}

function validatePayload_(payload) {
  if (!payload || typeof payload !== 'object') throw new Error('INVALID_PAYLOAD');
  const name = String(payload.name || '').trim();
  const phone = String(payload.phone || '').replace(/\D/g, '');
  const vehicle = String(payload.vehicle || '').trim();
  const area = String(payload.area || '').trim();

  if (name.length < 2 || name.length > 100) throw new Error('INVALID_NAME');
  if (!/^(0)(3|5|7|8|9)[0-9]{8}$/.test(phone)) throw new Error('INVALID_PHONE');
  if (!vehicle || vehicle.length > 100) throw new Error('INVALID_VEHICLE');
  if (!area || area.length > 100) throw new Error('INVALID_AREA');

  payload.name = name;
  payload.phone = phone;
  payload.vehicle = vehicle;
  payload.area = area;
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow([
    'Thời gian nhận', 'Họ tên', 'Số điện thoại', 'Dòng xe', 'Khu vực',
    'Nhu cầu', 'Trang gửi', 'Thời gian phía trình duyệt', 'Website', 'Tham số'
  ]);
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, 10).setFontWeight('bold');
}

function safeCell_(value) {
  const text = String(value == null ? '' : value).trim().slice(0, 1000);
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

# BYD Thành Công Cà Mau — Source Rebuild 2026

Website tĩnh được tái cấu trúc theo hướng **HTML semantic + CSS responsive + JavaScript theo trách nhiệm**, không phụ thuộc framework. Bản triển khai đã chứa sẵn CSS minified, SRI và Netlify security headers.

## Chạy thử trên máy

```bash
npm run build:css
npm run build:sri
npm run build:headers
npm run validate
npm run serve
```

Mở `http://localhost:8080`.

## Cấu trúc chính

```text
assets/css/styles.css            CSS nguồn dễ bảo trì
assets/css/styles.min.css        CSS minified dùng khi triển khai
assets/css/news-seo.css          Tệp tương thích cho URL tin tức cũ
assets/js/core.js                DOM, accessibility, format, utility
assets/js/config.js              Hotline, địa chỉ, form và cấu hình chung
assets/js/data-summary.js        Dữ liệu nhẹ dùng toàn website
assets/js/components.js          Header, footer, card, modal
assets/js/app.js                 Tương tác chung và trang chủ
assets/js/form-submit-final.js   Kiểm tra và gửi Google Forms
assets/js/vehicle.js             Trang chi tiết xe
assets/js/vehicle-data/          Dữ liệu riêng của từng mẫu xe
assets/js/news.js                Bộ lọc và phân trang tin tức
assets/js/article.js             Hành vi trang bài viết
assets/js/page.js                Trang giới thiệu, trạm sạc, pháp lý
tools/minify-css.mjs             Tạo CSS minified
tools/add-script-integrity.mjs   Cập nhật SRI cho JavaScript
tools/build-headers.mjs          Tạo CSP, HSTS, COOP và cache headers
tools/validate-site.mjs          Kiểm tra mã nguồn trước khi deploy
```

## Nguyên tắc chỉnh sửa

- Không chèn CSS vá ở cuối tệp. Sửa đúng selector trong nhóm chức năng tương ứng.
- Dùng biến trong `:root` để thay màu, khoảng cách, bán kính và typography.
- Đường dẫn tài nguyên nội bộ phải bắt đầu bằng `/assets/` để hoạt động trên mọi thư mục con.
- Không sửa giá xe trực tiếp trong HTML động. Cập nhật tại `data-summary.js` và tệp xe tương ứng.
- Thông tin liên hệ và Google Forms được quản lý tại `config.js`.
- Sau khi sửa CSS hoặc JavaScript, chạy lần lượt `npm run build:css`, `npm run build:sri`, `npm run build:headers`, rồi `npm run validate`.

## Responsive

- Desktop: lưới nội dung 3–4 cột, mega menu và bố cục xe hai cột.
- Tablet: lưới 2 cột, menu mobile, trang xe chuyển một cột.
- Mobile: card một cột, CTA cố định dưới màn hình, modal gần toàn màn hình và gallery cuộn ngang.

## Biểu mẫu

Biểu mẫu gửi trực tiếp đến Google Forms bằng POST qua iframe ẩn. Hệ thống có kiểm tra số điện thoại Việt Nam, bắt buộc đồng ý liên hệ, chống gửi lặp ngắn hạn và honeypot chống bot cơ bản.

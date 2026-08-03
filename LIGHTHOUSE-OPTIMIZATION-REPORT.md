# Báo cáo tối ưu Lighthouse v2.6

## Mục tiêu

Bản v2.6 xử lý trực tiếp các lỗi được ghi nhận trong báo cáo PageSpeed ngày 03/08/2026. Điểm đầu vào là:

- Hiệu suất: 100
- Hỗ trợ tiếp cận: 94
- Phương pháp hay nhất: 92
- SEO: 100

## Hạng mục đã sửa

### 1. Hình ảnh và LCP

- Tạo ảnh banner dọc AVIF 1200 px cho màn hình mật độ điểm ảnh cao.
- Tách preload banner theo mobile và desktop để tránh tải nhầm hai ảnh LCP.
- Bổ sung ảnh card xe 960 px và `srcset` 480/768/960.
- Bổ sung ảnh tin tức 1200 px cho thiết bị DPR cao.
- Chuẩn hóa `object-fit: cover` tại các khu vực cần cắt ảnh; không kéo giãn ảnh.
- Chuyển icon Zalo sang SVG để không bị báo ảnh độ phân giải thấp.
- Bổ sung logo responsive 360/520 px.

### 2. Hỗ trợ tiếp cận

- Tăng độ tương phản của chữ phụ, loại xe, phiên bản, nhãn giá, thông số và trạng thái phân trang.
- Tăng độ tương phản của màu trạng thái xanh.
- Dùng màu nhấn riêng cho nội dung trên nền tối.
- Thêm gạch chân cho liên kết nằm trong đoạn văn để không chỉ phân biệt bằng màu sắc.
- Giữ nguyên điều khiển bàn phím, `aria-live`, `focus-visible` và vùng bấm cảm ứng.

### 3. Phương pháp hay nhất và bảo mật

- Bỏ `unsafe-inline` khỏi CSP.
- Thêm SRI SHA-256 cho toàn bộ JavaScript nội bộ.
- Thêm Trusted Types policy và `require-trusted-types-for 'script'`.
- Thêm HSTS mạnh, COOP, X-Content-Type-Options và Permissions-Policy.
- Di chuyển toàn bộ CSS nội tuyến sang stylesheet chính.

### 4. CSS và cache

- Giữ `styles.css` làm tệp nguồn dễ bảo trì.
- Tạo `styles.min.css` dùng khi triển khai, giảm khoảng 13% dung lượng chưa nén.
- Thiết lập cache dài hạn cho CSS, JavaScript và hình ảnh đã gắn version.
- HTML luôn revalidate để nội dung mới được nhận ngay.

## Kiểm tra kỹ thuật

- 77 tệp HTML.
- 23 tệp JavaScript qua kiểm tra cú pháp.
- SRI của 633 thẻ script được đối chiếu với nội dung tệp.
- CSP không còn `unsafe-inline`.
- CSS nguồn và CSS minified không lỗi cấu trúc.
- Không thiếu tài nguyên nội bộ hoặc ứng viên `srcset`.
- Kiểm tra render mobile và desktop thành công.
- Kiểm tra hình ảnh trang chủ sau sửa: không còn sai tỷ lệ khung hình trong vòng kiểm tra cục bộ.

## Lưu ý khi đo lại

Điểm PageSpeed là phép đo phòng thí nghiệm và có thể dao động theo thời điểm, mạng, cache CDN và phiên bản Lighthouse. Sau khi Netlify deploy xong, cần chờ cache cập nhật rồi đo lại URL thật. Bản v2.6 đã xử lý các lỗi có điểm trừ được nêu trong báo cáo đầu vào; không dùng thủ thuật che audit hoặc CSS vá chồng lớp.

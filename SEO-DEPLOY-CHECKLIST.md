# BYD Cà Mau – SEO & Core Web Vitals patch

Ngày hoàn tất: 2026-08-01

## Đã sửa trực tiếp trong mã nguồn

- Xóa `Product` schema khỏi danh sách xe ở trang chủ; danh sách chỉ dùng `Vehicle`.
- Trang xe có giá dùng `Product + Vehicle` kèm `Offer`; BYD SEALION 5 chưa có giá chỉ dùng `Vehicle`, không tạo giá hoặc đánh giá giả.
- Tạo trang danh mục tĩnh `/san-pham/` với H1, nội dung, liên kết crawlable và ItemList.
- Sửa trang chủ còn đúng một H1 chứa từ khóa BYD Cà Mau.
- Chuẩn hóa sitemap XML, robots.txt, canonical và trang chuyển hướng/noindex.
- Noindex 22 trang tỉnh ngoài Cà Mau có nội dung mẫu gần trùng lặp; giữ lại các trang Cà Mau.
- Tối ưu ảnh hero/card, thêm `srcset`, kích thước ảnh chính xác và lazy-load ảnh ngoài màn hình.
- Trì hoãn GTM đến tương tác đầu tiên hoặc 5 giây; giảm công việc JavaScript trên đường tải quan trọng.
- Giảm forced reflow của header bằng `requestAnimationFrame`.
- Tăng tương phản văn bản và sửa tỷ lệ logo.
- Tạo `data-summary.js` nhẹ hơn cho trang chủ/danh mục; trang chi tiết vẫn dùng dữ liệu đầy đủ.

## Sau khi tải website lên

1. Xóa toàn bộ bản cũ trên hosting/GitHub Pages rồi tải toàn bộ thư mục mới lên để không sót file cũ.
2. Mở Google Search Console → Sơ đồ trang web → gửi lại `https://bydcamau.online/sitemap.xml`.
3. Kiểm tra URL trang chủ và các trang xe, sau đó chọn “Yêu cầu lập chỉ mục”.
4. Trong báo cáo “Đoạn trích về sản phẩm”, bấm “Xác thực bản sửa lỗi”. Google cần thời gian thu thập lại nên cảnh báo không biến mất ngay.
5. Nếu đang dùng GitHub Pages, `_headers` không được áp dụng. Muốn cache dài, HSTS và CSP thực sự hoạt động, đặt Cloudflare trước tên miền hoặc chuyển sang nền tảng hỗ trợ response headers.
6. Tiếp tục đăng nội dung thực tế: ảnh showroom, bàn giao xe, lái thử, câu hỏi khách hàng và bài so sánh do đội ngũ tại Cà Mau biên soạn.

## Lưu ý

Không tạo `review` hoặc `aggregateRating` giả. Chỉ thêm đánh giá có nguồn thật và hiển thị công khai trên chính trang sản phẩm.

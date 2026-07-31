'use strict';
/* ==================== CẤU HÌNH THỨ TỰ XE ====================
   CHỈ CẦN ĐỔI CÁC CON SỐ 1–11 Ở KHỐI NÀY.
   Số nhỏ hiển thị trước; số lớn hiển thị sau.
   Không dùng trùng số để tránh thứ tự khó kiểm soát.
================================================================ */
const BYD_VEHICLE_ORDER = Object.freeze({
  "byd-dolphin": 1, // BYD DOLPHIN
  "byd-m6": 2, // BYD M6
  "byd-atto-2": 3, // BYD ATTO 2
  "byd-sealion-5": 4, // BYD SEALION 5
  "byd-seal-5": 5, // BYD SEAL 5
  "byd-sealion-6": 6, // BYD SEALION 6
  "byd-m9": 7, // BYD M9
  "byd-atto-3": 8, // BYD ATTO 3
  "byd-seal": 9, // BYD SEAL
  "byd-han": 10, // BYD HAN
  "byd-sealion-8": 11, // BYD SEALION 8
});
/* ================= HẾT CẤU HÌNH THỨ TỰ XE ================= */


window.BYD_DATA = Object.freeze({
  "vehicles": [
    {
      "slug": "byd-sealion-5",
      "name": "BYD SEALION 5",
      "displayOrder": BYD_VEHICLE_ORDER["byd-sealion-5"],
      "segment": "SUV",
      "powertrain": "DM-i",
      "menuFeatured": true,
      "badges": [
        "SUV",
        "DM-i"
      ],
      "price": null,
      "priceLabel": "Liên hệ",
      "image": "assets/images/vehicles/byd-sealion-5/card.webp",
      "shortDescription": "BYD SEALION 5 DM-i là sự kết hợp hoàn hảo giữa phong cách và sức mạnh. Ngoại hình rộng rãi, vững chãi, lấy cảm hứng từ ngôn ngữ thiết kế đặc trưng “Dragon Face” của BYD, mang đến cảm giác an toàn, hiện đại và luôn sẵn sàng đồng hành cùng mọi kế hoạch của gia đ",
      "tagline": "Thiết kế phù hợp với phong cách sống của gia đình bạn",
      "availability": "Đang nhận thông tin sản phẩm",
      "highlights": [
        "Khoảng 1.015 km WLTP",
        "Khoảng 85 km thuần điện",
        "Khoang hành lý đến 1.410 lít",
        "V2L"
      ],
      "cardHighlights": [
        "Khoảng 1.015 km",
        "Khoảng 85 km EV",
        "Khoang hành lý 1.410 lít"
      ],
      "specGroups": [],
      "sections": {
        "overview": {
          "title": "Thiết kế phù hợp với phong cách sống của gia đình bạn",
          "text": "BYD SEALION 5 DM-i là sự kết hợp hoàn hảo giữa phong cách và sức mạnh. Ngoại hình rộng rãi, vững chãi, lấy cảm hứng từ ngôn ngữ thiết kế đặc trưng “Dragon Face” của BYD, mang đến cảm giác an toàn, hiện đại và luôn sẵn sàng đồng hành cùng mọi kế hoạch của gia đình bạn.",
          "image": "assets/images/vehicles/byd-sealion-5/source/18-byd-sealion5-dmi-safety-01-l-scaled.webp"
        },
        "exterior": {
          "title": "Kết nối thông minh & giải trí hiện đại",
          "text": "Tận hưởng khả năng kết nối liền mạch với 4G tích hợp và dịch vụ đám mây BYD thông qua ứng dụng BYD APP. Điều khiển giọng nói thông minh (“Hi, BYD”) giúp mọi hành trình trở nên nhẹ nhàng và tiện lợi hơn, trong khi Android Auto và Apple CarPlay giữ bạn luôn kết nối mọi lúc mọi nơi.",
          "image": "assets/images/vehicles/byd-sealion-5/source/08-01-scaled.webp"
        },
        "interior": {
          "title": "Không gian tận hưởng sự thoải mái",
          "text": "Khu vực bảng điều khiển trung tâm sở hữu thiết kế “nổi” đầy tinh tế, kết hợp hài hòa giữa thẩm mỹ và tính tiện dụng. Không gian lưu trữ rộng rãi cùng màn hình cảm ứng lớn, dễ thao tác mang đến trải nghiệm sử dụng tối ưu và hành trình lái mượt mà trên SEALION 5 DM-i Super Hybrid SUV.",
          "image": "assets/images/vehicles/byd-sealion-5/source/09-byd-sealion5-dmi-interior-02-l.webp"
        },
        "performance": {
          "title": "Đèn pha LED chiếu sáng hiện đại",
          "text": "BYD SEALION 5 DM-i được trang bị hệ thống đèn pha full-LED giúp chiếu sáng rõ ràng mọi cung đường phía trước, đi kèm dải đèn LED ban ngày thiết kế thanh mảnh.",
          "image": "assets/images/vehicles/byd-sealion-5/source/02-byd-sealion5-dmi-exterior-01-l-scaled.webp"
        },
        "safety": {
          "title": "Thiết kế phù hợp với phong cách sống của gia đình bạn",
          "text": "BYD SEALION 5 DM-i là sự kết hợp hoàn hảo giữa phong cách và sức mạnh. Ngoại hình rộng rãi, vững chãi, lấy cảm hứng từ ngôn ngữ thiết kế đặc trưng “Dragon Face” của BYD, mang đến cảm giác an toàn, hiện đại và luôn sẵn sàng đồng hành cùng mọi kế hoạch của gia đình bạn.",
          "image": "assets/images/vehicles/byd-sealion-5/source/18-byd-sealion5-dmi-safety-01-l-scaled.webp"
        }
      },
      "officialUrl": "https://www.byd.com/vn",
      "media": [
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/01-byd-sealion5-dmi-1stbanner-l-scaled.webp",
          "kind": "hero",
          "alt": "BYD Sealion 5 DM-i - hình 1"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/02-byd-sealion5-dmi-exterior-01-l-scaled.webp",
          "kind": "technology",
          "alt": "BYD Sealion 5 DM-i - hình 2"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/03-byd-sealion5-dmi-exterior-02-l.webp",
          "kind": "technology",
          "alt": "BYD Sealion 5 DM-i - hình 3"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/04-byd-sealion5-dmi-exterior-03-xl.webp",
          "kind": "technology",
          "alt": "BYD Sealion 5 DM-i - hình 4"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/05-byd-sealion5-dmi-exterior-04-l.webp",
          "kind": "technology",
          "alt": "BYD Sealion 5 DM-i - hình 5"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/06-byd-sealion5-dmi-exterior-05-l.webp",
          "kind": "technology",
          "alt": "BYD Sealion 5 DM-i - hình 6"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/07-byd-sealion5-dmi-exterior-06-l-scaled.webp",
          "kind": "technology",
          "alt": "BYD Sealion 5 DM-i - hình 7"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/08-01-scaled.webp",
          "kind": "detail",
          "alt": "BYD Sealion 5 DM-i - hình 8"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/09-byd-sealion5-dmi-interior-02-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 5 DM-i - hình 9"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/10-byd-sealion5-dmi-interior-03-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 5 DM-i - hình 10"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/11-byd-sealion5-dmi-interior-04-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 5 DM-i - hình 11"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/12-byd-sealion5-dmi-interior-05-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 5 DM-i - hình 12"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/13-byd-sealion5-dmi-interior-06-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 5 DM-i - hình 13"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/14-byd-sealion5-dmi-interior-07-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 5 DM-i - hình 14"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/15-byd-sealion5-dmi-interior-08-l-scaled.webp",
          "kind": "interior",
          "alt": "BYD Sealion 5 DM-i - hình 15"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/16-byd-sealion5-dmi-technology-01-l-scaled.webp",
          "kind": "technology",
          "alt": "BYD Sealion 5 DM-i - hình 16"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/17-byd-sealion5-dmi-performance-01-l-scaled.webp",
          "kind": "technology",
          "alt": "BYD Sealion 5 DM-i - hình 17"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/18-byd-sealion5-dmi-safety-01-l-scaled.webp",
          "kind": "safety",
          "alt": "BYD Sealion 5 DM-i - hình 18"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/19-byd-sealion5-dmi-connectivity-01-l-scaled.webp",
          "kind": "technology",
          "alt": "BYD Sealion 5 DM-i - hình 19"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-5/source/20-byd-sealion5-dmi-v2l-01-l-scaled.webp",
          "kind": "charging",
          "alt": "BYD Sealion 5 DM-i - hình 20"
        }
      ],
      "galleryCount": 20,
      "heroMedia": {
        "src": "assets/images/vehicles/byd-sealion-5/source/01-byd-sealion5-dmi-1stbanner-l-scaled.webp",
        "kind": "hero",
        "alt": "BYD Sealion 5 DM-i - hình 1"
      },
      "gallery": [
        "assets/images/vehicles/byd-sealion-5/source/01-byd-sealion5-dmi-1stbanner-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-5/source/02-byd-sealion5-dmi-exterior-01-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-5/source/03-byd-sealion5-dmi-exterior-02-l.webp",
        "assets/images/vehicles/byd-sealion-5/source/04-byd-sealion5-dmi-exterior-03-xl.webp",
        "assets/images/vehicles/byd-sealion-5/source/05-byd-sealion5-dmi-exterior-04-l.webp",
        "assets/images/vehicles/byd-sealion-5/source/06-byd-sealion5-dmi-exterior-05-l.webp",
        "assets/images/vehicles/byd-sealion-5/source/07-byd-sealion5-dmi-exterior-06-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-5/source/08-01-scaled.webp",
        "assets/images/vehicles/byd-sealion-5/source/09-byd-sealion5-dmi-interior-02-l.webp",
        "assets/images/vehicles/byd-sealion-5/source/10-byd-sealion5-dmi-interior-03-l.webp",
        "assets/images/vehicles/byd-sealion-5/source/11-byd-sealion5-dmi-interior-04-l.webp",
        "assets/images/vehicles/byd-sealion-5/source/12-byd-sealion5-dmi-interior-05-l.webp",
        "assets/images/vehicles/byd-sealion-5/source/13-byd-sealion5-dmi-interior-06-l.webp",
        "assets/images/vehicles/byd-sealion-5/source/14-byd-sealion5-dmi-interior-07-l.webp",
        "assets/images/vehicles/byd-sealion-5/source/15-byd-sealion5-dmi-interior-08-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-5/source/16-byd-sealion5-dmi-technology-01-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-5/source/17-byd-sealion5-dmi-performance-01-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-5/source/18-byd-sealion5-dmi-safety-01-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-5/source/19-byd-sealion5-dmi-connectivity-01-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-5/source/20-byd-sealion5-dmi-v2l-01-l-scaled.webp"
      ],
      "galleryFallbacks": [],
      "storyBlocks": [
        {
          "title": "Thiết kế phù hợp với phong cách sống của gia đình bạn",
          "text": "BYD SEALION 5 DM-i là sự kết hợp hoàn hảo giữa phong cách và sức mạnh. Ngoại hình rộng rãi, vững chãi, lấy cảm hứng từ ngôn ngữ thiết kế đặc trưng “Dragon Face” của BYD, mang đến cảm giác an toàn, hiện đại và luôn sẵn sàng đồng hành cùng mọi kế hoạch của gia đình bạn.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/18-byd-sealion5-dmi-safety-01-l-scaled.webp",
            "kind": "safety",
            "alt": "BYD Sealion 5 DM-i - hình 18"
          }
        },
        {
          "title": "Đèn pha LED chiếu sáng hiện đại",
          "text": "BYD SEALION 5 DM-i được trang bị hệ thống đèn pha full-LED giúp chiếu sáng rõ ràng mọi cung đường phía trước, đi kèm dải đèn LED ban ngày thiết kế thanh mảnh.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/02-byd-sealion5-dmi-exterior-01-l-scaled.webp",
            "kind": "technology",
            "alt": "BYD Sealion 5 DM-i - hình 2"
          }
        },
        {
          "title": "Đèn hậu LED đặc trưng",
          "text": "Dải đèn LED kéo dài toàn chiều rộng kết hợp cùng cụm đèn hậu full-LED thiết kế góc cạnh sắc nét tạo nên diện mạo đầy phong cách. Cánh lướt gió tích hợp trên nóc xe càng làm nổi bật thiết kế năng động và hiện đại của SEALION 5 DM-i.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/03-byd-sealion5-dmi-exterior-02-l.webp",
            "kind": "technology",
            "alt": "BYD Sealion 5 DM-i - hình 3"
          }
        },
        {
          "title": "Dáng xe khác biệt, dễ nhận diện",
          "text": "Thiết kế thân xe của SEALION 5 DM-i nổi bật với đường nét hiện đại, kết hợp cùng phần vòm bánh xe khỏe khoắn, tạo nên tổng thể mạnh mẽ. Trụ D phối màu tương phản mang đến hiệu ứng “mui xe lơ lửng” độc đáo, giúp chiếc xe trở nên khác biệt và thu hút ở mọi góc nhìn.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/04-byd-sealion5-dmi-exterior-03-xl.webp",
            "kind": "technology",
            "alt": "BYD Sealion 5 DM-i - hình 4"
          }
        },
        {
          "title": "Mâm hợp kim 18 inch hai tông màu",
          "text": "BYD SEALION 5 DM-i được trang bị bộ mâm 18 inch hai tông màu đầy ấn tượng. Thiết kế này không chỉ tôn lên dáng vẻ thể thao mà còn mang lại khả năng vận hành ổn định cùng độ bám đường vượt trội.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/05-byd-sealion5-dmi-exterior-04-l.webp",
            "kind": "technology",
            "alt": "BYD Sealion 5 DM-i - hình 5"
          }
        },
        {
          "title": "Không gian tận hưởng sự thoải mái",
          "text": "Khu vực bảng điều khiển trung tâm sở hữu thiết kế “nổi” đầy tinh tế, kết hợp hài hòa giữa thẩm mỹ và tính tiện dụng. Không gian lưu trữ rộng rãi cùng màn hình cảm ứng lớn, dễ thao tác mang đến trải nghiệm sử dụng tối ưu và hành trình lái mượt mà trên SEALION 5 DM-i Super Hybrid SUV.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/09-byd-sealion5-dmi-interior-02-l.webp",
            "kind": "interior",
            "alt": "BYD Sealion 5 DM-i - hình 9"
          }
        },
        {
          "title": "Vận hành êm ái, tự tin",
          "text": "Cụm điều khiển cần số thiết kế tinh xảo như một món trang sức, góp phần nâng tầm cảm giác cao cấp cho SEALION 5 DM-i, mang lại khả năng điều khiển chính xác và mượt mà.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/06-byd-sealion5-dmi-exterior-05-l.webp",
            "kind": "technology",
            "alt": "BYD Sealion 5 DM-i - hình 6"
          }
        },
        {
          "title": "Hiển thị thông tin mà không rời mắt khỏi đường",
          "text": "Màn hình đồng hồ kỹ thuật số LCD 8,8 inch hiển thị rõ ràng các thông tin quan trọng cho người lái như tốc độ, mức pin và phạm vi hoạt động của SEALION 5 DM-i.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/10-byd-sealion5-dmi-interior-03-l.webp",
            "kind": "interior",
            "alt": "BYD Sealion 5 DM-i - hình 10"
          }
        },
        {
          "title": "Tùy chỉnh khoang lái dễ dàng",
          "text": "Điều chỉnh điều hòa chỉ với thao tác ba ngón tay trên màn hình cảm ứng đa điểm 12,8 inch. Vô-lăng đa chức năng hỗ trợ điều khiển hành trình và giải trí, giúp bạn thao tác thuận tiện mà không cần rời tay khỏi tay lái.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/11-byd-sealion5-dmi-interior-04-l.webp",
            "kind": "interior",
            "alt": "BYD Sealion 5 DM-i - hình 11"
          }
        },
        {
          "title": "Không gian rộng rãi cho mọi hành khách",
          "text": "SEALION 5 DM-i mang đến khoảng để chân rộng rãi cùng sàn xe phẳng, giúp ba hành khách phía sau ngồi thoải mái. Không gian đủ rộng để người lớn tận hưởng hành trình dễ chịu, ngay cả trên những chuyến đi dài.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/07-byd-sealion5-dmi-exterior-06-l-scaled.webp",
            "kind": "technology",
            "alt": "BYD Sealion 5 DM-i - hình 7"
          }
        },
        {
          "title": "Ghế ngồi cao cấp, thư giãn tối đa",
          "text": "Ghế bọc da thuần chay thân thiện môi trường, được thiết kế riêng với khả năng chống mài mòn và chống bám bẩn tốt. Ghế lái chỉnh điện 6 hướng và có sưởi, trong khi ghế phụ phía trước chỉnh điện 4 hướng và tích hợp sưởi.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/12-byd-sealion5-dmi-interior-05-l.webp",
            "kind": "interior",
            "alt": "BYD Sealion 5 DM-i - hình 12"
          }
        },
        {
          "title": "Khoang hành lý linh hoạt",
          "text": "Với dung tích 463 lít, khoang hành lý của SEALION 5 DM-i đủ rộng để chứa vali và đồ mua sắm, đáp ứng nhu cầu cho mọi chuyến đi.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/13-byd-sealion5-dmi-interior-06-l.webp",
            "kind": "interior",
            "alt": "BYD Sealion 5 DM-i - hình 13"
          }
        },
        {
          "title": "Mở rộng không gian khi cần thiết",
          "text": "Hàng ghế sau gập theo tỷ lệ 40:60 giúp mở rộng dung tích khoang hành lý của SEALION 5 DM-i lên đến 1.410 lít. Thiết kế sàn phẳng phía sau giúp việc xếp dỡ hành lý cồng kềnh hay vật dụng kích thước lớn trở nên dễ dàng và thuận tiện hơn.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/14-byd-sealion5-dmi-interior-07-l.webp",
            "kind": "interior",
            "alt": "BYD Sealion 5 DM-i - hình 14"
          }
        },
        {
          "title": "BYD Super Hybrid với công nghệ DM",
          "text": "Sức mạnh vận hành của SEALION 5 DM-i đến từ hệ truyền động BYD Super Hybrid ứng dụng công nghệ DM, kết hợp trải nghiệm lái thuần điện êm ái cùng sự an tâm và khả năng di chuyển đường dài từ hệ thống hybrid cắm sạc sử dụng động cơ xăng tiên tiến.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/16-byd-sealion5-dmi-technology-01-l-scaled.webp",
            "kind": "technology",
            "alt": "BYD Sealion 5 DM-i - hình 16"
          }
        },
        {
          "title": "Phạm vi hoạt động lên đến ~1.015 km",
          "text": "BYD SEALION 5 DM-i được trang bị hệ thống BYD Super Hybrid đột phá với công nghệ DM. “DM” là viết tắt của Dual Mode (hai chế độ), cho phép xe vận hành linh hoạt theo hai cách: như một chiếc hybrid kết hợp điện và nhiên liệu, hoặc như một xe thuần điện với phạm vi di chuyển lên đến ~85 km nhờ hai pin Blade Battery trên SEALION 5 DM-i.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/17-byd-sealion5-dmi-performance-01-l-scaled.webp",
            "kind": "technology",
            "alt": "BYD Sealion 5 DM-i - hình 17"
          }
        },
        {
          "title": "Bảo vệ trọn vẹn cho mọi hành trình",
          "text": "BYD SEALION 5 DM-i được trang bị đầy đủ các công nghệ hỗ trợ lái tiên tiến, bao gồm: Kiểm soát hành trình thích ứng (Adaptive Cruise Control), Kiểm soát hành trình thông minh (Intelligent Cruise Control), Hỗ trợ giữ làn đường, Cảnh báo điểm mù, Kiểm soát tốc độ thông minh, Cảnh báo chệch làn, cùng hệ thống cảnh báo va chạm phía trước và phía sau.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/18-byd-sealion5-dmi-safety-01-l-scaled.webp",
            "kind": "safety",
            "alt": "BYD Sealion 5 DM-i - hình 18"
          }
        },
        {
          "title": "Kết nối thông minh & giải trí hiện đại",
          "text": "Tận hưởng khả năng kết nối liền mạch với 4G tích hợp và dịch vụ đám mây BYD thông qua ứng dụng BYD APP. Điều khiển giọng nói thông minh (“Hi, BYD”) giúp mọi hành trình trở nên nhẹ nhàng và tiện lợi hơn, trong khi Android Auto và Apple CarPlay giữ bạn luôn kết nối mọi lúc mọi nơi.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/08-01-scaled.webp",
            "kind": "detail",
            "alt": "BYD Sealion 5 DM-i - hình 8"
          }
        },
        {
          "title": "Nguồn điện di động mọi lúc, mọi nơi",
          "text": "Tính năng Vehicle-to-Load (V2L) trên SEALION 5 DM-i biến chiếc xe của bạn thành một nguồn điện di động linh hoạt, cho phép sạc và cấp nguồn cho các thiết bị, đồ gia dụng hay gadget.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-5/source/19-byd-sealion5-dmi-connectivity-01-l-scaled.webp",
            "kind": "technology",
            "alt": "BYD Sealion 5 DM-i - hình 19"
          }
        }
      ],
      "allContentBlocks": [
        {
          "title": "Thiết kế phù hợp với phong cách sống của gia đình bạn",
          "text": "BYD SEALION 5 DM-i là sự kết hợp hoàn hảo giữa phong cách và sức mạnh. Ngoại hình rộng rãi, vững chãi, lấy cảm hứng từ ngôn ngữ thiết kế đặc trưng “Dragon Face” của BYD, mang đến cảm giác an toàn, hiện đại và luôn sẵn sàng đồng hành cùng mọi kế hoạch của gia đình bạn."
        },
        {
          "title": "Đèn pha LED chiếu sáng hiện đại",
          "text": "BYD SEALION 5 DM-i được trang bị hệ thống đèn pha full-LED giúp chiếu sáng rõ ràng mọi cung đường phía trước, đi kèm dải đèn LED ban ngày thiết kế thanh mảnh."
        },
        {
          "title": "Đèn hậu LED đặc trưng",
          "text": "Dải đèn LED kéo dài toàn chiều rộng kết hợp cùng cụm đèn hậu full-LED thiết kế góc cạnh sắc nét tạo nên diện mạo đầy phong cách. Cánh lướt gió tích hợp trên nóc xe càng làm nổi bật thiết kế năng động và hiện đại của SEALION 5 DM-i."
        },
        {
          "title": "Dáng xe khác biệt, dễ nhận diện",
          "text": "Thiết kế thân xe của SEALION 5 DM-i nổi bật với đường nét hiện đại, kết hợp cùng phần vòm bánh xe khỏe khoắn, tạo nên tổng thể mạnh mẽ. Trụ D phối màu tương phản mang đến hiệu ứng “mui xe lơ lửng” độc đáo, giúp chiếc xe trở nên khác biệt và thu hút ở mọi góc nhìn."
        },
        {
          "title": "Mâm hợp kim 18 inch hai tông màu",
          "text": "BYD SEALION 5 DM-i được trang bị bộ mâm 18 inch hai tông màu đầy ấn tượng. Thiết kế này không chỉ tôn lên dáng vẻ thể thao mà còn mang lại khả năng vận hành ổn định cùng độ bám đường vượt trội."
        },
        {
          "title": "Không gian tận hưởng sự thoải mái",
          "text": "Khu vực bảng điều khiển trung tâm sở hữu thiết kế “nổi” đầy tinh tế, kết hợp hài hòa giữa thẩm mỹ và tính tiện dụng. Không gian lưu trữ rộng rãi cùng màn hình cảm ứng lớn, dễ thao tác mang đến trải nghiệm sử dụng tối ưu và hành trình lái mượt mà trên SEALION 5 DM-i Super Hybrid SUV."
        },
        {
          "title": "Vận hành êm ái, tự tin",
          "text": "Cụm điều khiển cần số thiết kế tinh xảo như một món trang sức, góp phần nâng tầm cảm giác cao cấp cho SEALION 5 DM-i, mang lại khả năng điều khiển chính xác và mượt mà."
        },
        {
          "title": "Hiển thị thông tin mà không rời mắt khỏi đường",
          "text": "Màn hình đồng hồ kỹ thuật số LCD 8,8 inch hiển thị rõ ràng các thông tin quan trọng cho người lái như tốc độ, mức pin và phạm vi hoạt động của SEALION 5 DM-i."
        },
        {
          "title": "Tùy chỉnh khoang lái dễ dàng",
          "text": "Điều chỉnh điều hòa chỉ với thao tác ba ngón tay trên màn hình cảm ứng đa điểm 12,8 inch. Vô-lăng đa chức năng hỗ trợ điều khiển hành trình và giải trí, giúp bạn thao tác thuận tiện mà không cần rời tay khỏi tay lái."
        },
        {
          "title": "Không gian rộng rãi cho mọi hành khách",
          "text": "SEALION 5 DM-i mang đến khoảng để chân rộng rãi cùng sàn xe phẳng, giúp ba hành khách phía sau ngồi thoải mái. Không gian đủ rộng để người lớn tận hưởng hành trình dễ chịu, ngay cả trên những chuyến đi dài."
        },
        {
          "title": "Ghế ngồi cao cấp, thư giãn tối đa",
          "text": "Ghế bọc da thuần chay thân thiện môi trường, được thiết kế riêng với khả năng chống mài mòn và chống bám bẩn tốt. Ghế lái chỉnh điện 6 hướng và có sưởi, trong khi ghế phụ phía trước chỉnh điện 4 hướng và tích hợp sưởi."
        },
        {
          "title": "Khoang hành lý linh hoạt",
          "text": "Với dung tích 463 lít, khoang hành lý của SEALION 5 DM-i đủ rộng để chứa vali và đồ mua sắm, đáp ứng nhu cầu cho mọi chuyến đi."
        },
        {
          "title": "Mở rộng không gian khi cần thiết",
          "text": "Hàng ghế sau gập theo tỷ lệ 40:60 giúp mở rộng dung tích khoang hành lý của SEALION 5 DM-i lên đến 1.410 lít. Thiết kế sàn phẳng phía sau giúp việc xếp dỡ hành lý cồng kềnh hay vật dụng kích thước lớn trở nên dễ dàng và thuận tiện hơn."
        },
        {
          "title": "BYD Super Hybrid với công nghệ DM",
          "text": "Sức mạnh vận hành của SEALION 5 DM-i đến từ hệ truyền động BYD Super Hybrid ứng dụng công nghệ DM, kết hợp trải nghiệm lái thuần điện êm ái cùng sự an tâm và khả năng di chuyển đường dài từ hệ thống hybrid cắm sạc sử dụng động cơ xăng tiên tiến."
        },
        {
          "title": "Phạm vi hoạt động lên đến ~1.015 km",
          "text": "BYD SEALION 5 DM-i được trang bị hệ thống BYD Super Hybrid đột phá với công nghệ DM. “DM” là viết tắt của Dual Mode (hai chế độ), cho phép xe vận hành linh hoạt theo hai cách: như một chiếc hybrid kết hợp điện và nhiên liệu, hoặc như một xe thuần điện với phạm vi di chuyển lên đến ~85 km nhờ hai pin Blade Battery trên SEALION 5 DM-i."
        },
        {
          "title": "Bảo vệ trọn vẹn cho mọi hành trình",
          "text": "BYD SEALION 5 DM-i được trang bị đầy đủ các công nghệ hỗ trợ lái tiên tiến, bao gồm: Kiểm soát hành trình thích ứng (Adaptive Cruise Control), Kiểm soát hành trình thông minh (Intelligent Cruise Control), Hỗ trợ giữ làn đường, Cảnh báo điểm mù, Kiểm soát tốc độ thông minh, Cảnh báo chệch làn, cùng hệ thống cảnh báo va chạm phía trước và phía sau."
        },
        {
          "title": "Kết nối thông minh & giải trí hiện đại",
          "text": "Tận hưởng khả năng kết nối liền mạch với 4G tích hợp và dịch vụ đám mây BYD thông qua ứng dụng BYD APP. Điều khiển giọng nói thông minh (“Hi, BYD”) giúp mọi hành trình trở nên nhẹ nhàng và tiện lợi hơn, trong khi Android Auto và Apple CarPlay giữ bạn luôn kết nối mọi lúc mọi nơi."
        },
        {
          "title": "Nguồn điện di động mọi lúc, mọi nơi",
          "text": "Tính năng Vehicle-to-Load (V2L) trên SEALION 5 DM-i biến chiếc xe của bạn thành một nguồn điện di động linh hoạt, cho phép sạc và cấp nguồn cho các thiết bị, đồ gia dụng hay gadget."
        }
      ],
      "lastUpdated": "31/07/2026",
      "variants": [
        {
          "name": "SEALION 5 DM-i",
          "priceLabel": "Liên hệ",
          "note": "Giá chưa công bố trong dữ liệu nguồn",
          "highlights": [
            "DM-i Super Hybrid",
            "SUV 5 chỗ",
            "V2L"
          ]
        }
      ],
      "specs": [
        {
          "label": "Phạm vi hoạt động kết hợp theo tiêu chuẩn WLTP",
          "value": "~1.015 km"
        },
        {
          "label": "Phạm vi di chuyển thuần điện",
          "value": "~85 km"
        },
        {
          "label": "Khi gập hàng ghế sau",
          "value": "Khoang hành lý 1410L"
        }
      ],
      "heroImage": "assets/images/vehicles/byd-sealion-5/source/01-byd-sealion5-dmi-1stbanner-l-scaled.webp"
    },
    {
      "slug": "byd-seal-5",
      "name": "BYD SEAL 5",
      "displayOrder": BYD_VEHICLE_ORDER["byd-seal-5"],
      "segment": "Sedan",
      "powertrain": "DM-i",
      "menuFeatured": true,
      "badges": [
        "Sedan",
        "DM-i"
      ],
      "price": 696000000,
      "priceLabel": "696.000.000đ",
      "image": "assets/images/vehicles/byd-seal-5/card.webp",
      "heroImage": "assets/images/vehicles/byd-seal-5/source/01-seal-5-dmi-1-1-scaled.webp",
      "gallery": [
        "assets/images/vehicles/byd-seal-5/source/01-seal-5-dmi-1-1-scaled.webp",
        "assets/images/vehicles/byd-seal-5/source/02-mau-sealion-1.webp",
        "assets/images/vehicles/byd-seal-5/source/03-mau-sealion-2.webp",
        "assets/images/vehicles/byd-seal-5/source/04-mau-sealion-3.webp",
        "assets/images/vehicles/byd-seal-5/source/05-seal-5-dmi-2-1-scaled.webp",
        "assets/images/vehicles/byd-seal-5/source/06-seal-5-dmi-3-scaled.webp",
        "assets/images/vehicles/byd-seal-5/source/07-seal-5-dmi-4.webp",
        "assets/images/vehicles/byd-seal-5/source/08-rear-pc.webp",
        "assets/images/vehicles/byd-seal-5/source/09-luggage-pc.webp",
        "assets/images/vehicles/byd-seal-5/source/10-noi-that-seal-5-scaled.webp",
        "assets/images/vehicles/byd-seal-5/source/11-can-so-seal-5-scaled.webp",
        "assets/images/vehicles/byd-seal-5/source/12-interior-pc.webp",
        "assets/images/vehicles/byd-seal-5/source/13-seal-5-dmi-5-scaled.webp",
        "assets/images/vehicles/byd-seal-5/source/14-pin-seal-5-scaled.webp",
        "assets/images/vehicles/byd-seal-5/source/15-seal-5-dmi-6-scaled.webp"
      ],
      "shortDescription": "BYD SEAL 5 DM-i đưa bạn vào một chuyến hành trình đầy hứng khởi nhờ mức tiêu hao nhiên liệu thấp 3,9 lít/100 km (NEDC) và tầm hoạt động kết hợp 1175 km, giúp bạn không còn lo lắng về quãng đường di chuyển.",
      "specs": [
        {
          "label": "Phạm vi hoạt động",
          "value": "Lên đến 1175 km"
        },
        {
          "label": "Dung lượng pin",
          "value": "18,3 kWh"
        },
        {
          "label": "Mức tiêu hao nhiên liệu thấp",
          "value": "3,9 lít/100 km"
        }
      ],
      "colors": [
        "Arctic White",
        "Harbour Grey",
        "Cosmos Black"
      ],
      "sections": {
        "overview": {
          "title": "Thanh lịch, đáng tin cậy và hiệu quả",
          "text": "BYD SEAL 5 DM-i đưa bạn vào một chuyến hành trình đầy hứng khởi nhờ mức tiêu hao nhiên liệu thấp 3,9 lít/100 km (NEDC) và tầm hoạt động kết hợp 1175 km, giúp bạn không còn lo lắng về quãng đường di chuyển.",
          "image": "assets/images/vehicles/byd-seal-5/source/01-seal-5-dmi-1-1-scaled.webp"
        },
        "exterior": {
          "title": "Thiết kế tinh tế và sáng tạo",
          "text": "Phần đầu xe được trang trí với các hình khối đa giác tinh xảo và các thanh mạ crôm dạng dải, tạo nên một phong cách độc đáo và ấn tượng.",
          "image": "assets/images/vehicles/byd-seal-5/source/08-rear-pc.webp"
        },
        "interior": {
          "title": "Khoang hành lý rộng rãi vượt trội",
          "text": "Không gian chứa đồ thoải mái trong cốp xe, với dung tích lên đến 450 lít có thể dễ dàng chứa sáu vali tiêu chuẩn 20 inch và đáp ứng trọn vẹn nhu cầu sử dụng hằng ngày của người dùng.",
          "image": "assets/images/vehicles/byd-seal-5/source/09-luggage-pc.webp"
        },
        "performance": {
          "title": "Thanh lịch, đáng tin cậy và hiệu quả",
          "text": "BYD SEAL 5 DM-i đưa bạn vào một chuyến hành trình đầy hứng khởi nhờ mức tiêu hao nhiên liệu thấp 3,9 lít/100 km (NEDC) và tầm hoạt động kết hợp 1175 km, giúp bạn không còn lo lắng về quãng đường di chuyển.",
          "image": "assets/images/vehicles/byd-seal-5/source/01-seal-5-dmi-1-1-scaled.webp"
        },
        "safety": {
          "title": "Bảng điều khiển trung tâm hiện đại",
          "text": "Bảng điều khiển trung tâm hiện đại với phanh tay điện tử (EPB), được trang bị nhiều chế độ lái khác nhau để thích ứng với mọi hành trình.",
          "image": "assets/images/vehicles/byd-seal-5/source/11-can-so-seal-5-scaled.webp"
        }
      },
      "tagline": "Thanh lịch, đáng tin cậy và hiệu quả",
      "availability": "Đang nhận báo giá",
      "officialUrl": "https://www.byd.com/vn/car/Seal5.html",
      "variants": [
        {
          "name": "Seal 5",
          "price": 696000000,
          "priceLabel": "696.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        }
      ],
      "colorOptions": [
        {
          "name": "Arctic White",
          "hex": "#f3f4f2",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/02-mau-sealion-1.webp",
            "kind": "color",
            "alt": "BYD SEAL 5 - hình 2"
          }
        },
        {
          "name": "Harbour Grey",
          "hex": "#747b80",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/03-mau-sealion-2.webp",
            "kind": "color",
            "alt": "BYD SEAL 5 - hình 3"
          }
        },
        {
          "name": "Cosmos Black",
          "hex": "#17191d",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/04-mau-sealion-3.webp",
            "kind": "color",
            "alt": "BYD SEAL 5 - hình 4"
          }
        }
      ],
      "highlights": [
        "DM-i Super Hybrid",
        "Màn hình xoay thông minh",
        "Vận hành ưu tiên điện",
        "Khoang cabin rộng"
      ],
      "specGroups": [
        {
          "title": "Định vị",
          "items": [
            {
              "label": "Phân khúc",
              "value": "Sedan hạng C, 5 chỗ"
            },
            {
              "label": "Hệ truyền động",
              "value": "Plug-in Hybrid DM-i"
            },
            {
              "label": "Phạm vi thuần điện",
              "value": "Khoảng 120 km"
            }
          ]
        },
        {
          "title": "Trải nghiệm",
          "items": [
            {
              "label": "Chế độ vận hành",
              "value": "EV / Hybrid linh hoạt"
            },
            {
              "label": "Màn hình trung tâm",
              "value": "Cảm ứng xoay thông minh"
            },
            {
              "label": "Không gian",
              "value": "Hàng ghế sau rộng, cốp thực dụng"
            }
          ]
        },
        {
          "title": "An toàn",
          "items": [
            {
              "label": "Pin",
              "value": "Blade Battery"
            },
            {
              "label": "Hỗ trợ lái",
              "value": "Các tính năng ADAS tùy cấu hình"
            },
            {
              "label": "Camera",
              "value": "Toàn cảnh tùy phiên bản"
            }
          ]
        }
      ],
      "lastUpdated": "31/07/2026",
      "cardHighlights": [
        "DM-i Super Hybrid",
        "Màn hình xoay thông minh",
        "Vận hành ưu tiên điện"
      ],
      "brochureUrl": "/assets/catalogs/byd-seal-5.pdf",
      "media": [
        {
          "src": "assets/images/vehicles/byd-seal-5/source/01-seal-5-dmi-1-1-scaled.webp",
          "kind": "technology",
          "alt": "BYD SEAL 5 - hình 1"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/02-mau-sealion-1.webp",
          "kind": "color",
          "alt": "BYD SEAL 5 - hình 2"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/03-mau-sealion-2.webp",
          "kind": "color",
          "alt": "BYD SEAL 5 - hình 3"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/04-mau-sealion-3.webp",
          "kind": "color",
          "alt": "BYD SEAL 5 - hình 4"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/05-seal-5-dmi-2-1-scaled.webp",
          "kind": "technology",
          "alt": "BYD SEAL 5 - hình 5"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/06-seal-5-dmi-3-scaled.webp",
          "kind": "technology",
          "alt": "BYD SEAL 5 - hình 6"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/07-seal-5-dmi-4.webp",
          "kind": "technology",
          "alt": "BYD SEAL 5 - hình 7"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/08-rear-pc.webp",
          "kind": "exterior",
          "alt": "BYD SEAL 5 - hình 8"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/09-luggage-pc.webp",
          "kind": "interior",
          "alt": "BYD SEAL 5 - hình 9"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/10-noi-that-seal-5-scaled.webp",
          "kind": "interior",
          "alt": "BYD SEAL 5 - hình 10"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/11-can-so-seal-5-scaled.webp",
          "kind": "detail",
          "alt": "BYD SEAL 5 - hình 11"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/12-interior-pc.webp",
          "kind": "interior",
          "alt": "BYD SEAL 5 - hình 12"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/13-seal-5-dmi-5-scaled.webp",
          "kind": "technology",
          "alt": "BYD SEAL 5 - hình 13"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/14-pin-seal-5-scaled.webp",
          "kind": "technology",
          "alt": "BYD SEAL 5 - hình 14"
        },
        {
          "src": "assets/images/vehicles/byd-seal-5/source/15-seal-5-dmi-6-scaled.webp",
          "kind": "technology",
          "alt": "BYD SEAL 5 - hình 15"
        }
      ],
      "galleryCount": 15,
      "heroMedia": {
        "src": "assets/images/vehicles/byd-seal-5/source/01-seal-5-dmi-1-1-scaled.webp",
        "kind": "technology",
        "alt": "BYD SEAL 5 - hình 1"
      },
      "galleryFallbacks": [],
      "storyBlocks": [
        {
          "title": "Thanh lịch, đáng tin cậy và hiệu quả",
          "text": "BYD SEAL 5 DM-i đưa bạn vào một chuyến hành trình đầy hứng khởi nhờ mức tiêu hao nhiên liệu thấp 3,9 lít/100 km (NEDC) và tầm hoạt động kết hợp 1175 km, giúp bạn không còn lo lắng về quãng đường di chuyển.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/01-seal-5-dmi-1-1-scaled.webp",
            "kind": "technology",
            "alt": "BYD SEAL 5 - hình 1"
          }
        },
        {
          "title": "Thiết kế tinh tế và sáng tạo",
          "text": "Phần đầu xe được trang trí với các hình khối đa giác tinh xảo và các thanh mạ crôm dạng dải, tạo nên một phong cách độc đáo và ấn tượng.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/08-rear-pc.webp",
            "kind": "exterior",
            "alt": "BYD SEAL 5 - hình 8"
          }
        },
        {
          "title": "Mặt trước đầy cá tính và mạnh mẽ",
          "text": "Những đường nét tinh tế phía trước gợi lên sự sang trọng và phong cách, cùng lưới tản nhiệt được trang trí bằng các hình khối đa giác toát lên vẻ cá tính và sức mạnh.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/08-rear-pc.webp",
            "kind": "exterior",
            "alt": "BYD SEAL 5 - hình 8"
          }
        },
        {
          "title": "Đèn hậu nổi bật với cá tính riêng",
          "text": "Thiết kế phần đuôi với đường cong nhẹ nhàng như hình cánh cung sẵn sàng phóng mũi tên, tượng trưng cho nguồn năng lượng dồn nén và sự sẵn sàng chinh phục mọi thử thách của SEAL 5. Cuối cùng, cụm đèn hậu với thiết kế hình học và hiệu ứng ánh sáng mờ tạo nên một màn trình diễn thị giác, kết hợp ánh sáng và bóng tối, đưa nghệ thuật thị giác lên một tầm cao mới.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/08-rear-pc.webp",
            "kind": "exterior",
            "alt": "BYD SEAL 5 - hình 8"
          }
        },
        {
          "title": "Khoang hành lý rộng rãi vượt trội",
          "text": "Không gian chứa đồ thoải mái trong cốp xe, với dung tích lên đến 450 lít có thể dễ dàng chứa sáu vali tiêu chuẩn 20 inch và đáp ứng trọn vẹn nhu cầu sử dụng hằng ngày của người dùng.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/09-luggage-pc.webp",
            "kind": "interior",
            "alt": "BYD SEAL 5 - hình 9"
          }
        },
        {
          "title": "Khoang lái thông minh và tiện nghi",
          "text": "Sự chăm chút tỉ mỉ đến từng chi tiết được thể hiện trong thiết kế nội thất và công nghệ, với hệ điều hành mang đến khả năng kết nối tối đa và sự thoải mái khi lái xe.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/10-noi-that-seal-5-scaled.webp",
            "kind": "interior",
            "alt": "BYD SEAL 5 - hình 10"
          }
        },
        {
          "title": "Bảng điều khiển trung tâm hiện đại",
          "text": "Bảng điều khiển trung tâm hiện đại với phanh tay điện tử (EPB), được trang bị nhiều chế độ lái khác nhau để thích ứng với mọi hành trình.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/11-can-so-seal-5-scaled.webp",
            "kind": "detail",
            "alt": "BYD SEAL 5 - hình 11"
          }
        },
        {
          "title": "Công nghệ vượt trội",
          "text": "Màn hình xoay 12,8 inch đặc trưng của BYD được trang bị trên SEAL 5, hỗ trợ Apple CarPlay và Android Auto, mang đến khả năng kết nối liền mạch với chiếc smartphone bạn lựa chọn.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/12-interior-pc.webp",
            "kind": "interior",
            "alt": "BYD SEAL 5 - hình 12"
          }
        },
        {
          "title": "Công nghệ Super DMi",
          "text": "BYD SEAL 5 mang đến cho bạn trải nghiệm lái mượt mà và mạnh mẽ.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/05-seal-5-dmi-2-1-scaled.webp",
            "kind": "technology",
            "alt": "BYD SEAL 5 - hình 5"
          }
        },
        {
          "title": "Pin Blade của BYD",
          "text": "BYD đã là tên tuổi tiên phong trong ngành công nghiệp pin hơn 29 năm. Công nghệ Pin Blade đột phá mới nhất của chúng tôi đã vượt qua hàng loạt bài kiểm tra khắc nghiệt trong những điều kiện nghiêm ngặt, trở thành một trong những loại pin an toàn nhất thế giới.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-seal-5/source/11-can-so-seal-5-scaled.webp",
            "kind": "detail",
            "alt": "BYD SEAL 5 - hình 11"
          }
        }
      ],
      "allContentBlocks": [
        {
          "title": "Thanh lịch, đáng tin cậy và hiệu quả",
          "text": "BYD SEAL 5 DM-i đưa bạn vào một chuyến hành trình đầy hứng khởi nhờ mức tiêu hao nhiên liệu thấp 3,9 lít/100 km (NEDC) và tầm hoạt động kết hợp 1175 km, giúp bạn không còn lo lắng về quãng đường di chuyển."
        },
        {
          "title": "Thiết kế tinh tế và sáng tạo",
          "text": "Phần đầu xe được trang trí với các hình khối đa giác tinh xảo và các thanh mạ crôm dạng dải, tạo nên một phong cách độc đáo và ấn tượng."
        },
        {
          "title": "Mặt trước đầy cá tính và mạnh mẽ",
          "text": "Những đường nét tinh tế phía trước gợi lên sự sang trọng và phong cách, cùng lưới tản nhiệt được trang trí bằng các hình khối đa giác toát lên vẻ cá tính và sức mạnh."
        },
        {
          "title": "Đèn hậu nổi bật với cá tính riêng",
          "text": "Thiết kế phần đuôi với đường cong nhẹ nhàng như hình cánh cung sẵn sàng phóng mũi tên, tượng trưng cho nguồn năng lượng dồn nén và sự sẵn sàng chinh phục mọi thử thách của SEAL 5. Cuối cùng, cụm đèn hậu với thiết kế hình học và hiệu ứng ánh sáng mờ tạo nên một màn trình diễn thị giác, kết hợp ánh sáng và bóng tối, đưa nghệ thuật thị giác lên một tầm cao mới."
        },
        {
          "title": "Khoang hành lý rộng rãi vượt trội",
          "text": "Không gian chứa đồ thoải mái trong cốp xe, với dung tích lên đến 450 lít có thể dễ dàng chứa sáu vali tiêu chuẩn 20 inch và đáp ứng trọn vẹn nhu cầu sử dụng hằng ngày của người dùng."
        },
        {
          "title": "Khoang lái thông minh và tiện nghi",
          "text": "Sự chăm chút tỉ mỉ đến từng chi tiết được thể hiện trong thiết kế nội thất và công nghệ, với hệ điều hành mang đến khả năng kết nối tối đa và sự thoải mái khi lái xe."
        },
        {
          "title": "Bảng điều khiển trung tâm hiện đại",
          "text": "Bảng điều khiển trung tâm hiện đại với phanh tay điện tử (EPB), được trang bị nhiều chế độ lái khác nhau để thích ứng với mọi hành trình."
        },
        {
          "title": "Công nghệ vượt trội",
          "text": "Màn hình xoay 12,8 inch đặc trưng của BYD được trang bị trên SEAL 5, hỗ trợ Apple CarPlay và Android Auto, mang đến khả năng kết nối liền mạch với chiếc smartphone bạn lựa chọn."
        },
        {
          "title": "Công nghệ Super DMi",
          "text": "BYD SEAL 5 mang đến cho bạn trải nghiệm lái mượt mà và mạnh mẽ."
        },
        {
          "title": "Pin Blade của BYD",
          "text": "BYD đã là tên tuổi tiên phong trong ngành công nghiệp pin hơn 29 năm. Công nghệ Pin Blade đột phá mới nhất của chúng tôi đã vượt qua hàng loạt bài kiểm tra khắc nghiệt trong những điều kiện nghiêm ngặt, trở thành một trong những loại pin an toàn nhất thế giới."
        }
      ]
    },
    {
      "slug": "byd-m9",
      "name": "BYD M9",
      "displayOrder": BYD_VEHICLE_ORDER["byd-m9"],
      "segment": "MPV",
      "powertrain": "DM-i",
      "menuFeatured": true,
      "badges": [
        "MPV",
        "DM-i"
      ],
      "price": 1999000000,
      "priceLabel": "Từ 1.999.000.000đ",
      "image": "assets/images/vehicles/byd-m9/card.webp",
      "heroImage": "assets/images/vehicles/byd-m9/source/01-m9-product-banner-pc-1-scaled.jpg",
      "gallery": [
        "assets/images/vehicles/byd-m9/source/01-m9-product-banner-pc-1-scaled.jpg",
        "assets/images/vehicles/byd-m9/source/02-m9-product-page-banner-pc-2-scaled.webp",
        "assets/images/vehicles/byd-m9/source/03-prueba-product-page-banner-pc-diseno-2-scaled.webp",
        "assets/images/vehicles/byd-m9/source/04-m9-product-minor-part-pc.webp",
        "assets/images/vehicles/byd-m9/source/05-m9-product-minor-part-pc-luztrasera.webp",
        "assets/images/vehicles/byd-m9/source/06-m9-product-minor-part-pc-silueta.webp",
        "assets/images/vehicles/byd-m9/source/07-m9-product-minor-part-pc-rines.webp",
        "assets/images/vehicles/byd-m9/source/08-m9-product-minor-part-pc-filas.webp",
        "assets/images/vehicles/byd-m9/source/09-m9-product-minor-part-pc-cajuela.webp",
        "assets/images/vehicles/byd-m9/source/10-m9-product-minor-part-pc-cabina.webp",
        "assets/images/vehicles/byd-m9/source/11-m9-product-minor-part-pc-palanca.webp",
        "assets/images/vehicles/byd-m9/source/12-prueba-product-page-banner-pc-tecnologia-1-scaled.webp",
        "assets/images/vehicles/byd-m9/source/13-m9-product-minor-part-pc-sistema.webp",
        "assets/images/vehicles/byd-m9/source/14-m9-product-minor-part-pc-1.webp",
        "assets/images/vehicles/byd-m9/source/15-m9-chasis.webp",
        "assets/images/vehicles/byd-m9/source/16-m9-product-minor-part-pc-presicion.webp",
        "assets/images/vehicles/byd-m9/source/17-m9-product-minor-part-pc-dm.webp",
        "assets/images/vehicles/byd-m9/source/18-m9-product-minor-part-pc-motor.webp",
        "assets/images/vehicles/byd-m9/source/19-m9-product-minor-part-pc-bateria.webp",
        "assets/images/vehicles/byd-m9/source/20-m9-product-minor-part-pc-vtol.webp"
      ],
      "shortDescription": "Lưới tản nhiệt hình giàn giáo kéo dài ra ngoài theo hình chữ V, mang lại cảm giác mạnh mẽ và thanh lịch.",
      "specs": [
        {
          "label": "Quãng đường đi được",
          "value": "945 KM"
        },
        {
          "label": "Tiêu thụ nhiên liệu NEDC",
          "value": "17.8 KM/L"
        },
        {
          "label": "Tăng tốc từ 0 đến 100 km/h",
          "value": "8,1 giây"
        }
      ],
      "colors": [
        "Trắng Pearl",
        "Đen Obsidian",
        "Xám Mountain",
        "Nâu Imperial"
      ],
      "sections": {
        "overview": {
          "title": "THIẾT KẾ MẶT TRƯỚC MẠNH MẼ",
          "text": "Lưới tản nhiệt hình giàn giáo kéo dài ra ngoài theo hình chữ V, mang lại cảm giác mạnh mẽ và thanh lịch.",
          "image": "assets/images/vehicles/byd-m9/source/06-m9-product-minor-part-pc-silueta.webp"
        },
        "exterior": {
          "title": "THIẾT KẾ MẶT TRƯỚC MẠNH MẼ",
          "text": "Lưới tản nhiệt hình giàn giáo kéo dài ra ngoài theo hình chữ V, mang lại cảm giác mạnh mẽ và thanh lịch.",
          "image": "assets/images/vehicles/byd-m9/source/06-m9-product-minor-part-pc-silueta.webp"
        },
        "interior": {
          "title": "Cốp xe rộng rãi với dung tích lên đến 2.036 lít*",
          "text": "Sức chứa bốn vali 24 inch và hai vali 20 inch. Với cốp xe đa năng và cách phân bổ không gian thông minh, bạn sẽ có đủ chỗ cho hành lý, đồ chơi, đồ thể thao, đồ mua sắm và mọi thứ gia đình bạn cần.",
          "image": "assets/images/vehicles/byd-m9/source/08-m9-product-minor-part-pc-filas.webp"
        },
        "performance": {
          "title": "CÔNG NGHỆ DMi",
          "text": "BYD M9 DMi mang đến cho bạn trải nghiệm sống như một chiếc xe điện khi di chuyển trong thành phố và sự an tâm tuyệt đối khi đổ đầy bình xăng trên những chuyến đi dài. Bạn có thể di chuyển tới 95 km (theo tiêu chuẩn NEDC) ở chế độ chạy hoàn toàn bằng điện và 945 km (theo tiêu chuẩn NEDC) ở chế độ hybrid, với mức tiêu thụ nhiên liệu cực thấp: 17,8 km/lít (theo tiêu chuẩn NEDC).",
          "image": "assets/images/vehicles/byd-m9/source/15-m9-chasis.webp"
        },
        "safety": {
          "title": "BÁNH XE HỢP KIM NHÔM",
          "text": "M9 sở hữu thiết kế tiên tiến, lấy cảm hứng từ tấm chắn tròn kết hợp giữa phong cách và công nghệ, mang đến sự an toàn tối đa cho bạn.",
          "image": "assets/images/vehicles/byd-m9/source/04-m9-product-minor-part-pc.webp"
        }
      },
      "tagline": "THIẾT KẾ MẶT TRƯỚC MẠNH MẼ",
      "availability": "Đang nhận đặt lịch xem xe",
      "officialUrl": "https://www.byd.com/vn/car/M9",
      "variants": [
        {
          "name": "M9 Advanced",
          "price": 1999000000,
          "priceLabel": "1.999.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        },
        {
          "name": "M9 Premium",
          "price": 2388000000,
          "priceLabel": "2.388.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        }
      ],
      "colorOptions": [
        {
          "name": "Trắng Pearl",
          "hex": "#f5f4ee"
        },
        {
          "name": "Đen Obsidian",
          "hex": "#121417"
        },
        {
          "name": "Xám Mountain",
          "hex": "#6c7174"
        },
        {
          "name": "Nâu Imperial",
          "hex": "#59463b"
        }
      ],
      "highlights": [
        "DM-i thế hệ thứ 5",
        "Ghế thương gia massage",
        "Khoang hành lý hơn 2.000 L",
        "Sạc nhanh"
      ],
      "specGroups": [
        {
          "title": "Kích thước & không gian",
          "items": [
            {
              "label": "Chiều dài",
              "value": "Trên 5,1 mét"
            },
            {
              "label": "Chiều dài cơ sở",
              "value": "Trên 3 mét"
            },
            {
              "label": "Khoang hành lý tối đa",
              "value": "Hơn 2.000 lít"
            }
          ]
        },
        {
          "title": "Hệ truyền động",
          "items": [
            {
              "label": "Công nghệ",
              "value": "DM-i Super Hybrid thế hệ 5"
            },
            {
              "label": "Động cơ xăng",
              "value": "1.5L tăng áp kết hợp mô-tơ điện"
            },
            {
              "label": "Tăng tốc 0–100 km/h",
              "value": "Khoảng 8,5 giây"
            }
          ]
        },
        {
          "title": "Tiện nghi",
          "items": [
            {
              "label": "Hàng ghế giữa",
              "value": "Chỉnh điện, đỡ chân, massage 10 điểm"
            },
            {
              "label": "Ghế",
              "value": "Da cao cấp, làm mát và massage"
            },
            {
              "label": "Sạc pin",
              "value": "15–100% trong dưới 60 phút (tham khảo)"
            }
          ]
        }
      ],
      "lastUpdated": "31/07/2026",
      "cardHighlights": [
        "DM-i thế hệ thứ 5",
        "Ghế thương gia massage",
        "Khoang hành lý hơn 2.000 L"
      ],
      "brochureUrl": "/assets/catalogs/byd-m9.pdf",
      "media": [
        {
          "src": "assets/images/vehicles/byd-m9/source/01-m9-product-banner-pc-1-scaled.jpg",
          "kind": "hero",
          "alt": "BYD M9 - hình 1"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/02-m9-product-page-banner-pc-2-scaled.webp",
          "kind": "hero",
          "alt": "BYD M9 - hình 2"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/03-prueba-product-page-banner-pc-diseno-2-scaled.webp",
          "kind": "hero",
          "alt": "BYD M9 - hình 3"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/04-m9-product-minor-part-pc.webp",
          "kind": "detail",
          "alt": "BYD M9 - hình 4"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/05-m9-product-minor-part-pc-luztrasera.webp",
          "kind": "detail",
          "alt": "BYD M9 - hình 5"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/06-m9-product-minor-part-pc-silueta.webp",
          "kind": "exterior",
          "alt": "BYD M9 - hình 6"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/07-m9-product-minor-part-pc-rines.webp",
          "kind": "exterior",
          "alt": "BYD M9 - hình 7"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/08-m9-product-minor-part-pc-filas.webp",
          "kind": "interior",
          "alt": "BYD M9 - hình 8"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/09-m9-product-minor-part-pc-cajuela.webp",
          "kind": "interior",
          "alt": "BYD M9 - hình 9"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/10-m9-product-minor-part-pc-cabina.webp",
          "kind": "interior",
          "alt": "BYD M9 - hình 10"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/11-m9-product-minor-part-pc-palanca.webp",
          "kind": "detail",
          "alt": "BYD M9 - hình 11"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/12-prueba-product-page-banner-pc-tecnologia-1-scaled.webp",
          "kind": "hero",
          "alt": "BYD M9 - hình 12"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/13-m9-product-minor-part-pc-sistema.webp",
          "kind": "detail",
          "alt": "BYD M9 - hình 13"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/14-m9-product-minor-part-pc-1.webp",
          "kind": "hero",
          "alt": "BYD M9 - hình 14"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/15-m9-chasis.webp",
          "kind": "technology",
          "alt": "BYD M9 - hình 15"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/16-m9-product-minor-part-pc-presicion.webp",
          "kind": "detail",
          "alt": "BYD M9 - hình 16"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/17-m9-product-minor-part-pc-dm.webp",
          "kind": "detail",
          "alt": "BYD M9 - hình 17"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/18-m9-product-minor-part-pc-motor.webp",
          "kind": "technology",
          "alt": "BYD M9 - hình 18"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/19-m9-product-minor-part-pc-bateria.webp",
          "kind": "detail",
          "alt": "BYD M9 - hình 19"
        },
        {
          "src": "assets/images/vehicles/byd-m9/source/20-m9-product-minor-part-pc-vtol.webp",
          "kind": "charging",
          "alt": "BYD M9 - hình 20"
        }
      ],
      "galleryCount": 20,
      "heroMedia": {
        "src": "assets/images/vehicles/byd-m9/source/01-m9-product-banner-pc-1-scaled.jpg",
        "kind": "hero",
        "alt": "BYD M9 - hình 1"
      },
      "galleryFallbacks": [],
      "storyBlocks": [
        {
          "title": "THIẾT KẾ MẶT TRƯỚC MẠNH MẼ",
          "text": "Lưới tản nhiệt hình giàn giáo kéo dài ra ngoài theo hình chữ V, mang lại cảm giác mạnh mẽ và thanh lịch.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/06-m9-product-minor-part-pc-silueta.webp",
            "kind": "exterior",
            "alt": "BYD M9 - hình 6"
          }
        },
        {
          "title": "ĐÈN HẬU THỐNG NHẤT VỚI THIẾT KẾ VÔ CỰC",
          "text": "Đèn hậu mới lấy cảm hứng từ vô cực, mô phỏng biểu tượng của sự may mắn và thịnh vượng.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/07-m9-product-minor-part-pc-rines.webp",
            "kind": "exterior",
            "alt": "BYD M9 - hình 7"
          }
        },
        {
          "title": "HÌNH BÓNG THANH LỊCH",
          "text": "Các đường nét trên thân máy giống hình mũi tên, tạo ấn tượng thị giác thanh lịch, mềm mại và tinh tế.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/06-m9-product-minor-part-pc-silueta.webp",
            "kind": "exterior",
            "alt": "BYD M9 - hình 6"
          }
        },
        {
          "title": "BÁNH XE HỢP KIM NHÔM",
          "text": "M9 sở hữu thiết kế tiên tiến, lấy cảm hứng từ tấm chắn tròn kết hợp giữa phong cách và công nghệ, mang đến sự an toàn tối đa cho bạn.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/04-m9-product-minor-part-pc.webp",
            "kind": "detail",
            "alt": "BYD M9 - hình 4"
          }
        },
        {
          "title": "BA HÀNG GHẾ, ĐỒNG HÀNH CHO MỌI NGƯỜI",
          "text": "Được thiết kế cho cuộc sống gia đình, M9 mang đến không gian nội thất rộng rãi và thoải mái. Xe có thể chở tối đa 7 hành khách. Tận hưởng một chuyến đi an toàn, thú vị và trọn vẹn hơn.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/05-m9-product-minor-part-pc-luztrasera.webp",
            "kind": "detail",
            "alt": "BYD M9 - hình 5"
          }
        },
        {
          "title": "Cốp xe rộng rãi với dung tích lên đến 2.036 lít*",
          "text": "Sức chứa bốn vali 24 inch và hai vali 20 inch. Với cốp xe đa năng và cách phân bổ không gian thông minh, bạn sẽ có đủ chỗ cho hành lý, đồ chơi, đồ thể thao, đồ mua sắm và mọi thứ gia đình bạn cần.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/08-m9-product-minor-part-pc-filas.webp",
            "kind": "interior",
            "alt": "BYD M9 - hình 8"
          }
        },
        {
          "title": "KHOANG LÁI THỰC TẾ",
          "text": "Được trang bị công nghệ tiên tiến, khoang lái mang đến khả năng kết nối trực quan, hệ thống hỗ trợ thông minh \"Hi BYD\" và bầu không khí được thiết kế để mang lại sự thoải mái trên mọi hành trình, bất kể khoảng cách.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/09-m9-product-minor-part-pc-cajuela.webp",
            "kind": "interior",
            "alt": "BYD M9 - hình 9"
          }
        },
        {
          "title": "CẦN SANG SỐ GẮN TRÊN VÔ LĂNG",
          "text": "Nhờ cần số gắn trên cột, M9 không chỉ mang lại khả năng điều khiển chính xác và thoải mái mà còn tối đa hóa không gian bảng điều khiển trung tâm.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/10-m9-product-minor-part-pc-cabina.webp",
            "kind": "interior",
            "alt": "BYD M9 - hình 10"
          }
        },
        {
          "title": "HỆ THỐNG NGỒI LÁI THÔNG MINH 3D BYD",
          "text": "Thay đổi trải nghiệm lái xe của bạn. Với Apple CarPlay và Android Auto, bạn có thể truy cập các ứng dụng yêu thích trực tiếp từ màn hình. Tận hưởng chức năng chia đôi màn hình để sử dụng nhiều ứng dụng cùng lúc và mô hình 3D để điều khiển tương tác với xe.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/08-m9-product-minor-part-pc-filas.webp",
            "kind": "interior",
            "alt": "BYD M9 - hình 8"
          }
        },
        {
          "title": "TÚI KHÍ VÒNG QUANH",
          "text": "6 túi khí: Túi khí phía trước cho người lái, hành khách phía trước, túi khí bên hông phía trước và túi khí rèm bên hông phía trước và phía sau.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/11-m9-product-minor-part-pc-palanca.webp",
            "kind": "detail",
            "alt": "BYD M9 - hình 11"
          }
        },
        {
          "title": "KẾT CẤU THÂN XE BẰNG THÉP CƯỜNG ĐỘ CAO",
          "text": "Với 79% cấu trúc được làm bằng thép cường độ cao, M9 mang đến cho bạn sự kết hợp hoàn hảo giữa độ an toàn và độ bền.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/13-m9-product-minor-part-pc-sistema.webp",
            "kind": "detail",
            "alt": "BYD M9 - hình 13"
          }
        },
        {
          "title": "CHÍNH XÁC VÀ KIỂM SOÁT TẠI VÔ LĂNG",
          "text": "Nhờ hệ thống lái chính xác R-EPS và bán kính vòng quay 5,7 mét, M9 nổi bật với khả năng cơ động vượt trội, mang đến hệ số cản tốt nhất trong phân khúc. Với công nghệ này, bạn sẽ tận hưởng cảm giác lái nhẹ nhàng, linh hoạt, ngay cả trong những không gian chật hẹp nhất.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/16-m9-product-minor-part-pc-presicion.webp",
            "kind": "detail",
            "alt": "BYD M9 - hình 16"
          }
        },
        {
          "title": "CÔNG NGHỆ DMi",
          "text": "BYD M9 DMi mang đến cho bạn trải nghiệm sống như một chiếc xe điện khi di chuyển trong thành phố và sự an tâm tuyệt đối khi đổ đầy bình xăng trên những chuyến đi dài. Bạn có thể di chuyển tới 95 km (theo tiêu chuẩn NEDC) ở chế độ chạy hoàn toàn bằng điện và 945 km (theo tiêu chuẩn NEDC) ở chế độ hybrid, với mức tiêu thụ nhiên liệu cực thấp: 17,8 km/lít (theo tiêu chuẩn NEDC).",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/15-m9-chasis.webp",
            "kind": "technology",
            "alt": "BYD M9 - hình 15"
          }
        },
        {
          "title": "ĐỘNG CƠ 1.5 T HIỆU SUẤT CAO",
          "text": "Xe được trang bị động cơ 1.5 T hiện đại, được phát triển riêng cho các hệ thống hybrid cắm sạc. Nhờ hiệu suất nhiệt hàng đầu phân khúc và mô-men xoắn 225 Nm, động cơ mang lại khả năng phản ứng mạnh mẽ và mức tiêu thụ nhiên liệu tối ưu. Động cơ này không chỉ cải thiện hiệu suất và khả năng tăng tốc mà còn đảm bảo trải nghiệm lái mượt mà hơn, hiệu quả hơn và thân thiện với môi trường hơn.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/18-m9-product-minor-part-pc-motor.webp",
            "kind": "technology",
            "alt": "BYD M9 - hình 18"
          }
        },
        {
          "title": "PIN BLADE",
          "text": "Sử dụng PIN Blade cải tiến của BYD, được công nhận bởi mật độ năng lượng cao, độ bền và độ an toàn hàng đầu trong ngành. Nhờ thiết kế độc đáo, PIN Blade có khả năng chịu nhiệt và va đập tốt hơn, đồng thời cải thiện phạm vi hoạt động và hiệu suất của xe.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/17-m9-product-minor-part-pc-dm.webp",
            "kind": "detail",
            "alt": "BYD M9 - hình 17"
          }
        },
        {
          "title": "TRẠM SẠC XE ĐIỆN",
          "text": "M9 không chỉ là một phương tiện di chuyển đơn thuần: nó còn là một trạm phát điện di động, lý tưởng cho những trải nghiệm ngoài trời. Dù là nấu ăn giữa thiên nhiên, thắp sáng bầu trời đêm, thưởng thức phim dưới bầu trời đầy sao, hay thậm chí là sạc thiết bị trong trường hợp khẩn cấp.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-m9/source/15-m9-chasis.webp",
            "kind": "technology",
            "alt": "BYD M9 - hình 15"
          }
        }
      ],
      "allContentBlocks": [
        {
          "title": "THIẾT KẾ MẶT TRƯỚC MẠNH MẼ",
          "text": "Lưới tản nhiệt hình giàn giáo kéo dài ra ngoài theo hình chữ V, mang lại cảm giác mạnh mẽ và thanh lịch."
        },
        {
          "title": "ĐÈN HẬU THỐNG NHẤT VỚI THIẾT KẾ VÔ CỰC",
          "text": "Đèn hậu mới lấy cảm hứng từ vô cực, mô phỏng biểu tượng của sự may mắn và thịnh vượng."
        },
        {
          "title": "HÌNH BÓNG THANH LỊCH",
          "text": "Các đường nét trên thân máy giống hình mũi tên, tạo ấn tượng thị giác thanh lịch, mềm mại và tinh tế."
        },
        {
          "title": "BÁNH XE HỢP KIM NHÔM",
          "text": "M9 sở hữu thiết kế tiên tiến, lấy cảm hứng từ tấm chắn tròn kết hợp giữa phong cách và công nghệ, mang đến sự an toàn tối đa cho bạn."
        },
        {
          "title": "BA HÀNG GHẾ, ĐỒNG HÀNH CHO MỌI NGƯỜI",
          "text": "Được thiết kế cho cuộc sống gia đình, M9 mang đến không gian nội thất rộng rãi và thoải mái. Xe có thể chở tối đa 7 hành khách. Tận hưởng một chuyến đi an toàn, thú vị và trọn vẹn hơn."
        },
        {
          "title": "Cốp xe rộng rãi với dung tích lên đến 2.036 lít*",
          "text": "Sức chứa bốn vali 24 inch và hai vali 20 inch. Với cốp xe đa năng và cách phân bổ không gian thông minh, bạn sẽ có đủ chỗ cho hành lý, đồ chơi, đồ thể thao, đồ mua sắm và mọi thứ gia đình bạn cần."
        },
        {
          "title": "KHOANG LÁI THỰC TẾ",
          "text": "Được trang bị công nghệ tiên tiến, khoang lái mang đến khả năng kết nối trực quan, hệ thống hỗ trợ thông minh \"Hi BYD\" và bầu không khí được thiết kế để mang lại sự thoải mái trên mọi hành trình, bất kể khoảng cách."
        },
        {
          "title": "CẦN SANG SỐ GẮN TRÊN VÔ LĂNG",
          "text": "Nhờ cần số gắn trên cột, M9 không chỉ mang lại khả năng điều khiển chính xác và thoải mái mà còn tối đa hóa không gian bảng điều khiển trung tâm."
        },
        {
          "title": "HỆ THỐNG NGỒI LÁI THÔNG MINH 3D BYD",
          "text": "Thay đổi trải nghiệm lái xe của bạn. Với Apple CarPlay và Android Auto, bạn có thể truy cập các ứng dụng yêu thích trực tiếp từ màn hình. Tận hưởng chức năng chia đôi màn hình để sử dụng nhiều ứng dụng cùng lúc và mô hình 3D để điều khiển tương tác với xe."
        },
        {
          "title": "TÚI KHÍ VÒNG QUANH",
          "text": "6 túi khí: Túi khí phía trước cho người lái, hành khách phía trước, túi khí bên hông phía trước và túi khí rèm bên hông phía trước và phía sau."
        },
        {
          "title": "KẾT CẤU THÂN XE BẰNG THÉP CƯỜNG ĐỘ CAO",
          "text": "Với 79% cấu trúc được làm bằng thép cường độ cao, M9 mang đến cho bạn sự kết hợp hoàn hảo giữa độ an toàn và độ bền."
        },
        {
          "title": "CHÍNH XÁC VÀ KIỂM SOÁT TẠI VÔ LĂNG",
          "text": "Nhờ hệ thống lái chính xác R-EPS và bán kính vòng quay 5,7 mét, M9 nổi bật với khả năng cơ động vượt trội, mang đến hệ số cản tốt nhất trong phân khúc. Với công nghệ này, bạn sẽ tận hưởng cảm giác lái nhẹ nhàng, linh hoạt, ngay cả trong những không gian chật hẹp nhất."
        },
        {
          "title": "CÔNG NGHỆ DMi",
          "text": "BYD M9 DMi mang đến cho bạn trải nghiệm sống như một chiếc xe điện khi di chuyển trong thành phố và sự an tâm tuyệt đối khi đổ đầy bình xăng trên những chuyến đi dài. Bạn có thể di chuyển tới 95 km (theo tiêu chuẩn NEDC) ở chế độ chạy hoàn toàn bằng điện và 945 km (theo tiêu chuẩn NEDC) ở chế độ hybrid, với mức tiêu thụ nhiên liệu cực thấp: 17,8 km/lít (theo tiêu chuẩn NEDC)."
        },
        {
          "title": "ĐỘNG CƠ 1.5 T HIỆU SUẤT CAO",
          "text": "Xe được trang bị động cơ 1.5 T hiện đại, được phát triển riêng cho các hệ thống hybrid cắm sạc. Nhờ hiệu suất nhiệt hàng đầu phân khúc và mô-men xoắn 225 Nm, động cơ mang lại khả năng phản ứng mạnh mẽ và mức tiêu thụ nhiên liệu tối ưu. Động cơ này không chỉ cải thiện hiệu suất và khả năng tăng tốc mà còn đảm bảo trải nghiệm lái mượt mà hơn, hiệu quả hơn và thân thiện với môi trường hơn."
        },
        {
          "title": "PIN BLADE",
          "text": "Sử dụng PIN Blade cải tiến của BYD, được công nhận bởi mật độ năng lượng cao, độ bền và độ an toàn hàng đầu trong ngành. Nhờ thiết kế độc đáo, PIN Blade có khả năng chịu nhiệt và va đập tốt hơn, đồng thời cải thiện phạm vi hoạt động và hiệu suất của xe."
        },
        {
          "title": "TRẠM SẠC XE ĐIỆN",
          "text": "M9 không chỉ là một phương tiện di chuyển đơn thuần: nó còn là một trạm phát điện di động, lý tưởng cho những trải nghiệm ngoài trời. Dù là nấu ăn giữa thiên nhiên, thắp sáng bầu trời đêm, thưởng thức phim dưới bầu trời đầy sao, hay thậm chí là sạc thiết bị trong trường hợp khẩn cấp."
        }
      ]
    },
    {
      "slug": "byd-atto-2",
      "name": "BYD Atto 2",
      "displayOrder": BYD_VEHICLE_ORDER["byd-atto-2"],
      "segment": "SUV",
      "powertrain": "EV",
      "menuFeatured": true,
      "badges": [
        "SUV",
        "Thuần điện"
      ],
      "price": 669000000,
      "priceLabel": "669.000.000đ",
      "image": "assets/images/vehicles/byd-atto-2/card.webp",
      "heroImage": "assets/images/vehicles/byd-atto-2/source/01-byd-atto2-1stbanner-xl-scaled.webp",
      "gallery": [
        "assets/images/vehicles/byd-atto-2/source/01-byd-atto2-1stbanner-xl-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/02-pink.webp",
        "assets/images/vehicles/byd-atto-2/source/03-white-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/04-greeb-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/05-black-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/06-cover-atto2-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/07-byd-atto2-exterior-01-xl-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/08-atto-2-kv-pc-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/09-interior5-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/10-interior7-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/11-interior3-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/13-interior1-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/14-interior2-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/15-byd-atto2-charging-01-xl-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/16-byd-atto2-safety-01-xl-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/17-byd-tech-battery-scaled.webp",
        "assets/images/vehicles/byd-atto-2/source/18-byd-atto2-tech-03-xl.webp",
        "assets/images/vehicles/byd-atto-2/source/19-byd-atto2-tech-04-xl.webp",
        "assets/images/vehicles/byd-atto-2/source/20-byd-atto2-tech-05-xl.webp",
        "assets/images/vehicles/byd-atto-2/source/21-byd-atto2-v2l-01-xl-scaled.webp"
      ],
      "shortDescription": "BYD ATTO 2 áp dụng ngôn ngữ thiết kế \"Mặt Rồng\" (Dragon Face) đặc trưng của BYD, được sáng tạo bởi Giám đốc Thiết kế Toàn cầu; ông Wolfgang Egger. Các phần bodykit nhô ra ở đầu và đuôi xe được làm ngắn cùng những đường cong mạnh mẽ trên thân xe tạo nên vẻ ngoà",
      "specs": [
        {
          "label": "Công suất tối đa",
          "value": "174Hp"
        },
        {
          "label": "Quãng đường di chuyển 1 lần sạc đầy pin (NEDC)",
          "value": "380Km"
        },
        {
          "label": "Tăng tốc 0-100 Km/h",
          "value": "8.3 s"
        }
      ],
      "colors": [
        "Pink",
        "White",
        "Green",
        "Black"
      ],
      "sections": {
        "overview": {
          "title": "Xe điện đô thị thế hệ mới",
          "text": "BYD ATTO 2 áp dụng ngôn ngữ thiết kế \"Mặt Rồng\" (Dragon Face) đặc trưng của BYD, được sáng tạo bởi Giám đốc Thiết kế Toàn cầu; ông Wolfgang Egger. Các phần bodykit nhô ra ở đầu và đuôi xe được làm ngắn cùng những đường cong mạnh mẽ trên thân xe tạo nên vẻ ngoài thể thao, trong khi đó, ngoại thất cứng cáp lại nhấn mạnh sự mạnh mẽ và bền bỉ.",
          "image": "assets/images/vehicles/byd-atto-2/source/06-cover-atto2-scaled.webp"
        },
        "exterior": {
          "title": "Xe điện đô thị thế hệ mới",
          "text": "BYD ATTO 2 áp dụng ngôn ngữ thiết kế \"Mặt Rồng\" (Dragon Face) đặc trưng của BYD, được sáng tạo bởi Giám đốc Thiết kế Toàn cầu; ông Wolfgang Egger. Các phần bodykit nhô ra ở đầu và đuôi xe được làm ngắn cùng những đường cong mạnh mẽ trên thân xe tạo nên vẻ ngoài thể thao, trong khi đó, ngoại thất cứng cáp lại nhấn mạnh sự mạnh mẽ và bền bỉ.",
          "image": "assets/images/vehicles/byd-atto-2/source/06-cover-atto2-scaled.webp"
        },
        "interior": {
          "title": "Chất liệu cao cấp",
          "text": "Nội thất của BYD ATTO 2 được chế tác với ghế ngồi bọc da thuần chay (vegan) bóng bẩy, thân thiện với môi trường cùng các vật liệu chất lượng cao xuyên suốt trên bảng điều khiển và các tấm ốp cửa.",
          "image": "assets/images/vehicles/byd-atto-2/source/09-interior5-scaled.webp"
        },
        "performance": {
          "title": "Tiện nghi và linh hoạt trong đô thị",
          "text": "Hướng đến những người ưa khám phá thành phố, mẫu SUV nhỏ gọn dài 4,3m này sở hữu một không gian rộng rãi đáng kinh ngạc. Mẫu xe này cũng được tạo ra để di chuyển trong đô thị nhờ khả năng xoay xở linh hoạt, bán kính quay vòng nhỏ và cảm giác vận hành thoải mái.",
          "image": "assets/images/vehicles/byd-atto-2/source/17-byd-tech-battery-scaled.webp"
        },
        "safety": {
          "title": "Lái rực rỡ - Vui hết cỡ",
          "text": "Đèn pha LED sắc sảo được kết hợp với dải đèn định vị ban ngày đặc trưng giúp tối ưu hóa tầm nhìn và độ an toàn, soi sáng cho hành trình phía trước của bạn. Thiết kế đèn hậu chạy xuyên suốt nổi bật với biểu tượng vòng lặp Möbius dễ nhận biết, mang lại sự may mắn vô tận cho người lái và tất cả hành khách.",
          "image": "assets/images/vehicles/byd-atto-2/source/16-byd-atto2-safety-01-xl-scaled.webp"
        }
      },
      "tagline": "Xe điện đô thị thế hệ mới",
      "availability": "Đang nhận tư vấn",
      "officialUrl": "https://www.byd.com/vn/car/atto2",
      "brochureUrl": "/assets/catalogs/byd-atto-2.pdf",
      "variants": [
        {
          "name": "Atto2",
          "price": 669000000,
          "priceLabel": "669.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        }
      ],
      "colorOptions": [
        {
          "name": "Pink",
          "hex": "#c995a4",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/02-pink.webp",
            "kind": "color",
            "alt": "BYD ATTO 2 - hình 2"
          }
        },
        {
          "name": "White",
          "hex": "#f3f4f2",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/03-white-scaled.webp",
            "kind": "color",
            "alt": "BYD ATTO 2 - hình 3"
          }
        },
        {
          "name": "Green",
          "hex": "#738777",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/04-greeb-scaled.webp",
            "kind": "color",
            "alt": "BYD ATTO 2 - hình 4"
          }
        },
        {
          "name": "Black",
          "hex": "#17191d",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/05-black-scaled.webp",
            "kind": "color",
            "alt": "BYD ATTO 2 - hình 5"
          }
        }
      ],
      "highlights": [
        "Cell-to-Body",
        "Màn hình xoay 12,8 inch",
        "Camera 360°",
        "V2L"
      ],
      "specGroups": [
        {
          "title": "Kích thước",
          "items": [
            {
              "label": "Dài × Rộng × Cao",
              "value": "4.310 × 1.830 × 1.675 mm"
            },
            {
              "label": "Chiều dài cơ sở",
              "value": "2.620 mm"
            },
            {
              "label": "Khoảng sáng gầm",
              "value": "170 mm"
            }
          ]
        },
        {
          "title": "Vận hành & pin",
          "items": [
            {
              "label": "Công suất tối đa",
              "value": "130 kW / 174 hp"
            },
            {
              "label": "Mô-men xoắn",
              "value": "290 Nm"
            },
            {
              "label": "Pin / phạm vi",
              "value": "45,12 kWh / 380 km NEDC"
            }
          ]
        },
        {
          "title": "Trang bị nổi bật",
          "items": [
            {
              "label": "Màn hình",
              "value": "Cảm ứng xoay 12,8 inch"
            },
            {
              "label": "Camera",
              "value": "Toàn cảnh 360°"
            },
            {
              "label": "Sạc",
              "value": "AC Type 2, DC CCS2, V2L"
            }
          ]
        }
      ],
      "lastUpdated": "31/07/2026",
      "cardHighlights": [
        "Cell-to-Body",
        "Màn hình xoay 12,8 inch",
        "Camera 360°"
      ],
      "media": [
        {
          "src": "assets/images/vehicles/byd-atto-2/source/01-byd-atto2-1stbanner-xl-scaled.webp",
          "kind": "hero",
          "alt": "BYD ATTO 2 - hình 1"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/02-pink.webp",
          "kind": "color",
          "alt": "BYD ATTO 2 - hình 2"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/03-white-scaled.webp",
          "kind": "color",
          "alt": "BYD ATTO 2 - hình 3"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/04-greeb-scaled.webp",
          "kind": "color",
          "alt": "BYD ATTO 2 - hình 4"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/05-black-scaled.webp",
          "kind": "color",
          "alt": "BYD ATTO 2 - hình 5"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/06-cover-atto2-scaled.webp",
          "kind": "exterior",
          "alt": "BYD ATTO 2 - hình 6"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/07-byd-atto2-exterior-01-xl-scaled.webp",
          "kind": "exterior",
          "alt": "BYD ATTO 2 - hình 7"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/08-atto-2-kv-pc-scaled.webp",
          "kind": "exterior",
          "alt": "BYD ATTO 2 - hình 8"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/09-interior5-scaled.webp",
          "kind": "interior",
          "alt": "BYD ATTO 2 - hình 9"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/10-interior7-scaled.webp",
          "kind": "interior",
          "alt": "BYD ATTO 2 - hình 10"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/11-interior3-scaled.webp",
          "kind": "interior",
          "alt": "BYD ATTO 2 - hình 11"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/13-interior1-scaled.webp",
          "kind": "interior",
          "alt": "BYD ATTO 2 - hình 13"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/14-interior2-scaled.webp",
          "kind": "interior",
          "alt": "BYD ATTO 2 - hình 14"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/15-byd-atto2-charging-01-xl-scaled.webp",
          "kind": "charging",
          "alt": "BYD ATTO 2 - hình 15"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/16-byd-atto2-safety-01-xl-scaled.webp",
          "kind": "safety",
          "alt": "BYD ATTO 2 - hình 16"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/17-byd-tech-battery-scaled.webp",
          "kind": "technology",
          "alt": "BYD ATTO 2 - hình 17"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/18-byd-atto2-tech-03-xl.webp",
          "kind": "technology",
          "alt": "BYD ATTO 2 - hình 18"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/19-byd-atto2-tech-04-xl.webp",
          "kind": "technology",
          "alt": "BYD ATTO 2 - hình 19"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/20-byd-atto2-tech-05-xl.webp",
          "kind": "technology",
          "alt": "BYD ATTO 2 - hình 20"
        },
        {
          "src": "assets/images/vehicles/byd-atto-2/source/21-byd-atto2-v2l-01-xl-scaled.webp",
          "kind": "charging",
          "alt": "BYD ATTO 2 - hình 21"
        }
      ],
      "galleryCount": 20,
      "heroMedia": {
        "src": "assets/images/vehicles/byd-atto-2/source/01-byd-atto2-1stbanner-xl-scaled.webp",
        "kind": "hero",
        "alt": "BYD ATTO 2 - hình 1"
      },
      "galleryFallbacks": [],
      "storyBlocks": [
        {
          "title": "Xe điện đô thị thế hệ mới",
          "text": "BYD ATTO 2 áp dụng ngôn ngữ thiết kế \"Mặt Rồng\" (Dragon Face) đặc trưng của BYD, được sáng tạo bởi Giám đốc Thiết kế Toàn cầu; ông Wolfgang Egger. Các phần bodykit nhô ra ở đầu và đuôi xe được làm ngắn cùng những đường cong mạnh mẽ trên thân xe tạo nên vẻ ngoài thể thao, trong khi đó, ngoại thất cứng cáp lại nhấn mạnh sự mạnh mẽ và bền bỉ.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/06-cover-atto2-scaled.webp",
            "kind": "exterior",
            "alt": "BYD ATTO 2 - hình 6"
          }
        },
        {
          "title": "Lái rực rỡ - Vui hết cỡ",
          "text": "Đèn pha LED sắc sảo được kết hợp với dải đèn định vị ban ngày đặc trưng giúp tối ưu hóa tầm nhìn và độ an toàn, soi sáng cho hành trình phía trước của bạn. Thiết kế đèn hậu chạy xuyên suốt nổi bật với biểu tượng vòng lặp Möbius dễ nhận biết, mang lại sự may mắn vô tận cho người lái và tất cả hành khách.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/16-byd-atto2-safety-01-xl-scaled.webp",
            "kind": "safety",
            "alt": "BYD ATTO 2 - hình 16"
          }
        },
        {
          "title": "Tiện nghi và linh hoạt trong đô thị",
          "text": "Hướng đến những người ưa khám phá thành phố, mẫu SUV nhỏ gọn dài 4,3m này sở hữu một không gian rộng rãi đáng kinh ngạc. Mẫu xe này cũng được tạo ra để di chuyển trong đô thị nhờ khả năng xoay xở linh hoạt, bán kính quay vòng nhỏ và cảm giác vận hành thoải mái.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/17-byd-tech-battery-scaled.webp",
            "kind": "technology",
            "alt": "BYD ATTO 2 - hình 17"
          }
        },
        {
          "title": "Chất liệu cao cấp",
          "text": "Nội thất của BYD ATTO 2 được chế tác với ghế ngồi bọc da thuần chay (vegan) bóng bẩy, thân thiện với môi trường cùng các vật liệu chất lượng cao xuyên suốt trên bảng điều khiển và các tấm ốp cửa.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/09-interior5-scaled.webp",
            "kind": "interior",
            "alt": "BYD ATTO 2 - hình 9"
          }
        },
        {
          "title": "Màn hình thông minh xoay 90 độ",
          "text": "Mẫu SUV nhỏ gọn này giúp bạn luôn kết nối và giải trí trên mọi hành trình nhờ màn hình xoay thông minh, nơi tích hợp trợ lý ảo Tiếng Việt, các tính năng định vị, ứng dụng và thông tin giải trí (Apple Carplay và Android Auto không dây).",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/10-interior7-scaled.webp",
            "kind": "interior",
            "alt": "BYD ATTO 2 - hình 10"
          }
        },
        {
          "title": "Ghế công thái học thoải mái mọi hành trình",
          "text": "Ghế ngồi đa chức năng mang lại sự thoải mái vượt trội, với khả năng điều chỉnh điện tử theo vị trí ngồi ưa thích. Vị trí lái được nâng cao giúp mang lại tầm nhìn tốt hơn khi đi trong dòng xe cộ đông đúc, giúp việc lái xe trong thành phố an toàn và dễ kiểm soát hơn.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/16-byd-atto2-safety-01-xl-scaled.webp",
            "kind": "safety",
            "alt": "BYD ATTO 2 - hình 16"
          }
        },
        {
          "title": "Không gian nội thất rộng rãi cho mọi vị trí ngồi",
          "text": "Nhờ nền tảng điện tử tiên tiến e-Platform 3.0 của BYD, ATTO 2 tối ưu hóa không gian với bộ pin nhỏ gọn, mang lại khoảng trống trên đầu và chỗ để chân rộng rãi cho cả hành khách phía trước và phía sau. Thiết kế thoáng đãng này đảm bảo mọi hành trình đều thoải mái, ngay cả với những hành khách có chiều cao vượt trội.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/11-interior3-scaled.webp",
            "kind": "interior",
            "alt": "BYD ATTO 2 - hình 11"
          }
        },
        {
          "title": "Thiết kế nội thất hiện đại, phong cách tương lai",
          "text": "Cùng với các tính năng ưu việt như đèn viền trang trí và sạc không dây, ATTO 2 mang đến sự kết hợp giữa tính linh hoạt, sự đa dụng, tinh tế và đầy công nghệ tương lai",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/13-interior1-scaled.webp",
            "kind": "interior",
            "alt": "BYD ATTO 2 - hình 12"
          }
        },
        {
          "title": "Thiết kế lưu trữ thông minh, tối ưu khoang hành lý",
          "text": "Mẫu SUV nhỏ gọn này có dung tích khoang hành lý là 400 lít và có thể mở rộng lên 1.340 lít khi hàng ghế sau được gập xuống. Các ngăn chứa đồ thông minh trong cabin đảm bảo luôn có không gian cho những vật dụng cần thiết, từ va-li cho đến các túi đồ mua sắm.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/13-interior1-scaled.webp",
            "kind": "interior",
            "alt": "BYD ATTO 2 - hình 13"
          }
        },
        {
          "title": "Sạc siêu tốc, tăng tốc tức thì",
          "text": "BYD ATTO 2 hỗ trợ sạc nhanh DC công suất 65kW, giúp sạc pin từ 30% lên 80% chỉ trong 28 phút. Cho dù đó là quãng đường đi làm hàng ngày hay một chuyến đi chơi cuối tuần, việc sạc pin luôn nhanh chóng và tiện lợi",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/18-byd-atto2-tech-03-xl.webp",
            "kind": "technology",
            "alt": "BYD ATTO 2 - hình 18"
          }
        },
        {
          "title": "Pin Blade của BYD",
          "text": "BYD đã là một tên tuổi tiên phong trong ngành công nghiệp pin trong hơn 29 năm. Mẫu pin Blade đột phá mới nhất của chúng tôi đã vượt qua một loạt các bài kiểm tra cực kỳ khắc nghiệt trong những điều kiện khắt khe nhất, trở thành một trong những loại pin an toàn nhất thế giới.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/16-byd-atto2-safety-01-xl-scaled.webp",
            "kind": "safety",
            "alt": "BYD ATTO 2 - hình 16"
          }
        },
        {
          "title": "Nền tảng e-Platform 3.0",
          "text": "BYD ATTO 2 được trang bị nền tảng điện tử tân tiến e-Platform 3.0 hàng đầu ngành công nghiệp của BYD. Nền tảng này được thiết kế dành riêng cho các dòng xe thuần điện và được chế tạo để tối ưu hóa trí thông minh, hiệu suất, độ an toàn và tính thẩm mỹ.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/16-byd-atto2-safety-01-xl-scaled.webp",
            "kind": "safety",
            "alt": "BYD ATTO 2 - hình 16"
          }
        },
        {
          "title": "Công nghệ CTB (cell-to-body)",
          "text": "BYD ATTO 2 được trang bị kết cấu Cell-to-Body (CTB) do chính BYD nghiên cứu và phát triển. Công nghệ tân tiến này tích hợp liền mạch Pin Blade vào thân xe, tạo thành một cấu trúc \"kẹp\" (sandwich) vững chắc có thể làm tăng độ cứng chống xoắn của thân xe lên 32%. Điều này giúp gia tăng độ an toàn, sự ổn định và khả năng xử lý. Với công nghệ CTB, Pin Blade không chỉ là một nguồn cung cấp năng lượng. Nó còn là một bộ phận kết cấu có khả năng chịu được lực tác động rất lớn.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/16-byd-atto2-safety-01-xl-scaled.webp",
            "kind": "safety",
            "alt": "BYD ATTO 2 - hình 16"
          }
        },
        {
          "title": "Hệ truyền động điện 8 trong 1 được sản xuất hàng loạt đầu tiên trên thế giới.",
          "text": "Sức mạnh của BYD nằm ở việc sở hữu toàn diện chuỗi cung ứng, từ khâu lên ý tưởng cho đến khi hoàn thiện sản phẩm. BYD tích hợp liền mạch vào mọi mẫu xe, bao gồm cả BYD ATTO 2: bộ điều khiển VCU, hệ thống quản lý pin BMS, bộ điều khiển động cơ MCU, bộ phân phối điện PDU, bộ chuyển đổi DC-DC, bộ sạc tích hợp, động cơ và hộp số. Sự đổi mới này đã dẫn đến hệ truyền động điện 8 trong 1 được sản xuất hàng loạt đầu tiên trên thế giới. Bằng cách kết hợp các bộ phận này một cách chuyên nghiệp, BYD tối đa hóa việc sử dụng không gian và nâng cao hiệu quả sử dụng năng lượng để mang đến một trải nghiệm lái SUV điện đột phá.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/19-byd-atto2-tech-04-xl.webp",
            "kind": "technology",
            "alt": "BYD ATTO 2 - hình 19"
          }
        },
        {
          "title": "Trang bị tiêu chuẩn: Hệ thống bơm nhiệt hiệu suất cao",
          "text": "BYD ATTO 2 được trang bị tiêu chuẩn hệ thống bơm nhiệt tiết kiệm năng lượng tiên tiến. Hoạt động đáng tin cậy trong dải nhiệt độ rộng, hệ thống này được thiết kế để tận dụng nhiệt dư từ môi trường xung quanh xe, hệ truyền động, khoang hành khách và thậm chí từ cả pin. Nó giúp nâng cao hiệu suất nhiệt và giảm tổn thất năng lượng dù là khi sưởi ấm hay làm mát. Nhờ đó, phạm vi hoạt động của xe khi di chuyển trong điều kiện nhiệt độ thấp được gia tăng.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/14-interior2-scaled.webp",
            "kind": "interior",
            "alt": "BYD ATTO 2 - hình 14"
          }
        },
        {
          "title": "Thắp sáng cuộc sống mỗi ngày",
          "text": "Biến BYD ATTO 2 thành một trạm sạc di động với chức năng cấp điện cho các thiết bị khác (Vehicle-to-Load - V2L), làm phong phú thêm các hoạt động ngoài trời của bạn bằng cách cho phép cắm và sử dụng nhiều loại thiết bị một cách dễ dàng. Cung cấp năng lượng cho các thiết bị như máy chơi game, vận hành các dụng cụ để thưởng thức một tách cà phê, hay sạc các đồ dùng công nghệ trong những chuyến dã ngoại—hoàn hảo cho các buổi picnic, cắm trại và nhiều hơn thế nữa. Giới hạn duy nhất chính là trí tưởng tượng của bạn.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-atto-2/source/20-byd-atto2-tech-05-xl.webp",
            "kind": "technology",
            "alt": "BYD ATTO 2 - hình 20"
          }
        }
      ],
      "allContentBlocks": [
        {
          "title": "Xe điện đô thị thế hệ mới",
          "text": "BYD ATTO 2 áp dụng ngôn ngữ thiết kế \"Mặt Rồng\" (Dragon Face) đặc trưng của BYD, được sáng tạo bởi Giám đốc Thiết kế Toàn cầu; ông Wolfgang Egger. Các phần bodykit nhô ra ở đầu và đuôi xe được làm ngắn cùng những đường cong mạnh mẽ trên thân xe tạo nên vẻ ngoài thể thao, trong khi đó, ngoại thất cứng cáp lại nhấn mạnh sự mạnh mẽ và bền bỉ."
        },
        {
          "title": "Lái rực rỡ - Vui hết cỡ",
          "text": "Đèn pha LED sắc sảo được kết hợp với dải đèn định vị ban ngày đặc trưng giúp tối ưu hóa tầm nhìn và độ an toàn, soi sáng cho hành trình phía trước của bạn. Thiết kế đèn hậu chạy xuyên suốt nổi bật với biểu tượng vòng lặp Möbius dễ nhận biết, mang lại sự may mắn vô tận cho người lái và tất cả hành khách."
        },
        {
          "title": "Tiện nghi và linh hoạt trong đô thị",
          "text": "Hướng đến những người ưa khám phá thành phố, mẫu SUV nhỏ gọn dài 4,3m này sở hữu một không gian rộng rãi đáng kinh ngạc. Mẫu xe này cũng được tạo ra để di chuyển trong đô thị nhờ khả năng xoay xở linh hoạt, bán kính quay vòng nhỏ và cảm giác vận hành thoải mái."
        },
        {
          "title": "Chất liệu cao cấp",
          "text": "Nội thất của BYD ATTO 2 được chế tác với ghế ngồi bọc da thuần chay (vegan) bóng bẩy, thân thiện với môi trường cùng các vật liệu chất lượng cao xuyên suốt trên bảng điều khiển và các tấm ốp cửa."
        },
        {
          "title": "Màn hình thông minh xoay 90 độ",
          "text": "Mẫu SUV nhỏ gọn này giúp bạn luôn kết nối và giải trí trên mọi hành trình nhờ màn hình xoay thông minh, nơi tích hợp trợ lý ảo Tiếng Việt, các tính năng định vị, ứng dụng và thông tin giải trí (Apple Carplay và Android Auto không dây)."
        },
        {
          "title": "Ghế công thái học thoải mái mọi hành trình",
          "text": "Ghế ngồi đa chức năng mang lại sự thoải mái vượt trội, với khả năng điều chỉnh điện tử theo vị trí ngồi ưa thích. Vị trí lái được nâng cao giúp mang lại tầm nhìn tốt hơn khi đi trong dòng xe cộ đông đúc, giúp việc lái xe trong thành phố an toàn và dễ kiểm soát hơn."
        },
        {
          "title": "Không gian nội thất rộng rãi cho mọi vị trí ngồi",
          "text": "Nhờ nền tảng điện tử tiên tiến e-Platform 3.0 của BYD, ATTO 2 tối ưu hóa không gian với bộ pin nhỏ gọn, mang lại khoảng trống trên đầu và chỗ để chân rộng rãi cho cả hành khách phía trước và phía sau. Thiết kế thoáng đãng này đảm bảo mọi hành trình đều thoải mái, ngay cả với những hành khách có chiều cao vượt trội."
        },
        {
          "title": "Thiết kế nội thất hiện đại, phong cách tương lai",
          "text": "Cùng với các tính năng ưu việt như đèn viền trang trí và sạc không dây, ATTO 2 mang đến sự kết hợp giữa tính linh hoạt, sự đa dụng, tinh tế và đầy công nghệ tương lai"
        },
        {
          "title": "Thiết kế lưu trữ thông minh, tối ưu khoang hành lý",
          "text": "Mẫu SUV nhỏ gọn này có dung tích khoang hành lý là 400 lít và có thể mở rộng lên 1.340 lít khi hàng ghế sau được gập xuống. Các ngăn chứa đồ thông minh trong cabin đảm bảo luôn có không gian cho những vật dụng cần thiết, từ va-li cho đến các túi đồ mua sắm."
        },
        {
          "title": "Sạc siêu tốc, tăng tốc tức thì",
          "text": "BYD ATTO 2 hỗ trợ sạc nhanh DC công suất 65kW, giúp sạc pin từ 30% lên 80% chỉ trong 28 phút. Cho dù đó là quãng đường đi làm hàng ngày hay một chuyến đi chơi cuối tuần, việc sạc pin luôn nhanh chóng và tiện lợi"
        },
        {
          "title": "Pin Blade của BYD",
          "text": "BYD đã là một tên tuổi tiên phong trong ngành công nghiệp pin trong hơn 29 năm. Mẫu pin Blade đột phá mới nhất của chúng tôi đã vượt qua một loạt các bài kiểm tra cực kỳ khắc nghiệt trong những điều kiện khắt khe nhất, trở thành một trong những loại pin an toàn nhất thế giới."
        },
        {
          "title": "Nền tảng e-Platform 3.0",
          "text": "BYD ATTO 2 được trang bị nền tảng điện tử tân tiến e-Platform 3.0 hàng đầu ngành công nghiệp của BYD. Nền tảng này được thiết kế dành riêng cho các dòng xe thuần điện và được chế tạo để tối ưu hóa trí thông minh, hiệu suất, độ an toàn và tính thẩm mỹ."
        },
        {
          "title": "Công nghệ CTB (cell-to-body)",
          "text": "BYD ATTO 2 được trang bị kết cấu Cell-to-Body (CTB) do chính BYD nghiên cứu và phát triển. Công nghệ tân tiến này tích hợp liền mạch Pin Blade vào thân xe, tạo thành một cấu trúc \"kẹp\" (sandwich) vững chắc có thể làm tăng độ cứng chống xoắn của thân xe lên 32%. Điều này giúp gia tăng độ an toàn, sự ổn định và khả năng xử lý. Với công nghệ CTB, Pin Blade không chỉ là một nguồn cung cấp năng lượng. Nó còn là một bộ phận kết cấu có khả năng chịu được lực tác động rất lớn."
        },
        {
          "title": "Hệ truyền động điện 8 trong 1 được sản xuất hàng loạt đầu tiên trên thế giới.",
          "text": "Sức mạnh của BYD nằm ở việc sở hữu toàn diện chuỗi cung ứng, từ khâu lên ý tưởng cho đến khi hoàn thiện sản phẩm. BYD tích hợp liền mạch vào mọi mẫu xe, bao gồm cả BYD ATTO 2: bộ điều khiển VCU, hệ thống quản lý pin BMS, bộ điều khiển động cơ MCU, bộ phân phối điện PDU, bộ chuyển đổi DC-DC, bộ sạc tích hợp, động cơ và hộp số. Sự đổi mới này đã dẫn đến hệ truyền động điện 8 trong 1 được sản xuất hàng loạt đầu tiên trên thế giới. Bằng cách kết hợp các bộ phận này một cách chuyên nghiệp, BYD tối đa hóa việc sử dụng không gian và nâng cao hiệu quả sử dụng năng lượng để mang đến một trải nghiệm lái SUV điện đột phá."
        },
        {
          "title": "Trang bị tiêu chuẩn: Hệ thống bơm nhiệt hiệu suất cao",
          "text": "BYD ATTO 2 được trang bị tiêu chuẩn hệ thống bơm nhiệt tiết kiệm năng lượng tiên tiến. Hoạt động đáng tin cậy trong dải nhiệt độ rộng, hệ thống này được thiết kế để tận dụng nhiệt dư từ môi trường xung quanh xe, hệ truyền động, khoang hành khách và thậm chí từ cả pin. Nó giúp nâng cao hiệu suất nhiệt và giảm tổn thất năng lượng dù là khi sưởi ấm hay làm mát. Nhờ đó, phạm vi hoạt động của xe khi di chuyển trong điều kiện nhiệt độ thấp được gia tăng."
        },
        {
          "title": "Thắp sáng cuộc sống mỗi ngày",
          "text": "Biến BYD ATTO 2 thành một trạm sạc di động với chức năng cấp điện cho các thiết bị khác (Vehicle-to-Load - V2L), làm phong phú thêm các hoạt động ngoài trời của bạn bằng cách cho phép cắm và sử dụng nhiều loại thiết bị một cách dễ dàng. Cung cấp năng lượng cho các thiết bị như máy chơi game, vận hành các dụng cụ để thưởng thức một tách cà phê, hay sạc các đồ dùng công nghệ trong những chuyến dã ngoại—hoàn hảo cho các buổi picnic, cắm trại và nhiều hơn thế nữa. Giới hạn duy nhất chính là trí tưởng tượng của bạn."
        }
      ]
    },
    {
      "slug": "byd-sealion-6",
      "name": "BYD SEALION 6",
      "displayOrder": BYD_VEHICLE_ORDER["byd-sealion-6"],
      "segment": "SUV",
      "powertrain": "DM-i",
      "menuFeatured": true,
      "badges": [
        "SUV",
        "DM-i"
      ],
      "price": 839000000,
      "priceLabel": "Từ 839.000.000đ",
      "image": "assets/images/vehicles/byd-sealion-6/card.webp",
      "heroImage": "assets/images/vehicles/byd-sealion-6/source/01-seal-u-dmi-1stbanner-l-1-scaled.webp",
      "gallery": [
        "assets/images/vehicles/byd-sealion-6/source/01-seal-u-dmi-1stbanner-l-1-scaled.webp",
        "assets/images/vehicles/byd-sealion-6/source/02-sealion-06-mau-1.webp",
        "assets/images/vehicles/byd-sealion-6/source/03-sealion-06-mau-2.webp",
        "assets/images/vehicles/byd-sealion-6/source/04-sealion-06-mau-3.webp",
        "assets/images/vehicles/byd-sealion-6/source/05-seal-u-dmi-exterior-01-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-6/source/06-seal-u-dmi-exterior-02-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/07-seal-u-dmi-exterior-03-xl.webp",
        "assets/images/vehicles/byd-sealion-6/source/08-seal-u-dmi-interior-01-brown-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-6/source/09-seal-u-dmi-interior-02-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/10-seal-u-dmi-interior-03-xl.webp",
        "assets/images/vehicles/byd-sealion-6/source/11-seal-u-dmi-interior-04-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/12-seal-u-dmi-interior-05-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/13-seal-u-dmi-interior-06-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/14-seal-u-dmi-interior-07-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/15-seal-u-dmi-interior-08-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/16-seal-u-dmi-interior-09-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/17-seal-u-dmi-tech-01-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-6/source/18-seal-u-dmi-tech-02-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/19-seal-u-dmi-tech-03-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/20-seal-u-dmi-tech-04-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/21-seal-u-dmi-driving-01-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-6/source/22-seal-u-dmi-driving-02-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/23-seal-u-dmi-driving-03-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/24-seal-u-dmi-driving-04-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/25-seal-u-dmi-driving-05-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/26-seal-u-dmi-charging-01-l-scaled.webp",
        "assets/images/vehicles/byd-sealion-6/source/27-seal-u-dmi-safety-01-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/28-seal-u-dmi-safety-02-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/29-seal-u-dmi-safety-03-l.webp",
        "assets/images/vehicles/byd-sealion-6/source/30-seal-u-dmi-v2l-01-l-scaled.webp"
      ],
      "shortDescription": "BYD Sealion 6 DM-i kết hợp tính thẩm mỹ của đại dương với những nét tương lai, tạo nên một chiếc SUV PHEV thân thiện với môi trường, nổi bật dành cho các gia đình.",
      "specs": [
        {
          "label": "Mỗi lần sạc đầy",
          "value": "1080 km"
        },
        {
          "label": "Công suất pin",
          "value": "18.3 kWh"
        },
        {
          "label": "AWD 0-100 km/h",
          "value": "5.9 s"
        }
      ],
      "colors": [
        "Harbour Grey",
        "Delan Black",
        "Arctic White"
      ],
      "sections": {
        "overview": {
          "title": "Thiết kế đại dương",
          "text": "BYD Sealion 6 DM-i kết hợp tính thẩm mỹ của đại dương với những nét tương lai, tạo nên một chiếc SUV PHEV thân thiện với môi trường, nổi bật dành cho các gia đình.",
          "image": "assets/images/vehicles/byd-sealion-6/source/05-seal-u-dmi-exterior-01-l-scaled.webp"
        },
        "exterior": {
          "title": "Tiết kiệm: Tiết kiệm năng lượng, Tiêu thụ nhiên liệu thấp",
          "text": "Tiêu thụ nhiên liệu 6,4 L/100km Phạm vi chạy hoàn toàn bằng EV 70km+ Phạm vi kết hợp lên đến 1080 km",
          "image": "assets/images/vehicles/byd-sealion-6/source/01-seal-u-dmi-1stbanner-l-1-scaled.webp"
        },
        "interior": {
          "title": "Bảng điều khiển trung tâm nổi tương lai",
          "text": "Nội thất của BYD Sealion 6 DM-i có thiết kế mang phong cách tương lai, nổi bật với bảng điều khiển trung tâm nổi có ngăn chứa đồ hai tầng kết hợp giữa tính thực dụng và sự thanh lịch.",
          "image": "assets/images/vehicles/byd-sealion-6/source/08-seal-u-dmi-interior-01-brown-l-scaled.webp"
        },
        "performance": {
          "title": "Thiết kế đại dương",
          "text": "BYD Sealion 6 DM-i kết hợp tính thẩm mỹ của đại dương với những nét tương lai, tạo nên một chiếc SUV PHEV thân thiện với môi trường, nổi bật dành cho các gia đình.",
          "image": "assets/images/vehicles/byd-sealion-6/source/05-seal-u-dmi-exterior-01-l-scaled.webp"
        },
        "safety": {
          "title": "Chiếu ra ánh sáng lớn hơn",
          "text": "Đèn pha của BYD Sealion 6 DM-i có đèn hình chữ U kép với cụm đèn so le tạo ra chùm sáng mạnh mẽ giúp quan sát tốt hơn và lái xe an toàn hơn.",
          "image": "assets/images/vehicles/byd-sealion-6/source/27-seal-u-dmi-safety-01-l.webp"
        }
      },
      "tagline": "Thiết kế đại dương",
      "availability": "Đang nhận báo giá",
      "officialUrl": "https://www.byd.com/vn/car/sealion6",
      "variants": [
        {
          "name": "Sealion 6 Dynamic",
          "price": 839000000,
          "priceLabel": "839.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        },
        {
          "name": "Sealion 6 Premium",
          "price": 936000000,
          "priceLabel": "936.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        }
      ],
      "colorOptions": [
        {
          "name": "Harbour Grey",
          "hex": "#747b80",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/02-sealion-06-mau-1.webp",
            "kind": "color",
            "alt": "BYD Sealion 6 DM-i - hình 2"
          }
        },
        {
          "name": "Delan Black",
          "hex": "#17191d",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/03-sealion-06-mau-2.webp",
            "kind": "color",
            "alt": "BYD Sealion 6 DM-i - hình 3"
          }
        },
        {
          "name": "Arctic White",
          "hex": "#f3f4f2",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/04-sealion-06-mau-3.webp",
            "kind": "color",
            "alt": "BYD Sealion 6 DM-i - hình 4"
          }
        }
      ],
      "highlights": [
        "DM-i Super Hybrid",
        "Tổng hành trình trên 1.200 km",
        "Màn hình xoay 15,6 inch",
        "Camera nhìn xuyên gầm"
      ],
      "specGroups": [
        {
          "title": "Kích thước",
          "items": [
            {
              "label": "Dài × Rộng × Cao",
              "value": "4.775 × 1.890 × 1.670 mm"
            },
            {
              "label": "Chiều dài cơ sở",
              "value": "2.765 mm"
            },
            {
              "label": "Khoang hành lý",
              "value": "425–1.440 lít"
            }
          ]
        },
        {
          "title": "DM-i Super Hybrid",
          "items": [
            {
              "label": "Dung lượng pin",
              "value": "18,3 kWh"
            },
            {
              "label": "Phạm vi thuần điện",
              "value": "Đến khoảng 100 km"
            },
            {
              "label": "Tổng hành trình",
              "value": "Trên 1.200 km"
            }
          ]
        },
        {
          "title": "Tiện nghi & an toàn",
          "items": [
            {
              "label": "Màn hình",
              "value": "15,6 inch xoay thông minh"
            },
            {
              "label": "Camera",
              "value": "360° và nhìn xuyên gầm"
            },
            {
              "label": "Hỗ trợ lái",
              "value": "ACC, AEB, BSD, RCTA/RCTB tùy phiên bản"
            }
          ]
        }
      ],
      "lastUpdated": "31/07/2026",
      "cardHighlights": [
        "DM-i Super Hybrid",
        "Tổng hành trình trên 1.200 km",
        "Màn hình xoay 15,6 inch"
      ],
      "brochureUrl": "/assets/catalogs/byd-sealion-6.pdf",
      "media": [
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/01-seal-u-dmi-1stbanner-l-1-scaled.webp",
          "kind": "hero",
          "alt": "BYD Sealion 6 DM-i - hình 1"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/02-sealion-06-mau-1.webp",
          "kind": "color",
          "alt": "BYD Sealion 6 DM-i - hình 2"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/03-sealion-06-mau-2.webp",
          "kind": "color",
          "alt": "BYD Sealion 6 DM-i - hình 3"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/04-sealion-06-mau-3.webp",
          "kind": "color",
          "alt": "BYD Sealion 6 DM-i - hình 4"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/05-seal-u-dmi-exterior-01-l-scaled.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 5"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/06-seal-u-dmi-exterior-02-l.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 6"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/07-seal-u-dmi-exterior-03-xl.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 7"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/08-seal-u-dmi-interior-01-brown-l-scaled.webp",
          "kind": "interior",
          "alt": "BYD Sealion 6 DM-i - hình 8"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/09-seal-u-dmi-interior-02-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 6 DM-i - hình 9"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/10-seal-u-dmi-interior-03-xl.webp",
          "kind": "interior",
          "alt": "BYD Sealion 6 DM-i - hình 10"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/11-seal-u-dmi-interior-04-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 6 DM-i - hình 11"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/12-seal-u-dmi-interior-05-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 6 DM-i - hình 12"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/13-seal-u-dmi-interior-06-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 6 DM-i - hình 13"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/14-seal-u-dmi-interior-07-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 6 DM-i - hình 14"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/15-seal-u-dmi-interior-08-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 6 DM-i - hình 15"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/16-seal-u-dmi-interior-09-l.webp",
          "kind": "interior",
          "alt": "BYD Sealion 6 DM-i - hình 16"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/17-seal-u-dmi-tech-01-l-scaled.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 17"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/18-seal-u-dmi-tech-02-l.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 18"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/19-seal-u-dmi-tech-03-l.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 19"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/20-seal-u-dmi-tech-04-l.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 20"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/21-seal-u-dmi-driving-01-l-scaled.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 21"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/22-seal-u-dmi-driving-02-l.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 22"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/23-seal-u-dmi-driving-03-l.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 23"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/24-seal-u-dmi-driving-04-l.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 24"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/25-seal-u-dmi-driving-05-l.webp",
          "kind": "technology",
          "alt": "BYD Sealion 6 DM-i - hình 25"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/26-seal-u-dmi-charging-01-l-scaled.webp",
          "kind": "charging",
          "alt": "BYD Sealion 6 DM-i - hình 26"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/27-seal-u-dmi-safety-01-l.webp",
          "kind": "safety",
          "alt": "BYD Sealion 6 DM-i - hình 27"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/28-seal-u-dmi-safety-02-l.webp",
          "kind": "safety",
          "alt": "BYD Sealion 6 DM-i - hình 28"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/29-seal-u-dmi-safety-03-l.webp",
          "kind": "safety",
          "alt": "BYD Sealion 6 DM-i - hình 29"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-6/source/30-seal-u-dmi-v2l-01-l-scaled.webp",
          "kind": "charging",
          "alt": "BYD Sealion 6 DM-i - hình 30"
        }
      ],
      "galleryCount": 30,
      "heroMedia": {
        "src": "assets/images/vehicles/byd-sealion-6/source/01-seal-u-dmi-1stbanner-l-1-scaled.webp",
        "kind": "hero",
        "alt": "BYD Sealion 6 DM-i - hình 1"
      },
      "galleryFallbacks": [],
      "storyBlocks": [
        {
          "title": "Thiết kế đại dương",
          "text": "BYD Sealion 6 DM-i kết hợp tính thẩm mỹ của đại dương với những nét tương lai, tạo nên một chiếc SUV PHEV thân thiện với môi trường, nổi bật dành cho các gia đình.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/05-seal-u-dmi-exterior-01-l-scaled.webp",
            "kind": "technology",
            "alt": "BYD Sealion 6 DM-i - hình 5"
          }
        },
        {
          "title": "Chiếu ra ánh sáng lớn hơn",
          "text": "Đèn pha của BYD Sealion 6 DM-i có đèn hình chữ U kép với cụm đèn so le tạo ra chùm sáng mạnh mẽ giúp quan sát tốt hơn và lái xe an toàn hơn.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/27-seal-u-dmi-safety-01-l.webp",
            "kind": "safety",
            "alt": "BYD Sealion 6 DM-i - hình 27"
          }
        },
        {
          "title": "Bánh xe 19 inch thời trang",
          "text": "BYD Sealion 6 DM-i có bánh xe khí động học 19 inch kết hợp hoàn hảo giữa phong cách và hiệu quả. Những bánh xe này được chế tạo cẩn thận để nâng cao tính thẩm mỹ của xe đồng thời giảm lực cản, mang lại trải nghiệm lái xe mượt mà và phong cách.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/06-seal-u-dmi-exterior-02-l.webp",
            "kind": "technology",
            "alt": "BYD Sealion 6 DM-i - hình 6"
          }
        },
        {
          "title": "Bảng điều khiển trung tâm nổi tương lai",
          "text": "Nội thất của BYD Sealion 6 DM-i có thiết kế mang phong cách tương lai, nổi bật với bảng điều khiển trung tâm nổi có ngăn chứa đồ hai tầng kết hợp giữa tính thực dụng và sự thanh lịch.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/08-seal-u-dmi-interior-01-brown-l-scaled.webp",
            "kind": "interior",
            "alt": "BYD Sealion 6 DM-i - hình 8"
          }
        },
        {
          "title": "Màn hình xoay luôn cảm ứng",
          "text": "BYD Sealion 6 DM-i có màn hình cảm ứng lớn, có thể xoay, hoạt động như một trung tâm điều khiển kết nối và thông tin giải trí.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/09-seal-u-dmi-interior-02-l.webp",
            "kind": "interior",
            "alt": "BYD Sealion 6 DM-i - hình 9"
          }
        },
        {
          "title": "Đòn bẩy bánh răng tinh thể đại dương",
          "text": "Thiết kế nội thất của BYD Sealion 6 DM-i lấy cảm hứng từ vẻ đẹp của đại dương, như được thấy ở cần số pha lê quyến rũ. Các nút chức năng thiết yếu bao quanh tính năng tuyệt đẹp này và tăng thêm tính thẩm mỹ tổng thể của BYD Sealion 6 DM-i. Nó cũng cung cấp khả năng điều khiển dễ dàng trong tầm tay bạn.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/10-seal-u-dmi-interior-03-xl.webp",
            "kind": "interior",
            "alt": "BYD Sealion 6 DM-i - hình 10"
          }
        },
        {
          "title": "Thoải mái với ghế đa chức năng",
          "text": "BYD Sealion 6 DM-i là một chiếc SUV lai với ghế ngồi đa chức năng tích hợp được thiết kế để mang lại sự thoải mái đặc biệt. Ghế trước được trang bị khả năng thông gió và sưởi ấm, điều chỉnh điện và chức năng nhớ cho phép bạn dễ dàng tìm thấy vị trí ngồi ưa thích của mình. Điều này đảm bảo trải nghiệm thoải mái nhất quán, bất kể bạn đi xa đến đâu.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/11-seal-u-dmi-interior-04-l.webp",
            "kind": "interior",
            "alt": "BYD Sealion 6 DM-i - hình 11"
          }
        },
        {
          "title": "Mái che toàn cảnh thoáng mát và nhẹ nhàng",
          "text": "Trải nghiệm vẻ đẹp của ánh sáng tự nhiên và sự tự do của thiên nhiên ngoài trời với cửa sổ trời toàn cảnh trượt rộng rãi của SUV hybrid cắm điện. Cho dù đó là bầu trời trong xanh hay đêm đầy sao quyến rũ, tính năng này cho phép nhiều ánh sáng và không khí trong lành tràn vào cabin, giúp bạn cảm thấy gắn kết hơn với môi trường xung quanh.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/12-seal-u-dmi-interior-05-l.webp",
            "kind": "interior",
            "alt": "BYD Sealion 6 DM-i - hình 12"
          }
        },
        {
          "title": "Thưởng thức đắm chìm",
          "text": "BYD Sealion 6 DM-i mang đến trải nghiệm lái xe tuyệt vời. Xe được trang bị công nghệ NVH (Tiếng ồn, Độ rung và Độ xóc) tiên tiến, đảm bảo bầu không khí yên tĩnh và thư giãn trong suốt hành trình.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/07-seal-u-dmi-exterior-03-xl.webp",
            "kind": "technology",
            "alt": "BYD Sealion 6 DM-i - hình 7"
          }
        },
        {
          "title": "Màn hình hiển thị Head-Up an toàn",
          "text": "BYD Sealion 6 DM-i được trang bị công nghệ hiển thị thông tin quan trọng trên kính chắn gió một cách hiệu quả. Tính năng tiên tiến này đảm bảo dữ liệu quan trọng luôn nằm trong tầm nhìn của người lái, giúp người lái nhận thức rõ hơn và tập trung hơn vào đường đi.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/28-seal-u-dmi-safety-02-l.webp",
            "kind": "safety",
            "alt": "BYD Sealion 6 DM-i - hình 28"
          }
        },
        {
          "title": "Ghế sau rộng rãi",
          "text": "BYD Sealion 6 DM-i cung cấp ghế sau rộng rãi với sàn phẳng và nhiều chỗ để chân, mang lại sự thoải mái và thư giãn cho hành khách trên những chuyến đi dài. Ghế hỗ trợ càng làm tăng thêm sự thoải mái cho hành khách ngồi ghế sau.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/13-seal-u-dmi-interior-06-l.webp",
            "kind": "interior",
            "alt": "BYD Sealion 6 DM-i - hình 13"
          }
        },
        {
          "title": "Dung lượng lưu trữ lớn",
          "text": "BYD Sealion 6 DM-i có dung tích cốp xe rộng rãi 425 lít có thể mở rộng lên đến 1.440 lít bằng cách gập hàng ghế sau xuống.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/14-seal-u-dmi-interior-07-l.webp",
            "kind": "interior",
            "alt": "BYD Sealion 6 DM-i - hình 14"
          }
        },
        {
          "title": "Công nghệ BYD Super DM",
          "text": "Động lực thúc đẩy đằng sau SEAL U DMi hoàn toàn mới là Công nghệ BYD Super DM.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/17-seal-u-dmi-tech-01-l-scaled.webp",
            "kind": "technology",
            "alt": "BYD Sealion 6 DM-i - hình 17"
          }
        },
        {
          "title": "Hệ thống điện lai (EHS)",
          "text": "Hệ thống điện hybrid (EHS) là hệ thống truyền động tích hợp cao kết hợp động cơ kép tốc độ cao, bộ điều khiển kép và công nghệ làm mát bằng dầu tiên tiến để tăng mật độ công suất và hiệu suất của động cơ.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/18-seal-u-dmi-tech-02-l.webp",
            "kind": "technology",
            "alt": "BYD Sealion 6 DM-i - hình 18"
          }
        },
        {
          "title": "Động cơ lai Xiaoyun siêu hiệu quả",
          "text": "Thiết kế động cơ cải tiến được chế tạo riêng cho Công nghệ Super DM. Động cơ Xiaoyun, với hiệu suất nhiệt hàng đầu thế giới, có cấu trúc nhỏ gọn đơn giản, tăng công suất với công suất cực đại và mô-men xoắn cao.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/19-seal-u-dmi-tech-03-l.webp",
            "kind": "technology",
            "alt": "BYD Sealion 6 DM-i - hình 19"
          }
        },
        {
          "title": "Công nghệ Super DM với Pin lưỡi dao Bespoke",
          "text": "Công nghệ BYD Super DM sử dụng phiên bản tùy chỉnh của Pin Blade được đánh giá cao. Những Pin Blade tùy chỉnh này dành cho nền tảng hybrid có công suất từ 18,3 kWh, đạt phạm vi chạy hoàn toàn bằng điện từ 70km trong khi vẫn mang lại nhiều lợi ích.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/20-seal-u-dmi-tech-04-l.webp",
            "kind": "technology",
            "alt": "BYD Sealion 6 DM-i - hình 20"
          }
        },
        {
          "title": "Trải nghiệm lái xe thân thiện với môi trường, hiệu quả và phấn khích",
          "text": "Là một chiếc SUV PHEV, BYD Sealion 6 DM-i mang đến trải nghiệm lái xe thân thiện với môi trường đặc biệt. Nó kết hợp hiệu quả năng lượng và tiết kiệm nhiên liệu với khả năng tăng tốc nhanh và nhạy, cũng như sự thoải mái khi lái xe êm ái và yên tĩnh.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/21-seal-u-dmi-driving-01-l-scaled.webp",
            "kind": "technology",
            "alt": "BYD Sealion 6 DM-i - hình 21"
          }
        },
        {
          "title": "Tiết kiệm: Tiết kiệm năng lượng, Tiêu thụ nhiên liệu thấp",
          "text": "Tiêu thụ nhiên liệu 6,4 L/100km Phạm vi chạy hoàn toàn bằng EV 70km+ Phạm vi kết hợp lên đến 1080 km",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/01-seal-u-dmi-1stbanner-l-1-scaled.webp",
            "kind": "hero",
            "alt": "BYD Sealion 6 DM-i - hình 1"
          }
        },
        {
          "title": "Nhanh: Phấn khích, Phản ứng nhanh và Năng động",
          "text": "5,9 giây dẫn động bốn bánh 0-100km/h",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/02-sealion-06-mau-1.webp",
            "kind": "color",
            "alt": "BYD Sealion 6 DM-i - hình 2"
          }
        },
        {
          "title": "Yên tĩnh: Mang lại sự thanh thản cho những chuyến đi",
          "text": "NVH Excellence, giảm tiếng ồn và độ rung của xe.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/03-sealion-06-mau-2.webp",
            "kind": "color",
            "alt": "BYD Sealion 6 DM-i - hình 3"
          }
        },
        {
          "title": "Cắm và sạc chỉ trong 35 phút",
          "text": "Trải nghiệm sạc nhanh và hiệu quả với BYD Sealion 6 DM-i.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/22-seal-u-dmi-driving-02-l.webp",
            "kind": "technology",
            "alt": "BYD Sealion 6 DM-i - hình 22"
          }
        },
        {
          "title": "Phát hiện điểm mù (BSD)",
          "text": "Hệ thống phát hiện điểm mù sẽ cảnh báo bạn khi có xe đang tiến đến gần nằm trong điểm mù của gương chiếu hậu bên ngoài.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/04-sealion-06-mau-3.webp",
            "kind": "color",
            "alt": "BYD Sealion 6 DM-i - hình 4"
          }
        },
        {
          "title": "Kiểm soát hành trình thông minh (ICC)",
          "text": "Hệ thống Kiểm soát hành trình thông minh (ICC) của chúng tôi kết hợp Kiểm soát hành trình thích ứng (ACC) và Kiểm soát giữ làn đường (LCC). Hệ thống này hỗ trợ kiểm soát xe theo cả chiều dọc và chiều ngang ở tốc độ từ 0 đến 120 km/h để tăng cường sự thư giãn và thoải mái.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/29-seal-u-dmi-safety-03-l.webp",
            "kind": "safety",
            "alt": "BYD Sealion 6 DM-i - hình 29"
          }
        },
        {
          "title": "Cảnh báo phương tiện cắt ngang phía sau (RCTA) & Phanh phương tiện cắt ngang phía sau (RCTB)",
          "text": "Khi lùi, radar sóng milimét góc sau sẽ theo dõi những người tham gia giao thông khác đang tiến đến phía sau xe theo thời gian thực, phát ra âm thanh cảnh báo hoặc phanh trong trường hợp có khả năng va chạm.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/27-seal-u-dmi-safety-01-l.webp",
            "kind": "safety",
            "alt": "BYD Sealion 6 DM-i - hình 27"
          }
        },
        {
          "title": "Buồng lái thông minh BYD",
          "text": "BYD Sealion 6 DM-i được trang bị hệ thống dẫn đường tiêu chuẩn và một loạt các ứng dụng, chẳng hạn như Android Auto và Apple CarPlay. Hệ thống kết nối 4G mang đến trải nghiệm lái xe cực kỳ thông minh, kết hợp thông tin giải trí tiên tiến với điều khiển bằng giọng nói thông minh. Với các bản cập nhật Over The Air (OTA), bạn luôn có thể truy cập vào những tiến bộ công nghệ mới nhất.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/23-seal-u-dmi-driving-03-l.webp",
            "kind": "technology",
            "alt": "BYD Sealion 6 DM-i - hình 23"
          }
        },
        {
          "title": "Kiểm soát trong tầm tay bạn",
          "text": "Xe SUV hybrid cắm điện của chúng tôi cung cấp tiện ích mở cửa không cần chìa khóa NFC và cho phép bạn điều khiển điều hòa từ xa để bạn có thể chuẩn bị cho hành trình phía trước ngay cả trước khi bước ra ngoài.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/28-seal-u-dmi-safety-02-l.webp",
            "kind": "safety",
            "alt": "BYD Sealion 6 DM-i - hình 28"
          }
        },
        {
          "title": "Sạc cuộc sống của bạn",
          "text": "Trải nghiệm không gian ngoài trời tuyệt vời với BYD Sealion 6 DM-i. Chiếc SUV hybrid này có công nghệ Vehicle-to-Load (V2L), cho phép nó biến thành nguồn điện di động.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-6/source/24-seal-u-dmi-driving-04-l.webp",
            "kind": "technology",
            "alt": "BYD Sealion 6 DM-i - hình 24"
          }
        }
      ],
      "allContentBlocks": [
        {
          "title": "Thiết kế đại dương",
          "text": "BYD Sealion 6 DM-i kết hợp tính thẩm mỹ của đại dương với những nét tương lai, tạo nên một chiếc SUV PHEV thân thiện với môi trường, nổi bật dành cho các gia đình."
        },
        {
          "title": "Chiếu ra ánh sáng lớn hơn",
          "text": "Đèn pha của BYD Sealion 6 DM-i có đèn hình chữ U kép với cụm đèn so le tạo ra chùm sáng mạnh mẽ giúp quan sát tốt hơn và lái xe an toàn hơn."
        },
        {
          "title": "Bánh xe 19 inch thời trang",
          "text": "BYD Sealion 6 DM-i có bánh xe khí động học 19 inch kết hợp hoàn hảo giữa phong cách và hiệu quả. Những bánh xe này được chế tạo cẩn thận để nâng cao tính thẩm mỹ của xe đồng thời giảm lực cản, mang lại trải nghiệm lái xe mượt mà và phong cách."
        },
        {
          "title": "Bảng điều khiển trung tâm nổi tương lai",
          "text": "Nội thất của BYD Sealion 6 DM-i có thiết kế mang phong cách tương lai, nổi bật với bảng điều khiển trung tâm nổi có ngăn chứa đồ hai tầng kết hợp giữa tính thực dụng và sự thanh lịch."
        },
        {
          "title": "Màn hình xoay luôn cảm ứng",
          "text": "BYD Sealion 6 DM-i có màn hình cảm ứng lớn, có thể xoay, hoạt động như một trung tâm điều khiển kết nối và thông tin giải trí."
        },
        {
          "title": "Đòn bẩy bánh răng tinh thể đại dương",
          "text": "Thiết kế nội thất của BYD Sealion 6 DM-i lấy cảm hứng từ vẻ đẹp của đại dương, như được thấy ở cần số pha lê quyến rũ. Các nút chức năng thiết yếu bao quanh tính năng tuyệt đẹp này và tăng thêm tính thẩm mỹ tổng thể của BYD Sealion 6 DM-i. Nó cũng cung cấp khả năng điều khiển dễ dàng trong tầm tay bạn."
        },
        {
          "title": "Thoải mái với ghế đa chức năng",
          "text": "BYD Sealion 6 DM-i là một chiếc SUV lai với ghế ngồi đa chức năng tích hợp được thiết kế để mang lại sự thoải mái đặc biệt. Ghế trước được trang bị khả năng thông gió và sưởi ấm, điều chỉnh điện và chức năng nhớ cho phép bạn dễ dàng tìm thấy vị trí ngồi ưa thích của mình. Điều này đảm bảo trải nghiệm thoải mái nhất quán, bất kể bạn đi xa đến đâu."
        },
        {
          "title": "Mái che toàn cảnh thoáng mát và nhẹ nhàng",
          "text": "Trải nghiệm vẻ đẹp của ánh sáng tự nhiên và sự tự do của thiên nhiên ngoài trời với cửa sổ trời toàn cảnh trượt rộng rãi của SUV hybrid cắm điện. Cho dù đó là bầu trời trong xanh hay đêm đầy sao quyến rũ, tính năng này cho phép nhiều ánh sáng và không khí trong lành tràn vào cabin, giúp bạn cảm thấy gắn kết hơn với môi trường xung quanh."
        },
        {
          "title": "Thưởng thức đắm chìm",
          "text": "BYD Sealion 6 DM-i mang đến trải nghiệm lái xe tuyệt vời. Xe được trang bị công nghệ NVH (Tiếng ồn, Độ rung và Độ xóc) tiên tiến, đảm bảo bầu không khí yên tĩnh và thư giãn trong suốt hành trình."
        },
        {
          "title": "Màn hình hiển thị Head-Up an toàn",
          "text": "BYD Sealion 6 DM-i được trang bị công nghệ hiển thị thông tin quan trọng trên kính chắn gió một cách hiệu quả. Tính năng tiên tiến này đảm bảo dữ liệu quan trọng luôn nằm trong tầm nhìn của người lái, giúp người lái nhận thức rõ hơn và tập trung hơn vào đường đi."
        },
        {
          "title": "Ghế sau rộng rãi",
          "text": "BYD Sealion 6 DM-i cung cấp ghế sau rộng rãi với sàn phẳng và nhiều chỗ để chân, mang lại sự thoải mái và thư giãn cho hành khách trên những chuyến đi dài. Ghế hỗ trợ càng làm tăng thêm sự thoải mái cho hành khách ngồi ghế sau."
        },
        {
          "title": "Dung lượng lưu trữ lớn",
          "text": "BYD Sealion 6 DM-i có dung tích cốp xe rộng rãi 425 lít có thể mở rộng lên đến 1.440 lít bằng cách gập hàng ghế sau xuống."
        },
        {
          "title": "Công nghệ BYD Super DM",
          "text": "Động lực thúc đẩy đằng sau SEAL U DMi hoàn toàn mới là Công nghệ BYD Super DM."
        },
        {
          "title": "Hệ thống điện lai (EHS)",
          "text": "Hệ thống điện hybrid (EHS) là hệ thống truyền động tích hợp cao kết hợp động cơ kép tốc độ cao, bộ điều khiển kép và công nghệ làm mát bằng dầu tiên tiến để tăng mật độ công suất và hiệu suất của động cơ."
        },
        {
          "title": "Động cơ lai Xiaoyun siêu hiệu quả",
          "text": "Thiết kế động cơ cải tiến được chế tạo riêng cho Công nghệ Super DM. Động cơ Xiaoyun, với hiệu suất nhiệt hàng đầu thế giới, có cấu trúc nhỏ gọn đơn giản, tăng công suất với công suất cực đại và mô-men xoắn cao."
        },
        {
          "title": "Công nghệ Super DM với Pin lưỡi dao Bespoke",
          "text": "Công nghệ BYD Super DM sử dụng phiên bản tùy chỉnh của Pin Blade được đánh giá cao. Những Pin Blade tùy chỉnh này dành cho nền tảng hybrid có công suất từ 18,3 kWh, đạt phạm vi chạy hoàn toàn bằng điện từ 70km trong khi vẫn mang lại nhiều lợi ích."
        },
        {
          "title": "Trải nghiệm lái xe thân thiện với môi trường, hiệu quả và phấn khích",
          "text": "Là một chiếc SUV PHEV, BYD Sealion 6 DM-i mang đến trải nghiệm lái xe thân thiện với môi trường đặc biệt. Nó kết hợp hiệu quả năng lượng và tiết kiệm nhiên liệu với khả năng tăng tốc nhanh và nhạy, cũng như sự thoải mái khi lái xe êm ái và yên tĩnh."
        },
        {
          "title": "Tiết kiệm: Tiết kiệm năng lượng, Tiêu thụ nhiên liệu thấp",
          "text": "Tiêu thụ nhiên liệu 6,4 L/100km Phạm vi chạy hoàn toàn bằng EV 70km+ Phạm vi kết hợp lên đến 1080 km"
        },
        {
          "title": "Nhanh: Phấn khích, Phản ứng nhanh và Năng động",
          "text": "5,9 giây dẫn động bốn bánh 0-100km/h"
        },
        {
          "title": "Yên tĩnh: Mang lại sự thanh thản cho những chuyến đi",
          "text": "NVH Excellence, giảm tiếng ồn và độ rung của xe."
        },
        {
          "title": "Cắm và sạc chỉ trong 35 phút",
          "text": "Trải nghiệm sạc nhanh và hiệu quả với BYD Sealion 6 DM-i."
        },
        {
          "title": "Phát hiện điểm mù (BSD)",
          "text": "Hệ thống phát hiện điểm mù sẽ cảnh báo bạn khi có xe đang tiến đến gần nằm trong điểm mù của gương chiếu hậu bên ngoài."
        },
        {
          "title": "Kiểm soát hành trình thông minh (ICC)",
          "text": "Hệ thống Kiểm soát hành trình thông minh (ICC) của chúng tôi kết hợp Kiểm soát hành trình thích ứng (ACC) và Kiểm soát giữ làn đường (LCC). Hệ thống này hỗ trợ kiểm soát xe theo cả chiều dọc và chiều ngang ở tốc độ từ 0 đến 120 km/h để tăng cường sự thư giãn và thoải mái."
        },
        {
          "title": "Cảnh báo phương tiện cắt ngang phía sau (RCTA) & Phanh phương tiện cắt ngang phía sau (RCTB)",
          "text": "Khi lùi, radar sóng milimét góc sau sẽ theo dõi những người tham gia giao thông khác đang tiến đến phía sau xe theo thời gian thực, phát ra âm thanh cảnh báo hoặc phanh trong trường hợp có khả năng va chạm."
        },
        {
          "title": "Buồng lái thông minh BYD",
          "text": "BYD Sealion 6 DM-i được trang bị hệ thống dẫn đường tiêu chuẩn và một loạt các ứng dụng, chẳng hạn như Android Auto và Apple CarPlay. Hệ thống kết nối 4G mang đến trải nghiệm lái xe cực kỳ thông minh, kết hợp thông tin giải trí tiên tiến với điều khiển bằng giọng nói thông minh. Với các bản cập nhật Over The Air (OTA), bạn luôn có thể truy cập vào những tiến bộ công nghệ mới nhất."
        },
        {
          "title": "Kiểm soát trong tầm tay bạn",
          "text": "Xe SUV hybrid cắm điện của chúng tôi cung cấp tiện ích mở cửa không cần chìa khóa NFC và cho phép bạn điều khiển điều hòa từ xa để bạn có thể chuẩn bị cho hành trình phía trước ngay cả trước khi bước ra ngoài."
        },
        {
          "title": "Sạc cuộc sống của bạn",
          "text": "Trải nghiệm không gian ngoài trời tuyệt vời với BYD Sealion 6 DM-i. Chiếc SUV hybrid này có công nghệ Vehicle-to-Load (V2L), cho phép nó biến thành nguồn điện di động."
        }
      ]
    },
    {
      "slug": "byd-han",
      "name": "BYD Han",
      "displayOrder": BYD_VEHICLE_ORDER["byd-han"],
      "segment": "Sedan",
      "powertrain": "EV",
      "menuFeatured": true,
      "badges": [
        "Sedan",
        "Thuần điện"
      ],
      "price": 1489000000,
      "priceLabel": "1.489.000.000đ",
      "image": "assets/images/vehicles/byd-han/card.webp",
      "heroImage": "assets/images/vehicles/byd-han/source/01-banner-pc-1-scaled.webp",
      "gallery": [
        "assets/images/vehicles/byd-han/source/01-banner-pc-1-scaled.webp",
        "assets/images/vehicles/byd-han/source/02-banner-pc-2-scaled.webp",
        "assets/images/vehicles/byd-han/source/03-banner-pc-3-scaled.webp",
        "assets/images/vehicles/byd-han/source/04-banner3-sub1.webp",
        "assets/images/vehicles/byd-han/source/06-banner3-sub2.webp",
        "assets/images/vehicles/byd-han/source/08-banner-pc-4-scaled.webp",
        "assets/images/vehicles/byd-han/source/10-console-central-sub-pc.webp",
        "assets/images/vehicles/byd-han/source/11-dynaudio-sub-pc.webp",
        "assets/images/vehicles/byd-han/source/12-painel-exibido-sub-pc.webp",
        "assets/images/vehicles/byd-han/source/13-bancos-traseiro-sub-pc.webp",
        "assets/images/vehicles/byd-han/source/14-banner-pc-5-scaled.webp",
        "assets/images/vehicles/byd-han/source/15-banner-pc-6-scaled.webp"
      ],
      "shortDescription": "BYD HAN sẽ đưa bạn vào một chuyến hành trình đầy hứng khởi với khả năng tăng tốc từ 0 lên 100 km/h chỉ trong 3,9 giây. Hệ dẫn động bốn bánh điện sẽ kích hoạt theo thời gian thực và cung cấp khả năng kiểm soát lực kéo tuyệt vời trong mọi điều kiện thời tiết.",
      "specs": [
        {
          "label": "Tăng tốc 0-100 km/h",
          "value": "3.9 s"
        },
        {
          "label": "Quãng đường di chuyển 1 lần sạc đầy pin (WLTP)",
          "value": "521 km"
        },
        {
          "label": "Sạc nhanh (DC) SOC 30%-80%",
          "value": "34 phút"
        }
      ],
      "colors": [
        "Trắng Snow",
        "Đen Space",
        "Xám Time",
        "Đỏ Emperor"
      ],
      "sections": {
        "overview": {
          "title": "Nâng tầm trải nghiệm lái cùng hệ dẫn động AWD",
          "text": "BYD HAN sẽ đưa bạn vào một chuyến hành trình đầy hứng khởi với khả năng tăng tốc từ 0 lên 100 km/h chỉ trong 3,9 giây. Hệ dẫn động bốn bánh điện sẽ kích hoạt theo thời gian thực và cung cấp khả năng kiểm soát lực kéo tuyệt vời trong mọi điều kiện thời tiết.",
          "image": "assets/images/vehicles/byd-han/source/04-banner3-sub1.webp"
        },
        "exterior": {
          "title": "Ngôn ngữ thiết kế \"Dragon Face\"",
          "text": "Phần đầu lấy cảm hứng từ loài rồng kết hợp cùng dải đèn pha LED tuyệt đẹp mang đến cảm giác thanh lịch, sang trọng cho mọi hành trình của bạn.",
          "image": "assets/images/vehicles/byd-han/source/04-banner3-sub1.webp"
        },
        "interior": {
          "title": "Truy cập mọi thứ với chỉ một cú chạm",
          "text": "Không gian nội thất được thiết kế rộng rãi và sang trọng.",
          "image": "assets/images/vehicles/byd-han/source/10-console-central-sub-pc.webp"
        },
        "performance": {
          "title": "Cân bằng giữa hiệu suất ấn tượng với thiết kế hoàn mỹ",
          "text": "Mọi đường nét thiết kế trên BYD HAN đều được chế tạo với độ chính xác tuyệt đối để tăng hiệu quả khí động học và phạm vi hoạt động.",
          "image": "assets/images/vehicles/byd-han/source/04-banner3-sub1.webp"
        },
        "safety": {
          "title": "Nâng tầm trải nghiệm lái cùng hệ dẫn động AWD",
          "text": "BYD HAN sẽ đưa bạn vào một chuyến hành trình đầy hứng khởi với khả năng tăng tốc từ 0 lên 100 km/h chỉ trong 3,9 giây. Hệ dẫn động bốn bánh điện sẽ kích hoạt theo thời gian thực và cung cấp khả năng kiểm soát lực kéo tuyệt vời trong mọi điều kiện thời tiết.",
          "image": "assets/images/vehicles/byd-han/source/04-banner3-sub1.webp"
        }
      },
      "tagline": "Nâng tầm trải nghiệm lái cùng hệ dẫn động AWD",
      "availability": "Liên hệ tình trạng xe",
      "officialUrl": "https://www.byd.com/vn/car/han",
      "variants": [
        {
          "name": "Han",
          "price": 1489000000,
          "priceLabel": "1.489.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        }
      ],
      "colorOptions": [
        {
          "name": "Trắng Snow",
          "hex": "#f3f3ef"
        },
        {
          "name": "Đen Space",
          "hex": "#111419"
        },
        {
          "name": "Xám Time",
          "hex": "#6a7074"
        },
        {
          "name": "Đỏ Emperor",
          "hex": "#6f151a"
        }
      ],
      "highlights": [
        "Dẫn động AWD",
        "Ghế da Nappa",
        "Âm thanh Dynaudio",
        "Phanh Brembo"
      ],
      "specGroups": [
        {
          "title": "Hiệu suất",
          "items": [
            {
              "label": "Tăng tốc 0–100 km/h",
              "value": "3,9 giây"
            },
            {
              "label": "Công suất cực đại",
              "value": "509 mã lực"
            },
            {
              "label": "Phạm vi WLTP",
              "value": "521 km"
            }
          ]
        },
        {
          "title": "Nội thất",
          "items": [
            {
              "label": "Vật liệu",
              "value": "Da Nappa và chi tiết cao cấp"
            },
            {
              "label": "Âm thanh",
              "value": "Dynaudio Hi-Fi"
            },
            {
              "label": "Hiển thị",
              "value": "Màn hình xoay và W-HUD"
            }
          ]
        },
        {
          "title": "Khung gầm & an toàn",
          "items": [
            {
              "label": "Dẫn động",
              "value": "Điện bốn bánh AWD"
            },
            {
              "label": "Phanh",
              "value": "Kẹp phanh trước Brembo"
            },
            {
              "label": "Hệ thống phanh",
              "value": "IPB Bosch"
            }
          ]
        }
      ],
      "lastUpdated": "31/07/2026",
      "cardHighlights": [
        "Dẫn động AWD",
        "Ghế da Nappa",
        "Âm thanh Dynaudio"
      ],
      "brochureUrl": "/assets/catalogs/byd-han.pdf",
      "media": [
        {
          "src": "assets/images/vehicles/byd-han/source/01-banner-pc-1-scaled.webp",
          "kind": "hero",
          "alt": "BYD HAN - hình 1"
        },
        {
          "src": "assets/images/vehicles/byd-han/source/02-banner-pc-2-scaled.webp",
          "kind": "hero",
          "alt": "BYD HAN - hình 2"
        },
        {
          "src": "assets/images/vehicles/byd-han/source/03-banner-pc-3-scaled.webp",
          "kind": "hero",
          "alt": "BYD HAN - hình 3"
        },
        {
          "src": "assets/images/vehicles/byd-han/source/04-banner3-sub1.webp",
          "kind": "detail",
          "alt": "BYD HAN - hình 4"
        },
        {
          "src": "assets/images/vehicles/byd-han/source/06-banner3-sub2.webp",
          "kind": "detail",
          "alt": "BYD HAN - hình 6"
        },
        {
          "src": "assets/images/vehicles/byd-han/source/08-banner-pc-4-scaled.webp",
          "kind": "hero",
          "alt": "BYD HAN - hình 8"
        },
        {
          "src": "assets/images/vehicles/byd-han/source/10-console-central-sub-pc.webp",
          "kind": "interior",
          "alt": "BYD HAN - hình 10"
        },
        {
          "src": "assets/images/vehicles/byd-han/source/11-dynaudio-sub-pc.webp",
          "kind": "interior",
          "alt": "BYD HAN - hình 11"
        },
        {
          "src": "assets/images/vehicles/byd-han/source/12-painel-exibido-sub-pc.webp",
          "kind": "interior",
          "alt": "BYD HAN - hình 12"
        },
        {
          "src": "assets/images/vehicles/byd-han/source/13-bancos-traseiro-sub-pc.webp",
          "kind": "interior",
          "alt": "BYD HAN - hình 13"
        },
        {
          "src": "assets/images/vehicles/byd-han/source/14-banner-pc-5-scaled.webp",
          "kind": "hero",
          "alt": "BYD HAN - hình 14"
        },
        {
          "src": "assets/images/vehicles/byd-han/source/15-banner-pc-6-scaled.webp",
          "kind": "hero",
          "alt": "BYD HAN - hình 15"
        }
      ],
      "galleryCount": 12,
      "heroMedia": {
        "src": "assets/images/vehicles/byd-han/source/01-banner-pc-1-scaled.webp",
        "kind": "hero",
        "alt": "BYD HAN - hình 1"
      },
      "galleryFallbacks": [],
      "storyBlocks": [
        {
          "title": "Nâng tầm trải nghiệm lái cùng hệ dẫn động AWD",
          "text": "BYD HAN sẽ đưa bạn vào một chuyến hành trình đầy hứng khởi với khả năng tăng tốc từ 0 lên 100 km/h chỉ trong 3,9 giây. Hệ dẫn động bốn bánh điện sẽ kích hoạt theo thời gian thực và cung cấp khả năng kiểm soát lực kéo tuyệt vời trong mọi điều kiện thời tiết.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/04-banner3-sub1.webp",
            "kind": "detail",
            "alt": "BYD HAN - hình 4"
          }
        },
        {
          "title": "Cân bằng giữa hiệu suất ấn tượng với thiết kế hoàn mỹ",
          "text": "Mọi đường nét thiết kế trên BYD HAN đều được chế tạo với độ chính xác tuyệt đối để tăng hiệu quả khí động học và phạm vi hoạt động.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/04-banner3-sub1.webp",
            "kind": "detail",
            "alt": "BYD HAN - hình 4"
          }
        },
        {
          "title": "Ngôn ngữ thiết kế \"Dragon Face\"",
          "text": "Phần đầu lấy cảm hứng từ loài rồng kết hợp cùng dải đèn pha LED tuyệt đẹp mang đến cảm giác thanh lịch, sang trọng cho mọi hành trình của bạn.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/04-banner3-sub1.webp",
            "kind": "exterior",
            "alt": "BYD HAN - hình 5"
          }
        },
        {
          "title": "Tay nắm cửa thông minh",
          "text": "Được tích hợp hoàn hảo vào thân xe, tay nắm cửa ẩn tự động mở ra khi bạn bước đến chiếc xe. Trang bị này giúp cải thiện khả năng khí động học, giảm dòng xoáy bên hông xe hiệu quả cũng như giảm mức hệ số cản gió.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/02-banner-pc-2-scaled.webp",
            "kind": "exterior",
            "alt": "BYD HAN - hình 7"
          }
        },
        {
          "title": "La-zăng thể thao năng động",
          "text": "La-zăng hợp kim nhôm hai màu 19 inch với kẹp phanh trước Brembo theo tiêu chuẩn của xe đua.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/06-banner3-sub2.webp",
            "kind": "detail",
            "alt": "BYD HAN - hình 6"
          }
        },
        {
          "title": "Đèn hậu lấy cảm hứng từ vuốt rồng",
          "text": "Lấy cảm hứng từ văn hoá Á Đông, đèn hậu dạng được thiết kế theo hình dáng của vuốt rồng tạo nên sự bắt mắt, bí ẩn và dễ nhận biết.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/04-banner3-sub1.webp",
            "kind": "exterior",
            "alt": "BYD HAN - hình 5"
          }
        },
        {
          "title": "Truy cập mọi thứ với chỉ một cú chạm",
          "text": "Không gian nội thất được thiết kế rộng rãi và sang trọng.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/10-console-central-sub-pc.webp",
            "kind": "interior",
            "alt": "BYD HAN - hình 10"
          }
        },
        {
          "title": "Màn hình cảm ứng xoay",
          "text": "BYD HAN sẽ khiến bạn đắm chìm trong sự sang trọng chưa từng có. Mỗi chi tiết nội thất đều thể hiện thiết kế đẳng cấp với chất liệu da Nappa, gỗ châu Âu và các phím nhấn bằng nhôm đạt tiêu chuẩn đặc biệt.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/11-dynaudio-sub-pc.webp",
            "kind": "interior",
            "alt": "BYD HAN - hình 11"
          }
        },
        {
          "title": "Bảng điều khiển trung tâm hiện đại",
          "text": "BYD HAN được trang bị hệ thống DiPilot tiên tiến nhất của BYD, mang đến sự thoải mái nhờ khả năng an toàn vượt trội.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/08-banner-pc-4-scaled.webp",
            "kind": "detail",
            "alt": "BYD HAN - hình 9"
          }
        },
        {
          "title": "Màn hình hiển thị kính lái W-HUD",
          "text": "Màn hình hiển thị thông tin cảnh báo trên kính chắn gió giúp bạn tập trung dễ dàng hơn khi điều khiển xe.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/12-painel-exibido-sub-pc.webp",
            "kind": "interior",
            "alt": "BYD HAN - hình 12"
          }
        },
        {
          "title": "Tiện nghi tinh tế",
          "text": "Không gian phía sau sang trọng với chất liệu da Nappa được chọn lọc thủ công, gỗ châu Âu và bảng điều khiển trung tâm sang trọng bậc nhất.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/02-banner-pc-2-scaled.webp",
            "kind": "exterior",
            "alt": "BYD HAN - hình 7"
          }
        },
        {
          "title": "Luôn trong tầm kiểm soát",
          "text": "Được trang bị hệ thống kiểm soát phanh tích hợp thông minh IPB của Bosch, BYD HAN mang đến cho bạn cảm giác lái mượt mà bằng cách giảm thời gian phản hồi của hệ thống phanh.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/04-banner3-sub1.webp",
            "kind": "detail",
            "alt": "BYD HAN - hình 4"
          }
        },
        {
          "title": "Công nghệ pin an toàn bậc nhất thế giới",
          "text": "Với hơn 20 năm kinh nghiệm, BYD đã đi tiên phong và hoàn thiện công nghệ pin Blade để tạo ra sự kết hợp tiên tiến giữa hiệu suất cao và độ an toàn tuyệt đối.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-han/source/06-banner3-sub2.webp",
            "kind": "detail",
            "alt": "BYD HAN - hình 6"
          }
        }
      ],
      "allContentBlocks": [
        {
          "title": "Nâng tầm trải nghiệm lái cùng hệ dẫn động AWD",
          "text": "BYD HAN sẽ đưa bạn vào một chuyến hành trình đầy hứng khởi với khả năng tăng tốc từ 0 lên 100 km/h chỉ trong 3,9 giây. Hệ dẫn động bốn bánh điện sẽ kích hoạt theo thời gian thực và cung cấp khả năng kiểm soát lực kéo tuyệt vời trong mọi điều kiện thời tiết."
        },
        {
          "title": "Cân bằng giữa hiệu suất ấn tượng với thiết kế hoàn mỹ",
          "text": "Mọi đường nét thiết kế trên BYD HAN đều được chế tạo với độ chính xác tuyệt đối để tăng hiệu quả khí động học và phạm vi hoạt động."
        },
        {
          "title": "Ngôn ngữ thiết kế \"Dragon Face\"",
          "text": "Phần đầu lấy cảm hứng từ loài rồng kết hợp cùng dải đèn pha LED tuyệt đẹp mang đến cảm giác thanh lịch, sang trọng cho mọi hành trình của bạn."
        },
        {
          "title": "Tay nắm cửa thông minh",
          "text": "Được tích hợp hoàn hảo vào thân xe, tay nắm cửa ẩn tự động mở ra khi bạn bước đến chiếc xe. Trang bị này giúp cải thiện khả năng khí động học, giảm dòng xoáy bên hông xe hiệu quả cũng như giảm mức hệ số cản gió."
        },
        {
          "title": "La-zăng thể thao năng động",
          "text": "La-zăng hợp kim nhôm hai màu 19 inch với kẹp phanh trước Brembo theo tiêu chuẩn của xe đua."
        },
        {
          "title": "Đèn hậu lấy cảm hứng từ vuốt rồng",
          "text": "Lấy cảm hứng từ văn hoá Á Đông, đèn hậu dạng được thiết kế theo hình dáng của vuốt rồng tạo nên sự bắt mắt, bí ẩn và dễ nhận biết."
        },
        {
          "title": "Truy cập mọi thứ với chỉ một cú chạm",
          "text": "Không gian nội thất được thiết kế rộng rãi và sang trọng."
        },
        {
          "title": "Màn hình cảm ứng xoay",
          "text": "BYD HAN sẽ khiến bạn đắm chìm trong sự sang trọng chưa từng có. Mỗi chi tiết nội thất đều thể hiện thiết kế đẳng cấp với chất liệu da Nappa, gỗ châu Âu và các phím nhấn bằng nhôm đạt tiêu chuẩn đặc biệt."
        },
        {
          "title": "Bảng điều khiển trung tâm hiện đại",
          "text": "BYD HAN được trang bị hệ thống DiPilot tiên tiến nhất của BYD, mang đến sự thoải mái nhờ khả năng an toàn vượt trội."
        },
        {
          "title": "Màn hình hiển thị kính lái W-HUD",
          "text": "Màn hình hiển thị thông tin cảnh báo trên kính chắn gió giúp bạn tập trung dễ dàng hơn khi điều khiển xe."
        },
        {
          "title": "Tiện nghi tinh tế",
          "text": "Không gian phía sau sang trọng với chất liệu da Nappa được chọn lọc thủ công, gỗ châu Âu và bảng điều khiển trung tâm sang trọng bậc nhất."
        },
        {
          "title": "Luôn trong tầm kiểm soát",
          "text": "Được trang bị hệ thống kiểm soát phanh tích hợp thông minh IPB của Bosch, BYD HAN mang đến cho bạn cảm giác lái mượt mà bằng cách giảm thời gian phản hồi của hệ thống phanh."
        },
        {
          "title": "Công nghệ pin an toàn bậc nhất thế giới",
          "text": "Với hơn 20 năm kinh nghiệm, BYD đã đi tiên phong và hoàn thiện công nghệ pin Blade để tạo ra sự kết hợp tiên tiến giữa hiệu suất cao và độ an toàn tuyệt đối."
        }
      ]
    },
    {
      "slug": "byd-sealion-8",
      "name": "BYD SEALION 8",
      "displayOrder": BYD_VEHICLE_ORDER["byd-sealion-8"],
      "segment": "SUV",
      "powertrain": "EV",
      "menuFeatured": false,
      "badges": [
        "SUV",
        "Thuần điện"
      ],
      "price": 1569000000,
      "priceLabel": "1.569.000.000đ",
      "image": "assets/images/vehicles/byd-sealion-8/card.webp",
      "heroImage": "assets/images/vehicles/byd-sealion-8/source/01-4.jpg",
      "gallery": [
        "assets/images/vehicles/byd-sealion-8/source/01-4.jpg",
        "assets/images/vehicles/byd-sealion-8/source/02-5-scaled.jpg",
        "assets/images/vehicles/byd-sealion-8/source/03-interior3low.jpg",
        "assets/images/vehicles/byd-sealion-8/source/04-interior6low.jpg",
        "assets/images/vehicles/byd-sealion-8/source/05-f04-scaled.jpg",
        "assets/images/vehicles/byd-sealion-8/source/06-f04-sub01.jpg",
        "assets/images/vehicles/byd-sealion-8/source/07-f04-sub02.jpg",
        "assets/images/vehicles/byd-sealion-8/source/08-f04-sub04-mob.jpg",
        "assets/images/vehicles/byd-sealion-8/source/09-f04-sub05-mob.jpg",
        "assets/images/vehicles/byd-sealion-8/source/10-f05-scaled.jpg",
        "assets/images/vehicles/byd-sealion-8/source/11-f06-scaled.jpg",
        "assets/images/vehicles/byd-sealion-8/source/12-6-scaled.jpg"
      ],
      "shortDescription": "Rồng tượng trưng cho sức mạnh và những điều tốt lành. Nhà thiết kế chính của BYD - Wolfgang Egger, đã lãnh đạo một nhóm thiết kế đẳng cấp thế giới để đưa những đặc điểm này vào thiết kế của BYD Sealion 8, kết hợp giữa sự khéo léo, tính năng động và kiểu dáng t",
      "specs": [
        {
          "label": "Tăng tốc 0-100 km/h",
          "value": "4.9s"
        },
        {
          "label": "Dung lượng Pin",
          "value": "108.8kwh"
        },
        {
          "label": "Quãng đường di chuyển cho 1 lần sạc đầy - WLTC",
          "value": "530Km"
        }
      ],
      "colors": [
        "Xám Ridge",
        "Trắng Arctic",
        "Đen Silver Sand"
      ],
      "sections": {
        "overview": {
          "title": "Sự hài hòa giữa phong cách và sức mạnh",
          "text": "Rồng tượng trưng cho sức mạnh và những điều tốt lành. Nhà thiết kế chính của BYD - Wolfgang Egger, đã lãnh đạo một nhóm thiết kế đẳng cấp thế giới để đưa những đặc điểm này vào thiết kế của BYD Sealion 8, kết hợp giữa sự khéo léo, tính năng động và kiểu dáng thiết kế mạnh mẽ",
          "image": "assets/images/vehicles/byd-sealion-8/source/05-f04-scaled.jpg"
        },
        "exterior": {
          "title": "Sự hài hòa giữa phong cách và sức mạnh",
          "text": "Rồng tượng trưng cho sức mạnh và những điều tốt lành. Nhà thiết kế chính của BYD - Wolfgang Egger, đã lãnh đạo một nhóm thiết kế đẳng cấp thế giới để đưa những đặc điểm này vào thiết kế của BYD Sealion 8, kết hợp giữa sự khéo léo, tính năng động và kiểu dáng thiết kế mạnh mẽ",
          "image": "assets/images/vehicles/byd-sealion-8/source/05-f04-scaled.jpg"
        },
        "interior": {
          "title": "Khoang chứa hành lý rộng rãi",
          "text": "Với không gian chứa đồ, giá nóc và khả năng kéo cực kỳ rộng rãi, Sealion 8 cho phép bạn đóng gói tất cả thiết bị của mình đáp ứng tất cả các nhu cầu sử dụng",
          "image": "assets/images/vehicles/byd-sealion-8/source/03-interior3low.jpg"
        },
        "performance": {
          "title": "Quãng đường di chuyển dài hơn",
          "text": "Việc tối ưu không gian của Blade Battery đã tăng hơn 50% so với các bộ pin truyền thống, giúp tăng cường mật độ năng lượng và mang lại phạm vi hoạt động xa hơn.",
          "image": "assets/images/vehicles/byd-sealion-8/source/10-f05-scaled.jpg"
        },
        "safety": {
          "title": "Pin Blade",
          "text": "BYD là thương hiệu tiên phong trong ngành công nghiệp chế tạo pin với hơn 27 năm kinh nghiệm. Blade Battery đã và đang thay đổi cuộc chơi của ngành công nghiệp ô tô điện thông qua việc vượt qua một loạt các thử nghiệm khắc nghiệt trong điều kiện nghiêm ngặt, khiến nó trở thành một trong những loại pin an toàn nhất thế giới.",
          "image": "assets/images/vehicles/byd-sealion-8/source/01-4.jpg"
        }
      },
      "tagline": "Sự hài hòa giữa phong cách và sức mạnh",
      "availability": "Đang nhận tư vấn",
      "officialUrl": "https://www.byd.com/vn/car/Sealion8",
      "variants": [
        {
          "name": "Sealion 8 Performance",
          "price": 1569000000,
          "priceLabel": "1.569.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        }
      ],
      "colorOptions": [
        {
          "name": "Xám Ridge",
          "hex": "#74797c"
        },
        {
          "name": "Trắng Arctic",
          "hex": "#f5f4ef"
        },
        {
          "name": "Đen Silver Sand",
          "hex": "#17191c"
        }
      ],
      "highlights": [
        "7 chỗ rộng rãi",
        "AWD 509 mã lực",
        "DiSus-C",
        "Sạc nhanh DC 170 kW"
      ],
      "specGroups": [
        {
          "title": "Hiệu suất",
          "items": [
            {
              "label": "Công suất",
              "value": "509 mã lực"
            },
            {
              "label": "Mô-men xoắn",
              "value": "700 Nm"
            },
            {
              "label": "Tăng tốc 0–100 km/h",
              "value": "4,9 giây"
            }
          ]
        },
        {
          "title": "Pin & sạc",
          "items": [
            {
              "label": "Dung lượng pin",
              "value": "108,8 kWh"
            },
            {
              "label": "Phạm vi WLTP",
              "value": "530 km"
            },
            {
              "label": "Sạc nhanh DC",
              "value": "170 kW, 10–80% khoảng 45 phút"
            }
          ]
        },
        {
          "title": "Không gian & tiện nghi",
          "items": [
            {
              "label": "Số chỗ",
              "value": "7 chỗ"
            },
            {
              "label": "Khoang hành lý",
              "value": "Mở rộng đến khoảng 2.050 L"
            },
            {
              "label": "Âm thanh",
              "value": "Dynaudio 12 loa"
            }
          ]
        }
      ],
      "lastUpdated": "31/07/2026",
      "cardHighlights": [
        "7 chỗ rộng rãi",
        "AWD 509 mã lực",
        "DiSus-C"
      ],
      "brochureUrl": "/assets/catalogs/byd-sealion-8.pdf",
      "media": [
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/01-4.jpg",
          "kind": "detail",
          "alt": "BYD SEALION 08 - hình 1"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/02-5-scaled.jpg",
          "kind": "detail",
          "alt": "BYD SEALION 08 - hình 2"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/03-interior3low.jpg",
          "kind": "interior",
          "alt": "BYD SEALION 08 - hình 3"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/04-interior6low.jpg",
          "kind": "interior",
          "alt": "BYD SEALION 08 - hình 4"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/05-f04-scaled.jpg",
          "kind": "exterior",
          "alt": "BYD SEALION 08 - hình 5"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/06-f04-sub01.jpg",
          "kind": "exterior",
          "alt": "BYD SEALION 08 - hình 6"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/07-f04-sub02.jpg",
          "kind": "exterior",
          "alt": "BYD SEALION 08 - hình 7"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/08-f04-sub04-mob.jpg",
          "kind": "exterior",
          "alt": "BYD SEALION 08 - hình 8"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/09-f04-sub05-mob.jpg",
          "kind": "exterior",
          "alt": "BYD SEALION 08 - hình 9"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/10-f05-scaled.jpg",
          "kind": "technology",
          "alt": "BYD SEALION 08 - hình 10"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/11-f06-scaled.jpg",
          "kind": "technology",
          "alt": "BYD SEALION 08 - hình 11"
        },
        {
          "src": "assets/images/vehicles/byd-sealion-8/source/12-6-scaled.jpg",
          "kind": "detail",
          "alt": "BYD SEALION 08 - hình 12"
        }
      ],
      "galleryCount": 12,
      "heroMedia": {
        "src": "assets/images/vehicles/byd-sealion-8/source/01-4.jpg",
        "kind": "detail",
        "alt": "BYD SEALION 08 - hình 1"
      },
      "galleryFallbacks": [],
      "storyBlocks": [
        {
          "title": "Sự hài hòa giữa phong cách và sức mạnh",
          "text": "Rồng tượng trưng cho sức mạnh và những điều tốt lành. Nhà thiết kế chính của BYD - Wolfgang Egger, đã lãnh đạo một nhóm thiết kế đẳng cấp thế giới để đưa những đặc điểm này vào thiết kế của BYD Sealion 8, kết hợp giữa sự khéo léo, tính năng động và kiểu dáng thiết kế mạnh mẽ",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-8/source/05-f04-scaled.jpg",
            "kind": "exterior",
            "alt": "BYD SEALION 08 - hình 5"
          }
        },
        {
          "title": "Khoang chứa hành lý rộng rãi",
          "text": "Với không gian chứa đồ, giá nóc và khả năng kéo cực kỳ rộng rãi, Sealion 8 cho phép bạn đóng gói tất cả thiết bị của mình đáp ứng tất cả các nhu cầu sử dụng",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-8/source/03-interior3low.jpg",
            "kind": "interior",
            "alt": "BYD SEALION 08 - hình 3"
          }
        },
        {
          "title": "Không gian đáp ứng mọi nhu cầu đa dụng",
          "text": "Với 7 chỗ ngồi, Sealion 8 cung cấp không gian chở hàng rộng 1.655L phía sau hàng ghế trước, trong khi hàng ghế sau gập phẳng, chia tỷ lệ 60/40 giúp tăng hệ số linh hoạt để đảm bảo bạn có thể mang theo tất cả các thiết bị của mình trong các chuyến đi.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-8/source/04-interior6low.jpg",
            "kind": "interior",
            "alt": "BYD SEALION 08 - hình 4"
          }
        },
        {
          "title": "Pin Blade",
          "text": "BYD là thương hiệu tiên phong trong ngành công nghiệp chế tạo pin với hơn 27 năm kinh nghiệm. Blade Battery đã và đang thay đổi cuộc chơi của ngành công nghiệp ô tô điện thông qua việc vượt qua một loạt các thử nghiệm khắc nghiệt trong điều kiện nghiêm ngặt, khiến nó trở thành một trong những loại pin an toàn nhất thế giới.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-8/source/01-4.jpg",
            "kind": "detail",
            "alt": "BYD SEALION 08 - hình 1"
          }
        },
        {
          "title": "Tăng cường an toàn",
          "text": "Được làm bằng nguyên liệu thô, lithium iron phosphate có một số đặc tính có lợi: sinh nhiệt chậm, tỏa nhiệt thấp và không giải phóng oxy. Thiết kế hình chữ nhật phẳng độc đáo cũng cải thiện hiệu quả làm mát và hiệu suất làm nóng. Bên cạnh đó, Blade Battery đã vượt qua bài kiểm tra xuyên đinh một cách an toàn mà không phát ra lửa hoặc khói.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-8/source/02-5-scaled.jpg",
            "kind": "detail",
            "alt": "BYD SEALION 08 - hình 2"
          }
        },
        {
          "title": "Pin vượt qua bài kiểm tra “đâm xuyên\" an toàn",
          "text": "Thử nghiệm xuyên đinh được coi là một trong những cách nghiêm ngặt nhất để kiểm tra khả năng thoát nhiệt của pin. Mục đích là để mô phỏng hiện tượng đoản mạch bên trong của pin. Điều này thường xảy ra do các vật kim loại sắc nhọn bên ngoài xuyên qua pin khi xảy ra tai nạn giao thông nghiêm trọng. Blade Battery đã vượt qua bài kiểm tra độ xuyên đinh mà không phát ra khói hoặc lửa. Nhiệt độ bề mặt chỉ đạt 30 đến 60°C.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-8/source/12-6-scaled.jpg",
            "kind": "detail",
            "alt": "BYD SEALION 08 - hình 12"
          }
        },
        {
          "title": "Quãng đường di chuyển dài hơn",
          "text": "Việc tối ưu không gian của Blade Battery đã tăng hơn 50% so với các bộ pin truyền thống, giúp tăng cường mật độ năng lượng và mang lại phạm vi hoạt động xa hơn.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-8/source/10-f05-scaled.jpg",
            "kind": "technology",
            "alt": "BYD SEALION 08 - hình 10"
          }
        },
        {
          "title": "Tuổi thọ pin dài hơn",
          "text": "Blade Battery có tuổi thọ pin dài với hơn 5000 chu kỳ sạc và xả.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-8/source/11-f06-scaled.jpg",
            "kind": "technology",
            "alt": "BYD SEALION 08 - hình 11"
          }
        },
        {
          "title": "Hệ thống truyền động điện “8 trong 1” được sản xuất hàng loạt đầu tiên trên thế giới",
          "text": "Công nghệ của BYD có khả năng tích hợp dọc đặc biệt trong chuỗi cung ứng thông qua việc tích hợp 8 thành phần chính bao gồm bộ điều khiển VCU, BMS, MCU, PDU, DC-DC, bộ sạc tích hợp, động cơ truyền động và bộ truyền động, tạo ra hệ thống truyền động điện 8 trong 1 được sản xuất hàng loạt đầu tiên trên thế giới, tối ưu hóa đáng kể trong việc sử dụng không gian và hiệu quả năng lượng.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-8/source/10-f05-scaled.jpg",
            "kind": "technology",
            "alt": "BYD SEALION 08 - hình 10"
          }
        },
        {
          "title": "Hệ thống bơm nhiệt hiệu suất cao",
          "text": "Hệ thống bơm nhiệt tiết kiệm năng lượng tiên tiến được trang bị trên các dòng xe của BYD, được thiết kế để tận dụng tối đa nhiệt dư từ môi trường xung quanh, hệ thống truyền động, khoang hành khách và cả pin. Nó tăng cường hiệu suất nhiệt và giảm tổn thất năng lượng dù là sưởi ấm hay làm mát. Do đó, phạm vi lái xe ở nhiệt độ thấp được tăng lên.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-sealion-8/source/03-interior3low.jpg",
            "kind": "interior",
            "alt": "BYD SEALION 08 - hình 3"
          }
        }
      ],
      "allContentBlocks": [
        {
          "title": "Sự hài hòa giữa phong cách và sức mạnh",
          "text": "Rồng tượng trưng cho sức mạnh và những điều tốt lành. Nhà thiết kế chính của BYD - Wolfgang Egger, đã lãnh đạo một nhóm thiết kế đẳng cấp thế giới để đưa những đặc điểm này vào thiết kế của BYD Sealion 8, kết hợp giữa sự khéo léo, tính năng động và kiểu dáng thiết kế mạnh mẽ"
        },
        {
          "title": "Khoang chứa hành lý rộng rãi",
          "text": "Với không gian chứa đồ, giá nóc và khả năng kéo cực kỳ rộng rãi, Sealion 8 cho phép bạn đóng gói tất cả thiết bị của mình đáp ứng tất cả các nhu cầu sử dụng"
        },
        {
          "title": "Không gian đáp ứng mọi nhu cầu đa dụng",
          "text": "Với 7 chỗ ngồi, Sealion 8 cung cấp không gian chở hàng rộng 1.655L phía sau hàng ghế trước, trong khi hàng ghế sau gập phẳng, chia tỷ lệ 60/40 giúp tăng hệ số linh hoạt để đảm bảo bạn có thể mang theo tất cả các thiết bị của mình trong các chuyến đi."
        },
        {
          "title": "Pin Blade",
          "text": "BYD là thương hiệu tiên phong trong ngành công nghiệp chế tạo pin với hơn 27 năm kinh nghiệm. Blade Battery đã và đang thay đổi cuộc chơi của ngành công nghiệp ô tô điện thông qua việc vượt qua một loạt các thử nghiệm khắc nghiệt trong điều kiện nghiêm ngặt, khiến nó trở thành một trong những loại pin an toàn nhất thế giới."
        },
        {
          "title": "Tăng cường an toàn",
          "text": "Được làm bằng nguyên liệu thô, lithium iron phosphate có một số đặc tính có lợi: sinh nhiệt chậm, tỏa nhiệt thấp và không giải phóng oxy. Thiết kế hình chữ nhật phẳng độc đáo cũng cải thiện hiệu quả làm mát và hiệu suất làm nóng. Bên cạnh đó, Blade Battery đã vượt qua bài kiểm tra xuyên đinh một cách an toàn mà không phát ra lửa hoặc khói."
        },
        {
          "title": "Pin vượt qua bài kiểm tra “đâm xuyên\" an toàn",
          "text": "Thử nghiệm xuyên đinh được coi là một trong những cách nghiêm ngặt nhất để kiểm tra khả năng thoát nhiệt của pin. Mục đích là để mô phỏng hiện tượng đoản mạch bên trong của pin. Điều này thường xảy ra do các vật kim loại sắc nhọn bên ngoài xuyên qua pin khi xảy ra tai nạn giao thông nghiêm trọng. Blade Battery đã vượt qua bài kiểm tra độ xuyên đinh mà không phát ra khói hoặc lửa. Nhiệt độ bề mặt chỉ đạt 30 đến 60°C."
        },
        {
          "title": "Quãng đường di chuyển dài hơn",
          "text": "Việc tối ưu không gian của Blade Battery đã tăng hơn 50% so với các bộ pin truyền thống, giúp tăng cường mật độ năng lượng và mang lại phạm vi hoạt động xa hơn."
        },
        {
          "title": "Tuổi thọ pin dài hơn",
          "text": "Blade Battery có tuổi thọ pin dài với hơn 5000 chu kỳ sạc và xả."
        },
        {
          "title": "Hệ thống truyền động điện “8 trong 1” được sản xuất hàng loạt đầu tiên trên thế giới",
          "text": "Công nghệ của BYD có khả năng tích hợp dọc đặc biệt trong chuỗi cung ứng thông qua việc tích hợp 8 thành phần chính bao gồm bộ điều khiển VCU, BMS, MCU, PDU, DC-DC, bộ sạc tích hợp, động cơ truyền động và bộ truyền động, tạo ra hệ thống truyền động điện 8 trong 1 được sản xuất hàng loạt đầu tiên trên thế giới, tối ưu hóa đáng kể trong việc sử dụng không gian và hiệu quả năng lượng."
        },
        {
          "title": "Hệ thống bơm nhiệt hiệu suất cao",
          "text": "Hệ thống bơm nhiệt tiết kiệm năng lượng tiên tiến được trang bị trên các dòng xe của BYD, được thiết kế để tận dụng tối đa nhiệt dư từ môi trường xung quanh, hệ thống truyền động, khoang hành khách và cả pin. Nó tăng cường hiệu suất nhiệt và giảm tổn thất năng lượng dù là sưởi ấm hay làm mát. Do đó, phạm vi lái xe ở nhiệt độ thấp được tăng lên."
        }
      ]
    },
    {
      "slug": "byd-m6",
      "name": "BYD M6",
      "displayOrder": BYD_VEHICLE_ORDER["byd-m6"],
      "segment": "MPV",
      "powertrain": "EV",
      "menuFeatured": true,
      "badges": [
        "MPV",
        "Thuần điện"
      ],
      "price": 726000000,
      "priceLabel": "726.000.000đ",
      "image": "assets/images/vehicles/byd-m6/card.webp",
      "heroImage": "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp",
      "gallery": [
        "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp",
        "assets/images/vehicles/byd-m6/source/02-screenshot-2026-07-04-210921-e1783174597770.jpg",
        "assets/images/vehicles/byd-m6/source/03-screenshot-2026-07-04-210940-e1783174611367.jpg",
        "assets/images/vehicles/byd-m6/source/04-screenshot-2026-07-04-211036-e1783174629209.jpg",
        "assets/images/vehicles/byd-m6/source/05-screenshot-2026-07-04-211003-e1783174640786.jpg",
        "assets/images/vehicles/byd-m6/source/06-byd-m6-2-scaled.webp",
        "assets/images/vehicles/byd-m6/source/07-byd-m6-3-scaled.webp",
        "assets/images/vehicles/byd-m6/source/08-byd-m6-3-1.webp",
        "assets/images/vehicles/byd-m6/source/09-byd-m6-3-2.webp",
        "assets/images/vehicles/byd-m6/source/10-byd-m6-3-3.webp",
        "assets/images/vehicles/byd-m6/source/11-byd-m6-3-4.webp",
        "assets/images/vehicles/byd-m6/source/12-byd-m6-3-5.webp",
        "assets/images/vehicles/byd-m6/source/13-byd-m6-3-6.webp",
        "assets/images/vehicles/byd-m6/source/14-byd-m6-4-scaled.webp",
        "assets/images/vehicles/byd-m6/source/15-byd-m6-5-scaled.webp",
        "assets/images/vehicles/byd-m6/source/16-byd-m6-6-scaled.webp"
      ],
      "shortDescription": "Các cửa hút gió bên hông có thiết kế cánh bay hình giáp vai mới, được liên kết liền mạch và chế tác với độ chính xác cao nhất của BYD. Thiết kế này toát lên vẻ uy nghiêm gợi nhớ đến khuôn mặt của một con rồng. Dải crôm sáng bóng, được quấn quanh một cách thanh",
      "specs": [
        {
          "label": "Tăng tốc 0-100 km/h",
          "value": "8.6 s"
        },
        {
          "label": "Quãng đường di chuyển 1 lần sạc đầy pin (NEDC)",
          "value": "530 km"
        },
        {
          "label": "Công xuất Pin",
          "value": "71.8 kWh"
        }
      ],
      "colors": [
        "Trắng",
        "Xám",
        "Xanh",
        "Đen"
      ],
      "sections": {
        "overview": {
          "title": "Thiết kế độc đáo kết hợp hiệu quả với sự thanh lịch tuyệt đối",
          "text": "Các cửa hút gió bên hông có thiết kế cánh bay hình giáp vai mới, được liên kết liền mạch và chế tác với độ chính xác cao nhất của BYD. Thiết kế này toát lên vẻ uy nghiêm gợi nhớ đến khuôn mặt của một con rồng. Dải crôm sáng bóng, được quấn quanh một cách thanh lịch, tạo thêm nét quyến rũ và tinh tế, phản ánh sự đơn giản và thanh lịch của thẩm mỹ thiết kế thế hệ mới của BYD với sự chú ý tỉ mỉ đến từng chi tiết.",
          "image": "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp"
        },
        "exterior": {
          "title": "Thiết kế độc đáo kết hợp hiệu quả với sự thanh lịch tuyệt đối",
          "text": "Các cửa hút gió bên hông có thiết kế cánh bay hình giáp vai mới, được liên kết liền mạch và chế tác với độ chính xác cao nhất của BYD. Thiết kế này toát lên vẻ uy nghiêm gợi nhớ đến khuôn mặt của một con rồng. Dải crôm sáng bóng, được quấn quanh một cách thanh lịch, tạo thêm nét quyến rũ và tinh tế, phản ánh sự đơn giản và thanh lịch của thẩm mỹ thiết kế thế hệ mới của BYD với sự chú ý tỉ mỉ đến từng chi tiết.",
          "image": "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp"
        },
        "interior": {
          "title": "Thiết kế độc đáo kết hợp hiệu quả với sự thanh lịch tuyệt đối",
          "text": "Các cửa hút gió bên hông có thiết kế cánh bay hình giáp vai mới, được liên kết liền mạch và chế tác với độ chính xác cao nhất của BYD. Thiết kế này toát lên vẻ uy nghiêm gợi nhớ đến khuôn mặt của một con rồng. Dải crôm sáng bóng, được quấn quanh một cách thanh lịch, tạo thêm nét quyến rũ và tinh tế, phản ánh sự đơn giản và thanh lịch của thẩm mỹ thiết kế thế hệ mới của BYD với sự chú ý tỉ mỉ đến từng chi tiết.",
          "image": "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp"
        },
        "performance": {
          "title": "Đèn pha LED Diamond Starlight Levitation",
          "text": "Đèn pha LED bóng bẩy và sắc nét, thể hiện tính thẩm mỹ về năng lượng và tốc độ của tương lai. Là đặc điểm nổi bật của 'Dragon Face', chúng toát lên phong cách năng động và sự hiện diện uy quyền khi được chiếu sáng, giống như ánh mắt mạnh mẽ của một con rồng thức giấc trong đêm tối, kết hợp sức mạnh với công nghệ tiên tiến.",
          "image": "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp"
        },
        "safety": {
          "title": "Pin Blade siêu an toàn",
          "text": "Trong quá trình thử nghiệm châm cứu, cell blade bị đâm thủng và không bị hun khói hay bắn, và nhiệt độ chỉ đạt 30 đến 60 °C. Các cell blade cũng vượt qua các điều kiện thử nghiệm khắc nghiệt khác, chẳng hạn như nén, uốn cong, nung nóng tới 300 °C trong lò và sạc quá mức 260%, mà không gây ra hỏa hoạn hoặc nổ.",
          "image": "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp"
        }
      },
      "tagline": "Thiết kế độc đáo kết hợp hiệu quả với sự thanh lịch tuyệt đối",
      "availability": "Đang nhận tư vấn",
      "officialUrl": "https://www.byd.com/vn/car/m6",
      "variants": [
        {
          "name": "M6",
          "price": 726000000,
          "priceLabel": "726.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        }
      ],
      "colorOptions": [
        {
          "name": "Trắng",
          "hex": "#f3f4f2"
        },
        {
          "name": "Xám",
          "hex": "#747b80"
        },
        {
          "name": "Xanh",
          "hex": "#4f718a"
        },
        {
          "name": "Đen",
          "hex": "#c9c9c9"
        }
      ],
      "highlights": [
        "Không gian 7 chỗ",
        "Pin Blade Battery",
        "Mở khóa NFC",
        "Cấp điện V2L"
      ],
      "specGroups": [
        {
          "title": "Không gian",
          "items": [
            {
              "label": "Số chỗ",
              "value": "7 chỗ"
            },
            {
              "label": "Chiều dài cơ sở",
              "value": "2.800 mm"
            },
            {
              "label": "Khoảng sáng gầm",
              "value": "170 mm"
            }
          ]
        },
        {
          "title": "Vận hành",
          "items": [
            {
              "label": "Hệ truyền động",
              "value": "Thuần điện"
            },
            {
              "label": "Phạm vi tham khảo",
              "value": "Khoảng 420 km NEDC"
            },
            {
              "label": "Công nghệ pin",
              "value": "Blade Battery"
            }
          ]
        },
        {
          "title": "Tiện ích gia đình",
          "items": [
            {
              "label": "Chìa khóa",
              "value": "Thẻ NFC"
            },
            {
              "label": "Nguồn điện ngoài",
              "value": "V2L"
            },
            {
              "label": "Ghế",
              "value": "Ba hàng ghế linh hoạt"
            }
          ]
        }
      ],
      "lastUpdated": "31/07/2026",
      "cardHighlights": [
        "Không gian 7 chỗ",
        "Pin Blade Battery",
        "Mở khóa NFC"
      ],
      "brochureUrl": "/assets/catalogs/byd-m6.pdf",
      "media": [
        {
          "src": "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 1"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/02-screenshot-2026-07-04-210921-e1783174597770.jpg",
          "kind": "detail",
          "alt": "BYD M6 - hình 2"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/03-screenshot-2026-07-04-210940-e1783174611367.jpg",
          "kind": "detail",
          "alt": "BYD M6 - hình 3"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/04-screenshot-2026-07-04-211036-e1783174629209.jpg",
          "kind": "detail",
          "alt": "BYD M6 - hình 4"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/05-screenshot-2026-07-04-211003-e1783174640786.jpg",
          "kind": "detail",
          "alt": "BYD M6 - hình 5"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/06-byd-m6-2-scaled.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 6"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/07-byd-m6-3-scaled.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 7"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/08-byd-m6-3-1.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 8"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/09-byd-m6-3-2.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 9"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/10-byd-m6-3-3.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 10"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/11-byd-m6-3-4.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 11"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/12-byd-m6-3-5.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 12"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/13-byd-m6-3-6.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 13"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/14-byd-m6-4-scaled.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 14"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/15-byd-m6-5-scaled.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 15"
        },
        {
          "src": "assets/images/vehicles/byd-m6/source/16-byd-m6-6-scaled.webp",
          "kind": "detail",
          "alt": "BYD M6 - hình 16"
        }
      ],
      "galleryCount": 16,
      "heroMedia": {
        "src": "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp",
        "kind": "detail",
        "alt": "BYD M6 - hình 1"
      },
      "galleryFallbacks": [],
      "storyBlocks": [
        {
          "title": "Thiết kế độc đáo kết hợp hiệu quả với sự thanh lịch tuyệt đối",
          "text": "Các cửa hút gió bên hông có thiết kế cánh bay hình giáp vai mới, được liên kết liền mạch và chế tác với độ chính xác cao nhất của BYD. Thiết kế này toát lên vẻ uy nghiêm gợi nhớ đến khuôn mặt của một con rồng. Dải crôm sáng bóng, được quấn quanh một cách thanh lịch, tạo thêm nét quyến rũ và tinh tế, phản ánh sự đơn giản và thanh lịch của thẩm mỹ thiết kế thế hệ mới của BYD với sự chú ý tỉ mỉ đến từng chi tiết.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp",
            "kind": "detail",
            "alt": "BYD M6 - hình 1"
          }
        },
        {
          "title": "Đèn pha LED Diamond Starlight Levitation",
          "text": "Đèn pha LED bóng bẩy và sắc nét, thể hiện tính thẩm mỹ về năng lượng và tốc độ của tương lai. Là đặc điểm nổi bật của 'Dragon Face', chúng toát lên phong cách năng động và sự hiện diện uy quyền khi được chiếu sáng, giống như ánh mắt mạnh mẽ của một con rồng thức giấc trong đêm tối, kết hợp sức mạnh với công nghệ tiên tiến.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp",
            "kind": "detail",
            "alt": "BYD M6 - hình 1"
          }
        },
        {
          "title": "Không gian rộng rãi 6/7 chỗ ngồi",
          "text": "Có sẵn xe 6/7 chỗ ngồi, cho chuyến đi gia đình thoải mái và trải nghiệm công tác thoải mái tối đa.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-m6/source/02-screenshot-2026-07-04-210921-e1783174597770.jpg",
            "kind": "detail",
            "alt": "BYD M6 - hình 2"
          }
        },
        {
          "title": "Pin Blade siêu an toàn",
          "text": "Trong quá trình thử nghiệm châm cứu, cell blade bị đâm thủng và không bị hun khói hay bắn, và nhiệt độ chỉ đạt 30 đến 60 °C. Các cell blade cũng vượt qua các điều kiện thử nghiệm khắc nghiệt khác, chẳng hạn như nén, uốn cong, nung nóng tới 300 °C trong lò và sạc quá mức 260%, mà không gây ra hỏa hoạn hoặc nổ.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-m6/source/01-byd-m6-1-scaled.webp",
            "kind": "detail",
            "alt": "BYD M6 - hình 1"
          }
        },
        {
          "title": "Trạm điện di động VTOL",
          "text": "Để đáp ứng nhu cầu sinh hoạt và giải trí cơ bản của khách hàng RV, mỗi ổ cắm đều được trang bị bảo vệ quá tải để ngăn ngừa hiệu quả các tình huống nguy hiểm như chập điện hoặc hỏa hoạn.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-m6/source/03-screenshot-2026-07-04-210940-e1783174611367.jpg",
            "kind": "detail",
            "alt": "BYD M6 - hình 3"
          }
        }
      ],
      "allContentBlocks": [
        {
          "title": "Thiết kế độc đáo kết hợp hiệu quả với sự thanh lịch tuyệt đối",
          "text": "Các cửa hút gió bên hông có thiết kế cánh bay hình giáp vai mới, được liên kết liền mạch và chế tác với độ chính xác cao nhất của BYD. Thiết kế này toát lên vẻ uy nghiêm gợi nhớ đến khuôn mặt của một con rồng. Dải crôm sáng bóng, được quấn quanh một cách thanh lịch, tạo thêm nét quyến rũ và tinh tế, phản ánh sự đơn giản và thanh lịch của thẩm mỹ thiết kế thế hệ mới của BYD với sự chú ý tỉ mỉ đến từng chi tiết."
        },
        {
          "title": "Đèn pha LED Diamond Starlight Levitation",
          "text": "Đèn pha LED bóng bẩy và sắc nét, thể hiện tính thẩm mỹ về năng lượng và tốc độ của tương lai. Là đặc điểm nổi bật của 'Dragon Face', chúng toát lên phong cách năng động và sự hiện diện uy quyền khi được chiếu sáng, giống như ánh mắt mạnh mẽ của một con rồng thức giấc trong đêm tối, kết hợp sức mạnh với công nghệ tiên tiến."
        },
        {
          "title": "Không gian rộng rãi 6/7 chỗ ngồi",
          "text": "Có sẵn xe 6/7 chỗ ngồi, cho chuyến đi gia đình thoải mái và trải nghiệm công tác thoải mái tối đa."
        },
        {
          "title": "Pin Blade siêu an toàn",
          "text": "Trong quá trình thử nghiệm châm cứu, cell blade bị đâm thủng và không bị hun khói hay bắn, và nhiệt độ chỉ đạt 30 đến 60 °C. Các cell blade cũng vượt qua các điều kiện thử nghiệm khắc nghiệt khác, chẳng hạn như nén, uốn cong, nung nóng tới 300 °C trong lò và sạc quá mức 260%, mà không gây ra hỏa hoạn hoặc nổ."
        },
        {
          "title": "Trạm điện di động VTOL",
          "text": "Để đáp ứng nhu cầu sinh hoạt và giải trí cơ bản của khách hàng RV, mỗi ổ cắm đều được trang bị bảo vệ quá tải để ngăn ngừa hiệu quả các tình huống nguy hiểm như chập điện hoặc hỏa hoạn."
        }
      ]
    },
    {
      "slug": "byd-dolphin",
      "name": "BYD Dolphin",
      "displayOrder": BYD_VEHICLE_ORDER["byd-dolphin"],
      "segment": "Hatchback",
      "powertrain": "EV",
      "menuFeatured": true,
      "badges": [
        "Hatchback",
        "Thuần điện"
      ],
      "price": 499000000,
      "priceLabel": "499.000.000đ",
      "image": "assets/images/vehicles/byd-dolphin/card.webp",
      "heroImage": "assets/images/vehicles/byd-dolphin/source/01-1-dolphin-pc-1-copy-scaled.webp",
      "gallery": [
        "assets/images/vehicles/byd-dolphin/source/01-1-dolphin-pc-1-copy-scaled.webp",
        "assets/images/vehicles/byd-dolphin/source/02-5d1b8566-8296-4d06-9d39-875e1f0d73a2.jpg",
        "assets/images/vehicles/byd-dolphin/source/03-44c69e65-0251-4c6a-be17-365fddb1c7ad.jpg",
        "assets/images/vehicles/byd-dolphin/source/04-509228a9-4d76-4c63-8352-e40aa98625af.jpg",
        "assets/images/vehicles/byd-dolphin/source/05-2-dolphin-pc-4-scaled.webp",
        "assets/images/vehicles/byd-dolphin/source/06-3-dolphin-pc-2-copy-scaled.webp",
        "assets/images/vehicles/byd-dolphin/source/07-4-dolphin-4-scaled.webp",
        "assets/images/vehicles/byd-dolphin/source/08-5-dolphin-pc-interior-1.webp",
        "assets/images/vehicles/byd-dolphin/source/09-byd-dolphin-1.webp",
        "assets/images/vehicles/byd-dolphin/source/10-byd-dolphin-2.webp",
        "assets/images/vehicles/byd-dolphin/source/11-byd-dolphin-3.webp",
        "assets/images/vehicles/byd-dolphin/source/12-byd-dolphin-4.webp",
        "assets/images/vehicles/shared/e-platform-3.webp",
        "assets/images/vehicles/byd-dolphin/source/14-7-dolphin-8-scaled.webp",
        "assets/images/vehicles/byd-dolphin/source/15-8-dolphin-pc-3-copy-scaled.webp"
      ],
      "shortDescription": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm vi",
      "specs": [
        {
          "label": "Tăng tốc 0-50 km/h",
          "value": "3.9 s"
        },
        {
          "label": "Quãng đường di chuyển 1 lần sạc đầy pin (NEDC)",
          "value": "405 km"
        },
        {
          "label": "Sạc nhanh (DC) SOC 30% - 80%",
          "value": "30 Phút"
        }
      ],
      "colors": [
        "Sand White",
        "Coral Pink",
        "Urban Grey"
      ],
      "sections": {
        "overview": {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD.",
          "image": "assets/images/vehicles/byd-dolphin/source/05-2-dolphin-pc-4-scaled.webp"
        },
        "exterior": {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD.",
          "image": "assets/images/vehicles/byd-dolphin/source/05-2-dolphin-pc-4-scaled.webp"
        },
        "interior": {
          "title": "Màn hình trung tâm",
          "text": "Màn hình trung tâm 12.8 inch tích hợp đa chức năng như hỗ trợ ra lệnh bằng giọng nói thông minh và điều chỉnh nhiều tính năng trên ô tô, giúp người lái không bị phân tâm khi vận hành. Ngoài ra còn được bổ sung thêm những tính năng giải trí thông minh, mang đến trải nghiệm ấn tượng cho người dùng.",
          "image": "assets/images/vehicles/byd-dolphin/source/08-5-dolphin-pc-interior-1.webp"
        },
        "performance": {
          "title": "Hệ thống chiếu sáng",
          "text": "Thiết kế cụm đèn trước và sau lấy cảm hứng từ chuyển động đầy năng động của loài cá heo. Dải đèn định vị ban ngày LED nối liền chạy dài liên tục bên dưới cụm lưới tản nhiệt trung tâm cùng thiết kế đèn hậu năng động mang đến cảm giác đầy phong cách và công nghệ tiên phong.",
          "image": "assets/images/vehicles/byd-dolphin/source/05-2-dolphin-pc-4-scaled.webp"
        },
        "safety": {
          "title": "e-Platform 3.0",
          "text": "BYD Dolphin được trang bị nền tảng e-Platform 3.0 hoàn toàn mới, phát triển riêng cho thế hệ tiếp theo của dòng xe điện thông minh, hiệu suất cao. e-Platform 3.0 mang đến 4 ưu điểm vượt trội về trí thông minh, hiệu quả, an toàn và thẩm mỹ.",
          "image": "assets/images/vehicles/byd-dolphin/source/05-2-dolphin-pc-4-scaled.webp"
        }
      },
      "tagline": "Đội ngũ thiết kế đẳng cấp thế giới",
      "availability": "Đang nhận tư vấn",
      "officialUrl": "https://www.byd.com/vn/car/dolphin",
      "brochureUrl": "/assets/catalogs/byd-dolphin.pdf",
      "variants": [
        {
          "name": "Dolphin Nhập Thái Lan",
          "price": 499000000,
          "priceLabel": "499.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        }
      ],
      "colorOptions": [
        {
          "name": "Sand White",
          "hex": "#f3f4f2",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/02-5d1b8566-8296-4d06-9d39-875e1f0d73a2.jpg",
            "kind": "color",
            "alt": "BYD DOLPHIN - hình 2"
          }
        },
        {
          "name": "Coral Pink",
          "hex": "#c995a4",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/03-44c69e65-0251-4c6a-be17-365fddb1c7ad.jpg",
            "kind": "color",
            "alt": "BYD DOLPHIN - hình 3"
          }
        },
        {
          "name": "Urban Grey",
          "hex": "#747b80",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/04-509228a9-4d76-4c63-8352-e40aa98625af.jpg",
            "kind": "color",
            "alt": "BYD DOLPHIN - hình 4"
          }
        }
      ],
      "highlights": [
        "Màn hình xoay thông minh",
        "e-Platform 3.0",
        "Cấp điện V2L",
        "Pin Blade Battery"
      ],
      "specGroups": [
        {
          "title": "Kích thước & không gian",
          "items": [
            {
              "label": "Kiểu dáng",
              "value": "Hatchback 5 chỗ"
            },
            {
              "label": "Chiều dài cơ sở",
              "value": "2.700 mm"
            },
            {
              "label": "Khoang hành khách",
              "value": "Sàn sau phẳng, ghế gập linh hoạt"
            }
          ]
        },
        {
          "title": "Vận hành",
          "items": [
            {
              "label": "Hệ truyền động",
              "value": "Thuần điện, cầu trước"
            },
            {
              "label": "Dung lượng pin",
              "value": "50,25 kWh"
            },
            {
              "label": "Quãng đường công bố",
              "value": "Đến 435 km NEDC"
            }
          ]
        },
        {
          "title": "Công nghệ & tiện nghi",
          "items": [
            {
              "label": "Nền tảng",
              "value": "e-Platform 3.0"
            },
            {
              "label": "Màn hình trung tâm",
              "value": "Màn hình cảm ứng xoay"
            },
            {
              "label": "Tiện ích",
              "value": "V2L, kết nối thông minh"
            }
          ]
        }
      ],
      "lastUpdated": "31/07/2026",
      "cardHighlights": [
        "Màn hình xoay thông minh",
        "e-Platform 3.0",
        "Cấp điện V2L"
      ],
      "media": [
        {
          "src": "assets/images/vehicles/byd-dolphin/source/01-1-dolphin-pc-1-copy-scaled.webp",
          "kind": "hero",
          "alt": "BYD DOLPHIN - hình 1"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/02-5d1b8566-8296-4d06-9d39-875e1f0d73a2.jpg",
          "kind": "color",
          "alt": "BYD DOLPHIN - hình 2"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/03-44c69e65-0251-4c6a-be17-365fddb1c7ad.jpg",
          "kind": "color",
          "alt": "BYD DOLPHIN - hình 3"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/04-509228a9-4d76-4c63-8352-e40aa98625af.jpg",
          "kind": "color",
          "alt": "BYD DOLPHIN - hình 4"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/05-2-dolphin-pc-4-scaled.webp",
          "kind": "detail",
          "alt": "BYD DOLPHIN - hình 5"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/06-3-dolphin-pc-2-copy-scaled.webp",
          "kind": "detail",
          "alt": "BYD DOLPHIN - hình 6"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/07-4-dolphin-4-scaled.webp",
          "kind": "detail",
          "alt": "BYD DOLPHIN - hình 7"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/08-5-dolphin-pc-interior-1.webp",
          "kind": "interior",
          "alt": "BYD DOLPHIN - hình 8"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/09-byd-dolphin-1.webp",
          "kind": "detail",
          "alt": "BYD DOLPHIN - hình 9"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/10-byd-dolphin-2.webp",
          "kind": "detail",
          "alt": "BYD DOLPHIN - hình 10"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/11-byd-dolphin-3.webp",
          "kind": "detail",
          "alt": "BYD DOLPHIN - hình 11"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/12-byd-dolphin-4.webp",
          "kind": "detail",
          "alt": "BYD DOLPHIN - hình 12"
        },
        {
          "src": "assets/images/vehicles/shared/e-platform-3.webp",
          "kind": "detail",
          "alt": "BYD DOLPHIN - hình 13"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/14-7-dolphin-8-scaled.webp",
          "kind": "detail",
          "alt": "BYD DOLPHIN - hình 14"
        },
        {
          "src": "assets/images/vehicles/byd-dolphin/source/15-8-dolphin-pc-3-copy-scaled.webp",
          "kind": "detail",
          "alt": "BYD DOLPHIN - hình 15"
        }
      ],
      "galleryCount": 15,
      "heroMedia": {
        "src": "assets/images/vehicles/byd-dolphin/source/01-1-dolphin-pc-1-copy-scaled.webp",
        "kind": "hero",
        "alt": "BYD DOLPHIN - hình 1"
      },
      "galleryFallbacks": [],
      "storyBlocks": [
        {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/05-2-dolphin-pc-4-scaled.webp",
            "kind": "detail",
            "alt": "BYD DOLPHIN - hình 5"
          }
        },
        {
          "title": "Cảm hứng thiết kế từ đại dương",
          "text": "Áp dụng triết lý thiết kế mới lấy cảm hứng từ đại dương. Những đường nét tinh tế kết hợp cùng các chi tiết sắc sảo và uyển chuyển trên thân xe tạo nên một thiết kế đầy tự tin và thanh lịch, sự hấp dẫn này còn được củng cố bởi hệ thống truyền động thuần điện hoàn toàn",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/06-3-dolphin-pc-2-copy-scaled.webp",
            "kind": "detail",
            "alt": "BYD DOLPHIN - hình 6"
          }
        },
        {
          "title": "Hệ thống chiếu sáng",
          "text": "Thiết kế cụm đèn trước và sau lấy cảm hứng từ chuyển động đầy năng động của loài cá heo. Dải đèn định vị ban ngày LED nối liền chạy dài liên tục bên dưới cụm lưới tản nhiệt trung tâm cùng thiết kế đèn hậu năng động mang đến cảm giác đầy phong cách và công nghệ tiên phong.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/05-2-dolphin-pc-4-scaled.webp",
            "kind": "detail",
            "alt": "BYD DOLPHIN - hình 5"
          }
        },
        {
          "title": "Bảng điều khiển trung tâm ấn tượng",
          "text": "Thiết kế bảng điều khiển trung tâm dạng treo đầy tính tương lai tạo ra một không gian vận hành xe hiện đại, năng động. Những chi tiết trang trí chạy dọc bảng điều khiển được làm từ chất liệu kim loại tạo thành một bề mặt cong tối giản, đẹp mắt.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/06-3-dolphin-pc-2-copy-scaled.webp",
            "kind": "detail",
            "alt": "BYD DOLPHIN - hình 6"
          }
        },
        {
          "title": "Màn hình trung tâm",
          "text": "Màn hình trung tâm 12.8 inch tích hợp đa chức năng như hỗ trợ ra lệnh bằng giọng nói thông minh và điều chỉnh nhiều tính năng trên ô tô, giúp người lái không bị phân tâm khi vận hành. Ngoài ra còn được bổ sung thêm những tính năng giải trí thông minh, mang đến trải nghiệm ấn tượng cho người dùng.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/08-5-dolphin-pc-interior-1.webp",
            "kind": "interior",
            "alt": "BYD DOLPHIN - hình 8"
          }
        },
        {
          "title": "Ghế da thân thiện môi trường",
          "text": "Ghế ngồi thể thao mang lại sự thoải mái khi đi đường dài cũng như hỗ trợ nâng đỡ 2 bên chắc chắn khi vào cua. Những chiếc ghế này được làm từ da tổng hợp - chất liệu thân thiện với môi trường nhưng vẫn dễ dàng thể hiện được phong cách riêng. Với khả năng điều chỉnh đa hướng, người dùng có thể điều chỉnh vị trí ngồi theo mọi nhu cầu.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/08-5-dolphin-pc-interior-1.webp",
            "kind": "interior",
            "alt": "BYD DOLPHIN - hình 8"
          }
        },
        {
          "title": "Hàng ghế sau thoải mái",
          "text": "Nhờ sử dụng nền tảng-Platform 3.0 - phần khung nhô ra phía trước và phía sau ngắn cùng chiều dài cơ sở dài giúp không gian bên trong xe được mở rộng, phần sàn hàng ghế sau phẳng giúp vị trí ngồi giữa trở nên thoải mái và có nhiều không gian hơn.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/08-5-dolphin-pc-interior-1.webp",
            "kind": "interior",
            "alt": "BYD DOLPHIN - hình 8"
          }
        },
        {
          "title": "Nhiều không gian lưu trữ hơn",
          "text": "Có rất nhiều khu vực chứa đồ khắp khoang lái, bao gồm các hộc chứa đồ lớn trên cánh cửa, ngăn đựng đồ trung tâm có nắp che và khay đựng đồ bên dưới màn hình chính đủ để đáp ứng nhu cầu di chuyển hàng ngày của bạn.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/08-5-dolphin-pc-interior-1.webp",
            "kind": "interior",
            "alt": "BYD DOLPHIN - hình 8"
          }
        },
        {
          "title": "e-Platform 3.0",
          "text": "BYD Dolphin được trang bị nền tảng e-Platform 3.0 hoàn toàn mới, phát triển riêng cho thế hệ tiếp theo của dòng xe điện thông minh, hiệu suất cao. e-Platform 3.0 mang đến 4 ưu điểm vượt trội về trí thông minh, hiệu quả, an toàn và thẩm mỹ.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/05-2-dolphin-pc-4-scaled.webp",
            "kind": "detail",
            "alt": "BYD DOLPHIN - hình 5"
          }
        },
        {
          "title": "Công nghệ pin Blade cực kỳ an toàn",
          "text": "Công nghệ pin Blade đã và đang thay đổi cuộc chơi của ngành công nghiệp ô tô điện thông qua việc vượt qua một loạt các thử nghiệm khắc nghiệt trong điều kiện nghiêm ngặt, giúp pin Blade trở thành một trong những loại pin an toàn nhất thế giới.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-dolphin/source/06-3-dolphin-pc-2-copy-scaled.webp",
            "kind": "detail",
            "alt": "BYD DOLPHIN - hình 6"
          }
        }
      ],
      "allContentBlocks": [
        {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD."
        },
        {
          "title": "Cảm hứng thiết kế từ đại dương",
          "text": "Áp dụng triết lý thiết kế mới lấy cảm hứng từ đại dương. Những đường nét tinh tế kết hợp cùng các chi tiết sắc sảo và uyển chuyển trên thân xe tạo nên một thiết kế đầy tự tin và thanh lịch, sự hấp dẫn này còn được củng cố bởi hệ thống truyền động thuần điện hoàn toàn"
        },
        {
          "title": "Hệ thống chiếu sáng",
          "text": "Thiết kế cụm đèn trước và sau lấy cảm hứng từ chuyển động đầy năng động của loài cá heo. Dải đèn định vị ban ngày LED nối liền chạy dài liên tục bên dưới cụm lưới tản nhiệt trung tâm cùng thiết kế đèn hậu năng động mang đến cảm giác đầy phong cách và công nghệ tiên phong."
        },
        {
          "title": "Bảng điều khiển trung tâm ấn tượng",
          "text": "Thiết kế bảng điều khiển trung tâm dạng treo đầy tính tương lai tạo ra một không gian vận hành xe hiện đại, năng động. Những chi tiết trang trí chạy dọc bảng điều khiển được làm từ chất liệu kim loại tạo thành một bề mặt cong tối giản, đẹp mắt."
        },
        {
          "title": "Màn hình trung tâm",
          "text": "Màn hình trung tâm 12.8 inch tích hợp đa chức năng như hỗ trợ ra lệnh bằng giọng nói thông minh và điều chỉnh nhiều tính năng trên ô tô, giúp người lái không bị phân tâm khi vận hành. Ngoài ra còn được bổ sung thêm những tính năng giải trí thông minh, mang đến trải nghiệm ấn tượng cho người dùng."
        },
        {
          "title": "Ghế da thân thiện môi trường",
          "text": "Ghế ngồi thể thao mang lại sự thoải mái khi đi đường dài cũng như hỗ trợ nâng đỡ 2 bên chắc chắn khi vào cua. Những chiếc ghế này được làm từ da tổng hợp - chất liệu thân thiện với môi trường nhưng vẫn dễ dàng thể hiện được phong cách riêng. Với khả năng điều chỉnh đa hướng, người dùng có thể điều chỉnh vị trí ngồi theo mọi nhu cầu."
        },
        {
          "title": "Hàng ghế sau thoải mái",
          "text": "Nhờ sử dụng nền tảng-Platform 3.0 - phần khung nhô ra phía trước và phía sau ngắn cùng chiều dài cơ sở dài giúp không gian bên trong xe được mở rộng, phần sàn hàng ghế sau phẳng giúp vị trí ngồi giữa trở nên thoải mái và có nhiều không gian hơn."
        },
        {
          "title": "Nhiều không gian lưu trữ hơn",
          "text": "Có rất nhiều khu vực chứa đồ khắp khoang lái, bao gồm các hộc chứa đồ lớn trên cánh cửa, ngăn đựng đồ trung tâm có nắp che và khay đựng đồ bên dưới màn hình chính đủ để đáp ứng nhu cầu di chuyển hàng ngày của bạn."
        },
        {
          "title": "e-Platform 3.0",
          "text": "BYD Dolphin được trang bị nền tảng e-Platform 3.0 hoàn toàn mới, phát triển riêng cho thế hệ tiếp theo của dòng xe điện thông minh, hiệu suất cao. e-Platform 3.0 mang đến 4 ưu điểm vượt trội về trí thông minh, hiệu quả, an toàn và thẩm mỹ."
        },
        {
          "title": "Công nghệ pin Blade cực kỳ an toàn",
          "text": "Công nghệ pin Blade đã và đang thay đổi cuộc chơi của ngành công nghiệp ô tô điện thông qua việc vượt qua một loạt các thử nghiệm khắc nghiệt trong điều kiện nghiêm ngặt, giúp pin Blade trở thành một trong những loại pin an toàn nhất thế giới."
        }
      ]
    },
    {
      "slug": "byd-atto-3",
      "name": "BYD ATTO 3",
      "displayOrder": BYD_VEHICLE_ORDER["byd-atto-3"],
      "segment": "SUV",
      "powertrain": "EV",
      "menuFeatured": false,
      "badges": [
        "SUV",
        "Thuần điện"
      ],
      "price": 766000000,
      "priceLabel": "Từ 766.000.000đ",
      "image": "assets/images/vehicles/byd-atto-3/card.webp",
      "heroImage": "assets/images/vehicles/byd-atto-3/source/01-atto-3-pc-byd-car.webp",
      "gallery": [
        "assets/images/vehicles/byd-atto-3/source/01-atto-3-pc-byd-car.webp",
        "assets/images/vehicles/byd-atto-3/source/02-5c13f946-e1fa-4e60-98cc-92cc2f541a27.jpg",
        "assets/images/vehicles/byd-atto-3/source/03-17f7d2d5-be70-4195-a099-f441689c078f.jpg",
        "assets/images/vehicles/byd-atto-3/source/04-52536213-5688-494d-9802-7738fc546c28.jpg",
        "assets/images/vehicles/byd-atto-3/source/05-bef5d373-564f-4fc1-8c5a-52a0a27772f9.jpg",
        "assets/images/vehicles/byd-atto-3/source/06-atto-3-pc-4-scaled.webp",
        "assets/images/vehicles/byd-atto-3/source/07-atto3-new3-scaled.webp",
        "assets/images/vehicles/byd-atto-3/source/08-f02-1-scaled.webp",
        "assets/images/vehicles/byd-atto-3/source/09-f02-sub01.webp",
        "assets/images/vehicles/byd-atto-3/source/10-atto3-new-interior2.webp",
        "assets/images/vehicles/byd-atto-3/source/11-atto3-new-interior3.webp",
        "assets/images/vehicles/byd-atto-3/source/12-atto3-new-interior4.webp",
        "assets/images/vehicles/byd-atto-3/source/13-atto3-new-interior5.webp",
        "assets/images/vehicles/byd-atto-3/source/14-atto3-new5.webp",
        "assets/images/vehicles/byd-atto-3/source/15-atto3-new6.webp",
        "assets/images/vehicles/byd-atto-3/source/16-f02-sub07.webp",
        "assets/images/vehicles/shared/e-platform-3.webp",
        "assets/images/vehicles/byd-atto-3/source/18-atto3-new10-scaled.webp",
        "assets/images/vehicles/byd-atto-3/source/19-atto-3-pc-7-scaled.webp"
      ],
      "shortDescription": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm vi",
      "specs": [
        {
          "label": "Sạc nhanh (DC) SOC 30% - 80%",
          "value": "30 Phút"
        },
        {
          "label": "Quãng đường di chuyển 1 lần sạc đầy pin (NEDC)",
          "value": "480 km"
        }
      ],
      "colors": [
        "Boulder Grey",
        "Surf Blue",
        "Cosmos Black",
        "Ski White"
      ],
      "sections": {
        "overview": {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD.",
          "image": "assets/images/vehicles/byd-atto-3/source/08-f02-1-scaled.webp"
        },
        "exterior": {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD.",
          "image": "assets/images/vehicles/byd-atto-3/source/08-f02-1-scaled.webp"
        },
        "interior": {
          "title": "Nội thất mang âm hưởng thể thao",
          "text": "Khoang lái thông minh đầu tiên trên thế giới được xây dựng dựa trên ý tưởng thể thao và thể dục. Những đường nét mềm mại thể hiện phía trước và bên hông khoang lái đại diện cho các sợi cơ bắp khi vận động, mang đến dấu ấn con người giữa các chi tiết cơ khí trên xe.",
          "image": "assets/images/vehicles/byd-atto-3/source/10-atto3-new-interior2.webp"
        },
        "performance": {
          "title": "Đèn pha LED pha lê lấy cảm hứng từ loài rồng",
          "text": "Công nghệ ánh sáng độc quyền giúp đạt mức chiếu sáng lên đến 16,7 mét chiều rộng, vượt xa các đối thủ cùng phân khúc, giúp tăng thêm trải nghiệm lái xe vào ban đêm. Hiệu ứng đèn nhấp nháy chậm rãi của hệ thống đèn LED phía trước và sau khi khóa/mở xe tạo cảm giác như sự thức giấc của loài rồng.",
          "image": "assets/images/vehicles/byd-atto-3/source/01-atto-3-pc-byd-car.webp"
        },
        "safety": {
          "title": "Hệ thống túi khí an toàn",
          "text": "BYD ATTO 3 được trang bị 7 túi khí bảo vệ toàn diện gồm 2 túi khí phía trước, 2 túi khí rèm, 3 túi khí sườn người lái & hành khách phía trước.",
          "image": "assets/images/vehicles/byd-atto-3/source/01-atto-3-pc-byd-car.webp"
        }
      },
      "tagline": "Đội ngũ thiết kế đẳng cấp thế giới",
      "availability": "Liên hệ tình trạng xe",
      "officialUrl": "https://www.byd.com/vn/car/atto3",
      "variants": [
        {
          "name": "Atto3 Dynamic (410 Km)",
          "price": 766000000,
          "priceLabel": "766.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        },
        {
          "name": "Atto3 Premium (480 Km)",
          "price": 886000000,
          "priceLabel": "886.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        }
      ],
      "colorOptions": [
        {
          "name": "Boulder Grey",
          "hex": "#747b80",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/02-5c13f946-e1fa-4e60-98cc-92cc2f541a27.jpg",
            "kind": "color",
            "alt": "2024 BYD ATTO 3 - hình 2"
          }
        },
        {
          "name": "Surf Blue",
          "hex": "#4f718a",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/03-17f7d2d5-be70-4195-a099-f441689c078f.jpg",
            "kind": "color",
            "alt": "2024 BYD ATTO 3 - hình 3"
          }
        },
        {
          "name": "Cosmos Black",
          "hex": "#17191d",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/04-52536213-5688-494d-9802-7738fc546c28.jpg",
            "kind": "color",
            "alt": "2024 BYD ATTO 3 - hình 4"
          }
        },
        {
          "name": "Ski White",
          "hex": "#f3f4f2",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/05-bef5d373-564f-4fc1-8c5a-52a0a27772f9.jpg",
            "kind": "color",
            "alt": "2024 BYD ATTO 3 - hình 5"
          }
        }
      ],
      "highlights": [
        "Pin Blade Battery",
        "Màn hình xoay 15,6 inch",
        "Cửa sổ trời toàn cảnh",
        "Hỗ trợ lái ADAS"
      ],
      "specGroups": [
        {
          "title": "Không gian",
          "items": [
            {
              "label": "Kiểu xe",
              "value": "C-SUV 5 chỗ"
            },
            {
              "label": "Nền tảng",
              "value": "e-Platform 3.0"
            },
            {
              "label": "Khoang hành lý",
              "value": "Gập ghế sau linh hoạt"
            }
          ]
        },
        {
          "title": "Vận hành",
          "items": [
            {
              "label": "Hệ truyền động",
              "value": "Thuần điện"
            },
            {
              "label": "Phạm vi tham khảo",
              "value": "Khoảng 410 km"
            },
            {
              "label": "Tiện ích nguồn điện",
              "value": "V2L"
            }
          ]
        },
        {
          "title": "Công nghệ",
          "items": [
            {
              "label": "Màn hình",
              "value": "Cảm ứng xoay thông minh"
            },
            {
              "label": "Kết nối",
              "value": "Apple CarPlay / Android Auto"
            },
            {
              "label": "An toàn",
              "value": "Camera và hỗ trợ lái tùy phiên bản"
            }
          ]
        }
      ],
      "lastUpdated": "31/07/2026",
      "cardHighlights": [
        "Pin Blade Battery",
        "Màn hình xoay 15,6 inch",
        "Cửa sổ trời toàn cảnh"
      ],
      "brochureUrl": "/assets/catalogs/byd-atto-3.pdf",
      "media": [
        {
          "src": "assets/images/vehicles/byd-atto-3/source/01-atto-3-pc-byd-car.webp",
          "kind": "detail",
          "alt": "2024 BYD ATTO 3 - hình 1"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/02-5c13f946-e1fa-4e60-98cc-92cc2f541a27.jpg",
          "kind": "color",
          "alt": "2024 BYD ATTO 3 - hình 2"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/03-17f7d2d5-be70-4195-a099-f441689c078f.jpg",
          "kind": "color",
          "alt": "2024 BYD ATTO 3 - hình 3"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/04-52536213-5688-494d-9802-7738fc546c28.jpg",
          "kind": "color",
          "alt": "2024 BYD ATTO 3 - hình 4"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/05-bef5d373-564f-4fc1-8c5a-52a0a27772f9.jpg",
          "kind": "color",
          "alt": "2024 BYD ATTO 3 - hình 5"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/06-atto-3-pc-4-scaled.webp",
          "kind": "detail",
          "alt": "2024 BYD ATTO 3 - hình 6"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/07-atto3-new3-scaled.webp",
          "kind": "detail",
          "alt": "2024 BYD ATTO 3 - hình 7"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/08-f02-1-scaled.webp",
          "kind": "exterior",
          "alt": "2024 BYD ATTO 3 - hình 8"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/09-f02-sub01.webp",
          "kind": "exterior",
          "alt": "2024 BYD ATTO 3 - hình 9"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/10-atto3-new-interior2.webp",
          "kind": "interior",
          "alt": "2024 BYD ATTO 3 - hình 10"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/11-atto3-new-interior3.webp",
          "kind": "interior",
          "alt": "2024 BYD ATTO 3 - hình 11"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/12-atto3-new-interior4.webp",
          "kind": "interior",
          "alt": "2024 BYD ATTO 3 - hình 12"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/13-atto3-new-interior5.webp",
          "kind": "interior",
          "alt": "2024 BYD ATTO 3 - hình 13"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/14-atto3-new5.webp",
          "kind": "detail",
          "alt": "2024 BYD ATTO 3 - hình 14"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/15-atto3-new6.webp",
          "kind": "detail",
          "alt": "2024 BYD ATTO 3 - hình 15"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/16-f02-sub07.webp",
          "kind": "exterior",
          "alt": "2024 BYD ATTO 3 - hình 16"
        },
        {
          "src": "assets/images/vehicles/shared/e-platform-3.webp",
          "kind": "detail",
          "alt": "2024 BYD ATTO 3 - hình 17"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/18-atto3-new10-scaled.webp",
          "kind": "detail",
          "alt": "2024 BYD ATTO 3 - hình 18"
        },
        {
          "src": "assets/images/vehicles/byd-atto-3/source/19-atto-3-pc-7-scaled.webp",
          "kind": "detail",
          "alt": "2024 BYD ATTO 3 - hình 19"
        }
      ],
      "galleryCount": 19,
      "heroMedia": {
        "src": "assets/images/vehicles/byd-atto-3/source/01-atto-3-pc-byd-car.webp",
        "kind": "detail",
        "alt": "2024 BYD ATTO 3 - hình 1"
      },
      "galleryFallbacks": [],
      "storyBlocks": [
        {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/08-f02-1-scaled.webp",
            "kind": "exterior",
            "alt": "2024 BYD ATTO 3 - hình 8"
          }
        },
        {
          "title": "Đèn pha LED pha lê lấy cảm hứng từ loài rồng",
          "text": "Công nghệ ánh sáng độc quyền giúp đạt mức chiếu sáng lên đến 16,7 mét chiều rộng, vượt xa các đối thủ cùng phân khúc, giúp tăng thêm trải nghiệm lái xe vào ban đêm. Hiệu ứng đèn nhấp nháy chậm rãi của hệ thống đèn LED phía trước và sau khi khóa/mở xe tạo cảm giác như sự thức giấc của loài rồng.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/01-atto-3-pc-byd-car.webp",
            "kind": "detail",
            "alt": "2024 BYD ATTO 3 - hình 1"
          }
        },
        {
          "title": "Nội thất mang âm hưởng thể thao",
          "text": "Khoang lái thông minh đầu tiên trên thế giới được xây dựng dựa trên ý tưởng thể thao và thể dục. Những đường nét mềm mại thể hiện phía trước và bên hông khoang lái đại diện cho các sợi cơ bắp khi vận động, mang đến dấu ấn con người giữa các chi tiết cơ khí trên xe.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/10-atto3-new-interior2.webp",
            "kind": "interior",
            "alt": "2024 BYD ATTO 3 - hình 10"
          }
        },
        {
          "title": "Tận hưởng niềm vui khi lái xe",
          "text": "Các chức năng thân thiện với người dùng kết hợp cùng nội thất thể thao tạo nên một phong cách độc đáo và đặc biệt cho khoang lái. BYD ATTO 3 mang đến trải nghiệm lái xe hấp dẫn với bảng điều khiển trung tâm 15.6 inch nổi bật nhưng vẫn gọn gàng.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/11-atto3-new-interior3.webp",
            "kind": "interior",
            "alt": "2024 BYD ATTO 3 - hình 11"
          }
        },
        {
          "title": "Tay nắm cửa đặc biệt",
          "text": "Sự kết hợp hoàn hảo giữa tính thẩm mỹ, công nghệ và công thái học. Hình dáng tay nắm cửa bên trong được lấy cảm hứng từ các thiết bị cầm nắm quen thuộc, tích hợp với hệ thống loa và đèn xung quanh, mang lại cảm giác đầy tính công nghệ cùng thao tác mở cửa thuận tiện và dễ dàng. Trang bị đặc biệt này này mang đến trải nghiệm sử dụng xe đỉnh cao, biến mỗi chuyến đi trở thành một hành trình tuyệt vời.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/06-atto-3-pc-4-scaled.webp",
            "kind": "detail",
            "alt": "2024 BYD ATTO 3 - hình 6"
          }
        },
        {
          "title": "Thiết kế độc đáo",
          "text": "Sự kết hợp giữa những sợi \"dây đàn\" độc đáo cùng dàn loa mô phỏng thiết kế giống đàn guitar trên cánh cửa. Hãy thư giãn và gảy đàn 'guitar' vui tươi để tạo ra giai điệu của riêng bạn. Các sợi \"dây đàn\" linh hoạt này cũng có thể mở rộng để giữ bình nước và nhiều vật dụng khác.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/09-f02-sub01.webp",
            "kind": "exterior",
            "alt": "2024 BYD ATTO 3 - hình 9"
          }
        },
        {
          "title": "Sạc điện thoại không dây",
          "text": "Thuận tiện, nhanh chóng, thông minh và đầy thiết thực.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/07-atto3-new3-scaled.webp",
            "kind": "detail",
            "alt": "2024 BYD ATTO 3 - hình 7"
          }
        },
        {
          "title": "Cửa sổ trời toàn cảnh Panorama",
          "text": "Sử dụng loại kính cách âm, cách nhiệt cùng rèm che, cửa sổ trời toàn cảnh Panorama giúp người dùng thoải mái tận hưởng vẻ đẹp của bầu trời.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/16-f02-sub07.webp",
            "kind": "exterior",
            "alt": "2024 BYD ATTO 3 - hình 16"
          }
        },
        {
          "title": "KTrạm sạc di động VTOL",
          "text": "Tính năng trạm sạc di động VTOL cho phép biến chiếc xe BYD thành một nguồn cung năng lượng di động, hỗ trợ công suất lên đến 3,3 kWh, đáp ứng hầu hết các thiết bị điện công suất cao cũng như nấu ăn ngoài trời, mang đến những hành trình đầy tiện ích.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/14-atto3-new5.webp",
            "kind": "detail",
            "alt": "2024 BYD ATTO 3 - hình 14"
          }
        },
        {
          "title": "Hệ thống túi khí an toàn",
          "text": "BYD ATTO 3 được trang bị 7 túi khí bảo vệ toàn diện gồm 2 túi khí phía trước, 2 túi khí rèm, 3 túi khí sườn người lái & hành khách phía trước.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/01-atto-3-pc-byd-car.webp",
            "kind": "detail",
            "alt": "2024 BYD ATTO 3 - hình 1"
          }
        },
        {
          "title": "Khoang hành lý rộng rãi",
          "text": "Tận hưởng chuyến đi dài ngày với khoang hành lý lớn cùng không gian chứa đồ ẩn bên dưới. Bằng cách sắp xếp hành lý thành nhiều lớp khác nhau, bạn có thể tận dụng tối đa không gian. Chỉ với một nút nhấn đơn giản, cốp sau sẽ tự động mở. Thiết kế chống kẹt đảm bảo an toàn tối đa cho người sử dụng.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/06-atto-3-pc-4-scaled.webp",
            "kind": "detail",
            "alt": "2024 BYD ATTO 3 - hình 6"
          }
        },
        {
          "title": "e-Platform 3.0",
          "text": "BYD ATTO 3 được trang bị nền tảng e-Platform 3.0 hoàn toàn mới, phát triển riêng cho thế hệ tiếp theo của dòng xe điện thông minh, hiệu suất cao. e-Platform 3.0 mang đến 4 ưu điểm vượt trội về trí thông minh, hiệu quả, an toàn và thẩm mỹ.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/07-atto3-new3-scaled.webp",
            "kind": "detail",
            "alt": "2024 BYD ATTO 3 - hình 7"
          }
        },
        {
          "title": "Công nghệ pin Blade cực kỳ an toàn",
          "text": "Trải qua thử nghiệm khắc nghiệt nhất là đâm xuyên nhưng pin Blade vẫn không phát ra khói hay lửa, nhiệt độ được duy trì ở mức chỉ từ 30°C đến 60°C. Công nghệ Pin Blade cũng đã vượt qua các điều kiện thử nghiệm khắc nghiệt khác, chẳng hạn như bị nghiền nát, uốn cong, nung trong lò ở nhiệt độ 300°C và bị sạc quá mức 260%.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-atto-3/source/14-atto3-new5.webp",
            "kind": "detail",
            "alt": "2024 BYD ATTO 3 - hình 14"
          }
        }
      ],
      "allContentBlocks": [
        {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD."
        },
        {
          "title": "Đèn pha LED pha lê lấy cảm hứng từ loài rồng",
          "text": "Công nghệ ánh sáng độc quyền giúp đạt mức chiếu sáng lên đến 16,7 mét chiều rộng, vượt xa các đối thủ cùng phân khúc, giúp tăng thêm trải nghiệm lái xe vào ban đêm. Hiệu ứng đèn nhấp nháy chậm rãi của hệ thống đèn LED phía trước và sau khi khóa/mở xe tạo cảm giác như sự thức giấc của loài rồng."
        },
        {
          "title": "Nội thất mang âm hưởng thể thao",
          "text": "Khoang lái thông minh đầu tiên trên thế giới được xây dựng dựa trên ý tưởng thể thao và thể dục. Những đường nét mềm mại thể hiện phía trước và bên hông khoang lái đại diện cho các sợi cơ bắp khi vận động, mang đến dấu ấn con người giữa các chi tiết cơ khí trên xe."
        },
        {
          "title": "Tận hưởng niềm vui khi lái xe",
          "text": "Các chức năng thân thiện với người dùng kết hợp cùng nội thất thể thao tạo nên một phong cách độc đáo và đặc biệt cho khoang lái. BYD ATTO 3 mang đến trải nghiệm lái xe hấp dẫn với bảng điều khiển trung tâm 15.6 inch nổi bật nhưng vẫn gọn gàng."
        },
        {
          "title": "Tay nắm cửa đặc biệt",
          "text": "Sự kết hợp hoàn hảo giữa tính thẩm mỹ, công nghệ và công thái học. Hình dáng tay nắm cửa bên trong được lấy cảm hứng từ các thiết bị cầm nắm quen thuộc, tích hợp với hệ thống loa và đèn xung quanh, mang lại cảm giác đầy tính công nghệ cùng thao tác mở cửa thuận tiện và dễ dàng. Trang bị đặc biệt này này mang đến trải nghiệm sử dụng xe đỉnh cao, biến mỗi chuyến đi trở thành một hành trình tuyệt vời."
        },
        {
          "title": "Thiết kế độc đáo",
          "text": "Sự kết hợp giữa những sợi \"dây đàn\" độc đáo cùng dàn loa mô phỏng thiết kế giống đàn guitar trên cánh cửa. Hãy thư giãn và gảy đàn 'guitar' vui tươi để tạo ra giai điệu của riêng bạn. Các sợi \"dây đàn\" linh hoạt này cũng có thể mở rộng để giữ bình nước và nhiều vật dụng khác."
        },
        {
          "title": "Sạc điện thoại không dây",
          "text": "Thuận tiện, nhanh chóng, thông minh và đầy thiết thực."
        },
        {
          "title": "Cửa sổ trời toàn cảnh Panorama",
          "text": "Sử dụng loại kính cách âm, cách nhiệt cùng rèm che, cửa sổ trời toàn cảnh Panorama giúp người dùng thoải mái tận hưởng vẻ đẹp của bầu trời."
        },
        {
          "title": "KTrạm sạc di động VTOL",
          "text": "Tính năng trạm sạc di động VTOL cho phép biến chiếc xe BYD thành một nguồn cung năng lượng di động, hỗ trợ công suất lên đến 3,3 kWh, đáp ứng hầu hết các thiết bị điện công suất cao cũng như nấu ăn ngoài trời, mang đến những hành trình đầy tiện ích."
        },
        {
          "title": "Hệ thống túi khí an toàn",
          "text": "BYD ATTO 3 được trang bị 7 túi khí bảo vệ toàn diện gồm 2 túi khí phía trước, 2 túi khí rèm, 3 túi khí sườn người lái & hành khách phía trước."
        },
        {
          "title": "Khoang hành lý rộng rãi",
          "text": "Tận hưởng chuyến đi dài ngày với khoang hành lý lớn cùng không gian chứa đồ ẩn bên dưới. Bằng cách sắp xếp hành lý thành nhiều lớp khác nhau, bạn có thể tận dụng tối đa không gian. Chỉ với một nút nhấn đơn giản, cốp sau sẽ tự động mở. Thiết kế chống kẹt đảm bảo an toàn tối đa cho người sử dụng."
        },
        {
          "title": "e-Platform 3.0",
          "text": "BYD ATTO 3 được trang bị nền tảng e-Platform 3.0 hoàn toàn mới, phát triển riêng cho thế hệ tiếp theo của dòng xe điện thông minh, hiệu suất cao. e-Platform 3.0 mang đến 4 ưu điểm vượt trội về trí thông minh, hiệu quả, an toàn và thẩm mỹ."
        },
        {
          "title": "Công nghệ pin Blade cực kỳ an toàn",
          "text": "Trải qua thử nghiệm khắc nghiệt nhất là đâm xuyên nhưng pin Blade vẫn không phát ra khói hay lửa, nhiệt độ được duy trì ở mức chỉ từ 30°C đến 60°C. Công nghệ Pin Blade cũng đã vượt qua các điều kiện thử nghiệm khắc nghiệt khác, chẳng hạn như bị nghiền nát, uốn cong, nung trong lò ở nhiệt độ 300°C và bị sạc quá mức 260%."
        }
      ]
    },
    {
      "slug": "byd-seal",
      "name": "BYD Seal",
      "displayOrder": BYD_VEHICLE_ORDER["byd-seal"],
      "segment": "Sedan",
      "powertrain": "EV",
      "menuFeatured": true,
      "badges": [
        "Sedan",
        "Thuần điện"
      ],
      "price": 1119000000,
      "priceLabel": "Từ 1.119.000.000đ",
      "image": "assets/images/vehicles/byd-seal/card.webp",
      "heroImage": "assets/images/vehicles/byd-seal/source/01-seal-pc-2-scaled.webp",
      "gallery": [
        "assets/images/vehicles/byd-seal/source/01-seal-pc-2-scaled.webp",
        "assets/images/vehicles/byd-seal/source/02-8f5d57aa-68a9-42a9-843a-d3b5448cb269.jpg",
        "assets/images/vehicles/byd-seal/source/03-10a8514c-e285-4d51-9ccb-2bd5ed874ac3.jpg",
        "assets/images/vehicles/byd-seal/source/04-06109e72-c0ef-4b77-8321-8c66e7cb11d9.jpg",
        "assets/images/vehicles/byd-seal/source/05-efd27b61-b8c9-4edf-a81d-2e60dea5e276.jpg",
        "assets/images/vehicles/byd-seal/source/06-1-scaled.webp",
        "assets/images/vehicles/byd-seal/source/07-seal-kv-copy-scaled.webp",
        "assets/images/vehicles/byd-seal/source/08-seal-pc-3-copy-scaled.webp",
        "assets/images/vehicles/byd-seal/source/09-seal-pc-interior-1.webp",
        "assets/images/vehicles/byd-seal/source/10-seal-pc-interior-2.webp",
        "assets/images/vehicles/byd-seal/source/11-seal-pc-interior-3.webp",
        "assets/images/vehicles/byd-seal/source/12-seal-pc-interior-4.jpg",
        "assets/images/vehicles/byd-seal/source/13-seal-pc-interior-5.webp",
        "assets/images/vehicles/byd-seal/source/14-seal-4-6.webp",
        "assets/images/vehicles/byd-seal/source/15-seal-5-scaled-1.webp",
        "assets/images/vehicles/byd-seal/source/16-seal-6-scaled.webp",
        "assets/images/vehicles/byd-seal/source/17-seal-7-scaled.webp",
        "assets/images/vehicles/byd-seal/source/18-seal-8-scaled.webp",
        "assets/images/vehicles/byd-seal/source/19-seal-9-scaled.webp",
        "assets/images/vehicles/byd-seal/source/20-seal-pc-1-scaled.webp"
      ],
      "shortDescription": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm vi",
      "specs": [
        {
          "label": "Tăng tốc 0-50 km/h",
          "value": "3.8 s"
        },
        {
          "label": "Quãng đường di chuyển tối đa (WLTC kết hợp)",
          "value": "520 km"
        },
        {
          "label": "Công suất pin",
          "value": "82.5 kWh"
        }
      ],
      "colors": [
        "Aurora White",
        "Cosmos Black",
        "Atlantis Gray",
        "Arctic Blue"
      ],
      "sections": {
        "overview": {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD.",
          "image": "assets/images/vehicles/byd-seal/source/07-seal-kv-copy-scaled.webp"
        },
        "exterior": {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD.",
          "image": "assets/images/vehicles/byd-seal/source/07-seal-kv-copy-scaled.webp"
        },
        "interior": {
          "title": "Màn hình xoay linh hoạt",
          "text": "Khu vực trung tâm được trang bị màn hình cảm ứng với kích thước 15,6 inch, có thể xoay ngang hoặc dọc, giúp người lái tận hưởng trải nghiệm công nghệ đầy thú vị.",
          "image": "assets/images/vehicles/byd-seal/source/09-seal-pc-interior-1.webp"
        },
        "performance": {
          "title": "Công nghệ CTB (cell-to-body)",
          "text": "Nắp trên của pin và sàn xe được kết hợp thành một, tạo thành kết cấu sandwich vững chắc. Bộ pin vừa đóng vai trò cung cấp năng lượng, vừa là một phần của cấu trúc thân xe, giúp tối ưu không gian cũng như cải thiện tuổi thọ pin. Sự liên kết chặt chẽ giữa pin Blade và thân xe mang đến cho BYD Seal mức chịu xoắn lên đến 40.500 Nm.",
          "image": "assets/images/vehicles/byd-seal/source/01-seal-pc-2-scaled.webp"
        },
        "safety": {
          "title": "e-Platform 3.0",
          "text": "BYD Seal được trang bị nền tảng e-Platform 3.0 hoàn toàn mới, phát triển riêng cho thế hệ tiếp theo của dòng xe điện thông minh, hiệu suất cao. e-Platform 3.0 mang đến 4 ưu điểm vượt trội về trí thông minh, hiệu quả, an toàn và thẩm mỹ. Nền tảng này không chỉ tích hợp và tiêu chuẩn hóa các trang bị cốt lõi mà còn góp phần xây dựng kiến trúc thân xe hoàn toàn mới , cải tiến cấu trúc điện tử, kỹ thuật và hệ thống vận hành.",
          "image": "assets/images/vehicles/byd-seal/source/01-seal-pc-2-scaled.webp"
        }
      },
      "tagline": "Đội ngũ thiết kế đẳng cấp thế giới",
      "availability": "Đang nhận báo giá",
      "officialUrl": "https://www.byd.com/vn/car/seal",
      "brochureUrl": "/assets/catalogs/byd-seal.pdf",
      "variants": [
        {
          "name": "Seal Advance (460 Km)",
          "price": 1119000000,
          "priceLabel": "1.119.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        },
        {
          "name": "Seal Performance (520 Km)",
          "price": 1359000000,
          "priceLabel": "1.359.000.000đ",
          "note": "Giá tham khảo theo dữ liệu nguồn",
          "highlights": []
        }
      ],
      "colorOptions": [
        {
          "name": "Aurora White",
          "hex": "#f3f4f2",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/02-8f5d57aa-68a9-42a9-843a-d3b5448cb269.jpg",
            "kind": "color",
            "alt": "BYD SEAL - hình 2"
          }
        },
        {
          "name": "Cosmos Black",
          "hex": "#17191d",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/03-10a8514c-e285-4d51-9ccb-2bd5ed874ac3.jpg",
            "kind": "color",
            "alt": "BYD SEAL - hình 3"
          }
        },
        {
          "name": "Atlantis Gray",
          "hex": "#747b80",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/04-06109e72-c0ef-4b77-8321-8c66e7cb11d9.jpg",
            "kind": "color",
            "alt": "BYD SEAL - hình 4"
          }
        },
        {
          "name": "Arctic Blue",
          "hex": "#4f718a",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/05-efd27b61-b8c9-4edf-a81d-2e60dea5e276.jpg",
            "kind": "color",
            "alt": "BYD SEAL - hình 5"
          }
        }
      ],
      "highlights": [
        "Cell-to-Body",
        "e-Platform 3.0",
        "Màn hình xoay 15,6 inch",
        "Hệ thống treo đa liên kết"
      ],
      "specGroups": [
        {
          "title": "Phiên bản",
          "items": [
            {
              "label": "Advanced",
              "value": "RWD, phạm vi khoảng 460 km"
            },
            {
              "label": "Performance",
              "value": "AWD, phạm vi khoảng 520 km"
            },
            {
              "label": "Khoang hành lý",
              "value": "Cốp sau 400 L + cốp trước 53 L"
            }
          ]
        },
        {
          "title": "Công nghệ nền tảng",
          "items": [
            {
              "label": "Nền tảng",
              "value": "e-Platform 3.0"
            },
            {
              "label": "Kết cấu pin",
              "value": "Cell-to-Body"
            },
            {
              "label": "Pin",
              "value": "Blade Battery"
            }
          ]
        },
        {
          "title": "Tiện nghi",
          "items": [
            {
              "label": "Màn hình trung tâm",
              "value": "15,6 inch xoay ngang/dọc"
            },
            {
              "label": "Hiển thị",
              "value": "W-HUD tùy phiên bản"
            },
            {
              "label": "Không gian",
              "value": "Cửa sổ trời toàn cảnh"
            }
          ]
        }
      ],
      "lastUpdated": "31/07/2026",
      "cardHighlights": [
        "Cell-to-Body",
        "e-Platform 3.0",
        "Màn hình xoay 15,6 inch"
      ],
      "media": [
        {
          "src": "assets/images/vehicles/byd-seal/source/01-seal-pc-2-scaled.webp",
          "kind": "detail",
          "alt": "BYD SEAL - hình 1"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/02-8f5d57aa-68a9-42a9-843a-d3b5448cb269.jpg",
          "kind": "color",
          "alt": "BYD SEAL - hình 2"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/03-10a8514c-e285-4d51-9ccb-2bd5ed874ac3.jpg",
          "kind": "color",
          "alt": "BYD SEAL - hình 3"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/04-06109e72-c0ef-4b77-8321-8c66e7cb11d9.jpg",
          "kind": "color",
          "alt": "BYD SEAL - hình 4"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/05-efd27b61-b8c9-4edf-a81d-2e60dea5e276.jpg",
          "kind": "color",
          "alt": "BYD SEAL - hình 5"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/06-1-scaled.webp",
          "kind": "detail",
          "alt": "BYD SEAL - hình 6"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/07-seal-kv-copy-scaled.webp",
          "kind": "exterior",
          "alt": "BYD SEAL - hình 7"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/08-seal-pc-3-copy-scaled.webp",
          "kind": "detail",
          "alt": "BYD SEAL - hình 8"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/09-seal-pc-interior-1.webp",
          "kind": "interior",
          "alt": "BYD SEAL - hình 9"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/10-seal-pc-interior-2.webp",
          "kind": "interior",
          "alt": "BYD SEAL - hình 10"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/11-seal-pc-interior-3.webp",
          "kind": "interior",
          "alt": "BYD SEAL - hình 11"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/12-seal-pc-interior-4.jpg",
          "kind": "interior",
          "alt": "BYD SEAL - hình 12"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/13-seal-pc-interior-5.webp",
          "kind": "interior",
          "alt": "BYD SEAL - hình 13"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/14-seal-4-6.webp",
          "kind": "detail",
          "alt": "BYD SEAL - hình 14"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/15-seal-5-scaled-1.webp",
          "kind": "detail",
          "alt": "BYD SEAL - hình 15"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/16-seal-6-scaled.webp",
          "kind": "detail",
          "alt": "BYD SEAL - hình 16"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/17-seal-7-scaled.webp",
          "kind": "detail",
          "alt": "BYD SEAL - hình 17"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/18-seal-8-scaled.webp",
          "kind": "detail",
          "alt": "BYD SEAL - hình 18"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/19-seal-9-scaled.webp",
          "kind": "detail",
          "alt": "BYD SEAL - hình 19"
        },
        {
          "src": "assets/images/vehicles/byd-seal/source/20-seal-pc-1-scaled.webp",
          "kind": "hero",
          "alt": "BYD SEAL - hình 20"
        }
      ],
      "galleryCount": 20,
      "heroMedia": {
        "src": "assets/images/vehicles/byd-seal/source/01-seal-pc-2-scaled.webp",
        "kind": "detail",
        "alt": "BYD SEAL - hình 1"
      },
      "galleryFallbacks": [],
      "storyBlocks": [
        {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/07-seal-kv-copy-scaled.webp",
            "kind": "exterior",
            "alt": "BYD SEAL - hình 7"
          }
        },
        {
          "title": "Cảm hứng thiết kế từ đại dương",
          "text": "BYD SEAL được xây dựng dựa trên ý tưởng thiết kế lấy cảm hứng từ “đại dương”. Ti lệ thân xe tinh tế bắt nguồn từ mục tiêu theo đuổi vẻ đẹp tối thượng. Thiết kế này được tạo ra từ nguồn cảm hứng giữa sự chuyển động và sự tĩnh lặng của đại dương, đồng thời thể hiện vẻ đẹp và sự sang trọng độc đáo của BYD SEAL.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/07-seal-kv-copy-scaled.webp",
            "kind": "exterior",
            "alt": "BYD SEAL - hình 7"
          }
        },
        {
          "title": "Màn hình xoay linh hoạt",
          "text": "Khu vực trung tâm được trang bị màn hình cảm ứng với kích thước 15,6 inch, có thể xoay ngang hoặc dọc, giúp người lái tận hưởng trải nghiệm công nghệ đầy thú vị.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/09-seal-pc-interior-1.webp",
            "kind": "interior",
            "alt": "BYD SEAL - hình 9"
          }
        },
        {
          "title": "Hiển thị kính lái W-HUD",
          "text": "Trang bị giúp người dùng tập trung trải nghiệm lái xe, tất cả thông tin hiển thị rõ ràng trên kính lái mà không cần phải chuyển mắt sang màn hình. Nội dung hiển thị có thể được tùy chỉnh để mang lại cảm giác tối ưu công nghệ.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/10-seal-pc-interior-2.webp",
            "kind": "interior",
            "alt": "BYD SEAL - hình 10"
          }
        },
        {
          "title": "Cửa sổ trời toàn cảnh",
          "text": "Tận hưởng vẻ đẹp thiên nhiên với cửa sổ trời toàn cảnh rộng lớn. Cảm nhận sự tự do của bầu trời rộng mở và tận hưởng ánh sáng tự nhiên tràn ngập bên trong xe của bạn.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/07-seal-kv-copy-scaled.webp",
            "kind": "exterior",
            "alt": "BYD SEAL - hình 7"
          }
        },
        {
          "title": "Rạp hát di động",
          "text": "Trải nghiệm sân khấu âm nhạc thực sự hấp dẫn với hệ thống âm thanh chất lượng cao. Âm thanh cao cấp HIFI Dynaudio của chúng tôi cung cấp âm thanh vòm ba chiều, tạo nên bữa tiệc thính giác trọn vẹn.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/11-seal-pc-interior-3.webp",
            "kind": "interior",
            "alt": "BYD SEAL - hình 11"
          }
        },
        {
          "title": "Ghế ngồi phong cách thể thao",
          "text": "Ghế ngồi được thiết kế theo nguyên tắc công thái học để tối đa hóa sự thoải mái khi sử dụng. Ghế điều chỉnh điện mang đến một chuyến đi thú vị hơn.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/12-seal-pc-interior-4.jpg",
            "kind": "interior",
            "alt": "BYD SEAL - hình 12"
          }
        },
        {
          "title": "Khoang chứa đồ tiện dụng",
          "text": "BYD SEAL không chỉ có không gian chứa đồ rộng rãi 400L ở phía sau mà còn có thêm không gian chứa đồ có nắp che 53L ở cốp trước . Điều này cung cấp một giải pháp thông minh và thiết thực cho mọi nhu cầu du lịch của bạn.",
          "category": "interior",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/13-seal-pc-interior-5.webp",
            "kind": "interior",
            "alt": "BYD SEAL - hình 13"
          }
        },
        {
          "title": "e-Platform 3.0",
          "text": "BYD Seal được trang bị nền tảng e-Platform 3.0 hoàn toàn mới, phát triển riêng cho thế hệ tiếp theo của dòng xe điện thông minh, hiệu suất cao. e-Platform 3.0 mang đến 4 ưu điểm vượt trội về trí thông minh, hiệu quả, an toàn và thẩm mỹ. Nền tảng này không chỉ tích hợp và tiêu chuẩn hóa các trang bị cốt lõi mà còn góp phần xây dựng kiến trúc thân xe hoàn toàn mới , cải tiến cấu trúc điện tử, kỹ thuật và hệ thống vận hành.",
          "category": "safety",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/01-seal-pc-2-scaled.webp",
            "kind": "detail",
            "alt": "BYD SEAL - hình 1"
          }
        },
        {
          "title": "Công nghệ CTB (cell-to-body)",
          "text": "Nắp trên của pin và sàn xe được kết hợp thành một, tạo thành kết cấu sandwich vững chắc. Bộ pin vừa đóng vai trò cung cấp năng lượng, vừa là một phần của cấu trúc thân xe, giúp tối ưu không gian cũng như cải thiện tuổi thọ pin. Sự liên kết chặt chẽ giữa pin Blade và thân xe mang đến cho BYD Seal mức chịu xoắn lên đến 40.500 Nm.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/01-seal-pc-2-scaled.webp",
            "kind": "detail",
            "alt": "BYD SEAL - hình 1"
          }
        },
        {
          "title": "Hệ thống iTAC - intelligence Torque Adaption Control (điều khiển mô-men xoắn thích ứng thông minh)",
          "text": "Dựa trên đặc tính phản hồi nhanh nhạy của động cơ điện, các cảm biến được sử dụng để nhanh chóng xác định những thay đổi về trạng thái xe, giảm hiện tượng trượt bánh và thiếu lái một cách hiệu quả, đồng thời điều chỉnh ngay lập tức lực mô-men xoắn từ động cơ dẫn động để duy trì tư thế ngồi lái tốt nhất.",
          "category": "technology",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/06-1-scaled.webp",
            "kind": "detail",
            "alt": "BYD SEAL - hình 6"
          }
        },
        {
          "title": "Hệ thống treo tay đòn kép kết hợp treo đa liên kết",
          "text": "Cấu hình hệ thống treo cao cấp nhất tạo ra trải nghiệm lái tuyệt vời nhất, hiện thực hóa sự kết hợp thực sự giữa con người và phương tiện, đồng thời kích hoạt chất thể thao của phương tiện.",
          "category": "exterior",
          "image": {
            "src": "assets/images/vehicles/byd-seal/source/07-seal-kv-copy-scaled.webp",
            "kind": "exterior",
            "alt": "BYD SEAL - hình 7"
          }
        }
      ],
      "allContentBlocks": [
        {
          "title": "Đội ngũ thiết kế đẳng cấp thế giới",
          "text": "Giám đốc thiết kế ô tô Wolfgang Egger dẫn đầu một đội thiết kế đẳng cấp thế giới nơi mà những sáng tạo kết hợp hoàn hảo với sự đổi mới, chất lượng và cả độ tin cậy. Hơn 200 nhà thiết kế từ hơn 10 quốc gia như Ý, Tây Ban Nha, Thụy Sĩ và Đức, đã cùng nhau làm việc ở khắp các địa điểm trên toàn thế giới để mang đến thiết kế đặc trưng của thương hiệu BYD."
        },
        {
          "title": "Cảm hứng thiết kế từ đại dương",
          "text": "BYD SEAL được xây dựng dựa trên ý tưởng thiết kế lấy cảm hứng từ “đại dương”. Ti lệ thân xe tinh tế bắt nguồn từ mục tiêu theo đuổi vẻ đẹp tối thượng. Thiết kế này được tạo ra từ nguồn cảm hứng giữa sự chuyển động và sự tĩnh lặng của đại dương, đồng thời thể hiện vẻ đẹp và sự sang trọng độc đáo của BYD SEAL."
        },
        {
          "title": "Màn hình xoay linh hoạt",
          "text": "Khu vực trung tâm được trang bị màn hình cảm ứng với kích thước 15,6 inch, có thể xoay ngang hoặc dọc, giúp người lái tận hưởng trải nghiệm công nghệ đầy thú vị."
        },
        {
          "title": "Hiển thị kính lái W-HUD",
          "text": "Trang bị giúp người dùng tập trung trải nghiệm lái xe, tất cả thông tin hiển thị rõ ràng trên kính lái mà không cần phải chuyển mắt sang màn hình. Nội dung hiển thị có thể được tùy chỉnh để mang lại cảm giác tối ưu công nghệ."
        },
        {
          "title": "Cửa sổ trời toàn cảnh",
          "text": "Tận hưởng vẻ đẹp thiên nhiên với cửa sổ trời toàn cảnh rộng lớn. Cảm nhận sự tự do của bầu trời rộng mở và tận hưởng ánh sáng tự nhiên tràn ngập bên trong xe của bạn."
        },
        {
          "title": "Rạp hát di động",
          "text": "Trải nghiệm sân khấu âm nhạc thực sự hấp dẫn với hệ thống âm thanh chất lượng cao. Âm thanh cao cấp HIFI Dynaudio của chúng tôi cung cấp âm thanh vòm ba chiều, tạo nên bữa tiệc thính giác trọn vẹn."
        },
        {
          "title": "Ghế ngồi phong cách thể thao",
          "text": "Ghế ngồi được thiết kế theo nguyên tắc công thái học để tối đa hóa sự thoải mái khi sử dụng. Ghế điều chỉnh điện mang đến một chuyến đi thú vị hơn."
        },
        {
          "title": "Khoang chứa đồ tiện dụng",
          "text": "BYD SEAL không chỉ có không gian chứa đồ rộng rãi 400L ở phía sau mà còn có thêm không gian chứa đồ có nắp che 53L ở cốp trước . Điều này cung cấp một giải pháp thông minh và thiết thực cho mọi nhu cầu du lịch của bạn."
        },
        {
          "title": "e-Platform 3.0",
          "text": "BYD Seal được trang bị nền tảng e-Platform 3.0 hoàn toàn mới, phát triển riêng cho thế hệ tiếp theo của dòng xe điện thông minh, hiệu suất cao. e-Platform 3.0 mang đến 4 ưu điểm vượt trội về trí thông minh, hiệu quả, an toàn và thẩm mỹ. Nền tảng này không chỉ tích hợp và tiêu chuẩn hóa các trang bị cốt lõi mà còn góp phần xây dựng kiến trúc thân xe hoàn toàn mới , cải tiến cấu trúc điện tử, kỹ thuật và hệ thống vận hành."
        },
        {
          "title": "Công nghệ CTB (cell-to-body)",
          "text": "Nắp trên của pin và sàn xe được kết hợp thành một, tạo thành kết cấu sandwich vững chắc. Bộ pin vừa đóng vai trò cung cấp năng lượng, vừa là một phần của cấu trúc thân xe, giúp tối ưu không gian cũng như cải thiện tuổi thọ pin. Sự liên kết chặt chẽ giữa pin Blade và thân xe mang đến cho BYD Seal mức chịu xoắn lên đến 40.500 Nm."
        },
        {
          "title": "Hệ thống iTAC - intelligence Torque Adaption Control (điều khiển mô-men xoắn thích ứng thông minh)",
          "text": "Dựa trên đặc tính phản hồi nhanh nhạy của động cơ điện, các cảm biến được sử dụng để nhanh chóng xác định những thay đổi về trạng thái xe, giảm hiện tượng trượt bánh và thiếu lái một cách hiệu quả, đồng thời điều chỉnh ngay lập tức lực mô-men xoắn từ động cơ dẫn động để duy trì tư thế ngồi lái tốt nhất."
        },
        {
          "title": "Hệ thống treo tay đòn kép kết hợp treo đa liên kết",
          "text": "Cấu hình hệ thống treo cao cấp nhất tạo ra trải nghiệm lái tuyệt vời nhất, hiện thực hóa sự kết hợp thực sự giữa con người và phương tiện, đồng thời kích hoạt chất thể thao của phương tiện."
        }
      ]
    }
  ].sort((a, b) => {
    const orderA = Number.isFinite(Number(a.displayOrder)) ? Number(a.displayOrder) : 999;
    const orderB = Number.isFinite(Number(b.displayOrder)) ? Number(b.displayOrder) : 999;
    return orderA - orderB || String(a.name || "").localeCompare(String(b.name || ""), "vi");
  }),
  "technology": [
    {
      "title": "Blade Battery",
      "eyebrow": "An toàn pin",
      "description": "Cấu trúc pin dạng lưỡi dài giúp tối ưu không gian, quản lý nhiệt và độ vững chắc của bộ pin.",
      "metric": "Công nghệ lõi BYD"
    },
    {
      "title": "e-Platform 3.0",
      "eyebrow": "Nền tảng thuần điện",
      "description": "Tích hợp hệ truyền động, pin, quản lý nhiệt và điện tử trên một kiến trúc chuyên dụng cho xe điện.",
      "metric": "Thông minh · Hiệu quả · An toàn"
    },
    {
      "title": "DM-i Super Hybrid",
      "eyebrow": "Hybrid thiên về điện",
      "description": "Ưu tiên mô-tơ điện trong nhiều tình huống để tạo cảm giác vận hành êm, mượt và hiệu quả.",
      "metric": "Linh hoạt hành trình"
    },
    {
      "title": "Hỗ trợ lái",
      "eyebrow": "An toàn chủ động",
      "description": "Camera, radar, cảm biến và các thuật toán hỗ trợ người lái tùy theo mẫu xe và phiên bản.",
      "metric": "Cấu hình theo phiên bản"
    }
  ],
  "services": [
    {
      "title": "Tư vấn chuyên nghiệp",
      "description": "Tư vấn nhu cầu, phiên bản và giải pháp sở hữu phù hợp."
    },
    {
      "title": "Giá ưu đãi, giao xe nhanh",
      "description": "Thông tin rõ ràng, tiến độ giao xe được cập nhật minh bạch."
    },
    {
      "title": "Khuyến mãi hấp dẫn",
      "description": "Chương trình ưu đãi được xác nhận tại thời điểm đăng ký."
    },
    {
      "title": "Lái thử thuận tiện",
      "description": "Đặt lịch tại showroom hoặc trao đổi phương án trải nghiệm phù hợp."
    },
    {
      "title": "Bảo hành, bảo dưỡng",
      "description": "Dịch vụ hậu mãi và phụ tùng theo tiêu chuẩn đại lý chính hãng."
    },
    {
      "title": "Hỗ trợ ngân hàng",
      "description": "Ước tính khoản vay và kết nối hồ sơ với đối tác tài chính."
    }
  ],
  "news": [
    {
      "slug": "khai-truong-showroom-4s",
      "title": "Khai trương Showroom BYD Thành Công Cà Mau 4S",
      "date": "2026-03-28",
      "image": "assets/images/showroom-launch.webp",
      "excerpt": "Dấu mốc đưa không gian trải nghiệm xe năng lượng mới và dịch vụ hậu mãi 4S đến gần hơn với khách hàng Cà Mau.",
      "url": "/tin-tuc/?slug=khai-truong-showroom-4s",
      "category": "Sự kiện đại lý",
      "content": [
        "Ngày 27/03/2026, Showroom BYD Thành Công Cà Mau 4S chính thức đi vào hoạt động tại đường Lý Thường Kiệt, phường Tân Thành, Cà Mau.",
        "Không gian được tổ chức theo mô hình 4S, kết nối hoạt động bán hàng, dịch vụ, phụ tùng chính hãng và tiếp nhận ý kiến khách hàng trong cùng một hành trình trải nghiệm.",
        "Khách hàng có thể tham quan sản phẩm, trao đổi phương án tài chính, đăng ký lái thử và đặt lịch dịch vụ tại đại lý."
      ]
    },
    {
      "slug": "ban-giao-xe-byd-atto-2",
      "title": "Lễ bàn giao xe BYD ATTO 2 tại Cà Mau",
      "date": "2025-12-29",
      "image": "assets/images/showroom-hero.webp",
      "excerpt": "Khoảnh khắc bàn giao BYD ATTO 2 và lời cảm ơn khách hàng đã tin chọn giải pháp di chuyển năng lượng mới.",
      "url": "/tin-tuc/?slug=ban-giao-xe-byd-atto-2",
      "category": "Bàn giao xe",
      "content": [
        "BYD Thành Công Cà Mau chúc mừng khách hàng hoàn tất thủ tục và nhận bàn giao BYD ATTO 2.",
        "Trước khi giao xe, đội ngũ đại lý hướng dẫn các thao tác cơ bản, lưu ý sử dụng, thông tin bảo hành và lịch chăm sóc xe.",
        "Mỗi buổi bàn giao là điểm bắt đầu của quá trình đồng hành sau bán hàng giữa khách hàng và đại lý."
      ]
    },
    {
      "slug": "trai-nghiem-thuc-te-byd",
      "title": "Một chuyến đi ngắn, một góc nhìn mới về BYD",
      "date": "2025-12-15",
      "image": "assets/images/test-drive-experience.webp",
      "excerpt": "Trải nghiệm thực tế giúp người lái cảm nhận độ êm, khả năng phản hồi và sự khác biệt của hệ truyền động điện.",
      "url": "/tin-tuc/?slug=trai-nghiem-thuc-te-byd",
      "category": "Trải nghiệm",
      "content": [
        "Một chuyến lái thử ngắn có thể giúp khách hàng đánh giá trực tiếp độ êm, khả năng tăng tốc, tầm quan sát và cách bố trí các chức năng trên xe.",
        "Thay vì chỉ xem thông số, người lái nên thử các tình huống sử dụng quen thuộc để xác định mẫu xe và phiên bản phù hợp.",
        "Lịch lái thử được sắp xếp theo tình trạng xe thực tế tại showroom."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Làm sao nhận báo giá xe BYD tại Cà Mau?",
      "answer": "Chọn dòng xe, điền họ tên và số điện thoại 10 chữ số trong form nhận báo giá. Đội ngũ tư vấn sẽ xác nhận giá và chương trình áp dụng tại thời điểm liên hệ."
    },
    {
      "question": "Website có tính giá lăn bánh không?",
      "answer": "Có. Công cụ cho phép nhập giá xe, lệ phí trước bạ, phí biển số, bảo hiểm và các khoản dự kiến. Kết quả chỉ mang tính tham khảo."
    },
    {
      "question": "Có thể ước tính trả góp trên website không?",
      "answer": "Có. Nhập giá xe, tỷ lệ trả trước, thời hạn vay và lãi suất dự kiến để xem khoản thanh toán hàng tháng theo phương pháp dư nợ giảm dần."
    },
    {
      "question": "Showroom BYD Thành Công Cà Mau ở đâu?",
      "answer": "Showroom 4S hiện hoạt động tại Số 109, Đường Lý Thường Kiệt, Phường Tân Thành, Cà Mau. Khách hàng nên gọi hotline trước khi đến để được sắp xếp tư vấn hoặc lái thử."
    }
  ]
});

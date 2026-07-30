'use strict';

window.BYD_DATA = Object.freeze({
  vehicles: [
    {
      slug: 'byd-dolphin',
      name: 'BYD Dolphin',
      segment: 'Hatchback',
      powertrain: 'EV',
      menuFeatured: true,
      badges: ['Hatchback', 'Thuần điện'],
      price: 499000000,
      priceLabel: '499.000.000đ',
      image: 'assets/images/byd-dolphin-thumb.webp',
      heroImage: 'assets/images/byd-dolphin-official.webp',
      gallery: ['assets/images/byd-dolphin-official.webp', 'assets/images/byd-dolphin-thumb.webp', 'assets/images/showroom-hero.webp'],
      shortDescription: 'Hatchback thuần điện nhỏ gọn, linh hoạt trong đô thị, thiết kế trẻ trung và phạm vi di chuyển công bố đến 435 km theo chuẩn NEDC.',
      specs: [
        { label: 'Kiểu xe', value: 'Hatchback 5 chỗ' },
        { label: 'Phạm vi', value: '435 km NEDC' },
        { label: 'Pin', value: 'Blade Battery 50,25 kWh' }
      ],
      colors: ['Trắng', 'Đen', 'Xám', 'Xanh'],
      sections: {
        overview: { title: 'Linh hoạt cho nhịp sống đô thị', text: 'BYD Dolphin nhập khẩu Thái Lan hướng đến người dùng cần một mẫu xe điện nhỏ gọn, dễ điều khiển và tiết kiệm chi phí vận hành hằng ngày.', image: 'assets/images/byd-dolphin-official.webp' },
        exterior: { title: 'Thiết kế trẻ trung, dễ nhận diện', text: 'Tỷ lệ thân xe gọn, đường nét mềm mại và khoang hành khách tối ưu giúp Dolphin phù hợp cả đường phố đông đúc lẫn nhu cầu đi lại gia đình.', image: 'assets/images/byd-dolphin-official.webp' },
        interior: { title: 'Khoang lái hiện đại và thực dụng', text: 'Màn hình trung tâm xoay, bố cục điều khiển trực quan và hàng ghế sau gập linh hoạt phục vụ tốt nhu cầu sử dụng thường nhật.', image: 'assets/images/showroom-hero.webp' },
        performance: { title: 'Vận hành thuần điện êm và nhanh nhạy', text: 'Mô-tơ điện dẫn động cầu trước mang lại phản hồi tức thời; pin Blade Battery hỗ trợ phạm vi di chuyển phù hợp cho đô thị và hành trình ngắn.', image: 'assets/images/byd-dolphin-official.webp' },
        safety: { title: 'An toàn chủ động cho hành trình hằng ngày', text: 'Cấu hình trang bị gồm các hệ thống cân bằng điện tử, camera toàn cảnh và hỗ trợ phanh tùy phiên bản phân phối.', image: 'assets/images/showroom-launch.webp' }
      }
    },
    {
      slug: 'byd-atto-2',
      name: 'BYD Atto 2',
      segment: 'SUV',
      powertrain: 'EV',
      menuFeatured: true,
      badges: ['SUV', 'Thuần điện'],
      price: 669000000,
      priceLabel: '669.000.000đ',
      image: 'assets/images/byd-atto2-thumb.webp',
      heroImage: 'assets/images/byd-atto2-official.webp',
      gallery: ['assets/images/byd-atto2-official.webp', 'assets/images/byd-atto2-thumb.webp', 'assets/images/showroom-hero.webp'],
      shortDescription: 'SUV điện đô thị nhỏ gọn, vị trí ngồi cao, không gian tối ưu và nền tảng xe điện chuyên dụng e-Platform 3.0.',
      specs: [
        { label: 'Kiểu xe', value: 'SUV đô thị' },
        { label: 'Phạm vi', value: 'Khoảng 380 km' },
        { label: 'Nền tảng', value: 'e-Platform 3.0' }
      ],
      colors: ['Trắng', 'Đen', 'Xám', 'Xanh'],
      sections: {
        overview: { title: 'SUV đô thị linh hoạt', text: 'Kích thước gọn, vị trí ngồi cao và khả năng xoay trở tốt giúp ATTO 2 phù hợp với giao thông đô thị.', image: 'assets/images/byd-atto2-official.webp' },
        exterior: { title: 'Dragon Face thế hệ mới', text: 'Bề mặt thân xe gọn gàng, cụm đèn hiện đại và tỷ lệ SUV cân đối tạo diện mạo trẻ trung.', image: 'assets/images/byd-atto2-official.webp' },
        interior: { title: 'Không gian tối ưu trên nền tảng điện', text: 'Kiến trúc xe điện chuyên dụng giúp mở rộng không gian đầu, chân và khoang chứa đồ.', image: 'assets/images/showroom-hero.webp' },
        performance: { title: 'Hệ truyền động điện tích hợp', text: 'Mô-tơ điện phản hồi nhanh, hệ thống quản lý pin và truyền động được tích hợp nhằm nâng cao hiệu suất.', image: 'assets/images/byd-atto2-official.webp' },
        safety: { title: 'Blade Battery và cấu trúc thân xe', text: 'Cấu trúc pin và thân xe được phát triển theo hướng tăng độ vững chắc và sử dụng không gian hiệu quả.', image: 'assets/images/showroom-launch.webp' }
      }
    },
    {
      slug: 'byd-atto-3',
      name: 'BYD Atto 3',
      segment: 'SUV',
      powertrain: 'EV',
      menuFeatured: false,
      badges: ['SUV', 'Thuần điện'],
      price: 776000000,
      priceLabel: 'Từ 776.000.000đ',
      image: 'assets/images/byd-atto3-thumb.webp',
      heroImage: 'assets/images/byd-atto3-official.webp',
      gallery: ['assets/images/byd-atto3-official.webp', 'assets/images/byd-atto3-thumb.webp', 'assets/images/showroom-hero.webp'],
      shortDescription: 'C-SUV thuần điện năng động với e-Platform 3.0, Blade Battery, khả năng cấp điện V2L và khoang nội thất giàu cá tính.',
      specs: [
        { label: 'Kiểu xe', value: 'C-SUV 5 chỗ' },
        { label: 'Phạm vi', value: 'Khoảng 410 km' },
        { label: 'Tiện ích', value: 'V2L' }
      ],
      colors: ['Trắng', 'Đen', 'Xám', 'Xanh'],
      sections: {
        overview: { title: 'C-SUV năng động và đa dụng', text: 'ATTO 3 phù hợp khách hàng cần một mẫu SUV điện nhiều công nghệ, không gian thực dụng và dễ sử dụng.', image: 'assets/images/byd-atto3-official.webp' },
        exterior: { title: 'Tỷ lệ thể thao', text: 'Đường nét thân xe liền mạch, đèn LED và các chi tiết khí động học tạo phong cách năng động.', image: 'assets/images/byd-atto3-official.webp' },
        interior: { title: 'Khoang lái khác biệt', text: 'Màn hình xoay thông minh, thiết kế nội thất lấy cảm hứng từ thể thao và không gian chứa đồ linh hoạt.', image: 'assets/images/showroom-hero.webp' },
        performance: { title: 'e-Platform 3.0', text: 'Nền tảng tích hợp mô-tơ, hệ thống quản lý điện và pin Blade nhằm tối ưu hiệu quả vận hành.', image: 'assets/images/byd-atto3-official.webp' },
        safety: { title: 'Cấu trúc thân xe vững chắc', text: 'Hệ thống an toàn chủ động, bị động và hỗ trợ lái thay đổi theo cấu hình phân phối.', image: 'assets/images/showroom-launch.webp' }
      }
    },
    {
      slug: 'byd-seal-5',
      name: 'BYD Seal 5',
      segment: 'Sedan',
      powertrain: 'DM-i',
      menuFeatured: true,
      badges: ['Sedan', 'DM-i'],
      price: 696000000,
      priceLabel: '696.000.000đ',
      image: 'assets/images/byd-seal5-thumb.webp',
      heroImage: 'assets/images/byd-seal5-official.webp',
      gallery: ['assets/images/byd-seal5-official.webp', 'assets/images/byd-seal5-thumb.webp', 'assets/images/showroom-hero.webp'],
      shortDescription: 'Sedan hạng C ứng dụng công nghệ DM-i Super Hybrid, kết hợp trải nghiệm vận hành thiên về điện với khả năng di chuyển linh hoạt.',
      specs: [
        { label: 'Kiểu xe', value: 'Sedan 5 chỗ' },
        { label: 'Thuần điện', value: 'Khoảng 120 km' },
        { label: 'Hệ truyền động', value: 'DM-i Super Hybrid' }
      ],
      colors: ['Trắng', 'Đen', 'Xám', 'Xanh'],
      sections: {
        overview: { title: 'Sedan công nghệ cho hành trình hằng ngày', text: 'BYD Seal 5 cân bằng giữa thiết kế thanh lịch, không gian rộng và trải nghiệm vận hành thiên về điện.', image: 'assets/images/byd-seal5-official.webp' },
        exterior: { title: 'Ngôn ngữ thiết kế hiện đại', text: 'Đèn LED sắc nét, thân xe liền mạch và tỷ lệ sedan cân đối tạo cảm giác thanh thoát.', image: 'assets/images/byd-seal5-official.webp' },
        interior: { title: 'Khoang lái trực quan', text: 'Màn hình trung tâm, kết nối thông minh và bố cục điều khiển gọn gàng phục vụ nhu cầu hằng ngày.', image: 'assets/images/showroom-hero.webp' },
        performance: { title: 'Vận hành ưu tiên mô-tơ điện', text: 'Công nghệ DM-i kết hợp động cơ xăng và mô-tơ điện nhằm tối ưu độ mượt và hiệu quả.', image: 'assets/images/byd-seal5-official.webp' },
        safety: { title: 'Trang bị an toàn theo phiên bản', text: 'Danh mục hệ thống hỗ trợ lái và an toàn có thể thay đổi theo phiên bản và thời điểm phân phối.', image: 'assets/images/showroom-launch.webp' }
      }
    },
    {
      slug: 'byd-seal',
      name: 'BYD Seal',
      segment: 'Sedan',
      powertrain: 'EV',
      menuFeatured: true,
      badges: ['Sedan', 'Thuần điện'],
      price: 1119000000,
      priceLabel: 'Từ 1.119.000.000đ',
      image: 'assets/images/byd-seal-advanced-thumb.webp',
      heroImage: 'assets/images/byd-seal-official.webp',
      gallery: ['assets/images/byd-seal-official.webp', 'assets/images/byd-seal-advanced-thumb.webp', 'assets/images/showroom-hero.webp'],
      shortDescription: 'Sedan thuần điện thể thao, ứng dụng e-Platform 3.0, công nghệ Cell-to-Body và hệ truyền động hiệu năng cao.',
      specs: [
        { label: 'Kiểu xe', value: 'Sedan thể thao' },
        { label: 'Phạm vi', value: 'Khoảng 460 km' },
        { label: 'Công nghệ', value: 'Cell-to-Body' }
      ],
      colors: ['Trắng', 'Đen', 'Xám', 'Xanh'],
      sections: {
        overview: { title: 'Sedan thuần điện giàu cảm xúc', text: 'BYD Seal kết hợp dáng coupe, trọng tâm thấp và nền tảng điện chuyên dụng để tạo trải nghiệm lái khác biệt.', image: 'assets/images/byd-seal-official.webp' },
        exterior: { title: 'Thiết kế Ocean Aesthetics', text: 'Cụm đèn sắc nét, thân xe khí động học và tỷ lệ thể thao tạo hình ảnh hiện đại.', image: 'assets/images/byd-seal-official.webp' },
        interior: { title: 'Không gian thể thao và công nghệ', text: 'Ghế ôm thân, màn hình trung tâm xoay và hệ thống âm thanh tạo trải nghiệm hiện đại.', image: 'assets/images/showroom-hero.webp' },
        performance: { title: 'Hiệu năng điện tức thời', text: 'Hệ truyền động điện phản hồi nhanh; cấu hình Advanced và Performance đáp ứng các nhu cầu khác nhau.', image: 'assets/images/byd-seal-official.webp' },
        safety: { title: 'Cell-to-Body và Blade Battery', text: 'Pin được tích hợp vào cấu trúc thân xe nhằm tăng độ cứng, tối ưu không gian và hỗ trợ an toàn.', image: 'assets/images/showroom-launch.webp' }
      }
    },
    {
      slug: 'byd-han',
      name: 'BYD Han',
      segment: 'Sedan',
      powertrain: 'EV',
      menuFeatured: true,
      badges: ['Sedan', 'Thuần điện'],
      price: 1489000000,
      priceLabel: '1.489.000.000đ',
      image: 'assets/images/byd-han-thumb.webp',
      heroImage: 'assets/images/byd-han-official.webp',
      gallery: ['assets/images/byd-han-official.webp', 'assets/images/byd-han-thumb.webp', 'assets/images/showroom-hero.webp'],
      shortDescription: 'Sedan thuần điện cao cấp, thiết kế sang trọng, khoang lái tiện nghi và hiệu năng mạnh mẽ.',
      specs: [
        { label: 'Kiểu xe', value: 'Sedan cao cấp' },
        { label: 'Phạm vi', value: 'Khoảng 521 km' },
        { label: 'Năng lượng', value: 'Thuần điện' }
      ],
      colors: ['Trắng', 'Đen', 'Xám', 'Xanh'],
      sections: {
        overview: { title: 'Sedan cao cấp của BYD', text: 'BYD Han kết hợp tỷ lệ sedan sang trọng, khoang lái công nghệ và khả năng vận hành điện mạnh mẽ.', image: 'assets/images/byd-han-official.webp' },
        exterior: { title: 'Thiết kế thanh lịch và khí động học', text: 'Đường mui coupe, cụm đèn đặc trưng và thân xe liền khối tạo diện mạo cao cấp.', image: 'assets/images/byd-han-official.webp' },
        interior: { title: 'Vật liệu và tiện nghi cao cấp', text: 'Không gian hướng đến sự yên tĩnh, thoải mái và khả năng điều khiển trực quan.', image: 'assets/images/showroom-hero.webp' },
        performance: { title: 'Hiệu năng điện tức thời', text: 'Mô-tơ điện mang lại phản hồi nhanh và độ êm đặc trưng, cấu hình cụ thể tùy phiên bản.', image: 'assets/images/byd-han-official.webp' },
        safety: { title: 'Nền tảng pin Blade', text: 'Hệ thống pin và cấu trúc xe được phát triển với trọng tâm an toàn, độ cứng và quản lý nhiệt.', image: 'assets/images/showroom-launch.webp' }
      }
    },
    {
      slug: 'byd-m6',
      name: 'BYD M6',
      segment: 'MPV',
      powertrain: 'EV',
      menuFeatured: true,
      badges: ['MPV', 'Thuần điện'],
      price: 756000000,
      priceLabel: '756.000.000đ',
      image: 'assets/images/byd-m6-thumb.webp',
      heroImage: 'assets/images/byd-m6-official.webp',
      gallery: ['assets/images/byd-m6-official.webp', 'assets/images/byd-m6-thumb.webp', 'assets/images/showroom-hero.webp'],
      shortDescription: 'MPV thuần điện 7 chỗ, không gian linh hoạt, vận hành êm và phù hợp nhu cầu gia đình hoặc dịch vụ cao cấp.',
      specs: [
        { label: 'Kiểu xe', value: 'MPV 7 chỗ' },
        { label: 'Phạm vi', value: 'Khoảng 420 km' },
        { label: 'Khoang hành lý', value: 'Tối đa khoảng 950 L' }
      ],
      colors: ['Trắng', 'Đen', 'Xám', 'Xanh'],
      sections: {
        overview: { title: 'MPV điện cho gia đình hiện đại', text: 'BYD M6 ưu tiên không gian, sự êm ái và chi phí vận hành hợp lý cho gia đình nhiều thành viên.', image: 'assets/images/byd-m6-official.webp' },
        exterior: { title: 'Thiết kế cân đối và tinh tế', text: 'Thân xe dài, cửa mở rộng và tỷ lệ MPV tạo thuận tiện khi lên xuống xe.', image: 'assets/images/byd-m6-official.webp' },
        interior: { title: 'Bảy chỗ ngồi linh hoạt', text: 'Hàng ghế sau gập linh hoạt, màn hình trung tâm xoay và nhiều vị trí chứa đồ phục vụ hành trình dài.', image: 'assets/images/showroom-hero.webp' },
        performance: { title: 'Vận hành thuần điện êm ái', text: 'Mô-tơ điện dẫn động cầu trước mang lại phản hồi mượt, phù hợp cả đô thị và đường trường.', image: 'assets/images/byd-m6-official.webp' },
        safety: { title: 'Hệ thống hỗ trợ lái thiết thực', text: 'Camera, cảm biến và các hệ thống cân bằng hỗ trợ người lái trong nhiều tình huống sử dụng.', image: 'assets/images/showroom-launch.webp' }
      }
    },
    {
      slug: 'byd-m9',
      name: 'BYD M9',
      segment: 'MPV',
      powertrain: 'DM-i',
      menuFeatured: true,
      badges: ['MPV', 'DM-i'],
      price: 1999000000,
      priceLabel: 'Từ 1.999.000.000đ',
      image: 'assets/images/byd-m9-thumb.webp',
      heroImage: 'assets/images/byd-m9-official.webp',
      gallery: ['assets/images/byd-m9-official.webp', 'assets/images/byd-m9-thumb.webp', 'assets/images/showroom-hero.webp'],
      shortDescription: 'MPV 7 chỗ cỡ lớn ứng dụng DM-i Super Hybrid, khoang hành khách 2+2+3 và tiện nghi hướng đến trải nghiệm thương gia.',
      specs: [
        { label: 'Kiểu xe', value: 'MPV 7 chỗ' },
        { label: 'Tổng hành trình', value: 'Đến khoảng 945 km' },
        { label: 'Bố trí ghế', value: '2+2+3' }
      ],
      colors: ['Trắng', 'Đen', 'Xám', 'Xanh'],
      sections: {
        overview: { title: 'Không gian lớn, trải nghiệm cao cấp', text: 'BYD M9 được định vị là mẫu MPV thông minh cỡ lớn, kết hợp khả năng vận hành bằng điện với động cơ xăng hiệu suất cao.', image: 'assets/images/byd-m9-official.webp' },
        exterior: { title: 'Ngoại thất bề thế và hiện đại', text: 'Tỷ lệ thân xe dài, cửa trượt điện và thiết kế đầu xe mạnh mẽ tạo hình ảnh sang trọng.', image: 'assets/images/byd-m9-official.webp' },
        interior: { title: 'Khoang nội thất linh hoạt', text: 'Bố trí ghế 2+2+3, hàng ghế giữa độc lập và hệ thống giải trí trung tâm phục vụ các hành trình dài.', image: 'assets/images/showroom-hero.webp' },
        performance: { title: 'DM-i Super Hybrid thế hệ mới', text: 'Hệ thống ưu tiên mô-tơ điện trong nhiều tình huống để tạo cảm giác êm, mượt và tối ưu năng lượng.', image: 'assets/images/byd-m9-official.webp' },
        safety: { title: 'Hỗ trợ lái và bảo vệ chủ động', text: 'Cấu hình trang bị thay đổi theo phiên bản; khách hàng nên nhận bảng thông số chính thức tại thời điểm mua xe.', image: 'assets/images/showroom-launch.webp' }
      }
    },
    {
      slug: 'byd-sealion-6',
      name: 'BYD Sealion 6',
      segment: 'SUV',
      powertrain: 'DM-i',
      menuFeatured: true,
      badges: ['SUV', 'DM-i'],
      price: 839000000,
      priceLabel: 'Từ 839.000.000đ',
      image: 'assets/images/byd-sealion6-thumb.webp',
      heroImage: 'assets/images/byd-sealion6-official.webp',
      gallery: ['assets/images/byd-sealion6-official.webp', 'assets/images/byd-sealion6-thumb.webp', 'assets/images/showroom-hero.webp'],
      shortDescription: 'SUV DM-i Super Hybrid 5 chỗ, không gian rộng, thiết kế Ocean X Face và tổng phạm vi hành trình công bố đến khoảng 1.200 km.',
      specs: [
        { label: 'Kiểu xe', value: 'SUV 5 chỗ' },
        { label: 'Tổng hành trình', value: 'Đến khoảng 1.200 km' },
        { label: 'Hệ truyền động', value: 'DM-i Super Hybrid' }
      ],
      colors: ['Trắng', 'Đen', 'Xám', 'Xanh'],
      sections: {
        overview: { title: 'SUV Super Hybrid đa dụng', text: 'BYD Sealion 6 kết hợp trải nghiệm vận hành thiên về điện với sự linh hoạt của động cơ xăng cho hành trình dài.', image: 'assets/images/byd-sealion6-official.webp' },
        exterior: { title: 'Ocean X Face mạnh mẽ', text: 'Tỷ lệ thân xe rộng, cụm đèn chữ U và các đường gân sắc nét tạo diện mạo cao cấp.', image: 'assets/images/byd-sealion6-official.webp' },
        interior: { title: 'Không gian tiện nghi và thực dụng', text: 'Màn hình xoay lớn, ghế trước chỉnh điện và khoang hành khách rộng phục vụ tốt gia đình.', image: 'assets/images/showroom-hero.webp' },
        performance: { title: 'DM-i Super Hybrid hiệu quả', text: 'Động cơ Xiaoyun và mô-tơ điện phối hợp nhằm tối ưu độ êm, sức mạnh và mức tiêu thụ nhiên liệu.', image: 'assets/images/byd-sealion6-official.webp' },
        safety: { title: 'Blade Battery và hỗ trợ lái', text: 'Pin LFP Blade Battery cùng hệ thống camera, radar và hỗ trợ lái tùy phiên bản nâng cao sự an tâm.', image: 'assets/images/showroom-launch.webp' }
      }
    },
    {
      slug: 'byd-sealion-8',
      name: 'BYD Sealion 8',
      segment: 'SUV',
      powertrain: 'EV',
      menuFeatured: false,
      badges: ['SUV', 'Thuần điện'],
      price: 1569000000,
      priceLabel: '1.569.000.000đ',
      image: 'assets/images/byd-sealion8-thumb.webp',
      heroImage: 'assets/images/byd-sealion8-official.webp',
      gallery: ['assets/images/byd-sealion8-official.webp', 'assets/images/byd-sealion8-thumb.webp', 'assets/images/showroom-hero.webp'],
      shortDescription: 'SUV thuần điện 7 chỗ hạng D, không gian rộng, khả năng sạc nhanh DC và cấu hình hiệu năng cao.',
      specs: [
        { label: 'Kiểu xe', value: 'SUV 7 chỗ' },
        { label: 'Phạm vi', value: 'Khoảng 530 km' },
        { label: 'Sạc nhanh DC', value: 'Tối đa khoảng 170 kW' }
      ],
      colors: ['Trắng', 'Đen', 'Xám', 'Xanh'],
      sections: {
        overview: { title: 'SUV điện 7 chỗ cao cấp', text: 'BYD Sealion 8 hướng đến gia đình cần không gian lớn, hiệu năng mạnh và trải nghiệm thuần điện.', image: 'assets/images/byd-sealion8-official.webp' },
        exterior: { title: 'Dáng SUV hiện đại và mạnh mẽ', text: 'Gầm cao, tỷ lệ cân đối và cụm đèn LED lấy cảm hứng đại dương tạo hình ảnh vững chãi.', image: 'assets/images/byd-sealion8-official.webp' },
        interior: { title: 'Không gian rộng rãi cho ba hàng ghế', text: 'Khoang nội thất tối giản, màn hình trung tâm lớn và các ghế công thái học phục vụ hành trình dài.', image: 'assets/images/showroom-hero.webp' },
        performance: { title: 'Hệ truyền động điện hiệu suất cao', text: 'Cấu hình động cơ điện và dẫn động tùy phiên bản mang lại khả năng tăng tốc nhanh và xử lý linh hoạt.', image: 'assets/images/byd-sealion8-official.webp' },
        safety: { title: 'Nền tảng điện và quản lý nhiệt tiên tiến', text: 'Hệ thống truyền động điện tích hợp, bơm nhiệt và các công nghệ hỗ trợ lái nâng cao hiệu quả và an toàn.', image: 'assets/images/showroom-launch.webp' }
      }
    }
  ],
  technology: [
    { title: 'Blade Battery', eyebrow: 'An toàn pin', description: 'Cấu trúc pin dạng lưỡi dài giúp tối ưu không gian, quản lý nhiệt và độ vững chắc của bộ pin.', metric: 'Công nghệ lõi BYD' },
    { title: 'e-Platform 3.0', eyebrow: 'Nền tảng thuần điện', description: 'Tích hợp hệ truyền động, pin, quản lý nhiệt và điện tử trên một kiến trúc chuyên dụng cho xe điện.', metric: 'Thông minh · Hiệu quả · An toàn' },
    { title: 'DM-i Super Hybrid', eyebrow: 'Hybrid thiên về điện', description: 'Ưu tiên mô-tơ điện trong nhiều tình huống để tạo cảm giác vận hành êm, mượt và hiệu quả.', metric: 'Linh hoạt hành trình' },
    { title: 'Hỗ trợ lái', eyebrow: 'An toàn chủ động', description: 'Camera, radar, cảm biến và các thuật toán hỗ trợ người lái tùy theo mẫu xe và phiên bản.', metric: 'Cấu hình theo phiên bản' }
  ],
  services: [
    { title: 'Tư vấn chuyên nghiệp', description: 'Tư vấn nhu cầu, phiên bản và giải pháp sở hữu phù hợp.' },
    { title: 'Giá ưu đãi, giao xe nhanh', description: 'Thông tin rõ ràng, tiến độ giao xe được cập nhật minh bạch.' },
    { title: 'Khuyến mãi hấp dẫn', description: 'Chương trình ưu đãi được xác nhận tại thời điểm đăng ký.' },
    { title: 'Lái thử thuận tiện', description: 'Đặt lịch tại showroom hoặc trao đổi phương án trải nghiệm phù hợp.' },
    { title: 'Bảo hành, bảo dưỡng', description: 'Dịch vụ hậu mãi và phụ tùng theo tiêu chuẩn đại lý chính hãng.' },
    { title: 'Hỗ trợ ngân hàng', description: 'Ước tính khoản vay và kết nối hồ sơ với đối tác tài chính.' }
  ],
  news: [
    { slug: 'khai-truong-showroom-4s', title: 'Khai trương Showroom BYD Thành Công Cà Mau 4S', date: '2026-03-28', image: 'assets/images/showroom-launch.webp', excerpt: 'Dấu mốc đưa không gian trải nghiệm xe năng lượng mới và dịch vụ hậu mãi 4S đến gần hơn với khách hàng Cà Mau.', url: 'news.html?slug=khai-truong-showroom-4s', category: 'Sự kiện đại lý', content: ['Ngày 27/03/2026, Showroom BYD Thành Công Cà Mau 4S chính thức đi vào hoạt động tại đường Lý Thường Kiệt, phường Tân Thành, Cà Mau.','Không gian được tổ chức theo mô hình 4S, kết nối hoạt động bán hàng, dịch vụ, phụ tùng chính hãng và tiếp nhận ý kiến khách hàng trong cùng một hành trình trải nghiệm.','Khách hàng có thể tham quan sản phẩm, trao đổi phương án tài chính, đăng ký lái thử và đặt lịch dịch vụ tại đại lý.'] },
    { slug: 'ban-giao-xe-byd-atto-2', title: 'Lễ bàn giao xe BYD ATTO 2 tại Cà Mau', date: '2025-12-29', image: 'assets/images/showroom-hero.webp', excerpt: 'Khoảnh khắc bàn giao BYD ATTO 2 và lời cảm ơn khách hàng đã tin chọn giải pháp di chuyển năng lượng mới.', url: 'news.html?slug=ban-giao-xe-byd-atto-2', category: 'Bàn giao xe', content: ['BYD Thành Công Cà Mau chúc mừng khách hàng hoàn tất thủ tục và nhận bàn giao BYD ATTO 2.','Trước khi giao xe, đội ngũ đại lý hướng dẫn các thao tác cơ bản, lưu ý sử dụng, thông tin bảo hành và lịch chăm sóc xe.','Mỗi buổi bàn giao là điểm bắt đầu của quá trình đồng hành sau bán hàng giữa khách hàng và đại lý.'] },
    { slug: 'trai-nghiem-thuc-te-byd', title: 'Một chuyến đi ngắn, một góc nhìn mới về BYD', date: '2025-12-15', image: 'assets/images/test-drive-experience.webp', excerpt: 'Trải nghiệm thực tế giúp người lái cảm nhận độ êm, khả năng phản hồi và sự khác biệt của hệ truyền động điện.', url: 'news.html?slug=trai-nghiem-thuc-te-byd', category: 'Trải nghiệm', content: ['Một chuyến lái thử ngắn có thể giúp khách hàng đánh giá trực tiếp độ êm, khả năng tăng tốc, tầm quan sát và cách bố trí các chức năng trên xe.','Thay vì chỉ xem thông số, người lái nên thử các tình huống sử dụng quen thuộc để xác định mẫu xe và phiên bản phù hợp.','Lịch lái thử được sắp xếp theo tình trạng xe thực tế tại showroom.'] }
  ],
  faqs: [
    { question: 'Làm sao nhận báo giá xe BYD tại Cà Mau?', answer: 'Chọn dòng xe, điền họ tên và số điện thoại 10 chữ số trong form nhận báo giá. Đội ngũ tư vấn sẽ xác nhận giá và chương trình áp dụng tại thời điểm liên hệ.' },
    { question: 'Website có tính giá lăn bánh không?', answer: 'Có. Công cụ cho phép nhập giá xe, lệ phí trước bạ, phí biển số, bảo hiểm và các khoản dự kiến. Kết quả chỉ mang tính tham khảo.' },
    { question: 'Có thể ước tính trả góp trên website không?', answer: 'Có. Nhập giá xe, tỷ lệ trả trước, thời hạn vay và lãi suất dự kiến để xem khoản thanh toán hàng tháng theo phương pháp dư nợ giảm dần.' },
    { question: 'Showroom BYD Thành Công Cà Mau ở đâu?', answer: 'Showroom 4S hiện hoạt động tại Số 109, Đường Lý Thường Kiệt, Phường Tân Thành, Cà Mau. Khách hàng nên gọi hotline trước khi đến để được sắp xếp tư vấn hoặc lái thử.' }
  ]
});

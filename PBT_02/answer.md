Câu A1: 10 loại input type
+type="text" - Là ô nhập text - Thường dùng để nhập các thông tin cá nhân hoặc làm search bar
+type="number" - Là ô nhập số, thường có mũi tên tăng giảm, có min, max - Dùng để nhập vào giá trị, số lượng
+type="date" - Ô nhập hiển thị bảng chọn ngày, tháng, năm, kiểm tra định dạng ngày - Dùng để chọn thời gian, ngày sinh 
+type="tel" - Là ô nhập số điện thoại - Dùng để nhập số điện thoại
+type="button" - Là nút, thường phải dựa vào các thẻ khác nhưng có thể tùy biến - Dùng để tạo các nút như Delete, Add,...
+type="email" - Là ô nhập email, phải có @ trong ô nhập - Dùng để nhập vào email 
+type="radio" - Là các radio button, chỉ có thể chọn 1 trong các radio button thuộc nhóm đó - Dùng cho các nội dung như giới tính
+type="checkbox" - Là ô vuông nhỏ có thể tích hoặc bỏ chọn - Thường dùng trong các danh mục
+type="password" - Là ô nhập password, những kí tự được nhập vào sẽ được tự động che đi - Dùng để nhập mật khẩu
+type="image" - Là nút bấm dưới dạng hình ảnh, đồ họa - Có thể dùng như button nhưng bắt mắt hơn

Câu A2:
+TH1: Sẽ hiển thị thông báo ko được để trống.
+TH2: Sẽ hiển thị thông báo ko có @.
+TH3: Sẽ hiển thị thông báo vượt quá giới hạn được đặt ra.
+TH4: Sẽ hiển thị thông báo sai định dạng được đặt ra.
+TH5: Sẽ hiển thị thông báo mật khẩu quá ngắn.

Câu A3:
+<label="email"> quan trọng đối với screen reader vì người dùng khiếm thị muốn nhập, screen reader sẽ đọc tên label là "Email", giúp cho người khiếm thị có thể biết nhập vào ô đó là email.
+Nên dùng <fieldset> và <legend> khi dùng cho một nhóm input liên quan đến nhau, ví dụ như là nhập thông tin cá nhân thì đặt <lgend>Giới tính</lgend>
+Aria-label nên dùng khi input đấy dùng icon, khi có label rồi ko nên dùng aria-label vì nó sẽ bị ghi đè lên, mất label và chỉ còn aria label, screen reader sẽ không thể đọc được.

Câu A4:
+Thuộc tính loading="lazy" trong thẻ img sẽ cải thiện tốc độ load của website bằng cách ẩn những image này đi, chỉ khi người dùng kéo tới thì ảnh sẽ load. Không nên dùng loading="lazy" khi website không có nhiều thẻ, nội dung
+Nên có nhiều source trong video vì ko như img, các format video nhau có thể sẽ không load được trên trang web, vì vậy cần các source khác để thay thế. Phổ biến nhất là MP4,WebM,OGG.
+alt trong <img> dùng để khi ảnh không load được, nội dung của ảnh vẫn sẽ được hiển thị dưới dạng khác, screen rreader cũng có thể đọc được. 
    <img src="iphone16.png" alt="iPhone 16 Pro max">
    <img src="image.png" alt="Ảnh trang trí">
    <img src="doanhthu.png" alt="Biểu đồ doanh thu Q1/2026">

Câu A5:
+Cách 1 chỉ nên dùng khi cần hiện image ra nhưng ko cần các thông tin, nội dung của ảnh. Cách 2 dùng khi cần hiện các thông tin, nội dung, chi tiết về image.
+Cách 1 có thể dùng để trưng bày thumbnail, như các icon hay là ảnh cá nhân.
+Cách 2 có thể dùng như cách trưng bày sản phẩm trên các sàn bán hàng online.

Câu C1:
+Lỗi 1: dòng 2 — input Tên thiếu <label>
Sửa: <label for="ten">Tên:</label> <input type="text" id="ten" name="ten" required placeholder="Hoàng Ngọc Tú>

+Lỗi 2: dòng 4 — input Email không có <label> hiển thị
Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" required placeholder="hoangngoctu@gmail.com">

+Lỗi 3: dòng 6 và 7 — hai input Password thiếu pattern và minlength
Sửa: <input type="password" id="mk" name="mk" minlength="8" required placeholder="Mật khẩu">

+Lỗi 4: dòng 9 — input phone dùng type="text" thay vì type="tel"
Sửa: <label for="sdt">Phone:</label> <input type="tel" id="sdt" name="sdt" pattern="[0-9]{10}" placeholder="0878866206">

+Lỗi 5: dòng 11 — <select> thiếu nhãn mô tả và không có name để gửi dữ liệu.
Sửa: <label for="tinh">Thành phố:</label> <select id="tinh" name="tinh">...</select>

+Lỗi 6: dòng 12 và 13 — các  <option> thiếu thuộc tính value
Sửa: <option value="hn">Hà Nội</option> <option value="hcm">TP.HCM</option>

+Lỗi 7: dòng 16 — không có inpu type="checkbox" cho label điều khoản.
Sửa: <input type="checkbox" id="term" name="term" required> <label for="term">Tôi đồng ý điều khoản</label>

+Lỗi 8: cả Form — thiếu action và method để xác định nơi và cách thức gửi dữ liệu.
Sửa: <form action="#" method="POST">

Câu C2:
+Pattern cho CMND/CCCD và stk: 
    -CMND/CCCD: pattern="[0-9]{12}"
    -Số tài khoản: pattern="[0-9]{10,15}"
+HTML5 validation ko đủ an toàn cho các ứng dụng ngân hàng, tại vì người dùng có thể dễ dàng truy cập vào DevTool và xóa các thuộc tính như required,...
+3 loại: So sánh dữ liệu giữa các trường, Logic nghiệp vụ, Kiểm tra tính duy nhất.
+2 rủi bo bảo mật: 
    -Dữ liệu rác và mã độc: Phải thông qua backend để kiểm tra thông tin, dữ liệu trước khi được đưa vào database.
    -Dữ liệu không toàn vẹn: Backend có thể nhận sai các định dạng của input

A)
Câu A1: Tham chiếu từ 01_instruction_html_universe từ file Git
    a. Vào link shopee.vn
    1.Khi vào link shoppe.vn và nhấn Enter -> Yêu cầu được nhận từ laptop -> Đi qua router wifi trọ
    2.Thông qua nhà mạng FPT -> Chạy xuyên cáp quang qua biển
    3.Đến headquater của Shopee tại Singapore -> Lấy data từ trong Google Cloud
    4.Server xử lý yêu cầu muốn load website -> Response chạy ngược về lại
    5.Edge nhận file HTML,CSS,JS -> Render ra giao diện -> Các sản phẩm hiện lên.

    b.Thông tin network cho thấy thông tin về trạng thái, thời gian load các request, kích cỡ.

Câu A2: 
a. Lỗi Sematic:
+ Tại <div class="header">, có thể dùng là <header></header>.
+ Dùng <div class="menu"> <div> thay vì dùng ul hoặc ol.
+ Dùng tittle cho sản phẩm Iphone 16 PRO thay vì là heading.
+ Sai tại <div class = footer>, có thể dùng là <footer></footer> . 

b. Google đánh giá SEO thấp do:
+ Không có <h1></h1>.
+ Thiếu alt tại img, ko load được ảnh.

Câu A3:
Hộp1
Text A Text B
Hộp 2
Text C Text D(bold, và quan trọngk)
Hộp 3

Câu A4:
+<thead> là đầu bảng, gồm các tên cột và tiêu đề bảng.
+<tbody> là thân của bảng, gồm nội dung chính của bảng.
+<tfoot> là chân bảng, thường là để các chú ý nhỏ.

+Không nên dùng table để tạo layout cho trang web vì các lí do sau:
    -Tính linh hoạt kém: table rất khó để stretch được màn hình điện thoại.
    -Tốc độ tải trang web: Table quá lớn thì sẽ mất rất nhiều thời gian.
    -Khó chỉnh sửa và rối: Nếu có quá nhiều sản phẩm thì sẽ phải dùng rất nhiều tr và th lồng nhau.
B)

Câu B3:
Lỗi 1: Dòng 1 - !DOCTYPE thiếu html - <!DOCTYPE html>
Lỗi 2: Dòng 2 - <html> thiếu lang - <html lang = "vi">
Lỗi 3: Dòng 4 - <tittle> ko có kết thúc - thêm </title>
Lỗi 4: Dòng 5 - utf8 thiếu gạch ngang - <meta charset = "utf-8">
Lỗi 5: Dòng 8 - <h1>Welcome to ShopTLU<h1>, kết thúc thiếu / - đổi thành </h1> tại cuối
Lỗi 6: Dòng 8 - <h1>Welcome to ShopTLU<h1> nên nằm ở trong <header> - Chuyển <h1>Welcome to ShopTLU<h1> vào <header></header>
Lỗi 7: Dòng 11 -  <a href="home">Trang chủ <a>, kết thúc thiếu / - đổi thành </a>
Lỗi 8: Dòng 19 - img src phải có alt - đổi thành <img src ="" alt ="">
Lỗi 9: Dòng 21 -  <p>Giá: <b>25.990.000đ</p></b>, sai thứ tự - sưa thành <p><b><b><p>
Lỗi 10: Dòng 44 - <p>Copyright 2026 - thiếu kết thúc </p>
Lỗi 11: 39-41 - Thẻ <main>, chỉ có thể tồn tại 1 thẻ main - Xóa thẻ <main> thứ 2

Câu B4:
1.
+Section, là thẻ <section></section> bao gồm các nội dung chính.
+Nav, là thẻ <nav></nav>, dùng để điều hướng người dùng sang trang họ cần.
+Semantic Footer, là thẻ <footer></footer>, nằm tại chân trang gồm các nội dung bên lề, thông tin cá nhân, bản quyền của Shopee.
2.
+Table này thể hiện các sản phầm trong shopee
+Shopee không dùng <thead> <tbody>
3.
+Form action là search, method mặc định là GET
+Input types được sử dụng <div class="shopee-searchbar__main"> là ô input tìm kiếm

C)
Câu C1:
<!DOCTYPE html>
<html lang="vi">
<html>
    <head>
    <meta charset = "utf-8"> <!--Cài đặt chữ tiếng việt-->
    <meta name = "viewreport" content = "width = device-width,initial scale = 1.0"> <!--Load lên điện thoại thì fit màn hình-->
    </head>
    <body>
    <nav aria-label="breadcrumb"> <!-- nav vì đây là điều hướng -->
    <ol> <!-- ol vì breadcrumb có thứ tự -->
        <li><a href="/Trang chủ"></a></li>
        <li><a href="#dien-thoai"></a></li>
        <li>Iphone 16PRO</li>
    </ol>
    </nav>
    <section id = "dien-thoai"><!-- section vì đây là mục sản phẩm điện thoại -->
            </figure><!-- Minh họa cho sản phẩm này -->
             <img src = "https://placehold.co/600x400" width="300" height="200"  alt="Iphone 16 Pro">
             <figcaption>Iphone 16 PRO</figcaption><!-- Chú thích cho khối minh họa này -->
            </figure> 
            </figure>
             <img src = "https://placehold.co/600x400" width="300" height="200"  alt="Airpod 3">
             <figcaption>Airpod 3</figcaption>
            </figure> 
            </figure>
             <img src = "https://placehold.co/600x400" width="300" height="200"  alt="Macbook">
             <figcaption>Macbook</figcaption>
            </figure> 
            </figure>
             <img src = "https://placehold.co/600x400" width="300" height="200"  alt="Apple watch">
             <figcaption>Apple watch</figcaption>
            </figure> 
            </figure>
             <img src = "https://placehold.co/600x400" width="300" height="200"  alt="Mac Mini">
             <figcaption>Mac Mini</figcaption>
            </figure> 
        </article>
    </section>
    <table>
        <thead>
        <tr>
            <th>Tên sản phẩm</th>
            <th>Mô tả</th>
            <th>Đánh giá</th>
            <th>Gía</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th>Mac Mini</th>
            <th>Mô tả</th>
            <th>Đánh giá</th>
            <th>Gía</th>
        <tr>
        </tbody>
        </table>
    <section id ="danh-gia-san-pham">
        <h3>Đánh giá và bình luận về sản phẩm</h3>
        <article><!-- article để bọc nội dung riêng của khối này -->
            <p>Đánh giá sản phẩm</p>
        </article>
    </section>
    <footer>
        <p>2026 TLU</p>
        <ul>
        <li><a href="#">Liên hệ</a></li>
        <li><a href="#">Chinh sách</a></li>
        </ul>
    </footer>
</body>
</html>

Câu C2:
Quan điểm "chỉ cần dùng <div> rồi thêm class là đủ" nghe có vẻ ổn, nhưng nó rất nghiệp đư. Website không chỉ để con người nhìn bằng mắt, mà còn để trình duyệt và các công cụ tìm kiếm thứ cần tìm.

Hai lý do kỹ thuật chính:
Đầu tiên là SEO. Google không thể hiểu một khối code nếu bạn không định danh nó. Một tiêu đề nằm trong <h1> luôn có sự chú ý lớn hơn div class="title". Nếu lạm dụng <div>, bạn đang tự tay dìm website của mình. Thứ hai là khả năng truy cập cho mọi người. Những người khiếm thị dùng phần mềm đọc màn hình sẽ không theer làm gì nếu gặp một trang web toàn thẻ div. Các thẻ như <nav>, <main>, hay <button> là những thứ giúp họ định vị trang web.

Ví dụ: Khi dùng cặp thẻ <figure> và <figcaption> cho ảnh iPhone 16, điều này đang tạo ra một mối liên kết chặt chẽ. Trình duyệt biết rõ đâu là ảnh, đâu là chú thích. Nếu dùng <div>, mối liên kết này biến mất, ảnh sẽ khó hiện lên khi khách hàng tìm kiếm trên Google Images.

Trường hợp dùng <div> vẫn phù hợp:
Tất nhiên, <div> vẫn có thể dùng. Nhưng nó hoàn hảo cho mục đích thuần trang trí. Khi ta cần một cái khung để căn giữa nội dung (wrapper), tạo hiệu ứng đổ bóng hoặc làm nền màu mè mà không mang ý nghĩa thông tin, hãy dùng <div>.

Tóm lại, dùng Semantic HTML là biểu hiện của một lập trình viên có tư duy hệ thống và tôn trọng người dùng. 


 





Câu A1:
Position	Vẫn chiếm chỗ trong flow?	Tham chiếu vị trí	                Cuộn theo trang?	Use case
static	    Có                          Theo flow tự nhiên của tài liệu     Có                 Gía trị default, đưa phần tử vềdefault 
relative	Có                          Vị trí chính nó ban đầu             Có                  Dùng làm gốc tọa độ cho absolute
absolute	Không                       Tổ tiên gần nhất là relative        Có                  Làm popup, tooltip, thanh menu           
fixed	    Không                       Viewport                            Không               Navbar
sticky	    Có                          Mix giữa relative và fixed          Có                  Table header, sidebar


Câu A2:
TH1: [ Item 1 (25%) ] [ Item 2 (25%) ] [ Item 3 (25%) ] [ Item 4 (25%) ] |

TH2: 
      ----------------  (margin)  ----------------  (margin)   
      [    Item 1    ]   5% tổng  [    Item 2    ]   5% tổng   
      ----------------            ----------------             
      ----------------            ----------------           
      [    Item 3    ]            [    Item 4    ]             
      ----------------            ----------------             
      ----------------            ----------------             
      [    Item 5    ]            [    Item 6    ]             
      ----------------            ----------------      

TH3:


 -------------            -------------            ------- 
 [  Item 1   ]            [  Item 2   ]            [Item3]  (Căn giữa dọc)
 -------------            -------------            ------- 

^                          ^                        ^
Sát lề trái             Chính giữa               Sát lề phải


TH 4:

| [Item 1] | gap |          [ Item 2 ]          | gap |[Item 3]|
|  200px   |20px |     Rộng hết phần còn lại    |20px | 200px  |
|          |     |            (1fr)             |     |        |


TH5:

| [  Item 1 (1fr)  ]  gap  [  Item 2 (1fr)  ]  gap  [  Item 3 (1fr)  ] |
|        gap                 gap                 gap        |
| [  Item 4 (1fr)  ]  gap  [  Item 5 (1fr)  ]  gap  [  Item 6 (1fr)  ] |
|        gap                 gap                 gap        |
| [  Item 7 (1fr)  ]  gap  (Trống)              gap  (Trống)         |


Câu C1:
1. Thanh điều hướng (Navbar) nằm ngang
→ Dùng: Flexbox
      +Navbar thường là bố cục một chiều (chỉ theo hàng ngang).
      +Flexbox rất phù hợp vì có thể dễ dàng căn chỉnh các phần tử theo chiều ngang và dọc.

2. Lưới hiển thị ảnh kiểu Instagram
→ Dùng: Grid
      +Đây là bố cục hai chiều với nhiều hàng và nhiều cột.
      +Grid cho phép chia cột đều nhau và kiểm soát tốt hơn so với Flexbox.


3. Layout Blog (Nội dung chính + Sidebar)
→ Dùng: Grid
      +Đây là bố cục hai chiều rõ ràng.
      +Grid giúp dễ dàng thiết lập sidebar có chiều rộng cố định và phần nội dung co giãn linh hoạt.

4. Footer có 4 cột thông tin
→ Dùng: Grid
      +Footer cần chia đều thành nhiều cột.
      +Grid hỗ trợ responsive tốt hơn khi thay đổi số cột trên thiết bị di động.

5. Card sản phẩm
→ Dùng: Flexbox
      +Bên trong card thường là bố cục dọc (hình ảnh, tiêu đề, mô tả, nút).
      +Dùng flex-direction: column kết hợp margin-top: auto để nút luôn nằm ở dưới cùng.

Câu C2:
Lỗi 1: Các card không có chiều cao bằng nhau
+Do mỗi card có nội dung khác nhau về độ dài nên chiều cao bị lệch. Nút không được đẩy xuống đáy.

Cách sửa:

      CSS.card-list {
            display: flex;
            flex-wrap: wrap;
            }

      .card {
            flex: 1 1 30%;
            margin: 15px;
            display: flex;
            flex-direction: column;
            }

      .card .btn-buy {
            margin-top: auto;
            }

Kết quả: Các card đồng đều chiều cao, nút "Mua ngay" luôn nằm ở vị trí dưới cùng.

Lỗi 2: Phần tử không nằm giữa màn hình
+Do chưa khai báo cách căn giữa theo cả hai chiều cho container Flexbox.

Cách sửa:

      CSS.hero-section {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            }

      .hero-content {
            text-align: center;
            }

Kết quả: Nội dung được căn giữa hoàn hảo cả theo chiều ngang và chiều dọc.

Lỗi 3: Sidebar bị thu hẹp khi nội dung chính quá dài
+Do thuộc tính flex-shrink mặc định là 1, nên Flexbox tự động co các item lại.

Cách sửa:

      CSS.main-layout {
            display: flex;
            }

      .sidebar {
            width: 250px;
            flex-shrink: 0;   /* Ngăn không cho co lại */
            }

      .main-content {
            flex: 1;   /* Co giãn chiếm hết phần còn lại */
            }

Kết quả: Sidebar giữ nguyên kích thước 250px, không bị ép nhỏ khi nội dung chính dài.
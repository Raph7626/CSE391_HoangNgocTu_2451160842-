Câu A1:

Mobile:
    Box 1
    Box 2
    Box 3
    Box 4

Tablet:
    Box 1    Box 2
    Box 3    Box 4

Desktop:
    Box 1    Box 2    Box 3    Box 4

col-md-6 là từ kích thước màn hình trung bình (medium ≥ 768px) trở lên, mỗi Box sẽ chiếm 6 cột trong hàng 12 cột. (viết tắt của column-medium-6)

Ko cần ghi col-sm-12 vì trong Bootstrap Grid nếu không ghi class col thì mặc định là col-12 sẽ chiếm toàn bộ chiều rộng và col-12 là class mặc định cho mobile 

Câu A2:

1. Giải thích class d-none d-md-block
    d-none: Ẩn hoàn toàn element (display: none).
    d-md-block: Từ kích thước medium (≥ 768px) trở lên thì hiển thị (display: block).

    Kết luận:
    Element này sẽ ẩn trên mobile (< 768px) và hiển thị từ Tablet trở lên.
    Đây là kỹ thuật rất hay để ẩn bớt một số thành phần không cần thiết trên mobile.

2. 5 space utilities phổ biến
    + mt-3 là margin-top-3
    + mb-4 là margin-bottom-4
    + mx-auto là margin-left-right-auto (có thể nghĩ x là trục hoành) 
    + px-4  là padding-left-right-4
    + py-2  là padding-top-bottom-2 (y  là trục tung)

3. 
+container có chiều rộng cố định, có padding 2 bên, tự căn giữa, responsive theo breakpoint. Dùng phổ biến nhất cho nội dung chính.

+container-fluid có chiều rộng 100% toàn màn hình, chỉ có padding nhỏ 2 bên. Làm full-width section (hero, banner)

+container-md thì dưới md (< 768px) chiếm 100% width còn từ md (≥ 768px) trở lên thì có chiều rộng cố định. Dùng khi muốn full width trên mobile, nhưng giới hạn chiều rộng trên tablet/desktop.
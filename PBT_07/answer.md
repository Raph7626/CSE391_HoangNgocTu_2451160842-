Câu A1:   
Phần 1: 
    Đoạn 1:
    JavaScriptconsole.log(x);
    var x = 5;
   
    Dự đoán: undefined

Đoạn 2:
    JavaScriptconsole.log(y);
    let y = 10;
    
    Dự đoán: Lỗi (ReferenceError)

Đoạn 3:
    JavaScriptconst z = 15;
    z = 20;
    console.log(z);
    
    Dự đoán: Lỗi (TypeError)

Đoạn 4:
    JavaScriptconst arr = [1, 2, 3];
    arr.push(4);
    console.log(arr);
    
    Dự đoán: [1, 2, 3, 4]

Đoạn 5:
    JavaScriptlet a = 1;
    {
        let a = 2;
        console.log("Trong block:", a);
    }
    console.log("Ngoài block:", a);
   
    Dự đoán:
    textTrong block: 2
    Ngoài block: 1


Kết quả thực tế và dự đoán:
+Đoạn 1: Cho ra kết quả là undefined, var được hoisting (kéo lên đầu), nhưng chỉ khai báo, chưa gán giá trị.
+Đoạn 2: kết quả là ReferenceError, let có Temporal Dead Zone (vùng chết tạm thời). Không được truy cập trước khi khai báo.
+Đoạn 3: kết quả là TypeError: Assignment to constant variable, const không cho phép gán lại giá trị.
+Đoạn 4: kết quả là [1, 2, 3, 4], const chỉ khóa việc gán lại biến, không khóa việc thay đổi nội dung của array/object.
+Đoạn 5: Kết quả là Trong block: 2 và ngoài block:1, let có block scope (phạm vi khối {}). Biến a trong block là biến riêng.

cÂU A2:
Dự đoán 
    console.log(typeof null);              // "object"
    console.log(typeof undefined);         // "undefined"
    console.log(typeof NaN);               // "number"
    console.log("5" + 3);                  // "53"
    console.log("5" - 3);                  // 2
    console.log("5" * "3");                // 15
    console.log(true + true);              // 2
    console.log([] + []);                  // ""
    console.log([] + {});                  // "[object Object]"
    console.log({} + []);                  // 0

Câu A3:
    console.log(5 == "5");           // true
    console.log(5 === "5");          // false
    console.log(null == undefined);  // true
    console.log(null === undefined); // false
    console.log(NaN == NaN);         // false
    console.log(0 == false);         // true
    console.log(0 === false);        // false
    console.log("" == false);        // true

Câu A4:
    Các giá trị Falsy trong JavaScript:

    +false
    +0 
    +"" (chuỗi rỗng)
    +null
    +undefined
    +NaN

    Dự đoán kết quaqr:
    if ("0") console.log("A");           // In A          (Truthy)
    if ("") console.log("B");            // Không in      (Falsy)
    if ([]) console.log("C");            // In C          (Truthy)
    if ({}) console.log("D");            // In D          (Truthy)
    if (null) console.log("E");          // Không in      (Falsy)
    if (0) console.log("F");             // Không in      (Falsy)
    if (-1) console.log("G");            // In G          (Truthy)
    if (" ") console.log("H");           // In H          (Truthy)

Câu A5:
    +Cách 1:
    var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

    +Cách 2:
    var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

    +Cách 3:
    var html = `<div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
        <span>Giá: ${price}đ</span>
    </div>`;

Câu C1: 
    +Lỗi 1: ko kiểm tra xem giaBan có phải là type number ko, ta phải thêm hàm if để check
    +Lỗi 2: Kiểm tra phanTramGiam hợp lệ sử dụng if kiểm tra xem phanTramGiam lớn hơn 0 và bé hơn 100
    +Lỗi 3: Dùng = thay vì == trong if (giaSauGiam = 0)
    +Lỗi 4: Vòng lặp var + setTimeout (Closure issue)
        for (let i = 0; i < 5; i++) {          // Sửa: var → let
            setTimeout(function() {
                console.log("Item " + i);
            }, 1000);
    }

Câu C2: 
    function tinhHoaDon(danhSach, ngayThu) {
    let tong = 0;
    let hoaDonChiTiet = [];

    // Tính tổng tiền
    danhSach.forEach((item, index) => {
        const thanhTien = item.gia * item.soLuong;
        tong += thanhTien;
        hoaDonChiTiet.push({
            stt: index + 1,
            ten: item.ten,
            soLuong: item.soLuong,
            gia: item.gia,
            thanhTien: thanhTien
        });
    });

    // Tính giảm giá
    let giamGiaPhanTram = 0;
    if (tong > 1000000) giamGiaPhanTram = 15;
    else if (tong > 500000) giamGiaPhanTram = 10;

    // Giảm thêm 5% thứ 4 (Wednesday)
    if (ngayThu === 3) giamGiaPhanTram += 5;

    const tienGiam = tong * giamGiaPhanTram / 100;
    const sauGiam = tong - tienGiam;
    const vat = sauGiam * 0.08;
    const tip = sauGiam * 0.05;
    const thanhToan = sauGiam + vat + tip;

    // In hóa đơn
    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG           ║");
    console.log("╠══════════════════════════════════════╣");
    
    hoaDonChiTiet.forEach(item => {
        console.log(`║ ${item.stt}. ${item.ten.padEnd(12)} x${item.soLuong}   @${item.gia}k  = ${item.thanhTien}k ║`);
    });

    console.log("╠══════════════════════════════════════╣");
    console.log(`║ Tổng cộng:          ${tong.toLocaleString('vi-VN')}đ     ║`);
    console.log(`║ Giảm giá (${giamGiaPhanTram}%):     ${tienGiam.toLocaleString('vi-VN')}đ     ║`);
    console.log(`║ VAT (8%):            ${vat.toLocaleString('vi-VN')}đ     ║`);
    console.log(`║ Tip (5%):            ${tip.toLocaleString('vi-VN')}đ     ║`);
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:         ${Math.round(thanhToan).toLocaleString('vi-VN')}đ    ║`);
    console.log("╚══════════════════════════════════════╝");
}

// ====================== TEST ======================
const danhSach = [
    { ten: "Phở bò", gia: 65000, soLuong: 2 },
    { ten: "Trà đá", gia: 5000, soLuong: 3 },
    { ten: "Bún chả", gia: 55000, soLuong: 1 }
];

tinhHoaDon(danhSach, 3); // 3 = Thứ Tư
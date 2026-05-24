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
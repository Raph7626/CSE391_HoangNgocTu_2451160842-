const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// 1. Tính điểm TB và xếp loại
students.forEach(student => {
    student.avg = (student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3).toFixed(1);
    
    if (student.avg >= 8.0) student.rank = "Giỏi";
    else if (student.avg >= 6.5) student.rank = "Khá";
    else if (student.avg >= 5.0) student.rank = "Trung bình";
    else student.rank = "Yếu";
});

// 2. In bảng kết quả
console.log("\n===== BẢNG KẾT QUẢ =====\n");
console.log("STT | Tên     | TB   | Xếp loại");
console.log("----|---------|------|----------");

students.forEach((s, i) => {
    console.log(`${String(i+1).padEnd(3)} | ${s.name.padEnd(7)} | ${s.avg.padEnd(4)} | ${s.rank}`);
});

// 3. Đếm số sinh viên theo xếp loại
const count = { "Giỏi": 0, "Khá": 0, "Trung bình": 0, "Yếu": 0 };
students.forEach(s => count[s.rank]++);

console.log("\n===== THỐNG KÊ XẾP LOẠI =====");
for (let rank in count) {
    console.log(`${rank.padEnd(10)}: ${count[rank]} sinh viên`);
}

// 4. Sinh viên có điểm TB cao nhất & thấp nhất
let maxStudent = students[0];
let minStudent = students[0];

students.forEach(s => {
    if (parseFloat(s.avg) > parseFloat(maxStudent.avg)) maxStudent = s;
    if (parseFloat(s.avg) < parseFloat(minStudent.avg)) minStudent = s;
});

console.log("\n===== ĐIỂM CAO NHẤT & THẤP NHẤT =====");
console.log(`Điểm cao nhất : ${maxStudent.name} (${maxStudent.avg})`);
console.log(`Điểm thấp nhất: ${minStudent.name} (${minStudent.avg})`);

// 5. Điểm TB toàn lớp theo từng môn
let totalMath = 0, totalPhysics = 0, totalCS = 0;

students.forEach(s => {
    totalMath += s.math;
    totalPhysics += s.physics;
    totalCS += s.cs;
});

console.log("\n===== ĐIỂM TRUNG BÌNH TOÀN LỚP =====");
console.log(`Toán     : ${(totalMath / students.length).toFixed(1)}`);
console.log(`Lý       : ${(totalPhysics / students.length).toFixed(1)}`);
console.log(`Tin      : ${(totalCS / students.length).toFixed(1)}`);

// 6. Bonus: Điểm TB theo giới tính
let male = students.filter(s => s.gender === "M");
let female = students.filter(s => s.gender === "F");

const avgMale = male.reduce((sum, s) => sum + parseFloat(s.avg), 0) / male.length;
const avgFemale = female.reduce((sum, s) => sum + parseFloat(s.avg), 0) / female.length;

console.log("\n===== ĐIỂM TB THEO GIỚI TÍNH =====");
console.log(`Nam   : ${avgMale.toFixed(1)}`);
console.log(`Nữ    : ${avgFemale.toFixed(1)}`);
console.log("=== Đoạn 1 ===");
console.log(x);
var x = 5;

console.log("\n=== Đoạn 2 ===");
try {
    console.log(y);
} catch (e) {
    console.log("Lỗi:", e.message);
}
let y = 10;

console.log("\n=== Đoạn 3 ===");
try {
    const z = 15;
    z = 20;
    console.log(z);
} catch (e) {
    console.log("Lỗi:", e.message);
}

console.log("\n=== Đoạn 4 ===");
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

console.log("\n=== Đoạn 5 ===");
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
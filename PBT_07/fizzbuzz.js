// ==================== VERSION 1: CLASSIC FIZZBUZZ ====================
console.log("=== CLASSIC FIZZBUZZ (1-100) ===");

for (let i = 1; i <= 100; i++) {
    let result = "";
    
    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    
    console.log(result || i);
}

// ==================== VERSION 2: CUSTOM FIZZBUZZ ====================
function customFizzBuzz(n, rules) {
    const output = [];
    
    for (let i = 1; i <= n; i++) {
        let result = "";
        
        for (let rule of rules) {
            if (i % rule.divisor === 0) {
                result += rule.word;
            }
        }
        
        output.push(result || i);
    }
    
    return output;
}

// ====================== TEST ======================
console.log("\n=== CUSTOM FIZZBUZZ TEST ===");

const rules = [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
];

const result = customFizzBuzz(30, rules);

// In kết quả từ 1 đến 30
result.forEach((item, index) => {
    console.log(`${index + 1} → ${item}`);
});

// Test thêm một số trường hợp đặc biệt
console.log("\n=== Một số test đặc biệt ===");
console.log("15  →", customFizzBuzz(15, rules)[14]);   // FizzBuzz
console.log("21  →", customFizzBuzz(21, rules)[20]);   // FizzJazz
console.log("35  →", customFizzBuzz(35, rules)[34]);   // BuzzJazz
console.log("105 →", customFizzBuzz(105, rules)[104]); // FizzBuzzJazz
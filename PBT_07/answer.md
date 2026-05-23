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
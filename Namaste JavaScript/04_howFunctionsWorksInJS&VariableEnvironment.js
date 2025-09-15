// How functions works in JS & variable environment

// 1️⃣ Function ka Execution Context

// Jab bhi ek function call hota hai, JavaScript ek naya Function Execution Context(FEC) banata hai.

// Har FEC ke andar 3 cheezein hoti hain:

// Variable Environment(VE)

// Isme us function ke andar ke variables aur function declarations store hote hain.

// Matlab jo bhi tumne var likha hai ya koi nested function banaya hai, wo sab yahan memory me allocate hota hai.

// Scope Chain

// Agar function ke andar koi variable na mile to wo apne parent ke environment me search karega.

// Yehi wajah hai ke closure possible hai(function apne outer function ke variables ko yaad rakhta hai).

// this keyword

// Function kis tarah call ho raha hai uske hisaab se this set hota hai.

// Agar simple call hai → this = window(browser me) ya global(Node.js me).

// 2️⃣ Function Execution ka Flow

// Chalo ek example dekhte hain:

// var x = 10;

// function foo(a) {
//     var b = 20;
//     function bar(c) {
//         return a + b + c;
//     }
//     return bar(30);
// }

// var result = foo(5);
// console.log(result);

// 🔎 Step by Step Breakdown

// 👉 Global Execution Context(GEC) banta hai

// Memory Phase:

// x = undefined

// foo = function

//     Execution Phase:

// x = 10

// foo(5) call hota hai

// 👉 Function Execution Context of foo banta hai

// Memory Phase(Variable Environment of foo):

// a = undefined

// b = undefined

// bar = function

//     Execution Phase:

// a = 5

// b = 20

// bar(30) call hota hai

// 👉 Function Execution Context of bar banta hai

// Memory Phase(Variable Environment of bar):

// c = undefined

// Execution Phase:

// c = 30

// return a + b + c → ab a aur b bar ke VE me nahi hain

// Wo scope chain ke through foo ke VE me jayega

// a = 5, b = 20, aur c = 30 → result = 55
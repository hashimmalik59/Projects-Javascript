// How JavaScript works & Execution Context

// JS mein har sara code execution context mein jata hai

// Execution Context => aik box hai jahan JS ka har code execute hota hai is k 2 parts hote hain
// 1. Memory Phase => is phase mein variable aur function memory mein apni jagah banate hain like:
// key: value
// a: 10
// function: {}

// 2. Execution Phase => is dusre phase mein sara code one line at a time execute hota hai phir next line and so for, like:
// console.log(1 + 3); // pehle yeh run hoga
// console.log(4 > 6); // next yeh
// console.log(9 / 3); // and third yeh

// Note: Execution phase one by one execute hoga

// Single Threaded => yani JS aik waqt mein aik command run karega(jo k Execution phase mein horaha hai)

// Synchronous => yeh next line pe tab jayega jab pehle wali line execute hojagi
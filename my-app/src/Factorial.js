// function fact(num) {

//     f = 1;

//     for (var i = 2; i <= num; i++) {
//         f *= i;
//     }

//     return f;
// }

// console.log(fact(6));

// USING RECURSION
function fact(num) {

    if (num === 1) {
        return 1;
    }
    return num * fact(num - 1);
}

console.log(fact(6));
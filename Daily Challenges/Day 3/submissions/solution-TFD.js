/**
 * @param {number} x
 * @return {number}
 **/

var reverse = function (x) {

    if (x > Math.pow(2, 30)) return 0
    if (x <= Math.pow(-2, 31)) return 0

    // x = -123
    let temp = 0;
    let minus = "-";
    x += "";
    x = x.split("").reverse().join(""); // 321-

    if (x.includes(minus)) {
        temp = parseInt(x);
    } else {
        return parseInt(x);
    }
    return 0 - temp;
};

//Test Cases : 

if (reverse(123) === 321 &&
    reverse(1534236469) === 0 &&
    reverse(-2147483648) === 0 &&
    reverse(563847412) === 214748365 &&
    reverse(1463847412) === 0
) {
    console.log("Test Passed");
} else
    console.log("Test Failed");

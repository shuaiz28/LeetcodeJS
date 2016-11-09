/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321
*/

//Solution

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var isNegative = false;
    var res = 0;
    if (x < 0) {
        isNegative = true;
        x = 0 - x;
    }
    while (x >= 1) {
        res = res * 10 + x % 10;
        x = (x - x % 10) / 10;
    }
    if (res > Math.pow(2,31)) {
        return 0;
    }
    if (isNegative) {
        res = 0 - res;
    }
    return res;
};
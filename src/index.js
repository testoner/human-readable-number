module.exports = function toReadable(number) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    arr1[30] = 'thirty';
    arr1[40] = 'forty';
    arr1[50] = 'fifty';
    arr1[60] = 'sixty';
    arr1[70] = 'seventy';
    arr1[80] = 'eighty';
    arr1[90] = 'ninety';
    let f1 = 0;
    let f2 = 0;
    let f3 = 0;
    let res = '';
    if ((number >= 0) && (number <= 20)) return arr1[number];
    if ((number > 20) && (number < 100)) {
        if (number % 10 == 0) return arr1[number];
        f1 = Math.floor(number / 10);
        f2 = number % 10;
        res = arr1[f1 * 10] + " " + arr1[f2];
        return res;
    }
    if ((number >= 100) && (number < 1000)) {
        if (number % 100 == 0) {
            res = arr1[number / 100] + ' hundred';
            return res;
        }
        f1 = Math.floor(number / 100);
        f2 = Math.floor(number / 10) % 10;
        f3 = number % 10;
        if ((f2 == 0) || (f2 == 1)) {
            f3 = number % 100;
            res = arr1[f1] + " hundred " + arr1[f3];
            return res;
        }
        if (f3 != 0) {
            res = arr1[f1] + " hundred " + arr1[f2 * 10] + " " + arr1[f3];
        } else {
            res = arr1[f1] + " hundred " + arr1[f2 * 10];
        }
        return res;
    }
}

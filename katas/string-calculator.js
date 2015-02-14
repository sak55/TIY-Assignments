/**
 * @param String A an English number word
 * @param String B an English number word
 * @returns Number representing A + B
 */
var stringNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function plus(A, B) {
    var i;
    for (i = 0; i < stringNum.length; i++) {
        if (A = stringNum[i]) {
            A = i;
        }
        if (B = stringNum[i]) {
            B = i;
        }
    }
    return (A + B);
} // END plus

/**
 * @param String A an English number word
 * @param String B an English number word
 * @returns Number representing A - B
 */
//function minus(A, B){
//}

/**
 * @param String word an English number word
 * @returns Number translation of `word`
 */
//function toNumber(word){
//}
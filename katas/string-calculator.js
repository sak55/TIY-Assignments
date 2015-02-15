var assert = require('assert');
var _ = require('lodash');

    

/**
 * @param String A an English number word
 * @param String B an English number word
 * @returns Number representing A + B
 */
var dictNum = {0 : 'zero',
               1 : 'one',
               2 : 'two',
               3 : 'three',
               4 : 'four',
               5 : 'five',
               6 : 'six',
               7 : 'seven',
               8: 'eight',
               9 : 'nine',
               10 : 'ten',
               11 : 'eleven',
               12 : 'twelve',
               13 : 'thirteen',
               14 : 'forteen',
               15 : 'fifteen',
               16 : 'sixteen',
               17 : 'seventeen',
               18 : 'eighteen',
               19 : 'ninteen',
               20 : 'twenty'};

function plus(A, B) {
    var n, key, numA, numB, answer;
    _.forEach(dictNum, function (n, key) {
        if (n === A) {
            return numA = key;
        }
        if (n === B) {
            return numB = key;
        }
    });
    answer = parseInt(numA) + parseInt(numB);
    console.log(answer);
}
 
plus('two', 'three');
    
//   
//plus("four", "two");
//
//it('should return number for the string', function() {
//   assert.equal(num('five'),5); 
//});
//        
//it('should return two strings added as numbers after looking at the dictionary', function() {
//    assert.equal(plus('zero', 'ten'),10);
//});

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
    

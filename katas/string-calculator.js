var assert = require('assert');
var _ = require('lodash');

    

/**
 * @param String A an English number word
 * @param String B an English number word
 * @returns Number representing A + B
 */


var dictNum = {'zero' : 0,
               'one' : 1,
               'two' : 2,
               'three' : 3,
               'four' : 4,
               'five' : 5,
               'six' : 6,
               'seven' : 7,
               'eight' : 8,
               'nine' : 9,
               'ten' : 10,
               'eleven' : 11,
               'twelve' : 12,
               'thirteen' : 13,
               'forteen' : 14,
               'fifteen' : 15,
               'sixteen' : 16,
               'seventeen' : 17,
               'eighteen' : 18,
               'ninteen' : 19,
               'twenty' : 20,
               'thirty' :30 ,
               'forty' : 40,
               'fifty' : 50,
               'sixty' : 60,
               'seventy' : 70,
               'eighty' : 80,
               'ninty' : 90,
              'one hundred' : 100};

function addme(A, B) {
    var answer;
    answer = toNumber(A) + toNumber(B)
    console.log(answer);
}
 
/**
 * @param String A an English number word
 * @param String B an English number word
 * @returns Number representing A - B
 */
function minus(A, B) {
    var answer;
    answer = toNumber(A) - toNumber(B)
    console.log(answer);
}

/**
 * @param String word an English number word
 * @returns Number translation of `word`
 */
function toNumber(word){
    return dictNum[word];
}
    
addme('zero', 'two');
addme('fifty', 'five');
minus ('three', 'two');
minus('fifty', 'five');

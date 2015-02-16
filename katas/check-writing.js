var assert = require('assert');
var _ = require('lodash');

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
               'thirty' : 30,
               'forty' : 40,
               'fifty' : 50,
               'sixty' : 60,
               'seventy' : 70,
               'eighty' : 80,
               'ninty' : 90,
               'one hundred' : 100,
               'one thousand' : 1000
              };

/**
 * @param Number n representing a dollar value
 * @returns String of English words for `n`
 */

function toCheck(n) {
    var stringNum, dollars, last2, numDollars;
    stringNum = JSON.stringify(n);
    
    function mycents() {
//        if (stringNum.slice(-1) === '.' ) {
//            last2 = "00";
//        }
        if (stringNum.slice(-2, -1) === '.') {
            last2 = stringNum.slice(-1) + "0";
            numDollars = stringNum.slice(0, -2);
        }
        else if (stringNum.slice(-3, -2) !== '.') {
            last2 = "00";
            numDollars = stringNum;
        }
        else {
            last2 = stringNum.slice(-2);
            numDollars = stringNum.slice(0, -3);
        }
    }
    
    mycents();
    
    console.log(n);
    console.log(stringNum.slice(-2));
            
    function tens() {
            if (numDollars.slice(-2) > 20) {
                if (numDollars.slice(-1) > 0) {
                    return (_.invert(dictNum))[numDollars.slice(-2, -1) + 0] + "-" + (_.invert(dictNum))[numDollars.slice(-1)]
                    }
                else {
                    return (_.invert(dictNum))[numDollars.slice(-2)]
                }
            }
            else {
                return (_.invert(dictNum))[numDollars.slice(-2)]
            }
        
    }
    
    function hundreds() {
            return (_.invert(dictNum))[numDollars.slice(-3,-2)] + " hundred "
    }
    
    function thousands() {
        return (_.invert(dictNum))[numDollars.slice(0,1)] + " thousand "
    }
    
    function tenthousands(){
        var num;
        if (numDollars.slice(0, 2) > 20) {
                if (numDollars.slice(-1) > 0) {
                    num = (_.invert(dictNum))[numDollars.slice(-2, -1) + 0] + "-" + (_.invert(dictNum))[numDollars.slice(-1)]
                    }
                else {
                    num = (_.invert(dictNum))[numDollars.slice(-2)]
                }
            }
            else {
                num = (_.invert(dictNum))[numDollars.slice(0, 2)]
            }
        
        return num + ' thousand '
    }
    
    if(numDollars.length === 5) {
        dollars = tenthousands() + hundreds() + tens();

    }

    else if (numDollars.length === 4){
        dollars = thousands() + hundreds() + tens();
    }
    
    else if (numDollars.length === 3) {
        dollars = hundreds() + tens();
    }
    
   else if(numDollars.length === 2) {
       dollars = tens();
       
    }
   else if(numDollars.length === 1) {
       dollars = (_.invert(dictNum))[numDollars];
   }
        
    mycents();
    console.log(dollars + ' & ' + last2 + '/' + '100s dollars')
    
} 



// END toCheck

toCheck(1.23);
toCheck(12.34);
toCheck(123.45);
toCheck(1234.56);
toCheck(12345.67);
toCheck(99999.99);

toCheck(30.23);
toCheck(30330.33);
toCheck(1.00);
toCheck(1.10);
toCheck(0.00);
toCheck(0.10);

//assert.equal(toCheck(1.23), "one & 23/100s dollars");
//assert.equal(toCheck(12.34), "twelve & 34/100s dollars");
//assert.equal(toCheck(123.45), "one hundred twenty three & 34/100s dollars");
//assert.equal(toCheck(1234.56), "one thousand two hundred thirty four & 56/100s dollars");
//assert.equal(toCheck(12345.67), "twelve thousand three hundred forty five & 67/100s dollars");

/**
 * @param Number
 * @returns String an English number word
 */
//function toEnglish(n){
//} // END toEnglish
//
//assert.equal(toEnglish(0), "zero");
//assert.equal(toEnglish(1), "one");
//assert.equal(toEnglish(2), "two");


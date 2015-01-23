var assert = require('assert');

function toEnglish(num) {
    if (num == 0){
        return "zero";
        console.log("zero");
    }
}

it('should return "zero"', function() {
   assert.equal(toEnglish(0), 'zero');
   });

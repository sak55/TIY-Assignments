var assert = require('assert');

function toEnglish(num) {
    if (num == 0){
        return "zero";
    }
    else if (num == 1) {
        return "one";
    }
    else if (num == 2) {
        return "two";
    }
    else if (num == 3) {
        return "three";
    }
    else if (num == 4) {
        return "four";
    }
    else if (num == 5) {
        return "five";
    }
    else if (num == 6) {
        return "six";
    }
    else if (num == 7) {
        return "seven";
    }
    else if (num == 8) {
        return "eight";
    }
    else if (num == 9) {
        return "nine";
    }
    else if (num == 10) {
        return "ten";
    }
}
it('should return "zero"', function() {
   assert.equal(toEnglish(0), 'zero');
   });
    
it('should return "one"', function() {
   assert.equal(toEnglish(1), 'one');
   });

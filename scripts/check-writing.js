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

it('should return "two"', function() {
   assert.equal(toEnglish(2), 'two');
   });
    
it('should return "three"', function() {
   assert.equal(toEnglish(3), 'three');
   });

it('should return "four"', function() {
    assert.equal(toEnglish(4), 'four');
});

it('should return "five"', function() {
   assert.equal(toEnglish(5), 'five');
   });
    
it('should return "six"', function() {
   assert.equal(toEnglish(6), 'six');
   });

it('should return "seven"', function() {
   assert.equal(toEnglish(7), 'seven');
   });
    
it('should return "eight"', function() {
   assert.equal(toEnglish(8), 'eight');
   });

it('should return "nine"', function() {
    assert.equal(toEnglish(9), 'nine');
});

it('should return "ten"', function() {
    assert.equal(toEnglish(10), 'ten');
});
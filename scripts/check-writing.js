var assert = require('assert');

var numList =  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];  

function toEnglish(A){
    console.log(numList[A]);
    return numList[A];        
} 

it('should print numbers from string"', function (){
    assert.equal(toEnglish(1), 'one');
    assert.equal(toEnglish(2), 'two');
    assert.equal(toEnglish(3), 'three');
    assert.equal(toEnglish(4), 'four');
    assert.equal(toEnglish(5), 'five');
    assert.equal(toEnglish(6), 'six');
    assert.equal(toEnglish(7), 'seven');
    assert.equal(toEnglish(8), 'eight');
    assert.equal(toEnglish(9), 'nine');
    assert.equal(toEnglish(10), 'ten');
    assert.equal(toEnglish(11), 'eleven');
    assert.equal(toEnglish(12), 'twelve');
    assert.equal(toEnglish(13), 'thirteen');
    assert.equal(toEnglish(14), 'fourteen');
    assert.equal(toEnglish(15), 'fifteen');
    assert.equal(toEnglish(16), 'sixteen');
    assert.equal(toEnglish(17), 'seventeen');
    assert.equal(toEnglish(18), 'eighteen');
    assert.equal(toEnglish(19), 'nineteen');
    assert.equal(toEnglish(20), 'twenty');
})


//
//function toEnglish(num) {
//    if (num == 0){
//        return "zero";
//    }
//    else if (num == 1) {
//        return "one";
//    }
//    else if (num == 2) {
//        return "two";
//    }
//    else if (num == 3) {
//        return "three";
//    }
//    else if (num == 4) {
//        return "four";
//    }
//    else if (num == 5) {
//        return "five";
//    }
//    else if (num == 6) {
//        return "six";
//    }
//    else if (num == 7) {
//        return "seven";
//    }
//    else if (num == 8) {
//        return "eight";
//    }
//    else if (num == 9) {
//        return "nine";
//    }
//    else if (num == 10) {
//        return "ten";
//    }
//}
//it('should return "zero"', function() {
//   assert.equal(toEnglish(0), 'zero');
//   });
//    
//it('should return "one"', function() {
//   assert.equal(toEnglish(1), 'one');
//   });
//
//it('should return "two"', function() {
//   assert.equal(toEnglish(2), 'two');
//   });
//    
//it('should return "three"', function() {
//   assert.equal(toEnglish(3), 'three');
//   });
//
//it('should return "four"', function() {
//    assert.equal(toEnglish(4), 'four');
//});
//
//it('should return "five"', function() {
//   assert.equal(toEnglish(5), 'five');
//   });
//    
//it('should return "six"', function() {
//   assert.equal(toEnglish(6), 'six');
//   });
//
//it('should return "seven"', function() {
//   assert.equal(toEnglish(7), 'seven');
//   });
//    
//it('should return "eight"', function() {
//   assert.equal(toEnglish(8), 'eight');
//   });
//
//it('should return "nine"', function() {
//    assert.equal(toEnglish(9), 'nine');
//});
//
//it('should return "ten"', function() {
//    assert.equal(toEnglish(10), 'ten');
//});

//function toEnglish(A, B) {
//    var x;
//    var y;
//    var z;
//    
//    if (A == 0){
//        x = 'zero'} else
//            if  (A == 1){
//                x = 'one'} else 
//            if (A == 2){
//                x = 'two';} else  
//            if (A == 3){
//                x = 'three';} else 
//            if (A == 4){
//                x = 'four';} else
//            if (A == 5){
//                x = 'five';} else
//            if (A == 6){
//                x = 'six';} else  
//            if (A == 7){
//                x = 'seven';} else  
//            if (A == 8){
//                x = 'eight';} else
//            if (A == 9){
//                x = 'nine';} else 
//            if (A == 10){
//                x = 'ten';}
//
//        
//        if (B == 0){
//            y = 'zero';} else  
//            if (B == 1){
//                y = 'one';} else
//            if (B == 2){
//                y = 'two';} else
//            if (B == 3){
//                y = 'three';} else
//            if (B == 4){
//                y = 'four';} else
//            if (B == 5){
//                y = 'five';} else
//            if (B == 6){
//                y = 'six';} else
//            if (B == 7){
//                y = 'seven';} else
//            if (B == 8){
//                y = 'eight';} else
//            if (B == 9){
//                y = 'nine';} else
//            if (B == 10){
//                y = 'ten';}
//
//            console.log(x + " " + y);
//        }
//
//toEnglish(7, 5);
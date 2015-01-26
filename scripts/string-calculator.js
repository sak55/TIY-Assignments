
var assert = require('assert');

/*function plus(A, B) {
    return 0;
}
it('should add "zero" and "zero"', function() {
    assert.equal(plus("zero", "zero"), 0);
});*/


/* function plus(A, B) {
    return 2;
}

it('should add "one" and "one"', function() {
    assert.equal(plus("one", "one"), 2);
}); */

/*
function plus(A, B) {
    return 4;
    
}

it('should add "two" and "two"', function() {
    assert.equal(plus("two", "two"), 4);
}); */

/*function plus(A, B) {
    return 6;
}

it('should add "three" and "three"', function() {
    assert.equal(plus("three", "three"), 6);
});*/

/*function plus(A, B) {
    return 8;
}

it('should add "four" and "four"', function() {
    assert.equal(plus("four", "four"), 8);
});*/

/*
function plus(A, B) {
    return 10;
}

it('should return "five" and  "five"', function(){
    assert.equal(plus("five", "five"), 10);
});*/

/*
function plus(A, B) {
    return 12;
}

it('should return "six" and "six"', function() {
    assert.equal(plus("six", "six"), 12);
});*/

/*function plus(A, B) {
    return 14;
}

it('should return "seven" and "seven"', function() {
    assert.equal(plus("seven", "seven"), 14);
});*/
/*
function plus(A, B) {
    return 16;
}

it('should return "eight" and "eight"', function() {
    assert.equal(plus("eight", "eight"), 16);
});*/

/*function plus(A, B) {
    return 18;
}

it('should return "nine" and "nine"', function() {
    assert.equal(plus("nine", "nine"), 18);
});*/

//function plus(A, B) {
//    return 20;
//}

//it('should return "ten" and "ten"', function() {
//    assert.equal(plus("ten", "ten"), 20);
//});


function plus(A, B) {
    var x;
    var y;
    var z;
    
    if (A == 'zero'){
        x = 0}
        else if  (A == 'one'){
            x = 1
            }
        else if (A == 'two'){
            x = 2;
            }
        else  if (A == 'three'){
            x = 3;
            }
        else  if (A == 'four'){
            x = 4;
            }
        else  if (A == 'five'){
            x = 5;
            }
        else  if (A == 'six'){
            x = 6;
            }
        else  if (A == 'seven'){
            x = 7;
            }
        else  if (A == 'eight'){
            x = 8;
            }
        else  if (A == 'nine'){
            x = 9;
            }
        else if (A == 'ten'){
            x = 10;
            }

        
        if (B == 'zero'){
        y = 0;}
        else  if (B == 'one'){
            y = 1;
            }
        else  if (B == 'two'){
            y = 2;
            }
        else  if (B == 'three'){
            y = 3;
            }
        else  if (B == 'four'){
            y = 4;
            }
        else  if (B == 'five'){
            y = 5;
            }
        else if (B == 'six'){
            y = 6;
            }
        else  if (B == 'seven'){
            y = 7;
            }
        else  if (B == 'eight'){
            y = 8;
            }
        else  if (B == 'nine'){
            y = 9;
            }
        else if (B == 'ten'){
            y = 10;
            }
        
        console.log(x + y);    
    }

plus('ten', 'one');
plus('zero', 'one');
plus('one', 'one');
plus('five', 'one');
plus('seven', 'one');
plus('ten', 'four');

var assert = require('assert');

function solution (x) {

    var sum = 0;
    for(i = 0; i < x; i++) {
        if (i % 3 === 0 || i % 5 === 0){
            sum+=i;
            console.log(sum);
        }
    }
    return sum;
}

console.log(solution(10));
console.log(solution(20));
console.log(solution(30));
console.log(solution(50));
console.log(solution(100));
console.log(solution(1000));

it('should have a `solution` function', function(){
  assert(solution);
  assert.equal(typeof solution, 'function');
});

it('should have a `solution` for (10, 20, 30)', function(){
  assert.equal(solution(10), 23);
  assert.equal(solution(20), 78);
  assert.equal(solution(30), 195);
});

it('should have a `solution` for 50', function(){
  assert.equal(solution(50), 543);
});

it('should have a solution for 100', function(){
  assert.equal(solution(100), 2318);
});

it('should have a solution for 1000', function(){
  assert.equal(solution(1000), 233168);
});

//var assert = require('assert');
//
//function solution (x) {
//    var counter = 1,
//        threes = 0,
//        fives = 0,
//        total = 0;
//    
//    while (counter < x) {        
//        if (counter % 3 == 0) {
//            total = ((counter/3) * 3) + total;} 
//        if (counter % 5 == 0) {
//            total = ((counter/5) * 5) + total;}
//        counter++;}
//        if 
//    return total;
//    console.log(total);
//}
//
//var sum = 0;
//for(i = 0; i < x; i++) {
//    if (i % 3 === 0 || i % 5 === 0){
//        sum+=i;
//    }
//
//}
//console.log(sum);
//console.log(solution(10));
//console.log(solution(20));
//console.log(solution(30));
//console.log(solution(50));
//console.log(solution(100));
//console.log(solution(1000));
//
//
//
//
//
//
//it('should have a `solution` function', function(){
//  assert(solution);
//  assert.equal(typeof solution, 'function');
//});
//
//it('should have a `solution` for (10, 20, 30)', function(){
//  assert.equal(solution(10), 23);
//  assert.equal(solution(20), undefined);
//  assert.euqal(solution(30), undefined);
//});
//
//it('should have a `solution` for 50', function(){
//  assert.equal(solution(50), undefined);
//});
//
//it('should have a solution for 100', function(){
//  assert.equal(solution(100), undefined);
//});
//
//// What about 1000?
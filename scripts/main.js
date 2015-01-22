console.log("does this work?")

var assert = require ("assert");

/**
 * @param Number A
 * @param Number B
 * @return sum of A and B
 */

function add(A,B){
    return A+B;
    console.log(A+B);
}

    assert(add(2,6) == 12);

/**
 * @param Number A
 * @param Number B
 * @return difference of A and B
 */

function diff(A,B){
    return A-B;
}

    assert(diff(10,2) == 10)

/**
 * @param Number A
 * @param Number B
 * @return product of A times B
 */

function prod(A,B){
    return A*B;
}

    assert(prod(4,2) == 8)
    
/**
 * @param Number A
 * @param Number B
 * @return division of A by B
 */

function div(A,B){
    return A / B;
}

    assert(div(6,3) == 2)


    
assert(plus("one", "one") === 2);
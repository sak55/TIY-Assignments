var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})


/**
 * @param Number A
 * @param Number B
 * @return sum of A and B
 */

function add(A,B){
    return A+B;
}
console.log(add(2,6));


/**
 * @param Number A
 * @param Number B
 * @return difference of A and B
 */

function diff(A,B){
    return A-B;
}
    console.log(diff(10,2));


/**
 * @param Number A
 * @param Number B
 * @return product of A times B
 */

function prod(A,B){
    return A*B;
}
    console.log(prod(4,2));

    
/**
 * @param Number A
 * @param Number B
 * @return division of A by B
 */

function div(A,B){
    return A / B;
}
    console.log(div(16,2));
    console.log(div(1,0));



    

function plus(A , B) {
    
        if (A === "zero"){
            return 0;
        }

        else if (A === "one"){
            return 1;
        }

        else if (A === "two"){
            return 2;
        }

        else if (A === "three"){
            return 3;
        }

        else if (A === "four"){
            return 4;
        }

        else if (A === "five"){
            return 5;
        }

        else if (A === "six"){
            return 6;
        }

        else if (A === "seven"){
            return 7;
        }

        else if (A === "eight"){
            return 8;
        }

        else if (A === "nine"){
            return 9;
        }
     
    
    if (B === "zero"){
            return 0;
        }

        else if (B === "one"){
            return 1;
        }

        else if (B === "two"){
            return 2;
        }

        else if (B === "three"){
            return 3;
        }

        else if (B === "four"){
            return 4;
        }

        else if (B === "five"){
            return 5;
        }

        else if (B === "six"){
            return 6;
        }

        else if (B === "seven"){
            return 7;
        }

        else if (B === "eight"){
            return 8;
        }

        else if (B === "nine"){
            return 9;
        }
    
    return A + B;
   
    }

console.log(plus("one", "one"));

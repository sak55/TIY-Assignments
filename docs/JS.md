##[Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

    A primitive (primitive value, primitive data type) is data that is not an Object and does not have any methods.

* In depth
Most of the time, a primitive value is represented directly at the lowest level of the language implementation.

In JavaScript, there are 6 primitive data types:
* String
* Number
* Boolean
* Null
* undefined
* Symbol (new in ECMAScript 6)
* All primitives are immutable (incapable of being changed).


### [Primative: Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

    The value null is a JavaScript literal representing null or an "empty" value, <strong>i.e. no object value is present.</strong> It is one of JavaScript's primitive values. A special keyword denoting a null value; null is also a primitive value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant

* _symbol_: `null`
* _pronunciation_: "null", "null value", "is null"
* _examples_:
```javascript
null // how exciting
```

### [Primative: Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Boolean_literals)

    Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object. The Boolean object is a wrapper around the primitive Boolean data type. See Boolean Object for more information.

* _symbol: `true` and `false`
* _pronunciation_: "boo-lee-ann", 
* _examples_:
```javascript
1 > 2 == false
(2 > 1) == true
("hello JS" != "hello css") == true
```

### [Primative: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

    The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor.

* _symbol: `0123456789`
* _pronunciation_: "integer", "the number", "the operant" 
* _examples_:
```javascript
5
9
9876543210
```

### [Primative: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

    The String global object is a constructor for strings, or a sequence of characters.

* _symbol: `"anything between double quotes"` or `'single quotes'`
* _pronunciation_: "the string", 'asdf1234fghj',' "12345" 
* _examples_:
```javascript
"the string"
'this is also a string'
```

## [Build in Values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

    The term "global objects" (or standard built-in objects) here is not to be confused with the global object. Here, global objects refer to objects in the global scope (but only if ECMAScript 5 strict mode is not used! Otherwise it returns undefined). The global object itself can be accessed by the this operator in the global scope. In fact, the global scope consists of the properties of the global object (including inherited properties, if any).

    Other objects in the global scope are either created by the user script or provided by the host application. The host objects available in browser contexts are documented in the API reference. For more information about the distinction between the DOM and core JavaScript, see JavaScript technologies overview.

### [Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

    The global Infinity property is a numeric value representing infinity.
    Infinity is a property of the global object, i.e. it is a variable in global scope.
    The initial value of Infinity is Number.POSITIVE_INFINITY. The value Infinity (positive infinity) is greater than any other number. This value behaves mathematically like infinity; for example, any positive number multiplied by Infinity is Infinity, and anything divided by Infinity is 0.
    Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.
    Infinity is displayed when a number exceeds the lower limit of the floating point numbers, which is -1.797693134862316E+308.
    
* _symbol: `Infinity`
* _pronunciation_: "Positve infinity is greater than any other number", "Infinity is like 1, any positive number multiplied by it is infinity", 
* _examples_:
```javascript
1/0  // Infinity
Infinity*2 //Infinity
```
    
### [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

    The global NaN property is a value representing Not-A-Number.
    NaN is a property of the global object.
    The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.
    It is rather rare to use NaN in a program. It is the returned value when Math functions fail (Math.sqrt(-1)) or when a function trying to parse a number fails (parseInt("blabla")).
    Testing against NaN
    Equality operator (== and ===) cannot be used to test a value against NaN. Use Number.isNaN() or isNaN() instead.

* _symbol: `NaN`
* _pronunciation_: "Not a Number",  
* _examples_:
```javascript
?????
```

### [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

    The global undefined value property represents the value undefined. It is one of JavaScript's primitive types.
    undefined is a property of the global object, i.e. it is a variable in global scope. The initial value of undefined is the primitive value undefined.
    In modern browsers (JavaScript 1.8.5 / Firefox 4+), undefined is a non-configurable, non-writable property per the ECMAScript 5 specification. Even when this is not the case, avoid overriding it.
    A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned.
    Since undefined is not a reserved word, it can be used as an identifier (variable name) in any scope other than the global scope.
 
* _symbol: `undefined`
* _pronunciation_: "the var has not been assigned a value therefore it is undefined",  
* _examples_:
```javascript
console.log (undefined) // undefined
var x=undefined // undefined
```    

### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

    The addition operator produces the sum of numeric operands or string concatenation.

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123',
false+false=0
True+false=1
```

### [Operator: Subtraction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction_(-))

    The subtraction operator subtracts the two operands, producing their difference.

* _symbol_: `-`
* _pronunciation_: "subtract", "subtracted from"
* _examples_:
```javascript
3 - 2 - 1 // 0
'hey' - 2 // NaN
3-5 // -2
```

### [Operator: Division](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division_(.2F))

    The division operator produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor.

* _symbol_: `/`
* _pronunciation_: "divide", "divided by"
* _examples_:
```javascript
1 / 2   // 0.5
3 / 0   // infinity
3 / "a"   // NaN
```

### [Operator: Multiplication](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication_(*))

    The multiplication operator produces the product of the operands.

* _symbol_: `*`
* _pronunciation_: "multiplied by", "multiply"
* _examples_:
```javascript
1 * 2  // 2
infinity * infinity = infinity
"a" * 4  // NaN
```

### [Operator: Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_(.25))

    The remainder operator returns the first operand modulo the second operand, that is, var1 modulo var2, in the preceding statement, where var1 and var2 are variables. The modulo function is the integer remainder of dividing var1 by var2. There is a proposal to get an actual modulo operator in a future version of ECMAScript.

* _symbol_: `%`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
12 % 5  // 2
-1 % 2 // -1
NaN % 2 // NaN
```

### [Operator: Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_(.2B.2B))

    The increment operator increments (adds one to) its operand and returns a value.

    ** If used postfix, with operator after operand (for example, x++), then it returns the value before incrementing.
    ** If used prefix with operator before operand (for example, ++x), then it returns the value after incrementing.

* _symbol_: `++`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
// Postfix 
var x = 3;
y = x++; // y = 3, x = 4

// Prefix
var a = 2;
b = ++a; // a = 3, b = 3
```

### [Operator: Decrement]()

    The decrement operator decrements (subtracts one from) its operand and returns a value.

If used postfix (for example, x--), then it returns the value before decrementing.
If used prefix (for example, --x), then it returns the value after decrementing.

* _symbol_: `--`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123',
```

### [Operator: Unary Negation]()

    The unary negation operator precedes its operand and negates it.

* _symbol_: `-`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123',
```

### [Operator: Unary Plus]()

    The unary plus operator precedes its operand and evaluates to its operand but attempts to converts it into a number, if it isn't already. Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number. It can convert string representations of integers and floats, as well as the non-string values true, false, and null. Integers in both decimal and hexadecimal ("0x"-prefixed) formats are supported. Negative numbers are supported (though not for hex). If it cannot parse a particular value, it will evaluate to NaN.

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123',
```

### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

    The addition operator produces the sum of numeric operands or string concatenation.

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123',
```
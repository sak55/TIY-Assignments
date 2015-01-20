Using the MDN JavaScript Reference 
    document the first 4 literal or primitive types, 
    those 3 important built-in values, and 
    at least 10 Arithmetic or Assignment operators. 
    
    Provide examples of each as simple expressions and 
    include the result from the console, REPL, or Scratchpad.

Remember to link the title of each entry to a corresponding page in the documentation, as you'll be adding more to it later!

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

Infinity, NaN, and undefined


### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123', obviously... WTF?
```


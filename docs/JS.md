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
* _pronunciation_: "the increment, adds one to"
* _examples_:
```javascript
// Postfix 
var x = 3;
y = x++; // y = 3, x = 4

// Prefix
var a = 2;
b = ++a; // a = 3, b = 3
```

### [Operator: Decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement_(--))

    The decrement operator decrements (subtracts one from) its operand and returns a value.

If used postfix (for example, x--), then it returns the value before decrementing.
If used prefix (for example, --x), then it returns the value after decrementing.

* _symbol_: `--`
* _pronunciation_: "the decrement subtracts one from"
* _examples_:
```javascript
// Postfix 
var x = 3;
y = x--; // y = 3, x = 2

// Prefix
var a = 2;
b = --a; // a = 1, b = 1
```

### [Operator: Unary Negation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation_(-))

    The unary negation operator precedes its operand and negates it.

* _symbol_: `-`
* _pronunciation_: "negates it",
* _examples_:
```javascript
var x = 3;
y = -x; // y = -3, x = 3
```

### [Operator: Unary Plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus_(.2B))

    The unary plus operator precedes its operand and evaluates to its operand but attempts to converts it into a number, if it isn't already. Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number. It can convert string representations of integers and floats, as well as the non-string values true, false, and null. Integers in both decimal and hexadecimal ("0x"-prefixed) formats are supported. Negative numbers are supported (though not for hex). If it cannot parse a particular value, it will evaluate to NaN.

* _symbol_: `=`
* _pronunciation_: "the numeric value of true is 1",
* _examples_:
```javascript
+3     // 3
+"3"   // 3
+true  // 1
+false // 0
+null  // 0
```

### [Operator: Assigment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)

    An assignment operator <strong>assigns a value to its left<strong> operand based on the value of its right operand.

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
// Assuming the following variables
//  x = 5
//  y = 10
//  z = 25

x = y     // x is 10
x = y = z // x, y and z are all 25
```


Name	Shorthand operator	Meaning
Assignment	x = y	x = y
Addition assignment	x += y	x = x + y
Subtraction assignment	x -= y	x = x - y
Multiplication assignment	x *= y	x = x * y
Division assignment	x /= y	x = x / y
Remainder assignment	x %= y	x = x % y
Left shift assignment	x <<= y	x = x << y
Right shift assignment	x >>= y	x = x >> y
Unsigned right shift assignment	x >>>= y	x = x >>> y
Bitwise AND assignment	x &= y	x = x & y
Bitwise XOR assignment	x ^= y	x = x ^ y
Bitwise OR assignment	x |= y	x = x | y


### [10 control-flow keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

    JavaScript supports a compact set of statements, specifically control flow statements, that you can use to incorporate a great deal of interactivity in Web pages. Any expression is also a statement. See Expressions and Operators for complete information about expressions. Use the semicolon (;) character to separate statements in JavaScript code.

### [1-Control Flow : Block Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#Block_Statement)

    A block statement is used to group statements. The block is delimited by a pair of curly brackets:

* _symbol_: `{}`
* _pronunciation_: "Curly Brackets", "Squiggly Brackets",
* _examples_:
```javascript
{
    x = 2;
}

if (x = 2)
{
    y = 1;
}
```

### [2-Control Flow : if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#if...else_Statement)

    Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false. condition can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates to true and false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including further nested if statements.
    You may also compound the statements using else if to have multiple conditions tested in sequence, as follows:To execute multiple statements, group them within a block statement ({ ... }) . In general, it's good practice to always use block statements, especially when nesting if statements:To execute multiple statements, group them within a block statement ({ ... }) . In general, it's good practice to always use block statements, especially when nesting if statements:If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:The following values will evaluate to false:
    ** false, undefined, null, 0, NaN ,the empty string ("")
    ** All other values, including all objects evaluate to true when passed to a conditional statement.

    Do not confuse the primitive boolean values true and false with the true and false values of the Boolean object.

* _symbol_: `if (condition) {statement;}`
* _pronunciation_: "if (X) then {} ", "if (X) then {} else {} ",
* _examples_:
```javascript
if (x = 2) {
    console.log(x);
}

if (x = 2) {
    console.log(x);
}
else {
    console.log("Error Will Robinson, Error")
}
```

### [3-Control Flow : switch Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#switch_Statement)

    A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement.The program first looks for a case clause with a label matching the value of expression and then transfers control to that clause, executing the associated statements. If no matching label is found, the program looks for the optional default clause, and if found, transfers control to that clause, executing the associated statements. If no default clause is found, the program continues execution at the statement following the end of switch. By convention, the default clause is the last clause, but it does not need to be so.
    The optional break statement associated with each case clause ensures that the program breaks out of switch once the matched statement is executed and continues execution at the statement following switch. If break is omitted, the program continues execution at the next statement in the switch statement.
    When break is encountered, the program terminates switch and executes the statement following switch. If break were omitted, the default statement would be executed.
    

* _symbol_: `switch (condition) {statement; }`
* _pronunciation_: "switch (X) if it matches the case perform statement...otherwise perform default ",
* _examples_:
```javascript
switch (expression) {
   case label_1:
      statements_1
      [break;]
   case label_2:
      statements_2
      [break;]
   ...
   default:
      statements_def
      [break;]
}
```

### [Loop Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#Loop_Statements)
A loop is a set of commands that executes repeatedly until a specified condition is met. JavaScript supports the for, do while, and while loop statements, as well as label (label is not itself a looping statement, but is frequently used with these statements). In addition, you can use the break and continue statements within loop statements.

### [4-Control Flow : For Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#switch_Statement)

    A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.
    When a for loop executes, the following occurs:
    The initializing expression initialExpression, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
    The condition expression is evaluated. If the value of condition is true, the loop statements execute. If the value of condition is false, the for loop terminates. If the condition expression is omitted entirely, the condition is assumed to be true.
    The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.
    The update expression incrementExpression, if there is one, executes, and control returns to step 2.


* _symbol_: `for ([initialExpression]; [condition]; [incrementExpression]) statement`
* _pronunciation_: "for (X = i; 1 < w) do this and repeat",
* _examples_:
```javascript
for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected)
         numberSelected++;
   }
```

### [5-Control Flow : Do...While Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#do...while_Statement)

    The do...while statement repeats until a specified condition evaluates to false. statement executes once before the condition is checked. To execute multiple statements, use a block statement ({ ... }) to group those statements. If condition is true, the statement executes again. At the end of every execution, the condition is checked. When the condition is false, execution stops and control passes to the statement following do...while.

* _symbol_: `do statement while (condition);`
* _pronunciation_: "do (x) while the following is false",
* _examples_:
```javascript
do {
   i += 1;
   document.write(i);
} while (i < 5);

```

### [6-Control Flow : While Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#while_Statement)

    A while statement executes its statements as long as a specified condition evaluates to true.
    If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.
    The condition test occurs before statement in the loop are executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops and control is passed to the statement following while.
    To execute multiple statements, use a block statement ({ ... }) to group those statements.
    
* _symbol_: `while (condition) statement`
* _pronunciation_: "while (x) is true do the following...",
* _examples_:
```javascript
n = 0;
x = 0;
while (n < 3) {
   n++;
   x += n;
}
```

### [7-Control Flow : Break Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#break_Statement)

    Use the break statement to terminate a loop, switch, or in conjunction with a label statement.
    When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
    When you use break with a label, it terminates the specified labeled statement.
    The first form of the syntax terminates the innermost enclosing loop or switch; the second form of the syntax terminates the specified enclosing label statement.
    
* _symbol_: `break; break label;`
* _pronunciation_: "?",
* _examples_:
```javascript
for (i = 0; i < a.length; i++) {
   if (a[i] == theValue)
      break;
}
```

### [8-Control Flow : Continue Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#continue_Statement)

    The continue statement can be used to restart a while, do-while, for, or label statement.
    When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
    When you use continue with a label, it applies to the looping statement identified with that label.
    
* _symbol_: `continue; continue label;`
* _pronunciation_: "for the is true continue to loop...",
* _examples_:
```javascript
for (i = 0; i < a.length; i++) {
   if (a[i] == theValue)
      continue;
}
```

### [9-Control Flow : For...in Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#for...in_Statement)

    The for...in statement iterates a specified variable over all the properties of an object. For each distinct property, JavaScript executes the specified statements.Arrays
    Although it may be tempting to use this as a way to iterate over Array elements, because the for...in statement iterates over user-defined properties in addition to the array elements, if you modify the Array object, such as adding custom properties or methods, the for...in statement will return the name of your user-defined properties in addition to the numeric indexes. Thus it is better to use a traditional for loop with a numeric index when iterating over arrays.
    
* _symbol_: `for (variable in object) {statements}`
* _pronunciation_: "for this var is in object perform this statement",
* _examples_:
```javascript
for (var i in obj) {
      result += obj_name + "." + i + " = " + obj[i] + "<br>";
   }
}
```

### [10-Control Flow : for each...in Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#for_each...in_Statement)

    for each...in is a loop statement introduced in JavaScript 1.6. It is similar to for...in, but iterates over the values of object's properties, not their names.
    
* _symbol_: `for each (variable in object) {statement}`
* _pronunciation_: "for each of the var in this object perform this statement",
* _examples_:
```javascript
var sum = 0;
var obj = {prop1: 5, prop2: 13, prop3: 8};
for each (var item in obj) {
  sum += item;
}
print(sum); // prints "26", which is 5+13+8
```

### Literal: `Array` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Array_literals)
    An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets ([]). When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.
    Note An array literal is a type of object initializer. See Using Object Initializers.
    If an array is created using a literal in a top-level script, JavaScript interprets the array each time it evaluates the expression containing the array literal. In addition, a literal used in a function is created each time the function is called.
    Array literals are also Array objects. See Array Object for details on Array objects.
    Extra commas in array literals
    You do not have to specify all elements in an array literal. If you put two commas in a row, the array is created with undefined for the unspecified elements.
    If you include a trailing comma at the end of the list of elements, the comma is ignored. In the following example, the length of the array is three. There is no myList[3]. All other commas in the list indicate a new element. (Note: trailing commas can create errors in older browser versions and it is a best practice to remove them.)
    Understanding the behavior of extra commas is important to understanding JavaScript as a language, however when writing your own code: explicitly declaring the missing elements as undefined will increase your code's clarity and maintainability.

* *symbol:* `[ ]`
* *pronunciation:* "array", "new array"
* *examples:*
```javascript
var x = [ , , ]
var x = [1,2,3]
var x = ["red", , "blue"]
```

#### `Array.length` (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

    The length property represents an unsigned, 32-bit integer that specifies the number of elements in an array.
    The value of the length property is an integer with a positive sign and a value less than 2 to the 32nd power (232).
    You can set the length property to truncate an array at any time. When you extend an array by changing its length property, the number of actual elements does not increase; for example, if you set length to 3 when it is currently 2, the array still contains only 2 elements. Thus, the length property says nothing about the number of defined values in the array. See also Relationship between length and numerical properties.
    
* *value:* `Number` of elements in an array
* *examples:*
```javascript
var ten = [1,2,3,4,5,6,7,8,9,0];
ten.length = 10;

ar numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]
```

#### [1-`Array.prototype.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

    The pop() method removes the last element from an array and returns that element.
    The pop method removes the last element from an array and returns that value to the caller.
    pop is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.
    If you call pop() on an empty array, it returns an undefined value.

* *result:* removes the last element in the array
* *parameters:* If you call pop() on an empty array, it returns an undefined value
* *returns:* returns the value of the last element in the array

```javascript
var myColors = ['red', 'blue', 'green', 'yellow']

var popped = myColors.pop();

console.log(myColors); // ['red', 'blue', 'green'] 

console.log(popped); // 'yellow'
```

#### [2-`array.prototype.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

    The push() method adds one or more elements to the end of an array and returns the new length of the array.
    The push method appends values to an array.
    push is intentionally generic. This method can be used with call() or apply() on objects resembling arrays. The push method relies on a length property to determine where to start inserting the given values. If the length property cannot be converted into a number, the index used is 0. This includes the possibility of length being nonexistent, in which case length will also be created.
    The only native, array-like objects are strings, although they are not suitable in applications of this method, as strings are immutable.

* *results:* adds one or more elements to the end of an array and returns the new length of the array.
* *parameters:* elementN The elements to add to the end of the array.
* *returns:* The new length property of the object upon which the method was called.

```javascript
var veggies = ['carrots', 'celery'];
var total = veggies.push('cucumber', 'lettuce');

console.log(veggies); // ['carrots', 'celery', 'cucumber', 'lettuce']
console.log(total);  // 4
```
#### [3-`array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

    The splice() method changes the content of an array by removing existing elements and/or adding new elements.

* *results:*  
* *parameters:* 
    start
        Index at which to start changing the array. If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end.
     deleteCount
        An integer indicating the number of old array elements to remove. If deleteCount is 0, no elements are removed. In this case, you should specify at least one new element. If deleteCount is greater than the number of elements left in the array starting at index, then all of the elements through the end of the array will be deleted.
    itemN
        The element to add to the array. If you don't specify any elements, splice will only remove elements from the array.

* *returns:* An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

// removes 0 elements from index 2, and inserts 'drum'
var removed = myFish.splice(2, 0, 'drum');
// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
// removed is [], no elements removed

// removes 1 element from index 3
removed = myFish.splice(3, 1);
// myFish is ['angel', 'clown', 'drum', 'surgeon']
// removed is ['mandarin']
```
#### [4-`array.prototype.unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

    The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

* *results:*  arr.unshift([element1[, ...[, elementN]]])
* *parameters:* 
    elementN
The elements to add to the front of the array.

* *returns:* The new length property of the object upon which the method was called.

```javascript
var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```

#### [5-`array.prototype.unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

    The shift() method removes the first element from an array and returns that element. This method changes the length of the array.
    The shift method removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned.
    shift is intentionally generic; this method can be called or applied to objects resembling arrays. Objects which do not contain a length property reflecting the last in a series of consecutive, zero-based numerical properties may not behave in any meaningful manner.
    
* *results:*  arr.shift()
* *parameters:* 
* *returns:* removes the first element from an array and returns that element.

```javascript
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before: ' + myFish);

var shifted = myFish.shift();

console.log('myFish after: ' + myFish);
console.log('Removed this element: ' + shifted);

// myFish before: angel,clown,mandarin,surgeon
// myFish after: clown,mandarin,surgeon
// Removed this element: angel

```
#### [6-`array.prototype.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

    The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
    The reverse method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.

* *results:*  arr.reverse()
* *parameters:* none
* *returns:* array in opposite order

```javascript
var myArray = ['one', 'two', 'three'];
myArray.reverse(); 

console.log(myArray) // ['three', 'two', 'one']
```
#### [7-`array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

    The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.
    If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Cherry" comes before "banana".      In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order.

* *results:*  arr.reverse()
* *parameters:* 
    compareFunction
    Optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.

* *returns:* 

```javascript
var fruit = ['apples', 'bananas', 'Cherries'];
fruit.sort(); // ['Cherries', 'apples', 'bananas'];

var scores = [1, 2, 10, 21]; 
scores.sort(); // [1, 10, 2, 21]

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.
```
### Literal: `Array`
. . .

#### Iterator Methods
Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

### [Iterator Method: Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
* summary: `every()` tests whether ALL elements in the array pass the test given in the function
* syntax: `arr.every(callback[, thisArg])`
* parameters:
*    `callback:` -function to test each element against - takes three arguments:
*       `currentValue` -the current element being processed in the array
*       `index` -the index of the current element being processed in the array
*       `array` -the array `every()` was called upon
*       `thisArg` -optional. the value to use as "this" when executing the callback
* Returns: Booleans -if `callback` returns true for EVERY element
* Example:
```javascript
function every(anArray, callback){
  var hasFailed = false; // it hasn't has it?
  // iterate...
  anArray.foreach(function(item, index, all){
    if ( hasFailed ) return; // one failure ruins everything...
    hasFailed = !callback(item, index, all); // why invert here?
  });
  return !hasFailed; // Another inverse?
  // If `anArray` is empty, it will return true
}
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false - 5 and 8 are not larger than or equal to 10
[12, 54, 18, 130, 44].every(isBigEnough); // true  - all elements are larger than 10
```

### [Iterator Method: Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* summary: `forEach()` executes the provided function once per element in the array
* syntax: `arr.forEach(callback[, thisArg])`
* parameters:
*   `callback:` -function that produces an element of the new array - takes three arguments:
*       `currentValue` -the current array element being processed
*       `index` -the index of the current array element being processed
*       `array` -the array `forEach` was called upon
*       `thisArg` -optional. the value to use as this when executing the callback
* Returns: depends on what the function returns
* Example:
```javascript
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// no element at index 2, so it is not visited
[2, 5, , 9].forEach(logArrayElements);
// will log to the console:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### [Iterator Method: Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
* summary: `some()` tests whether a particular element in the array passes the test given by the provided function. executes once per element until callback returns true
* syntax: `arr.some(callback[, thisArg])`
* parameters:
*   `callback:` -function to test each element - takes three arguments
*       `currentValue` -the current element being processed
*       `index` -the index of the element being processed
*       `array` -the array `some()` was called on
*   `thisArg` -optional. this is the value used when executing callback
* Returns: Boolean -returns true if it finds an element that meets the conditions set in the function
* Example:
```javascript
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false -none of the elements are larger than ten
[12, 5, 8, 1, 4].some(isBiggerThan10); // true -12 is larger than 10
```

### [Iterator Method: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* summary: `filter()` creates a new array with all elements that pass the test implemented by the provided function
* syntax: `arr.filter(callback[, thisArg])`
* parameters:
*   `callback:` -function to test each element in the array. it is invoked with three arguments: element, index, and array
*   `thisArg` -optional. -value to use as `this` when executing callback
* Returns: depends on what the function asks for
* Example:
```javascript
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44] // `filter(isBigEnough)` creates a new array with the elements that meet the condition >= ten
```

### [Iterator Method: Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* summary: `map()` creates a new array with the results of calling a provided function once on every element in the array
* syntax: `arr.map(callback[, thisArg])`
* parameters:
*   `callback:` -function that produces an element of the new array. takes three arguments:
*       `currentValue` -current element being processed in the array
*       `index` -the index of the current element being processed
*       `array` -the array `map()` was called on
*   `thisArg` -optional. the value to use as `this` when executing the callback
* Returns: calls the function once on every element and returns a new array from the results
* Example:
```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3], numbers is still [1, 4, 9] //does not change the array it acted on, creates a new one with the results of Math.sqrt//
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9] //doubles the numbers and creates a new array with those values
```

### [Iterator Method: Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* summary: `reduce()` applies a function against an accumulator AND each value of the array from left to right
* syntax: `arr.reduce(callback[, initialValue])`
* parameters:
*   `callback:` -function to execute on each value- takes FOUR arguments:
*       `previousValue` -the value previously returned in the last invocation of the callback=initialValue (if one was supplied)
*       `currentValue` -the current element being processed
*       `index` -the index of the element being processed
*       `array` -the array `reduce()` was called on
*   `initialValue` -optional. object to used as the first argument to the first call of the callback
* Returns: the value of the last callback invocation
* Example:
```javascript
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}); //`reduce` will return 10 here.
var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6
can also flatten an array of arrays:
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]
```

### [Iterator Method: Array.prototype.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)
* summary: `reduceRight()` applies a function against an accumulator and each value of the array has to reduce it to a single value
* syntax: `arr.reduceRight(callback[, initialValue])`
* parameters:
*   `callback:` -function to execute on each value in the array. takes four arguments:
*       `previousValue` -the value previously returned in the last invocatio of the callback, or initialValue, if one is supplied
*       `currentValue` -the current element being processed
*       `index` -the index of the element being processed
*       `array` -the array `reduce()` is called on
*   `initialValue` -optional. object to use as the first argument to the first call of the `callback`
* Returns: returns the value of the last invocation of the callback
* Examples:
```javascript
//adding the values within the array
var total = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
// total == 6
//flattening an array of arrays
var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]
```

### Lodash
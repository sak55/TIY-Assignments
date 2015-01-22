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

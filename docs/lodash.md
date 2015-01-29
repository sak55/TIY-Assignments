### [`_.every`](http://lodash.com/docs#every)

_.every(collection, [predicate=_.identity], [thisArg])

* _params:_
  * `Array`|`Object`|`String` `collection` to iterate over
  * `Function`|`Object`|`String` `predicate` considered for each iteration
    * a callback `Function`
      * is invoked with: `value`, `index`|`key`, `collection`
      * should return `Boolean` whether iteration passes `predicate`
    * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches) style callback returns true for elements that have the properties of the given object, else false.
    * a `String` is compared like [`_.property`](http://lodash.com/docs#property) style callback returns the property value of the given element. 
  * `thisArg` binding for `predicate`
* _returns:_
  * `Boolean` whether `predicate` passes for every `value` in `collection`
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?
  


Methods

Mutator methods

These methods modify the array:

Array.prototype.pop()
Removes the last element from an array and returns that element.
Array.prototype.push()
Adds one or more elements to the end of an array and returns the new length of the array.
Array.prototype.reverse()
Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first.
Array.prototype.shift()
Removes the first element from an array and returns that element.
Array.prototype.sort()
Sorts the elements of an array in place and returns the array.
Array.prototype.splice()
Adds and/or removes elements from an array.
Array.prototype.unshift()
Adds one or more elements to the front of an array and returns the new length of the array.
Accessor methods

These methods do not modify the array and return some representation of the array.

Array.prototype.concat()
Returns a new array comprised of this array joined with other array(s) and/or value(s).
Array.prototype.join()
Joins all elements of an array into a string.
Array.prototype.slice()
Extracts a section of an array and returns a new array.
Array.prototype.toString()
Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.
Array.prototype.toLocaleString()
Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.
Array.prototype.indexOf()
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
Array.prototype.lastIndexOf()
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.  

Iteration methods

Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

Array.prototype.forEach()
Calls a function for each element in the array.
Array.prototype.every()
Returns true if every element in this array satisfies the provided testing function.
Array.prototype.some()
Returns true if at least one element in this array satisfies the provided testing function.
Array.prototype.filter()
Creates a new array with all of the elements of this array for which the provided filtering function returns true.
Array.prototype.map()
Creates a new array with the results of calling a provided function on every element in this array.
Array.prototype.reduce()
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
Array.prototype.reduceRight()
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.


  

### [`_.reject`](https://lodash.com/docs#reject)

_.reject(collection, [predicate=_.identity], [thisArg])

* The opposite of _.filter; this method returns the elements of collection that predicate does not return truthy for. 
* If a property name is provided for predicate the created ".property" style callback returns the property value of the given element. 
*  If an object is provided for predicate the created ".matches" style callback returns true for elements that have the properties of the given object, else false.
* Arguments
    * collection (Array|Object|string): The collection to iterate over.
    * [predicate=_.identity] (Function|Object|string): The function invoked per iteration. If a property name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
    * [thisArg] (*): The this binding of predicate.
* _returns:_
    * (Array): Returns the new filtered array.


### [`_.where`](https://lodash.com/docs#where)

_.where(collection, source)

* Performs a deep comparison between each element in collection and the source object, returning an array of all elements that have equivalent property values.
* Arguments
    * collection (Array|Object|string): The collection to search.
    * source (Object): The object of property values to match.
* Returns
    * (Array): Returns the new filtered array.
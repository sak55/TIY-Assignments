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
  

### [`_.chunk`](https://lodash.com/docs#chunk)

* Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.

* Arguments
    * array (Array): The array to process.
    * [size=1] (numer): The length of each chunk.
* Returns
    * (Array): Returns the new array containing chunks.

### [`_.compact`](https://lodash.com/docs#compact)
* Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
* Arguments
    * array (Array): The array to compact.
* Returns
    * (Array): Returns the new array of filtered values.


### [`_.difference`](https://lodash.com/docs#difference)
* Creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons. 
* Note: SameValueZero comparisons are like strict equality comparisons, e.g. ===, except that NaN matches NaN. See the ES spec for more details.
* Arguments
    * array (Array): The array to inspect.
    * [values] (…Array): The arrays of values to exclude.
* Returns
* (Array): Returns the new array of filtered values.


### [`_.drop`](https://lodash.com/docs#drop)
* Creates a slice of array with n elements dropped from the beginning.
* Arguments
    * array (Array): The array to query.
    * [n=1] (number): The number of elements to drop.
* Returns
    * (Array): Returns the slice of array.


### [`_.dropRight`](https://lodash.com/docs#dropright)
* Creates a slice of array with n elements dropped from the end.
* Arguments
    * array (Array): The array to query.
    * [n=1] (number): The number of elements to drop.
* Returns
    * (Array): Returns the slice of array.


### [`_.dropRightWhile`](https://lodash.com/docs#dropRightWhile)
* Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is bound to thisArg and invoked with three arguments; (value, index, array). 
* If a property name is provided for predicate the created ".property" style callback returns the property value of the given element. 
* If an object is provided for predicate the created ".matches" style callback returns true for elements that have the properties of the given object, else false.
* Arguments
    * array (Array): The array to query.
    * [predicate=_.identity] (Function|Object|string): The function invoked per element.
    * [thisArg] (*): The this binding of predicate.
* Returns
    * (Array): Returns the slice of array.


### [`_.dropWhile`](https://lodash.com/docs#dropWhile)
* Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is bound to thisArg and invoked with three arguments; (value, index, array). 
* If a property name is provided for predicate the created ".property" style callback returns the property value of the given element. 
* If an object is provided for predicate the created ".matches" style callback returns true for elements that have the properties of the given object, else false.
* Arguments
    * array (Array): The array to query.
    * [predicate=_.identity] (Function|Object|string): The function invoked per element.
    * [thisArg] (*): The this binding of predicate.
* Returns
    * (Array): Returns the slice of array.
    
    
### [`_.findIndex`](https://lodash.com/docs#findIndex)
* This method is like _.find except that it returns the index of the first element predicate returns truthy for, instead of the element itself. 
* If a property name is provided for predicate the created ".property" style callback returns the property value of the given element. 
* If an object is provided for predicate the created ".matches" style callback returns true for elements that have the properties of the given object, else false.
* Arguments
    * array (Array): The array to search.
    * [predicate=_.identity] (Function|Object|string): The function invoked per iteration. If a property name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
    * [thisArg] (*): The this binding of predicate.
* Returns
    * (number): Returns the index of the found element, else -1.


### [`_.findLastIndex`](https://lodash.com/docs#findLastIndex)
* This method is like _.findIndex except that it iterates over elements of collection from right to left. 
* If a property name is provided for predicate the created ".property" style callback returns the property value of the given element. 
* If an object is provided for predicate the created ".matches" style callback returns true for elements that have the properties of the given object, else false.
* Arguments
* array (Array): The array to search.
    * [predicate=_.identity] (Function|Object|string): The function invoked per iteration. If a property name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
    * [thisArg] (*): The this binding of predicate.
* Returns
    * (number): Returns the index of the found element, else -1.


### [`_.first`](https://lodash.com/docs#first)
* Gets the first element of array.
* Arguments
    * array (Array): The array to query.
* Returns
* (*): Returns the first element of array.


### [`_.flatten`](https://lodash.com/docs#flatten)
* Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it is only flattened a single level.
* Arguments
    * array (Array): The array to flatten.
    * [isDeep] (boolean): Specify a deep flatten.
* Returns
* (Array): Returns the new flattened array.


### [`_.flattenDeep`](https://lodash.com/docs#flattenDeep)
* Recursively flattens a nested array.
* Arguments
    * array (Array): The array to recursively flatten.
* Returns
    * (Array): Returns the new flattened array.


### [`_.indexOf`](https://lodash.com/docs#)

### [`_.initial`](https://lodash.com/docs#)

### [`_.intersection`](https://lodash.com/docs#)

### [`_.last`](https://lodash.com/docs#)

### [`_.lastIndexOf`](https://lodash.com/docs#)

### [`_.pull`](https://lodash.com/docs#)

### [`_.pullAt`](https://lodash.com/docs#)

### [`_.remove`](https://lodash.com/docs#)

### [`_.rest`](https://lodash.com/docs#)

### [`_.slice`](https://lodash.com/docs#)

### [`_.sortedIndex`](https://lodash.com/docs#)

### [`_.sortedLastIndex`](https://lodash.com/docs#)

### [`_.take`](https://lodash.com/docs#)

### [`_.takeRight`](https://lodash.com/docs#)

### [`_.takeRightWhile`](https://lodash.com/docs#)

### [`_.takeWhile`](https://lodash.com/docs#)

### [`_.union`](https://lodash.com/docs#)

### [`_.uniq`](https://lodash.com/docs#)

### [`_.unique → uniq`](https://lodash.com/docs#)

### [`_.unzip`](https://lodash.com/docs#)

### [`_.without`](https://lodash.com/docs#)

### [`_.xor`](https://lodash.com/docs#)

### [`_.zip`](https://lodash.com/docs#)

### [`_.zipObject`](https://lodash.com/docs#)


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
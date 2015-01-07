#### Format for _Reading CSS_

Use the following format for your own "Reading CSS" file: `docs/CSS.md`. 
Please note the many values for each property and be sure to denote the default value. 
Also be sure to include `inherit` as a value and whether the property is inherited by 
default. What does that mean, anyway?

----

### 1. `Color`

* *elements:* all
* *inherited:* yes

#### Values

* ```<color>```

### 2. `all`

* *elements:* all
* *inherited:* no

#### Values

* `initial` -- changes all properties of the element to their initial value
* `inherit` -- changes all properties of the element to their parent value
* `unset` -- changes all properties of the element to their parent value if they are inheritable or to their initial value if not

### 3. `background-color`

* *elements:* all
* *inherited:* no

#### Values

* ```<color>```

### 4. `border`

* *elements:* all
* *inherited:* no

#### Values

* ```<br-width>``` -- Default value medium is used if absent
* ```<br-style>``` -- Default value none is used if absent.
* ```<color>``` 

### 5. `clear`

* *elements:* block-level
* *inherited:* no

#### Values

* `none` -- The element is not moved down to clear past floating elements.
* `left` -- The element is moved down to clear past left floats.
* `right` -- The element is moved down to clear past right floats.
* `both`-- The element is moved down to clear past both left and right floats.

### 6. `width`

* *elements:* all
* *inherited:* no

#### Values

* ```<length>```
* ```<percentage>``` -- Specified as a percentage of containing block's width.
* `border-box` -- If present, the preceding <length> or <percentage> is applied to the element's border box.
* `content-box` --If present, the preceding <length> or <percentage> is applied to the element's content box.
*`auto` -- The browser will calculate and select a width for the specified element.
*`max-content` -- The intrinsic preferred width.
*`min-content` -- The intrinsic minimum width.
*`available` -- The containing block width minus horizontal margin, border and padding.
*`fit-content` -- The larger of: the intrinsic minimum width, the smaller of the intrinsic preferred width and the available width

### 7. `margin`

* *elements:* all elements except elements with table display types other than table-caption, table and inline-table.
* *inherited:* no

#### Values

* ```<length>```  -- Specifies a fixed width. Negative Values are allowed. See for <length> possible units.
* ```<percentage>``` -- A percentage relative to the width of the containing block. Negative values are allowed.
* `auto` -- auto is replaced by some suitable value, e.g. it can be used for centering of blocks.
div { width:50%;  margin:0 auto; } centers the div container horizontally.
    
    * One single value applies to all four sides.
    * Two values apply first to top and bottom, the second one to left and right.
    * Three values apply first to top, second to left and right and third to bottom.
    * Four values apply to top, right, bottom and left in that order (clockwise).

### 8. `max-width`

* *elements:* all elements but non-replaced inline elements, table rows, and row groups
* *inherited:* no

#### Values

* `none` -- The width has no maximum value.
* ```<length>``` -- See *length* for possible units.
* ```<percentage>``` -- Specified as a <percentage> of containing block's width.
* `max-content` -- The intrinsic preferred width.
* `min-content` -- The intrinsic minimum width.
* `fill-available` -- The containing block width minus horizontal margin, border and padding. Some browsers implement an ancient name for this keyword, available.
* `fit-content` -- The same as max-content.

### 9. `padding`

* *elements:* all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column
* *inherited:* no

#### Values

* ```<length>``` -- Specifies a non-negative fixed width. See <length> for details.
* ```<percentage>``` -- With respect to the width of the containing block.
    * One single value applies to all 4 sides
    * Two values apply to 1. top and bottom and 2. to the left and right side
    * Three values apply to 1. top, 2. right and left and 3. to the bottom side
    * Four values apply to 1. top, 2. right, 3. bottom and 4. to the left side

### 10. `box-sizing`

* *elements:* all elements that accept width or height
* *inherited:* no

#### Values

* `content-box` -- This is the default style as specified by the CSS standard. The width and height properties are measured including only the content, but not the padding, border or margin. Note: Padding, border & margin will be outside of the box e.g. IF .box {width: 350px}; THEN you apply {border: 10px solid black;} RESULT {rendered in the browser} .box {width: 370px;}
* `padding-box` -- The width and height properties include the padding size, and do not include the border or margin. 
* `border-box` -- The width and height properties include the padding and border, but not the margin. This is the box model used by Internet Explorer when the document is in Quirks mode. Note: Padding & border will be inside of the box e.g. IF .box {width: 350px}; THEN you apply {border: 10px solid black;} RESULT {rendered in the browser} .box {width: 350px;}
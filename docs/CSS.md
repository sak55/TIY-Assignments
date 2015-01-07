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
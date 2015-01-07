
### Format for _Reading HTML_

### Global Attributes

### 1. `accesskey` -- hint for generating shortcuts

* *values:* ?
* *support:* all browsers
* *examples:* on Chrome for Mac Control + Alt + a key



### Common Attributes

#### `class` -- element class names

* *values:* space-separated list of class names
* *support:* all browsers
* *examples:*
```html
<aside class="page--column">
  <!-- . . . -->
</aside> <!-- .page--column -->
<section class="page--column">
  <!-- . . . -->
</section> <!-- .page--column -->
```

### `id` -- unique element identifier

* *values:* single letter character followed by any number of letters, digits, hyphens, underscores, colons or periods
* *support:* all browsers
* *examples:*
```html
<form class="search" id="site-search">
  <!-- . . . -->
</form> <!-- .search#site-search -->
```

### `<form>` -- interactive controls

* *type:* block-level
* *content:* flow content but not `<form>`
* *support:* all browsers
* *examples:* ...

#### `action` -- form submission URL

* *values:* URL of a program that processes a form submission
* *support:* all browsers
* *examples:*
```html
<form action="http://lmgtfy.com/">
  <input name="q">
</form>
```


----
### 1. `<h1>` -- Page Heading, Level 1

* *type:* block-level
* *content:* phrasing content[1]
* *support:* all browsers
* *attributes:* Global 
* *example:*
```
<h1>The Iron Yard | Orlando</h1>
```
<h1>The Iron Yard | Orlando</h1>


### 2. `<header>` -- Header, Level 2

* *type:* block-level
* *content:* flow content[1]
* *support:* Desktop Basic, Mobile Basic
* *attributes:* Global 
* *example:*
```
<header>I am a header </header>
```
<header>I am a header </header>

### 3. `<address>` -- Address

* *type:* block-level
* *content:* Flow content
* *support:* all browsers Basic Support
* *attributes:* Global 
* *example:*
```
<address>
The Iron Yard</br>
101 S Garland Ave.</br>
Orlando, FL<br/>
USA</br>
</address>
```
<address>
The Iron Yard</br>
101 S Garland Ave.</br>
Orlando, FL<br/>
USA</br>
</address>

### 4. `<article>` -- Article

* *type:* block-level
* *content:* Flow content
* *support:* all browsers Basic Support
* *attributes:* Global 
* *example:*
```
<article>
  <h4>Article about nothing</h4>
  <p>Here is where the text would be about this article if it was about something.</p>
</article>
```
<article>
  <h4>Article about nothing</h4>
  <p>Here is where the text would be about this article if it was about something.</p>
</article>

### 5. `<aside>` -- Aside Comment

* *type:* block-level
* *content:* Flow content
* *support:* all browsers Basic Support
* *attributes:* Global 
* *example:*
```
<aside>This is a side comment to the article that wasnt written.</aside>
```
<aside>This is a side comment to the article that wasnt written.</aside>

### 6. `<hr>` -- Horizontal rule

* *type:* block-level
* *content:* empty element
* *support:* all browsers Basic Support
* *attributes:* Global 
* *example:*
```
<p>Above the line</p>
<hr>
<p>Below the line.</p>
```
<p>Above the line</p>
<hr>
<p>Below the line.</p>

### 7. `<table>` -- Table

* *type:* block-level
* *content:* Flow content
* *support:* all browsers Basic Support
* *attributes:* Global 
* *example:*
```
<table>
  <tr>
    <td>First Name</td>
    <td>Last Name</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```
<table>
  <tr>
    <td>First Name</td>
    <td>Last Name</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>

### 8. `<h1>` -- Heading Level1

* *type:* block-level
* *content:* Phrasing content
* *support:* all browsers Basic Support
* *attributes:* Global 
* *example:*
```
<h1>I am the Header to all headers</h1>
```
<h1>I am the Header to all headers</h1>

### 9. `<footer>` -- Footer

* *type:* block-level
* *content:* Flow content
* *support:* all browsers Basic Support
* *attributes:* Global 
* *example:*
```
<footer>
  Some copyright info... NOT!!!!
</footer>
```
<footer>
  Some copyright info... NOT!!!!
</footer>

### 10. `<tfoot>` -- Table Footer

* *type:* block-level
* *content:* Flow content
* *support:* all browsers Basic Support
* *attributes:* Global 
* *example:*
```
<tfoot>
<tr>
<td>last line 1</td>
<td>Last line 2</td>
</tr>
  </tfoot>
```
<tfoot>
<tr>
<td>last line 1</td>
<td>Last line 2</td>
</tr>
  </tfoot>
  
### 11. `<tfoot>` -- Table Footer

* *type:* block-level
* *content:* Phrasing content
* *support:* all browsers Basic Support
* *example:*
```
<pre>
these words are not pre formatted
  </pre>
```
<pre>
these words are not pre formatted
  </pre>
  
### 12. `<big>` -- Makes text size one size bigger

* *type:* inline
* *content:* Phrasing content
* *support:* all browsers Basic Support
* *example:*
```
<big>
these words are big(er) than the line before
  </big>
```
<big>
these words are big(er) than the line before
</big>
  
### 13. `<small>` -- Makes text size one size smaller

* *type:* inline
* *content:* Phrasing content
* *support:* all browsers Basic Support
* *example:*
```
<small>
these words are small(er) than the line before
  </small>
```
<small>
these words are small(er) than the line before
  </small>
  
### 14. `<abbr>` -- Makes abbreviations

* *type:* inline
* *content:* Phrasing content
* *support:* all browsers Basic Support
* *example:*
```
I was born in <abbr title="Florida">FL</abbr>
```
I was born in <abbr title="Florida">FL</abbr>

### 15. `<code>` -- adds code to regular text

* *type:* inline
* *content:* Phrasing content
* *support:* all browsers Basic Support
* *example:*
```
blah blah blah <code>Code lives here</code> blah blah blah
```
blah blah blah <code>Code lives here</code> blah blah blah

### 16. `<em>` --  element marks text that has stress emphasis.

* *type:* inline
* *content:* Phrasing content
* *support:* all browsers Basic Support
* *example:*
```
blah blah blah <em>are you paying attention</em> blah blah blah
```
blah blah blah <em>are you paying attention</em> blah blah blah

### 17. `<strong>` --  Strong Element gives text strong importance, and is typically displayed in bold.

* *type:* inline
* *content:* Phrasing content
* *support:* all browsers Basic Support
* *example:*
```
blah blah blah <strong>start listening to me</strong> blah blah blah
```
blah blah blah <strong>start listening to me</strong> blah blah blah

### 18. `<a>` --  Element to define a hyperlink

* *type:* inline
* *content:* transparent
* *support:* all browsers Basic Support
* *example:*
```
blah blah blah <a href="https://en.wikipedia.org/wiki/Hyperlink/"> HyperLink </a> blah blah blah
```
blah blah blah <a href="https://en.wikipedia.org/wiki/Hyperlink/"> HyperLink </a> blah blah blah

### 19. `<q>` --  indicates that the enclosed text is a short inline quotation

* *type:* inline
* *content:* phrasing
* *support:* all browsers Basic Support
* *example:*
```
blah blah blah, <q>That is what I said.</q> blah blah blah
```
blah blah blah, <q>That is what I said.</q> blah blah blah

### 20. `<select>` --  indicates that the enclosed text is a short inline quotation

* *type:* inline
* *content:* phrasing
* *support:* all browsers Basic Support
* *example:*
```
blah blah blah, I <select name="select">
  <option value="love you">love you</option> 
  <option value="hate you" selected>hate you</option>
  <option value="am hungry">am hungry</option>
</select> blah blah blah
```
blah blah blah, I <select name="select">
  <option value="love you">love you</option> 
  <option value="hate you" selected>hate you</option>
  <option value="am hungry">am hungry</option>
</select> blah blah blah
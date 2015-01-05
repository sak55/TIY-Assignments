### 10 block-level HTML elements 

Preformated text
```
<pre>
```
Table
```
<table>
```
Table Folder
```
<tfoot>
```
Video Player
```
<video>
```
Field Set Label
```
<fieldset>
```
Contact Information
```
<address>
```
Long ("block") quotation
```
<blockquote>
```
Definition description
```
<dd>
```
Section or Page Header
```
<header>
```
### _Reading HTML_

----
### 1. `<form>` -- Input Form, Level 1

* *type:* block-level
* *content:* Flow content, but not containing <form> elements
* *support:* DeskTop - Basic:Chrome 1.0, Firefox 1.0, IE, Opera, Safari, novalidate attribute: Chrome1.0, Firefox 4.0, IE 10.0, Opera ?, Safari ? Mobile - Basic support Chrome, Firefox 1.0, IE, Opera, Safari, novalidate attribute: Chrome ?, Firefox 4.0, IE, Opera ?, Safari ?
* *example:*
```
<!-- Simple form which will send a GET request -->
<form action="">
  <label for="GET-name">Name:</label>
  <input id="GET-name" type="text" name="name">
  <input type="submit" value="Save">
</form>

<!-- Simple form which will send a POST request -->
<form action="" method="post">
  <label for="POST-name">Name:</label>
  <input id="POST-name" type="text" name="name">
  <input type="submit" value="Save">
</form>

<!-- Form with fieldset, legend, and label -->
<form action="" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" name="radio" id="radio"> <label for="radio">Click me</label>
  </fieldset>
</form>
```
<h1><!-- Simple form which will send a GET request -->
<form action="">
  <label for="GET-name">Name:</label>
  <input id="GET-name" type="text" name="name">
  <input type="submit" value="Save">
</form>

<!-- Simple form which will send a POST request -->
<form action="" method="post">
  <label for="POST-name">Name:</label>
  <input id="POST-name" type="text" name="name">
  <input type="submit" value="Save">
</form>

<!-- Form with fieldset, legend, and label -->
<form action="" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" name="radio" id="radio"> <label for="radio">Click me</label>
  </fieldset>
</form></h1>


### 2. `<h2>` -- Page Heading, Level 2

* *type:* block-level
* *content:* phrasing content[1]
* *support:* all browsers
* *example:*
```
<h2>Search</h2>
```
<h2>Search</h2>

### 3. `<p>` -- Paragraph

* *type:* block-level
* *content:* phrasing content[1]
* *support:* all browsers
* *example:*
```
<p> The quick brown fox jumped over the lazy dog. </p>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit enim id massa auctor, in rhoncus tellus tincidunt. Praesent non convallis ligula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ante nulla, auctor eget accumsan a, malesuada ac elit. </p>
<p> Lines
don't
matter. </p>
```
<p> The quick brown fox jumped over the lazy dog. </p>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit enim id massa auctor, in rhoncus tellus tincidunt. Praesent non convallis ligula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ante nulla, auctor eget accumsan a, malesuada ac elit. </p>
<p> Lines
don't
matter. </p>

### Footnotes:

1. [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)

----

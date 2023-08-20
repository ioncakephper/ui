# uijs-kit

Framework for building UI elements programmatically using JavaScript.

## Introduction

Are you a JavaScript developer and want to create UI elements quickly with a consistent Bootstrap code? Take a look at `UIJS-KIT`. Out of the box, it provides functions to generate UI element. For example: 

- `textField` function creates the HTML code for `<input type="text" .../>` and provides the `label` tag for the input field. All is encapsulated with a `.form-group`.
- functions for popular input UI elements: checkboxes, boolean, color, radio, select, textarea, color, time, url, date, datetime, datetime-local, or week.
- quick indicator for required fields: a trailing asterisk (*) in the label field.
- options field allows you to specify custom name and id attributes. You can also add additional properties and use them in field type templates. 

## Installation

```bash
npm i uijs-kit --save
```

## Usage

```js
const {textField, colorField} = require('uijs-kit')

let fields = [
  textField('First name'), // optional. Label, name, and id properties derived from text parameter
  textField('Last name*'), // required (see trailing asterisk). Label, name, required, and id properties derived from text parameter
  colorField('Background color', {name: 'bg-color'}), // optional. Label derived from text parameter, name and id specified in name property
]

let values = {}
let renderedFields = fields.map(field => field.render(values))

console.log(JSON.stringify(renderedFields))
```

### SelectField: field with choices

```js
const {selectField} = require('uijs-kit');

// choices as array of objects with label and value properties
let choices = ["Choice 1", "Choice 2"].map((label, value) => {
  return {
    label,
    value: `${value}`
  }
})

// generate the selectField and pass the choices
let f = selectField('Select', choices);

let values = {select: '1'}; // a record storing values for fields

let html = f.render(values);
console.log(html);

// <div class="form-group" id="select-group">
//     <label for="select">Select:</label>
// <select name="select" id="select" class="form-control">
//     <option value="0">Choice 1</option>
//     <option value="1" selected="selected">Choice 2</option>
// </select>
// </div>
```

## Contributing

If you are interested in reporting/fixing issues and contributing directly to the code base, please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

## License

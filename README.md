# uijs-kit

Framework for building UI elements programmatically using JavaScript.

## Introduction

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

## License

=======
>>>>>>> 59f38b8 (Create README.md)

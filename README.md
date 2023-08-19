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

## Contributing

## License


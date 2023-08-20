<h1 align="center">Welcome to uijs-kit 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/uijs-kit" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/uijs-kit.svg">
  </a>
  <a href="https://github.com/ioncakephper/ui#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ioncakephper/ui/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ioncakephper/ui/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/ioncakephper/ui" />
  </a>
</p>

> Framework for building UI elements programmatically using JavaScript.

### 🏠 [UIJS-KIT Homepage](https://github.com/ioncakephper/ui)

## Introduction

Are you a JavaScript developer and want to create UI elements quickly with a consistent Bootstrap code? Take a look at `UIJS-KIT`. Out of the box, it provides functions to generate UI element. For example: 

- `textField` function creates the HTML code for `<input type="text" .../>` and provides the `label` tag for the input field. All is encapsulated with a `.form-group`.
- functions for popular input UI elements: checkboxes, boolean, color, radio, select, textarea, color, time, url, date, datetime, datetime-local, or week.
- quick indicator for required fields: a trailing asterisk (*) in the label field.
- options field allows you to specify custom name and id attributes. You can also add additional properties and use them in field type templates.

## Install

```sh
npm install uijs-kit
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


## Run tests

```sh
npm run test
```

## Author

👤 **Ion Gireada**

* Github: [@ioncakephper](https://github.com/ioncakephper)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ioncakephper/ui/issues). You can also take a look at the [contributing guide](https://github.com/ioncakephper/ui/blob/master/CONTRIBUTING.md).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/iongireada">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2023 [Ion Gireada](https://github.com/ioncakephper).<br />
This project is [MIT](https://github.com/ioncakephper/ui/blob/master/LICENSE) licensed.

  <a href="https://github.com/ioncakephper/ui/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/ioncakephper/ui" />
  </a>


---
sidebar_label: Getting started
---

# Getting started

## Installation

```bash
npm i uijs-kit
```

## Usage


```js title="Create and render a single field"
const ui = require('uijs-kit');

// create textField
let tf = ui.textField('First name', {
  description: 'An optional field. To make it required, append an asterisk in textField first argument or add the required: true in the second argument'
})

let h = tf.render();
console.log(h)
```

```js title="Create and render a list of fields"
const ui = require('uijs-kit');

let formFields = [
    ui.textField('First name'),
    ui.textField('Last name*'), // use trailing * to create a required field
    ui.dateField('Date of birth', {name: 'dob'})
]

// render all fields in formFields
let h = formFields.map(field => field.render()).join('')
console.log(h)
```


```js title="Create a formField and render it"
const ui = require('uijs-kit');

let formFields = [
    ui.textField('First name'),
    ui.textField('Last name*'), // use trailing * to create a required field
    ui.dateField('Date of birth', {name: 'dob'}),
    ui.booleanField('In charge', {description: 'Whether the person is in charge'})
]

let form = ui.formField('Sample form', formFields);
let h = form.render()
console.log(h)
```

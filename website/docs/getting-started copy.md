---
sidebar_label: Getting started
---

# Getting started

## Installation

```bash
npm i uijs-kit
```

## Usage

```js
const ui = require('uijs-kit');

// create textField
let tf = ui.textField('First name', {description: 'An optional field. To make it required, append an asterisk in textField first argument or add the required: true in the second argument'})

let h = tf.render();
console.log(h)
```

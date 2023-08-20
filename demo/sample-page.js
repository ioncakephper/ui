const { textField, colorField, numberField, booleanField, dateField, datetimeField, datetimelocalField, emailField, fileField, hiddenField, imageField, monthField, passwordField, rangeField, searchField, telField, timeField, urlField, textareaField, selectField, radioField, checkboxesField, formField } = require("../lib/ui-field-shortcuts");
const {saveDocument} = require("file-easy");
const hbsr = require("hbsr");

let choices = [
    'Choice 1',
    'Choice 2', 
].map((label, value) => {
    return {
        label, 
        value: `${value}`, 
    }
})
let fields = [
    booleanField('Required', {description: `Checkbox field description goes here`}),
    checkboxesField('Checkboxes 1', choices),
    checkboxesField('Checkboxes', choices),
    colorField('Background color'),
    colorField('Text color'),
    dateField('Date'),
    datetimeField('Datetime'),
    datetimelocalField('Datetime-local'),
    emailField('Email'),
    fileField('File'),
    hiddenField('Hidden'),
    imageField('Image'), 
    monthField('Month'),
    numberField('Width'),
    passwordField('Password'),
    radioField('Radio 1', choices),
    radioField('Radio', choices),
    rangeField('Range'),
    searchField('Search'),
    selectField('My selected choice', choices, {name: 'selected-choice'}),
    selectField('Select', choices),
    telField('Tel'),
    textareaField('Textarea'),
    textField('First name'),
    textField('Last name*'),
    timeField('Time'),
    urlField('URL'),
]
fields = fields.map(field => {
    field.props.templateOptions = {
        template_path: `${__dirname}/../templates`,
        template_extension: '.hbs',
    }
    return field;
})

fields = [
    formField('Form', fields),
]
fields = fields.map(field => {
    field.props.templateOptions = {
        template_path: `${__dirname}/../templates`,
        template_extension: '.hbs',
    }
    return field;
})

let values = {
    firstName: 'John',
    lastName: 'Doe',
    'selected-choice': '1',
    'radio-1': '1',
    'checkboxes': ['0', '1'],
}


let result = fields.map(field => {
    return field.render(values)
})

let pageContent = hbsr.render_template('page', {content: result.join('')}, {template_path: `${__dirname}/../templates`, template_extension: '.hbs'})

saveDocument('sample-page.html', pageContent) 

  
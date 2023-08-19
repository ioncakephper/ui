const { textField, colorField, numberField, booleanField, dateField, datetimeField, datetimelocalField, emailField, fileField, hiddenField, imageField, monthField, passwordField, rangeField, searchField, telField, timeField, urlField, textareaField, selectField } = require("../lib/ui-field-shortcuts");
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
    selectField('Select', choices),
    selectField('My selected choice', choices, {name: 'selected-choice'}),
    textField('First name'),
    textField('Last name*'),
    colorField('Background color'),
    colorField('Text color'),
    numberField('Width'),
    booleanField('Required', {description: `Checkbox field description goes here`}),
    dateField('Date'),
    datetimeField('Datetime'),
    datetimelocalField('Datetime-local'),
    emailField('Email'),
    fileField('File'),
    hiddenField('Hidden'),
    imageField('Image'), 
    monthField('Month'),
    passwordField('Password'),
    rangeField('Range'),
    searchField('Search'),
    telField('Tel'),
    textareaField('Textarea'),
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

let values = {
    firstName: 'John',
    lastName: 'Doe',
    'selected-choice': '1',
}

let result = fields.map(field => {
    return field.render(values)
})

let pageContent = hbsr.render_template('page', {content: result.join('')}, {template_path: `${__dirname}/../templates`, template_extension: '.hbs'})

saveDocument('sample-page.html', pageContent) 

  
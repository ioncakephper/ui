const hbsr = require('hbsr');
const {saveDocument} = require('file-easy');

let template 
template = `
const {UiField, UiItemsField} = require('./ui-field');

/* The \`UiTextField\` class is a subclass of \`UiField\` that represents a text input field in a user
interface. */
class UiTextField extends UiField {
    constructor(props = {}) {
        super(props);
        this.props.type = 'text';
    }
}
{{#each fields as |field|}}

/* The \`Ui{{{field.Label}}}Field\` class is a subclass of \`UiTextField\` that represents a text field specifically
for inputting {{{field.type}}}s. */
class Ui{{{field.Label}}}Field extends UiTextField {

    constructor(props = {}) {
        super(props);
        this.props.type = '{{{field.type}}}';
    }

    /**
     * Returns the template filename.
     *
     * @return {string} The template filename.
     */
    getTemplateFilename() {
        return \`ui-text\`;
    }
}
{{/each}}

module.exports = {
    UiTextField,
{{#each fields as |field|}}
    Ui{{{field.Label}}}Field,
{{/each}}
}
`;
let variables = {
    fields: [
        {
            Label: 'Date',
            type: 'date',
        },
        {
            Label: 'Time',
            type: 'time',
        },
        {
            Label: 'Color',
            type: 'color',
        },
        {
            Label: 'File',
            type: 'file',
        },
        {
            Label: 'Range',
            type: 'range',
        },
        {
            Label: 'Email',
            type: 'email',
        },
        {
            Label: 'Password',
            type: 'password',
        },
        {
            Label: 'Url',
            type: 'url',
        },
        {
            Label: 'Number',
            type: 'number',
        },
        {
            Label: 'Form',
            type: 'form',
        }
    ].sort((a, b) => a.Label.localeCompare(b.Label)),
}
let content 
content = hbsr.render(template, variables)
saveDocument('ui-basic-fields.js', content)

let {fields} = variables;
fields.push({Label: 'Text', type: 'text'});
fields = fields.sort((a, b) => a.Label.localeCompare(b.Label));
variables.fields = fields;

template = `
const {
{{#each fields as |field|}}
    Ui{{{field.Label}}}Field,
{{/each}}
} = require('./ui-basic-fields');

/**
 * Extracts the label and required status from the given label.
 *
 * @param {string} label - The label to extract information from.
 * @return {object} An object containing the extracted label and required status.
 */
function extractLabelAndRequired(label) {
    return {
        label: sanitizeLabel(label),
        required: itSuggestsRequired(label),
    }
}

/**
 * Checks if the given label ends with an asterisk symbol.
 *
 * @param {string} label - The label to be checked.
 * @return {boolean} True if the label ends with an asterisk, false otherwise.
 */
function itSuggestsRequired(label) {
    return label.trim().endsWith('*');
}

/**
 * Sanitizes the given label by removing leading and trailing whitespace, as well as any trailing asterisks.
 *
 * @param {string} label - The label to be sanitized.
 * @return {string} The sanitized label.
 */
function sanitizeLabel(label) {
    return label.trim().replace(/\s+\*+$/g, '').replace(/\s\s+/g, ' ');
}

{{#each fields as |field|}}
/**
 * A function that creates a {{{field.type}}} field with the given label and options.
 *
 * @param {string} label - The label for the {{{field.type}}} field.
 * @param {Object} options - Additional options for the {{{field.type}}} field (default: {}).
 * @returns {Ui{{{field.Label}}}Field} - The created {{{field.type}}} field.
 */
function {{{field.type}}}Field(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new Ui{{{field.Label}}}Field(options);
}

{{/each}}

module.exports = {
{{#each fields as |field|}}
    {{{field.type}}}Field,
{{/each}}
    sanitizeLabel,
    itSuggestsRequired,
}
`
content = hbsr.render(template, variables);
saveDocument('ui-field-shortcuts.js', content)
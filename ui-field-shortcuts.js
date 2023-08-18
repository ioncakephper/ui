
const {
    UiColorField,
    UiDateField,
    UiEmailField,
    UiFileField,
    UiFormField,
    UiNumberField,
    UiPasswordField,
    UiRangeField,
    UiTextField,
    UiTimeField,
    UiUrlField,

    UiBooleanField,
    UiCheckboxesField,
    UiRadioField,

    UiSelectField,
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
    return label.trim().replace(/\s*\*+$/g, '').replace(/ss+/g, ' ');
}

/**
 * A function that creates a color field with the given label and options.
 *
 * @param {string} label - The label for the color field.
 * @param {Object} options - Additional options for the color field (default: {}).
 * @returns {UiColorField} - The created color field.
 */
function colorField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiColorField(options);
}

/**
 * A function that creates a date field with the given label and options.
 *
 * @param {string} label - The label for the date field.
 * @param {Object} options - Additional options for the date field (default: {}).
 * @returns {UiDateField} - The created date field.
 */
function dateField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiDateField(options);
}

/**
 * A function that creates a email field with the given label and options.
 *
 * @param {string} label - The label for the email field.
 * @param {Object} options - Additional options for the email field (default: {}).
 * @returns {UiEmailField} - The created email field.
 */
function emailField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiEmailField(options);
}

/**
 * A function that creates a file field with the given label and options.
 *
 * @param {string} label - The label for the file field.
 * @param {Object} options - Additional options for the file field (default: {}).
 * @returns {UiFileField} - The created file field.
 */
function fileField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiFileField(options);
}

/**
 * A function that creates a form field with the given label and options.
 *
 * @param {string} label - The label for the form field.
 * @param {Object} options - Additional options for the form field (default: {}).
 * @returns {UiFormField} - The created form field.
 */
function formField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiFormField(options);
}

/**
 * A function that creates a number field with the given label and options.
 *
 * @param {string} label - The label for the number field.
 * @param {Object} options - Additional options for the number field (default: {}).
 * @returns {UiNumberField} - The created number field.
 */
function numberField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiNumberField(options);
}

/**
 * A function that creates a password field with the given label and options.
 *
 * @param {string} label - The label for the password field.
 * @param {Object} options - Additional options for the password field (default: {}).
 * @returns {UiPasswordField} - The created password field.
 */
function passwordField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiPasswordField(options);
}

/**
 * A function that creates a range field with the given label and options.
 *
 * @param {string} label - The label for the range field.
 * @param {Object} options - Additional options for the range field (default: {}).
 * @returns {UiRangeField} - The created range field.
 */
function rangeField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiRangeField(options);
}

/**
 * A function that creates a text field with the given label and options.
 *
 * @param {string} label - The label for the text field.
 * @param {Object} options - Additional options for the text field (default: {}).
 * @returns {UiTextField} - The created text field.
 */
function textField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiTextField(options);
}

/**
 * A function that creates a time field with the given label and options.
 *
 * @param {string} label - The label for the time field.
 * @param {Object} options - Additional options for the time field (default: {}).
 * @returns {UiTimeField} - The created time field.
 */
function timeField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiTimeField(options);
}

/**
 * A function that creates a url field with the given label and options.
 *
 * @param {string} label - The label for the url field.
 * @param {Object} options - Additional options for the url field (default: {}).
 * @returns {UiUrlField} - The created url field.
 */
function urlField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiUrlField(options);
}

function booleanField(label, options = {}) {
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiBooleanField(options);
}

function checkboxesField(label, items = [], options = {}) {
    options = {...options, ...{items}}
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiCheckboxesField(options);
}

function radioField(label, items = [], options = {}) {
    options = {...options, ...{items}}
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiRadioField(options);
}

function selectField(label, items = [], options = {}) {
    options = {...options, ...{items}}
    options = {...options, ...extractLabelAndRequired(label)}
    return new UiSelectField(options);
}

module.exports = {
    colorField,
    dateField,
    emailField,
    fileField,
    formField,
    numberField,
    passwordField,
    rangeField,
    textField,
    timeField,
    urlField,
    sanitizeLabel,
    itSuggestsRequired,

    booleanField,
    checkboxesField,
    radioField,

    selectField,
}

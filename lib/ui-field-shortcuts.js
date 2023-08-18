const { isEmpty } = require("lodash")
const { UiTextField, UiNumberField, UiColorField } = require("./ui-basic-fields")


/**
 * The function `colorField` creates a new UiColorField object with the provided label and options.
 * @param [label] - A string representing the label for the color field. It is an optional parameter
 * and defaults to an empty string if not provided.
 * @param [options] - An object that contains additional configuration options for the color field.
 * These options can include properties such as the default color, the available color options, and any
 * event handlers for when the color is changed.
 * @returns a new instance of the `UiColorField` class with the provided `options`.
 */
function colorField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiColorField(options)
}

/**
 * The function "numberField" creates a new number input field with an optional label and additional
 * options.
 * @param [label] - A string representing the label for the number field. It is an optional parameter
 * and defaults to an empty string if not provided.
 * @param [options] - An object that contains additional options for the number field. These options
 * can include properties such as minimum and maximum values, step size, default value, and any other
 * configuration options specific to the number field component.
 * @returns a new instance of the `UiNumberField` class with the provided options.
 */
function numberField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiNumberField(options)
}
    
/**
 * The function `textField` creates a new instance of `UiTextField` with the provided label and
 * options.
 * @param [label] - The label parameter is a string that represents the label or placeholder text for
 * the text field. It is optional and defaults to an empty string if not provided.
 * @param [options] - The `options` parameter is an object that contains additional configuration
 * options for the `UiTextField` component. These options can include properties such as `placeholder`,
 * `maxLength`, `defaultValue`, `disabled`, etc.
 * @returns a new instance of the `UiTextField` class with the provided options.
 */
function textField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiTextField(options)
}

/**
 * The function `getLabelAndRequired` returns an object with a sanitized label and a boolean indicating
 * if the label suggests that it is required.
 * @param [label] - The `label` parameter is a string that represents the label for a form field.
 * @returns an object with two properties: "label" and "required". The value of the "label" property is
 * the result of calling the "sanitizeLabel" function with the "label" parameter as an argument. The
 * value of the "required" property is the result of calling the "itSuggestsRequired" function with the
 * "label" parameter as an argument.
 */
function getLabelAndRequired(label = '') {
    return {
        label: sanitizeLabel(label),
        required: itSuggestsRequired(label)
    }
}

/**
 * The `sanitizeLabel` function takes a label as input, removes trailing asterisks and leading/trailing
 * whitespace, and returns the sanitized label or 'No label' if the resulting label is empty.
 * @param label - The `label` parameter is a string that represents a label.
 * @returns the sanitized label. If the label is empty or consists only of asterisks at the end, it
 * will return 'No label'. Otherwise, it will return the trimmed label with any trailing asterisks
 * removed.
 */
function sanitizeLabel(label) {
    let result = label.trim().replace(/\*+$/, '').trim()
    if (isEmpty(result)) {
        result = 'No label'
    }
    return result;
}

/**
 * The function checks if a label ends with an asterisk (*) to suggest that it is required.
 * @param label - The label parameter is a string that represents the label of a form field.
 * @returns a boolean value indicating whether the label ends with an asterisk (*) after trimming any
 * whitespace.
 */
function itSuggestsRequired(label) {
    return label.trim().endsWith('*');
}

module.exports = {
    colorField,
    numberField,
    textField,

    getLabelAndRequired,
    sanitizeLabel,
    itSuggestsRequired,
}
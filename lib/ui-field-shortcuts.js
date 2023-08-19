const { isEmpty } = require("lodash")
const { 
    UiBooleanField,
    UiColorField,
    UiDateField,
    UiDateTimeField,
    UiDateTimeLocalField,
    UiEmailField,
    UiFileField,
    UiHiddenField,
    UiImageField,
    UiMonthField,
    UiNumberField,
    UiPasswordField,
    UiRangeField,
    UiSearchField,
    UiTelField, 
    UiTextareaField,
    UiTextField, 
    UiTimeField,
    UiUrlField,

    UiSelectField,

} = require("./ui-basic-fields")

/**
 * The function `booleanField` creates a boolean field with a label and optional additional options.
 * @param [label] - The `label` parameter is a string that represents the label or name of the boolean
 * field. It is an optional parameter, so if no value is provided, the field will not have a label.
 * @param [options] - The `options` parameter is an object that contains additional configuration
 * options for the `UiBooleanField` component. These options can include properties such as
 * `defaultValue`, `disabled`, `onChange`, etc.
 * @returns a new instance of the `UiBooleanField` class with the provided options.
 */
function booleanField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiBooleanField(options)
}

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
 * The function `textareaField` creates a textarea input field with a label and optional additional
 * options.
 * @param [label] - A string representing the label for the textarea field. It is an optional parameter
 * and defaults to an empty string if not provided.
 * @param [options] - An object that contains additional options for the textarea field. These options
 * can include properties such as placeholder, value, rows, cols, and disabled.
 * @returns a new instance of the `UiTextareaField` class with the provided options.
 */
function textareaField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiTextareaField(options)
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
 * The function `dateField` creates a new date field with a label and optional additional options.
 * @param [label] - A string that represents the label for the date field. It is an optional parameter
 * and defaults to an empty string if not provided.
 * @param [options] - An object that contains additional options for the date field. These options can
 * include properties such as the default value, minimum and maximum date, and any custom validation
 * rules.
 * @returns a new instance of the `UiDateField` class with the provided `options` object.
 */
function dateField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiDateField(options)
}

/**
 * The function `datetimeField` creates a new `UiDateTimeField` object with the provided label and
 * options.
 * @param [label] - A string representing the label for the datetime field. It is an optional parameter
 * and defaults to an empty string if not provided.
 * @param [options] - An object that contains additional options for the UiDateTimeField. These options
 * can include properties such as format, initialDate, minDate, maxDate, and onChange.
 * @returns a new instance of the `UiDateTimeField` class with the provided `options`.
 */
function datetimeField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiDateTimeField(options)
}

/**
 * The function `datetimelocalField` creates a new instance of `UiDateTimeLocalField` with the provided
 * label and options.
 * @param [label] - The label parameter is a string that represents the label or name of the field. It
 * is used to provide a descriptive name for the field in the user interface.
 * @param [options] - An object that contains additional configuration options for the
 * `UiDateTimeLocalField` component. These options can include properties such as `defaultValue`,
 * `disabled`, `onChange`, etc.
 * @returns a new instance of the `UiDateTimeLocalField` class with the provided options.
 */
function datetimelocalField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiDateTimeLocalField(options)
}

/**
 * The function creates an email input field with an optional label and additional options.
 * @param [label] - A string that represents the label for the email field. It is an optional parameter
 * and defaults to an empty string if not provided.
 * @param [options] - An object that contains additional options for the email field. These options can
 * include properties such as placeholder text, default value, validation rules, and event handlers.
 * @returns a new instance of the `UiEmailField` class with the provided options.
 */
function emailField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiEmailField(options)
}

/**
 * The function `fileField` creates a new instance of `UiFileField` with the provided label and
 * options.
 * @param [label] - The label parameter is a string that represents the label or name of the file
 * field. It is optional and can be left empty if no label is needed for the field.
 * @param [options] - An object that contains additional options for the file field. These options can
 * include properties such as the field's name, value, placeholder, and event handlers.
 * @returns a new instance of the `UiFileField` class with the `options` object as its parameter.
 */
function fileField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiFileField(options)
}

/**
 * The function `hiddenField` creates a hidden field with an optional label and additional options.
 * @param [label] - The label parameter is a string that represents the label for the hidden field. It
 * is optional and defaults to an empty string if not provided.
 * @param [options] - An object that contains additional options for the hidden field. These options
 * can include properties such as the field's name, value, and any additional attributes or classes
 * that should be applied to the field.
 * @returns a new instance of the `UiHiddenField` class with the `options` object as its parameter.
 */
function hiddenField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiHiddenField(options)
}

/**
 * The function `imageField` creates a new image field with a label and optional additional options.
 * @param [label] - The label parameter is a string that represents the label or title for the image
 * field. It is optional and can be left empty if no label is needed.
 * @param [options] - An object that contains additional options for the image field. These options can
 * include properties such as the field's name, value, placeholder, and event handlers.
 * @returns a new instance of the `UiImageField` class with the `options` object as its parameter.
 */
function imageField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiImageField(options)
}

/**
 * The function `monthField` creates a new month field UI component with an optional label and
 * additional options.
 * @param [label] - A string representing the label for the month field. It is an optional parameter
 * and defaults to an empty string if not provided.
 * @param [options] - An object that contains additional options for the month field. These options can
 * include properties such as defaultValue, placeholder, disabled, and onChange.
 * @returns a new instance of the `UiMonthField` class with the provided options.
 */
function monthField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiMonthField(options)
}

/**
 * The function creates a password field with a label and optional additional options.
 * @param [label] - The label parameter is a string that represents the label or name of the password
 * field. It is optional and can be left empty if no label is needed for the field.
 * @param [options] - An object that contains additional options for the password field. These options
 * can include properties such as placeholder, maxLength, minLength, and disabled.
 * @returns a new instance of the `UiPasswordField` class with the provided options.
 */
function passwordField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiPasswordField(options)
}

/**
 * The function `rangeField` creates a range field UI element with a label and optional additional
 * options.
 * @param [label] - A string representing the label for the range field. It is an optional parameter
 * and defaults to an empty string if not provided.
 * @param [options] - An object that contains additional options for the range field. These options can
 * include properties such as min, max, step, and value, which define the range of values and the
 * initial value of the range field.
 * @returns a new instance of the `UiRangeField` class with the `options` object as its parameter.
 */
function rangeField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiRangeField(options)
}

/**
 * The function `searchField` creates a new instance of `UiSearchField` with the provided label and
 * options.
 * @param [label] - The label parameter is a string that represents the label or title of the search
 * field. It is optional and defaults to an empty string if not provided.
 * @param [options] - The `options` parameter is an object that contains additional configuration
 * options for the `UiSearchField` component. These options can include properties such as
 * `placeholder`, `defaultValue`, `onChange`, etc.
 * @returns a new instance of the `UiSearchField` class with the `options` object as its parameter.
 */
function searchField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiSearchField(options)
}

/**
 * The function `telField` creates a new `UiTelField` object with optional label and options.
 * @param [label] - A string that represents the label for the telephone field. It is an optional
 * parameter and defaults to an empty string if not provided.
 * @param [options] - An object that contains additional configuration options for the `UiTelField`
 * component.
 * @returns a new instance of the `UiTelField` class with the provided options.
 */
function telField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiTelField(options)
}

function selectField(label = '', choices = [], options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    options = {
        ...options,
        ...{options: choices}
    }
    return new UiSelectField(options)
}

/**
 * The function `timeField` creates a time field UI element with an optional label and additional
 * options.
 * @param [label] - A string that represents the label for the time field. It is an optional parameter
 * and defaults to an empty string if not provided.
 * @param [options] - An object that contains additional configuration options for the time field.
 * These options can include properties such as the default value, minimum and maximum time values, and
 * any custom validation rules.
 * @returns a new instance of the `UiTimeField` class with the provided `options`.
 */
function timeField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiTimeField(options)
}

/**
 * The function `urlField` creates a URL input field with an optional label.
 * @param [label] - The label parameter is a string that represents the label or name of the URL field.
 * It is optional and can be left empty if no label is needed for the field.
 * @param [options] - An object that contains additional options for the URL field. These options can
 * include properties such as placeholder text, default value, validation rules, and event handlers.
 * @returns a new instance of the `UiUrlField` class with the provided `options`.
 */
function urlField(label = '', options = {}) {
    options = {
        ...options,
        ...getLabelAndRequired(label)
    }
    return new UiUrlField(options)
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
    booleanField,
    colorField,
    dateField,
    datetimeField,
    datetimelocalField,
    emailField,
    fileField,
    hiddenField,
    imageField,
    monthField,
    numberField,
    passwordField,
    rangeField,
    searchField,
    telField,
    textareaField,
    textField,
    timeField,
    urlField,

    selectField,

    getLabelAndRequired,
    sanitizeLabel,
    itSuggestsRequired,
}
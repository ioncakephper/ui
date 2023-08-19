const {
    UiBooleanField,
    UiCheckboxesField,
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
    UiRadioField,
    UiRangeField,
    UiSearchField,
    UiSelectField,
    UiTelField,
    UiTextareaField,
    UiTextField,
    UiTimeField,
    UiUrlField,
} = require("./ui-basic-fields");

const {
    booleanField,
    checkboxesField,
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
    radioField,
    rangeField,
    searchField,
    selectField,
    telField,
    textareaField,
    textField,
    timeField,
    urlField,

    getLabelAndRequired,
    sanitizeLabel,
    itSuggestsRequired,
} = require("./ui-field-shortcuts");

const {
    UiField,
    UiFieldBase,
    UiFieldWithOptions,
} = require("./ui-field");

const {
    UiRenderer,
    UiHandlebarsRenderer,
} = require("./ui-renderer");

module.exports = {
    UiBooleanField,
    UiCheckboxesField,
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
    UiRadioField,
    UiRangeField,
    UiSearchField,
    UiSelectField,
    UiTelField,
    UiTextareaField,
    UiTextField,
    UiTimeField,
    UiUrlField,

    booleanField,
    checkboxesField,
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
    radioField,
    rangeField,
    searchField,
    selectField,
    telField,
    textareaField,
    textField,
    timeField,
    urlField,

    getLabelAndRequired,
    sanitizeLabel,
    itSuggestsRequired,


    UiField,
    UiFieldBase,
    UiFieldWithOptions,

    UiRenderer,
    UiHandlebarsRenderer,
}
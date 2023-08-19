// const {
//     booleanField,
//     checkboxesField,
//     colorField,
//     dateField,
//     datetimeField,
//     datetimelocalField,
//     emailField,
//     fileField,
//     getLabelAndRequired,
//     hiddenField,
//     imageField,
//     itSuggestsRequired,
//     monthField,
//     numberField,
//     passwordField,
//     rangeField,
//     sanitizeLabel,
//     searchField,
//     selectField,
//     telField,
//     textareaField,
//     textField,
//     timeField,
//     urlField,
// } = require("../lib/ui-field-shortcuts");

// const {
//     UiBooleanField,
//     UiCheckboxesField,
//     UiCheckboxesField,
//     UiCheckboxesField,
//     UiCheckboxesField,
//     UiCheckboxesField,
//     UiCheckboxesField,
//     UiField,
//     UiFieldBase,
//     UiFieldWithOptions,
//     UiNumberField,
//     UiTextField,

// } = require("./lib/ui-field");

// module.exports = {
//     booleanField,
//     checkboxesField,
//     colorField,
//     dateField,
//     datetimeField,
//     datetimelocalField,
//     emailField,
//     fileField,
//     getLabelAndRequired,
//     hiddenField,
//     imageField,
//     itSuggestsRequired,
//     monthField,
//     numberField,
//     passwordField,
//     rangeField,
//     sanitizeLabel,
//     searchField,
//     selectField,
//     telField,
//     textareaField,
//     textField,
//     timeField,
//     urlField,

//     UiBooleanField,
//     UiCheckboxesField,
//     UiCheckboxesField,
//     UiCheckboxesField,
//     UiCheckboxesField,
//     UiCheckboxesField,
//     UiField,
//     UiFieldBase,
//     UiFieldWithOptions,
//     UiNumberField,
//     UiTextField,
// }

import * as UiField from './lib/ui-field';
import * as UiBasicFields from './lib/basic-fields';
import * as UiFieldShortcuts from './lib/ui-field-shortcuts';
import * as UiRenderers from './lib/renderers';

module.exports = {
    UiField,
    UiBasicFields,
    UiFieldShortcuts,
    UiRenderers,
}

const {UiField, UiItemsField, UiOptionsField} = require('./ui-field');

/* The `UiTextField` class is a subclass of `UiField` that represents a text input field in a user
interface. */
class UiTextField extends UiField {
    constructor(props = {}) {
        super(props);
        this.props.type = 'text';
    }
}

/* The `UiColorField` class is a subclass of `UiTextField` that represents a text field specifically
for inputting colors. */
class UiColorField extends UiTextField {

    constructor(props = {}) {
        super(props);
        this.props.type = 'color';
    }

    /**
     * Returns the template filename.
     *
     * @return {string} The template filename.
     */
    getTemplateFilename() {
        return `ui-text`;
    }
}

/* The `UiDateField` class is a subclass of `UiTextField` that represents a text field specifically
for inputting dates. */
class UiDateField extends UiTextField {

    constructor(props = {}) {
        super(props);
        this.props.type = 'date';
    }

    /**
     * Returns the template filename.
     *
     * @return {string} The template filename.
     */
    getTemplateFilename() {
        return `ui-text`;
    }
}

/* The `UiEmailField` class is a subclass of `UiTextField` that represents a text field specifically
for inputting emails. */
class UiEmailField extends UiTextField {

    constructor(props = {}) {
        super(props);
        this.props.type = 'email';
    }

    /**
     * Returns the template filename.
     *
     * @return {string} The template filename.
     */
    getTemplateFilename() {
        return `ui-text`;
    }
}

/* The `UiFileField` class is a subclass of `UiTextField` that represents a text field specifically
for inputting files. */
class UiFileField extends UiTextField {

    constructor(props = {}) {
        super(props);
        this.props.type = 'file';
    }

    /**
     * Returns the template filename.
     *
     * @return {string} The template filename.
     */
    getTemplateFilename() {
        return `ui-text`;
    }
}

/* The `UiFormField` class is a subclass of `UiTextField` that represents a text field specifically
for inputting forms. */
class UiFormField extends UiItemsField {

    constructor(props = {}) {
        super(props);
        this.props.type = 'form';
    }

    /**
     * Returns the template filename.
     *
     * @return {string} The template filename.
     */
    getTemplateFilename() {
        return super.getTemplateFilename();
    }
}

/* The `UiNumberField` class is a subclass of `UiTextField` that represents a text field specifically
for inputting numbers. */
class UiNumberField extends UiTextField {

    constructor(props = {}) {
        super(props);
        this.props.type = 'number';
    }

    /**
     * Returns the template filename.
     *
     * @return {string} The template filename.
     */
    getTemplateFilename() {
        return `ui-text`;
    }
}

/* The `UiPasswordField` class is a subclass of `UiTextField` that represents a text field specifically
for inputting passwords. */
class UiPasswordField extends UiTextField {

    constructor(props = {}) {
        super(props);
        this.props.type = 'password';
    }

    /**
     * Returns the template filename.
     *
     * @return {string} The template filename.
     */
    getTemplateFilename() {
        return `ui-text`;
    }
}

/* The `UiRangeField` class is a subclass of `UiTextField` that represents a text field specifically
for inputting ranges. */
class UiRangeField extends UiTextField {

    constructor(props = {}) {
        super(props);
        this.props.type = 'range';
    }

    /**
     * Returns the template filename.
     *
     * @return {string} The template filename.
     */
    getTemplateFilename() {
        return `ui-text`;
    }
}

/* The `UiTimeField` class is a subclass of `UiTextField` that represents a text field specifically
for inputting times. */
class UiTimeField extends UiTextField {

    constructor(props = {}) {
        super(props);
        this.props.type = 'time';
    }

    /**
     * Returns the template filename.
     *
     * @return {string} The template filename.
     */
    getTemplateFilename() {
        return `ui-text`;
    }
}

/* The `UiUrlField` class is a subclass of `UiTextField` that represents a text field specifically
for inputting urls. */
class UiUrlField extends UiTextField {

    constructor(props = {}) {
        super(props);
        this.props.type = 'url';
    }

    /**
     * Returns the template filename.
     *
     * @return {string} The template filename.
     */
    getTemplateFilename() {
        return `ui-text`;
    }
}

/* The `UiBooleanField` class is a subclass of `UiField` that represents a checkbox field in a user
interface. */
class UiBooleanField extends UiField {
    constructor(props = {}) {
        super(props);
        this.props.type = 'checkbox';
    }
}

/* The `UiCheckboxesField` class is a subclass of `UiOptionsField` that represents a field with
multiple checkboxes as options. */
class UiCheckboxesField extends UiOptionsField {
    constructor(props = {}) {
        super(props);
        this.props.type = 'checkboxes';
    }
}

/* The `UiRadioField` class is a subclass of `UiOptionsField` that represents a radio button field in a
user interface. */
class UiRadioField extends UiOptionsField {
    constructor(props = {}) {
        super(props);
        this.props.type = 'radio';
    }

    setChecked(item, index, fieldValue) {
        if (!this.done) {
            let v = super.setChecked(item, index, fieldValue);
            this.done = true;
            return v;
        }
        return item;
    }
}

class UiSelectField extends UiCheckboxesField {
    constructor(props = {}) {
        super(props);
        this.props.type = 'select';
    }
}


module.exports = {
    UiTextField,
    UiColorField,
    UiDateField,
    UiEmailField,
    UiFileField,
    UiFormField,
    UiNumberField,
    UiPasswordField,
    UiRangeField,
    UiTimeField,
    UiUrlField,

    UiBooleanField,
    UiCheckboxesField,
    UiRadioField,

    UiSelectField,
}

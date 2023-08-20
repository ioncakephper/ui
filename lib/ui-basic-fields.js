const {UiField, UiFieldWithOptions, UiFieldWithFields} = require('./ui-field')


/**
 * The `UiBooleanField` class is a subclass of `UiField` that represents a checkbox field in a user interface.
 * @extends UiField
 */
class UiBooleanField extends UiField {

    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'checkbox';
    }
}

/**
 * The `UiTextField` class is a subclass of `UiField` that represents a text input field in a user interface.
 * @extends UiField
 */
class UiTextField extends UiField {

    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'text';
    }

    /**
    * @return { string } template filename to be used in templates
    */
    getTemplateFilename() {
        return 'ui-text';
    }
}

/**
 * The `UiNumberField` class is a subclass of `UiTextField` that sets the input type to "number".
 * @extends UiTextField
 */
class UiNumberField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'number';
    }
}

/**
 * The `UiCheckboxesField` class is a subclass of `UiFieldWithOptions` that represents a field with multiple checkboxes as options.
 * @extends UiFieldWithOptions
 */
class UiCheckboxesField extends UiFieldWithOptions {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'checkboxes';
    }
}

/**
 * The `UiColorField` class is a subclass of `UiTextField` that sets the input type to 'color'.
 * @extends UiTextField
 */
class UiColorField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'color';
    }
}

/**
 * The `UiDateField` class is a subclass of `UiTextField` that sets the input type to 'date'.
 * @extends UiTextField
 */
class UiDateField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'date';
    }
}

/**
 * The UiDateTimeField class is a subclass of UiTextField that sets the type of the input field to 'datetime'.
 * @extends UiTextField
 */
class UiDateTimeField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'datetime';
    }
}

/**
 * The `UiDateTimeLocalField` class is a subclass of `UiTextField` that sets the input type to `datetime-local`.
 * @extends UiTextField
 */
class UiDateTimeLocalField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'datetime-local';
    }
}

/**
 * The `UiEmailField` class is a subclass of `UiTextField` that sets the `type` property to 'email'.
 * @extends UiTextField
 */
class UiEmailField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'email';
    }
}

/**
 * The `UiFileField` class is a subclass of `UiTextField` that sets the `type` property to 'file'.
 * @extends UiTextField
 */
class UiFileField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'file';
    }
}

/**
 * The `UiFormField` class is a subclass of `UiFieldWithFields` that sets the type property of the
props object to 'form' in its constructor.
 * @extends UiFieldWithFields
 */
class UiFormField extends UiFieldWithFields {

    /**
     * The constructor function sets the type property of the props object to 'form'.
     * @param [props] - The `props` parameter is an object that contains the properties passed to the
     * constructor. In this case, it is set to an empty object `{}` by default.
     */
    constructor(props = {}) {
        super(props);
        this.props.type = 'form';
    }
}

/**
 * The `UiHiddenField` class is a subclass of `UiTextField` that represents a hidden input field in a
user interface.
 * @extends UiTextField
 */
class UiHiddenField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'hidden';
    }

    /**
     * The function getTemplateFilename() returns the filename 'ui-hidden'.
     * @returns the string 'ui-hidden'.
     */
    getTemplateFilename() {
        return 'ui-hidden';
    }
}

/**
 * The `UiImageField` class is a subclass of `UiTextField` that represents an image input field with default alternative text and source.
 * @extends UiTextField
 */
class UiImageField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        props = {
            ...{alt: 'No alternative text', src:'https://via.placeholder.com/150'},
            ...props,
        }
        super(props);
        this.props.type = 'image';
    }
}

/**
 * The UiMonthField class is a subclass of UiTextField that sets the input type to 'month'.
 * @extends UiTextField
 */
class UiMonthField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'month';
    }
}

/**
 * The `UiPasswordField` class is a subclass of `UiTextField` that sets the input type to password.
 * @extends UiTextField
 */
class UiPasswordField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'password';
    }
}

/**
 * The `UiRadioField` class is a subclass of `UiFieldWithOptions` that represents a radio button field in a user interface.
 * @extends UiField
 */
class UiRadioField extends UiFieldWithOptions {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'radio';
    }
}

/**
 * The `UiRangeField` class is a subclass of `UiTextField` that sets the `type` property to 'range'.
 * @extends UiTextField
 */
class UiRangeField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'range';
    }
}

/**
 * The `UiSearchField` class is a subclass of `UiTextField` that sets the type of the input field to "search".
 * @extends UiTextField
 */
class UiSearchField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'search';
    }
}

/**
 * The UiSelectField class is a subclass of UiFieldWithOptions that represents a select field in a user
interface.
 * @extends UiFieldWithOptions
 */
class UiSelectField extends UiFieldWithOptions {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'select';
    }
}

/**
 * The UiTelField class is a subclass of UiTextField that sets the type of the input field to 'tel'.
 * @extends UiTextField
 */
class UiTelField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'tel';
    }
}

/**
 * The `UiTextareaField` class is a subclass of `UiField` that represents a textarea input field in a user interface.
 * @extends UiField
 */
class UiTextareaField extends UiField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'textarea';
    }
}

/**
 * The UiTimeField class is a subclass of UiTextField that sets the type of the input field to 'time'.
 * @extends UiTextField
 */
class UiTimeField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'time';
    }
}

/**
 * The `UiUrlField` class is a subclass of `UiTextField` that sets the input type to 'url'.
 * @extends UiTextField
 */
class UiUrlField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'url';
    }
}

module.exports = {
    UiBooleanField,
    UiCheckboxesField,
    UiColorField,
    UiDateField,
    UiDateTimeField,
    UiDateTimeLocalField,
    UiEmailField,
    UiFileField,
    UiFormField,
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
}
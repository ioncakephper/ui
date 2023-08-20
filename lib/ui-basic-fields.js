const {UiField, UiFieldWithOptions, UiFieldWithFields} = require('./ui-field')


/**
 * The `UiBooleanField` class is a subclass of `UiField` that represents a checkbox field in a user interface.
 * @extends UiField
 */
class UiBooleanField extends UiField {

    /**
     * The constructor function sets the type property of the props object to 'checkbox'.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties and values that
     * are passed to the component when it is created. In this case, the `props` object is set to an
     * empty object `{}` by default if no argument is provided when creating the component.
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
     * The constructor function sets the default value of the 'type' property to 'text'.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties and values that
     * are passed to the constructor. In this case, the `props` object is set to an empty object `{}`
     * by default if no argument is provided when creating an instance of the class.
     */
    constructor(props = {}) {
        super(props);
        this.props.type = 'text';
    }


    /**
     * The function returns the filename of a UI text template.
     * @returns {string} The string 'ui-text' is being returned.
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
     * The constructor function sets the type property of the props object to 'number'.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties and values that
     * are passed to the constructor when creating an instance of the class. In this case, the `props`
     * object is set to an empty object `{}` by default if no argument is provided when creating an
     * instance.
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
     * The constructor function sets the type property of the props object to 'checkboxes'.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties passed to the
     * constructor. In this case, it is set to an empty object `{}` by default.
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
     * The constructor function sets the default value of the type property to 'color' in the props
     * object.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties and values that
     * are passed to the constructor when creating an instance of the class. In this case, the `props`
     * object is set to an empty object `{}` by default if no arguments are provided when creating an
     * instance.
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
     * The constructor function sets the default value of the "type" property to "date" in the props
     * object.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties passed to the
     * constructor. In this case, it is an optional parameter with a default value of an empty object
     * `{}`.
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
     * The constructor function sets the type property of the props object to 'datetime'.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties passed to the
     * constructor. In this case, it is an optional parameter with a default value of an empty object
     * `{}`.
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
     * The constructor function sets the type of a props object to 'datetime-local'.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties passed to the
     * constructor. In this case, it is an optional parameter with a default value of an empty object
     * `{}`.
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
     * The constructor function sets the type property of the props object to 'email'.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties passed to the
     * constructor. In this case, it is set to an empty object `{}` by default.
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
     * The constructor function sets the type property of the props object to 'file'.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties and values that
     * are passed to the constructor when creating an instance of the class. In this case, the `props`
     * object is set to an empty object `{}` by default if no arguments are provided when creating an
     * instance.
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
     * @param {object} [props = {}]- The `props` parameter is an object that contains the properties passed to the
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
     * The constructor function sets the type property of the props object to 'hidden'.
     * @param {object} [props = {}]- The `props` parameter is an object that contains the properties and values that
     * are passed to the component when it is created. In this case, the `props` object is set to an
     * empty object `{}` by default if no argument is provided when creating the component.
     */
    constructor(props = {}) {
        super(props);
        this.props.type = 'hidden';
    }

    /**
     * The function getTemplateFilename() returns the filename 'ui-hidden'.
     * @returns {string} - Returns the string 'ui-hidden'.
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
     * The constructor function sets default values for the props object and adds additional properties
     * before calling the super constructor.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties and values that
     * are passed to the constructor.
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
     * The constructor function sets the default value of the "type" property to "month" in the props
     * object.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties passed to the
     * constructor. In this case, it is set to an empty object `{}` by default.
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
     * The constructor function sets the type of a password input field to 'password'.
     * @param {object} [props = {}]- The `props` parameter is an object that contains the properties passed to the
     * constructor. It is an optional parameter and if no value is provided, an empty object `{}` is
     * used as the default value.
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
     * The constructor function sets the type property of the props object to 'radio'.
     * @param {object} [props = {}]- The `props` parameter is an object that contains the properties and values that
     * are passed to the component when it is created. It is an optional parameter, and if no value is
     * provided, an empty object `{}` is used as the default value.
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
     * The constructor function sets the type property of the props object to 'range'.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties and values that
     * are passed to the constructor. In this case, it is set to an empty object `{}` by default.
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
     * The constructor function sets the default value of the "type" property to "search" in the props
     * object.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties passed to the
     * constructor. In this case, it is set to an empty object `{}` by default.
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
     * The constructor function sets the type property of the props object to 'select'.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties and values that
     * are passed to the constructor. In this case, it is set to an empty object `{}` by default.
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
     * The constructor function sets the type of the props object to 'tel' by default.
     * @param {object} [props = {}]- The `props` parameter is an object that contains the properties passed to the
     * component. In this case, it is an optional parameter with a default value of an empty object
     * `{}`.
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
     * The constructor function sets the type property of the props object to 'textarea'.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties and values that
     * are passed to the constructor. In this case, it is set to an empty object `{}` by default.
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
     * The constructor function sets the type property of the props object to 'time'.
     * @param {object} [props = {}] - props is an object that contains the properties passed to the constructor. It
     * is an optional parameter and if no value is provided, an empty object is assigned as the default
     * value.
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
     * The constructor function sets the default value of the "type" property to "url" in the props
     * object.
     * @param {object} [props = {}] - The `props` parameter is an object that contains the properties and values that
     * are passed to the constructor. In this case, it is set to an empty object `{}` by default.
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
const { isUndefined, isNumber, isString } = require("lodash");
const { UiHandlebarsRenderer } = require("./ui-renderer");
const { slug } = require("file-easy");

/**
 * The UiFieldBase class is a JavaScript class that sets default values for label, required, name, type, and id, and assigns the props object to this.props.
 */
class UiFieldBase {

    /**
     * The constructor function takes in props and sets default values for label, required, name, type,
     * and id, and then assigns the props object to this.props.
     * @param props - An object containing the properties passed to the constructor.
     */
    constructor(props) {
        let { label = 'No label',  required = false } = props;
        let { name = slug(label), type = 'text'} = props;
        let { id = name} = props;
        props = {
            ...props,
            ...{
                label,
                required,
                name,
                type,
                id
            }
        }
        this.props = props;
    }
}

/**
 * The `UiField` class is a JavaScript class that renders content and wraps it using a content renderer and a wrapper renderer.
 */
class UiField extends UiFieldBase {

    /**
     * The constructor function sets the default value of the "useTemplateFilename" property to true if
     * it is not provided in the props object.
     * @param [props] - An object containing the properties passed to the constructor.
     */
    constructor(props = {}) {
        props = {
            ...props,
            ...{useTemplateFilename: true}
        }
        super(props)
    }

    /**
     * The `render` function takes in a `values` object, renders the content using a content renderer
     * and variables, wraps the rendered content using a wrapper renderer and default variables, and
     * returns the final result.
     * @param [values] - The `values` parameter is an object that contains the values to be passed to
     * the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of
     * the content and wrapper components.
     * @returns The `render` function is returning the result of rendering the content within a
     * wrapper.
     */
    render(values = {}) {
        let content = this.contentRenderer().render(this.variables(values));
        let result = this.wrapperRenderer().render(
            {
                ...this.defaultVariables(values),
                 ...{content}
            }
        )
        return result;
    }

    /**
     * The contentRenderer function returns the result of calling the renderer function with certain
     * props.
     * @returns the result of calling the `renderer` function with the `props` object as an argument.
     */
    contentRenderer() {
        let props = {
            useTemplateFilename: this.props.useTemplateFilename,
            templateFilename: this.getTemplateFilename(),
            templateString: this.getTemplateString(),

        }
        return this.renderer(props)
    }

    /**
     * The function `wrapperRenderer` returns the result of calling the `renderer` function with
     * specific props.
     * @returns The function `wrapperRenderer()` is returning the result of calling the `renderer()`
     * function with the `props` object as an argument.
     */
    wrapperRenderer() {
        let props = {
            useTemplateFilename: this.props.useTemplateFilename,
            templateFilename: this.getWrapperTemplateFilename(),
            templateString: this.getWrapperTemplateString()
        }
        return this.renderer(props)
    }

    /**
     * The function returns a new instance of the UiHandlebarsRenderer class with the given props.
     * @param props - The "props" parameter is an object that contains the properties or data that will
     * be used by the UiHandlebarsRenderer class. These properties can include things like template
     * files, data objects, and any other necessary information for rendering the UI using Handlebars.
     * @returns A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.
     */
    renderer(props) {
        props = {
            ...props,
            ...{templateOptions: this.props.templateOptions},
        }
        return new UiHandlebarsRenderer(props);
    }

    /**
     * The defaultVariables function returns the props object.
     * @param [values] - The `values` parameter is an object that contains key-value pairs representing
     * the default values for the variables.
     * @returns The `props` object.
     */
    defaultVariables(values = {}) {
        return this.props;
    }

    /**
     * The function returns a merged object of default variables and a value.
     * @param [values] - The "values" parameter is an object that contains key-value pairs representing
     * variables and their corresponding values.
     * @returns an object that combines the default variables and the value variable.
     */
    variables(values = {}) {
        return {
            ...this.defaultVariables(values),
            ...{value: this.getValue(values)}
        }
    }

    /**
     * The function returns a template filename based on the type property.
     * @returns The template filename that is being returned is `ui-${this.props.type}`.
     */
    getTemplateFilename() {
        return `ui-${this.props.type}`;
    }

    /**
     * The function returns the template string from the props.
     * @returns The template string stored in the `props` object.
     */
    getTemplateString() {
        return this.props.templateString;
    }

    /**
     * The function returns the filename of a UI wrapper template.
     * @returns the string `ui-wrapper`.
     */
    getWrapperTemplateFilename() {
        return `ui-wrapper`;
    }

    /**
     * The function returns the wrapper template string from the props.
     * @returns the value of the `wrapperTemplateString` property of the `props` object.
     */
    getWrapperTemplateString() {
        return this.props.wrapperTemplateString;
    }

    /**
     * The getValue function returns the value associated with a given name from a provided object.
     * @param [values] - The `values` parameter is an object that contains key-value pairs.
     * @returns The value associated with the name property in the values object.
     */
    getValue(values = {}) {
        return values[this.props.name];
    }
}

class UiFieldWithOptions extends UiField {

    /**
     * This is a constructor function in JavaScript that sets default values for the "props" parameter.
     * @param [props] - An object containing the properties that will be passed to the constructor. If
     * no argument is provided, an empty object will be used as the default value.
     */
    constructor(props = {}) {
        props = {
            ...{options: []},
            ...props,
        }
        super(props);
    }

    /**
     * The function `getValue` takes an object as an argument and returns an array containing the
     * values of the object, or an empty array if the values are undefined.
     * @param [values] - The `values` parameter is an object that contains key-value pairs.
     * @returns an array.
     */
    getValue(values = {}) {
        let v = super.getValue(values);
        if (isUndefined(v))
            return [];
        if (isString(v) || isNumber(v))
            return [`${v}`];
        return v;
    }

    /**
     * The function `defaultVariables` returns an object with default variables, including an `items`
     * property that is built based on a field value.
     * @param [values] - The `values` parameter is an object that contains any values that are passed
     * to the `defaultVariables` function.
     * @returns an object that combines the default variables from the superclass with an additional
     * property called "items". The value of "items" is determined by calling the "buildItems" method
     * with the "fieldValue" as an argument.
     */
    defaultVariables(values = {}) {
        let fieldValue = this.getValue(values);
        return {
            ...super.defaultVariables(values),
            ...{items: this.buildItems(fieldValue)}
        }
    }

    /**
     * The function "buildItems" takes a fieldValue and returns an array of objects with label, value,
     * and checked properties based on the options provided.
     * @param fieldValue - The `fieldValue` parameter is the value of the field that you want to check
     * against the options. It is used to determine whether an option should be checked or not.
     * @returns The function `buildItems` returns an array of objects. Each object in the array has
     * three properties: `label`, `value`, and `checked`. The `label` property is set to the `label`
     * property of the corresponding option object in `this.props.options`. The `value` property is set
     * to the `value` property of the corresponding option object. The `checked` property is
     */
    buildItems(fieldValue) {
        return this.props.options.map((option) => {
            return {
                label: option.label,
                value: option.value,
                checked: this.isOptionValueChecked(fieldValue, option.value),
            }
        })
    }

    /**
     * The function checks if a specific option value is included in a given field value.
     * @param fieldValue - The value of the field that you want to check if it includes the option
     * value.
     * @param optionValue - The value of the option that you want to check if it is included in the
     * fieldValue.
     * @returns a boolean value indicating whether the optionValue is included in the fieldValue.
     */
    isOptionValueChecked(fieldValue, optionValue) {
        return fieldValue.includes(optionValue);
    }
}

module.exports = {
    UiField,
    UiFieldBase,
    UiFieldWithOptions,
}
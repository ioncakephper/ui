const beautify = require("beautify");
const {isString} = require("lodash");

const { HandlebarsRenderer } = require("./ui-renderer");
const { slug } = require("file-easy");

class UiFieldBase {
    constructor(props = {}) {
        let { label = "No label" } = props;
        let { name = slug(label) } = props;
        let { type = "text" } = props;
        let { id = name } = props;

        let { usesTemplateFilename = false, templateString = "" } = props;

        this.props = {
            ...{ label, name, type, usesTemplateFilename, templateString, id },
            ...props,
        };
    }

    render(values = {}) {
        return this.renderer().render(this.variables(values));
    }

    renderer() {
        let { usesTemplateFilename, templateString, templateFilename } = this.props;
        return new Renderer({
            usesTemplateFilename,
            templateString,
            templateFilename,
        });
    }

    variables(values = {}) {
        return {
            ...this.defaultVariables(values),
            ...{ value: this.getValue(values) },
        };
    }

    defaultVariables(values = {}) {
        return this.props;
    }

    getValue(values = {}) {
        let { name } = this.props;
        return values[name];
    }
}

class UiField extends UiFieldBase {
    constructor(props = {}) {
        super(props);
    }

    renderer(props = {}) {
        return new HandlebarsRenderer(props);
    }

    render(values = {}) {
        let c = this.contentRenderer();
        let content = c.render(this.variables(values));
        let output = this.wrapperRenderer().render({
            ...this.defaultVariables(values),
            ...{ content },
        });
        output = beautify(output, { format: "html" });
        return output;
    }

    contentRenderer() {
        let {
            templateOptions = {
                template_path: "templates",
                template_extension: ".hbs",
            },
        } = this.props;
        return this.renderer({
            templateFilename: this.getTemplateFilename(),
            templateString: this.getTemplateString(),
            templateOptions,
            usesTemplateFilename: this.props.usesTemplateFilename,
        });
    }

    wrapperRenderer() {
        let {
            templateOptions = {
                template_path: "templates",
                template_extension: ".hbs",
            },
        } = this.props;
        return this.renderer({
            templateFilename: this.getWrapperFilename(),
            templateString: this.getWrapperString(),
            templateOptions,
            usesTemplateFilename: this.props.usesTemplateFilename,
        });
    }

    getTemplateFilename() {
        let { templateFilename } = this.props;
        templateFilename = `ui-${this.props.type}`;
        return templateFilename;
    }

    getTemplateString() {
        return `${this.props.templateString}`;
    }

    getWrapperFilename() {
        let { wrapperTemplateFilename = "ui-wrapper" } = this.props;
        return wrapperTemplateFilename;
    }

    getWrapperString() {
        return `${this.props.wrapperTemplateString}`;
    }
}

/* The `UiItemsField` class is a subclass of `UiField` that represents a field with multiple items. */
class UiItemsField extends UiField {
    constructor(props = {}) {
        props = { ...{ fields: [] }, ...props };
        super(props);
    }

    /**
     * The function `defaultVariables` returns an object with default values for the `items` property,
     * which is an array of rendered fields based on the given `fields` array.
     * @param [values] - The `values` parameter is an object that contains the values for the fields.
     * It is used to populate the fields with initial values when the component is rendered.
     * @returns an object that combines the default variables from the superclass with additional
     * variables. The additional variables include an "items" property, which is an array of items
     * rendered by each field in the "fields" array. The rendered items are determined by calling the
     * "render" method of each field and passing in the current values.
     */
    defaultVariables(values = {}) {
        let { fields } = this.props;
        return {
            ...super.defaultVariables(values),
            ...{ fields: fields.map((f, idx) => f.render(this.getValue(values))) },
        };
    }
}

/* The `UiOptionsField` class is a subclass of `UiField` that adds functionality for setting the
checked state of options based on a field value. */
class UiOptionsField extends UiField {
    /**
     * The function `defaultVariables` takes in a `values` parameter and returns an object with default
     * variables, including an updated `items` array.
     * @param values - The `values` parameter is an object that contains the values of the form fields.
     * @returns an object that combines the default variables from the superclass with the modified
     * "items" array. The "items" array is being mapped over and each item is being passed to the
     * "setChecked" function along with the "fieldValue" variable. The result of "setChecked" is then
     * used as the value for each item in the modified "items" array.
     */
    defaultVariables(values) {
        let { items } = this.props;
        let fieldValue = this.getValue(values) || [] ;
        return {
            ...super.defaultVariables(values),
            ...{
                items: items.map((item, idx) => {
                    return this.setChecked(item, idx, fieldValue);
                }),
            },
        };
    }

    getValue(values) {
        let value = super.getValue(values); 
        if (value) {
            value = isString(value) ? [value] : value;
        }
        return value;
    }

    /**
     * The function sets the "checked" property of an item to true if its value matches a specified
     * field value.
     * @param item - The item parameter represents an object that has a value property.
     * @param fieldValue - The value that you want to compare with the value of the item.
     * @returns an updated version of the "item" object. If the "value" property of the "item" object
     * is equal to the "fieldValue" parameter, then the returned object will have an additional
     * property "checked" set to true. Otherwise, the returned object will be the same as the original
     * "item" object.
     */
    setChecked(item, index, fieldValue) {
        if (fieldValue[index]) {
            if (item.value === fieldValue[index]) {
                return { ...item, checked: true };
            }
        }
        return item;
    }
}

module.exports = {
    UiField,
    UiItemsField,
    UiOptionsField,
};

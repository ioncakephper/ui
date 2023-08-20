const { isUndefined } = require("lodash");
const hbsr = require("hbsr");
const beautify = require("beautify");


/**
 * @typedef {object} RendererOptions
 * @description The `RendererOptions` object represents the options of a renderer.
 * @property {boolean} [useTemplateFilename = false] - Whether or not to use the template filename.
 * @property {string} [templateFilename = undefined] - The template filename.
 * @property {string} [templateString = ''] - The template string.
 */

/**
 * The `UiRenderer` class is a JavaScript class that renders a template either from a file or from a
string, replacing placeholders with values.
 * @class
 */
class UiRenderer {

    /**
     * The constructor function initializes an object with default properties and allows for overriding
     * those properties with custom values.
     * @param {RendererOptions} [props = {}] - An object containing the properties passed to the constructor.
     */
    constructor(props = {}) {
        let defaultProps = {
            useTemplateFilename: false,
            templateFilename: undefined,
            templateString: ''
        }
        props = {
            ...defaultProps,
            ...props
        }
        this.props = props;
    }

    /**
     * The render function checks if a template filename is provided and renders the template using
     * either the filename or the template string.
     * @param {object} [values = {}] - The `values` parameter is an object that contains the values to be used in the
     * template rendering. These values can be accessed within the template using placeholders or
     * variables.
     * @returns {string} the result of either `this.renderTemplateFilename(this.getTemplateFilename(), values)`
     * or `this.renderTemplateString(this.getTemplateString(), values)`, depending on the result of
     * `this.usesTemplateFilename()`.
     */
    render(values = {}) {
        return this.usesTemplateFilename()
            ? this.renderTemplateFilename(this.getTemplateFilename(), values)
            : this.renderTemplateString(this.getTemplateString(), values);
    }


    /**
     * The function checks if the template filename is defined and should be used.
     * @returns {boolean} It returns a boolean value. It returns true if the `useTemplateFilename` prop is true and the
     * `templateFilename` prop is not undefined. Otherwise, it returns false.
     */
    usesTemplateFilename() {
        return this.props.useTemplateFilename && !isUndefined(this.props.templateFilename);
    }

    /**
     * The function returns the template filename from the props.
     * @returns {string} The value of `this.props.templateFilename` is being returned.
     */
    getTemplateFilename() {
        return this.props.templateFilename;
    }

    /**
     * The function returns the template string from the props.
     * @returns {string} The template string stored in the `props` object.
     */
    getTemplateString() {
        return this.props.templateString;
    }

    /**
     * The function `renderTemplateFilename` reads a template file, replaces placeholders with values,
     * and returns the rendered template as a string.
     * @param {string} templateFilename - The templateFilename parameter is a string that represents the
     * filename of the template file that needs to be rendered.
     * @param {object} [values = {}] - The `values` parameter is an optional object that contains key-value pairs.
     * These values can be used to replace placeholders in the template file with actual values.
     * @throws {Error} If the `templateFilename` parameter is undefined.
     * @returns {string} the result of calling the `renderTemplateString` method with the contents of the
     * `templateFilename` file as a string and the `values` object as arguments.
     */
    renderTemplateFilename(templateFilename, values = {}) {
        if (isUndefined(templateFilename)) {
            throw new Error("templateFilename is undefined");
        }
        return this.renderTemplateString(fs.readFileSync(templateFilename, "utf8"), values);
    }


    /**
     * The function `renderTemplateString` takes a template string and an optional object of values,
     * and returns a beautified version of the template string with the values replaced.
     * @param {string} templateString - A string that represents a template with placeholders for values to be
     * inserted.
     * @param {object} [values = {}] - The `values` parameter is an optional object that contains key-value pairs.
     * These values can be used to replace placeholders in the `templateString`.
     * @throws {Error} If the `templateString` parameter is undefined.
     * @returns {string} the result of calling the `beautify` function with the `templateString` and `values` as
     * arguments.
     */
    renderTemplateString(templateString, values = {}) {
        if (isUndefined(templateString)) {
            throw new Error("templateString is undefined");
        }
        return beautify(templateString, values);
    }
}


/**
 * The `UiHandlebarsRenderer` class is a subclass of `UiRenderer` that provides methods for rendering
Handlebars templates.
 * @extends UiRenderer
 */
class UiHandlebarsRenderer extends UiRenderer {

    /**
     * This is a constructor function in JavaScript that takes an optional props object as an argument.
     * @param {RendererOptions} [props = {}] - The `props` parameter is an object that contains any properties that are passed
     * to the constructor when creating an instance of the class. It is an optional parameter and if no
     * value is provided, an empty object `{}` is used as the default value.
     */
    constructor(props = {}) {
        super(props);
    }

    /**
     * The function `renderTemplateFilename` renders a template file using Handlebars with optional
     * values and template options.
     * @param {string} templateFilename - The template filename is the name or path of the template file that
     * you want to render. It could be a string representing the filename or a variable containing the
     * filename.
     * @param {object} [values = {}] - The `values` parameter is an optional object that contains the values to be
     * used in the template rendering. These values can be accessed within the template using
     * placeholders or variables.
     * @returns {string} the result of calling the `hbsr.render_template` function with the provided
     * `templateFilename`, `values`, and `templateOptions` as arguments.
     */
    renderTemplateFilename(templateFilename, values = {}) {
        let templateOptions = this.props.templateOptions || hbsr.options;
        let r = hbsr.render_template(templateFilename, values, templateOptions);
        return beautify(r, {format: 'html'});
    }

    /**
     * The function `renderTemplateString` takes a template string and an optional object of values,
     * and returns the rendered template.
     * @param {string} templateString - The templateString parameter is a string that represents a template. It
     * can contain placeholders or variables that will be replaced with actual values when the template
     * is rendered.
     * @param {object} [values = {}] - The `values` parameter is an optional object that contains key-value pairs
     * representing the values to be substituted in the template string. These values will be used to
     * replace placeholders or variables in the template string with their corresponding values.
     * @returns {string} the result of rendering the template string with the provided values.
     */
    renderTemplateString(templateString, values = {}) {
        let r = hbsr.render(templateString, values);
        return beautify(r, {format: 'html'});
    }
}

module.exports = {
    UiRenderer,
    UiHandlebarsRenderer,
}
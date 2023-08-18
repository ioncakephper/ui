const { isUndefined } = require("lodash");
const hbsr = require("hbsr");


class UiRenderer {

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

    render(values = {}) {
        return this.usesTemplateFilename()
            ? this.renderTemplateFilename(this.getTemplateFilename(), values)
            : this.renderTemplateString(this.getTemplateString(), values);
    }


    usesTemplateFilename(){
        return this.props.useTemplateFilename && !isUndefined(this.props.templateFilename);
    }

    getTemplateFilename(){
        return this.props.templateFilename;
    }


    getTemplateString(){
        return this.props.templateString;
    }

    renderTemplateFilename(templateFilename, values = {}) {
        if (isUndefined(templateFilename)) {
            throw new Error("templateFilename is undefined");
        }
        return this.renderTemplateString(fs.readFileSync(templateFilename, "utf8"), values);
    }


    renderTemplateString(templateString, values = {}) {
        if (isUndefined(templateString)) {
            throw new Error("templateString is undefined");
        }
        return beautify(templateString, values);
    }
}


class UiHandlebarsRenderer extends UiRenderer {


    constructor(props = {}) {
        super(props);
    }


    renderTemplateFilename(templateFilename, values = {}) {
        let templateOptions = this.props.templateOptions || hbsr.options;
        return  hbsr.render_template(templateFilename, values, templateOptions);

    }

    renderTemplateString(templateString, values = {}) {
        return hbsr.render_template(templateString, values);
    }
}

module.exports = {
    UiRenderer,
    UiHandlebarsRenderer,
}
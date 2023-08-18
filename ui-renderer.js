const hbsr = require('hbsr')


class Renderer {
    
    constructor(props = {}) {
        let {usesTemplateFilename = false, templateString = ''} = props;
        props = {...props, ...{usesTemplateFilename, templateString}};
        this.props = props;
    }

    render(values = {}) {
        let {usesTemplateFilename} = this.props;
        return usesTemplateFilename
            ? this.renderTemplate(this.getTemplateFilename(), values)
            : this.renderString(this.getTemplateString(), values)
    }

    renderTemplate(templateFilename, values = {}) {
        throw new Error('Method not implemented')
    }

    renderString(templateString, values = {}) {
        throw new Error('Method not implemented')
    }

    getTemplateFilename() {
        let {templateFilename} = this.props;
        if (!templateFilename) {
            throw new Error('Template filename is undefined.')
        }
        return templateFilename;
    }

    getTemplateString() {
        let {templateString} = this.props;
        return templateString
    }

}

class HandlebarsRenderer extends Renderer {

    constructor(props = {}) {
        let {templateOptions = {template_path: 'templates', template_extension: '.hbs'}} = props;
        props = {...props, ...{templateOptions}};
        super(props);
    }

    renderTemplate(templateFilename, values = {}) {
        let {templateOptions} = this.props;
        return hbsr.render_template(templateFilename, values, templateOptions)
    }

    renderString(templateString, values = {}) {
        return hbsr.render(templateString, values);
    }
}

module.exports = {
    Renderer,
    HandlebarsRenderer,
}
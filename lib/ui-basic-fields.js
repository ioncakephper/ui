const {UiField} = require('./ui-field')


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

class UiNumberField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'number';
    }
}

class UiColorField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'color';
    }
}


module.exports = {
    UiTextField,
    UiNumberField,
    UiColorField,
}
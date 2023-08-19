const {UiField} = require('./ui-field')


class UiBooleanField extends UiField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'checkbox';
    }
}

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

class UiDateField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'date';
    }
}

class UiDateTimeField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'datetime';
    }
}

class UiDateTimeLocalField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'datetime-local';
    }
}

class UiEmailField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'email';
    }
}

class UiFileField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'file';
    }
}

class UiHiddenField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'hidden';
    }

    getTemplateFilename() {
        return 'ui-hidden';
    }
}

class UiImageField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'image';
    }
}

class UiMonthField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'month';
    }
}

class UiPasswordField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'password';
    }
}

class UiRangeField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'range';
    }
}

class UiSearchField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'search';
    }
}

class UiTelField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'tel';
    }
}

class UiTimeField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'time';
    }
}

class UiUrlField extends UiTextField {
    /**
    * @param props
    */
    constructor(props = {}) {
        super(props);
        this.props.type = 'url';
    }
}



// date
// datetime
// datetime-local
// email
// file
// hidden
// image
// month
// password
// range
// search
// tel
// time
// url





module.exports = {
    UiBooleanField,
    UiColorField,
    UiDateField,
    UiDateTimeField,
    UiDateTimeLocalField,
    UiEmailField,
    UiFileField,
    UiHiddenField,
    UiImageField,
    UiMonthField,
    UiNumberField,
    UiPasswordField,
    UiRangeField,
    UiSearchField,
    UiTelField,
    UiTextField,
    UiTimeField,
    UiUrlField,
}
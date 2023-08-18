const {UiField} = require('../ui-field');

describe('UiField', () => {
    
    test('render', () => {
        let r = new UiField({
            name: 'name',
            value: 'value',
        })
        expect(r.getWrapperFilename()).toEqual('ui-field-wrapper')
    })

    test('render', () => {
        let r = new UiField({
        })
        expect(r.getTemplateFilename()).toEqual('text')
    })
})
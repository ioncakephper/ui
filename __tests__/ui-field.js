const {UiField} = require('../lib/ui-field');

describe('ui-field', () => {

    test('', () => {
        let f = new UiField({
        })
        expect(f.props.type).toBe('text');
        expect(f.props.label).toBe('No label');
        expect(f.props.name).toBe('no-label');
        expect(f.props.id).toBe('no-label');
        expect(f.props.useTemplateFilename).toBe(true);
        expect(f.getTemplateFilename()).toBe('ui-text');
        expect(f.getWrapperTemplateFilename()).toBe('ui-wrapper');
    })

    test('', () => {
        let f = new UiField({
        })
        expect(f.getValue()).toBeUndefined();
    })
})
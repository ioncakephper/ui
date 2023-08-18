
const {getLabelAndRequired} = require("../lib/ui-field-shortcuts")
const {
    textField,
} = require('../lib/ui-field-shortcuts')

describe("short-utils", () => {
    
    describe('getLabelAndRequired', () => {

        test('simple label', () => {
            expect(getLabelAndRequired('No label')).toEqual({
                label: 'No label',
                required: false
            })
        })

        test('simple label with required marker', () => {
            expect(getLabelAndRequired('  No label  * ')).toEqual({
                label: 'No label',
                required: true
            })
        })
    })

    describe('textField', () => {

        test('', () => {
            let f = textField('Text');
            expect(f.props.label).toEqual('Text'); 
        })

        test('', () => {
            let f = textField('Text * ');
            expect(f.props.required).toEqual(true);
        })
    })

})
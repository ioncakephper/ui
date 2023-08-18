const { UiTextField } = require("../ui-basic-fields")

describe('UiTextField', () => {

    test('', () => {
        let r = new UiTextField();
        expect(r.props.usesTemplateFilename).toBeTruthy();
    })
})
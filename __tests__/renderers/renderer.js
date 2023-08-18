const {UiRenderer, UiHandlebarsRenderer} = require('../../lib/ui-renderer');

describe('UiRenderer', () => {

    describe('create UiRenderer', () => {

        test('create UiRenderer', () => {
            expect(new UiRenderer()).toBeInstanceOf(UiRenderer);
        })

        test('', () => {
            let props = {};
            let renderer = new UiRenderer(props);
            expect(renderer.usesTemplateFilename()).toBe(false);
            expect(renderer.getTemplateFilename()).toBeUndefined();
            expect(renderer.getTemplateString()).toBe('');
        })

        test('', () => {
            let props = {
                useTemplateFilename: true,
                templateFilename: 'templateFilename',
            }
            let renderer = new UiRenderer(props);
            expect(renderer.usesTemplateFilename()).toBe(true);
            expect(renderer.getTemplateFilename()).toBe('templateFilename');
            expect(renderer.getTemplateString()).toBe('');
        })
    })
})

describe('UiHandlebarsRenderer', () => {

    describe('create UiHandlebarsRenderer', () => {

        test('create UiHandlebarsRenderer', () => {
            expect(new UiHandlebarsRenderer()).toBeInstanceOf(UiHandlebarsRenderer);
        })

        test('', () => {
            let props = {};
            let renderer = new UiHandlebarsRenderer(props);
            expect(renderer.usesTemplateFilename()).toBe(false);
            expect(renderer.getTemplateFilename()).toBeUndefined();
            expect(renderer.getTemplateString()).toBe('');
        })

        test('', () => {
            let props = {
                useTemplateFilename: true,
                templateFilename: 'templateFilename',
            }
            let renderer = new UiHandlebarsRenderer(props);
            expect(renderer.usesTemplateFilename()).toBe(true);
            expect(renderer.getTemplateFilename()).toBe('templateFilename');
            expect(renderer.getTemplateString()).toBe('');
        })

        test('', () => {
            let props = {
                useTemplateFilename: true,
                templateFilename: 'templateFilename',
                templateString: 'templateString',
            }
            let renderer = new UiHandlebarsRenderer(props);
            expect(renderer.usesTemplateFilename()).toBe(true);
            expect(renderer.getTemplateFilename()).toBe('templateFilename');
            expect(renderer.getTemplateString()).toBe('templateString');
        })

        test('', () => {
            function invokeUiHandlebarsRenderer() {
                let props = {
                    useTemplateFilename: true,
                    templateFilename: 'templateFilename',
                    templateString: 'templateString',
                }
                let renderer = new UiHandlebarsRenderer(props);
                let result = renderer.render()
            }


            expect(invokeUiHandlebarsRenderer).toThrowError();
        })
    })
})
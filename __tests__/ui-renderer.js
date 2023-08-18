const {Renderer, HandlebarsRenderer} = require('../ui-renderer')

test('', () => {
    let r = new Renderer();
    expect(r.props.usesTemplateFilename).toEqual(false)
})

test('', () => {
    let props = {
        templateFilename: 'templateFilename'
    }
    let r = new Renderer(props)
    expect(r.getTemplateFilename()).toEqual('templateFilename');
    expect(r.props.usesTemplateFilename).toEqual(false)
})

test('', () => {
    let props = {
        templateFilename: 'templateFilename',
        templateString: 'templateString: {{{value}}}'
    }
    let r = new Renderer(props)
    expect(r.getTemplateFilename()).toEqual('templateFilename');
    expect(r.getTemplateString()).toEqual('templateString: {{{value}}}');
    expect(r.props.usesTemplateFilename).toEqual(false)

    // let h = r.render({value: 'value'})
    // expect(h).toEqual(`templateString: ${value}`)
})


describe('HandlebarsRenderer', () => {
    
    test('', () => {
        let props = {
            templateFilename: 'templateFilename',
            templateString: 'templateString: {{{value}}}'
        }
        let r = new HandlebarsRenderer(props);
        expect(r.getTemplateFilename()).toEqual('templateFilename');
        expect(r.getTemplateString()).toEqual('templateString: {{{value}}}');
        expect(r.props.usesTemplateFilename).toEqual(false)

        let value = 'value';
        let h = r.render({value});
        expect(h).toEqual(`templateString: ${value}`);
    })

    test('', () => {
        let props = {
            templateFilename: 'templateFilename',
            templateString: 'templateString: {{{value}}}',
            templateOptions: {
                template_path: 'templates',
                template_extension: '.hbs'
            }
        }
        let r = new HandlebarsRenderer(props);
        expect(r.props.templateOptions.template_path).toEqual('templates');
        expect(r.props.templateOptions.template_extension).toEqual('.hbs');

    }) 

    test('', () => {
        let props = {
            templateFilename: 'page',
            templateString: 'templateString: {{{value}}}',
        }
        let r = new HandlebarsRenderer(props);
        expect(r.props.templateOptions.template_path).toEqual('templates');
        expect(r.props.templateOptions.template_extension).toEqual('.hbs');

    })

    
    test('', () => {
        let props = {
            templateFilename: 'page',
            templateString: 'templateString: {{{value}}}',
            usesTemplateFilename: true,
        }
        let r = new HandlebarsRenderer(props);
        expect(r.props.templateOptions.template_path).toEqual('templates');
        expect(r.props.templateOptions.template_extension).toEqual('.hbs');

        let h = r.render({value: 'value'});
        expect(h.startsWith('<')).toEqual(true);
    })
})
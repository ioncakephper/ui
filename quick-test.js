const { textField, dateField, numberField, formField, rangeField, fileField, colorField, emailField, timeField, urlField, booleanField, checkboxesField, radioField, selectField } = require("./ui-field-shortcuts");
const { saveDocument } = require("file-easy");
const hbsr = require("hbsr");
   
let fields = [ 
    textField("Label*", {usesTemplateFilename: true}),
    textField("Name", {usesTemplateFilename: true}),
    booleanField('Required', {usesTemplateFilename: true}), 
    selectField('Required', [{label: 'Yes', value: '1'}, {label: 'No', value: '0'}], {usesTemplateFilename: true}),
    radioField('Radio', [{label: 'Yes', value: '1'}, {label: 'No', value: '0'}], {usesTemplateFilename: true}),
    checkboxesField('Checkboxes', [{label: 'Yes', value: '1'}, {label: 'No', value: '0'}], {usesTemplateFilename: true}),  
 
    colorField('Color', {usesTemplateFilename: true}),
    dateField('Date of Birth*', {usesTemplateFilename: true, name: 'dob'}),
    emailField('Email', {usesTemplateFilename: true}),
    fileField('File', {usesTemplateFilename: true}),
    numberField('Number', {usesTemplateFilename: true}),
    rangeField('Range', {usesTemplateFilename: true}),
    textField("First Name", {usesTemplateFilename: true}),
    timeField('Time', {usesTemplateFilename: true}),  
    urlField('Url', {usesTemplateFilename: true}),

    booleanField('Boolean', {usesTemplateFilename: true}), 

] 



let f = formField('Form', {usesTemplateFilename: true, fields});
let content = f.render(); 
 
let output = hbsr.render_template('page', {content});
saveDocument('index.html', output);
      
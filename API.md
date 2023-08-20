# API: uijs-kit classes and functions documentation

Classes and functions comprising UIJS-KIT framework.

## Classes

<dl>
<dt><a href="#UiRenderer">UiRenderer</a></dt>
<dd><p>The <code>UiRenderer</code> class is a JavaScript class that renders a template either from a file or from a
string, replacing placeholders with values.</p>
</dd>
<dt><a href="#UiHandlebarsRenderer">UiHandlebarsRenderer</a> ⇐ <code><a href="#UiRenderer">UiRenderer</a></code></dt>
<dd><p>The <code>UiHandlebarsRenderer</code> class is a subclass of <code>UiRenderer</code> that provides methods for rendering
Handlebars templates.</p>
</dd>
<dt><a href="#UiBooleanField">UiBooleanField</a> ⇐ <code><a href="#UiField">UiField</a></code></dt>
<dd><p>The <code>UiBooleanField</code> class is a subclass of <code>UiField</code> that represents a checkbox field in a user interface.</p>
</dd>
<dt><a href="#UiTextField">UiTextField</a> ⇐ <code><a href="#UiField">UiField</a></code></dt>
<dd><p>The <code>UiTextField</code> class is a subclass of <code>UiField</code> that represents a text input field in a user interface.</p>
</dd>
<dt><a href="#UiNumberField">UiNumberField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiNumberField</code> class is a subclass of <code>UiTextField</code> that sets the input type to &quot;number&quot;.</p>
</dd>
<dt><a href="#UiCheckboxesField">UiCheckboxesField</a> ⇐ <code><a href="#UiFieldWithOptions">UiFieldWithOptions</a></code></dt>
<dd><p>The <code>UiCheckboxesField</code> class is a subclass of <code>UiFieldWithOptions</code> that represents a field with multiple checkboxes as options.</p>
</dd>
<dt><a href="#UiColorField">UiColorField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiColorField</code> class is a subclass of <code>UiTextField</code> that sets the input type to &#39;color&#39;.</p>
</dd>
<dt><a href="#UiDateField">UiDateField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiDateField</code> class is a subclass of <code>UiTextField</code> that sets the input type to &#39;date&#39;.</p>
</dd>
<dt><a href="#UiDateTimeField">UiDateTimeField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The UiDateTimeField class is a subclass of UiTextField that sets the type of the input field to &#39;datetime&#39;.</p>
</dd>
<dt><a href="#UiDateTimeLocalField">UiDateTimeLocalField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiDateTimeLocalField</code> class is a subclass of <code>UiTextField</code> that sets the input type to <code>datetime-local</code>.</p>
</dd>
<dt><a href="#UiEmailField">UiEmailField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiEmailField</code> class is a subclass of <code>UiTextField</code> that sets the <code>type</code> property to &#39;email&#39;.</p>
</dd>
<dt><a href="#UiFileField">UiFileField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiFileField</code> class is a subclass of <code>UiTextField</code> that sets the <code>type</code> property to &#39;file&#39;.</p>
</dd>
<dt><a href="#UiFormField">UiFormField</a> ⇐ <code><a href="#UiFieldWithFields">UiFieldWithFields</a></code></dt>
<dd><p>The <code>UiFormField</code> class is a subclass of <code>UiFieldWithFields</code> that sets the type property of the
props object to &#39;form&#39; in its constructor.</p>
</dd>
<dt><a href="#UiHiddenField">UiHiddenField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiHiddenField</code> class is a subclass of <code>UiTextField</code> that represents a hidden input field in a
user interface.</p>
</dd>
<dt><a href="#UiImageField">UiImageField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiImageField</code> class is a subclass of <code>UiTextField</code> that represents an image input field with default alternative text and source.</p>
</dd>
<dt><a href="#UiMonthField">UiMonthField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The UiMonthField class is a subclass of UiTextField that sets the input type to &#39;month&#39;.</p>
</dd>
<dt><a href="#UiPasswordField">UiPasswordField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiPasswordField</code> class is a subclass of <code>UiTextField</code> that sets the input type to password.</p>
</dd>
<dt><a href="#UiRadioField">UiRadioField</a> ⇐ <code><a href="#UiField">UiField</a></code></dt>
<dd><p>The <code>UiRadioField</code> class is a subclass of <code>UiFieldWithOptions</code> that represents a radio button field in a user interface.</p>
</dd>
<dt><a href="#UiRangeField">UiRangeField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiRangeField</code> class is a subclass of <code>UiTextField</code> that sets the <code>type</code> property to &#39;range&#39;.</p>
</dd>
<dt><a href="#UiSearchField">UiSearchField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiSearchField</code> class is a subclass of <code>UiTextField</code> that sets the type of the input field to &quot;search&quot;.</p>
</dd>
<dt><a href="#UiSelectField">UiSelectField</a> ⇐ <code><a href="#UiFieldWithOptions">UiFieldWithOptions</a></code></dt>
<dd><p>The UiSelectField class is a subclass of UiFieldWithOptions that represents a select field in a user
interface.</p>
</dd>
<dt><a href="#UiTelField">UiTelField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The UiTelField class is a subclass of UiTextField that sets the type of the input field to &#39;tel&#39;.</p>
</dd>
<dt><a href="#UiTextareaField">UiTextareaField</a> ⇐ <code><a href="#UiField">UiField</a></code></dt>
<dd><p>The <code>UiTextareaField</code> class is a subclass of <code>UiField</code> that represents a textarea input field in a user interface.</p>
</dd>
<dt><a href="#UiTimeField">UiTimeField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The UiTimeField class is a subclass of UiTextField that sets the type of the input field to &#39;time&#39;.</p>
</dd>
<dt><a href="#UiUrlField">UiUrlField</a> ⇐ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The <code>UiUrlField</code> class is a subclass of <code>UiTextField</code> that sets the input type to &#39;url&#39;.</p>
</dd>
<dt><a href="#UiFieldBase">UiFieldBase</a></dt>
<dd><p>The UiFieldBase class is a JavaScript class that sets default values for label, required, name, type, and id, and assigns the props object to this.props.</p>
</dd>
<dt><a href="#UiField">UiField</a></dt>
<dd><p>The <code>UiField</code> class is a JavaScript class that renders content and wraps it using a content renderer and a wrapper renderer.</p>
</dd>
<dt><a href="#UiFieldWithOptions">UiFieldWithOptions</a> ⇐ <code><a href="#UiField">UiField</a></code></dt>
<dd><p>The <code>UiFieldWithOptions</code> class is a subclass of <code>UiField</code> that adds functionality for fields with
options, including methods for getting the field value, setting default variables, and building
items based on the options provided.</p>
</dd>
<dt><a href="#UiFieldWithFields">UiFieldWithFields</a> ⇐ <code><a href="#UiField">UiField</a></code></dt>
<dd><p>The <code>UiFieldWithFields</code> class is a subclass of <code>UiField</code> that renders an array of components based on the values of its fields.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#booleanField">booleanField([label], [options])</a> ⇒ <code><a href="#UiBooleanField">UiBooleanField</a></code></dt>
<dd><p>The function <code>booleanField</code> creates a boolean field with a label and optional additional options.</p>
</dd>
<dt><a href="#checkboxesField">checkboxesField([label], [choices], [options])</a> ⇒ <code><a href="#UiCheckboxesField">UiCheckboxesField</a></code></dt>
<dd><p>The function <code>checkboxesField</code> creates a checkboxes field with a label, choices, and additional
options.</p>
</dd>
<dt><a href="#colorField">colorField([label], [options])</a> ⇒ <code><a href="#UiColorField">UiColorField</a></code></dt>
<dd><p>The function <code>colorField</code> creates a new UiColorField object with the provided label and options.</p>
</dd>
<dt><a href="#numberField">numberField([label], [options])</a> ⇒ <code><a href="#UiNumberField">UiNumberField</a></code></dt>
<dd><p>The function &quot;numberField&quot; creates a new number input field with an optional label and additional
options.</p>
</dd>
<dt><a href="#textareaField">textareaField([label], [options])</a> ⇒ <code><a href="#UiTextareaField">UiTextareaField</a></code></dt>
<dd><p>The function <code>textareaField</code> creates a textarea input field with a label and optional additional
options.</p>
</dd>
<dt><a href="#dateField">dateField([label], [options])</a> ⇒ <code><a href="#UiDateField">UiDateField</a></code></dt>
<dd><p>The function <code>dateField</code> creates a new date field with a label and optional additional options.</p>
</dd>
<dt><a href="#datetimeField">datetimeField([label], [options])</a> ⇒ <code><a href="#UiDateTimeField">UiDateTimeField</a></code></dt>
<dd><p>The function <code>datetimeField</code> creates a new <code>UiDateTimeField</code> object with the provided label and
options.</p>
</dd>
<dt><a href="#datetimelocalField">datetimelocalField([label], [options])</a> ⇒ <code><a href="#UiDateTimeLocalField">UiDateTimeLocalField</a></code></dt>
<dd><p>The function <code>datetimelocalField</code> creates a new instance of <code>UiDateTimeLocalField</code> with the provided
label and options.</p>
</dd>
<dt><a href="#emailField">emailField([label], [options])</a> ⇒ <code><a href="#UiEmailField">UiEmailField</a></code></dt>
<dd><p>The function creates an email input field with an optional label and additional options.</p>
</dd>
<dt><a href="#fileField">fileField([label], [options])</a> ⇒ <code><a href="#UiFileField">UiFileField</a></code></dt>
<dd><p>The function <code>fileField</code> creates a new instance of <code>UiFileField</code> with the provided label and
options.</p>
</dd>
<dt><a href="#formField">formField([label], [fields], [options])</a> ⇒ <code><a href="#UiFormField">UiFormField</a></code></dt>
<dd><p>The function <code>formField</code> creates a form field with a label, an array of fields, and additional
options.</p>
</dd>
<dt><a href="#hiddenField">hiddenField([label], [options])</a> ⇒ <code><a href="#UiHiddenField">UiHiddenField</a></code></dt>
<dd><p>The function <code>hiddenField</code> creates a hidden field with an optional label and additional options.</p>
</dd>
<dt><a href="#imageField">imageField([label], [options])</a> ⇒ <code><a href="#UiImageField">UiImageField</a></code></dt>
<dd><p>The function <code>imageField</code> creates a new image field with a label and optional additional options.</p>
</dd>
<dt><a href="#monthField">monthField([label], [options])</a> ⇒ <code><a href="#UiMonthField">UiMonthField</a></code></dt>
<dd><p>The function <code>monthField</code> creates a new month field UI component with an optional label and
additional options.</p>
</dd>
<dt><a href="#passwordField">passwordField([label], [options])</a> ⇒ <code><a href="#UiPasswordField">UiPasswordField</a></code></dt>
<dd><p>The function creates a password field with a label and optional additional options.</p>
</dd>
<dt><a href="#radioField">radioField([label], [choices], [options])</a> ⇒ <code><a href="#UiRadioField">UiRadioField</a></code></dt>
<dd><p>The function <code>radioField</code> creates a radio field with a label, choices, and additional options.</p>
</dd>
<dt><a href="#rangeField">rangeField([label], [options])</a> ⇒ <code><a href="#UiRangeField">UiRangeField</a></code></dt>
<dd><p>The function <code>rangeField</code> creates a range field UI element with a label and optional additional
options.</p>
</dd>
<dt><a href="#searchField">searchField([label], [options])</a> ⇒ <code><a href="#UiSearchField">UiSearchField</a></code></dt>
<dd><p>The function <code>searchField</code> creates a new instance of <code>UiSearchField</code> with the provided label and
options.</p>
</dd>
<dt><a href="#selectField">selectField([label], [choices], [options])</a> ⇒ <code><a href="#UiSelectField">UiSelectField</a></code></dt>
<dd><p>The function <code>selectField</code> creates a new <code>UiSelectField</code> object with the provided label, choices,
and options.</p>
</dd>
<dt><a href="#telField">telField([label], [options])</a> ⇒ <code><a href="#UiTelField">UiTelField</a></code></dt>
<dd><p>The function <code>telField</code> creates a new <code>UiTelField</code> object with optional label and options.</p>
</dd>
<dt><a href="#textField">textField([label], [options])</a> ⇒ <code><a href="#UiTextField">UiTextField</a></code></dt>
<dd><p>The function <code>textField</code> creates a new instance of <code>UiTextField</code> with the provided label and
options.</p>
</dd>
<dt><a href="#timeField">timeField([label], [options])</a> ⇒ <code><a href="#UiTimeField">UiTimeField</a></code></dt>
<dd><p>The function <code>timeField</code> creates a time field UI element with an optional label and additional
options.</p>
</dd>
<dt><a href="#urlField">urlField([label], [options])</a> ⇒ <code><a href="#UiUrlField">UiUrlField</a></code></dt>
<dd><p>The function <code>urlField</code> creates a URL input field with an optional label.</p>
</dd>
<dt><a href="#getLabelAndRequired">getLabelAndRequired([label])</a> ⇒ <code>object</code></dt>
<dd><p>The function <code>getLabelAndRequired</code> returns an object with a sanitized label and a boolean indicating
if the label suggests that it is required.</p>
</dd>
<dt><a href="#sanitizeLabel">sanitizeLabel([label])</a> ⇒ <code>string</code></dt>
<dd><p>The <code>sanitizeLabel</code> function takes a label as input, removes trailing asterisks and leading/trailing
whitespace, and returns the sanitized label or &#39;No label&#39; if the resulting label is empty.</p>
</dd>
<dt><a href="#itSuggestsRequired">itSuggestsRequired(label)</a> ⇒ <code>boolean</code></dt>
<dd><p>The function checks if a label ends with an asterisk (*) to suggest that it is required.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#RendererOptions">RendererOptions</a> : <code>object</code></dt>
<dd><p>The <code>RendererOptions</code> object represents the options of a renderer.</p>
</dd>
<dt><a href="#TemplateOptions">TemplateOptions</a> : <code>object</code></dt>
<dd><p>The <code>TemplateOptions</code> object represents the template options of a field.</p>
</dd>
<dt><a href="#FieldProperties">FieldProperties</a> : <code>object</code></dt>
<dd><p>The <code>FieldProperties</code> object represents a field in a form.</p>
</dd>
<dt><a href="#FieldChoice">FieldChoice</a> : <code>object</code></dt>
<dd><p>The <code>FieldChoice</code> object represents a choice in a radio, select, or checkboxes field.</p>
</dd>
</dl>

<a name="UiRenderer"></a>

## UiRenderer
The `UiRenderer` class is a JavaScript class that renders a template either from a file or from a
string, replacing placeholders with values.

**Kind**: global class  

* [UiRenderer](#UiRenderer)
    * [new UiRenderer([props])](#new_UiRenderer_new)
    * [.render([values])](#UiRenderer+render) ⇒ <code>string</code>
    * [.usesTemplateFilename()](#UiRenderer+usesTemplateFilename) ⇒ <code>boolean</code>
    * [.getTemplateFilename()](#UiRenderer+getTemplateFilename) ⇒ <code>string</code>
    * [.getTemplateString()](#UiRenderer+getTemplateString) ⇒ <code>string</code>
    * [.renderTemplateFilename(templateFilename, [values])](#UiRenderer+renderTemplateFilename) ⇒ <code>string</code>
    * [.renderTemplateString(templateString, [values])](#UiRenderer+renderTemplateString) ⇒ <code>string</code>

<a name="new_UiRenderer_new"></a>

### new UiRenderer([props])
The constructor function initializes an object with default properties and allows for overriding
those properties with custom values.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>RendererOptions</code>](#RendererOptions) | <code>{}</code> | An object containing the properties passed to the constructor. |

<a name="UiRenderer+render"></a>

### uiRenderer.render([values]) ⇒ <code>string</code>
The render function checks if a template filename is provided and renders the template using
either the filename or the template string.

**Kind**: instance method of [<code>UiRenderer</code>](#UiRenderer)  
**Returns**: <code>string</code> - the result of either `this.renderTemplateFilename(this.getTemplateFilename(), values)`
or `this.renderTemplateString(this.getTemplateString(), values)`, depending on the result of
`this.usesTemplateFilename()`.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be used in the template rendering. These values can be accessed within the template using placeholders or variables. |

<a name="UiRenderer+usesTemplateFilename"></a>

### uiRenderer.usesTemplateFilename() ⇒ <code>boolean</code>
The function checks if the template filename is defined and should be used.

**Kind**: instance method of [<code>UiRenderer</code>](#UiRenderer)  
**Returns**: <code>boolean</code> - It returns a boolean value. It returns true if the `useTemplateFilename` prop is true and the
`templateFilename` prop is not undefined. Otherwise, it returns false.  
<a name="UiRenderer+getTemplateFilename"></a>

### uiRenderer.getTemplateFilename() ⇒ <code>string</code>
The function returns the template filename from the props.

**Kind**: instance method of [<code>UiRenderer</code>](#UiRenderer)  
**Returns**: <code>string</code> - The value of `this.props.templateFilename` is being returned.  
<a name="UiRenderer+getTemplateString"></a>

### uiRenderer.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiRenderer</code>](#UiRenderer)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiRenderer+renderTemplateFilename"></a>

### uiRenderer.renderTemplateFilename(templateFilename, [values]) ⇒ <code>string</code>
The function `renderTemplateFilename` reads a template file, replaces placeholders with values,
and returns the rendered template as a string.

**Kind**: instance method of [<code>UiRenderer</code>](#UiRenderer)  
**Returns**: <code>string</code> - the result of calling the `renderTemplateString` method with the contents of the
`templateFilename` file as a string and the `values` object as arguments.  
**Throws**:

- <code>Error</code> If the `templateFilename` parameter is undefined.


| Param | Description |
| --- | --- |
| templateFilename | The templateFilename parameter is a string that represents the filename of the template file that needs to be rendered. |
| [values] | The `values` parameter is an optional object that contains key-value pairs. These values can be used to replace placeholders in the template file with actual values. |

<a name="UiRenderer+renderTemplateString"></a>

### uiRenderer.renderTemplateString(templateString, [values]) ⇒ <code>string</code>
The function `renderTemplateString` takes a template string and an optional object of values,
and returns a beautified version of the template string with the values replaced.

**Kind**: instance method of [<code>UiRenderer</code>](#UiRenderer)  
**Returns**: <code>string</code> - the result of calling the `beautify` function with the `templateString` and `values` as
arguments.  
**Throws**:

- <code>Error</code> If the `templateString` parameter is undefined.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| templateString |  |  | A string that represents a template with placeholders for values to be inserted. |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an optional object that contains key-value pairs. These values can be used to replace placeholders in the `templateString`. |

<a name="UiHandlebarsRenderer"></a>

## UiHandlebarsRenderer ⇐ [<code>UiRenderer</code>](#UiRenderer)
The `UiHandlebarsRenderer` class is a subclass of `UiRenderer` that provides methods for rendering
Handlebars templates.

**Kind**: global class  
**Extends**: [<code>UiRenderer</code>](#UiRenderer)  

* [UiHandlebarsRenderer](#UiHandlebarsRenderer) ⇐ [<code>UiRenderer</code>](#UiRenderer)
    * [new UiHandlebarsRenderer([props])](#new_UiHandlebarsRenderer_new)
    * [.renderTemplateFilename(templateFilename, [values])](#UiHandlebarsRenderer+renderTemplateFilename) ⇒ <code>string</code>
    * [.renderTemplateString(templateString, [values])](#UiHandlebarsRenderer+renderTemplateString) ⇒ <code>string</code>
    * [.render([values])](#UiRenderer+render) ⇒ <code>string</code>
    * [.usesTemplateFilename()](#UiRenderer+usesTemplateFilename) ⇒ <code>boolean</code>
    * [.getTemplateFilename()](#UiRenderer+getTemplateFilename) ⇒ <code>string</code>
    * [.getTemplateString()](#UiRenderer+getTemplateString) ⇒ <code>string</code>

<a name="new_UiHandlebarsRenderer_new"></a>

### new UiHandlebarsRenderer([props])
This is a constructor function in JavaScript that takes an optional props object as an argument.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>RendererOptions</code>](#RendererOptions) | <code>{}</code> | The `props` parameter is an object that contains any properties that are passed to the constructor when creating an instance of the class. It is an optional parameter and if no value is provided, an empty object `{}` is used as the default value. |

<a name="UiHandlebarsRenderer+renderTemplateFilename"></a>

### uiHandlebarsRenderer.renderTemplateFilename(templateFilename, [values]) ⇒ <code>string</code>
The function `renderTemplateFilename` renders a template file using Handlebars with optional
values and template options.

**Kind**: instance method of [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)  
**Overrides**: [<code>renderTemplateFilename</code>](#UiRenderer+renderTemplateFilename)  
**Returns**: <code>string</code> - the result of calling the `hbsr.render_template` function with the provided
`templateFilename`, `values`, and `templateOptions` as arguments.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| templateFilename |  |  | The template filename is the name or path of the template file that you want to render. It could be a string representing the filename or a variable containing the filename. |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an optional object that contains the values to be used in the template rendering. These values can be accessed within the template using placeholders or variables. |

<a name="UiHandlebarsRenderer+renderTemplateString"></a>

### uiHandlebarsRenderer.renderTemplateString(templateString, [values]) ⇒ <code>string</code>
The function `renderTemplateString` takes a template string and an optional object of values,
and returns the rendered template.

**Kind**: instance method of [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)  
**Overrides**: [<code>renderTemplateString</code>](#UiRenderer+renderTemplateString)  
**Returns**: <code>string</code> - the result of rendering the template string with the provided values.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| templateString |  |  | The templateString parameter is a string that represents a template. It can contain placeholders or variables that will be replaced with actual values when the template is rendered. |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an optional object that contains key-value pairs representing the values to be substituted in the template string. These values will be used to replace placeholders or variables in the template string with their corresponding values. |

<a name="UiRenderer+render"></a>

### uiHandlebarsRenderer.render([values]) ⇒ <code>string</code>
The render function checks if a template filename is provided and renders the template using
either the filename or the template string.

**Kind**: instance method of [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)  
**Overrides**: [<code>render</code>](#UiRenderer+render)  
**Returns**: <code>string</code> - the result of either `this.renderTemplateFilename(this.getTemplateFilename(), values)`
or `this.renderTemplateString(this.getTemplateString(), values)`, depending on the result of
`this.usesTemplateFilename()`.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be used in the template rendering. These values can be accessed within the template using placeholders or variables. |

<a name="UiRenderer+usesTemplateFilename"></a>

### uiHandlebarsRenderer.usesTemplateFilename() ⇒ <code>boolean</code>
The function checks if the template filename is defined and should be used.

**Kind**: instance method of [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)  
**Overrides**: [<code>usesTemplateFilename</code>](#UiRenderer+usesTemplateFilename)  
**Returns**: <code>boolean</code> - It returns a boolean value. It returns true if the `useTemplateFilename` prop is true and the
`templateFilename` prop is not undefined. Otherwise, it returns false.  
<a name="UiRenderer+getTemplateFilename"></a>

### uiHandlebarsRenderer.getTemplateFilename() ⇒ <code>string</code>
The function returns the template filename from the props.

**Kind**: instance method of [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)  
**Overrides**: [<code>getTemplateFilename</code>](#UiRenderer+getTemplateFilename)  
**Returns**: <code>string</code> - The value of `this.props.templateFilename` is being returned.  
<a name="UiRenderer+getTemplateString"></a>

### uiHandlebarsRenderer.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)  
**Overrides**: [<code>getTemplateString</code>](#UiRenderer+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiBooleanField"></a>

## UiBooleanField ⇐ [<code>UiField</code>](#UiField)
The `UiBooleanField` class is a subclass of `UiField` that represents a checkbox field in a user interface.

**Kind**: global class  
**Extends**: [<code>UiField</code>](#UiField)  

* [UiBooleanField](#UiBooleanField) ⇐ [<code>UiField</code>](#UiField)
    * [new UiBooleanField([props])](#new_UiBooleanField_new)
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateFilename()](#UiField+getTemplateFilename) ⇒ <code>string</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiBooleanField_new"></a>

### new UiBooleanField([props])
The constructor function sets the type property of the props object to 'checkbox'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the component when it is created. In this case, the `props` object is set to an empty object `{}` by default if no argument is provided when creating the component. |

<a name="UiField+render"></a>

### uiBooleanField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiBooleanField</code>](#UiBooleanField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiBooleanField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiBooleanField</code>](#UiBooleanField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiBooleanField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiBooleanField</code>](#UiBooleanField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiBooleanField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiBooleanField</code>](#UiBooleanField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiBooleanField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiBooleanField</code>](#UiBooleanField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiBooleanField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiBooleanField</code>](#UiBooleanField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateFilename"></a>

### uiBooleanField.getTemplateFilename() ⇒ <code>string</code>
The function returns a template filename based on the type property.

**Kind**: instance method of [<code>UiBooleanField</code>](#UiBooleanField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiField+getTemplateFilename)  
**Returns**: <code>string</code> - The template filename that is being returned is `ui-${this.props.type}`.  
<a name="UiField+getTemplateString"></a>

### uiBooleanField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiBooleanField</code>](#UiBooleanField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiBooleanField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiBooleanField</code>](#UiBooleanField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiBooleanField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiBooleanField</code>](#UiBooleanField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiBooleanField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiBooleanField</code>](#UiBooleanField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiTextField"></a>

## UiTextField ⇐ [<code>UiField</code>](#UiField)
The `UiTextField` class is a subclass of `UiField` that represents a text input field in a user interface.

**Kind**: global class  
**Extends**: [<code>UiField</code>](#UiField)  

* [UiTextField](#UiTextField) ⇐ [<code>UiField</code>](#UiField)
    * [new UiTextField([props])](#new_UiTextField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiTextField_new"></a>

### new UiTextField([props])
The constructor function sets the default value of the 'type' property to 'text'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the constructor. In this case, the `props` object is set to an empty object `{}` by default if no argument is provided when creating an instance of the class. |

<a name="UiTextField+getTemplateFilename"></a>

### uiTextField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiTextField</code>](#UiTextField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiTextField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiTextField</code>](#UiTextField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiTextField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiTextField</code>](#UiTextField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiTextField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiTextField</code>](#UiTextField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiTextField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiTextField</code>](#UiTextField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiTextField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiTextField</code>](#UiTextField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiTextField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiTextField</code>](#UiTextField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiTextField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiTextField</code>](#UiTextField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiTextField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiTextField</code>](#UiTextField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiTextField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiTextField</code>](#UiTextField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiTextField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiTextField</code>](#UiTextField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiNumberField"></a>

## UiNumberField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiNumberField` class is a subclass of `UiTextField` that sets the input type to "number".

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiNumberField](#UiNumberField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiNumberField([props])](#new_UiNumberField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiNumberField_new"></a>

### new UiNumberField([props])
The constructor function sets the type property of the props object to 'number'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the constructor when creating an instance of the class. In this case, the `props` object is set to an empty object `{}` by default if no argument is provided when creating an instance. |

<a name="UiTextField+getTemplateFilename"></a>

### uiNumberField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiNumberField</code>](#UiNumberField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiNumberField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiNumberField</code>](#UiNumberField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiNumberField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiNumberField</code>](#UiNumberField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiNumberField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiNumberField</code>](#UiNumberField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiNumberField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiNumberField</code>](#UiNumberField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiNumberField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiNumberField</code>](#UiNumberField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiNumberField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiNumberField</code>](#UiNumberField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiNumberField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiNumberField</code>](#UiNumberField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiNumberField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiNumberField</code>](#UiNumberField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiNumberField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiNumberField</code>](#UiNumberField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiNumberField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiNumberField</code>](#UiNumberField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiCheckboxesField"></a>

## UiCheckboxesField ⇐ [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)
The `UiCheckboxesField` class is a subclass of `UiFieldWithOptions` that represents a field with multiple checkboxes as options.

**Kind**: global class  
**Extends**: [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  

* [UiCheckboxesField](#UiCheckboxesField) ⇐ [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)
    * [new UiCheckboxesField([props])](#new_UiCheckboxesField_new)
    * [.getValue([values])](#UiFieldWithOptions+getValue) ⇒ <code>Array</code>
    * [.defaultVariables([values])](#UiFieldWithOptions+defaultVariables) ⇒ <code>object</code>
    * [.buildItems([fieldValue])](#UiFieldWithOptions+buildItems) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.isOptionValueChecked(fieldValue, optionValue)](#UiFieldWithOptions+isOptionValueChecked) ⇒ <code>boolean</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateFilename()](#UiField+getTemplateFilename) ⇒ <code>string</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>

<a name="new_UiCheckboxesField_new"></a>

### new UiCheckboxesField([props])
The constructor function sets the type property of the props object to 'checkboxes'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties passed to the constructor. In this case, it is set to an empty object `{}` by default. |

<a name="UiFieldWithOptions+getValue"></a>

### uiCheckboxesField.getValue([values]) ⇒ <code>Array</code>
The function `getValue` takes an object as an argument and returns an array containing the
values of the object, or an empty array if the values are undefined.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>getValue</code>](#UiFieldWithOptions+getValue)  
**Returns**: <code>Array</code> - The function `getValue()` returns an array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiFieldWithOptions+defaultVariables"></a>

### uiCheckboxesField.defaultVariables([values]) ⇒ <code>object</code>
The function `defaultVariables` returns an object with default variables, including an `items`
property that is built based on a field value.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>defaultVariables</code>](#UiFieldWithOptions+defaultVariables)  
**Returns**: <code>object</code> - an object that combines the default variables from the superclass with an additional
property called "items". The value of "items" is determined by calling the "buildItems" method
with the "fieldValue" as an argument.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains any values that are passed to the `defaultVariables` function. |

<a name="UiFieldWithOptions+buildItems"></a>

### uiCheckboxesField.buildItems([fieldValue]) ⇒ <code>Array.&lt;Object&gt;</code>
The function "buildItems" takes a fieldValue and returns an array of objects with label, value,
and checked properties based on the options provided.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>buildItems</code>](#UiFieldWithOptions+buildItems)  
**Returns**: <code>Array.&lt;Object&gt;</code> - The function `buildItems` returns an array of objects. Each object in the array has
three properties: `label`, `value`, and `checked`. The `label` property is set to the `label`
property of the corresponding option object in `this.props.options`. The `value` property is set
to the `value` property of the corresponding option object. The `checked` property is  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [fieldValue] | <code>object</code> | <code>{}</code> | The fieldValue - The `fieldValue` parameter is the value of the field that you want to check against the options. It is used to determine whether an option should be checked or not. |

<a name="UiFieldWithOptions+isOptionValueChecked"></a>

### uiCheckboxesField.isOptionValueChecked(fieldValue, optionValue) ⇒ <code>boolean</code>
The function checks if a specific option value is included in a given field value.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>isOptionValueChecked</code>](#UiFieldWithOptions+isOptionValueChecked)  
**Returns**: <code>boolean</code> - a boolean value indicating whether the optionValue is included in the fieldValue.  

| Param | Type | Description |
| --- | --- | --- |
| fieldValue | <code>object</code> | The value of the field that you want to check if it includes the option value. |
| optionValue | <code>string</code> | The value of the option that you want to check if it is included in the fieldValue. |

<a name="UiField+render"></a>

### uiCheckboxesField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiCheckboxesField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiCheckboxesField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiCheckboxesField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+variables"></a>

### uiCheckboxesField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateFilename"></a>

### uiCheckboxesField.getTemplateFilename() ⇒ <code>string</code>
The function returns a template filename based on the type property.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiField+getTemplateFilename)  
**Returns**: <code>string</code> - The template filename that is being returned is `ui-${this.props.type}`.  
<a name="UiField+getTemplateString"></a>

### uiCheckboxesField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiCheckboxesField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiCheckboxesField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiCheckboxesField</code>](#UiCheckboxesField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiColorField"></a>

## UiColorField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiColorField` class is a subclass of `UiTextField` that sets the input type to 'color'.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiColorField](#UiColorField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiColorField([props])](#new_UiColorField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiColorField_new"></a>

### new UiColorField([props])
The constructor function sets the default value of the type property to 'color' in the props
object.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the constructor when creating an instance of the class. In this case, the `props` object is set to an empty object `{}` by default if no arguments are provided when creating an instance. |

<a name="UiTextField+getTemplateFilename"></a>

### uiColorField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiColorField</code>](#UiColorField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiColorField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiColorField</code>](#UiColorField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiColorField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiColorField</code>](#UiColorField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiColorField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiColorField</code>](#UiColorField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiColorField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiColorField</code>](#UiColorField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiColorField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiColorField</code>](#UiColorField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiColorField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiColorField</code>](#UiColorField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiColorField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiColorField</code>](#UiColorField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiColorField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiColorField</code>](#UiColorField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiColorField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiColorField</code>](#UiColorField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiColorField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiColorField</code>](#UiColorField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiDateField"></a>

## UiDateField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiDateField` class is a subclass of `UiTextField` that sets the input type to 'date'.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiDateField](#UiDateField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiDateField([props])](#new_UiDateField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiDateField_new"></a>

### new UiDateField([props])
The constructor function sets the default value of the "type" property to "date" in the props
object.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties passed to the constructor. In this case, it is an optional parameter with a default value of an empty object `{}`. |

<a name="UiTextField+getTemplateFilename"></a>

### uiDateField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiDateField</code>](#UiDateField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiDateField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiDateField</code>](#UiDateField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiDateField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiDateField</code>](#UiDateField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiDateField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiDateField</code>](#UiDateField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiDateField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiDateField</code>](#UiDateField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiDateField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiDateField</code>](#UiDateField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiDateField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiDateField</code>](#UiDateField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiDateField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiDateField</code>](#UiDateField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiDateField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiDateField</code>](#UiDateField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiDateField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiDateField</code>](#UiDateField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiDateField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiDateField</code>](#UiDateField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiDateTimeField"></a>

## UiDateTimeField ⇐ [<code>UiTextField</code>](#UiTextField)
The UiDateTimeField class is a subclass of UiTextField that sets the type of the input field to 'datetime'.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiDateTimeField](#UiDateTimeField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiDateTimeField([props])](#new_UiDateTimeField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiDateTimeField_new"></a>

### new UiDateTimeField([props])
The constructor function sets the type property of the props object to 'datetime'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties passed to the constructor. In this case, it is an optional parameter with a default value of an empty object `{}`. |

<a name="UiTextField+getTemplateFilename"></a>

### uiDateTimeField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiDateTimeField</code>](#UiDateTimeField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiDateTimeField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiDateTimeField</code>](#UiDateTimeField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiDateTimeField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiDateTimeField</code>](#UiDateTimeField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiDateTimeField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiDateTimeField</code>](#UiDateTimeField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiDateTimeField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiDateTimeField</code>](#UiDateTimeField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiDateTimeField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiDateTimeField</code>](#UiDateTimeField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiDateTimeField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiDateTimeField</code>](#UiDateTimeField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiDateTimeField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiDateTimeField</code>](#UiDateTimeField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiDateTimeField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiDateTimeField</code>](#UiDateTimeField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiDateTimeField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiDateTimeField</code>](#UiDateTimeField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiDateTimeField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiDateTimeField</code>](#UiDateTimeField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiDateTimeLocalField"></a>

## UiDateTimeLocalField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiDateTimeLocalField` class is a subclass of `UiTextField` that sets the input type to `datetime-local`.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiDateTimeLocalField](#UiDateTimeLocalField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiDateTimeLocalField([props])](#new_UiDateTimeLocalField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiDateTimeLocalField_new"></a>

### new UiDateTimeLocalField([props])
The constructor function sets the type of a props object to 'datetime-local'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties passed to the constructor. In this case, it is an optional parameter with a default value of an empty object `{}`. |

<a name="UiTextField+getTemplateFilename"></a>

### uiDateTimeLocalField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiDateTimeLocalField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiDateTimeLocalField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiDateTimeLocalField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiDateTimeLocalField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiDateTimeLocalField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiDateTimeLocalField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiDateTimeLocalField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiDateTimeLocalField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiDateTimeLocalField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiDateTimeLocalField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiEmailField"></a>

## UiEmailField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiEmailField` class is a subclass of `UiTextField` that sets the `type` property to 'email'.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiEmailField](#UiEmailField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiEmailField([props])](#new_UiEmailField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiEmailField_new"></a>

### new UiEmailField([props])
The constructor function sets the type property of the props object to 'email'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties passed to the constructor. In this case, it is set to an empty object `{}` by default. |

<a name="UiTextField+getTemplateFilename"></a>

### uiEmailField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiEmailField</code>](#UiEmailField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiEmailField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiEmailField</code>](#UiEmailField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiEmailField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiEmailField</code>](#UiEmailField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiEmailField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiEmailField</code>](#UiEmailField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiEmailField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiEmailField</code>](#UiEmailField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiEmailField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiEmailField</code>](#UiEmailField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiEmailField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiEmailField</code>](#UiEmailField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiEmailField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiEmailField</code>](#UiEmailField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiEmailField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiEmailField</code>](#UiEmailField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiEmailField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiEmailField</code>](#UiEmailField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiEmailField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiEmailField</code>](#UiEmailField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiFileField"></a>

## UiFileField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiFileField` class is a subclass of `UiTextField` that sets the `type` property to 'file'.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiFileField](#UiFileField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiFileField([props])](#new_UiFileField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiFileField_new"></a>

### new UiFileField([props])
The constructor function sets the type property of the props object to 'file'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the constructor when creating an instance of the class. In this case, the `props` object is set to an empty object `{}` by default if no arguments are provided when creating an instance. |

<a name="UiTextField+getTemplateFilename"></a>

### uiFileField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiFileField</code>](#UiFileField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiFileField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiFileField</code>](#UiFileField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiFileField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiFileField</code>](#UiFileField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiFileField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiFileField</code>](#UiFileField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiFileField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiFileField</code>](#UiFileField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiFileField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiFileField</code>](#UiFileField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiFileField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiFileField</code>](#UiFileField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiFileField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiFileField</code>](#UiFileField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiFileField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiFileField</code>](#UiFileField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiFileField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiFileField</code>](#UiFileField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiFileField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiFileField</code>](#UiFileField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiFormField"></a>

## UiFormField ⇐ [<code>UiFieldWithFields</code>](#UiFieldWithFields)
The `UiFormField` class is a subclass of `UiFieldWithFields` that sets the type property of the
props object to 'form' in its constructor.

**Kind**: global class  
**Extends**: [<code>UiFieldWithFields</code>](#UiFieldWithFields)  

* [UiFormField](#UiFormField) ⇐ [<code>UiFieldWithFields</code>](#UiFieldWithFields)
    * [new UiFormField([props])](#new_UiFormField_new)
    * [.defaultVariables([values])](#UiFieldWithFields+defaultVariables) ⇒ <code>object</code>
    * [.buildComponents([fieldValue])](#UiFieldWithFields+buildComponents) ⇒ <code>Array.&lt;string&gt;</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateFilename()](#UiField+getTemplateFilename) ⇒ <code>string</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiFormField_new"></a>

### new UiFormField([props])
The constructor function sets the type property of the props object to 'form'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties passed to the constructor. In this case, it is set to an empty object `{}` by default. |

<a name="UiFieldWithFields+defaultVariables"></a>

### uiFormField.defaultVariables([values]) ⇒ <code>object</code>
The function `defaultVariables` returns an object with default variables, including a
`components` property that is built based on the `fieldValue`.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>defaultVariables</code>](#UiFieldWithFields+defaultVariables)  
**Returns**: <code>object</code> - an object that combines the default variables from the superclass with a new property
called "components". The value of "components" is determined by calling the "buildComponents"
method with the "fieldValue" as an argument.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains any values that need to be passed to the `defaultVariables` function. |

<a name="UiFieldWithFields+buildComponents"></a>

### uiFormField.buildComponents([fieldValue]) ⇒ <code>Array.&lt;string&gt;</code>
The function "buildComponents" takes a fieldValue parameter and returns an array of components
rendered based on the fields array.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>buildComponents</code>](#UiFieldWithFields+buildComponents)  
**Returns**: <code>Array.&lt;string&gt;</code> - The function `buildComponents` returns an array of components. Each component is rendered based on the value of the
corresponding field in the `fieldValue` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [fieldValue] | <code>object</code> | <code>{}</code> | The `fieldValue` parameter is an object that contains the current values of the fields. It is used to pass the value of each field to the `render` method of each field component. |

<a name="UiField+render"></a>

### uiFormField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiFormField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiFormField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiFormField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+variables"></a>

### uiFormField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateFilename"></a>

### uiFormField.getTemplateFilename() ⇒ <code>string</code>
The function returns a template filename based on the type property.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiField+getTemplateFilename)  
**Returns**: <code>string</code> - The template filename that is being returned is `ui-${this.props.type}`.  
<a name="UiField+getTemplateString"></a>

### uiFormField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiFormField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiFormField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiFormField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiFormField</code>](#UiFormField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiHiddenField"></a>

## UiHiddenField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiHiddenField` class is a subclass of `UiTextField` that represents a hidden input field in a
user interface.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiHiddenField](#UiHiddenField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiHiddenField([props])](#new_UiHiddenField_new)
    * [.getTemplateFilename()](#UiHiddenField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiHiddenField_new"></a>

### new UiHiddenField([props])
The constructor function sets the type property of the props object to 'hidden'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the component when it is created. In this case, the `props` object is set to an empty object `{}` by default if no argument is provided when creating the component. |

<a name="UiHiddenField+getTemplateFilename"></a>

### uiHiddenField.getTemplateFilename() ⇒ <code>string</code>
The function getTemplateFilename() returns the filename 'ui-hidden'.

**Kind**: instance method of [<code>UiHiddenField</code>](#UiHiddenField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - - Returns the string 'ui-hidden'.  
<a name="UiField+render"></a>

### uiHiddenField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiHiddenField</code>](#UiHiddenField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiHiddenField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiHiddenField</code>](#UiHiddenField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiHiddenField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiHiddenField</code>](#UiHiddenField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiHiddenField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiHiddenField</code>](#UiHiddenField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiHiddenField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiHiddenField</code>](#UiHiddenField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiHiddenField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiHiddenField</code>](#UiHiddenField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiHiddenField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiHiddenField</code>](#UiHiddenField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiHiddenField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiHiddenField</code>](#UiHiddenField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiHiddenField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiHiddenField</code>](#UiHiddenField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiHiddenField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiHiddenField</code>](#UiHiddenField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiImageField"></a>

## UiImageField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiImageField` class is a subclass of `UiTextField` that represents an image input field with default alternative text and source.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiImageField](#UiImageField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiImageField([props])](#new_UiImageField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiImageField_new"></a>

### new UiImageField([props])
The constructor function sets default values for the props object and adds additional properties
before calling the super constructor.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the constructor. |

<a name="UiTextField+getTemplateFilename"></a>

### uiImageField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiImageField</code>](#UiImageField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiImageField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiImageField</code>](#UiImageField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiImageField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiImageField</code>](#UiImageField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiImageField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiImageField</code>](#UiImageField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiImageField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiImageField</code>](#UiImageField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiImageField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiImageField</code>](#UiImageField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiImageField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiImageField</code>](#UiImageField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiImageField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiImageField</code>](#UiImageField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiImageField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiImageField</code>](#UiImageField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiImageField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiImageField</code>](#UiImageField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiImageField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiImageField</code>](#UiImageField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiMonthField"></a>

## UiMonthField ⇐ [<code>UiTextField</code>](#UiTextField)
The UiMonthField class is a subclass of UiTextField that sets the input type to 'month'.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiMonthField](#UiMonthField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiMonthField([props])](#new_UiMonthField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiMonthField_new"></a>

### new UiMonthField([props])
The constructor function sets the default value of the "type" property to "month" in the props
object.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties passed to the constructor. In this case, it is set to an empty object `{}` by default. |

<a name="UiTextField+getTemplateFilename"></a>

### uiMonthField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiMonthField</code>](#UiMonthField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiMonthField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiMonthField</code>](#UiMonthField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiMonthField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiMonthField</code>](#UiMonthField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiMonthField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiMonthField</code>](#UiMonthField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiMonthField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiMonthField</code>](#UiMonthField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiMonthField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiMonthField</code>](#UiMonthField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiMonthField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiMonthField</code>](#UiMonthField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiMonthField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiMonthField</code>](#UiMonthField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiMonthField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiMonthField</code>](#UiMonthField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiMonthField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiMonthField</code>](#UiMonthField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiMonthField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiMonthField</code>](#UiMonthField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiPasswordField"></a>

## UiPasswordField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiPasswordField` class is a subclass of `UiTextField` that sets the input type to password.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiPasswordField](#UiPasswordField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiPasswordField([props])](#new_UiPasswordField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiPasswordField_new"></a>

### new UiPasswordField([props])
The constructor function sets the type of a password input field to 'password'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties passed to the constructor. It is an optional parameter and if no value is provided, an empty object `{}` is used as the default value. |

<a name="UiTextField+getTemplateFilename"></a>

### uiPasswordField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiPasswordField</code>](#UiPasswordField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiPasswordField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiPasswordField</code>](#UiPasswordField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiPasswordField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiPasswordField</code>](#UiPasswordField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiPasswordField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiPasswordField</code>](#UiPasswordField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiPasswordField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiPasswordField</code>](#UiPasswordField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiPasswordField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiPasswordField</code>](#UiPasswordField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiPasswordField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiPasswordField</code>](#UiPasswordField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiPasswordField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiPasswordField</code>](#UiPasswordField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiPasswordField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiPasswordField</code>](#UiPasswordField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiPasswordField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiPasswordField</code>](#UiPasswordField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiPasswordField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiPasswordField</code>](#UiPasswordField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiRadioField"></a>

## UiRadioField ⇐ [<code>UiField</code>](#UiField)
The `UiRadioField` class is a subclass of `UiFieldWithOptions` that represents a radio button field in a user interface.

**Kind**: global class  
**Extends**: [<code>UiField</code>](#UiField)  

* [UiRadioField](#UiRadioField) ⇐ [<code>UiField</code>](#UiField)
    * [new UiRadioField([props])](#new_UiRadioField_new)
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateFilename()](#UiField+getTemplateFilename) ⇒ <code>string</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiRadioField_new"></a>

### new UiRadioField([props])
The constructor function sets the type property of the props object to 'radio'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the component when it is created. It is an optional parameter, and if no value is provided, an empty object `{}` is used as the default value. |

<a name="UiField+render"></a>

### uiRadioField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiRadioField</code>](#UiRadioField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiRadioField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiRadioField</code>](#UiRadioField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiRadioField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiRadioField</code>](#UiRadioField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiRadioField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiRadioField</code>](#UiRadioField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiRadioField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiRadioField</code>](#UiRadioField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiRadioField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiRadioField</code>](#UiRadioField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateFilename"></a>

### uiRadioField.getTemplateFilename() ⇒ <code>string</code>
The function returns a template filename based on the type property.

**Kind**: instance method of [<code>UiRadioField</code>](#UiRadioField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiField+getTemplateFilename)  
**Returns**: <code>string</code> - The template filename that is being returned is `ui-${this.props.type}`.  
<a name="UiField+getTemplateString"></a>

### uiRadioField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiRadioField</code>](#UiRadioField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiRadioField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiRadioField</code>](#UiRadioField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiRadioField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiRadioField</code>](#UiRadioField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiRadioField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiRadioField</code>](#UiRadioField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiRangeField"></a>

## UiRangeField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiRangeField` class is a subclass of `UiTextField` that sets the `type` property to 'range'.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiRangeField](#UiRangeField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiRangeField([props])](#new_UiRangeField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiRangeField_new"></a>

### new UiRangeField([props])
The constructor function sets the type property of the props object to 'range'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the constructor. In this case, it is set to an empty object `{}` by default. |

<a name="UiTextField+getTemplateFilename"></a>

### uiRangeField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiRangeField</code>](#UiRangeField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiRangeField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiRangeField</code>](#UiRangeField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiRangeField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiRangeField</code>](#UiRangeField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiRangeField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiRangeField</code>](#UiRangeField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiRangeField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiRangeField</code>](#UiRangeField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiRangeField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiRangeField</code>](#UiRangeField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiRangeField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiRangeField</code>](#UiRangeField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiRangeField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiRangeField</code>](#UiRangeField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiRangeField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiRangeField</code>](#UiRangeField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiRangeField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiRangeField</code>](#UiRangeField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiRangeField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiRangeField</code>](#UiRangeField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiSearchField"></a>

## UiSearchField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiSearchField` class is a subclass of `UiTextField` that sets the type of the input field to "search".

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiSearchField](#UiSearchField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiSearchField([props])](#new_UiSearchField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiSearchField_new"></a>

### new UiSearchField([props])
The constructor function sets the default value of the "type" property to "search" in the props
object.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties passed to the constructor. In this case, it is set to an empty object `{}` by default. |

<a name="UiTextField+getTemplateFilename"></a>

### uiSearchField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiSearchField</code>](#UiSearchField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiSearchField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiSearchField</code>](#UiSearchField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiSearchField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiSearchField</code>](#UiSearchField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiSearchField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiSearchField</code>](#UiSearchField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiSearchField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiSearchField</code>](#UiSearchField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiSearchField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiSearchField</code>](#UiSearchField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiSearchField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiSearchField</code>](#UiSearchField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiSearchField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiSearchField</code>](#UiSearchField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiSearchField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiSearchField</code>](#UiSearchField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiSearchField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiSearchField</code>](#UiSearchField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiSearchField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiSearchField</code>](#UiSearchField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiSelectField"></a>

## UiSelectField ⇐ [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)
The UiSelectField class is a subclass of UiFieldWithOptions that represents a select field in a user
interface.

**Kind**: global class  
**Extends**: [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  

* [UiSelectField](#UiSelectField) ⇐ [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)
    * [new UiSelectField([props])](#new_UiSelectField_new)
    * [.getValue([values])](#UiFieldWithOptions+getValue) ⇒ <code>Array</code>
    * [.defaultVariables([values])](#UiFieldWithOptions+defaultVariables) ⇒ <code>object</code>
    * [.buildItems([fieldValue])](#UiFieldWithOptions+buildItems) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.isOptionValueChecked(fieldValue, optionValue)](#UiFieldWithOptions+isOptionValueChecked) ⇒ <code>boolean</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateFilename()](#UiField+getTemplateFilename) ⇒ <code>string</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>

<a name="new_UiSelectField_new"></a>

### new UiSelectField([props])
The constructor function sets the type property of the props object to 'select'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the constructor. In this case, it is set to an empty object `{}` by default. |

<a name="UiFieldWithOptions+getValue"></a>

### uiSelectField.getValue([values]) ⇒ <code>Array</code>
The function `getValue` takes an object as an argument and returns an array containing the
values of the object, or an empty array if the values are undefined.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>getValue</code>](#UiFieldWithOptions+getValue)  
**Returns**: <code>Array</code> - The function `getValue()` returns an array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiFieldWithOptions+defaultVariables"></a>

### uiSelectField.defaultVariables([values]) ⇒ <code>object</code>
The function `defaultVariables` returns an object with default variables, including an `items`
property that is built based on a field value.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>defaultVariables</code>](#UiFieldWithOptions+defaultVariables)  
**Returns**: <code>object</code> - an object that combines the default variables from the superclass with an additional
property called "items". The value of "items" is determined by calling the "buildItems" method
with the "fieldValue" as an argument.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains any values that are passed to the `defaultVariables` function. |

<a name="UiFieldWithOptions+buildItems"></a>

### uiSelectField.buildItems([fieldValue]) ⇒ <code>Array.&lt;Object&gt;</code>
The function "buildItems" takes a fieldValue and returns an array of objects with label, value,
and checked properties based on the options provided.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>buildItems</code>](#UiFieldWithOptions+buildItems)  
**Returns**: <code>Array.&lt;Object&gt;</code> - The function `buildItems` returns an array of objects. Each object in the array has
three properties: `label`, `value`, and `checked`. The `label` property is set to the `label`
property of the corresponding option object in `this.props.options`. The `value` property is set
to the `value` property of the corresponding option object. The `checked` property is  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [fieldValue] | <code>object</code> | <code>{}</code> | The fieldValue - The `fieldValue` parameter is the value of the field that you want to check against the options. It is used to determine whether an option should be checked or not. |

<a name="UiFieldWithOptions+isOptionValueChecked"></a>

### uiSelectField.isOptionValueChecked(fieldValue, optionValue) ⇒ <code>boolean</code>
The function checks if a specific option value is included in a given field value.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>isOptionValueChecked</code>](#UiFieldWithOptions+isOptionValueChecked)  
**Returns**: <code>boolean</code> - a boolean value indicating whether the optionValue is included in the fieldValue.  

| Param | Type | Description |
| --- | --- | --- |
| fieldValue | <code>object</code> | The value of the field that you want to check if it includes the option value. |
| optionValue | <code>string</code> | The value of the option that you want to check if it is included in the fieldValue. |

<a name="UiField+render"></a>

### uiSelectField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiSelectField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiSelectField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiSelectField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+variables"></a>

### uiSelectField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateFilename"></a>

### uiSelectField.getTemplateFilename() ⇒ <code>string</code>
The function returns a template filename based on the type property.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiField+getTemplateFilename)  
**Returns**: <code>string</code> - The template filename that is being returned is `ui-${this.props.type}`.  
<a name="UiField+getTemplateString"></a>

### uiSelectField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiSelectField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiSelectField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiSelectField</code>](#UiSelectField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiTelField"></a>

## UiTelField ⇐ [<code>UiTextField</code>](#UiTextField)
The UiTelField class is a subclass of UiTextField that sets the type of the input field to 'tel'.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiTelField](#UiTelField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiTelField([props])](#new_UiTelField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiTelField_new"></a>

### new UiTelField([props])
The constructor function sets the type of the props object to 'tel' by default.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties passed to the component. In this case, it is an optional parameter with a default value of an empty object `{}`. |

<a name="UiTextField+getTemplateFilename"></a>

### uiTelField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiTelField</code>](#UiTelField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiTelField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiTelField</code>](#UiTelField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiTelField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiTelField</code>](#UiTelField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiTelField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiTelField</code>](#UiTelField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiTelField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiTelField</code>](#UiTelField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiTelField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiTelField</code>](#UiTelField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiTelField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiTelField</code>](#UiTelField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiTelField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiTelField</code>](#UiTelField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiTelField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiTelField</code>](#UiTelField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiTelField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiTelField</code>](#UiTelField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiTelField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiTelField</code>](#UiTelField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiTextareaField"></a>

## UiTextareaField ⇐ [<code>UiField</code>](#UiField)
The `UiTextareaField` class is a subclass of `UiField` that represents a textarea input field in a user interface.

**Kind**: global class  
**Extends**: [<code>UiField</code>](#UiField)  

* [UiTextareaField](#UiTextareaField) ⇐ [<code>UiField</code>](#UiField)
    * [new UiTextareaField([props])](#new_UiTextareaField_new)
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateFilename()](#UiField+getTemplateFilename) ⇒ <code>string</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiTextareaField_new"></a>

### new UiTextareaField([props])
The constructor function sets the type property of the props object to 'textarea'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the constructor. In this case, it is set to an empty object `{}` by default. |

<a name="UiField+render"></a>

### uiTextareaField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiTextareaField</code>](#UiTextareaField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiTextareaField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiTextareaField</code>](#UiTextareaField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiTextareaField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiTextareaField</code>](#UiTextareaField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiTextareaField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiTextareaField</code>](#UiTextareaField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiTextareaField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiTextareaField</code>](#UiTextareaField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiTextareaField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiTextareaField</code>](#UiTextareaField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateFilename"></a>

### uiTextareaField.getTemplateFilename() ⇒ <code>string</code>
The function returns a template filename based on the type property.

**Kind**: instance method of [<code>UiTextareaField</code>](#UiTextareaField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiField+getTemplateFilename)  
**Returns**: <code>string</code> - The template filename that is being returned is `ui-${this.props.type}`.  
<a name="UiField+getTemplateString"></a>

### uiTextareaField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiTextareaField</code>](#UiTextareaField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiTextareaField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiTextareaField</code>](#UiTextareaField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiTextareaField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiTextareaField</code>](#UiTextareaField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiTextareaField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiTextareaField</code>](#UiTextareaField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiTimeField"></a>

## UiTimeField ⇐ [<code>UiTextField</code>](#UiTextField)
The UiTimeField class is a subclass of UiTextField that sets the type of the input field to 'time'.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiTimeField](#UiTimeField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiTimeField([props])](#new_UiTimeField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiTimeField_new"></a>

### new UiTimeField([props])
The constructor function sets the type property of the props object to 'time'.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | props is an object that contains the properties passed to the constructor. It is an optional parameter and if no value is provided, an empty object is assigned as the default value. |

<a name="UiTextField+getTemplateFilename"></a>

### uiTimeField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiTimeField</code>](#UiTimeField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiTimeField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiTimeField</code>](#UiTimeField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiTimeField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiTimeField</code>](#UiTimeField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiTimeField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiTimeField</code>](#UiTimeField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiTimeField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiTimeField</code>](#UiTimeField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiTimeField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiTimeField</code>](#UiTimeField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiTimeField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiTimeField</code>](#UiTimeField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiTimeField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiTimeField</code>](#UiTimeField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiTimeField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiTimeField</code>](#UiTimeField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiTimeField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiTimeField</code>](#UiTimeField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiTimeField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiTimeField</code>](#UiTimeField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiUrlField"></a>

## UiUrlField ⇐ [<code>UiTextField</code>](#UiTextField)
The `UiUrlField` class is a subclass of `UiTextField` that sets the input type to 'url'.

**Kind**: global class  
**Extends**: [<code>UiTextField</code>](#UiTextField)  

* [UiUrlField](#UiUrlField) ⇐ [<code>UiTextField</code>](#UiTextField)
    * [new UiUrlField([props])](#new_UiUrlField_new)
    * [.getTemplateFilename()](#UiTextField+getTemplateFilename) ⇒ <code>string</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiUrlField_new"></a>

### new UiUrlField([props])
The constructor function sets the default value of the "type" property to "url" in the props
object.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `props` parameter is an object that contains the properties and values that are passed to the constructor. In this case, it is set to an empty object `{}` by default. |

<a name="UiTextField+getTemplateFilename"></a>

### uiUrlField.getTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI text template.

**Kind**: instance method of [<code>UiUrlField</code>](#UiUrlField)  
**Overrides**: [<code>getTemplateFilename</code>](#UiTextField+getTemplateFilename)  
**Returns**: <code>string</code> - The string 'ui-text' is being returned.  
<a name="UiField+render"></a>

### uiUrlField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiUrlField</code>](#UiUrlField)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiUrlField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiUrlField</code>](#UiUrlField)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiUrlField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiUrlField</code>](#UiUrlField)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiUrlField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiUrlField</code>](#UiUrlField)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiUrlField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiUrlField</code>](#UiUrlField)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiUrlField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiUrlField</code>](#UiUrlField)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateString"></a>

### uiUrlField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiUrlField</code>](#UiUrlField)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiUrlField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiUrlField</code>](#UiUrlField)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiUrlField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiUrlField</code>](#UiUrlField)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiUrlField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiUrlField</code>](#UiUrlField)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiFieldBase"></a>

## UiFieldBase
The UiFieldBase class is a JavaScript class that sets default values for label, required, name, type, and id, and assigns the props object to this.props.

**Kind**: global class  
<a name="new_UiFieldBase_new"></a>

### new UiFieldBase([props])
The constructor function takes in props and sets default values for label, required, name, type,
and id, and then assigns the props object to this.props.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object containing the properties passed to the constructor. |

<a name="UiField"></a>

## UiField
The `UiField` class is a JavaScript class that renders content and wraps it using a content renderer and a wrapper renderer.

**Kind**: global class  

* [UiField](#UiField)
    * [new UiField([props])](#new_UiField_new)
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.defaultVariables([values])](#UiField+defaultVariables) ⇒ <code>object</code>
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateFilename()](#UiField+getTemplateFilename) ⇒ <code>string</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiField_new"></a>

### new UiField([props])
The constructor function sets the default value of the "useTemplateFilename" property to true if
it is not provided in the props object.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object containing the properties passed to the constructor. |

<a name="UiField+render"></a>

### uiField.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiField</code>](#UiField)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiField.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiField</code>](#UiField)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiField.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiField</code>](#UiField)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiField.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiField</code>](#UiField)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+defaultVariables"></a>

### uiField.defaultVariables([values]) ⇒ <code>object</code>
The defaultVariables function returns the props object.

**Kind**: instance method of [<code>UiField</code>](#UiField)  
**Returns**: <code>object</code> - The `props` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs representing the default values for the variables. |

<a name="UiField+variables"></a>

### uiField.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiField</code>](#UiField)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateFilename"></a>

### uiField.getTemplateFilename() ⇒ <code>string</code>
The function returns a template filename based on the type property.

**Kind**: instance method of [<code>UiField</code>](#UiField)  
**Returns**: <code>string</code> - The template filename that is being returned is `ui-${this.props.type}`.  
<a name="UiField+getTemplateString"></a>

### uiField.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiField</code>](#UiField)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiField.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiField</code>](#UiField)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiField.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiField</code>](#UiField)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiField.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiField</code>](#UiField)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiFieldWithOptions"></a>

## UiFieldWithOptions ⇐ [<code>UiField</code>](#UiField)
The `UiFieldWithOptions` class is a subclass of `UiField` that adds functionality for fields with
options, including methods for getting the field value, setting default variables, and building
items based on the options provided.

**Kind**: global class  
**Extends**: [<code>UiField</code>](#UiField)  

* [UiFieldWithOptions](#UiFieldWithOptions) ⇐ [<code>UiField</code>](#UiField)
    * [new UiFieldWithOptions([props])](#new_UiFieldWithOptions_new)
    * [.getValue([values])](#UiFieldWithOptions+getValue) ⇒ <code>Array</code>
    * [.defaultVariables([values])](#UiFieldWithOptions+defaultVariables) ⇒ <code>object</code>
    * [.buildItems([fieldValue])](#UiFieldWithOptions+buildItems) ⇒ <code>Array.&lt;Object&gt;</code>
    * [.isOptionValueChecked(fieldValue, optionValue)](#UiFieldWithOptions+isOptionValueChecked) ⇒ <code>boolean</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateFilename()](#UiField+getTemplateFilename) ⇒ <code>string</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>

<a name="new_UiFieldWithOptions_new"></a>

### new UiFieldWithOptions([props])
This is a constructor function in JavaScript that sets default values for the "props" parameter.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object containing the properties that will be passed to the constructor. If no argument is provided, an empty object will be used as the default value. |

<a name="UiFieldWithOptions+getValue"></a>

### uiFieldWithOptions.getValue([values]) ⇒ <code>Array</code>
The function `getValue` takes an object as an argument and returns an array containing the
values of the object, or an empty array if the values are undefined.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>Array</code> - The function `getValue()` returns an array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="UiFieldWithOptions+defaultVariables"></a>

### uiFieldWithOptions.defaultVariables([values]) ⇒ <code>object</code>
The function `defaultVariables` returns an object with default variables, including an `items`
property that is built based on a field value.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - an object that combines the default variables from the superclass with an additional
property called "items". The value of "items" is determined by calling the "buildItems" method
with the "fieldValue" as an argument.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains any values that are passed to the `defaultVariables` function. |

<a name="UiFieldWithOptions+buildItems"></a>

### uiFieldWithOptions.buildItems([fieldValue]) ⇒ <code>Array.&lt;Object&gt;</code>
The function "buildItems" takes a fieldValue and returns an array of objects with label, value,
and checked properties based on the options provided.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Returns**: <code>Array.&lt;Object&gt;</code> - The function `buildItems` returns an array of objects. Each object in the array has
three properties: `label`, `value`, and `checked`. The `label` property is set to the `label`
property of the corresponding option object in `this.props.options`. The `value` property is set
to the `value` property of the corresponding option object. The `checked` property is  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [fieldValue] | <code>object</code> | <code>{}</code> | The fieldValue - The `fieldValue` parameter is the value of the field that you want to check against the options. It is used to determine whether an option should be checked or not. |

<a name="UiFieldWithOptions+isOptionValueChecked"></a>

### uiFieldWithOptions.isOptionValueChecked(fieldValue, optionValue) ⇒ <code>boolean</code>
The function checks if a specific option value is included in a given field value.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Returns**: <code>boolean</code> - a boolean value indicating whether the optionValue is included in the fieldValue.  

| Param | Type | Description |
| --- | --- | --- |
| fieldValue | <code>object</code> | The value of the field that you want to check if it includes the option value. |
| optionValue | <code>string</code> | The value of the option that you want to check if it is included in the fieldValue. |

<a name="UiField+render"></a>

### uiFieldWithOptions.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiFieldWithOptions.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiFieldWithOptions.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiFieldWithOptions.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+variables"></a>

### uiFieldWithOptions.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateFilename"></a>

### uiFieldWithOptions.getTemplateFilename() ⇒ <code>string</code>
The function returns a template filename based on the type property.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Overrides**: [<code>getTemplateFilename</code>](#UiField+getTemplateFilename)  
**Returns**: <code>string</code> - The template filename that is being returned is `ui-${this.props.type}`.  
<a name="UiField+getTemplateString"></a>

### uiFieldWithOptions.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiFieldWithOptions.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiFieldWithOptions.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiFieldWithOptions</code>](#UiFieldWithOptions)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiFieldWithFields"></a>

## UiFieldWithFields ⇐ [<code>UiField</code>](#UiField)
The `UiFieldWithFields` class is a subclass of `UiField` that renders an array of components based on the values of its fields.

**Kind**: global class  
**Extends**: [<code>UiField</code>](#UiField)  

* [UiFieldWithFields](#UiFieldWithFields) ⇐ [<code>UiField</code>](#UiField)
    * [new UiFieldWithFields([props])](#new_UiFieldWithFields_new)
    * [.defaultVariables([values])](#UiFieldWithFields+defaultVariables) ⇒ <code>object</code>
    * [.buildComponents([fieldValue])](#UiFieldWithFields+buildComponents) ⇒ <code>Array.&lt;string&gt;</code>
    * [.render([values])](#UiField+render) ⇒ <code>string</code>
    * [.contentRenderer()](#UiField+contentRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.wrapperRenderer()](#UiField+wrapperRenderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.renderer(props)](#UiField+renderer) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
    * [.variables([values])](#UiField+variables) ⇒ <code>object</code>
    * [.getTemplateFilename()](#UiField+getTemplateFilename) ⇒ <code>string</code>
    * [.getTemplateString()](#UiField+getTemplateString) ⇒ <code>string</code>
    * [.getWrapperTemplateFilename()](#UiField+getWrapperTemplateFilename) ⇒ <code>string</code>
    * [.getWrapperTemplateString()](#UiField+getWrapperTemplateString) ⇒ <code>string</code>
    * [.getValue([values])](#UiField+getValue) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>

<a name="new_UiFieldWithFields_new"></a>

### new UiFieldWithFields([props])
The constructor function sets default values for the "props" object and calls the parent
constructor with the updated props.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [props] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object containing the properties that will be passed to the constructor. |

<a name="UiFieldWithFields+defaultVariables"></a>

### uiFieldWithFields.defaultVariables([values]) ⇒ <code>object</code>
The function `defaultVariables` returns an object with default variables, including a
`components` property that is built based on the `fieldValue`.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Overrides**: [<code>defaultVariables</code>](#UiField+defaultVariables)  
**Returns**: <code>object</code> - an object that combines the default variables from the superclass with a new property
called "components". The value of "components" is determined by calling the "buildComponents"
method with the "fieldValue" as an argument.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains any values that need to be passed to the `defaultVariables` function. |

<a name="UiFieldWithFields+buildComponents"></a>

### uiFieldWithFields.buildComponents([fieldValue]) ⇒ <code>Array.&lt;string&gt;</code>
The function "buildComponents" takes a fieldValue parameter and returns an array of components
rendered based on the fields array.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Returns**: <code>Array.&lt;string&gt;</code> - The function `buildComponents` returns an array of components. Each component is rendered based on the value of the
corresponding field in the `fieldValue` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [fieldValue] | <code>object</code> | <code>{}</code> | The `fieldValue` parameter is an object that contains the current values of the fields. It is used to pass the value of each field to the `render` method of each field component. |

<a name="UiField+render"></a>

### uiFieldWithFields.render([values]) ⇒ <code>string</code>
The `render` function takes in a `values` object, renders the content using a content renderer
and variables, wraps the rendered content using a wrapper renderer and default variables, and
returns the final result.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Overrides**: [<code>render</code>](#UiField+render)  
**Returns**: <code>string</code> - The `render` function is returning the result of rendering the content within a
wrapper.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains the values to be passed to the `contentRenderer` and `wrapperRenderer` functions. It is used to customize the rendering of the content and wrapper components. |

<a name="UiField+contentRenderer"></a>

### uiFieldWithFields.contentRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The contentRenderer function returns the result of calling the renderer function with certain
props.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Overrides**: [<code>contentRenderer</code>](#UiField+contentRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - the result of calling the `renderer` function with the `props` object as an argument.  
<a name="UiField+wrapperRenderer"></a>

### uiFieldWithFields.wrapperRenderer() ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function `wrapperRenderer` returns the result of calling the `renderer` function with
specific props.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Overrides**: [<code>wrapperRenderer</code>](#UiField+wrapperRenderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - The function `wrapperRenderer()` is returning the result of calling the `renderer()`
function with the `props` object as an argument.  
<a name="UiField+renderer"></a>

### uiFieldWithFields.renderer(props) ⇒ [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer)
The function returns a new instance of the UiHandlebarsRenderer class with the given props.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Overrides**: [<code>renderer</code>](#UiField+renderer)  
**Returns**: [<code>UiHandlebarsRenderer</code>](#UiHandlebarsRenderer) - A new instance of the `UiHandlebarsRenderer` class with the `props` parameter.  

| Param | Description |
| --- | --- |
| props | The "props" parameter is an object that contains the properties or data that will be used by the UiHandlebarsRenderer class. These properties can include things like template files, data objects, and any other necessary information for rendering the UI using Handlebars. |

<a name="UiField+variables"></a>

### uiFieldWithFields.variables([values]) ⇒ <code>object</code>
The function returns a merged object of default variables and a value.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Overrides**: [<code>variables</code>](#UiField+variables)  
**Returns**: <code>object</code> - an object that combines the default variables and the value variable.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The "values" parameter is an object that contains key-value pairs representing variables and their corresponding values. |

<a name="UiField+getTemplateFilename"></a>

### uiFieldWithFields.getTemplateFilename() ⇒ <code>string</code>
The function returns a template filename based on the type property.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Overrides**: [<code>getTemplateFilename</code>](#UiField+getTemplateFilename)  
**Returns**: <code>string</code> - The template filename that is being returned is `ui-${this.props.type}`.  
<a name="UiField+getTemplateString"></a>

### uiFieldWithFields.getTemplateString() ⇒ <code>string</code>
The function returns the template string from the props.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Overrides**: [<code>getTemplateString</code>](#UiField+getTemplateString)  
**Returns**: <code>string</code> - The template string stored in the `props` object.  
<a name="UiField+getWrapperTemplateFilename"></a>

### uiFieldWithFields.getWrapperTemplateFilename() ⇒ <code>string</code>
The function returns the filename of a UI wrapper template.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Overrides**: [<code>getWrapperTemplateFilename</code>](#UiField+getWrapperTemplateFilename)  
**Returns**: <code>string</code> - the string `ui-wrapper`.  
<a name="UiField+getWrapperTemplateString"></a>

### uiFieldWithFields.getWrapperTemplateString() ⇒ <code>string</code>
The function returns the wrapper template string from the props.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Overrides**: [<code>getWrapperTemplateString</code>](#UiField+getWrapperTemplateString)  
**Returns**: <code>string</code> - the value of the `wrapperTemplateString` property of the `props` object.  
<a name="UiField+getValue"></a>

### uiFieldWithFields.getValue([values]) ⇒ <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code>
The getValue function returns the value associated with a given name from a provided object.

**Kind**: instance method of [<code>UiFieldWithFields</code>](#UiFieldWithFields)  
**Overrides**: [<code>getValue</code>](#UiField+getValue)  
**Returns**: <code>object</code> \| <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>Array.&lt;any&gt;</code> - The value associated with the name property in the values object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [values] | <code>object</code> | <code>{}</code> | The `values` parameter is an object that contains key-value pairs. |

<a name="booleanField"></a>

## booleanField([label], [options]) ⇒ [<code>UiBooleanField</code>](#UiBooleanField)
The function `booleanField` creates a boolean field with a label and optional additional options.

**Kind**: global function  
**Returns**: [<code>UiBooleanField</code>](#UiBooleanField) - a new instance of the `UiBooleanField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The `label` parameter is a string that represents the label or name of the boolean field. It is an optional parameter, so if no value is provided, the field will not have a label. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `options` parameter is an object that contains additional configuration options for the `UiBooleanField` component. These options can include properties such as `defaultValue`, `disabled`, `onChange`, etc. |

<a name="checkboxesField"></a>

## checkboxesField([label], [choices], [options]) ⇒ [<code>UiCheckboxesField</code>](#UiCheckboxesField)
The function `checkboxesField` creates a checkboxes field with a label, choices, and additional
options.

**Kind**: global function  
**Returns**: [<code>UiCheckboxesField</code>](#UiCheckboxesField) - a new instance of the `UiCheckboxesField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label for the checkboxes field. It is optional and defaults to an empty string if not provided. |
| [choices] | [<code>Array.&lt;FieldChoice&gt;</code>](#FieldChoice) | <code>[]</code> | The `choices` parameter is an array that contains the options for the checkboxes field. Each element in the array represents a choice that the user can select. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `options` parameter is an object that contains additional configuration options for the checkboxes field. These options can include properties such as `id`, `name`, `value`, `class`, `style`, etc. |

<a name="colorField"></a>

## colorField([label], [options]) ⇒ [<code>UiColorField</code>](#UiColorField)
The function `colorField` creates a new UiColorField object with the provided label and options.

**Kind**: global function  
**Returns**: [<code>UiColorField</code>](#UiColorField) - a new instance of the `UiColorField` class with the provided `options`.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string representing the label for the color field. It is an optional parameter and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional configuration options for the color field. These options can include properties such as the default color, the available color options, and any event handlers for when the color is changed. |

<a name="numberField"></a>

## numberField([label], [options]) ⇒ [<code>UiNumberField</code>](#UiNumberField)
The function "numberField" creates a new number input field with an optional label and additional
options.

**Kind**: global function  
**Returns**: [<code>UiNumberField</code>](#UiNumberField) - a new instance of the `UiNumberField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string representing the label for the number field. It is an optional parameter and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the number field. These options can include properties such as minimum and maximum values, step size, default value, and any other configuration options specific to the number field component. |

<a name="textareaField"></a>

## textareaField([label], [options]) ⇒ [<code>UiTextareaField</code>](#UiTextareaField)
The function `textareaField` creates a textarea input field with a label and optional additional
options.

**Kind**: global function  
**Returns**: [<code>UiTextareaField</code>](#UiTextareaField) - a new instance of the `UiTextareaField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string representing the label for the textarea field. It is an optional parameter and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the textarea field. These options can include properties such as placeholder, value, rows, cols, and disabled. |

<a name="dateField"></a>

## dateField([label], [options]) ⇒ [<code>UiDateField</code>](#UiDateField)
The function `dateField` creates a new date field with a label and optional additional options.

**Kind**: global function  
**Returns**: [<code>UiDateField</code>](#UiDateField) - a new instance of the `UiDateField` class with the provided `options` object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string that represents the label for the date field. It is an optional parameter and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the date field. These options can include properties such as the default value, minimum and maximum date, and any custom validation rules. |

<a name="datetimeField"></a>

## datetimeField([label], [options]) ⇒ [<code>UiDateTimeField</code>](#UiDateTimeField)
The function `datetimeField` creates a new `UiDateTimeField` object with the provided label and
options.

**Kind**: global function  
**Returns**: [<code>UiDateTimeField</code>](#UiDateTimeField) - a new instance of the `UiDateTimeField` class with the provided `options`.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string representing the label for the datetime field. It is an optional parameter and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the UiDateTimeField. These options can include properties such as format, initialDate, minDate, maxDate, and onChange. |

<a name="datetimelocalField"></a>

## datetimelocalField([label], [options]) ⇒ [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField)
The function `datetimelocalField` creates a new instance of `UiDateTimeLocalField` with the provided
label and options.

**Kind**: global function  
**Returns**: [<code>UiDateTimeLocalField</code>](#UiDateTimeLocalField) - a new instance of the `UiDateTimeLocalField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label or name of the field. It is used to provide a descriptive name for the field in the user interface. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional configuration options for the `UiDateTimeLocalField` component. These options can include properties such as `defaultValue`, `disabled`, `onChange`, etc. |

<a name="emailField"></a>

## emailField([label], [options]) ⇒ [<code>UiEmailField</code>](#UiEmailField)
The function creates an email input field with an optional label and additional options.

**Kind**: global function  
**Returns**: [<code>UiEmailField</code>](#UiEmailField) - a new instance of the `UiEmailField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string that represents the label for the email field. It is an optional parameter and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the email field. These options can include properties such as placeholder text, default value, validation rules, and event handlers. |

<a name="fileField"></a>

## fileField([label], [options]) ⇒ [<code>UiFileField</code>](#UiFileField)
The function `fileField` creates a new instance of `UiFileField` with the provided label and
options.

**Kind**: global function  
**Returns**: [<code>UiFileField</code>](#UiFileField) - a new instance of the `UiFileField` class with the `options` object as its parameter.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label or name of the file field. It is optional and can be left empty if no label is needed for the field. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the file field. These options can include properties such as the field's name, value, placeholder, and event handlers. |

<a name="formField"></a>

## formField([label], [fields], [options]) ⇒ [<code>UiFormField</code>](#UiFormField)
The function `formField` creates a form field with a label, an array of fields, and additional
options.

**Kind**: global function  
**Returns**: [<code>UiFormField</code>](#UiFormField) - a new instance of the `UiFormField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label for the form field. It is optional and defaults to an empty string if not provided. |
| [fields] | [<code>Array.&lt;UiField&gt;</code>](#UiField) | <code>[]</code> | The `fields` parameter is an array that contains the input fields for the form. Each element in the array represents a single input field. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the form field. These options will be merged with the label and required properties obtained from the getLabelAndRequired function. |

<a name="hiddenField"></a>

## hiddenField([label], [options]) ⇒ [<code>UiHiddenField</code>](#UiHiddenField)
The function `hiddenField` creates a hidden field with an optional label and additional options.

**Kind**: global function  
**Returns**: [<code>UiHiddenField</code>](#UiHiddenField) - a new instance of the `UiHiddenField` class with the `options` object as its parameter.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label for the hidden field. It is optional and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the hidden field. These options can include properties such as the field's name, value, and any additional attributes or classes that should be applied to the field. |

<a name="imageField"></a>

## imageField([label], [options]) ⇒ [<code>UiImageField</code>](#UiImageField)
The function `imageField` creates a new image field with a label and optional additional options.

**Kind**: global function  
**Returns**: [<code>UiImageField</code>](#UiImageField) - a new instance of the `UiImageField` class with the `options` object as its parameter.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label or title for the image field. It is optional and can be left empty if no label is needed. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the image field. These options can include properties such as the field's name, value, placeholder, and event handlers. |

<a name="monthField"></a>

## monthField([label], [options]) ⇒ [<code>UiMonthField</code>](#UiMonthField)
The function `monthField` creates a new month field UI component with an optional label and
additional options.

**Kind**: global function  
**Returns**: [<code>UiMonthField</code>](#UiMonthField) - a new instance of the `UiMonthField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string representing the label for the month field. It is an optional parameter and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the month field. These options can include properties such as defaultValue, placeholder, disabled, and onChange. |

<a name="passwordField"></a>

## passwordField([label], [options]) ⇒ [<code>UiPasswordField</code>](#UiPasswordField)
The function creates a password field with a label and optional additional options.

**Kind**: global function  
**Returns**: [<code>UiPasswordField</code>](#UiPasswordField) - a new instance of the `UiPasswordField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label or name of the password field. It is optional and can be left empty if no label is needed for the field. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the password field. These options can include properties such as placeholder, maxLength, minLength, and disabled. |

<a name="radioField"></a>

## radioField([label], [choices], [options]) ⇒ [<code>UiRadioField</code>](#UiRadioField)
The function `radioField` creates a radio field with a label, choices, and additional options.

**Kind**: global function  
**Returns**: [<code>UiRadioField</code>](#UiRadioField) - a new instance of the `UiRadioField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label or title for the radio field. It is optional and defaults to an empty string if not provided. |
| [choices] | [<code>Array.&lt;FieldChoice&gt;</code>](#FieldChoice) | <code>[]</code> | An array of options for the radio field. Each option should be a string representing the label for the option. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the radio field. These options can include properties such as `id`, `name`, `value`, `disabled`, `readonly`, etc. |

<a name="rangeField"></a>

## rangeField([label], [options]) ⇒ [<code>UiRangeField</code>](#UiRangeField)
The function `rangeField` creates a range field UI element with a label and optional additional
options.

**Kind**: global function  
**Returns**: [<code>UiRangeField</code>](#UiRangeField) - a new instance of the `UiRangeField` class with the `options` object as its parameter.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string representing the label for the range field. It is an optional parameter and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the range field. These options can include properties such as min, max, step, and value, which define the range of values and the initial value of the range field. |

<a name="searchField"></a>

## searchField([label], [options]) ⇒ [<code>UiSearchField</code>](#UiSearchField)
The function `searchField` creates a new instance of `UiSearchField` with the provided label and
options.

**Kind**: global function  
**Returns**: [<code>UiSearchField</code>](#UiSearchField) - a new instance of the `UiSearchField` class with the `options` object as its parameter.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label or title of the search field. It is optional and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `options` parameter is an object that contains additional configuration options for the `UiSearchField` component. These options can include properties such as `placeholder`, `defaultValue`, `onChange`, etc. |

<a name="selectField"></a>

## selectField([label], [choices], [options]) ⇒ [<code>UiSelectField</code>](#UiSelectField)
The function `selectField` creates a new `UiSelectField` object with the provided label, choices,
and options.

**Kind**: global function  
**Returns**: [<code>UiSelectField</code>](#UiSelectField) - a new instance of the `UiSelectField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label or title of the field. It is optional and defaults to an empty string if not provided. |
| [choices] | [<code>Array.&lt;FieldChoice&gt;</code>](#FieldChoice) | <code>[]</code> | An array of options for the select field. Each option should be a string or an object with a "label" and "value" property. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object containing additional options for the select field. These options will be merged with the default options. |

<a name="telField"></a>

## telField([label], [options]) ⇒ [<code>UiTelField</code>](#UiTelField)
The function `telField` creates a new `UiTelField` object with optional label and options.

**Kind**: global function  
**Returns**: [<code>UiTelField</code>](#UiTelField) - a new instance of the `UiTelField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string that represents the label for the telephone field. It is an optional parameter and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional configuration options for the `UiTelField` component. |

<a name="textField"></a>

## textField([label], [options]) ⇒ [<code>UiTextField</code>](#UiTextField)
The function `textField` creates a new instance of `UiTextField` with the provided label and
options.

**Kind**: global function  
**Returns**: [<code>UiTextField</code>](#UiTextField) - a new instance of the `UiTextField` class with the provided options.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label or placeholder text for the text field. It is optional and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | The `options` parameter is an object that contains additional configuration options for the `UiTextField` component. These options can include properties such as `placeholder`, `maxLength`, `defaultValue`, `disabled`, etc. |

<a name="timeField"></a>

## timeField([label], [options]) ⇒ [<code>UiTimeField</code>](#UiTimeField)
The function `timeField` creates a time field UI element with an optional label and additional
options.

**Kind**: global function  
**Returns**: [<code>UiTimeField</code>](#UiTimeField) - a new instance of the `UiTimeField` class with the provided `options`.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A string that represents the label for the time field. It is an optional parameter and defaults to an empty string if not provided. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional configuration options for the time field. These options can include properties such as the default value, minimum and maximum time values, and any custom validation rules. |

<a name="urlField"></a>

## urlField([label], [options]) ⇒ [<code>UiUrlField</code>](#UiUrlField)
The function `urlField` creates a URL input field with an optional label.

**Kind**: global function  
**Returns**: [<code>UiUrlField</code>](#UiUrlField) - a new instance of the `UiUrlField` class with the provided `options`.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label parameter is a string that represents the label or name of the URL field. It is optional and can be left empty if no label is needed for the field. |
| [options] | [<code>FieldProperties</code>](#FieldProperties) | <code>{}</code> | An object that contains additional options for the URL field. These options can include properties such as placeholder text, default value, validation rules, and event handlers. |

<a name="getLabelAndRequired"></a>

## getLabelAndRequired([label]) ⇒ <code>object</code>
The function `getLabelAndRequired` returns an object with a sanitized label and a boolean indicating
if the label suggests that it is required.

**Kind**: global function  
**Returns**: <code>object</code> - an object with two properties: "label" and "required". The value of the "label" property is
the result of calling the "sanitizeLabel" function with the "label" parameter as an argument. The
value of the "required" property is the result of calling the "itSuggestsRequired" function with the
"label" parameter as an argument.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The `label` parameter is a string that represents the label for a form field. |

<a name="sanitizeLabel"></a>

## sanitizeLabel([label]) ⇒ <code>string</code>
The `sanitizeLabel` function takes a label as input, removes trailing asterisks and leading/trailing
whitespace, and returns the sanitized label or 'No label' if the resulting label is empty.

**Kind**: global function  
**Returns**: <code>string</code> - the sanitized label. If the label is empty or consists only of asterisks at the end, it
will return 'No label'. Otherwise, it will return the trimmed label with any trailing asterisks
removed.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The `label` parameter is a string that represents a label. |

<a name="itSuggestsRequired"></a>

## itSuggestsRequired(label) ⇒ <code>boolean</code>
The function checks if a label ends with an asterisk (*) to suggest that it is required.

**Kind**: global function  
**Returns**: <code>boolean</code> - a boolean value indicating whether the label ends with an asterisk (*) after trimming any
whitespace.  

| Param | Description |
| --- | --- |
| label | The label parameter is a string that represents the label of a form field. |

<a name="RendererOptions"></a>

## RendererOptions : <code>object</code>
The `RendererOptions` object represents the options of a renderer.

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [useTemplateFilename] | <code>boolean</code> | <code>false</code> | Whether or not to use the template filename. |
| [templateFilename] | <code>string</code> |  | The template filename. |
| [templateString] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The template string. |

<a name="TemplateOptions"></a>

## TemplateOptions : <code>object</code>
The `TemplateOptions` object represents the template options of a field.

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| template_path | <code>string</code> |  | The path to the template file. |
| [template_extension] | <code>string</code> | <code>&quot;&#x27;.hbs&#x27;&quot;</code> | The extension of the template file. |

<a name="FieldProperties"></a>

## FieldProperties : <code>object</code>
The `FieldProperties` object represents a field in a form.

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [label] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The label of the field. |
| [name] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The name of the field. |
| [description] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The description of the field. |
| [placeholder] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The placeholder of the field. |
| [defaultValue] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The default value of the field. |
| [type] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The type of the field. |
| [templateString] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The template string of the field. |
| [wrapperTemplateString] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The wrapper template string of the field. |
| [templateOptions] | [<code>TemplateOptions</code>](#TemplateOptions) | <code>{}</code> | The template options of the field. |
| [options] | <code>object</code> | <code>{}</code> | The options of the field. |
| [values] | <code>object</code> | <code>{}</code> | The values of the field. |
| [required] | <code>boolean</code> | <code>false</code> | Whether or not the field is required. |
| [disabled] | <code>boolean</code> | <code>false</code> | Whether or not the field is disabled. |
| [hidden] | <code>boolean</code> | <code>false</code> | Whether or not the field is hidden. |

<a name="FieldChoice"></a>

## FieldChoice : <code>object</code>
The `FieldChoice` object represents a choice in a radio, select, or checkboxes field.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | The label of the choice. |
| value | <code>string</code> | The value of the choice. |


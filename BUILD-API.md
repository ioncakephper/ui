# Build API page

1. cd to `lib` folder, generate `api.md` in root folder.

```bash
cd lib
jsdoc2md ui-basic-fields.js ui-field.js ui-field-shortcuts.js ui-renderer.js > ../api.md
```

2. Add the following at the top of `api.md` and save it.

```md
# API: uijs-kit classes and functions documentation

Classes and functions comprising UIJS-KIT framework.

```

3. Copy `api.md` into `website/docs` folder as `api.md`.

4. Add the following at the top of `website/docs/api.md` and save it.

```
---
sidebar_label: API
---

```


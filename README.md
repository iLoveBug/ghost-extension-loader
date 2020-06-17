# ghost-extension-loader

This is a loader script for Ghost Extension cards. It's very easy to integrated into the Ghost theme.

## Usage

### Code Injection

The most simple way for Ghost extension card loading it using code injection without touching the theme files.
In the Ghost admin page, go to Code Injection, in the Site Footer section, add the following lines:

```
<script src="https://cdn.jsdelivr.net/gh/iLoveBug/ghost-extension-loader@1.0.0/dist/extension-loader.min.js"></script>
```

### In the theme default.hbs file

For theme developers, you can integrate the extension card loader in the default.hbs file, so it will be available only for the Post and Page.

In the body section of default.hbs, add the following lines:

```
{{#is "page, post"}}
    <script src="https://cdn.jsdelivr.net/gh/iLoveBug/ghost-extension-loader@1.0.0/dist/extension-loader.min.js"></script>
{{/is}}
```
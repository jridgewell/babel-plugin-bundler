# babel-plugin-bundler

A concatenated module bundler, without redundant UMD boilerplate.

## Installation

```sh
$ npm install babel-plugin-bundler
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["bundler"]
}
```

### Via CLI

```sh
$ babel --plugins bundler script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["bundler"]
});
```

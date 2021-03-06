module.exports = {
    root: true,
    parserOptions: {
      sourceType: 'module',
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',

    // add your custom rules here
    'rules': {
      "indent": ["error", 4],
      // allow paren-less arrow functions
      'arrow-parens': 0,
      // allow async-await
      'generator-star-spacing': 0,
      // allow debugger during development
      'prefer-promise-reject-errors': 0
    }
  }
  
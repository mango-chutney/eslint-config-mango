module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
    'plugin:flowtype/recommended'
  ],
  plugins: ['flowtype', 'react'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    "flowtype/generic-spacing": 0,
    "flowtype/space-after-type-colon": [
      2,
      "always",
      { "allowLineBreak": true }
    ],
    'react/default-props-match-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0
  }
};

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
    'react/jsx-filename-extension': 0
  }
};

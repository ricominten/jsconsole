module.exports = {
  extends: 'erb/typescript',
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'import/no-cycle': 'off',
        'no-plusplus': 'off',
        'react/jsx-filename-extension': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'react/jsx-props-no-spreading': 'off',
        'aaaaaa': 'off',
        'aaaaaa': 'off',
      }
    }
  ],
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./configs/webpack.config.eslint.js')
      }
    }
  }
};

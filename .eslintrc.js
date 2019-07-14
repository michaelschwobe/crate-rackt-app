module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/no-children-prop': 'off',
  },
  overrides: [
    {
      files: ['setupTests.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.stories.js', '*.test.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};

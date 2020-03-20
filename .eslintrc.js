module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
  },
  overrides: [
    {
      files: ['*.stories.js', '*.test.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};

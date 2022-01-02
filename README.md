# crate-rackt-app

An opinionated template/starting point was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and includes React Router, Storybook, Airbnb/ESLint/Prettier linting, prop-types, and classnames.

## Requirements

- `macOS` (Windows _might_ work but is not actively tested)
- `node` version 16 or higher
- `yarn` version 1.22.x (or `npm` version 8) or higher

## Scripts

Reference `package.json` for all scripts. Here are few commonly used scripts:

### Cleanup

```sh
# Removes script generated files/folders.
yarn clean
```

### Linting

```sh
# Run the custom linter.
yarn lint

# Run the custom linter automatically fix files.
yarn lint:fix
```

### Testing

```sh
# Runs the test runner in the interactive watch mode.
yarn test

# Runs the test runner and collect coverage.
yarn test:coverage

# Runs the test runner and collect coverage on changed files.
yarn test:changed
```

### Development

```sh
# Runs the app in the development mode.
yarn start

# Run Storybook in development mode.
yarn storybook
```

### Production

```sh
# Builds the app for production.
yarn build

# Build Storybook for production.
yarn build-storybook

# Analyze production bundles.
yarn analyze
```

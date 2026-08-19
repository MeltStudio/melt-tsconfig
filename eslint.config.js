module.exports = [
  ...require('@meltstudio/eslint-config/node-js'),
  {
    rules: {
      'no-console': 'off',
    },
  },
  {
    // This file lints itself now that flat config has no --ext gate to keep
    // it out of scope. The array-spread require() pattern flat config needs
    // isn't the "load config at the top of the file" shape these rules
    // expect, and @meltstudio/eslint-config is a devDependency on purpose
    // (dev tooling, not shipped).
    files: ['eslint.config.js'],
    rules: {
      'global-require': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
];

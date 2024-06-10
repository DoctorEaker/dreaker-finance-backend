import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  { files: ['src/**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    files: ['src/**/*.ts'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Add Prettier plugin
    plugins: ['prettier'],
    extends: ['prettier'],

    rules: {
      // Turn off any conflicting ESLint rules here
      'prettier/prettier': 'error',
    },
  },
];

/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/naming-convention */
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import base from '../eslint.config.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...base,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-hooks': reactHooks,
    },
    rules: {
      'react/boolean-prop-naming': 'error',
      'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'error',
      'react/no-this-in-sfc': 'error',
      'react/no-typos': 'error',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/self-closing-comp': 'error',

      'react/jsx-boolean-value': 'error',
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-no-target-blank': [1, { allowReferrer: true }],

      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
];

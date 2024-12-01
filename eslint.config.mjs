/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/naming-convention */
import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.builtin },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  tseslint.configs.eslintRecommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- Not typed
  importPlugin.flatConfigs.recommended,
  // Possible Problems
  {
    rules: {
      'accessor-pairs': 'error',
      'array-callback-return': 'error',
      'no-await-in-loop': 'error',
      'no-constructor-return': 'error',
      'no-duplicate-imports': 'error',
      'no-inner-declarations': ['error', 'both'],
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-use-before-define': [
        'error',
        {
          allowNamedExports: true,
          classes: false,
          functions: false,
          variables: true,
        },
      ],
      'no-useless-assignment': 'error',
      'require-atomic-updates': 'error',
    },
  },
  // Suggestions
  {
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'block-scoped-var': 'error',
      'capitalized-comments': 'error',
      'class-methods-use-this': 'error',
      'complexity': ['error', { max: 10, variant: 'modified' }],
      'curly': 'error',
      'default-case-last': 'error',
      'default-param-last': ['error'],
      'dot-notation': 'error',
      'eqeqeq': 'error',
      'func-name-matching': 'error',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'grouped-accessor-pairs': 'error',
      'guard-for-in': 'error',
      'init-declarations': ['error', 'always'],
      'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
      'max-classes-per-file': 'error',
      'max-depth': ['error', { max: 4 }],
      'max-lines-per-function': [
        'error',
        { IIFEs: true, max: 20, skipBlankLines: true, skipComments: true },
      ],
      'max-nested-callbacks': ['error', 2],
      'max-params': ['error', 3],
      'new-cap': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-console': 'error',
      'no-continue': 'error',
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-inline-comments': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-proto': 'error',
      'no-redeclare': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-shadow': 'error',
      'no-throw-literal': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-named-capture-group': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-regex-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'radix': 'error',
      'require-await': 'error',
      'require-unicode-regexp': 'error',
      'sort-keys': [
        'error',
        'asc',
        { allowLineSeparatedGroups: true, caseSensitive: false, natural: true },
      ],
      'symbol-description': 'error',
      'yoda': 'error',
    },
  },
  // TypeScript
  {
    rules: {
      /* eslint-disable sort-keys -- colocate eslint disable with rule */
      '@typescript-eslint/array-type': [
        'error',
        { default: 'array-simple', readonly: 'array-simple' },
      ],
      '@typescript-eslint/ban-ts-comment': 'off',
      'class-methods-use-this': 'off',
      '@typescript-eslint/class-methods-use-this': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      'init-declarations': 'off',
      '@typescript-eslint/init-declarations': 'error',
      'max-params': 'off',
      '@typescript-eslint/max-params': ['error', { max: 3 }],
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/naming-convention': 'error',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'no-loop-func': 'off',
      '@typescript-eslint/no-loop-func': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unsafe-type-assertion': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { typedefs: false }],
      '@typescript-eslint/no-useless-empty-export': 'error',
      'prefer-destructuring': 'off',
      '@typescript-eslint/prefer-destructuring': 'error',
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      /* eslint-enable sort-keys */
    },
  },
  // Unicorn
  {
    rules: {
      'unicorn/better-regex': 'error',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-for-loop': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-unused-properties': 'error',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/numeric-separators-style': ['error', { number: { minimumDigits: 5 } }],
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/prefer-object-from-entries': 'off',
      'unicorn/prefer-string-slice': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  // Import
  {
    rules: {
      'import/no-cycle': 'error',
      'import/no-default-export': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
        },
      ],
      'import/prefer-default-export': 'off',
    },
  },
];

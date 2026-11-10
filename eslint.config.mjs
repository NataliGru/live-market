import js from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const eslintConfig = [
  // Ignore generated and build files
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'next-env.d.ts',
    ],
  },

  // Base JavaScript recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Next.js + Core Web Vitals rules
  ...nextVitals,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      // Add browser + Node.js globals
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      // Disable default unused vars rule
      // because TypeScript handles it better
      'no-unused-vars': 'off',

      // TypeScript-aware unused variables check
      // Allows variables prefixed with "_" to be ignored
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Automatically remove unused imports
      'unused-imports/no-unused-imports': 'warn',

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];

export default eslintConfig;

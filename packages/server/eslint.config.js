// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,tsx,mts,cts}']
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '*.config*']
  },

  eslint.configs.recommended,
  tseslint.configs.recommended,

  {
    name: 'app/parser',
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },

  {
    name: 'app/global-rules',
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'require-atomic-updates': 'off',
      'no-async-promise-executor': 'off'
    }
  },
  eslintConfigPrettier
)

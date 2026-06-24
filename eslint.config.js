import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import vitest from '@vitest/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    // no extra globals for source files; test files get Vitest env instead
  },
  {
    // Use the Vitest ESLint plugin configs for test files
    files: ['**/*.test.{js,jsx,ts,tsx}', 'test/**'],
    extends: [
      vitest.configs.env,
      vitest.configs.recommended,
    ],
  },
])

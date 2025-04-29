import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import pluginSecurity from 'eslint-plugin-security'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import featureSliced from '@conarti/eslint-plugin-feature-sliced'

export default tseslint.config(
  { ignores: ['node_modules', 'dist'] },
  {
    extends: [
      pluginSecurity.configs.recommended,
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintPluginPrettierRecommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'feature-sliced': featureSliced
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "feature-sliced/layers-slices": "error",
      "feature-sliced/absolute-relative": "error",
      "feature-sliced/public-api": "error",
      'security/detect-object-injection':'off',
      'react-hooks/exhaustive-deps': 'off',
      'prettier/prettier': 0,
    },
  },
)

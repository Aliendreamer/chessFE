import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPrettier from 'eslint-config-prettier';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended, eslintPrettier],
        files: ['**/*.{ts,tsx}'],
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'no-relative-import-paths': noRelativeImportPaths,
        },
        ignores: ['public', 'dist', 'node_modules', '**/*.json'],
        languageOptions: {
            ecmaVersion: 2022,
            globals: globals.browser,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'prefer-const': 'warn',
            'prefer-destructuring': 'warn',
            'prefer-rest-params': 'warn',
            'prefer-spread': 'warn',
            'max-len': [
                'warn',
                {
                    code: 140,
                    comments: 100,
                    tabWidth: 4,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true,
                    ignoreRegExpLiterals: true,
                    ignoreTrailingComments: true,
                },
            ],
            'max-statements': ['warn', { max: 20 }, { ignoreTopLevelFunctions: true }],
            'max-lines': [
                'warn',
                {
                    max: 500,
                    skipBlankLines: true,
                    skipComments: true,
                },
            ],
            'max-params': ['error', { max: 5 }],
            'max-depth': ['warn', { max: 3 }],
            complexity: ['warn', { max: 10 }],
            'no-relative-import-paths/no-relative-import-paths': ['warn', { allowSameFolder: false, rootDir: 'src' }],
        },
    },
);

module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        createDefaultProgram: true,
      },
      plugins: ['@typescript-eslint', 'unused-imports', 'rxjs', 'change-detection-strategy', 'simple-import-sort'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@angular-eslint/no-host-metadata-property': 'off',
        '@angular-eslint/no-empty-lifecycle-method': 'off',
        'array-element-newline': 'off',
        'rxjs/no-async-subscribe': 'error',
        'rxjs/no-ignored-observable': 'error',
        'rxjs/no-ignored-subscription': 'error',
        'rxjs/no-nested-subscribe': 'error',
        'rxjs/no-unbound-methods': 'error',
        'rxjs/throw-error': 'error',
        'rxjs/no-ignored-subscription': 'off',
        'change-detection-strategy/on-push': 'error',
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            "allowExpressions": true
          }
        ],
        'no-unused-vars': 'off', // or '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
          'warn',
          { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        'simple-import-sort/imports': [
          'warn',
          {
            'groups': [
              ["^@angular"],
              ["^[a-z@]"],
              ["^~"],
              ["^\\u0000"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
            ]
          }
        ]
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
    {
      files: ['*.module.ts'],
      rules: {
        'array-element-newline': [
          'error',
          {
            ArrayExpression: 'consistent',
            ArrayPattern: { minItems: 3 },
          },
        ],
      },
    },
    {
      files: ['*.html'],
      excludedFiles: ['*inline-template-*.component.html'],
      extends: ['plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            parser: 'angular',
          },
        ],
      },
    },
  ],
};

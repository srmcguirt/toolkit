require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  extends: [
    '@rushstack/eslint-config/profile/node',
    '@rushstack/eslint-config/mixins/friendly-locals',
    '@rushstack/eslint-config/mixins/packlets',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    tsconfigRootDir: __dirname
  },
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      rules: {
        '@rushstack/packlets/readme': ['warn', { minimumReadmeWords: 10 }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^[A-Z]',
              match: true
            }
          }
        ]
      }
    }
  ]
}

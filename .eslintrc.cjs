module.exports = {
    env: {
      node: true,
      es2021: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
      'simple-import-sort'
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-const-assign': 'error',
      'no-await-in-loop': 'off',
      'no-console': 'error', 
      'no-unused-vars': 'warn', 
      '@typescript-eslint/no-unused-vars': 'warn', 
      'no-use-before-define': 'error',
      'no-useless-escape': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "directive", "next": "*" },
        
        { "blankLine": "always", "prev": ["block", "block-like"], "next": "*" },
        { "blankLine": "always", "prev": "*", "next": ["block", "block-like"] },
  
        { "blankLine": "always", "prev": "*", "next": "return" },
  
        { "blankLine": "always", "prev": "*", "next": ["function", "class"] },
        { "blankLine": "always", "prev": ["function", "class"], "next": "*" }
      ]
    },
  };
  
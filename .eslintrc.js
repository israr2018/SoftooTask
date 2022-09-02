module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:@typescript-eslint/recommended"], 
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
     'no-console': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    "@typescript-eslint/no-explicit-any": "off"
    }
}

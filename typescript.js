module.exports = {
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript'
    ],
    rules: {
        'import/prefer-default-export': 'off',
        'import/named': 'error',
        'import/default': 'error',
        'import/no-duplicates': 'error',
        'no-restricted-globals': [
            'error',
            {
                'name': 'window',
                'message': 'Use the getWindow method instead.'
            }
        ],
    }
};

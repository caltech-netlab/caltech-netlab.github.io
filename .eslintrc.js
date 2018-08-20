module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    plugins: [
        'ember'
    ],
    extends: [
        'eslint:recommended',
        'plugin:ember/recommended'
    ],
    env: {
        browser: true
    },
    rules: {
        "indent": ["error", 2, {
            "SwitchCase": 1
        }],
        "no-tabs": ["error"],
        "no-trailing-spaces": ["error"],
        "block-spacing": ["error"],
        "brace-style": ["error", "1tbs", {
            "allowSingleLine": true
        }],
        "linebreak-style": ["error", "unix"],
        "no-multiple-empty-lines": ["error"],
        "object-property-newline": ["error", {
            "allowMultiplePropertiesPerLine": true
        }],
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "never"],
        "keyword-spacing": ["error"],
        "valid-jsdoc": ["error"],
        "curly": ["error"],
        "eqeqeq": ["error"],
        "no-eval": ["error"],
        "no-multi-spaces": ["error"],
        "comma-dangle": ["error", "never"],
        "comma-style": ["error"],
        "comma-spacing": ["error"],
        "computed-property-spacing": ["error"],
        "eol-last": ["error"],
        "key-spacing": ["error"],
        "newline-after-var": ["error"],
        "newline-before-return": ["error"],
        "no-lonely-if": ["error"],
        "one-var-declaration-per-line": ["error"],
        "operator-linebreak": ["error", "after"],
        "padded-blocks": ["error", "never"],
        "space-before-blocks": ["error"],
        "spaced-comment": ["error"],
        "arrow-spacing": ["error"],
        "no-confusing-arrow": ["error"],
        "no-useless-rename": ["error"],
        "no-console": ["off"],
        "no-var": ["error"]
    },
    overrides: [
        // node files
        {
            files: [
                'testem.js',
                'ember-cli-build.js',
                'config/**/*.js'
            ],
            parserOptions: {
                sourceType: 'script',
                ecmaVersion: 2015
            },
            env: {
                browser: false,
                node: true
            }
        },
        // test files
        {
            files: ['tests/**/*.js'],
            excludedFiles: ['tests/dummy/**/*.js'],
            env: {
                embertest: true
            }
        }
    ]
};

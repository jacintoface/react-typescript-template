import { Config } from 'eslint'

/**
* @type {Config}
* */

const config = {
    parser: "@typescript-eslint/parser",
    extends: [
        "alloy",
        "plugin:react-hooks/recommended",
        "alloy/react",
        "alloy/typescript",
        "plugin:prettier/recommended",
    ],
    plugins: ["@typescript-eslint"],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
}

module.exports = config

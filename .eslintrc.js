module.exports = {
    "settings": {
        "react": {
          "version": "detect",
        },
      },
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "ignorePatterns": [
        "*.css"
    ],
    "rules": {
        "semi": ["error", "always"],
        "no-unused-vars": "off",
        "no-undef": "off",
        "no-redeclare": "off",
        "react/react-in-jsx-scope": "off",
        "semi": 0,
        "quotes": "off",
        "react/prop-types": "off"
    },
}

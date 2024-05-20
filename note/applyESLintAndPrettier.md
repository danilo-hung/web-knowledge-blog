## Apply ESLint and Prettier

1. use command to download [eslint-config-eason](https://github.com/Kamigami55/eslint-config-eason)
    ```bash
    npx install-peerdeps --pnpm -D eslint-config-eason
    ```
2. turn `.eslintrc.json` to `.eslintrc.js` and update its content
    ```js
    module.exports = {
    extends: [
        'eason',
        'next/core-web-vitals',
        'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
    ],
    rules: {
        'jsx-a11y/anchor-is-valid': [
        'error',
        {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
        },
        ],
    },
    overrides: [
        {
        files: '**/*.{ts,tsx}',
        extends: [
            'eason/typescript',
            'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
        ],
        },
    ],
    };

    ```
3. add `.prettierrc.js`
    ```js
    module.exports = {
    trailingComma: 'es5',
    singleQuote: true,
    printWidth: 80,
    semi: true,
    };
    ```
4. add `lint` and `format` command in `package.json`
    ```json
    "scripts": {
    // ...
        "lint": "eslint .",
        "lint:fix": "eslint --fix .",
        "format:fix": "prettier --write './**/*.{css,scss,md,mdx,json}'"
    },
    //...
    ```

## When Build, ignore eslint and typescript error msg
1. in `next.config.mjs`, update its content
    ```mjs
    /** @type {import('next').NextConfig} */
    const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    };

    export default nextConfig;
    ```

## use @ as absolute path directing to `src` folder
1. in `tsconfig.json`, update its content
    ```json
    {
    "compilerOptions": {
        // ...
        "baseUrl": ".",
        "paths": {
        "@/*": ["src/*"]
        }
    }
    // ...
    }
    ```
2. install pnpm `eslint-import-resolver-alias` to let ESLint know about the `@` alias
    ```bash
    pnpm add -D eslint-import-resolver-alias
    ```
3. in `eslint.js`, update settins content
    ```js
    module.exports = {
    // ...
    settings: {
        // Support absolute imports
        // https://www.npmjs.com/package/eslint-import-resolver-alias
        "import/resolver": {
        alias: {
            map: [["@", "./src"]],
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        },
    },
    // ...
    };
    ```
4. now can use "@" instead of "../../../src" to directt to src folder
    ex: can use ```import '@/style/globals.css';``` instead of ```import '../../src/style/globals.css';```
# Setting Up ESLint and Prettier for Your Next.js Project

This guide walks you through setting up ESLint and Prettier for a Next.js project to ensure code quality and consistency.

## Table of Contents

- [Apply ESLint](#apply-eslint)
  - [Step 1: Install ESLint Configuration](#step-1-install-eslint-configuration)
  - [Step 2: Configure ESLint](#step-2-configure-eslint)
  - [Step 3: Configure Prettier](#step-3-configure-prettier)
  - [Step 4: Update package.json Scripts](#step-4-update-packagejson-scripts)
- [Ignore ESLint and TypeScript Errors During Build](#ignore-eslint-and-typescript-errors-during-build)
- [use @ as absolute path directing to `src` folder](#use--as-absolute-path-directing-to-src-folder)
  - [Step 1: Update `tsconfig.json`](#step-1-update-tsconfigjson)
  - [Step 2: Install ESLint Import Resolver Alias](#step-2-install-eslint-import-resolver-alias)
  - [Step 3: Configure ESLint for the Alias](#step-3-configure-eslint-for-the-alias)
  - [Step 4: Use the Alias in Imports](#step-4-use-the-alias-in-imports)

# Apply ESLint

## Step 1: Install ESLint Configuration

Install the [eslint-config-eason](https://github.com/Kamigami55/eslint-config-eason) using the following command:

```bash
   npx install-peerdeps --pnpm -D eslint-config-eason
```

## Step 2: Configure ESLint

Convert your `.eslintrc.json` to `.eslintrc.js` and update its content as follows:

```js
module.exports = {
  extends: [
    "eason",
    "next/core-web-vitals",
    "plugin:prettier/recommended", // Prettier config overrides other formatting rules
  ],
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  overrides: [
    {
      files: "**/*.{ts,tsx}",
      extends: [
        "eason/typescript",
        "plugin:prettier/recommended", // Prettier config overrides other formatting rules
      ],
    },
  ],
};
```

## Step 3: Configure Prettier

Create a .prettierrc.js file with the following content:

```js
module.exports = {
  trailingComma: "es5",
  singleQuote: true,
  printWidth: 80,
  semi: true,
};
```

## Step 4: Update package.json Scripts

Add `lint` and `format` commands in your `package.json`:

```json
   "scripts": {
   // ...
       "lint": "eslint .",
       "lint:fix": "eslint --fix .",
       "format:fix": "prettier --write './**/*.{css,scss,md,mdx,json}'"
   },
//...
```

# Ignore ESLint and TypeScript Errors During Build

To ignore ESLint and TypeScript errors during the build process, update your `next.config.mjs`:

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

# use @ as absolute path directing to `src` folder

## Step 1: Update `tsconfig.json`

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

## Step 2: Install ESLint Import Resolver Alias

install pnpm `eslint-import-resolver-alias` to let ESLint know about the `@` alias

```bash
pnpm add -D eslint-import-resolver-alias
```

## Step 3: Configure ESLint for the Alias

Update your .eslintrc.js settings:

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

## Step 4: Use the Alias in Imports

now can use "@" instead of "../../../src" to directt to src folder:

```js
import "@/styles/globals.css";
```

instead of

```js
import "../../src/styles/globals.css";
```

This setup ensures that your Next.js project is properly configured with ESLint and Prettier, along with an efficient import path aliasing system.

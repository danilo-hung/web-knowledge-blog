# Apply Contentlayer for Markdown Post

[Contentlayer Docs](https://contentlayer.dev/): Contentlayer 的用法是先要定義文章的格式、擁有的欄位及型別，接著在 pnpm dev 執行期間或 pnpm build 打包時，他就會將指定目錄所有文章，轉換成支援 TypeScript 的 JSON 格式，可直接在 Next.js 內 import 來渲染至畫面上。

## 1. Set Up
### Install Contentlayer and the Next.js plugin
---
```bash
pnpm add contentlayer next-contentlayer
pnpm add -D esbuild
```

### Next.js Configuration
---
To hook Contentlayer into `next dev` and `next build` proccesses, we'll need to wrap the Next.js configuation using `withContentlayer` method
in next.config.mjs

```mjs
import { withContentlayer } from 'next-contentlayer';
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  //               ^^^^^^^^^^^^^^^^
  // config
});

export default nextConfig;
```

### TypeSceipt Configuration
---
to configures the Next.js build process and your editor to know where to look for generated files, and to make it easier to import them into your code.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    //  ^^^^^^^^^^^
    "paths": {
      "@/*": ["./src/*"],
      "contentlayer/generated": ["./.contentlayer/generated"]
      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    },
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".contentlayer/generated"
    // ^^^^^^^^^^^^^^^^^^^^^^
  ],
  "exclude": ["node_modules"]
}
```

### Ignore Build Output, ESLint error, and Prettier format
---
Add the `.contentlayer` directory into your `.gitignore` file to ensure each build of your app will have the latest generated data and you do not run into issues with Git.
Also add `.contentlayer` into `.prettierignore` file to ignore the format of the generated data.
```
# ...

# Contentlayer
.contentlayer
```
Add the `.contentlayer` and `contentLayerAdapter.js` to ignore the gereated data and the error of contentLayerAdapter.js
```
# Contentlayer
.contentlayer

# Ignore contentlayer eslint errors
contentLayerAdapter.js
contentlayer.config.ts
```

## 2. Define Content Schema
### create `contentlayer.config.ts` to define the document type, directory, and field
---
```ts
import { defineDocumentType, makeSource } from './src/lib/contentLayerAdapter';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `content/posts/**/*.md`,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (post) => `/posts/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  //The created documents are expected to be Markdown files that live within a "content" directory in the project.
  documentTypes: [Post],
  //specifies a single document type called Post
});
```
### add an example post (ex: `20240517-markdown-demo.md` ) under `/content/posts` 
---
```md
---
title: Markdown demo
description: This is a demo of Markdown
slug: markdown-demo
date: 2022-08-31
type: Post
---

## H2 title

### H3 title

Some content with [link](https://www.google.com)
```

### Run `pnpm dev` and check in terminal if the post is generated
---
```bash 
pnpm dev
```
result:
```bash
#....
Generated 1 document in .contentlayer
```

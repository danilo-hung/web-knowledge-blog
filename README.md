# Creating a Next.js Project Using TypeScript with pnpm (使用 pnpm 創建一個 TypeScript 的 Next.js 項目)

1. [Creating a Next.js Project Using TypeScript with pnpm (使用 pnpm 創建一個 TypeScript 的 Next.js 項目)](#creating-a-nextjs-project-using-typescript-with-pnpm-使用-pnpm-創建一個-typescript-的-nextjs-項目)
2. [Prerequisites](#prerequisites)
   - Node.js
   - pnpm
3. [Steps to Create a Next.js Project](#steps-to-create-a-nextjs-project)
4. [Getting Started](#getting-started)
5. [Learn More](#learn-more)
6. [Deploy on Vercel](#deploy-on-vercel)

## Prerequisites

Before you start, ensure you have the following installed on your machine:

在開始之前，請確保您的機器上安裝了以下內容：

1. **Node.js**: You can download and install it from [Node.js official website](https://nodejs.org/). 可以從 Node.js 官方網站下載並安裝
2. **pnpm**: Install it by running the following command(通過運行以下命令進行安裝):
   ```bash
   npm install -g pnpm
   ```

## Steps to Create a Next.js Project

First, we need to create a new Next.js project. pnpm does not have a built-in command to initialize a Next.js project directly, so we use `create next-app` with pnpm.

首先，我們需要創建一個新的 Next.js 項目。pnpm 沒有內置命令直接初始化 Next.js 項目，因此我們使用 create next-app 並配合 pnpm。

Run the following command in your terminal(在終端中運行以下命令):

```bash
pnpm pnpm create next-app --typescript

```

After entering the command, it will ask you for a project name. Enter a name you like. In this example, the project name is "nextjs-tailwind-blog". After entering the name, press Enter, and it will create a new Next.js project in your current directory.

輸入指令後它會問你你希望專案名稱叫什麼，輸入一個喜歡的名稱，以我的例子名稱叫做「nextjs-tailwind-blog」，輸入完後按 Enter，他就會在你當前目錄裡面新增一個全新的 Next.js 專案了！

## Getting Started

First, run the development server(首先，運行開發伺服器):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

使用瀏覽器打開 http://localhost:3000 查看結果。

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

您可以通過修改 app/page.tsx 開始編輯頁面。頁面會在您編輯文件時自動更新。

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

這個項目使用 next/font 自動優化和加載 Inter，一種定制的 Google 字體。

## Learn More

To learn more about Next.js, take a look at the following resources (要瞭解更多關於 Next.js 的資訊，請查看以下資源):

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API(瞭解 Next.js 的功能和 API).
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial(一個互動的 Next.js 教程).

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js(將您的 Next.js 應用部署在 Vercel 平台是最簡單的方式，Vercel 平台 由 Next.js 的創建者提供。).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

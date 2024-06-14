# 新增 .nvmrc 鎖定專案 Node.js 版本

## Table of Contents
1. [Introduction](#1-introduction)
2. [Prerequisites](#2-prerequisites)
3. [Shell Configuration](#3-shell-configuration)
4. [Creating .nvmrc File](#4-creating-nvmrc-file)

## 1. Introduction

同時開發許多前端專案，每個專案的 Node.js 版本都不同的話，可以使用 nvm（Node Version Manager）來同時安裝多個 Node.js，並依照需求切換不同版本。但用 nvm 一段時間後，你會發現手動切換 Node 版本很麻煩。好在 nvm 提供了 shell 深度整合的設定檔，能讓你在終端機 cd 進不同目錄時，自動切換版本。

When developing multiple front-end projects simultaneously, each with different versions of Node.js, you can use nvm (Node Version Manager) to install multiple versions of Node.js and switch between them as needed.
However, after using nvm for a while, you may find that manually switching Node.js versions is cumbersome.
Fortunately, nvm provides a deeply integrated shell configuration file that allows you to automatically switch versions when you cd into different directories in the terminal.

## 2. Prerequisites

**nvm**: 安裝方式參考 [nvm Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating) 說明

**nvm**: Refer to [nvm Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating) for installation instructions.

## 3. Shell Configuration

在 .bash_profile 中新增以下腳本：

Add the following script to your .bash_profile:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  

cd() {
    builtin cd "$@" && {
        if [ -f ".nvmrc" ]; then
            nvm_version=$(cat .nvmrc)
            if nvm ls "$nvm_version" &>/dev/null; then
                nvm use "$nvm_version"
            else
                echo "Version $nvm_version not installed. Installing..."
                nvm install "$nvm_version"
            fi
        fi
    }
}
```
## 4. Creating .nvmrc File

在專案的根目錄中建立 .nvmrc 檔案

Create a .nvmrc file in the root directory of your project.

在 .nvmrc 檔案中，定義你希望此專案使用的 Node.js 版本。

In the .nvmrc file, define the version of Node.js you would like to use for this project.

例如：
For example:
```
v22.1.0

```

現在，當你在終端機中 cd 到這個專案時，Node.js 會自動切換到你設定的版本。

Now, when you cd to this project in the terminal, Node.js will automatically switch to the version you specified.

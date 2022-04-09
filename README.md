# @eltacitos/tiny-logger

[![npm (scoped)](https://img.shields.io/npm/v/@eltacitos/tiny-logger?style=for-the-badge)](https://www.npmjs.com/package/@eltacitos/tiny-logger)
[![NPM Downloads](https://img.shields.io/npm/dw/@eltacitos/tiny-logger?style=for-the-badge)](https://www.npmjs.com/package/@eltacitos/tiny-logger)
[![NPM Downloads](https://img.shields.io/github/stars/ElTacitos/tiny-logger?style=for-the-badge)](https://www.npmjs.com/package/@eltacitos/tiny-logger)


Just a tiny npm package to log in typescript with color.

## Install

```
$ npm i @eltacitos/tiny-logger
```

## Functions
🟥 `logger.error(str: string, ...args:any[])` `logger.red(str: string, ...args:any[])` 🟥

🟨 `logger.info(str: string, ...args:any[])` `logger.yellow(str: string, ...args:any[])` 🟨

🟦 `logger.debug(str: string, ...args:any[])` `logger.blue(str: string, ...args:any[])` 🟦

🟩 `logger.test(str: string, ...args:any[])` `logger.green(str: string, ...args:any[])` 🟩

🟪 `logger.warning(str: string, ...args:any[])` `logger.purple(str: string, ...args:any[])` 🟪


## Usage

```ts
import {logger} from "@eltacitos/tiny-logger/lib";

logger.error("hwB0EkOZ", {demo:"ECr8Jo9o"})
/*
[Error:2021-12-30 05:34:50] hwB0EkOZ 
{
    "demo": "ECr8Jo9o"
} 
*/


logger.cyan("2Id1Wov", ["DafkHU","xWv"])
/*
[Cyan:2021-12-30 05:34:50] 2Id1Wov 
[
    "DafkHU",
    "xWv"
]

*/
```

# @eltacitos/tiny-logger

[![npm (scoped)](https://img.shields.io/npm/v/@eltacitos/tiny-logger.svg)](https://www.npmjs.com/package/@ElTacitos/tiny-looger)

Just a tiny logger with color.

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

logger.error("hwB0EkOZ", {test:"ECr8Jo9o"})
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

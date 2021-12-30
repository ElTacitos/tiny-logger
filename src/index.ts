enum EColor {
  Reset = "\x1b[00m",
  Red = "\x1b[31m",
  Green = "\x1b[32m",
  Yellow = "\x1b[33m",
  Blue = "\x1b[34m",
  Purple = "\x1b[35m",
  Cyan = "\x1b[36m",
}

const END_OF_TIME_INDEX = 19;

function getTimeStamp(): string {
  const isoStrings = new Date().toISOString().split('T');
  return isoStrings.join(' ').slice(0,END_OF_TIME_INDEX);
}

const illegalChars = [{
  char: "\\xa0",
  regex: /\xa0/g,
}]

function cureStr(str: string): string {
  let cured = str;
  for (const illegalChar of illegalChars) {
    cured = cured.replace(illegalChar.regex, illegalChar.char)
  }
  return cured
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function log(color: EColor, header: string, str: string, ...args: any[]): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unnecessary-condition
  let argsString = JSON.stringify(args[0][0], null, '\t') ?? "";
  argsString = argsString === "" ? argsString : `\n${argsString}`;
  console.log(color, `[${header}/${getTimeStamp()}]`, cureStr(str), cureStr(argsString), EColor.Reset)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function error(str: string, ...args: any[]): void {
  log(EColor.Red, "Error", str, args);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function info(str: string, ...args: any[]): void {
  log(EColor.Yellow, "Info", str, args);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debug(str: string, ...args: any[]): void {
  log(EColor.Blue, "Debug", str, args);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function test(str: string, ...args: any[]): void {
  log(EColor.Cyan, "Test", str, args);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function warning(str: string, ...args: any[]): void {
  log(EColor.Purple, "Warning", str, args);
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function red(str: string, ...args: any[]): void {
  log(EColor.Red, "Red", str, args)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function green(str: string, ...args: any[]): void {
  log(EColor.Green, "Green", str, args)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function yellow(str: string, ...args: any[]): void {
  log(EColor.Yellow, "Yellow", str, args)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function blue(str: string, ...args: any[]): void {
  log(EColor.Blue, "Blue", str, args)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function purple(str: string, ...args: any[]): void {
  log(EColor.Purple, "Purple", str, args)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function cyan(str: string, ...args: any[]): void {
  log(EColor.Cyan, "Cyan", str, args)
}

export const logger = {
  blue,
  cyan,
  debug,
  error,
  green,
  info,
  purple,
  red,
  test,
  warning,
  yellow,
}

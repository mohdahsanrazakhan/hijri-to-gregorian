# hijri-to-gregorian

The Hijri to Gregorian converter NPM package simplifies year conversions between the Hijri and Gregorian calendars.

## Install

The best way to install and use hijri-to-gregorian is with npm.

```
$ npm install hijri-to-gregorian
```

## Usage/Examples

```javascript
const { toHijri, toGregorian } = require("hijri-to-gregorian");

console.log(toHijri(2023));
// => 1444 Hijri

console.log(toGregorian(1444));
// => 2022 Hijri
```

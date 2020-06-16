# native-cross-fetch

[![NPM Version](https://img.shields.io/npm/v/native-cross-fetch.svg?branch=master)](https://www.npmjs.com/package/native-cross-fetch)
[![License](https://img.shields.io/badge/license-MIT%2FApache--2.0-blue.svg)](https://github.com/belak/native-cross-fetch)

Simple fetch for Node and Browsers. This exports the
[node-fetch](https://github.com/node-fetch/node-fetch) library when used in
NodeJS, and `window.fetch` when used in the browser. Note that if you want to
use this in browsers that don't natively support fetch you will need to use a
polyfill like Github's [whatwg-fetch](https://github.com/github/fetch) or use a
different library like [cross-fetch](https://github.com/lquixada/cross-fetch).

This was originally developed for usage in Electron apps where it can be assumed
that a native `fetch` implementation exists.

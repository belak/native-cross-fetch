var nodeFetch = require('node-fetch');

// In some module systems, fetch is exported as default rather than at the root.
// We catch this and re-export the actual function rather than the module.
var fetchFn = nodeFetch.default || nodeFetch;

// We need to export it at the root and default so typescript without
// esModuleInterop will work.
module.exports = fetchFn;
module.exports.default = fetchFn;
module.exports.fetch = fetchFn;
module.exports.Headers = nodeFetch.Headers;
module.exports.Request = nodeFetch.Request;
module.exports.Response = nodeFetch.Response;

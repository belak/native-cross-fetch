var nodeFetch = require('node-fetch');

// In some module systems, fetch is exported as default rather than at the root.
// We catch this and re-export the actual function rather than the module.
var fetchFn = nodeFetch.default || nodeFetch;

module.exports = {
  default: fetchFn,
  fetch: fetchFn,
  Headers: nodeFetch.Headers,
  Request: nodeFetch.Request,
  Response: nodeFetch.Response
};

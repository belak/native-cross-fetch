var fetch = require('node-fetch');

module.exports = {
  default: fetch,
  fetch: fetch,
  Headers: fetch.Headers,
  Request: fetch.Request,
  Response: fetch.Response
};

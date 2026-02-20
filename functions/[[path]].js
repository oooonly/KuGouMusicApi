const { consturctServer } = require("../server.js");
const { httpServerHandler } = require("cloudflare:node");

export const onRequest = httpServerHandler(consturctServer());

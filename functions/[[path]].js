const { consturctServer } = require("../server.js");
const { httpServerHandler } = require("cloudflare:node");

const app = await consturctServer() 
export const onRequest = httpServerHandler(app);

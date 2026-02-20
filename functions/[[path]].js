const { consturctServer } = require("../server.js");
const { httpServerHandler } = require("cloudflare:node");

let handler;

export async function onRequest(context) {
  if (!handler) {
    const app = await consturctServer();
    handler = httpServerHandler(app);
  }
  return handler(context);
}

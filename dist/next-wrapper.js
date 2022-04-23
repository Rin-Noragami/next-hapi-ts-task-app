"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextHandlerWrapper = void 0;
const nextHandlerWrapper = (app) => {
    const handler = app.getRequestHandler();
    return async ({ raw, url, query }, h) => {
        const nextUrl = url;
        nextUrl.query = query;
        await handler(raw.req, raw.res, nextUrl);
        return h.close;
    };
};
exports.nextHandlerWrapper = nextHandlerWrapper;

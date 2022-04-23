"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const hapi_1 = __importDefault(require("@hapi/hapi"));
const next_wrapper_1 = require("./next-wrapper");
const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = (0, next_1.default)({ dev });
const server = new hapi_1.default.Server({
    port,
});
app.prepare().then(async () => {
    server.route({
        method: 'GET',
        path: '/_next/{p*}' /* next specific routes */,
        handler: (0, next_wrapper_1.nextHandlerWrapper)(app),
    });
    server.route({
        method: 'POST',
        path: '/',
        handler: function (request, reply) {
            console.log(request.payload);
            console.log(request.raw.req.headers);
            payload: {
                todo: 'Todo';
                toggleComplete: 'ToggleComplete';
            }
        },
    });
    server.route({
        method: '*',
        path: '/{p*}' /* catch all route */,
        handler: (0, next_wrapper_1.nextHandlerWrapper)(app),
    });
    try {
        await server.start();
        console.log(`> Hey, ready on http://localhost:${port}`);
    }
    catch (error) {
        console.log('Error starting server');
        console.log(error);
    }
});

import type { NitroApp } from "nitropack";
import { Server as Engine } from "engine.io";
import { Server } from "socket.io";
import { defineEventHandler } from "h3";

const engine = new Engine();
export const io = new Server();
export default defineNitroPlugin((nitroApp: NitroApp) => {
  
  
  io.bind(engine);
  
  io.on("connection", (socket) => {

    // socket.on('test', mess => {
    //   console.log(mess)
    // })

    // socket.on('replay', mess => {
    //   console.log(mess)
    // })

    // socket.emit('test', 'what')


    console.log('connection socket io')
  });

  nitroApp.router.use("/socket.io/", defineEventHandler({
    handler(event) {
      engine.handleRequest(event.node.req, event.node.res);
      event._handled = true;
    },
    websocket: {
      open(peer) {
        const nodeContext = peer.ctx.node;
        const req = nodeContext.req;

        // @ts-expect-error private method
        engine.prepare(req);

        const rawSocket = nodeContext.req.socket;
        const websocket = nodeContext.ws;

        // @ts-expect-error private method
        engine.onWebSocket(req, rawSocket, websocket);
      }
    }
  }));
});
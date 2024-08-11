import { ChatLlamaCpp } from "@langchain/community/chat_models/llama_cpp";
import { HumanMessage } from "@langchain/core/messages";
import type { NitroApp } from "nitropack";
import { Server as Engine } from "engine.io";
import { Server, Socket } from "socket.io";
import { defineEventHandler } from "h3";
import { useNuxtApp } from "nuxt/app";

export default defineEventHandler(async(event) => {

  // io.emit('replay', { hello: 'world' })

  // io.on('replay', (data => {
  //   console.log(data)
  // }))

  return 'Done !'
})
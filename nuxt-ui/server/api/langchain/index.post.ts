import { ChatLlamaCpp } from "@langchain/community/chat_models/llama_cpp";
import { HumanMessage } from "@langchain/core/messages";

export default defineEventHandler(async(event) => {
  const config = useRuntimeConfig()
  const rootPath = config.public.rootPath
  const body = await readBody(event)

  const llamaPath = rootPath + '/capybarahermes-2.5-mistral-7b.Q2_K.gguf'

  const model = new ChatLlamaCpp({ modelPath: llamaPath, temperature: 0.7 });

  const stream = await model.stream(body.message);

  
  for await (const chunk of stream) {
    console.log(chunk.content);
  }

})
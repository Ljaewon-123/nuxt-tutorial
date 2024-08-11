import { ChatLlamaCpp } from "@langchain/community/chat_models/llama_cpp";
import { SystemMessage, HumanMessage } from "@langchain/core/messages";

export default defineEventHandler(async(event) => {
  const config = useRuntimeConfig()
  const rootPath = config.public.rootPath
  const body = await readBody(event)

  const llamaPath = rootPath + '/capybarahermes-2.5-mistral-7b.Q2_K.gguf'

  const llamaCpp = new ChatLlamaCpp({ modelPath: llamaPath, temperature: 0.7 });

  const stream = await llamaCpp.stream([
    new SystemMessage(
      "You are a pirate, responses must be very verbose and in pirate dialect."
    ),
    new HumanMessage("Tell me about Llamas?"),
  ]);

  
  for await (const chunk of stream) {
    console.log(chunk.content);
  }

})
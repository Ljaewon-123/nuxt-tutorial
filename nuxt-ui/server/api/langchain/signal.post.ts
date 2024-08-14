import { ChatLlamaCpp } from "@langchain/community/chat_models/llama_cpp";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

export default defineEventHandler(async(event) => {
  const config = useRuntimeConfig()
  const rootPath = config.public.rootPath
  const body = await readBody(event)

  const llamaPath = rootPath + '/capybarahermes-2.5-mistral-7b.Q2_K.gguf'

  const model = new ChatLlamaCpp({ modelPath: llamaPath, temperature: 0.7 });

  const controller = new AbortController();

  // 중도 정지 
  setTimeout(() => {
    controller.abort();
    console.log("Aborted");
  }, 5000);

  const stream = await model.stream(body.message);

  
  await model.invoke(
    [
      new SystemMessage(
        "You are a pirate, responses must be very verbose and in pirate dialect."
      ),
      new HumanMessage("Tell me about Llamas?"),
    ],
    {
      signal: controller.signal,
      callbacks: [
        {
          handleLLMNewToken(token) {
            console.log(token, 'what token? ');
          },
        },
      ],
    }
  );

})
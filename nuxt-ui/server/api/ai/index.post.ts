import {LlamaModel, LlamaContext, LlamaChatSession} from "node-llama-cpp";
import {fileURLToPath} from "url";
import path from "path";
export default defineEventHandler(async(event) => {
  
  const config = useRuntimeConfig()
  const rootPath = config.public.rootPath

  const body = await readBody(event)

  const model = new LlamaModel({
    modelPath: path.join(rootPath,  "capybarahermes-2.5-mistral-7b.Q2_K.gguf")
  });
  const context = new LlamaContext({model});
  const session = new LlamaChatSession({context});
  
  const reply =  await session.prompt(body.message)
  console.log('finish')
  return reply 
  // return await session.prompt(body.message)
  // const q1 = "Hi there, how are you?";
  // console.log("User: " + q1);

  // const a1 = await session.prompt(q1);
  // console.log("AI: " + a1);


  // const q2 = "Summerize what you said";
  // console.log("User: " + q2);

  // const a2 = await session.prompt(q2);
  // console.log("AI: " + a2);

})
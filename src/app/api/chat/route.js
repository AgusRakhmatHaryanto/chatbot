import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { messages } = await req.json();

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", 
      messages,
    });

    console.log(chatResponse.choices[0].message.content);
    return Response.json({ response: chatResponse.choices[0].message.content });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch AI response" }, { status: 500 });
  }
}

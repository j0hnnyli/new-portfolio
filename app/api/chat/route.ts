import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, UIMessage } from "ai";
import { systemContent } from "./junoSystemContent";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } : {messages : UIMessage[]} = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages: convertToModelMessages(messages),
    system: systemContent,
  });

  return result.toUIMessageStreamResponse();
}

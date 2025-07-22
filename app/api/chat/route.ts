import { openai } from '@ai-sdk/openai';
import { embed, streamText } from 'ai';
import { systemContent } from './junoSystemContent';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    messages,
    system : systemContent
  });

  return result.toDataStreamResponse();
}

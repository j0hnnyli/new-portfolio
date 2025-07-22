import { embed } from 'ai';
import { openai } from '@ai-sdk/openai';
import { pineconeIndex } from './pinecone';

export async function embedAndUpsert(id: string, text: string, type: string) {

  const { embedding } = await embed({
    model: openai.embedding('text-embedding-3-small'),
    value: text,
  });

 await pineconeIndex.namespace(type).upsert([
    {
      id,                
      values: embedding,
      metadata: {       
        text,
      },
    },
  ]);
}


'use client';

import { useChat } from '@ai-sdk/react';
import Image from 'next/image';
import { IoPersonCircleSharp } from "react-icons/io5";
import { twMerge } from 'tailwind-merge';
import { FaArrowUp } from "react-icons/fa";
import ExpandableTextArea from './ExpandableTextArea';
import { useEffect, useRef, useState } from 'react';
import { DefaultChatTransport } from 'ai';

export default function Juno() {
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
    messages: [
      {
        id: '1',
        role: 'assistant',
        parts: [
          { type: 'text', text: "Hello! I'm Juno, Johnny's personal AI. Ask me anything!" }
        ],
        status: 'ready',
      },
    ],
  });

  const handleSubmit = (inputVal : string) => {
    if (inputVal.trim() === '') return;
    sendMessage({ text : inputVal });
    setInput('');
  }

 const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, status]);

  return (
    <div className="w-full max-w-[800px] mt-20 mx-auto p-5 lg:px-0 h-[calc(100vh-80px)]">
      {messages.map((message) => (
        <div
          key={message.id}
          className={twMerge(
            "whitespace-pre-wrap flex items-start gap-2 mb-5",
            message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
          )}
        >
          <div className="w-8 h-8 relative flex-shrink-0 bg-secondary_color rounded-full">
            {message.role !== 'assistant' ? (
              <IoPersonCircleSharp className="text-white text-3xl w-full h-full" />
            ) : (
              <Image
                src="/juno.png"
                alt="juno-avatar"
                fill
                className="rounded-full object-cover object-top"
              />
            )}
          </div>

          {message.parts.map((part, i) => {
            if (part.type === 'text') {
              return (
                <div
                  key={`${message.id}-part-${i}`}
                  className={twMerge(
                    'md:max-w-[75%] p-2 text-md text-primary_color rounded-lg w-fit',
                    message.role !== 'assistant'
                      ? 'bg-third_color text-white'
                      : 'bg-secondary_color/70'
                  )}
                >
                  {part.text}
                </div>
              );
            }
          })}
        </div>
      ))}

      {status === "submitted" && (
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 relative flex-shrink-0 bg-secondary_color rounded-full">
            <Image
              src="/juno.png"
              alt="juno-avatar"
              fill
              className="rounded-full object-cover object-top"
            />
          </div>
          <div className="h-5 w-5 bg-secondary_color animate-pulse rounded-full"></div>
        </div>
      )}

      <div ref={chatEndRef} className='pb-36'/>

      <div className='bg-primary_color w-full h-26 fixed bottom-0 left-0 right-0 p-5 flex flex-col items-center justify-center gap-2 md:max-w-[800px] mx-auto'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(input);
          }}
          className="w-full shadow-xl rounded-lg overflow-hidden flex items-center justify-between p-2 bg-white gap-1"
        >
          <ExpandableTextArea
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            onSubmit={() => handleSubmit(input)}
          />
          <button className='w-8 h-8 bg-third_color flex items-center justify-center self-end rounded-full hover:bg-third_color/80'>
            <FaArrowUp className='text-white text-lg' />
          </button>
        </form>
      </div>
    </div>  
  );
}
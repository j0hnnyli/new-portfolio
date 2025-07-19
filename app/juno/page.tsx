'use client';

import { useChat } from '@ai-sdk/react';
import Image from 'next/image';
import { IoPersonCircleSharp } from "react-icons/io5";
import { twMerge } from 'tailwind-merge';
import { FaArrowUp } from "react-icons/fa";
import ExpandableTextArea from './ExpandableTextArea';
import { motion } from 'framer-motion';

export default function Juno() {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: '1',
        role: 'assistant',
        content: "Hello I'm Juno, Johnny's personal AI. Curious about Johnny's skills, experience, hobbies? I'm ready to provide all the answers! Just ask!",
      },
    ]
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-[800px] mt-24 mx-auto p-5 lg:px-0 pb-36">
        {messages.map((message) => (
          <div
            key={message.id}
            className={twMerge(
              "whitespace-pre-wrap flex items-start gap-2 mb-5",
              message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            )}
          >
            <div className="w-8 h-8 relative flex-shrink-0 bg-secondary_color rounded-full">
              {message.role === 'user' ? (
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

            {message.parts.map((part) => {
              if (part.type === 'text') {
                return (
                  <div
                    key={message.id}
                    className={twMerge(
                      'max-w-[75%] p-2 text-md text-primary_color rounded-lg',
                      message.role === 'user'
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

        <div className='bg-primary_color w-full h-26 fixed bottom-0 left-0 right-0 p-5 flex items-center justify-center gap-2'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="w-full md:max-w-[800px] shadow-xl rounded-lg overflow-hidden flex items-center justify-between p-2 bg-white gap-1"
          >

            <ExpandableTextArea
              value={input}
              onChange={handleInputChange} 
              onSubmit={handleSubmit}
            />
            <button className='w-8 h-8 bg-third_color flex items-center justify-center self-end rounded-full hover:bg-third_color/80'>
              <FaArrowUp className='text-white text-lg' />
            </button>
          </form>
        </div>
      </div>
    </motion.div>       
  );
}
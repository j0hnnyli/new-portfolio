'use client'

import { ChangeEvent, useEffect, useRef} from 'react';

type ExpandableTextAreaProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
}

export default function ExpandableTextArea({value, onChange, onSubmit}: ExpandableTextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if(!textareaRef.current) return;
    textareaRef.current.style.height = 'auto'; 
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [value]);

  return (
     <textarea
      ref={textareaRef}
      value={value}
       onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          onSubmit();
        }
      }}
      placeholder="Ask Juno anything about me..."
      onChange={onChange}
      className="w-full max-h-24 min-h-[40px] resize-none overflow-y-auto p-2 outline-none scroolbar-none"
      rows={1}
    />
  );
}
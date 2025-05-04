"use client";

import React, { FormEvent, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import emailjs from '@emailjs/browser'

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const Form = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [firstError, setFirstError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [sucess, setSucess] = useState<boolean>(false);
  const [failed, setFailed] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  const validForm = () => {
    if (!firstNameRef.current) return false;
    if (!lastNameRef.current) return false;
    if (!emailRef.current) return false;
    if (!messageRef.current) return false;

    const validEmail = emailRegex.test(emailRef.current.value);

    if (firstNameRef.current.value.length === 0) {
      setFirstError(true);
      return false;
    }

    if (!validEmail) {
      setEmailError(true);
      return false;
    }

    if (messageRef.current.value.length < 10) {
      setMessageError(true);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validForm()) return;
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY!;

    const templateParams = {
      from_name : firstNameRef.current?.value,
      from_email: emailRef.current?.value,
      message: messageRef.current?.value,
    }
    
    setIsSending(true);

    const res = await emailjs.send(serviceId, templateId, templateParams, publicKey)
    
    if(res.status === 200){
      firstNameRef.current!.value = ''
      lastNameRef.current!.value = ''
      emailRef.current!.value = ''
      messageRef.current!.value = ''
      setIsSending(false)
      setSucess(true)
      setTimeout(() => setSucess(false), 5000);
    }else{
      setIsSending(false)
      setFailed(true)
      setTimeout(() => setFailed(false), 5000);
    }
  };  

  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        className="w-full md:w-[50%]"
      >
        <div className="flex items-center gap-5 mb-5 justify-between">
          <div className="flex flex-col w-full relative">
            <input
              ref={firstNameRef}
              autoFocus={firstError}
              onChange={() => {
                if (firstError) setFirstError(false);
              }}
              type="text"
              id="first"
              placeholder="First Name *"
              className={`py-2 w-full mt-1 outline-none bg-primary_color border-b ${
                firstError ? "border-error_red" : "border-secondary_color"
              } text-secondary_color `}
            />
            <p>
              {firstError && (
                <span className="text-error_red text-sm absolute -bottom-5">Invalid Name</span>
              )}
            </p>
          </div>

          <div className="w-full">
            <input
              ref={lastNameRef}
              type="text"
              id="last"
              placeholder="Last Name"
              className="py-2 w-full mt-1 outline-none bg-primary_color border-b border-secondary_color"
            />
          </div>
        </div>

        <div className="w-full relative mb-5">
          <input
            ref={emailRef}
            autoFocus={emailError}
            onChange={() => {
              if (emailError) setEmailError(false);
            }}
            type="email"
            id="email"
            placeholder="Email *"
            className={`py-2 w-full mt-1 outline-none bg-primary_color border-b ${
              emailError ? "border-error_red" : "border-secondary_color"
            } text-secondary_color`}
          />
          <p>
            {emailError && (
              <span className="text-error_red text-sm absolute -bottom-5">Invalid Email</span>
            )}
          </p>
        </div>

        <div className="w-full relative mb-5">
          <textarea
            name="message"
            id="message"
            ref={messageRef}
            onChange={() => {
              if (messageError) setMessageError(false);
            }}
            placeholder="Hello! I woud love to connect with you . . ."
            cols={10}
            rows={5}
            className={`py-2 w-full mt-1 outline-none bg-primary_color border-b ${
              messageError ? "border-error_red" : "border-secondary_color"
            }`}
          ></textarea>
          <p>
            {messageError && (
              <span className="text-error_red text-sm absolute -bottom-5">Message Was Too Short!</span>
            )}
          </p>
        </div>
        
        <div className="flex items-center">
          <div className="relative group">
            <button className="py-2 flex">
              <span>
                SEND
              </span>
              <FiArrowUpRight className="text-md mt-1 group-hover:-mt-[1px] group-hover:ml-1 transition-all duration-300 ease-in-out"/>
            </button>

            <span className='absolute bottom-[-3px] left-0 h-[2px] bg-third_color w-full scale-x-0 group-hover:scale-x-100 origin-left duration-300 ease-in-out'/>
          </div>

          {isSending && <p className="text-secondary_color animate-pulse mx-3">Sending . . .</p>}
          {sucess && <p className="text-green-500 mx-3 text-md">Success! Will get back to you Soon!</p>}
          {failed && <p className="text-red-600 mx-3 text-md">Sorry Messaged Failed! Please try again</p>}
        </div>
      </form>
    </>
  );
};

export default Form;

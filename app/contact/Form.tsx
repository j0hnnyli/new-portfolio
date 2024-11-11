"use client";

import React, { FormEvent, useRef, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
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
      <form onSubmit={handleSubmit} className="md:w-[60%] mx-auto p-3">
        <div className="flex flex-col md:flex-row items-center gap-5 mb-5">
          <div className="flex flex-col w-full">
            <label htmlFor="first">
              First Name:*{" "}
              {firstError && (
                <span className="text-error_red">Invalid Name</span>
              )}
            </label>
            <input
              ref={firstNameRef}
              autoFocus={firstError}
              onChange={() => {
                if (firstError) setFirstError(false);
              }}
              type="text"
              id="first"
              placeholder="Johnny . . ."
              className={`py-2 px-4 w-full mt-1 outline-none ${
                firstError && "outline-error_red"
              } text-black rounded-xl`}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="last">Last Name:</label>
            <input
              ref={lastNameRef}
              type="text"
              id="last"
              placeholder="Li . . ."
              className="py-2 px-4 w-full mt-1 outline-none text-black rounded-xl"
            />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="email">
            Email:*{" "}
            {emailError && (
              <span className="text-error_red">Invalid Email</span>
            )}
          </label>
          <input
            ref={emailRef}
            autoFocus={emailError}
            onChange={() => {
              if (emailError) setEmailError(false);
            }}
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className={`py-2 px-4 w-full mt-1 outline-none ${
              emailError && "outline-error_red"
            } text-black rounded-xl `}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">
            Message:*{" "}
            {messageError && (
              <span className="text-error_red">Message Was Too Short!</span>
            )}
          </label>
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
            className={`rounded-xl mt-1 text-black py-2 px-4 outline-none ${
              messageError && "outline-error_red"
            }`}
          ></textarea>
        </div>
        
        <div className="flex items-center">
          <button className="bg-primary_green py-2 px-4 rounded-xl my-5 hover:bg-green-800 hover:shadow-2xl hover:shadow-primary_green">
            SEND
          </button>
          {isSending && <p className="text-white animate-pulse mx-3">Sending . . .</p>}
          {sucess && <p className="text-green-300 mx-3 text-md">Success! Will get back to you Soon!</p>}
          {failed && <p className="text-red-600 mx-3 text-md">Sorry Messaged Failed! Please try again</p>}
        </div>
      </form>

      <div className="flex flex-col items-center justify-center mb-5">
        <h2 className="text-primary_green font-bold tracking-widest text-xl">
          Email: lijohnny21@mgmail.com
        </h2>
        <h2 className="text-primary_green font-bold tracking-widest text-xl mt-1">
          Phone: (347) 681-2466
        </h2>
        <div className="text-white flex gap-3 text-3xl mt-1">
          <Link
            href="https://x.com/Johnnyli31"
            target="_blank"
            className="hover:text-primary_green"
          >
            <FaXTwitter />
          </Link>

          <Link
            href="https://github.com/j0hnnyli"
            target="_blank"
            className="hover:text-primary_green"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Form;

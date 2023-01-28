import React from 'react'
import {
  PhoneIcon, MapPinIcon, EnvelopeIcon
} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '@/typings';

type Props = {
  pageInfo: PageInfo;
}

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({ pageInfo }: Props) => {
  const { 
    register, 
    handleSubmit, 
    } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:javhvac25@outlook.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. 
    ${formData.message} ${formData.email}`
  };

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-center md:text-left
      md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-slate-500 text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-6'>
        <h4 className='text-4xl font-extrabold text-center'>
          I have got just what you need. &nbsp;
          <span className='decoration-[#0891b2] underline'>Let&apos;s Talk.</span>
        </h4>

        <div className='space-y-4'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#0891b2] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>{pageInfo.phoneNumber}</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#0891b2] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>{pageInfo.email}</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#0891b2] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)} 
          className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input 
              {...register('name')} 
              placeholder="Name" 
              className='contactInput' 
              type="text" />
            <input 
            {...register('email')} 
            placeholder='Email' 
            className='contactInput' 
            type="email" />
          </div>
          <input 
          {...register('subject')} 
          placeholder='Subject' 
          className='contactInput' 
          type="text" />
          <textarea 
          {...register('message')} 
          placeholder='Message' 
          className='contactInput' />

          <button 
            type='submit' 
            className='bg-cyan-600 py-4 px-10 rounded-md text-slate-100 font-bold'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '@/typings';
import urlFor from '../lib/urlFor'

type Props = {
    directionLeft?: boolean;
    skill: Skill
}

const Skill = ({ directionLeft, skill }:Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ?-200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-full border border-slate-500 object-cover w-24 h-24 
            xl:-32 xl:h-32 filter group-hover:grayscale transition duraton-300 ease-in-out"
            src={urlFor(skill.image).url()}
            alt=''
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition furation-300
        ease-in-out group-hover:bg-slate-50 h-24 w-24 md:w-28 md:h-28 xl:-32 xl:-32
        rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-slate-900 opacity-100'>
                    {skill.progress}%
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill
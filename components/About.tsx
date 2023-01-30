import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import urlFor from '../lib/urlFor'

type Props = {
    pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen 2xl:top-16 text-center xl:text-left xl:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[10px] md:tracking-[20px] text-slate-500 text-2xl'>
            About
        </h3>
        <motion.img 
            initial={{ 
                x: 200,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ 
                x: 0, 
                opacity: 1
            }}
            viewport={{ once: true }}
            src={urlFor(pageInfo?.profilePic).url()}
            className='-mb-24 2xl:mb-20 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg xl:w[500px] xl:h-[500px]'
        />
        <div className='space-y-2 md:space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl md:text-4xl font-extrabold'>
                Here is a{" "} 
                <span className='underline decoration-[#0891b2]'>little</span>{" "}
                background.
            </h4>
            <p className='w-80 md:w-auto text-base line-clamp-6 md:line-clamp-none'>
                {pageInfo.backgroundInformation}.
            </p>
        </div>
    </motion.div>
  )
}

export default About
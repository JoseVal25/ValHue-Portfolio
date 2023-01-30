import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import urlFor from '../lib/urlFor'
import Image from 'next/image'

type Props = {
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 shadow-md
        flex-shrink-0 w-[320px] md:w-[500px] 2xl:w-[550px] snap-center bg-slate-50 p-10 max-h-[460px] md:max-h-[550px]
        hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden touch-auto'>
       <motion.img 
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity:1, y: 0 }}
        viewport={{ once: true }}
        className='w-30 h-30 rounded-full 2xl:w-[300px] 2xl:h-[150px] 
        object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt=""
       />
       <div className='px-0 md:px-10'>
        <h4 className='text-3xl md:text-4xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text2xl mt-1'>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map((technology) => (
            <Image 
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt=""
              width={40}
              height={40}
              className='h-8 w-8 md:h-10 md:w-10 rounded-full'
            />
          ))}
        </div>
        <p className='uppercase py-4 text-slate-400'>
          {new Date(experience.dateStarted).toDateString()}{"  —  "}
          {experience.isCurrentlyWorkingHere
            ? "Present" 
            : new Date(experience.dateEnded).toDateString()
          }
        </p>
        <ul className='list-disc space-y-2 ml-4 text-md md:text-lg'>
            {experience.points.map((point, i) => (
              <li key={i} >{point}</li>
            ))}
        </ul>
       </div>
    </article>
  )
}

export default ExperienceCard
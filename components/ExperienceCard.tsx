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
    <article className='flex flex-col roundel-lg items-center space-y-7 
        flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
        snap-center bg-slate-50 p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
       <motion.img 
        initial={{
            y: -100,
            opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity:1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] 
        object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt=""
       />
       <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text2xl mt-1'>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map((technology) => (
            <Image 
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt=""
              width={50}
              height={50}
              className='h-10 w-10 rounded-full'
            />
          ))}
        </div>
        <p className='uppercase py-5 text-slate-500'>
          {new Date(experience.dateStarted).toDateString()}{"  —  "}
          {experience.isCurrentlyWorkingHere
            ? "Present" 
            : new Date(experience.dateEnded).toDateString()
          }
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            {experience.points.map((point, i) => (
              <li key={i} >{point}</li>
            ))}
        </ul>
       </div>
    </article>
  )
}

export default ExperienceCard
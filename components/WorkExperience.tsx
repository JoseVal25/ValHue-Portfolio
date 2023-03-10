import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'


type Props = {
  experiences: Experience[]
}

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }} 
        className='h-screen flex relative overflow-hidden flex-col text-left
        max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[15px] md:tracking-[20px] text-slate-500 text-2xl'>
            Experience
        </h3>
        <div className='w-80 md:w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
          scrollbar scrollbar-track-slate-600/10 scrollbar-thumb-cyan-600/80'>
            {experiences?.map((experience) => (
              <ExperienceCard
                key={experience._id}
                experience={experience}
              />
            ))}
        </div>
    </motion.div>
  )
}

export default WorkExperience
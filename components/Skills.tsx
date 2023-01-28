import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '@/typings'

type Props = {
    skills: SkillType[]
}

const Skills = ({ skills }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex relative flex-col text-center max-w-[2000px] 
            min-h-screen justify-center items-center'>
            <h3 className='absolute top-16 uppercase tracking-[20px] text-slate-500 text-2xl'>
                Skills
            </h3>
            <h3 className='absolute top-32 uppercase tracking-[3px] text-slate-500 text-sm'>
                Hover over a skill for current preoficiency
            </h3>
            <div className='grid grid-cols-4 gap-2'>
                {skills?.slice(0, skills.length/2).map((skill) => (
                    <Skill 
                        key={skill._id} 
                        skill={skill}                    
                    />
                ))}
                  {skills?.slice(skills.length/2, skills.length).map((skill) => (
                    <Skill 
                        key={skill._id} 
                        skill={skill} 
                        directionLeft                   
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default Skills
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings'
import urlFor from '../lib/urlFor'
import Image from 'next/image'

type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left
            max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-16 uppercase tracking-[20px] text-slate-500 text-2xl'>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll 
            overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-slate-600/10 
            scrollbar-thumb-cyan-600/80'>
                {projects?.map((project) => (
                    <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col 
                        space-y-5 items-center justify-center p-20 h-screen'>
                        <a href={project.linkToBuild} target="_blank" rel="noopener noreferrer" >
                            <motion.img
                                initial={{ y: -300, opacity: 0 }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                                                               
                                src={urlFor(project.image).url()} alt=''
                                width={400}
                                height={400}
                            />
                        </a>
                        <div className='space-y-8 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-3xl font-extrabold text-center'>
                                <span className='underline decoration-[#0891b2]'>
                                    Case Study {projects.indexOf(project) + 1} of {projects.length}
                                </span>
                                : {project.title}
                            </h4>
                            <div className='flex space-x-4 items-center justify-center'>
                                {project.technologies.map((technology) =>
                                    <Image
                                        className='h-8 w-8'
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                        alt=""
                                        width={200}
                                        height={200}
                                    />
                                )}
                            </div>
                            <p className='text-lg text-center md:text-left'>
                                {project.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-cyan-600/10
            h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects
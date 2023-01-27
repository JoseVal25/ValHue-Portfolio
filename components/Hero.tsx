import urlFor from '../lib/urlFor'
import { PageInfo } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi, my name is ${pageInfo?.name}.`,
            "Guy-who-loves-coffee.",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 
        items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                src={urlFor(pageInfo?.heroImage).url()}
                width={128}
                height={128}
                alt=""
                className='relative rounded-full border-cyan-600 h-32 w-32 mx-auto object-cover'
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {pageInfo.role}
                </h2>
                <h1 className='text-5xl lg:text-6xl font-extrabold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#0891b2' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
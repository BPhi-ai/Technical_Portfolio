import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect'

import project1 from "../../public/images/projects/mozilla-pic.png";
import project2 from "../../public/images/projects/acm-pic.png";
import project3 from "../../public/images/projects/discord-pic.png";
import project4 from "../../public/images/projects/chaos-pic.png";
import project5 from "../../public/images/projects/portfolio.png";
import project6 from "../../public/images/projects/chess.png";
import project7 from "../../public/images/projects/pacman-pic.png";
import project8 from "../../public/images/projects/minecraft.png";
import project9 from "../../public/images/projects/mystery.jpg";
import project10 from "../../public/images/projects/btd-pic.png";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link = '/', github}) => {
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl
        border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light"/>
            <Link href={`${link}`} target={"_blank"} className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}} transition={{duration:0.2}} priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={`${link}`} target={"_blank"} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={`${github}`} target={"_blank"} className='w-10 dark:text-light'><BsGithub style={{fontSize: 2.5 + 'em'}}/></Link>
                    <Link href={`${link}`} target={"_blank"} className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base
                    p-2 px-6 text-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 '>
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] md:-right-2 mid:w-[101%] xs:h-[102%] "/>
            <Link href={`${link}`} target={"_blank"} className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}} transition={{duration:0.2}} priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={`${link}`} target={"_blank"} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-sm'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={`${link}`} target={"_blank"} className='text-lg font-semibold underline md:text-base'>Visit</Link>
                    <Link href={`${github}`} target={"_blank"} className='w-8 md:w-6'><BsGithub style={{fontSize: 2.5 + 'em'}}/></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>BPhams | Projects Page</title>
            <meta name="description" content="any description"/>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!"
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-5'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        type="Featured Project"
                        title="Mozilla UI Migrator Modal"
                        summary="An updated migrator modal for Firefox, as part of a CS Capstone Project Program between the California State University,
                        Los Angeles (CSULA) team and the Mozilla Foundation."
                        img={project1}
                        link="/"
                        github="/"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        type="Web and Internet Programming"
                        title="ACM@CSULA"
                        img={project2}
                        link="https://acm-calstatela.com/"
                        github="https://github.com/acm-csula/ACM-Main-Website"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        type="Discord Development"
                        title="Syndicate Discord Bot"
                        img={project3}
                        link="https://github.com/BPhi-ai/Syndicate"
                        github="https://github.com/BPhi-ai/Syndicate"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        type="Frontend Web Development"
                        title="Technical Portfolio v1"
                        img={project5}
                        link="https://github.com/BPhi-ai/Website-Portfolio"
                        github="https://github.com/BPhi-ai/Website-Portfolio"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        type="Web and Internet Programming"
                        title="ChaosSocial (Facebook Main Page Replica)"
                        img={project4}
                        link="https://github.com/BPhi-ai/ChaosSocial-React"
                        github="https://github.com/BPhi-ai/ChaosSocial-React"
                        />
                    </div>

                    <div className='col-span-12'>
                        <FeaturedProject
                        type="Featured Project"
                        title="Unity 2D Kingdom Card Game"
                        summary="As part of a 'multi-year' Unity development, this will represent a 2D-style card game that uses complex storytelling and card
                        mechanics."
                        img={project9}
                        link="/"
                        github="/"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        type="Game Development"
                        title="ACMium Minecraft Mod (Spring 2023)"
                        img={project8}
                        link="https://github.com/BPhi-ai/ACMatic_Experience_Mod"
                        github="https://github.com/BPhi-ai/ACMatic_Experience_Mod"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        type="Unity Game Development"
                        title="Unity Bloons Tower Defense Remake (Fall 2022)"
                        img={project10}
                        link="https://github.com/BPhi-ai/ACM-BTDUnityRecreate"
                        github="https://github.com/BPhi-ai/ACM-BTDUnityRecreate"
                        />
                    </div>
                    <div className='col-span-6'>
                        <Project
                        type="Unity Game Development"
                        title="Unity Pacman Remake (Fall 2021)"
                        img={project7}
                        link="https://github.com/BPhi-ai/ACM-PacmanUnityRemake"
                        github="https://github.com/BPhi-ai/ACM-PacmanUnityRemake"
                        /> 
                    </div>
                    <div className='col-span-6'>
                        <Project
                       type="Game Development"
                       title="Java AI Chess (Fall 2022)"
                       img={project6}
                       link="https://github.com/BPhi-ai/Java-Local-Chess"
                       github="https://github.com/BPhi-ai/Java-Local-Chess"
                        />
                    </div>
                </div>

            </Layout>
        </main>
    </>
  )
}

export default projects

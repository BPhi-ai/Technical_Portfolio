import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion';
import LiIcon from './LiIcon';
import AnimatedText from './AnimatedText';

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:-mb-7 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className='captialize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
        target: ref,
        offset: ["start end", "center start"]
    }
  ) 
  return (
    <div className='my-32'>
        <AnimatedText text="Experience" className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16"/>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[96%] md:w-full'>
            <motion.div style={{scaleY:scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-[85%] bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:!left-[20px] xs:h-[80%]"/>
            
            <ul className="w-full flex flex-col items-start justify-between ml-4 dark:text-light -mr-4 xs:ml-2">
                <Details position="Vice President of Internal Affairs" company="Association For Computing Machinery (ACM)" time="September 2023 - Present" address="Los Angeles, CA"
                work="Posting ACM announcements on the main ACM Discord server, about events and workshops to about 300+ ACM members, in addition of publishing ACM posts on ACM's social media accounts."/>
                <Details position="Story Developer" company="TBA" time="July 2023 - Present" address="Remote"
                work="Working on the story of a Unity based 2D game, introducing events that will be implemented throughout the game."/>
                <Details position="Web Committee Leader" company="Association For Computing Machinery (ACM)" time="December 2022 - May 2023" address="Los Angeles, CA"
                work="Worked with collaboration with the President, Webmaster, and the Web Team on updating ACM's main website to include events and activities
                that are posted for ACM Members each semester."/>
                <Details position="Open-Source Software Contributor" company="Mozilla Foundation" time="August 2022- May 2023" address="Remote"
                work="As part of a CS Capstone Project Program between CSULA and the Mozilla Foundation, collaborated to implement additional migrators to support
                Chromium-based browsers to migrate data into Firefox. Working with team members to fix 75+ migration-related bugs."/>
            </ul>
        </div>
    </div>
  )
}

export default Experience

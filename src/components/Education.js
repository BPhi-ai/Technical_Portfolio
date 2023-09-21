import React, { useRef } from 'react'
import {motion, useScroll} from 'framer-motion';
import LiIcon from './LiIcon';
import AnimatedText from './AnimatedText';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className='captialize font-bold text-2xl'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light'>
                {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
        target: ref,
        offset: ["start end", "center start"]
    }
  ) 
  return (
    <div className='my-64'>
        <AnimatedText text="Education" className="font-bold text-8xl mb-20 -mt-4.5 w-full text-center md:text-6xl xs:text-4xl md:mb-16"/>

        <div ref={ref} className='w-[75%] mx-auto mb-20 relative'>
            <motion.div style={{scaleY:scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light xl:h-[80%] lg:h-[90%] md:h-[70%] md:w-[2px] md:left-[30px] xs:!left-[20px] xs:h-[60%]"/>
            
            <ul className="w-full flex flex-col items-start justify-between ml-4 dark:text-light">
                <Details 
                    type="Bachelor Of Science In Computer Science"
                    time="2019-2023"
                    place="California State University, Los Angeles (CSULA)"
                    info="Cum Laude Recipient, ACM 2023 Scholarship Recipient, Dean's List (2020-2023), Member of the
                          Association For Computing Machinery (ACM) | Relevant Courses: Analysis of Algorithms, Programing with Data Structures,
                          Web and Internet Programming, Software Design Laboratory"
                />
                <Details 
                    type="High School Diploma"
                    time="2016-2019"
                    place="San Gabriel High School (SGHS)"
                    info="Recipient of the President's Award for Academic Excellence, CSF Scholar, Member of
                          the Business and Technology Academy, Social Media Manager for BTA | Relevant Courses: Math/Computing Programming, 
                          Digimedia, Video Game Design"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education

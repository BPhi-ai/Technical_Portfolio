import React from 'react'
import {motion} from 'framer-motion'
import AnimatedText from './AnimatedText'
import {SkillList} from '../constants/constants';

const Skill = ({name, x, y}) => {
    return (
        <div className='w-fill h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold whitespace-nowrap
            py-3 px-6 bg-dark text-light p-8 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py02 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold' whileHover={{scale:1.05}} initial={{x:0,y:0}}
            whileInView={{ x:x, y:y, transition: {duration: 1.5}}} viewport={{once:true}}>
                {name}
            </motion.div>
        </div>
    )
}
const Skills = () => {
  return (
    <>
        <AnimatedText text="Skills" className='font-bold text-8xl mt-16 mb-16 w-full text-center md:text-5xl md:mt-32'/>
        <div className='w-fill h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold 
             bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{scale:1.05}}>
                Web
            </motion.div>
            {SkillList.map(({name, x, y, i}) => (
                <Skill name={name} x={x} y={y} key={i}/>
            ))}
        </div>
    </>
  )
}

export default Skills

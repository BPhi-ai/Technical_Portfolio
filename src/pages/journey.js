import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import TransitionEffect from '@/components/TransitionEffect'
import React from 'react'
import Head from 'next/head';

const learn = () => {
  return (
    <>
        <Head>
          <title>BPhams | Journey</title>
          <meta name="description" content="any description"/>
        </Head>
        <div className='w-full h-full inline-block z-0 bg-light dark:bg-dark p-16 mt-2'>
            <TransitionEffect />
            <AnimatedText text='"Knowledge is power, overall is everything."' className='sm:text-4xl mb-4 size: h-1/2z'/>
            <Experience />
            <Skills />
            <Education />
        </div>
    </>
  )
}

export default learn

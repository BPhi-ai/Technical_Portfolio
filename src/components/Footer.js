import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full mt-10 -h-10 border t-4 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span> &copy; 2023 All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'> 
                Build passion with &nbsp;<Link href="https://www.linkedin.com/in/brian-pham-a5674b163/" className='underline
                underline-offset-2' target={"_blank"}>@BPhams</Link>
            </div>
            <Link href="https://www.linkedin.com/in/brian-pham-a5674b163/" target={"_blank"}>Say hello!</Link>
        </Layout>
    </footer>
  )
}

export default Footer

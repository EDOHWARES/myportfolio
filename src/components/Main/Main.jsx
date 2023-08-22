import React from 'react'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import ReachOut from './ReachOut'
import Form from './Form'
import Certification from './Certification'

const Main = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <div className='flex flex-col mt-20 md:flex-row md:px-10 px-4 py-6 '>
      <Certification />
      <ReachOut />
      </div>

      <Form />
    </main>
  )
}

export default Main

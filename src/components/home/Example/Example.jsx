//libraries
import React, { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

//config
import config from './config'

const Example = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  return (
    <section className=' h-screen min-h-[750px] w-screen pt-20 flex flex-col items-center justify-center gap-10 px-10 mx-auto'>
      <div className='z-50 items-center flex flex-col gap-10'>
        {/* lorem... */}
        <p className='text-center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      <Particles id='tsparticles' options={config} init={particlesInit} />
    </section>
  )
}

export default Example

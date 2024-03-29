import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Timeline from '../components/Timeline'

const Home = () => {
    return (
        <>
            <div className='max-[1024px]:px-4 max-w-full'>
                <Hero />
                <About />
            </div>
            <Products />
            <Timeline />
        </>
    )
}

export default Home
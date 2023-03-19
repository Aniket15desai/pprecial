import React from 'react'

const About = () => {
    return (
        <>
            <div className="lg:grid lg:grid-cols-12 lg:mt-36 flex flex-col lg:mb-20">
                <div className="flex justify-center lg:mt-12 col-span-6 items-center">
                    <img src="/assets/images/About.svg" alt="About-Img" />
                </div>
                <div className="flex flex-col lg:col-span-6 lg:px-14 sm:col-span-12 lg:justify-start lg:items-center sm:justify-center">
                    <h1 className="lg:text-[42px] p-0 m-0 lg:leading-[4rem] font-bold tracking-wide">
                        What is Apprecial?
                    </h1>
                    <div className="font-normal text-lg leading-7 opacity-60">
                        Apprecial is a Software-As-A-Service (SAAS) internet company
                        dedicated to developing innovative applications that make your
                        everyday life easier and more enjoyable.
                        <br />
                        <br /> At Apprecial, we are pushing the boundaries of innovation
                        with our cutting-edge applications designed to enhance your
                        productivity. By fusing inspiration and dedication, we're
                        revolutionising the way you interact with the internet, taking your
                        experience to new heights. With facility, faculty, and fecundity,
                        our goal is to not only modernise your digital persona and presence,
                        but also to inspire a positive change in your personal and
                        professional competencies.
                    </div>
                </div>
            </div>
            <div class="lg:flex block justify-around">
                <div class="block relative max-w-sm h-96 lg:mb-0 mb-4 rounded-lg text-center bg-white shadow-[0_4px_51px_4px_rgba(0,0,0,0.08)] overflow-hidden">
                    <h5 class="text-4xl p-8 font-medium leading-tight">Mission</h5>
                    <p class="mb-4 text-lg px-8 font-normal opacity-[0.6]">
                        To provide eclectic, energetic, efficacious digital products that
                        empower people to improve their productivity, achieve their goals,
                        and bolster both personal and business lives.
                    </p>
                    <img src='/assets/images/mission.svg' className='absolute top-4 -left-12 opacity-[0.1]' alt='IMG' />
                </div>
                <div class="block relative max-w-sm h-96 lg:mb-0 mb-4 rounded-lg text-center bg-white shadow-[0_4px_51px_4px_rgba(0,0,0,0.08)] overflow-hidden">
                    <h5 class="text-4xl p-8 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Vission
                    </h5>
                    <p class="mb-4 text-lg px-8 font-normal opacity-[0.6]">
                        To improve productivity and enhance connectivity worldwide by
                        leveraging the power of the internet.
                    </p>
                    <img src='/assets/images/vission.svg' className='absolute top-10 -left-12 opacity-[0.1]' alt='IMG' />
                </div>
                <div class="block relative max-w-sm h-96 lg:mb-0 mb-4 rounded-lg text-center bg-white shadow-[0_4px_51px_4px_rgba(0,0,0,0.08)] overflow-hidden">
                    <h5 class="text-4xl p-8 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Our Values
                    </h5>
                    <p class="mb-4 text-lg px-8 font-normal opacity-[0.6]">
                        At Apprecial, we believe our users are our greatest asset. By
                        providing exceptional service and embracing customer feedback, we
                        prioritise what matters and hold the key to creating solutions that
                        revolutionise online experiences.
                    </p>
                    <img src='/assets/images/values.svg' className='absolute top-0 -left-12 opacity-[0.1]' alt='IMG' />
                </div>
            </div>
        </>
    )
}
export default About

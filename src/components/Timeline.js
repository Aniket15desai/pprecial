import React from 'react'

const Timeline = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-32 mb-28'>
            <h1 className='text-center text-black w-48 border-b-[3px] border-[#BB6A37] lg:text-[42px] p-0 m-0 lg:leading-[4rem] font-bold tracking-wide'>
                Timeline
            </h1>
            <div
                class="flex flex-col md:grid grid-cols-9 mx-auto p-2 mt-32 text-blue-50 justify-center"
            >
                {/* <!-- left --> */}
                <div class="flex flex-row-reverse md:contents">
                    <div
                        class="bg-white  w-80 col-start-1 col-end-5 p-4 rounded-2xl my-4 ml-auto shadow-[0_4px_51px_4px_rgba(0,0,0,0.08)]"
                    >
                        <h3 class="font-semibold text-lg mb-1 bg-[#BB6A38] text-black  opacity-[0.6] text-center p-3 rounded-xl">The Journey Begins</h3>
                        <p class="text-center mt-6 text-black obacity-[0.8]">
                            The moment we realised the world needed a company that would create useful digital products to solve everyday problems, Apprecial was born.
                        </p>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-1 bg-[#BB6A38] pointer-events-none"></div>
                        </div>
                        <div
                            class="text-black w-16 h-16 left-8 absolute top-1/2 -mt-3 rounded-full bg-grey-100 shadow flex justify-center text-center items-center"
                        > 2015 </div>
                    </div>
                </div>
                {/* <!-- right --> */}
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-1 bg-[#BB6A38] pointer-events-none"></div>
                        </div>
                        <div
                            class="text-black w-16 h-16 right-8 absolute top-1/2 -mt-3 rounded-full bg-grey-100 shadow flex justify-center text-center items-center"
                        >2016</div>
                    </div>
                    <div
                        class="bg-white  w-80 col-start-6 col-end-10 p-4 rounded-2xl my-4 mr-auto shadow-[0_4px_51px_4px_rgba(0,0,0,0.08)]"
                    >
                        <h3 class="font-semibold text-lg mb-1 bg-blue-200 text-black  opacity-[0.6] text-center p-3 rounded-xl">Gaming</h3>
                        <p class="text-center mt-6 text-black obacity-[0.8]">
                            With most mobile games being repetitive and filled with ads, it was time for a change. Apprecial's subsidiary company, PlayPlix, was established with the aim of creating fun and innovative mobile games.
                        </p>
                    </div>
                </div>
                {/* <!-- left --> */}
                <div class="flex flex-row-reverse md:contents">
                    <div
                        class="bg-white  w-80 col-start-1 col-end-5 p-4 rounded-2xl my-4 ml-auto shadow-[0_4px_51px_4px_rgba(0,0,0,0.08)]"
                    >
                        <h3 class="font-semibold text-lg mb-1 bg-red-200 text-black  opacity-[0.6] text-center p-3 rounded-xl">The Planning Process</h3>
                        <p class="text-center mt-6 text-black obacity-[0.8]">
                            To ensure everything runs smoothly, the planning process has been evolving for a couple of years. Within that time, all of the documentation and future plans have been drafted, and we are now proud to announce the commencement of our products.
                        </p>
                    </div>
                    <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-1 bg-[#BB6A38] pointer-events-none"></div>
                        </div>
                        <div
                            class="text-black text-black w-16 h-16 left-8 absolute top-1/2 -mt-3 rounded-full bg-grey-100 shadow flex justify-center text-center items-center"
                        >2017+</div>
                    </div>
                </div>
                {/* Right */}
                <div class="flex md:contents">
                    <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                        <div class="h-full w-6 flex items-center justify-center">
                            <div class="h-full w-1 bg-[#BB6A38] pointer-events-none"></div>
                        </div>
                        <div
                            class="text-black w-16 h-16 right-8 absolute top-1/2 -mt-3 rounded-full bg-grey-100 shadow flex justify-center text-center items-center"
                        >2023</div>
                    </div>
                    <div
                        class="bg-white  w-80 col-start-6 col-end-10 p-4 rounded-2xl my-4 mr-auto shadow-[0_4px_51px_4px_rgba(0,0,0,0.08)]"
                    >
                        <h3 class="font-semibold text-lg mb-1 bg-green-200 text-black text-center p-3 rounded-xl">Our First Mobile App</h3>
                        <p class="text-center mt-6 text-black obacity-[0.8]">
                            Werugo, our first mobile App for Android and iOS devices, is currently in the last phase of the development process and will be available for download in the upcoming weeks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
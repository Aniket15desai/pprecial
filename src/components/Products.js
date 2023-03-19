import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Products = () => {
    const { user, googleSignIn } = UserAuth()
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="relative">
            <div className="bg-gray-100 mt-36 pb-16 px-4">
                <div className="top-0 grid lg:grid-cols-12 sm:grid-cols-12 flex lg:flex:col sm:flex-row-reverse opacity-[1]">
                    <div className="flex flex-col lg:pl-24 mt-28 lg:col-span-6 sm:col-span-12 lg:justify-start sm:justify-center">
                        <h1 className="lg:text-[42px] p-0 m-0 lg:leading-[4rem] font-bold tracking-wide border-b-4 border-[#BB6A37]">
                            Our Products
                        </h1>
                        <h1 className="lg:text-[42px] p-0 m-0 lg:leading-[4rem] font-bold tracking-wide flex mt-24">
                            <img
                                src="/assets/images/dash.svg"
                                className="mr-2"
                                width={36}
                                height={36}
                                alt="dashboard"
                            />
                            Dashboard
                        </h1>
                        <div className="font-normal text-lg leading-7 opacity-80 mt-4 pr-24">
                            Unlock the full potential of Apprecial's mobile-based services
                            with our intuitive and feature-rich dashboard. It allows you to
                            stay in control by providing remote access so you can easily
                            manage your subscriptions, track account activity, or connect with
                            our support team, all from one convenient location.
                        </div>
                        {user != null ? (
                            <button
                                onClick={handleGoogleSignIn}
                                className="bg-[#BB6A37] text-white w-36 border border-[#BB6A37] font-medium text-lg py-2 px-4 mr-3 rounded-xl flex items-center mt-6"
                            >
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=""
                                >
                                    <path
                                        d="M7.39367 2.21816V5.17563C7.39367 5.76391 7.15998 6.32809 6.74401 6.74406C6.32803 7.16004 5.76385 7.39373 5.17557 7.39373H2.2181C1.62982 7.39373 1.06564 7.16004 0.649667 6.74406C0.233692 6.32809 0 5.76391 0 5.17563V2.21816C0 1.62988 0.233692 1.0657 0.649667 0.649723C1.06564 0.233748 1.62982 5.61406e-05 2.2181 5.61406e-05H5.17557C5.76385 5.61406e-05 6.32803 0.233748 6.74401 0.649723C7.15998 1.0657 7.39367 1.62988 7.39367 2.21816ZM14.3683 0H11.4109C10.8226 0 10.2584 0.233692 9.84242 0.649667C9.42644 1.06564 9.19275 1.62982 9.19275 2.2181V5.17557C9.19275 5.76385 9.42644 6.32803 9.84242 6.74401C10.2584 7.15998 10.8226 7.39367 11.4109 7.39367H14.3683C14.9566 7.39367 15.5208 7.15998 15.9368 6.74401C16.3527 6.32803 16.5864 5.76385 16.5864 5.17557V2.2181C16.5864 1.62982 16.3527 1.06564 15.9368 0.649667C15.5208 0.233692 14.9566 0 14.3683 0ZM5.17582 9.19245H2.21835C1.63007 9.19245 1.06589 9.42614 0.649912 9.84212C0.233937 10.2581 0.000245246 10.8223 0.000245246 11.4106V14.368C0.000245246 14.9563 0.233937 15.5205 0.649912 15.9365C1.06589 16.3524 1.63007 16.5861 2.21835 16.5861H5.17582C5.76409 16.5861 6.32828 16.3524 6.74425 15.9365C7.16023 15.5205 7.39392 14.9563 7.39392 14.368V11.4106C7.39392 10.8223 7.16023 10.2581 6.74425 9.84212C6.32828 9.42614 5.76409 9.19245 5.17582 9.19245ZM14.3683 9.19259H11.4109C10.8226 9.19259 10.2584 9.42628 9.84242 9.84225C9.42644 10.2582 9.19275 10.8224 9.19275 11.4107V14.3682C9.19275 14.9564 9.42644 15.5206 9.84242 15.9366C10.2584 16.3526 10.8226 16.5863 11.4109 16.5863H14.3683C14.9566 16.5863 15.5208 16.3526 15.9368 15.9366C16.3527 15.5206 16.5864 14.9564 16.5864 14.3682V11.4107C16.5864 10.8224 16.3527 10.2582 15.9368 9.84225C15.5208 9.42628 14.9566 9.19259 14.3683 9.19259Z"
                                        fill="white"
                                    />
                                </svg>

                                <span className="ml-1">Dashboard</span>
                            </button>
                        ) : (
                            <button
                                onClick={handleGoogleSignIn}
                                className="bg-[#BB6A37] text-white w-36 border font-medium text-lg py-2 px-4 mr-3 rounded-xl flex items-center mt-6"
                            >
                                <span className="ml-1">Learn more</span>
                            </button>
                        )}
                        <button className="text-black border border-[#BB6A37] font-bold py-2 px-4 mr-3 w-48 mt-12 rounded-xl inline-flex items-center">
                            <img
                                src="/assets/images/dash.svg"
                                className="mr-2"
                                alt="dashboard"
                            />
                            <div className="flex flex-col">
                                <span className="text-start text-xs font-medium">
                                    Manage on the
                                </span>
                                <span className="text-2xl font-bold">Dashboard</span>
                            </div>
                        </button>
                    </div>
                    <div className="flex justify-center col-span-6 mt-5">
                        <img src="/assets/images/dashboardImg.svg" alt="Dash-Img" />
                    </div>
                </div>
            </div>
            <div className="bg-black h-screen lg:mt-80 relative px-4">
                <div className="lg:grid lg:grid-cols-12 lg:mt-36 sm:grid-cols-6 flex flex-col-reverse lg:mb-20">
                    <div className="flex justify-center lg:mt-12 col-span-6 items-center">
                        <img
                            src="/assets/images/googleMap.svg"
                            className="lg:absolute lg:-top-[350px]"
                            alt='IMG'
                        />
                    </div>
                    <div className="flex flex-col lg:col-span-6 text-white lg:mt-28 lg:px-14 sm:col-span-12 lg:justify-start sm:justify-center">
                        <h1 className="lg:text-[42px] p-0 m-0 lg:leading-[4rem] mt-12 lg:mt-0 font-bold tracking-wide flex flex-row">
                            <img src="/assets/images/Werugo.svg" alt="Img" className='mr-4' />
                            Werugo
                        </h1>
                        <div className="font-normal text-lg leading-7 opacity-60 lg:pr-28">
                            A ground-breaking device tracker application for iOS and Android
                            devices, Werugo offers advanced features such as voice-activated
                            device location, real-time tracking, and remote control
                            capabilities, making it reliable for ensuring security. It's like
                            having a personal assistant for your devices, minus the coffee
                            runs.
                        </div>
                        <button
                            onClick={handleGoogleSignIn}
                            className="bg-[#BB6A37] text-white w-36 border font-medium text-lg py-2 px-4 mr-3 rounded-xl flex items-center mt-6"
                        >
                            <span className="ml-1">Learn more</span>
                        </button>
                        <img
                            src="/assets/images/Google.svg"
                            alt='IMG'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products

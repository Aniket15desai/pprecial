import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = (props) => {
    const { user, logOut, googleSignIn } = UserAuth();
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    const toggleClass = "transform translate-x-5";

    const setActive = ({ isActive }) => {
        return {
            color: isActive ? '#BB6A37' : 'black',
            borderBottom: isActive ? '2px solid #BB6A37' : 'none'
        }
    };
    useEffect(() => {
        if (user != null) {
            navigate('/dashboard');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    return (
        <>
            <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
                <nav aria-label="Global" className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-around py-5">
                        <a className="flex-none text-slate-900" href="/">
                            <img src='/assets/images/logo.svg' alt='LOGO' />
                        </a>
                        <div className="hidden lg:flex lg:items-center text-lg">
                            <NavLink to="/" className="ml-8" style={setActive}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className="ml-8" style={setActive}>
                                About
                            </NavLink>
                            <NavLink to="/products" className="ml-8" style={setActive}>
                                Products
                            </NavLink>
                            <NavLink to="/timeline" className="ml-8" style={setActive}>
                                Timeline
                            </NavLink>
                        </div>
                        <div className="hidden lg:ml-8 lg:flex lg:items-center justify-between lg:pl-8">
                            {user != null &&
                                <NavLink to="/dashboard" className="text-[#BB6A37] border border-[#BB6A37] font-bold py-2 px-4 mr-3 rounded-xl inline-flex items-center" onClick={props.handleGoogleSignIn}>
                                    <img src='/assets/images/dash.svg' className="mr-2" alt='dashboard' />
                                    <span>Dashboard</span>
                                </NavLink>
                            }
                            <div className="flex flex-col justify-center items-center">

                                {/*   Switch Container */}
                                <div
                                    className="bg-black md:w-14 md:h-7 w-12 h-7 flex items-center rounded-full p-1 cursor-pointer"
                                    onClick={() => {
                                        setToggle(!toggle);
                                    }}
                                >
                                    {/* Switch */}
                                    <img
                                        src="/assets/images/toggleSwitch.svg"
                                        className={'w-7 h-7' + (toggle ? true : toggleClass)}
                                        alt='IMG'
                                    />
                                </div>
                            </div>
                            {user?.displayName ? (
                                <button className='ml-4' onClick={handleSignOut}>Logout</button>
                            ) : (
                                <NavLink className="ml-4" to='/' onClick={handleGoogleSignIn}>Sign in</NavLink>
                            )}
                        </div>
                    </div>
                    <div className='lg:hidden block absolute right-0 mr-5 top-9'>
                        <button onClick={() => { isOpen ? setIsOpen(false) : setIsOpen(true) }} type="button" class="lg:hidden sm:block block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                            <svg class="h-6 w-6 fill-black" viewBox="0 0 24 24">
                                <path className={isOpen ? 'block' : 'hidden'} fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                <path className={!isOpen ? 'block' : 'hidden'} fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            <div className={`w-full md:w-auto shadow-2x z-[11111] mb-5 relative lg:hidden ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
                <ul class="flex flex-col right-0 top-16 justify-around border border-gray-100 text-right rounded-lg bg-[white]-500 shadow-lg shadow-[white]-500/50 md:flex-col md:space-x-8 md:mt-0 h-48 md:text-sm md:font-medium">
                    <NavLink to="/" className="px-8" style={setActive}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className="px-8" style={setActive}>
                        About
                    </NavLink>
                    <NavLink to="/products" className="px-8" style={setActive}>
                        Products
                    </NavLink>
                    <NavLink to="/timeline" className="px-8" style={setActive}>
                        Timeline
                    </NavLink>
                    {user?.displayName ? (
                        <NavLink className='px-8' to="/" onClick={handleSignOut}>Logout</NavLink>
                    ) : (
                        <NavLink className="px-8" to='/' onClick={handleGoogleSignIn}>Sign in</NavLink>
                    )}
                </ul>
            </div>
        </>
    )
}


export default Navbar
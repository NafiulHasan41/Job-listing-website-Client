import  { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import useAuth from  '../hooks/useAuth'
import toast, { Toaster } from 'react-hot-toast';


const NavBar = () => {

    const { user , loading , logOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    // Theme control 

    const [theme, setTheme] = useState('light')

    const handleToggle = e => {
        if (e.target.checked) {
          setTheme('dark')
        } else {
          setTheme('light')
        }
      }

      useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
    
        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])


    //   theme control end


    //control navigation 

    const navigate = useNavigate();

    if (loading) {
        return (
          <div className=" text-center items-center justify-center mx-auto mt-20 min-h-screen">
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </div>
        );
      }
    
      const handleLogOut = () => {
        logOut()
          .then(() => {
            toast.success("User Logged out Successfully");
    
            navigate("/login");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      };

    const customNavLink = (
        <>
         
            <NavLink to="/"  className={({ isActive }) =>
                  isActive ? " text-white hover:bg-cyan-700 font-bold   border-none" : "font-bold my-2 hover:bg-cyan-700  md:mx-2  text-black rounded-lg  border-none"
                }>Home</NavLink>
         
            <NavLink to="/aboutUs"  className={({ isActive }) =>
                  isActive ? " text-white hover:bg-cyan-700 font-bold border-none" : "font-bold my-2  hover:bg-cyan-700 md:mx-2 text-black rounded-lg  border-none"
                }>About Us</NavLink>
        
            <NavLink to="/allJobs"
            className={({ isActive }) =>
            isActive ? " text-white font-bold hover:bg-cyan-700  border-none " : "  hover:bg-cyan-700  font-bold my-2  md:mx-2 text-black  rounded-lg   border-none "
          }>All Jobs</NavLink>

            <NavLink to="/blogs"
            className={({ isActive }) =>
            isActive ? " text-white font-bold hover:bg-cyan-700  border-none " : "  hover:bg-cyan-700  font-bold my-2  md:mx-2 text-black  rounded-lg   border-none "
          }>Blogs</NavLink>
         
    
          {user ? (
           
              <NavLink to="/addAJob" className={({ isActive }) =>
                  isActive ? " text-white font-bold   border-none hover:bg-cyan-700" : " hover:bg-cyan-700  font-bold my-2  md:mx-2 text-black rounded-lg   border-none"
                }>Add A Job</NavLink>
        
          ) : null}

          {user ? (
            
              <NavLink to="/myJobs" className={({ isActive }) =>
                  isActive ? "text-white  font-bold   border-none hover:bg-cyan-700" : " hover:bg-cyan-700  font-bold my-2  md:mx-2 text-black rounded-lg  border-none"
                }>MyJobs</NavLink>
           
          ) : null}


          {user ? (
         
              <NavLink to="appliedJob" className={({ isActive }) =>
                  isActive ? "text-white  font-bold  border-none hover:bg-cyan-700 " : "  hover:bg-cyan-700  font-bold my-2  md:mx-2 text-black  rounded-lg   border-none"
                }>Applied Jobs</NavLink>
            
          ) : null}
        </>
      );

    return (
        <div>
    <div >
        <nav className="  relative bg-[#a0c5c4]  shadow-xl ">
            <div className="container px-3 py-3 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link to='/'>
                        <img className="w-full h-10 sm:h-10 rounded-lg" src="../../public/logo.jpeg" alt="logo" />
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button onClick={toggleMenu} type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu">
                                {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                                ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out
                        bg-[#a0c5c4] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100
                        lg:translate-x-0 flex flex-col-reverse lg:flex lg:flex-row lg:items-center ${isOpen
                        ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full' }`}>
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            {customNavLink}
                        </div>

                        <div className="flex flex-row  lg:items-center mt-4 lg:mt-0 gap-4 my-3">

                            <div className="  mx-1 md:mx-2">
                                <label className="swap swap-rotate">
                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" className="theme-controller " onChange={handleToggle} />

                                    {/* sun icon */}
                                    <svg className="swap-off fill-current w-10 h-10 md:w-10 md:h-10 text-white"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                    </svg>

                                    {/* moon icon */}
                                    <svg className="swap-on fill-current w-10 h-10 md:w-10 md:h-10 text-black"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                    </svg>
                                </label>
                            </div>
                            <div>

                                {user ? (
                                <button type="button" className="flex items-center focus:outline-none"
                                    aria-label="toggle profile dropdown">
                                    <div title={user?.displayName} className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                        <img   src={user?.photoURL}
                                                   alt={user?.displayName}
                                            className="object-cover w-full h-full"  />
                                    </div>

                                </button>
                                ) : null}
                            </div>

                            <div>
                                {user ? (
                                <button onClick={handleLogOut}
                                    className="btn  hover:bg-cyan-700  lg:text-xl  bg-white border-none text-black">
                                    Logout
                                </button>
                                ) : (
                                <Link to="/login" className="btn bg-white hover:bg-cyan-700  border-none text-black">
                                Login/
                                <br />
                                Register
                                </Link>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <Toaster/>
</div>
        
    );
};

export default NavBar;

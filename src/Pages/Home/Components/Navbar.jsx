import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import useAuth from '../../../Services/User_Services/useAuthStatus'; // Import the custom hook

const menuItems = [
  { text: 'Home', link: '/', type: 'main' },
  { text: 'Notifications', link: '/notification', type: 'main' },
  { text: 'Gallery', link: '/gallery', type: 'main' },
  { text: "FAQ's", link: '/faq', type: 'main' },
  { text: 'Login/Signup', link: '/login', type: 'main' },
  { text: 'Dashboard', link: '/dashboard', type: 'main' },
  { text: 'Profile', link: '/profile', type: 'user' },
  { text: 'Sign out', link: '/signout', type: 'user' },
];

const Navbar = () => {
  const { isLoggedIn, user } = useAuth(); // Use the custom hook
  const [dropdownVisible, setDropdownVisible] = useState(false);
  console.log(isLoggedIn);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="border-gray-200 dark:bg-gray-900" style={{ background: "#f7be1d" }}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://res.cloudinary.com/devncode/image/upload/v1576589166/production_devncode/community/1576589156098.png" className="h-20" alt="Flowbite Logo" />
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLoggedIn ? (
              <>
                <button 
                  type="button" 
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
                  id="user-menu-button" 
                  aria-expanded={dropdownVisible} 
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <img className='h-12 w-12' src={user?.avatarUrl} alt="User Avatar" />
                </button>
                {dropdownVisible && (
                  <div ref={dropdownRef} className="z-50 absolute mt-2 right-0 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                      <div className="px-4 py-3">
                        <span className="block text-sm text-gray-900 dark:text-white">{user?.name}</span>
                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                      </div>
                      <ul className="py-2" aria-labelledby="user-menu-button">
                        {menuItems.filter(item => item.type === 'user').map(item => (
                          <li key={item.text}>
                            <Link to={item.link} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login" className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">
                <AccountCircleSharpIcon fontSize='large' />
              </Link>
            )}
            <button 
              data-collapse-toggle="navbar-user" 
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
              aria-controls="navbar-user" 
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul style={{ background: "#f7be1d" }} className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menuItems.filter(item => item.type === 'main').map(item => (
                <li key={item.text}>
                  <Link to={item.link} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

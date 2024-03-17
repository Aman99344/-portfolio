// import React, {useState} from 'react'
// import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

// const Navbar = () => {
//     const [nav, setNav] = useState(false)

//     const handleNav = () => {
//         setNav(!nav)
//     }

//     return (
//         <div className='text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-28 px-2 text-l'>

//             <h1 className='text-3xl font-bold primary-color ml-4'>Aman Gupta</h1>
//             <ul className='hidden md:flex list-none text-lg'>
//                 <li className='p-5'><a className='text-gray-500' href='#home'>Home</a></li>
//                 <li className='p-5'><a className='text-gray-500' href='#about'>About</a></li>
//                 <li className='p-5'><a className='text-gray-500' href='#work'>Work</a></li>
//                 <li className='p-5'><a className='text-gray-500' href='#experience'>Experience</a></li>
//                 <li className='p-5'><a className='text-gray-500' href='#contact'>Contact</a></li>
//             </ul>

//             <div onClick={handleNav} className='block md:hidden'>
//                 {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
//             </div>  

//             <div className={nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' 
//                                     : 'fixed left-[-100%]'}>
//                 <h1 className='text-3xl primary-color m-4'>Aman</h1>
//                 <ul className='p-8 text-2xl list-none no-underline'>
//                     <li className='p-2'><a className='text-gray-500' href='#home'>Home</a></li>
//                     <li className='p-2'><a className='text-gray-500' href='#about'>About</a></li>
//                     <li className='p-2'><a className='text-gray-500' href='#work'>Work</a></li>
//                     <li className='p-2'><a className='text-gray-500' href='#experience'>Experience</a></li>
//                     <li className='p-2'><a className='text-gray-500' href='#contact'>Contact</a></li>
//                 </ul> 
//             </div>

//         </div>
//     )
// }

// export default Navbar


// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const Navbar = () => {
//     const [nav, setNav] = useState(false);

//     const handleNav = () => {
//         setNav(!nav);
//     };

//     const closeNav = () => {
//         setNav(false);
//     };

//     return (
//         <div className='text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-28 px-2 text-l'>

//             <h1 className='text-3xl font-bold primary-color ml-4'>Aman Gupta</h1>
//             <ul className='hidden md:flex list-none text-lg'>
//                 <li className='p-5'><a className='text-gray-500' href='#home' onClick={closeNav}>Home</a></li>
//                 <li className='p-5'><a className='text-gray-500' href='#about' onClick={closeNav}>About</a></li>
//                 <li className='p-5'><a className='text-gray-500' href='#work' onClick={closeNav}>Work</a></li>
//                 <li className='p-5'><a className='text-gray-500' href='#experience' onClick={closeNav}>Experience</a></li>
//                 <li className='p-5'><a className='text-gray-500' href='#contact' onClick={closeNav}>Contact</a></li>
//             </ul>

//             <div onClick={handleNav} className='block md:hidden'>
//                 {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
//             </div>  

//             <div className={nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' 
//                                 : 'fixed left-[-100%]'}>
//                 <h1 className='text-3xl primary-color m-4'>Aman</h1>
//                 <ul className='p-8 text-2xl list-none no-underline'>
//                     <li className='p-2'><a className='text-gray-500' href='#home' onClick={closeNav}>Home</a></li>
//                     <li className='p-2'><a className='text-gray-500' href='#about' onClick={closeNav}>About</a></li>
//                     <li className='p-2'><a className='text-gray-500' href='#work' onClick={closeNav}>Work</a></li>
//                     <li className='p-2'><a className='text-gray-500' href='#experience' onClick={closeNav}>Experience</a></li>
//                     <li className='p-2'><a className='text-gray-500' href='#contact' onClick={closeNav}>Contact</a></li>
//                 </ul> 
//             </div>

//         </div>
//     );
// };

// export default Navbar;



import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className='text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-auto px-2 py-3 text-l'>

            <div className='flex items-center'>
                <h1 className='text-3xl font-bold primary-color ml-4'>Aman Gupta</h1>
            </div>

            <div className='flex items-center'>
                <ul className={nav ? 'md:flex flex-col md:flex-row list-none text-lg absolute md:relative top-[80px] md:top-0 right-0 md:right-auto bg-[#202121] w-full md:w-auto md:bg-transparent md:flex-row md:static md:ml-auto md:mr-4' : 'hidden md:flex list-none text-lg md:relative md:flex-row md:static'}>
                    <li className='p-5'><a className='text-gray-500' href='#home' onClick={closeNav}>Home</a></li>
                    <li className='p-5'><a className='text-gray-500' href='#about' onClick={closeNav}>About</a></li>
                    <li className='p-5'><a className='text-gray-500' href='#project' onClick={closeNav}>Projects</a></li>
                    <li className='p-5'><a className='text-gray-500' href='#experience' onClick={closeNav}>Experience</a></li>
                    <li className='p-5'><a className='text-gray-500' href='#contact' onClick={closeNav}>Contact</a></li>
                </ul>
                <div className='ml-4 md:hidden p-3' onClick={handleNav}>
                    {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
                </div>
            </div>

        </div>
    );
};

export default Navbar;

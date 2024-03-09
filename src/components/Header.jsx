
import { useState } from 'react';   // cargo el use state 
import Logo from '../assets/images/disney_logo.png'     // se carga el logo
import HeaderItem from './HeaderItem';  // componente HEADER

export const Header = () => {

  // use state
    const [toggle, setToggle] = useState(false);

  // iconos guardados en variable
  const menu = [
    {
        name: 'HOME',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m12.707 2.293l9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-1v-7a3 3 0 0 0-2.824-2.995L13 12h-2a3 3 0 0 0-3 3v7H7a3 3 0 0 1-3-3v-6H3c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0M13 14a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883-.993L11 14z"/></svg>
    },
    {
        name: 'SEARCH',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
    },
    {
        name: 'WATCH LIST',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 72 72"><path fill="#d0cfce" d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"/><path fill="none" stroke="#000" d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"/></svg>
    },
    {
        name: 'ORIGINALS',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
    },
    {
        name: 'MOVIES',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.001 20H20v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.985 9.985 0 0 1-3.999 8M12 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-4 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-4 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/></svg>
    },
    {
        name: 'SERIES',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m11 13l3-8h-2.5L15 12.5L13.5 8H5v2h3v6h2v-6h1.77L14 16z"/></svg>
    },
  ]
  

 return (
     <div className='flex items-center justify-between p-1'>
      <div className='flex gap-10 items-center'>
        {/* Este es un comentario en React */}
        {/* Este es Logo */}
        <img src={Logo} className='w-[120px] md:w-[135px] object-cover'/>
        
        <div className='hidden md:flex gap-8 mt-3'>
            {/* Estos son los iconos del header
                Los iconos son usando ICONIFY */}
            {menu.map((item, index) => {
                return <HeaderItem key={index} icon={item.icon} name={item.name} />;
            })}
        </div>
        <div className='flex md:hidden gap-7 mt-3'>
            {/* Estos son los iconos del header
                Los iconos son usando ICONIFY */}
            {menu.map((item, index) => index < 3 && (
                <HeaderItem key={index} icon={item.icon} name={''} />
            ))}
        </div>
        <div className='md:hidden'>
            {/* Icono de tres puntos */}
            <div onClick={() => setToggle(!toggle)}  className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><g fill="currentColor"><circle cx="10" cy="15" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="5" r="2"/></g></svg>
            </div> 

            {toggle?
            <div className='absolute mt-3 bg-[#121212] border-[1px] px-5 py-4 border-gray-700 rounded-md'>
                {menu.map((item, index) => index > 2 && (
                    <HeaderItem key={index} icon={item.icon} name={item.name} />
                ))}
            </div>:null}  
        </div>
        
      </div>
      
      <img src='https://plugins.svn.wordpress.org/user-avatar-reloaded/assets/icon-256x256.png' className='w-[40px] rounded-full ml-56'/>
    </div>
 );
};

export default Header
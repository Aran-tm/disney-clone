// componente HEADER
import Logo from '../assets/images/disney_logo.png'
import HeaderItem from './HeaderItem';

export const Header = () => {

  // iconos guardados en variable
  const menu = [
    {
        name: 'Home',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12.707 2.293l9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-1v-7a3 3 0 0 0-2.824-2.995L13 12h-2a3 3 0 0 0-3 3v7H7a3 3 0 0 1-3-3v-6H3c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0M13 14a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883-.993L11 14z"/></svg>
    },
    {
        name: 'Search',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
    },
    {
        name: 'Watch List',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 72 72"><path fill="#d0cfce" d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"/><path fill="none" stroke="#000" d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"/></svg>
    },
    {
        name: 'Original',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
    },
    {
        name: 'Movies',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path d="M24 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-9-9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm18 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"/><path d="M24 44h20"/></g></svg>
    },
    {
        name: 'Series',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m11 13l3-8h-2.5L15 12.5L13.5 8H5v2h3v6h2v-6h1.77L14 16z"/></svg>
    },
  ]

 return (
    <div className='flex items-center gap-8'>
      {/* Este es un comentario en React */}
      {/* Este es Logo */}
      <img src={Logo} className='w-[80px] md:w-[115px] object-cover'/>
      
      {/* Estos son los iconos del header */}
      {menu.map((item, index) => {
        return <HeaderItem key={index} icon={item.icon} name={item.name} />;
      })}
      
    </div>
 );
};

export default Header
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 bg-slate-800 logo h-14'>
      <div className='mx-20 font-bold text-white'>Passop</div>
      <ul>
        <li className='flex gap-4 mx-20'>
          <a  className='text-white hover:font-bold' href='#'>Home</a>
          <a className='text-white hover:font-bold'  href='#'>About</a>
          <a className='text-white hover:font-bold' href='#'>Contact</a>
          <a className='text-white hover:font-bold' href='#'>Home</a>
        </li>
      </ul>

    </nav>
  )
}
export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({insideHome}) => {
  return (
    <nav  className='bg-violet-600 text-white p-5 fixed w-full flex'>
        <Link className='text-2xl font-bold' to={'/'}><i className='fa-solid fa-truck-fast me-1'></i>E Cart</Link>

        <ul className='flex-1 text-right'>

            {
              insideHome &&
              <li className='list-none inline-block px-5'><input style={{width:'300px'}} className='rounded p-2' type="text" placeholder='search products here..' ></input></li>

            }
            <li className='px-5 list-none inline-block'><Link to={'/Wishlist'}><i className='fa-solid fa-heart text-red-600'></i>Wishlist <span className='bg-black text-white rounded px-1'>0</span></Link></li>

            
            <li className='px-5 list-none inline-block'><Link to={'/cart'}><i className='fa-solid fa-cart-plus text-green-600'></i>Cart <span className='bg-black text-white rounded px-1'>0</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header


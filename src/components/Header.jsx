import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex items-center justify-around p-3'>
            <div className="logo">
                <h1 className="text-xl font-bold text-orange-600">
                <Link to="/">Tusmo Colllege</Link>
                
                </h1>
            </div>

            <div className="menus flex items-center gap-3">
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/contact">Contact us</Link>  
                <Link to="/courses">Courses</Link>

                <Link to="/Register">  

                <button className="px-4 py-3 rounded-md bg-orange-500 text-white">
                    Register Now
                </button>
                </Link> 
            </div>
        </div>
    )
}

export default Header
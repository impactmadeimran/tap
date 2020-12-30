import React from 'react'
import {NavLink} from 'react-router-dom'
import {CgLogIn} from 'react-icons/cg'
import {BsCloudDownload} from 'react-icons/bs'
import Vector from './images/Vector.jpg'
const TapNav = () => {
    return (
        <div>
            <div className = 'menu'>
            </div>
            <nav>
                    <img  className = 'nav-icon' src = {Vector} alt= 'icon' />
                <ul className = 'nav-links'>
                    <li><NavLink to = '/whyus'>WHY US?  </NavLink></li>
                    <li><NavLink to = '/tapabout'>ABOUT  </NavLink></li>
                    <li><NavLink to = '/taplogin'>LOGIN <CgLogIn /> </NavLink></li>
                    <li><NavLink to = '/tapsignup'>SIGN UP</NavLink></li>
                    <li><NavLink to = '/' >DOWNLOAD <BsCloudDownload /> </NavLink></li>

                </ul>
            </nav> 
        </div>
    )
}

export default TapNav
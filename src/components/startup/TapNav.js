import React from 'react'
import {Link} from 'react-router-dom'
import {CgLogIn} from 'react-icons/cg'
import {BsCloudDownload} from 'react-icons/bs'
import Vector from './images/Vector.jpg'
const TapNav = () => {
    return (
        <div>
            <div className = 'menu'>
            </div>
            <nav>
                    <img className = 'nav-icon' src = {Vector} alt= 'icon' />
                <ul className = 'nav-links'>
                    <li><Link to = '/whyus'>WHY US?  </Link></li>
                    <li><Link to = '/tapabout'>ABOUT  </Link></li>
                    <li><Link to = '/taplogin'>LOGIN <CgLogIn /> </Link></li>
                    <li><Link to = '/tapsignup'>SIGN UP</Link></li>
                    <li><Link >DOWNLOAD <BsCloudDownload /> </Link></li>

                </ul>
            </nav> 
        </div>
    )
}

export default TapNav
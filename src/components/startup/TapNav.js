import React from 'react'
import {Link} from 'react-router-dom'
import {CgLogIn} from 'react-icons/cg'
import {BsCloudDownload} from 'react-icons/bs'
const TapNav = () => {
    return (
        <div>
            <div className = 'menu'>
            </div>
            <nav>
                <ul className = 'nav-links'>
                    <li><Link to = '/taplogin'>WHY US?  </Link></li>
                    <li><Link to = '/taplogin'>ABOUT  </Link></li>
                    <li><Link to = '/taplogin'>LOGIN <CgLogIn /> </Link></li>
                    <li><Link to = '/tapsignup'>SIGN UP</Link></li>
                    <li><Link to = '/chat'>DOWNLOAD <BsCloudDownload /> </Link></li>

                </ul>
            </nav> 
        </div>
    )
}

export default TapNav
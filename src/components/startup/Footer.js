import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <div >
            <footer className = 'footer'>
                <ul className = 'footer-links'>
                <h3>Legal</h3>
                    <li><Link>Privacy Center</Link></li>
                    <li><Link>Cookie Policy</Link></li>
                    <li><Link>Report Infringement </Link></li>
                </ul>
                <ul className = 'footer-links'>
                    <h3>Community</h3>
                    <li><Link>Support</Link></li>
                    <li><Link>Community Guidelines </Link></li>
                    <li><Link>Safety Center </Link></li>
                </ul>
                <ul className = 'footer-links'>
                    <h3>Company</h3>
                    <li><Link>Tap.inc </Link></li>
                    <li><Link>Careers </Link></li>
                    <li><Link>News </Link></li>
                </ul>
                <ul className = 'footer-links'>
                    <h3>Advertising</h3>
                    <li><Link>Buy Ads </Link></li>
                    <li><Link>Advertising Policies </Link></li>
                    <li><Link>Political Adverts </Link></li>
                    
                </ul>

            </footer>
        </div>
    )
}

export default Footer

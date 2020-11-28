import React from 'react'
import github from './images/github.jpg'
import dropbox from './images/dropbox.jpg'
import  drive from './images/drive.jpg'
import zoom from './images/zoom.jpg'
const Workwith = () => {
    return (
        <div>
            <div className = 'details-2'>
                <div className = 'social-icons'>
                    <div>
                        <img className = 'zoom-image' src = {zoom} alt = 'zoomx' />
                    </div>
                    <div>
                        <img className = 'drive-image' src = {drive} alt = 'drivex' />
                    </div>
                    <div>
                        <img src = {dropbox} alt = 'dropboxx' />
                    </div>
                    <div>
                        <img src = {github} alt = 'githubx' />
                    </div>
                </div>
                <div className = 'right-card-1'>
                <h2>Call  , Text and Collaborate</h2>
                    <p>With our easy to use chat app , communication has never been easier. Enjoy talking with anyone around the world anonymously.</p>
                    <p>With our easy to use chat app , communication has never been easier. Enjoy talking with anyone around the world anonymously.</p>
                    <p>With our easy to use chat app , communication has never been easier. Enjoy talking with anyone around the world anonymously.</p>
                </div>
            </div>
        </div>
    )
}

export default Workwith

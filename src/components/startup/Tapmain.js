import React from 'react'
import Getstarted from './Getstarted'
import TapNav from './TapNav'

const Tapmain = () => {
    return (
        <div className = 'tap-main'>
                <TapNav />
                <Getstarted />
           <div className = 'details'>
                <div className = 'card-1'>
                     <h2>Work with  favourite tools</h2>
                     <p>With our easy to use chat app , communication has never been easier.</p>
                </div>
                <div className = 'card-2'>
                    <h2>Share Photos and Videos</h2>
                    <p>With our easy to use chat app , communication has never been easier.</p>
                </div>
                <div className = 'card-3'>
                    <h2>Work with  favourite tools</h2>
                    <p>With our easy to use chat app , communication has never been easier.</p>
                </div>
                <div className = 'right-card'>
                    <h2>Call  , Text and Collaborate</h2>
                    <p>With our easy to use chat app , communication has never been easier. Enjoy talking with anyone around the world anonymously.</p>
                    <p>With our easy to use chat app , communication has never been easier. Enjoy talking with anyone around the world anonymously.</p>
                    <p>With our easy to use chat app , communication has never been easier. Enjoy talking with anyone around the world anonymously.</p>
                </div>
           </div>
        </div>
    )
}

export default Tapmain

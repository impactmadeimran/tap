import React  from 'react'
import { Link } from 'react-router-dom'
import desktop from './desktop.jpg'


const Getstarted = () => {
    return (
        <div>
              <div className = 'details-1'>
            <div>
               <img className = 'image-1' src = {desktop} alt = 'Just a pic'>

               </img>
            </div>
            <div className = 'side-text'>
                <p>-Your Next Social Network</p>
                <h3>Enjoy Seamless Communication With Anyone Around The  
                    World
                </h3>
            </div>  
            
            <Link to = '/tapsignup'  className = 'get-started' > Get Started</Link>
        
        </div>
        
    </div>
      
    )
}

export default Getstarted

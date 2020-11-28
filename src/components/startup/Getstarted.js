import React  from 'react'
import { Link } from 'react-router-dom'
import elipse5 from './images/Ellipse 5.jpg'

const Getstarted = () => {
    return (
        <div>
              <div className = 'details-1'>

              <div className = 'side-text'>
                <p>-Your Next Social Network</p>
                <h3>Enjoy Seamless Communication With Anyone Around The  
                    World
                </h3>
                
                <Link to = '/tapsignup'  className = 'get-started' > Download Our App</Link>
            </div>  

            <div>
               <img className = 'image-1' src = {elipse5} alt = 'Just a pic' />
            </div>
            
            
           
        
        </div>
        
    </div>
      
    )
}

export default Getstarted

import React , {useState , useEffect } from 'react'
import {Link } from 'react-router-dom'
import Footer from './Footer';
import TapNav from './TapNav';

const TapLogin = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const inputRef = React.createRef();

    useEffect(() => {
        inputRef.current.focus();
    })
   

    return (
    <div>    
        <TapNav />
        <div className = 'tapform'>
            <h1>LOGIN</h1>
            <h4>Welcome {Username} !</h4>
            
            <form  align = 'center' >
                <input className = 'input' type = 'text' placeholder = 'Mobile Number or Email' 
                onChange = {(e) => setUsername(e.target.value)} value = {Username} required ref = {inputRef} />
                <br></br>
                <input className = 'input' type = 'Password' placeholder = 'Password' 
                onChange = {(e) => setPassword(e.target.value)} value = {Password} required />
                <br></br>
                <input className = 'submit' type = 'submit' value = 'Log In' />
                <br></br>
                <ul>
                <li><Link >Forgot Password?</Link></li>
                <li>Don't have an account?<Link to = '/tapsignup'> Sign Up</Link></li>
                    
                </ul>
                
            </form>
        </div>
        <Footer />
    </div>   
    )
}

export default TapLogin

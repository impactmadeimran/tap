import React , {useState , useEffect} from 'react'
import Footer from './Footer';
import TapNav from './TapNav';

const TapSignup = () => {
    const [Email, setEmail] = useState('');
    const [FullName, setFullName] = useState('');
    const [Password, setPassword] = useState('');
    const inputRef = React.createRef();

    useEffect(() => {
        inputRef.current.focus();
    })
    return (
    <div>
        <TapNav />
         <div className='tapform'>
            <h1>GET STARTED</h1>
            <form align='center'>
                <input className='input' type='text' placeholder='Mobile Number or Email'
                    onChange={(e) => setEmail(e.target.value)} value={Email} required  ref = {inputRef}/>
                <br></br>
                <input className='input' type='text' placeholder='Full Name'
                    onChange={(e) => setFullName(e.target.value)} value={FullName} required />
                <br></br>
                <input className='input' type='password' placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)} value={Password} required />
                <br></br>
                <input className='submit' type='submit' value='Create Account' />
            </form>
        </div>
        <Footer />
    </div>
       
    )
}

export default TapSignup
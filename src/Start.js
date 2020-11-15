import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Alltext from './components/startup/Alltext';
import TapLogin from './components/startup/TapLogin';
import Tapmain from './components/startup/Tapmain';
import TapSignup from './components/startup/TapSignup';
import Workwith from './components/startup/Workwith'
const start = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="App">
                    <Route exact path = '/' component = {Tapmain} />
                    <Route  path ='/taplogin' component={TapLogin} />
                    <Route path='/tapsignup' component={TapSignup} />
                    <Route path='/tapabout' component={Alltext} />
                    <Route path='/whyus' component={Workwith} />
                </div>
            </BrowserRouter>

        </div>
    )
}

export default start

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Chat from './components/App-page/Chat';
import TapLogin from './components/startup/TapLogin';
import Tapmain from './components/startup/Tapmain';
import TapSignup from './components/startup/TapSignup';
const start = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="App">
                    <Route exact path = '/' component = {Tapmain} />
                    <Route path = '/chat' component = {Chat} />
                    <Route  path ='/taplogin' component={TapLogin} />
                    <Route path='/tapsignup' component={TapSignup} />
                </div>
            </BrowserRouter>

        </div>
    )
}

export default start

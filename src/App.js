import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Alltext from './components/startup/Alltext';
import Footer from './components/startup/Footer';
import TapLogin from './components/startup/TapLogin';
import Tapmain from './components/startup/Tapmain';
import TapNav from './components/startup/TapNav';
import TapSignup from './components/startup/TapSignup';
import Workwith from './components/startup/Workwith'
const App = () => {
  return (
        <div className="App">
          <BrowserRouter>
                <div className="App">
                  <TapNav />
                    <Route exact path = '/' component = {Tapmain} />
                    <Route  path ='/taplogin' component={TapLogin} />
                    <Route path='/tapsignup' component={TapSignup} />
                    <Route path='/tapabout' component={Alltext} />
                    <Route path='/whyus' component={Workwith} />
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    
  );
}

export default App;

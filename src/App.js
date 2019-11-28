import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from './Components/API/API';
// import Index1 from './Components/Index/Index1';
// import Signup from './Components/Signup/Signup';
// import Signin from './Components/Signin/Signin';
// import Index from './Components/Index/Index';
// import Contact from './Components/Contact/Contact';
// import Lifecycle from './Components/Lifecycle/Lifecycle';
// import SetstateC from './Components/SetstateC/SetstateC';
// import State from './Components/State/State';
// import Eventbindarrow from './Components/Eventbindarrow/Eventbindarrow';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <switch>
        <Route exact path='/' component={API}></Route>
        {/* <Route exact path='/signup' component={Signup}></Route> */}
        {/* <Route exact path='/index' component={Index}></Route> */}
        {/* <Route exact path='/contact' component={Contact}></Route> */}
      </switch>
    </Router> 
  );
}

export default App;


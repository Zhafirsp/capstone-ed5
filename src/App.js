import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/TentangKami.tsx';
import Membaca from './components/pages/Membaca';
import SignUp from './components/pages/SignUp.tsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tentangkami' component={Services} />
          <Route path='/membaca' component={Membaca} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        
      </Router>
    </>
  );
}

export default App;

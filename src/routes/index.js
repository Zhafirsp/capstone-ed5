import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TentangKami from '../pages/aboutUs/TentangKami.tsx';
import Membaca from '../pages/membaca/Membaca';
import Login from '../pages/login/SignUp.tsx';
import Fabel from '../components/buku/fabel'
import Legenda from '../components/buku/legenda';
import Jenaka from '../components/buku/jenaka';
import Footer from '../components/footer/Footer.tsx'

const AppRoutes =() => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tentangkami' component={TentangKami} />
          <Route path='/membaca' component={Membaca} />
          <Route path='/login' component={Login} />
          <Route path='/fabel' component={Fabel} />
          <Route path='/legenda' component={Legenda} />
          <Route path='/jenaka' component={Jenaka} />
          </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default AppRoutes;
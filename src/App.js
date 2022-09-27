import './App.css';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

import React from 'react'

const App = () => {
  const URL = "https://express-react-lab-backy.herokuapp.com/";

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects URL={URL} />
        </Route>
        <Route path='/about'>
          <About URL={URL} />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App


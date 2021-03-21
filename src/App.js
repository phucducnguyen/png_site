import React, { Component } from 'react';

import Layout from './components/Layout';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export default function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/contact" exact component={() => <Contact />} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

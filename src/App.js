import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Details from './Details';
import Mountain from './Mountain';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={NavigationBar} />
        <Route exact path='/' component={Mountain} />
        <Route exact path='/:details' component={Details} />
      </div>
    </Router>
  );
}

export default App; 
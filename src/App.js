import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
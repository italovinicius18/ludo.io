import React from 'react';

import Home from './components/Home/Home';
import Game from './components/Game/Game';


import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/Game" component={Game}/>
    </Router>
);

export default App;


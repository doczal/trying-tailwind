import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Posts from './Posts';
import { navigation } from 'constants.js';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Posts} />
        {navigation.map((item) => (
          <Route key={item.id} path={item.path} component={item.component} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;

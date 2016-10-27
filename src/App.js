import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import HelloBruce from './container/HelloBruce';
import About from './container/About';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={HelloBruce} />
        <Route path="about" component={About} />
      </Router>
    )
  }
}

export default App;

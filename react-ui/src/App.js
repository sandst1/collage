import React, { Component } from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';

import ImageDetails from './components/ImageDetails';
import ImageGrid from './components/ImageGrid';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Route exact path='/'>
          <Redirect to='/images' />
        </Route>
        <Route exact path='/images' component={ImageGrid} />
        <Route exact path='/images/:id' component={ImageDetails} />
      </div>
    );
  }
}

export default App;

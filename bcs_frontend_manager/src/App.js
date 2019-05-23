import React, { Component } from 'react';
import './App.css';
import FormManager from './component/FormManager';
import FormManagerExtra from './component/FormManagerExtra';


class App extends Component {
  render() {
    return (
        <div className="App">
          <FormManager />
          <FormManagerExtra />
        </div>
    );
  }
}

export default App;

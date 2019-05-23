import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FinancierFrom from './component/financierfrom'
class App extends Component{

  render() {
    return (
        <div className="App">
          <FinancierFrom/>
        </div>
  );
  }
}

export default App;

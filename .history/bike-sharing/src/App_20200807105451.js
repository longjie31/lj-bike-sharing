import React from 'react';
import logo from './logo.svg';
import './App.less';

function App() {
  return (
    <div className="App">
        {this.props.children}
    </div>
  );
}

export default App;

import React from 'react';
import './App.less';

function App() {
  return (
    <div className="App">
        {this.props.children}
    </div>
  );
}

export default App;

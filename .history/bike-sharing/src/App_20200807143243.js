import React from 'react';
import './App.less';

export default class App extends React.Component() {
  return (
    <div>
        {this.props.children}
    </div>
  );
}

export default App;

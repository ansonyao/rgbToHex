import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPage from './screens/mainPage';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MainPage />
      </MuiThemeProvider>
    );
  }
}

export default App;

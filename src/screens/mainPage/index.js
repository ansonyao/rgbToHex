import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import logo from '../../logo.svg';
import './style.css';

export default class MainPage extends React.Component {
    render() {
        return(
            <div className = "App" >
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>

                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
        </p>
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Floating Label Text"
                />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Floating Label Text"
                />
        </div>
        )
    }
};
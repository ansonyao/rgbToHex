import React from 'react';
import TextField from 'material-ui/TextField';
import logo from '../../logo.svg';
import './style.css';

export default class MainPage extends React.Component {
    render() {
        return(
            <div className = "App" style={{marginBottom: 400}}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">RGB &lt;====&gt; HEX</h1>
                </header>
                <div>
            </div>

                {/* <div id="Field-Container"> */}
                    <TextField
                        className="MyTextField"
                        hintText="HEX"
                        floatingLabelText="HEX"
                        style={{width: 400, height: 150, fontSize: 55}}
                        floatingLabelFocusStyle={{marginBottom: 40, fontSize: 45}}
                        hintStyle={{fontSize: 55, marginBottom: 30}}
                    />
                    <span/>
                    <TextField
                        className="MyTextField"
                        hintText="RGB"
                        floatingLabelText="RGB"
                        style={{width: 400, height: 150, fontSize: 55}}
                        floatingLabelFocusStyle={{marginBottom: 40, fontSize: 45}}
                        hintStyle={{fontSize: 55, marginBottom: 30}}
                    />
                {/* </div> */}
            </div>
        )
    }
};
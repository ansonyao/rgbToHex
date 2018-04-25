import React from 'react';
import TextField from 'material-ui/TextField';
import logo from '../../logo.svg';

export default class MainPage extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <div style={{ width: '100%', height: 100, backgroundColor: '#FF5722' }}>
                    <div style={{ paddingTop: 20 }}>
                        <text style={{ color: 'white', fontSize: 60, fontWeight: 'bold' }}>RGB &lt;====&gt; HEX</text>
                    </div>
                </div>
                <div>
                </div>

                <div style={{ marginTop: 200 }}>
                    <TextField
                        className="MyTextField"
                        hintText="Value like #000000, 0x000000, or 000000, "
                        floatingLabelText="HEX"
                        style={{ width: 400, height: 150, fontSize: 55, margin: 30 }}
                        floatingLabelFocusStyle={{ marginBottom: 40, fontSize: 45 }}
                        hintStyle={{ fontSize: 15, marginBottom: 30 }}
                        floatingLabelFixed={true}
                    />
                    <TextField
                        className="MyTextField"
                        hintText="Value like rgb(0, 0, 0) or simply 0, 0, 0 or 0 0 0"
                        floatingLabelText="RGB"
                        style={{ width: 400, height: 150, fontSize: 55, margin: 30 }}
                        floatingLabelFocusStyle={{ marginBottom: 40, fontSize: 45 }}
                        hintStyle={{ fontSize: 15, marginBottom: 30 }}
                        floatingLabelFixed={true}
                    />
                </div>
            </div>
        )
    }
};
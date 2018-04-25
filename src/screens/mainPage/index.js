import React from 'react';
import TextField from 'material-ui/TextField';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rgbValue: "",
            hexValue: "",
            rgbError: "",
            hexError: "",
        }
    }
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
                        hintText="Value like rgb(0, 0, 0) or simply 0, 0, 0 or 0 0 0"
                        floatingLabelText="RGB"
                        errorText={this.state.rgbError}
                        errorStyle={{textAlign: 'left'}}
                        style={{ width: 400, height: 150, fontSize: 55, margin: 30 }}
                        floatingLabelFocusStyle={{ marginBottom: 40, fontSize: 45 }}
                        hintStyle={{ fontSize: 15, marginBottom: 30 }}
                        floatingLabelFixed={true}
                        onChange={(event, value) => {
                            this.setState({rgbValue: value})
                        }}
                        value={this.state.rgbValue}
                    />
                    <TextField
                        className="MyTextField"
                        hintText="Value like #000000, 0x000000, or 000000, "
                        floatingLabelText="HEX"
                        errorText={this.state.hexError}
                        errorStyle={{textAlign: 'left'}}
                        style={{ width: 400, height: 150, fontSize: 55, margin: 30 }}
                        floatingLabelFocusStyle={{ marginBottom: 40, fontSize: 45 }}
                        hintStyle={{ fontSize: 15, marginBottom: 30 }}
                        floatingLabelFixed={true}
                        onChange={(event, value) => {
                            this.setState({hexValue: value})
                        }}
                        value={this.state.hexValue}
                    />
                </div>
            </div>
        )
    }

    convertRgbToHex = (rgb) => {
        if (rgb) {
            return
        }

        // If it can be converted {}
        // then setState for hexValue
        // else 
        // setState for hexError
    }

    convertHexToRgb = (hex) => {
        if (hex) {
            return
        }

        // If it can be converted {}
        // then setState for rgbValue
        // else 
        // setState for hexError
    }
};
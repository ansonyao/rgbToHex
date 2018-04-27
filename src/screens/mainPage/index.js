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
                            this.convertRgbToHex(value)
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
                            this.convertHexToRgb(value)
                        }}
                        value={this.state.hexValue}
                    />
                </div>
            </div>
        )
    }

    convertRgbToHex = (rgb) => {
        if (!rgb) {
            return
        }
        console.log("rgb " + rgb)
        let regex = /^(\d{1,3})[ ,]*(\d{1,3})[ ,]*(\d{1,3})$/
        const regexResult =regex.exec(rgb)
        console.log("regexResult " + regexResult)
        if(regexResult && regexResult.length > 0) {
            const hexDict = {
                r: this.decimalValueToHexString(parseInt(regexResult[1], 10)),
                g: this.decimalValueToHexString(parseInt(regexResult[2], 10)),
                b: this.decimalValueToHexString(parseInt(regexResult[3], 10))
            }
            const result = `#${hexDict.r}${hexDict.g}${hexDict.b}`
            this.setState({hexValue: result})
        }


        // If it can be converted {}
        // then setState for hexValue
        // else 
        // setState for hexError
    }

    convertHexToRgb = (hex) => {
        if (!hex) {
            return
        }
        console.log("value of hex" + hex)
        const regex = /^[A-Fa-f0-9]{6}$/ //TODO: need to handle the case when hex only has 3 characters. 
        const regexResult = regex.exec(hex)
        console.log("value of regexResult" + regexResult)
        if (regexResult && regexResult.length > 0) {
            const matchedString = regexResult[0]
            console.log("value of matchedString " + matchedString)
            const rgbDict = this.hexStringToRgbString(matchedString)
            if (rgbDict) {
                this.setState({rgbValue : `${rgbDict.r}, ${rgbDict.g}, ${rgbDict.b}`})
            }
        }
        
        // If it can be converted {}
        // then setState for rgbValue
        // else 
        // setState for hexError
    }


    hexStringToRgbString = (hexString) => {
        let regex = /^([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/
        var result = regex.exec(hexString)
        console.log("result is " + result)
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    decimalValueToHexString = (value) => {
        let result = value.toString(16)
        if (result.length === 1) {
            result = "0" + result
        }
        if (result.length > 2 || result.length < 1) {
            console.log("Error in decimalValueToHexString")
        }
        return result
    }
};
const convertRgbToHex = (rgb) => {
    if (!rgb) {
        return
    }
    console.log("rgb " + rgb)
    let regex = /^(\d{1,3})[ ,]*(\d{1,3})[ ,]*(\d{1,3})$/
    const regexResult =regex.exec(rgb)
    console.log("regexResult " + regexResult)
    if(regexResult && regexResult.length > 0) {
        const hexDict = {
            r: decimalValueToHexString(parseInt(regexResult[1], 10)),
            g: decimalValueToHexString(parseInt(regexResult[2], 10)),
            b: decimalValueToHexString(parseInt(regexResult[3], 10))
        }
        return `#${hexDict.r}${hexDict.g}${hexDict.b}`
    }
}

const convertHexToRgb = (hex) => {
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
        const rgbDict = hexStringToRgbString(matchedString)
        if (rgbDict) {
            return `${rgbDict.r}, ${rgbDict.g}, ${rgbDict.b}`
        }
    }
}


const hexStringToRgbString = (hexString) => {
    let regex = /^([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/
    var result = regex.exec(hexString)
    console.log("result is " + result)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null; 
}

const decimalValueToHexString = (value) => {
    let result = value.toString(16)
    if (result.length === 1) {
        result = "0" + result
    }
    if (result.length > 2 || result.length < 1) {
        console.log("Error in decimalValueToHexString")
    }
    return result
}

export { convertRgbToHex,  convertHexToRgb,  hexStringToRgbString, decimalValueToHexString }
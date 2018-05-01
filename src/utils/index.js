const convertRgbToHex = (rgb) => {
    if (!rgb) {
        return
    }
    let regex = /^.*?\b(\d{1,3})[ ,]+(\d{1,3})[ ,]+(\d{1,3})\b.*?$/
    const regexResult =regex.exec(rgb)
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
    if (!hex) { return }
    let matchedString = findLength6HexString(hex)
    if (matchedString) {
        const rgbDict = hexStringToRgbString(matchedString)
        if (rgbDict) {
            return `${rgbDict.r}, ${rgbDict.g}, ${rgbDict.b}`
        }
    } else {
        matchedString = findLength3HexString(hex)
        const rgbDict = hexStringToRgbString(matchedString)
        if (rgbDict) {
            return `${rgbDict.r}, ${rgbDict.g}, ${rgbDict.b}`
        }
    }
}

/* -------------- Regex Helpers --------------- */
const findLength6HexString = (hex) => {
    const regex = /^.*?([A-Fa-f0-9]{6}).*?$/ //When it is hex string of 6 characters 
    const regexResult = regex.exec(hex)
    if (regexResult && regexResult.length > 0) {
        return  regexResult[1]
    } else {
        return null
    }
}

const findLength3HexString = (hex) => {
    const regex = /^.*([A-Fa-f0-9]{3}).*$/ //When it is hex string of 3 characters. 
    const regexResult = regex.exec(hex)
    if (regexResult && regexResult.length > 0) {
        const matchedString = regexResult[1]
        let result = ""
        for (let i = 0; i < matchedString.length; i++) {
            result += matchedString.charAt(i)
            result += matchedString.charAt(i)
        }
        return result
    }
    else {
        return null
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


/* -------------- String Helpers --------------- */
const decimalValueToHexString = (value) => {
    let result = value.toString(16)
    if (result.length === 1) {
        result = "0" + result
    }
    if (result.length > 2 || result.length < 1) {
        console.log("Error in decimalValueToHexString")
        return null
    }
    if (value < 0 || value > 255) {
        console.log("Rgb value should be between 0 - 255")
        return null
    }
    return result
}

export { convertRgbToHex,  convertHexToRgb,  hexStringToRgbString, decimalValueToHexString }
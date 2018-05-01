import { convertRgbToHex } from '../utils'

test('convert Rgb To hex 0, 0, 0', () => {
    expect(convertRgbToHex('0, 0, 0')).toBe('#000000');
});
  
test('convert Rgb to hex 0  0  0', () => {
    expect(convertRgbToHex('0  0  0')).toBe('#000000');
})

test('convert Rgb to hex (0  0  0)', () => {
    expect(convertRgbToHex('(0  0  0)')).toBe('#000000')
})

test('convert Rgb to hex rgb(255, 255,  64)', () => {
    expect(convertRgbToHex('rgb(255, 255,  64)')).toBe('#ffff40')
})

test('convert Rgb to hex rgba(0, 0, 0, 1)', () => {
    expect(convertRgbToHex('rgb(0,  0, 0, 1)')).toBe('#000000')
})

test('convert Rgb to hex rgba(255, 255, 255, 1)', () => {
    expect(convertRgbToHex('rgba(255, 255, 255, 1)')).toBe('#ffffff')
})
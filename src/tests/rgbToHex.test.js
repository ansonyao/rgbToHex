import { convertRgbToHex } from '../utils'

test('convert Rgb To hex 0, 0, 0', () => {
    expect(convertRgbToHex('0, 0, 0')).toBe('#000000');
});
  
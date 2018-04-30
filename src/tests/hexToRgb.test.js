import { convertHexToRgb } from '../utils'

test('convert Rgb To hex #000000', () => {
    expect(convertHexToRgb('000000')).toBe('0, 0, 0');
});
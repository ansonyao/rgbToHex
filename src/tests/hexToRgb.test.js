import { convertHexToRgb } from '../utils'

test('convert Rgb To hex 000000', () => {
    expect(convertHexToRgb('000000')).toBe('0, 0, 0');
});

test('convert Rgb To hex #000000', () => {
    expect(convertHexToRgb('#000000')).toBe('0, 0, 0');
});

test('convert Rgb To hex 0x000000', () => {
    expect(convertHexToRgb('0x000000')).toBe('0, 0, 0');
});

test('convert Rgb To hex 0x000000', () => {
    expect(convertHexToRgb('0xffffff')).toBe('255, 255, 255');
});


test('convert Rgb To hex 0xfff', () => {
    expect(convertHexToRgb('0xfff')).toBe('255, 255, 255');
});

test('convert Rgb To hex fff', () => {
    expect(convertHexToRgb('fff')).toBe('255, 255, 255');
});
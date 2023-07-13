import { useConverterTo24h } from '../useConverter';

describe('Function converts 12h format to 24h format', () => {
  test('When it get empty string, it should return placeholder', () => {
    const emptyString = '';
    const time24h = useConverterTo24h(emptyString);

    expect(time24h).toBe('--:--');
  });
  test('When it get 24h format, it should return it back', () => {
    const format24h = '16:25';
    const time24h = useConverterTo24h(format24h);

    expect(time24h).toBe(format24h);
  });
  test('When it get 12h format, it should return 24h format', () => {
    const format12hNum1 = '06:30 PM';
    const format12hNum2 = '06:30 pm';
    const format12hNum3 = '06:30 Am';
    const format12hNum4 = '12:00 PM';
    const time24hNum1 = useConverterTo24h(format12hNum1);
    const time24hNum2 = useConverterTo24h(format12hNum2);
    const time24hNum3 = useConverterTo24h(format12hNum3);
    const time24hNum4 = useConverterTo24h(format12hNum4);

    expect(time24hNum1).toStrictEqual([18, 30]);
    expect(time24hNum2).toStrictEqual([18, 30]);
    expect(time24hNum3).toStrictEqual([6, 30]);
    expect(time24hNum4).toStrictEqual([0, 0]);
  });
});

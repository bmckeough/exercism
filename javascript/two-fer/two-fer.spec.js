import { twoFer } from './two-fer';

describe('twoFer()', () => {
  test('no name given', () => {
    expect(twoFer()).toEqual('One for you, one for me.');
  });

  test('a name given', () => {
    expect(twoFer('Alice')).toEqual('One for Alice, one for me.');
  });

  test('another name given', () => {
    expect(twoFer('Bob')).toEqual('One for Bob, one for me.');
  });

  test('empty string given for name', () => {
    expect(twoFer('')).toEqual('One for you, one for me.');
  });

  test('null given for name', () => {
    expect(twoFer(null)).toEqual('One for you, one for me.');
  });

  test('undefined given for name', () => {
    expect(twoFer(undefined)).toEqual('One for you, one for me.');
  });

  test('non-string given for name', () => {
    expect(twoFer(3)).toEqual('One for 3, one for me.');
  });
});

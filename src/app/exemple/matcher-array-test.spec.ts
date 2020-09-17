describe('', () => {
  it('Testing Array using "toEqual", arrays should be equals', () => {
    const a = [1, 2, 3];
    expect(a).toEqual([1, 2, 3]);
  });

  it('Testing Array using "toContain", array should contain element', () => {
    const strArr = ['abc', 'def', 'xyz'];
    expect(strArr).toContain('def');
  });

  it('Testing Array using "toContain", array should contain array', () => {
    const array = [['a', 'b', 'c'], ['d', 'e', 'f'], ['x', 'y', 'z']];
    expect(array).toContain(['d', 'e', 'f']);
  });
});

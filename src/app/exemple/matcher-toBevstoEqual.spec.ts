describe('toBe vs toEqual', () => {
  xit('should test "toBe" matcher', () => {
    const a = {
      val: 10,
    };
    const b = {
      val: 10,
    };
    // Tip: To check for deep equality, use .toEqual() instead of .toBe().
    expect(a).toBe(b);
  });

  it('should test "toEqual" matcher', () => {
    const a = {
      val: 10,
    };
    const b = {
      val: 10,
    };

    expect(a).toEqual(b);
  });
});

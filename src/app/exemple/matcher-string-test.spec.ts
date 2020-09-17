describe('String Matcher Test', () => {
  it('Testing String, "toBe" for matcher ===', () => {
    const firstStr = 'Hello World';
    expect(firstStr).toBe('Hello World');
  });

  it('Testing String, "not.toBe" for matcher ===', () => {
    const firstStr = 'Hello World';
    expect(firstStr).not.toBe('Hello World2');
  });

  it('Testing String, "toEqual" for matcher ==', () => {
    const firstSrt = 'Hello World';
    expect(firstSrt).toEqual('Hello World');
  });

  it('Testing String, "not.toEqual" for matcher ==', () => {
    const firstSrt = 'Hello World';
    expect(firstSrt).not.toEqual('World Hello');
  });

  it('Testing String, "toContain" checks hello present in string', () => {
    const firstSrt = 'Hello World! Welcome to Rudra-Tech-2014';
    expect(firstSrt).toContain('Rudra');
  });

  it('Testing String, "toMatch" for regular expressions', () => {
    const message = 'This 4th lane of Underworld';
    expect(message).toMatch(/\d+/);
    expect(message).toMatch('Underworld');
  });
});

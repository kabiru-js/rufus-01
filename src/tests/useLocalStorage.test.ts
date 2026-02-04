describe('useLocalStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('stores and retrieves item from localStorage', () => {
    const key = 'test-key';
    const val = { theme: 'dark' };
    window.localStorage.setItem(key, JSON.stringify(val));
    const retrieved = JSON.parse(window.localStorage.getItem(key) || '{}');
    expect(retrieved.theme).toBe('dark');
  });
});

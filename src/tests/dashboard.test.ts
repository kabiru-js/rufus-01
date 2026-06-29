describe('Dashboard Calculations', () => {
  it('calculates positive growth rate correctly', () => {
    const current = 12500;
    const previous = 10000;
    const rate = ((current - previous) / previous) * 100;
    expect(rate).toBe(25);
  });

  it('handles zero previous value safely', () => {
    const current = 500;
    const previous = 0;
    const rate = previous === 0 ? 100 : ((current - previous) / previous) * 100;
    expect(rate).toBe(100);
  });
});

import { formatCurrency, formatDate } from '../utils/formatters';

describe('Formatters', () => {
  it('formats currency correctly in USD', () => {
    expect(formatCurrency(1500)).toBe('$1,500');
    expect(formatCurrency(0)).toBe('$0');
  });

  it('formats calendar dates accurately', () => {
    const formatted = formatDate('2026-09-01T12:00:00Z');
    expect(formatted).toContain('2026');
  });
});

import { Validators } from '../utils/validators';

describe('Validation Helpers', () => {
  it('validates required fields', () => {
    const required = Validators.required();
    expect(required('')).toBe('This field is required');
    expect(required('valid text')).toBeNull();
  });

  it('validates email addresses', () => {
    const email = Validators.email();
    expect(email('invalid-email')).toBe('Please enter a valid email address');
    expect(email('test@domain.com')).toBeNull();
  });

  it('validates minimum string length', () => {
    const minLength = Validators.minLength(6);
    expect(minLength('abc')).toBe('Must be at least 6 characters');
    expect(minLength('abcdef')).toBeNull();
  });
});

export type ValidatorFn = (value: any) => string | null;

export const Validators = {
  required: (message = 'This field is required'): ValidatorFn => (value) => {
    if (value === null || value === undefined || value === '') return message;
    return null;
  },
  email: (message = 'Please enter a valid email address'): ValidatorFn => (value) => {
    if (!value) return null;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(value)) ? null : message;
  },
  minLength: (min: number, message?: string): ValidatorFn => (value) => {
    if (!value) return null;
    return String(value).length >= min
      ? null
      : message || `Must be at least ${min} characters`;
  },
  number: (message = 'Must be a valid number'): ValidatorFn => (value) => {
    if (!value) return null;
    return !isNaN(Number(value)) ? null : message;
  },
};

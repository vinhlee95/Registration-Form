export const required = (value) =>
      value ? undefined : 'Value is required';

export const minPassLength = (value) => 
  value.length < 6 ? 'Value must be at least 6 characters.' : undefined;

export const matchPassword = (value, allValues) =>
  value === allValues.password ? undefined : 'Passwords must match';
export const required = (value) =>
      value ? undefined : 'This field is required';

export const minPassLength = (value) => 
  value.length < 6 ? 'Password must be at least 6 characters.' : undefined;

export const matchPassword = (value, allValues) =>
  value === allValues.password ? undefined : 'Passwords must match';

export const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
'Invalid email address' : undefined
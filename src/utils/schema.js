import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Enter your email'),
  password: Yup.string().min(8).max(20).required('Enter your password'),
});
// , 'Password must be longer than 8 characters', 'Password must not be longer than 20 characters'

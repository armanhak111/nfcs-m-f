import * as yup from 'yup';

function dateToYMD(date: any) {
  const shortMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = date.getDate();
  const month = shortMonths[date.getMonth()];
  const year = date.getFullYear();
  return '' + (day <= 9 ? '0' + day : day) + '.' + month + '.' + year;
}
export const CURRENT_DATE = dateToYMD(new Date());
export const signInValidationSchema = yup.object({
  email: yup
    .string()
    .email('validation.scheme.signin.email.invalid')
    .required('validation.scheme.signin.email.requiere'),
  password: yup
    .string()
    .min(8, 'validation.scheme.signin.pass.length')
    .required('validation.scheme.signin.pass.requiere'),
});

export const signUpValidationSchema = yup.object({
  email: yup
    .string()
    .email('validation.scheme.signin.email.invalid')
    .required('validation.scheme.signin.email.requiere'),
  password: yup
    .string()
    .min(8, 'validation.scheme.signin.pass.length')
    .required('validation.scheme.signin.pass.requiere'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'validation.scheme.signin.pass.mustmuch'),
  disclaimer: yup.boolean().oneOf([true]),
});

export const resetPasswordValidationScheme = yup.object({
  password: yup
    .string()
    .min(8, 'validation.scheme.signin.pass.length')
    .required('validation.scheme.signin.pass.requiere'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'validation.scheme.signin.pass.mustmuch'),
});

export const forgotPassValidationSchema = yup.object({
  email: yup
    .string()
    .email('validation.scheme.signin.email.invalid')
    .required('validation.scheme.signin.email.requiere'),
});

export const changePasswordValidationScheme = yup.object({
  newPass: yup
    .string()
    .min(8, 'validation.scheme.signin.pass.length')
    .required('validation.scheme.signin.pass.requiere'),
  oldPass: yup
    .string()
    .min(8, 'validation.scheme.signin.pass.length')
    .required('validation.scheme.signin.pass.requiere'),
});
export const changeNameValidationScheme = yup.object({
  name: yup.string().required(),
});
export const changePassValidationScheme = yup.object({
  old: yup.string().required(),
  new: yup.string().required(),
});

export const constactUsValidationScheme = yup.object({
  email: yup
    .string()
    .email('validation.scheme.signin.email.invalid')
    .required('validation.scheme.signin.email.requiere'),
});

export const orderBinanceValidationScheme = yup.object({
  incuiryType: yup.string().required(),
  adjustLeverage: yup.string().required(),
  sumType: yup.string().required(),
  minPrice: yup.string().required(),
  maxPrice: yup.string().required(),
  timeZone: yup.string().required(),
});

export const orderNftValidationScheme = yup.object({
  platform: yup.string().required(),
  type: yup.string().required(),
  sumType: yup.string().required(),
  minPrice: yup.string().required(),
  maxPrice: yup.string().required(),
});

export const orderStockValidationScheme = yup.object({
  industry: yup.string().required(),
  sumType: yup.string().required(),
  minPrice: yup.string().required(),
  maxPrice: yup.string().required(),
});

export const orderCryptoValidationScheme = yup.object({
  sumType: yup.string().required(),
  minPrice: yup.string().required(),
  maxPrice: yup.string().required(),
});

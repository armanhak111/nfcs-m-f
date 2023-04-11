import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

import { FORGOT_PASS_INITIAL, TForgotPass } from '../../../../Constants/authFLow';
import { ROUTES } from '../../../../Constants/Routes';
import { useAllowSubmit } from '../../../../Hooks/useAllowSubmitForm';
import { forgotPassword } from '../../../../Store/Slices/auth';
import { forgotPassValidationSchema } from '../../../../Utils/validations';
import Input from '../../../atoms/Input';
import AuthView from '../../../organisms/AuthViews';

const ForgotPassword: React.FC = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      ...FORGOT_PASS_INITIAL,
    },
    validationSchema: forgotPassValidationSchema,
    onSubmit: (values: TForgotPass) => {
      dispatch(forgotPassword(values.email));
    },
  });
  const allowSubmit = useAllowSubmit(formik, FORGOT_PASS_INITIAL);

  return (
    <AuthView
      submitHandler={formik.handleSubmit}
      allowSubmit={allowSubmit}
      header="forgotpass.header"
      bottomText="forgotpass.returnTo"
      bottomLinkedText={{ href: ROUTES.SIGN_IN, title: 'forgotpass.signin' }}
      buttonText="forgotpass.button"
    >
      <Input
        htmlFor="email"
        type="text"
        name="email"
        placeHolder="forgotpass.email.placeholder"
        label="forgotpass.email.title"
        error={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
        onFocus={formik.setFieldTouched}
        value={formik.values.email}
        onClick={formik.setFieldTouched}
      />
    </AuthView>
  );
};

export default ForgotPassword;

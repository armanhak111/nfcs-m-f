import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RESET_PASS_INITIAL, TResetPass } from '../../../../Constants/authFLow';
import { ROUTES } from '../../../../Constants/Routes';
import { useAllowSubmit } from '../../../../Hooks/useAllowSubmitForm';
import { resetPassword } from '../../../../Store/Slices/auth';
import { resetPasswordValidationScheme } from '../../../../Utils/validations';
import Input from '../../../atoms/Input';
import AuthView from '../../../organisms/AuthViews';

const ResetPassword: React.FC = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showRepeatPass, setShowRepeatPass] = useState<boolean>(false);
  const params: { id: string } = useParams();

  const dispatch = useDispatch();
  const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      ...RESET_PASS_INITIAL,
    },
    validationSchema: resetPasswordValidationScheme,
    onSubmit: (values: TResetPass) => {
      dispatch(resetPassword(values.password, params.id));
    },
  });

  const allowSubmit = useAllowSubmit(formik, RESET_PASS_INITIAL);

  return (
    <AuthView
      submitHandler={formik.handleSubmit}
      allowSubmit={allowSubmit}
      header="resetPassword.header"
      bottomText="resetPassword.rememberPass"
      bottomLinkedText={{ href: ROUTES.SIGN_IN, title: 'signup.signin' }}
      buttonText="resetPassword.button"
    >
      <Input
        htmlFor="password"
        type="text"
        isPassInput
        name="password"
        placeHolder="signup.password.placeholder"
        label="signup.password.title"
        isTruthyEqual={{
          touched: formik.touched.password || false,
          error: formik.errors.password || '',
          value: formik.values.password,
        }}
        onClick={formik.setFieldTouched}
        onFocus={formik.setFieldTouched}
        error={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        passShowMode={showPass}
        repeatMode
        setPassShowMode={setShowPass}
        value={formik.values.password}
      />
      <Input
        htmlFor="passwordConfirmation"
        type="text"
        isPassInput
        name="passwordConfirmation"
        placeHolder="signup.password.repeate.placeholder"
        label="signup.password.repeate.title"
        repeatMode
        isTruthyEqual={{
          touched: formik.touched.passwordConfirmation || false,
          error: formik.errors.passwordConfirmation || '',
          value: formik.values.passwordConfirmation,
        }}
        onClick={formik.setFieldTouched}
        onFocus={formik.setFieldTouched}
        error={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
        onChange={formik.handleChange}
        passShowMode={showRepeatPass}
        setPassShowMode={setShowRepeatPass}
        value={formik.values.passwordConfirmation}
      />
    </AuthView>
  );
};

export default ResetPassword;

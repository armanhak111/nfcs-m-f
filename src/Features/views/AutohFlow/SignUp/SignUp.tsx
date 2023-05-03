import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Disclaimer from '../../../../Components/Multiusable/Disclaimer';
import { SIGN_UP_INITIAL, TSignUpValues } from '../../../../Constants/authFLow';
import { ROUTES } from '../../../../Constants/Routes';
import { useAllowSubmit } from '../../../../Hooks/useAllowSubmitForm';
import { registration } from '../../../../Store/Slices/auth';
import { signUpValidationSchema } from '../../../../Utils/validations';
import Input from '../../../atoms/Input';
import AuthView from '../../../organisms/AuthViews';

const SignUp: React.FC = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showRepeatPass, setShowRepeatPass] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      ...SIGN_UP_INITIAL,
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values: TSignUpValues) => {
      dispatch(registration(values.email, values.password, history));
    },
  });

  const allowSubmit = useAllowSubmit(formik, SIGN_UP_INITIAL);

  return (
    <AuthView
      submitHandler={formik.handleSubmit}
      allowSubmit={allowSubmit}
      header="signup.header"
      bottomText="signup.alreadyhaveacoount"
      bottomLinkedText={{ href: ROUTES.SIGN_IN, title: 'signup.signin' }}
      buttonText="signup.header"
    >
      <Input
        htmlFor="email"
        type="text"
        onFocus={formik.setFieldTouched}
        name="email"
        placeHolder="signup.email.placeholder"
        label="signup.email.title"
        error={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
        value={formik.values.email}
        onClick={formik.setFieldTouched}
        isSign
      />
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
        isSign
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
        isSign
      />
      <Disclaimer
        onChange={formik.setFieldValue}
        onClick={formik.setFieldTouched}
        name="disclaimer"
      />
    </AuthView>
  );
};

export default SignUp;

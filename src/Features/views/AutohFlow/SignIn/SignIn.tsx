import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SIGN_IN_INITIAL } from '../../../../Constants/authFLow';
import { ROUTES } from '../../../../Constants/Routes';
import { useAllowSubmit } from '../../../../Hooks/useAllowSubmitForm';
import { signIn } from '../../../../Store/Slices/auth';
import { signInValidationSchema } from '../../../../Utils/validations';
import Input from '../../../atoms/Input';
import AuthView from '../../../organisms/AuthViews';

const SignIn: React.FC = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      ...SIGN_IN_INITIAL,
    },
    validationSchema: signInValidationSchema,
    onSubmit: (arg: any) => {
      dispatch(signIn(arg.email, arg.password, history));
    },
  });
  const allowSubmit = useAllowSubmit(formik, SIGN_IN_INITIAL);

  return (
    <AuthView
      submitHandler={formik.handleSubmit}
      allowSubmit={allowSubmit}
      header="signin.header"
      aboveButtonText={{ href: ROUTES.FORGOT_PASS, title: 'signin.forgot' }}
      bottomText="signin.donthaveaccount"
      bottomLinkedText={{ href: ROUTES.SIGN_UP, title: 'signin.signup' }}
      buttonText="signin.header"
    >
      <Input
        htmlFor="email"
        type="text"
        name="email"
        placeHolder="signin.email.placeholder"
        label="signin.email.title"
        onFocus={formik.setFieldTouched}
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
        placeHolder="signin.password.placeholder"
        label="signin.password.title"
        onClick={formik.setFieldTouched}
        onFocus={formik.setFieldTouched}
        error={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        passShowMode={showPass}
        setPassShowMode={setShowPass}
        value={formik.values.password}
        isSign
      />
    </AuthView>
  );
};

export default SignIn;

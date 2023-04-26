import { useFormik } from 'formik';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { contactUs } from '../../../Store/Slices/mainSlice';
import { constactUsValidationScheme } from '../../../Utils/validations';
import Button from '../../atoms/Button';
import Dropdown from '../../atoms/Dropdown';
import Input from '../../atoms/Input';
import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import MainContent from '../../organisms/MainContent';
import styles from './Contact.module.scss';

type TContactUs = {
  inquiry: string;
  name: string;
  email: string;
  message: string;
};

const CONTACT_US_INTIAL = {
  inquiry: '',
  name: '',
  email: '',
  message: '',
};
const INQUIRY_OPTIONS = [
  {
    id: 'contactus.dropdown.generalInquiry',
    value: 'General Inquiry',
  },
  {
    id: 'contactus.dropdown.salesInquiry',
    value: 'Sales Inquiry',
  },
  {
    id: 'contactus.dropdown.techIssue',
    value: 'Technical Issue',
  },
];

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      ...CONTACT_US_INTIAL,
    },
    validationSchema: constactUsValidationScheme,
    onSubmit: (values: TContactUs, { resetForm }) => {
      dispatch(contactUs(values, resetForm));
    },
  });

  const canSubmit = useMemo(() => {
    return !formik.errors.email && formik.values.email !== '';
  }, [formik.errors, formik.values]);

  return (
    <div className={`${styles.contactPage} page contact-page`}>
      <Header />
      <MainContent>
        <section className={styles.contactSection} id="navbar.contactus">
          <div className="container">
            <div className={styles.contactRow}>
              <div className={`${styles.col_left} col_item`}>
                <div className={styles.contactInfo}>
                  <h1 className="title">Contact Us</h1>
                  <p className="subTitle">
                    For any question or problem, we always have a 24/7 support to help you to solve
                    all problems and to answer all your questions. Please fill out the feedback
                    form.
                  </p>
                </div>
              </div>
              <div className={`${styles.col_right} col_item`}>
                <div className={styles.contactPageForm}>
                  <form onSubmit={formik.handleSubmit}>
                    <Input
                      htmlFor="name"
                      type="text"
                      name="name"
                      placeHolder="contactus.name"
                      label="contactus.name"
                      onClick={formik.setFieldTouched}
                      onFocus={formik.setFieldTouched}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <Input
                      htmlFor="email"
                      type="text"
                      name="email"
                      placeHolder="contactus.email"
                      label="contactus.email"
                      onClick={formik.setFieldTouched}
                      onFocus={formik.setFieldTouched}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <Dropdown
                      name="inquiry"
                      label="contactus.dropdown.label"
                      options={INQUIRY_OPTIONS}
                      value={formik.values.inquiry}
                      defaultValue="contactus.dropdown.generalInquiry"
                      onClick={formik.setFieldTouched}
                      onChange={formik.setFieldValue}
                    />
                    <Input
                      htmlFor="message"
                      name="message"
                      placeHolder="contactus.message"
                      textarea
                      label="contactus.message"
                      onClick={formik.setFieldTouched}
                      onFocus={formik.setFieldTouched}
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      style={{ height: '150px' }}
                    />
                    <Button submit disabeled={!canSubmit} type="primary" id="contactus.submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainContent>
      <Footer />
    </div>
  );
};

export default Contact;

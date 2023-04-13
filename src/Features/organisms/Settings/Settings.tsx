import { useFormik } from 'formik';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import useMediaQuery from 'react-use-media-query-hook';

import { SCREENS } from '../../../Constants/ScreenResolutions';
import { useSettingsCollapse } from '../../../Hooks/useSettingsCollapse';
import { getCurrentUser } from '../../../Store/Selectors/auth';
import { changeName, changePasswordSettings } from '../../../Store/Slices/dashboard';
import { changeNameValidationScheme, changePassValidationScheme } from '../../../Utils/validations';
import Button from '../../atoms/Button';
// import Dropdown from '../../atoms/Dropdown';
import Input from '../../atoms/Input';
import styles from './settings.module.scss';
// const INQUIRY_OPTIONS = [
//   {
//     id: 'contactus.dropdown.generalInquiry',
//     value: 'General Inquiry',
//   },
//   {
//     id: 'contactus.dropdown.salesInquiry',
//     value: 'Sales Inquiry',
//   },
//   {
//     id: 'contactus.dropdown.techIssue',
//     value: 'Technical Issue',
//   },
// ];
const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const { collapse, currentItem, currentHeight, setCurretHeight } = useSettingsCollapse();
  const isMobile = useMediaQuery(SCREENS.mobile);
  const user = useSelector(getCurrentUser);

  const initialVal = useMemo(() => {
    return currentItem === 'password_s' ? { old: '', newPas: '' } : { name: '' };
  }, [currentItem]);
  // const istablet = useMediaQuery(SCREENS.bigTablet);
  const formik = useFormik({
    initialValues: initialVal,
    validationSchema:
      currentItem === 'password_s' ? changePassValidationScheme : changeNameValidationScheme,
    onSubmit: (arg: any) => {
      if (currentItem === 'password_s') {
        dispatch(changePasswordSettings(arg.old, arg.newPas, user.id, setCurretHeight));
      } else {
        dispatch(changeName(arg.name, user.id, setCurretHeight));
      }
    },

    validateOnMount: true,
  });
  const handleChangeName = () => {
    formik.handleSubmit();
  };

  return (
    <section>
      <h2 className="title dashboard-title">Settings</h2>
      <div className="section_inner">
        <div className={styles.settingsSection}>
          <div className={styles.settingsCollapseItem}>
            <div className={styles.settingsCollapseRow}>
              <div className={styles.settingsCollapseCol}>
                {/* <div className={styles.settinsCollapseItem}>
                  <div className={styles.settinsCollapseItemHeader} id="header_1">
                    <h3 className={styles.settinsCollapseTitle}>Default language</h3>
                    {istablet && !isMobile && <div className={styles.languageName}>English</div>}
                    {!istablet && (
                      <>
                        <div className={styles.settinsCollapsetext}>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante eget
                            turpis etiam nunc vitae congue.
                          </p>
                        </div>
                        <div className={styles.languageName}>English</div>
                      </>
                    )}
                    <div
                      onClick={() => collapse('language_s', 'header_1')}
                      className={styles.collpaseBtnContainer}
                    >
                      <button type="button">Change</button>
                    </div>
                  </div>
                  {istablet && (
                    <>
                      <div className={styles.settinsCollapsetext}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante eget turpis
                          etiam nunc vitae congue.
                        </p>
                      </div>
                    </>
                  )}
                  {!istablet && isMobile && (
                    <>
                      <div className={styles.settinsCollapsetext}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante eget turpis
                          etiam nunc vitae congue.
                        </p>
                      </div>
                      <div className={styles.languageName}>
                        {currentItem !== 'language_s' ? 'English' : null}
                      </div>
                    </>
                  )}
                  <div
                    id="language_s"
                    className={styles.collapseContent}
                    style={{
                      height: `${currentItem === 'language_s' ? `${currentHeight}px` : '0px'}`,
                    }}
                  >
                    <div className={styles.collapseContentInner}>
                      <Input
                        htmlFor="name"
                        type="text"
                        name="name"
                        placeHolder="contactus.name"
                        label="contactus.name"
                        onClick={() => null}
                        onFocus={() => null}
                        onChange={() => null}
                        value={'formik.values.name'}
                      />
                      <Dropdown
                        name="inquiry"
                        label="contactus.dropdown.label"
                        options={INQUIRY_OPTIONS}
                        value={'formik.values.inquiry'}
                        defaultValue="contactus.dropdown.generalInquiry"
                        onClick={() => null}
                        onChange={() => null}
                      />
                      <div className={styles.buttons}>
                        <div className={`${styles.buttonOne} col_`}>
                          <Button type="primary" customClass={styles.bordered_btn} id="Cancel" />
                        </div>
                        <div className={`${styles.buttonTwo} col_`}>
                          <Button type="primary" customClass={styles.cardBtn} id="Change" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className={styles.settingsCollapseCol}>
                <div className={styles.settinsCollapseItem}>
                  <div className={styles.settinsCollapseItemHeader} id="header_2">
                    <h3 className={styles.settinsCollapseTitle}>Name</h3>
                    {!isMobile && (
                      <div className={styles.settinsCollapsetext}>
                        <p>{user.name}</p>
                      </div>
                    )}
                    <div
                      onClick={() => collapse('name_s', 'header_2')}
                      className={styles.collpaseBtnContainer}
                    >
                      <button type="button">Change</button>
                    </div>
                  </div>
                  {isMobile && (
                    <div className={styles.settinsCollapsetext}>
                      <p>{user.name}</p>
                    </div>
                  )}
                  <div
                    id="name_s"
                    className={styles.collapseContent}
                    style={{
                      height: `${currentItem === 'name_s' ? `${currentHeight}px` : '0px'}`,
                    }}
                  >
                    <div className={styles.collapseContentInner}>
                      <Input
                        htmlFor="name"
                        type="text"
                        name="name"
                        placeHolder="contactus.name"
                        label="contactus.name"
                        onClick={formik.setFieldTouched}
                        onFocus={formik.setFieldTouched}
                        error={formik.touched.name && formik.errors.name}
                        onChange={formik.handleChange}
                        value={formik.values.name || ''}
                      />

                      <div className={styles.buttons}>
                        <div
                          onClick={() => setCurretHeight(0)}
                          className={`${styles.buttonOne} col_`}
                        >
                          <Button type="primary" customClass={styles.bordered_btn} id="Cancel" />
                        </div>
                        <div onClick={handleChangeName} className={`${styles.buttonTwo} col_`}>
                          <Button
                            type="primary"
                            disabeled={Boolean(!formik.touched.name || formik.errors.name)}
                            customClass={styles.cardBtn}
                            id="Change"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.settingsCollapseCol}>
                <div className={styles.settinsCollapseItem}>
                  <div className={styles.settinsCollapseItemHeader} id="header_3">
                    <h3 className={styles.settinsCollapseTitle}>Password</h3>
                    {!isMobile && <div className={styles.settinsCollapsetext}></div>}
                    <div
                      onClick={() => collapse('password_s', 'header_3')}
                      className={styles.collpaseBtnContainer}
                    >
                      <button type="button">Change</button>
                    </div>
                  </div>
                  {isMobile && (
                    <div className={styles.settinsCollapsetext}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante eget turpis
                        etiam nunc vitae congue.{' '}
                      </p>
                    </div>
                  )}
                  <div
                    id="password_s"
                    className={styles.collapseContent}
                    style={{
                      height: `${currentItem === 'password_s' ? `${currentHeight}px` : '0px'}`,
                    }}
                  >
                    <div className={styles.collapseContentInner}>
                      <Input
                        htmlFor="old"
                        type="text"
                        name="old"
                        placeHolder="Current Password"
                        label="Current Password"
                        onClick={formik.setFieldTouched}
                        onFocus={formik.setFieldTouched}
                        error={formik.touched.old && formik.errors.old}
                        onChange={formik.handleChange}
                        value={formik.values.old || ''}
                      />
                      <Input
                        htmlFor="newPas"
                        type="text"
                        name="newPas"
                        placeHolder="New Password"
                        label="New Password"
                        onClick={formik.setFieldTouched}
                        onFocus={formik.setFieldTouched}
                        error={formik.touched.newPas && formik.errors.newPas}
                        onChange={formik.handleChange}
                        value={formik.values.newPas || ''}
                      />
                      <div className={styles.buttons}>
                        <div
                          className={`${styles.buttonOne} col_`}
                          onClick={() => setCurretHeight(0)}
                        >
                          <Button type="primary" customClass={styles.bordered_btn} id="Cancel" />
                        </div>
                        <div className={`${styles.buttonTwo} col_`}>
                          <Button
                            type="primary"
                            onClick={handleChangeName}
                            customClass={styles.cardBtn}
                            id="Change"
                            disabeled={Boolean(
                              !formik.touched.newPas ||
                                !formik.touched.old ||
                                formik.errors.newPas ||
                                formik.errors.old
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;

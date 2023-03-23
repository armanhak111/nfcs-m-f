import React from 'react';
import useMediaQuery from 'react-use-media-query-hook';

import { SCREENS } from '../../../Constants/ScreenResolutions';
import { useSettingsCollapse } from '../../../Hooks/useSettingsCollapse';
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
  const { collapse, currentItem, currentHeight } = useSettingsCollapse();
  const isMobile = useMediaQuery(SCREENS.mobile);
  // const istablet = useMediaQuery(SCREENS.bigTablet);
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
                        <p>Angela Merkel</p>
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
                      <p>Angela Merkel</p>
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
                        onClick={() => null}
                        onFocus={() => null}
                        onChange={() => null}
                        value={'formik.values.name'}
                      />
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
                </div>
              </div>
              <div className={styles.settingsCollapseCol}>
                <div className={styles.settinsCollapseItem}>
                  <div className={styles.settinsCollapseItemHeader} id="header_3">
                    <h3 className={styles.settinsCollapseTitle}>Password</h3>
                    {!isMobile && (
                      <div className={styles.settinsCollapsetext}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante eget turpis
                          etiam nunc vitae congue.{' '}
                        </p>
                      </div>
                    )}
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

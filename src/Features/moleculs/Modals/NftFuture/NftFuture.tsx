import React from 'react';

import TooltipSvg from '../../../../Assets/Icons/cards/TooltipSvg';
import Button from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import Input from '../../../atoms/Input';
import styles from './nftFuture.module.scss';

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
const NftFuture = () => {
  return (
    <>
      <h2 className={styles.modalTitle}>NFT Forecast</h2>
      <div className={styles.detailsList}>
        <div className={styles.detailsItemContent}>
          <TooltipSvg />
          <Dropdown
            name="inquiry"
            label="Platform"
            options={INQUIRY_OPTIONS}
            value={'formik.values.inquiry'}
            defaultValue="contactus.dropdown.generalInquiry"
            onClick={() => null}
            onChange={() => null}
          />
        </div>
        <div className={styles.detailsItemContent}>
          <Dropdown
            name="inquiry"
            label="Type"
            options={INQUIRY_OPTIONS}
            value={'formik.values.inquiry'}
            defaultValue="contactus.dropdown.generalInquiry"
            onClick={() => null}
            onChange={() => null}
          />
        </div>
        {/* <div className={styles.detailsItemContent}>
          <label className={styles.label}>Adjust Leverage</label>
          <div className={styles.leverageItem}>
            <button disabled className={styles.leverageMinus}>
              -
            </button>
            <div className={styles.leverageCount}>
              <span>25</span>x
            </div>
            <button className={styles.leverageplus}>+</button>
          </div>
          <div className={styles.leverageRange}>
            <input type="range" />
            <div className={styles.leverageSum}>
              <p className={styles.active}>1x</p>
              <p className={styles.active}>10x</p>
              <p className={styles.active}>20x</p>
              <p>30x</p>
              <p>40x</p>
              <p>50x</p>
            </div>
          </div>
        </div> */}
        <div className={styles.detailsItemContent}>
          <div className={styles.inputsItems}>
            <div className={styles.inputsItem}>
              <Input
                htmlFor="name"
                type="text"
                name="name"
                placeHolder="Min"
                label="Price Range"
                onClick={() => null}
                onFocus={() => null}
                onChange={() => null}
                value={' '}
              />
            </div>
            <div className={styles.divider} />
            <div className={styles.inputsItem}>
              <div className={styles.customSwich}>
                <input type="checkbox" id="modal_swich" />
                <label htmlFor="modal_swich">
                  <p className="col_">USD</p>
                  <p className="col_">EUR</p>
                </label>
              </div>
              <Input
                htmlFor="name"
                type="text"
                name="name"
                placeHolder="Max"
                label=" "
                onClick={() => null}
                onFocus={() => null}
                onChange={() => null}
                value={''}
              />
            </div>
          </div>
        </div>

        <div className={styles.detailsItemContent}>
          <div className={styles.dropdownsRow}>
            <div className="col_">
              <Dropdown
                name="inquiry"
                label=" "
                options={INQUIRY_OPTIONS}
                value={'formik.values.inquiry'}
                defaultValue="contactus.dropdown.generalInquiry"
                onClick={() => null}
                onChange={() => null}
              />
            </div>
            <div className="col_">
              <Dropdown
                name="inquiry"
                label="formik.values.name "
                options={INQUIRY_OPTIONS}
                value={'formik.values.inquiry'}
                defaultValue="contactus.dropdown.generalInquiry"
                onClick={() => null}
                onChange={() => null}
              />
            </div>
            <div className="col_">
              <Dropdown
                name="inquiry"
                label="formik.values.name "
                options={INQUIRY_OPTIONS}
                value={'formik.values.inquiry'}
                defaultValue="contactus.dropdown.generalInquiry"
                onClick={() => null}
                onChange={() => null}
              />
            </div>
          </div>
        </div>
        <div className={styles.modalBtn}>
          <Button onClick={() => null} type="primary" id={'Order'} />
        </div>
      </div>
    </>
  );
};
export default NftFuture;

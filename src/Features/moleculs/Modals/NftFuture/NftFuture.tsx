import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NFT_FUTURE_ORDER } from '../../../../Constants/dashboard';
import { getCurrentUser } from '../../../../Store/Selectors/auth';
import { orderAnalytics } from '../../../../Store/Slices/auth';
import { CURRENT_DATE, orderNftValidationScheme } from '../../../../Utils/validations';
import Button from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import Input from '../../../atoms/Input';
import TabSwitch from '../../../atoms/TabSwitch/TabSwitch';
import styles from './nftFuture.module.scss';

const MARKET_PLACE = [
  {
    id: 'contactus.dropdown.openSea',
    value: 'OpenSea',
  },
  {
    id: 'contactus.dropdown.magicEden',
    value: 'Magic Eden',
  },
  {
    id: 'contactus.dropdown.castle',
    value: 'Castle',
  },
  {
    id: 'contactus.dropdown.floor',
    value: 'Floor',
  },
  {
    id: 'contactus.dropdown.yawww',
    value: 'Yawww',
  },
  {
    id: 'contactus.dropdown.rarible',
    value: 'Rarible',
  },
  {
    id: 'contactus.dropdown.digitaleyes',
    value: 'DigitalEyes',
  },
  {
    id: 'contactus.dropdown.solport',
    value: 'Solport',
  },
];
const NFT_CATEGORY = [
  {
    id: 'contactus.dropdown.artistic',
    value: 'Artistic tokens as part of NFT types',
  },
  {
    id: 'contactus.dropdown.collectibles',
    value: 'Collectibles- NFT types',
  },
  {
    id: 'contactus.dropdown.digitals',
    value: 'Digital collectibles',
  },
  {
    id: 'contactus.dropdown.trading',
    value: 'Trading cards NFT',
  },
  {
    id: 'contactus.dropdown.bigSports',
    value: 'Big sports moments tokens',
  },
  {
    id: 'contactus.dropdown.utilitySecu',
    value: 'Utility & Security tokens',
  },
  {
    id: 'contactus.dropdown.virtualNft',
    value: 'Virtual real estate NFT',
  },
  {
    id: 'contactus.dropdown.gamingToken',
    value: 'Gaming tokens as NFT types',
  },
  {
    id: 'contactus.dropdown.wearablesNft',
    value: 'NFT Wearables in Virtual Fashion',
  },
  {
    id: 'contactus.dropdown.memesTokens',
    value: 'Memes tokens as NFT types',
  },
  {
    id: 'contactus.dropdown.musicToken',
    value: 'Music and Media tokens',
  },
  {
    id: 'contactus.dropdown.identityPart',
    value: 'Identity as a part of NFT types',
  },
  {
    id: 'contactus.dropdown.eventTickets',
    value: 'Event tickets tokens',
  },
];
const NftFuture: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const userId = currentUser.id;
  const formik = useFormik({
    initialValues: NFT_FUTURE_ORDER,
    validationSchema: orderNftValidationScheme,
    onSubmit: (arg) => {
      const data = {
        ...arg,
        date: CURRENT_DATE,
        orderType: 'nft',
        id: userId,
      };
      dispatch(orderAnalytics(data));
    },
  });
  console.log('formik', formik.values);
  return (
    <>
      <h2 className={styles.modalTitle}>NFT Forecast</h2>
      <div className={styles.detailsList}>
        <div className={styles.detailsItemContent}>
          <Dropdown
            name="orderCategory"
            label="Marketplace"
            options={MARKET_PLACE}
            value={formik.values.orderCategory}
            defaultValue="Select"
            onClick={formik.setFieldTouched}
            onChange={() => null}
            formik={formik}
          />
        </div>
        <div className={styles.detailsItemContent}>
          <Dropdown
            name="type"
            label="NFT Category"
            options={NFT_CATEGORY}
            value={formik.values.type}
            defaultValue="Select"
            onClick={formik.setFieldTouched}
            onChange={() => null}
            formik={formik}
          />
        </div>
        <div className={styles.detailsItemContent}>
          <div className={styles.inputsItems}>
            <div className={styles.inputsItem}>
              <Input
                htmlFor="name"
                type="text"
                name="minPrice"
                placeHolder="Min"
                label="Price Range"
                onClick={formik.setFieldTouched}
                onFocus={formik.setFieldTouched}
                onChange={() => null}
                value={formik.values.minPrice}
                formik={formik}
                error={formik.touched.minPrice && formik.errors.minPrice}
              />
            </div>
            <div className={styles.divider} />
            <div className={styles.inputsItem}>
              <div className={styles.inputsItemPrice}>
                <TabSwitch formik={formik} />
                <Input
                  htmlFor="name"
                  type="text"
                  name="maxPrice"
                  placeHolder="Max"
                  label=" "
                  onClick={formik.setFieldTouched}
                  onFocus={formik.setFieldTouched}
                  onChange={() => null}
                  value={formik.values.maxPrice}
                  formik={formik}
                  error={formik.touched.maxPrice && formik.errors.maxPrice}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.modalBtn}>
          <Button
            onClick={formik.handleSubmit}
            disabeled={Boolean(
              !formik.touched.orderCategory ||
                !formik.touched.type ||
                !formik.touched.minPrice ||
                !formik.touched.maxPrice ||
                formik.errors.minPrice ||
                formik.errors.maxPrice
            )}
            type="primary"
            id={'Order'}
          />
        </div>
      </div>
    </>
  );
};
export default NftFuture;

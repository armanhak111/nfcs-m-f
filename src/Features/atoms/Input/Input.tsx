/* eslint-disable no-unused-vars */
import React from 'react';
import { useIntl } from 'react-intl';

import ClosedEyeSvg from '../../../Assets/Icons/ClosedEyeSvg';
import OpenedEyeSvg from '../../../Assets/Icons/OpenedEyeSvg';
import Typography from '../Typography';
import styles from './input.module.scss';

type isTruthyEqual = {
  touched: boolean;
  error: string;
  value: string;
};

interface IInputProps {
  type?: 'text' | 'password' | 'number';
  isPassInput?: boolean;
  htmlFor: string;
  label: string;
  placeHolder: string;
  value: string;
  name: string;
  onClick: (current: string) => void;
  onFocus: (current: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: any;
  passShowMode?: boolean;
  setPassShowMode?: (arg: boolean) => void;
  repeatMode?: boolean;
  isTruthyEqual?: isTruthyEqual;
  textarea?: boolean;
  style?: React.CSSProperties;
  formik?: any;
  isSign?: any;
}

const Input: React.FC<IInputProps> = ({
  htmlFor,
  label,
  placeHolder,
  value,
  onChange,
  name,
  error,
  type,
  onClick,
  isPassInput = false,
  passShowMode = false,
  setPassShowMode,
  repeatMode = false,
  isTruthyEqual,
  onFocus,
  textarea,
  style,
  formik,
  isSign,
}) => {
  const intl = useIntl();
  return (
    <>
      {!isPassInput ? (
        <div onClick={() => onClick(name)} className={styles.formItem}>
          <Typography className={styles.label} component="label" htmlFor={htmlFor} id={label} />
          {textarea ? (
            <textarea
              name={name}
              style={style}
              onFocus={() => onFocus(name)}
              className={`${styles.input} ${styles.textarea}`}
              id={htmlFor}
              onChange={onChange}
              value={value}
              placeholder={intl.formatMessage({ id: placeHolder })}
            />
          ) : (
            <input
              name={name}
              style={style}
              onFocus={() => onFocus(name)}
              className={styles.input}
              type={type}
              id={htmlFor}
              onChange={(e) => {
                onChange(e);
                formik.setFieldValue(name, e.target.value);
              }}
              value={value}
              placeholder={intl.formatMessage({ id: placeHolder })}
            />
          )}
          {error && (
            <Typography
              component="p"
              className={
                isSign ? `${styles.errorMessage} ${styles.errorMessageAlt}` : styles.errorMessage
              }
              id={error}
            />
          )}
        </div>
      ) : (
        <div onClick={() => onClick(name)} className={styles.formItem}>
          <Typography className={styles.label} component="label" htmlFor={htmlFor} id={label} />
          <div className={styles.addonInput}>
            <input
              className={styles.input}
              style={style}
              onFocus={() => onFocus(name)}
              type={passShowMode ? 'text' : 'password'}
              id={htmlFor}
              onChange={onChange}
              value={value}
              placeholder={intl.formatMessage({ id: placeHolder })}
            />
            {setPassShowMode && (
              <button
                type="button"
                onClick={() => setPassShowMode(!passShowMode)}
                className={styles.passwordEye}
              >
                {!passShowMode ? <ClosedEyeSvg /> : <OpenedEyeSvg />}
              </button>
            )}
            {repeatMode && isTruthyEqual?.touched && isTruthyEqual?.value && (
              <div
                style={{ background: `${isTruthyEqual.error !== '' ? '#981616' : '#2FAD4B'}` }}
                className={styles.repeatMode}
              />
            )}
          </div>
          {error && (
            <Typography
              component="p"
              className={
                isSign ? `${styles.errorMessage} ${styles.errorMessageAlt}` : styles.errorMessage
              }
              id={error}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Input;

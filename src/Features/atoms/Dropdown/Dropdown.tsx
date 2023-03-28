/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';

import { useOutsideDetect } from '../../../Hooks/useOutsideDetect';
import Typography from '../Typography';
import styles from './dropdown.module.scss';

type TOptions = {
  id: string;
  value: string;
};

interface IDropdown {
  name: string;
  label: string;
  options: { id: string; value: string }[];
  value: string;
  defaultValue?: string;
  onClick: (current: string) => void;
  onChange: (current: string, value: string) => void;
  formik?: any;
}

const Dropdown: React.FC<IDropdown> = ({
  onClick,
  onChange,
  name,
  label,
  options,
  value,
  defaultValue,
  formik,
}) => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideDetect(setOpen);

  const handleClick = () => {
    onClick(name);
    setOpen(!open);
  };

  const handleSetValue = (curr: string) => {
    if (curr === value) {
      onChange(name, '');
      formik.setFieldValue(name, '');
    } else {
      onChange(name, curr);
      formik.setFieldValue(name, curr);
    }
  };

  const currentValue = useMemo(() => {
    const filteredValue: TOptions | undefined = options.find((el: TOptions) => el.value === value);
    return filteredValue && filteredValue.id;
  }, [value]);
  return (
    <div ref={ref} className={`${styles.formItem} ${styles.selectItem}`}>
      <Typography className={styles.spanText} component="span" id={label} onClick={handleClick} />
      <ul className={styles.selectParent} onClick={handleClick}>
        <li className={`${styles.selectItem} ${open && styles.selectedItemVisible}`}>
          {defaultValue && !value ? (
            <Typography component="p" id={defaultValue} />
          ) : (
            <Typography component="p" id={currentValue} />
          )}
          {open && (
            <ul className={`${styles.selectList} ${open && styles.selectListVisible}`}>
              {options.map((curr: TOptions) => {
                return (
                  <Typography
                    onClick={() => handleSetValue(curr.value)}
                    component="li"
                    className={`${styles.selectOption} ${value === curr.value && styles.activeLi}`}
                    key={curr.id}
                    id={curr.id}
                  />
                );
              })}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;

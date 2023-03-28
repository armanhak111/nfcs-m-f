/* eslint-disable no-debugger */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCurrentLocale } from '../Store/Selectors/main';

const LocaleClassPrefixes: { [propery: string]: string } = {
  ['en']: 'ENL',
  // ['ge']: 'DEL',
  // ['fr']: 'FRL',
};

export const useDetectCurrentClassWithLocale = (classNamesArr: string[]) => {
  const [multylangClass, setCurrentClass] = useState<string>('');
  const currentLocale = useSelector(getCurrentLocale);

  const searchCurrentClass = (locale: string): any => {
    const currentFounded = classNamesArr.find((current: string, index: number) => {
      if (current.search(LocaleClassPrefixes[locale]) > 0) {
        return classNamesArr[index];
      }
    });

    return currentFounded;
  };

  useEffect(() => {
    if (currentLocale === 'en') {
      setCurrentClass(searchCurrentClass('en'));
    }
    // if (currentLocale === 'ge') {
    //   setCurrentClass(searchCurrentClass('ge'));
    // }
    // if (currentLocale === 'fr') {
    //   setCurrentClass(searchCurrentClass('fr'));
    // }
  }, [currentLocale]);
  return {
    multylangClass,
  };
};

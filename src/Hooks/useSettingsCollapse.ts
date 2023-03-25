import { useState } from 'react';

export const useSettingsCollapse = () => {
  const [currentItem, setCurrentItem] = useState('');
  const [currentHeight, setCurretHeight] = useState(0);
  const collapse = (id: string, headerId: string) => {
    const headerItem: any = document.getElementById(headerId);
    const currentElement: any = document.getElementById(id);
    console.log(currentElement.getBoundingClientRect());
    setCurretHeight(
      currentElement.getBoundingClientRect().top + headerItem.getBoundingClientRect().height
    );
    setCurrentItem(id);
  };
  return {
    currentItem,
    collapse,
    currentHeight,
    setCurretHeight,
  };
};

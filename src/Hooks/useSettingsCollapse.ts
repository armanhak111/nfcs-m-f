import { useState } from 'react';

export const useSettingsCollapse = () => {
  const [currentItem, setCurrentItem] = useState({
    id: '',
    isOpen: false,
  });
  const [currentHeight, setCurretHeight] = useState(0);

  const collapse = (id: string, headerId: string) => {
    const headerItem: any = document.getElementById(headerId);
    const currentElement: any = document.getElementById(id);
    setCurretHeight(
      currentElement.getBoundingClientRect().top + headerItem.getBoundingClientRect().height
    );
    if (currentItem.id === id) {
      setCurrentItem((prev) => ({ id: id, isOpen: !prev.isOpen }));
    } else {
      setCurrentItem({ id: id, isOpen: true });
    }
  };
  return {
    currentItem,
    collapse,
    currentHeight,
    setCurretHeight,
  };
};

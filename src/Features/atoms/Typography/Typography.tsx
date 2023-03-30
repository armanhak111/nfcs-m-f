import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useDetectCurrentClassWithLocale } from '../../../Hooks/useDetectCurrentClassWithLocale';
import { ITypographyProps } from './Typography.types';

const Typography: React.FC<ITypographyProps> = ({
  component = 'div',
  className,
  id = '#',
  defaultMessage,
  value,
  valueMessage,
  multyLangClasses,
  style = {},
  onClick,
  htmlFor,
}) => {
  const Component = component;
  const currentValue = value ? { [value]: valueMessage } : {};
  const hasMultyClasss =
    multyLangClasses?.length && useDetectCurrentClassWithLocale(multyLangClasses);
  return (
    <Component
      onClick={onClick && onClick}
      htmlFor={htmlFor}
      className={hasMultyClasss ? hasMultyClasss?.multylangClass : className}
      style={style}
    >
      {id.includes('.') ? (
        <FormattedMessage values={currentValue} id={id} defaultMessage={defaultMessage} />
      ) : (
        id
      )}
    </Component>
  );
};
export default Typography;

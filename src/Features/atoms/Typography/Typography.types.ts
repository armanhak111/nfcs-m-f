import { CSSProperties } from 'react';

export interface ITypographyProps {
  component?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'label' | 'li';
  className?: string;
  id?: string;
  defaultMessage?: string;
  value?: any;
  valueMessage?: string | number | boolean;
  style?: CSSProperties;
  multyLangClasses?: any[];
  onClick?: () => void;
  htmlFor?: string;
}

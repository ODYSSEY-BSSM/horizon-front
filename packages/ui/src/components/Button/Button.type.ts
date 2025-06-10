import React from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'contained' | 'outlined' | 'ghost' | 'text';
export type ButtonTextVariant = 'BTN_M_20' | 'BTN_M_24' | 'BTN_M_28';

export interface ButtonProps {
  size?: ButtonSize;
  type?: ButtonType;
  text?: string;
  leftIcon?: string;
  rightIcon?: string;
  round?: boolean;
  style?: React.CSSProperties;
  props?: React.HTMLProps<HTMLButtonElement>;
}

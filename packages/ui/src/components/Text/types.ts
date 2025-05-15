import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type TextVariant =
  | 'H_B_28'
  | 'H_B_24'
  | 'H_B_20'
  | 'H_B_16'
  | 'H_B_12'
  | 'T_SB_24'
  | 'T_SB_20'
  | 'T_SB_16'
  | 'T_SB_14'
  | 'T_SB_12'
  | 'B_M_20'
  | 'B_M_16'
  | 'B_M_14'
  | 'B_M_12'
  | 'B_M_8'
  | 'C_SB_12'
  | 'L_M_12'
  | 'P_R_16'
  | 'P_R_12'
  | 'BTN_SB_16'
  | 'BTN_SB_14'
  | 'BTN_SB_12';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant: TextVariant;
  color?: CSSProperties['color'];
  width?: CSSProperties['width'];
  textAlign?: CSSProperties['textAlign'];
  ellipsis?: boolean;
  whiteSpace?: CSSProperties['whiteSpace'];
  tag?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

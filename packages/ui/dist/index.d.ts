import * as _emotion_react_jsx_runtime from '@emotion/react/jsx-runtime';
import { HTMLAttributes, ReactNode, CSSProperties } from 'react';

type TextVariant =
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
interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant: TextVariant;
  color?: CSSProperties['color'];
  width?: CSSProperties['width'];
  textAlign?: CSSProperties['textAlign'];
  ellipsis?: boolean;
  whiteSpace?: CSSProperties['whiteSpace'];
  tag?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

declare const Text: ({
  children,
  variant,
  color,
  width,
  textAlign,
  ellipsis,
  whiteSpace,
  tag,
  ...props
}: TextProps) => _emotion_react_jsx_runtime.JSX.Element;

/**
 * 아이콘 크기 타입
 */
type IconSize = 'small' | 'medium' | 'large';
type IconWeight = 'regular' | 'light';
type IconFill = 'regular' | 'light';
/**
 * Icon 컴포넌트 props
 */
interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Material Symbols 아이콘 이름 */
  name: string;
  /** 아이콘 크기 */
  size?: IconSize;
  /** 아이콘 두께 */
  weight?: IconWeight;
  /** 아이콘 채움 */
  fill?: IconFill;
  /** 접근성: 스크린리더용 레이블 */
  'aria-label'?: string;
  /** 접근성: 장식용 여부 (boolean) */
  'aria-hidden'?: boolean;
}
/**
 * Material Symbols 아이콘 컴포넌트
 */
declare const Icon: ({
  name,
  size,
  weight,
  fill,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) => _emotion_react_jsx_runtime.JSX.Element;

export { Icon, type IconProps, Text };

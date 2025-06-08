import type { HTMLAttributes } from 'react';

export type IconSize = 'small' | 'medium' | 'large';
export type IconWeight = 'regular' | 'light';
export type IconFill = 'regular' | 'light';

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: IconSize;
  weight?: IconWeight;
  fill?: IconFill;
}

export interface StyledIconProps {
  size?: IconSize;
  weight?: IconWeight;
  fill?: IconFill;
}

import type { HTMLAttributes } from 'react';

export type IconVariant =
  | 'Stroke_R_32'
  | 'Stroke_R_28'
  | 'Stroke_R_24'
  | 'Fill_R_32'
  | 'Fill_R_28'
  | 'Fill_R_24'
  | 'Stroke_L_32'
  | 'Stroke_L_28'
  | 'Stroke_L_24'
  | 'Fill_L_32'
  | 'Fill_L_28'
  | 'Fill_L_24';

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  variant: IconVariant;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

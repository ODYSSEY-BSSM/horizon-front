import { CSSProperties, ReactNode } from 'react';

export interface FlexProps {
  children: ReactNode;
  gap?: CSSProperties['gap'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  padding?: CSSProperties['padding'];
  alignItems?: CSSProperties['alignItems'];
  props?: CSSProperties;
}

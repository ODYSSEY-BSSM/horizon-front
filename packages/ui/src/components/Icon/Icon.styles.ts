import { css } from '@emotion/react';
import type { IconVariant } from './Icon.types';
import { icon } from '@odyssey-horizon/design-system';

const baseIconStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${icon.fontFamily.materialSymbols};
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-feature-settings: 'liga';
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
`;

const makeIconStyle = (
  size: keyof typeof icon.iconSize,
  weight: keyof typeof icon.weight,
  fill: keyof typeof icon.fill
) => css`
  ${baseIconStyle};
  font-size: ${icon.iconSize[size]};
  font-variation-settings: 'FILL' ${icon.fill[fill]},
    'wght' ${icon.weight[weight]};
`;

export const getIconStyles = (variant: IconVariant) => {
  const styles: Record<IconVariant, ReturnType<typeof css>> = {
    Stroke_R_32: makeIconStyle('large', 'regular', 'light'),
    Stroke_R_28: makeIconStyle('medium', 'regular', 'light'),
    Stroke_R_24: makeIconStyle('small', 'regular', 'light'),
    Fill_R_32: makeIconStyle('large', 'regular', 'regular'),
    Fill_R_28: makeIconStyle('medium', 'regular', 'regular'),
    Fill_R_24: makeIconStyle('small', 'regular', 'regular'),
    Stroke_L_32: makeIconStyle('large', 'light', 'light'),
    Stroke_L_28: makeIconStyle('medium', 'light', 'light'),
    Stroke_L_24: makeIconStyle('small', 'light', 'light'),
    Fill_L_32: makeIconStyle('large', 'light', 'regular'),
    Fill_L_28: makeIconStyle('medium', 'light', 'regular'),
    Fill_L_24: makeIconStyle('small', 'light', 'regular'),
  };

  return styles[variant] || styles.Stroke_R_24;
};

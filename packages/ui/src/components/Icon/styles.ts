import { css } from '@emotion/react';
import { icon } from '@horizon/design-system';
import type { IconSize, IconWeight, IconFill } from './types';

export const baseIconStyle = css`
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

export const makeIconStyle = (
  size: IconSize,
  weight: IconWeight,
  fill: IconFill
) => css`
  ${baseIconStyle};
  font-size: ${icon.iconSize[size]};
  font-variation-settings: 'FILL' ${icon.fill[fill]},
    'wght' ${icon.weight[weight]};
`;

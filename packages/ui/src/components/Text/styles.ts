import { css } from '@emotion/react';
import type { TextVariant } from './types';
import { font } from '@odyssey-horizon/design-system';

const baseTextStyle = css`
  font-family: ${font.fontFamily.suit};
  line-height: ${font.fontHeight[140]};
  letter-spacing: ${font.letterSpacing[2]};
`;

const makeTextStyle = (
  size: keyof typeof font.fontSize,
  weight: keyof typeof font.fontWeight
) => css`
  ${baseTextStyle};
  font-size: ${font.fontSize[size]};
  font-weight: ${font.fontWeight[weight]};
`;

export const getTextStyles = (variant: TextVariant) => {
  const styles: Record<TextVariant, ReturnType<typeof css>> = {
    H_B_28: makeTextStyle(28, 'bold'),
    H_B_24: makeTextStyle(24, 'bold'),
    H_B_20: makeTextStyle(20, 'bold'),
    H_B_16: makeTextStyle(16, 'bold'),
    H_B_12: makeTextStyle(12, 'bold'),
    T_SB_24: makeTextStyle(24, 'semibold'),
    T_SB_20: makeTextStyle(20, 'semibold'),
    T_SB_16: makeTextStyle(16, 'semibold'),
    T_SB_14: makeTextStyle(14, 'semibold'),
    T_SB_12: makeTextStyle(12, 'semibold'),
    B_M_20: makeTextStyle(20, 'medium'),
    B_M_16: makeTextStyle(16, 'medium'),
    B_M_14: makeTextStyle(14, 'medium'),
    B_M_12: makeTextStyle(12, 'medium'),
    B_M_8: makeTextStyle(8, 'medium'),
    C_SB_12: makeTextStyle(12, 'medium'),
    L_M_12: makeTextStyle(12, 'medium'),
    P_R_16: makeTextStyle(16, 'medium'),
    P_R_12: makeTextStyle(12, 'medium'),
    BTN_SB_28: makeTextStyle(28, 'medium'),
    BTN_SB_24: makeTextStyle(24, 'medium'),
    BTN_SB_20: makeTextStyle(20, 'medium'),
  };

  return styles[variant] || styles.H_B_16;
};

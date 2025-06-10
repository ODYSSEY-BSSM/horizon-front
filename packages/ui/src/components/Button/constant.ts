import { ButtonTextVariant } from './Button.type';
import { colors } from '@odyssey-horizon/design-system';

export const textVariant = {
  small: 'BTN_M_20' as ButtonTextVariant,
  medium: 'BTN_M_24' as ButtonTextVariant,
  large: 'BTN_M_28' as ButtonTextVariant,
};

export const buttonHeight = {
  small: '32px',
  medium: '40px',
  large: '48px',
};

export const buttonPadding = {
  small: '12px',
  medium: '16px',
  large: '20px',
};

export const buttonBackgroundColor = {
  contained: {
    default: colors.primary['500'],
    hover: colors.primary['600'],
    pressed: colors.primary['700'],
  },
  outlined: {
    default: colors.white,
    hover: colors.primary['100'],
    pressed: colors.primary['500'],
  },
  ghost: {
    default: colors.white,
    hover: colors.primary['100'],
    pressed: colors.primary['500'],
  },
  text: {
    default: colors.white,
    hover: colors.white,
    pressed: colors.white,
  },
};

export const buttonTextColor = {
  contained: {
    default: colors.white,
    hover: colors.white,
    pressed: colors.white,
  },
  outlined: {
    default: colors.primary['500'],
    hover: colors.primary['500'],
    pressed: colors.white,
  },
  ghost: {
    default: colors.primary['500'],
    hover: colors.primary['500'],
    pressed: colors.white,
  },
  text: {
    default: colors.black,
    hover: colors.primary['500'],
    pressed: colors.primary['600'],
  },
};

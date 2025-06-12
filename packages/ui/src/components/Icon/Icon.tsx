import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { icon } from '@odyssey-horizon/design-system';
import type { HTMLAttributes } from 'react';

/**
 * 아이콘 크기 타입
 */
type IconSize = 'small' | 'medium' | 'large';
type IconWeight = 'regular' | 'light';
type IconFill = 'regular' | 'light';

/**
 * Icon 컴포넌트 props
 */
export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: IconSize;
  weight?: IconWeight;
  fill?: IconFill;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

const DEFAULT_ICON_PROPS = {
  size: 'medium' as IconSize,
  weight: 'regular' as IconWeight,
  fill: 'regular' as IconFill,
};

export const Icon = ({
  name,
  size = DEFAULT_ICON_PROPS.size,
  weight = DEFAULT_ICON_PROPS.weight,
  fill = DEFAULT_ICON_PROPS.fill,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) => (
  <StyledIcon
    size={size}
    weight={weight}
    fill={fill}
    role={ariaLabel ? 'img' : undefined}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden ?? (!ariaLabel ? true : undefined)}
    {...props}
  >
    {name}
  </StyledIcon>
);

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
  size: IconSize,
  weight: IconWeight,
  fill: IconFill
) => css`
  ${baseIconStyle};
  font-size: ${icon.iconSize[size]};
  font-variation-settings: 'FILL' ${icon.fill[fill]},
    'wght' ${weight === 'regular' ? icon.weight.regular : icon.weight.light};
`;

const StyledIcon = styled.span<{
  size: IconSize;
  weight: IconWeight;
  fill: IconFill;
}>`
  ${({ size, weight, fill }) => makeIconStyle(size, weight, fill)}
`;

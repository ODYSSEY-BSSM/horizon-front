import styled from '@emotion/styled';
import { makeIconStyle } from './styles';
import type { IconProps, StyledIconProps } from './types';

export const Icon = ({
  name,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  size = 'medium',
  weight = 'regular',
  fill = 'regular',
  ...props
}: IconProps) => (
  <StyledIcon
    size={size}
    weight={weight}
    fill={fill}
    role={ariaLabel ? 'img' : undefined}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden ?? (!ariaLabel ? 'true' : undefined)}
    {...props}
  >
    {name}
  </StyledIcon>
);

const StyledIcon = styled.span<StyledIconProps>`
  ${({ size = 'medium', weight = 'regular', fill = 'regular' }) =>
    makeIconStyle(size, weight, fill)}
`;

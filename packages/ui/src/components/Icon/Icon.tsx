import styled from '@emotion/styled';
import type { IconProps } from './Icon.types';
import { getIconStyles } from './Icon.styles';

interface StyledIconProps {
  variant: IconProps['variant'];
}

export const Icon = ({
  name,
  variant,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}: IconProps) => (
  <StyledIcon
    variant={variant}
    role={ariaLabel ? 'img' : undefined}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden ?? (!ariaLabel ? true : undefined)}
    {...props}
  >
    {name}
  </StyledIcon>
);

const StyledIcon = styled.span<StyledIconProps>`
  ${({ variant }) => getIconStyles(variant)}
`;

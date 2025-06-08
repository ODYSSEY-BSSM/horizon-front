import styled from '@emotion/styled';
import { makeIconStyle } from './styles';
import type { IconProps, StyledIconProps } from './types';

export const Icon = ({
  name,
  size = 'medium',
  weight = 'regular',
  fill = 'regular',
  ...props
}: IconProps) => (
  <StyledIcon size={size} weight={weight} fill={fill} {...props}>
    {name}
  </StyledIcon>
);

const StyledIcon = styled.span<StyledIconProps>`
  ${({ size = 'medium', weight = 'regular', fill = 'regular' }) =>
    makeIconStyle(size, weight, fill)}
`;

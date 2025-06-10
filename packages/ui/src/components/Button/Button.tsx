import { ButtonProps, ButtonSize, ButtonType } from './Button.type';
import styled from '@emotion/styled';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { css } from '@emotion/react';
import { colors } from '@odyssey-horizon/design-system';
import {
  buttonBackgroundColor,
  buttonHeight,
  buttonPadding,
  buttonTextColor,
  textVariant,
} from './constant';

export const Button = ({
  size = 'medium',
  type = 'contained',
  round = false,
  text = '',
  leftIcon,
  rightIcon,
  style,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      buttonType={type}
      round={round}
      style={style}
      iconOnly={text.length === 0}
      {...props}
    >
      {leftIcon && <Icon name={leftIcon} size={size} fill="light" />}
      {text && <Text variant={textVariant[size]}>{text}</Text>}
      {rightIcon && <Icon name={rightIcon} size={size} fill="light" />}
    </StyledButton>
  );
};

const makeButtonStyle = (
  size: ButtonSize,
  buttonType: ButtonType,
  round: boolean,
  iconOnly: boolean
) => css`
  border-radius: ${round ? '16px' : '8px'};
  border: ${buttonType == 'outlined'
    ? `1px solid ${colors.primary['500']}`
    : 'none'};
  height: ${buttonHeight[size]};
  width: ${iconOnly ? buttonHeight[size] : 'auto'};
  background-color: ${buttonBackgroundColor[buttonType]['default']};
  color: ${buttonTextColor[buttonType]['default']};
  padding: 0 ${buttonPadding[size]};

  &:hover {
    background-color: ${buttonBackgroundColor[buttonType]['hover']};
    color: ${buttonTextColor[buttonType]['hover']};
  }
  &:active {
    background-color: ${buttonBackgroundColor[buttonType]['pressed']};
    color: ${buttonTextColor[buttonType]['pressed']};
  }
`;

const StyledButton = styled.button<{
  size: ButtonSize;
  buttonType: ButtonType;
  round: boolean;
  iconOnly: boolean;
}>`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  ${({ size, buttonType, round, iconOnly }) =>
    makeButtonStyle(size, buttonType, round, iconOnly)}
`;

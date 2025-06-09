import styled from '@emotion/styled';
import type { TextProps, TextVariant } from './types';
import { getTextStyles } from './styles';

interface StyledTextProps {
  variant: TextVariant;
  ellipsis: boolean;
  color?: string;
  width?: string | number;
  textAlign?: string;
  whiteSpace?: string;
}

export const Text = ({
  children,
  variant,
  color,
  width = 'auto',
  textAlign = 'left',
  ellipsis = false,
  whiteSpace = 'nowrap',
  tag = 'span',
  ...props
}: TextProps) => {
  return (
    <StyledText
      as={tag}
      variant={variant}
      ellipsis={ellipsis}
      color={color}
      width={width}
      textAlign={textAlign}
      whiteSpace={whiteSpace}
      {...props}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.span<StyledTextProps>`
  ${({ variant }) => getTextStyles(variant)}
  ${({ ellipsis }) =>
    ellipsis &&
    `
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
			`}
  color: ${({ color }) => color};
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
  white-space: ${({ whiteSpace }) => whiteSpace};
`;

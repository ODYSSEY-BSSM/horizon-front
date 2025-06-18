import { FlexProps } from './Flex.type';
import styled from '@emotion/styled';

export interface RowProps extends FlexProps {
  gap?: number;
}

export const Row = ({
  children,
  gap,
  width,
  height,
  padding,
  alignItems,
  justifyContent,
  ...props
}: RowProps) => {
  return (
    <StyledRow
      style={{
        gap: gap ? `${gap}px` : undefined,
        width,
        height,
        padding,
        alignItems,
        justifyContent,
        ...props.props,
      }}
    >
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

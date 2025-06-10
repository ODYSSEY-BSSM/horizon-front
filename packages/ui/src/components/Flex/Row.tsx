import { FlexProps } from './Flex.type';
import styled from '@emotion/styled';

export const Row = ({
  children,
  gap,
  width,
  height,
  padding,
  alignItems,
  ...props
}: FlexProps) => {
  return (
    <StyledRow style={{ gap, width, height, padding, alignItems, ...props }}>
      {children}
    </StyledRow>
  );
};

const StyledRow = styled.div`
  display: flex;
`;

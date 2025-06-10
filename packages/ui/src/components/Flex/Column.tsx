import { FlexProps } from './Flex.type';
import styled from '@emotion/styled';

export const Column = ({
  children,
  gap,
  width,
  height,
  padding,
  alignItems,
  ...props
}: FlexProps) => {
  return (
    <StyledColumn style={{ gap, width, height, padding, alignItems, ...props }}>
      {children}
    </StyledColumn>
  );
};

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

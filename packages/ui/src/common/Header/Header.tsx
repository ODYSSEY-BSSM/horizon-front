import styled from '@emotion/styled';
import { colors } from '@odyssey-horizon/design-system/src';
import { Text } from '../../components/Text/Text';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <StyledHeader>
      <Text variant="T_SB_16">{title}</Text>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  padding: 0 40px;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.grayscale['100']};
`;

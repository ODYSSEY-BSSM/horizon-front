import styled from '@emotion/styled';
import { colors } from '@horizon/design-system/src';
import { Row } from '../../components/Flex/Row';
import { Icon } from '../../components/Icon/Icon';
import { Text } from '../../components/Text/Text';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <StyledHeader>
      <Row gap="20px" alignItems="center">
        <Row>
          <Icon
            name="chevron_left"
            style={{ color: colors.grayscale['200'] }}
            size="large"
          />
          <Icon
            name="chevron_right"
            style={{ color: colors.grayscale['200'] }}
            size="large"
          />
        </Row>
        <Text variant="T_SB_16">{title}</Text>
      </Row>
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

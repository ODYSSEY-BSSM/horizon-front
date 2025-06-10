import { Row } from '../../../components/Flex/Row';
import { Text } from '../../../components/Text/Text';
import { colors } from '@odyssey-horizon/design-system/src';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { Icon } from '../../../components/Icon/Icon';

interface SidebarItemProps {
  children: ReactNode;
  icon: string;
  to: string;
}

export const SidebarItem = ({ children, icon, to }: SidebarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <StyledSidebarItem to={to} selected={isActive}>
      <Row gap="8px" alignItems="center">
        <Icon
          name={icon}
          fill="light"
          weight="light"
          style={{
            color: isActive ? colors.primary['500'] : colors.grayscale['600'],
          }}
        />
        <Text
          variant="B_M_14"
          color={isActive ? colors.primary['500'] : colors.grayscale['600']}
        >
          {children}
        </Text>
      </Row>
    </StyledSidebarItem>
  );
};

interface StyledSidebarItemProps {
  selected: boolean;
}

const StyledSidebarItem = styled(Link)<StyledSidebarItemProps>`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ selected }) =>
    selected ? colors.primary['100'] : colors.white};

  &:hover {
    text-decoration: none;
    background-color: ${({ selected }) =>
      selected ? colors.primary['100'] : colors.grayscale['100']};
  }
`;

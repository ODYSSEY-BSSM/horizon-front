import styled from '@emotion/styled';
import { colors } from '@horizon/design-system/src';
import { Row } from '../../components/Flex/Row';
import { Text } from '../../components/Text/Text';
import { Column } from '../../components/Flex/Column';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { Link } from 'react-router-dom';
import { ETC_ITEMS, MAIN_ITEMS } from './constant';

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <LogoBox>
        <Row width="226px">
          <Link to="/">
            <LogoImage src="/assets/horizonLogo.svg" alt="logo" />
          </Link>
        </Row>
      </LogoBox>
      <Column gap="10px" padding="10px 12px">
        <Text
          variant="B_M_12"
          color={colors.grayscale['400']}
          style={{ marginLeft: '8px' }}
        >
          메인
        </Text>
        <Column gap="10px">
          {MAIN_ITEMS.map(({ name, icon, to }) => (
            <SidebarItem icon={icon} to={to}>
              {name}
            </SidebarItem>
          ))}
        </Column>
      </Column>
      <Row height="10px" alignItems="center">
        <Divider />
      </Row>
      <Column gap="10px" padding="10px 12px">
        <Text
          variant="B_M_12"
          color={colors.grayscale['400']}
          style={{ marginLeft: '8px' }}
        >
          기타
        </Text>
        <Column gap="10px">
          {ETC_ITEMS.map(({ name, icon, to }) => (
            <SidebarItem icon={icon} to={to}>
              {name}
            </SidebarItem>
          ))}
        </Column>
      </Column>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  width: 266px;
  height: 100vh;
  background: ${colors.white};
  border-right: 1px solid ${colors.grayscale['100']};
  box-sizing: border-box;
`;

const LogoBox = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid ${colors.grayscale['100']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 144px;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${colors.grayscale['100']};
  width: 100%;
`;

import styled from '@emotion/styled';
import { Header } from '../../common/Header/Header';
import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const AppLayout = ({ children, title = '제목' }: AppLayoutProps) => {
  return (
    <StyledAppLayout>
      <Header title={title} />
      <main>{children}</main>
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px 1fr;

  & > *:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  } /* Header */
  & > *:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  } /* Main */
`;

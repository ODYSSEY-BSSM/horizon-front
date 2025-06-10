import styled from '@emotion/styled';
import { Sidebar } from '../../common/Sidebar/Sidebar';
import { Header } from '../../common/Header/Header';
import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const AppLayout = ({ children, title = '제목' }: AppLayoutProps) => {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header title={title} />
      <main>{children}</main>
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 266px 1fr;
  grid-template-rows: 64px 1fr;

  & > *:nth-child(1) {
    grid-area: 1 / 1 / 3 / 2;
  } /* Sidebar */
  & > *:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  } /* Header */
  & > *:nth-child(3) {
    grid-area: 2 / 2 / 3 / 3;
  } /* Main */
`;

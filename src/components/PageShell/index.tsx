import React from "react";
import styled from "styled-components";

import { PageTitle } from "../PageTitle";

const StyledPageShell = styled.section`
  padding: ${props => props.theme.page.shell.padding};
`;

interface PageShellProps {
  title: string;
  icon: IImageSrc;
  page: IPage;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  title,
  icon,
  page,
  children
}) => (
  <StyledPageShell data-test="page-shell">
    <PageTitle titleText={title} count={page.count} icon={icon} />

    {children}
  </StyledPageShell>
);

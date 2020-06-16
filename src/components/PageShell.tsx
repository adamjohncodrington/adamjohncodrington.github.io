import React from "react";
import styled from "styled-components";

import { PageTitle } from "./PageTitle";

const StyledPageShell = styled.section`
  padding: ${props => props.theme.page.shell.padding};
`;

interface PageShellProps {
  title: string;
  icon: IImageSrc;
  pageData: IPageData;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  title,
  icon,
  pageData,
  children
}) => {
  const { pastCount, futureCount } = pageData;

  return (
    <StyledPageShell data-test="page-shell">
      <PageTitle
        titleText={title}
        pastCount={pastCount}
        futureCount={futureCount}
        icon={icon}
      />

      {children}
    </StyledPageShell>
  );
};

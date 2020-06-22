import React from "react";
import styled from "styled-components";

import { PageTitleComponent } from "../PageTitle";

const StyledPageShell = styled.section`
  padding: ${props => props.theme.page.shell.padding};
`;

interface PageShellProps {
  title: string;
  icon: IImageSrc;
  page: IPageData;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  title,
  icon,
  page,
  children
}) => {
  const { pastCount, futureCount } = page;

  return (
    <StyledPageShell data-test="page-shell">
      <PageTitleComponent
        titleText={title}
        pastCount={pastCount}
        futureCount={futureCount}
        icon={icon}
      />

      {children}
    </StyledPageShell>
  );
};

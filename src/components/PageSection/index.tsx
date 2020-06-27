import React from "react";
import styled, { css } from "styled-components";

import { Disclosure } from "../Disclosure";
import { PageSectionHeader } from "../PageSectionHeader";
import { PageSectionPanel } from "../PageSectionPanel";

const PageSectionContainer = styled.section`
  ${({
    theme: {
      pageSection: { background, boxShadow, borderRadius, padding, margin }
    }
  }) => css`
    background: ${background};
    box-shadow: ${boxShadow};
    border-radius: ${borderRadius};
    padding: 0 ${padding.horizontal};
    margin-bottom: ${margin.bottom};
  `}
`;

export const PageSection: React.FC<IPageSection> = ({
  title,
  icon,
  data,
  count,
  starCount,
  isStatic,
  initiallyExpandedAlways,
  initiallyExpandedOnDesktop,
  onlyHeaderClickable
}) => (
  <PageSectionContainer>
    <Disclosure
      isStatic={isStatic}
      initiallyExpandedAlways={initiallyExpandedAlways}
      initiallyExpandedOnDesktop={initiallyExpandedOnDesktop}
      onlyHeaderClickable={onlyHeaderClickable}
      headerComponent={
        <PageSectionHeader
          title={title}
          count={count}
          starCount={starCount}
          icon={icon}
          dataTest="section-header-container"
        />
      }
    >
      <PageSectionPanel {...data} />
    </Disclosure>
  </PageSectionContainer>
);

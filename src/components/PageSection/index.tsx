import React from "react";
import styled, { css } from "styled-components";

import { Disclosure } from "../Disclosure";
import { PageSectionHeader } from "./PageSectionHeader";
import { PageSectionPanel } from "./PageSectionPanel";

const PageSectionContainer = styled.section(
  ({
    theme: {
      pageSection: { background, boxShadow, borderRadius, padding, margin }
    }
  }) => css`
    background: ${background};
    box-shadow: ${boxShadow};
    border-radius: ${borderRadius};
    padding: 0 ${padding.horizontal};
    margin-bottom: ${margin.bottom};
  `
);

export const PageSection: React.FC<IPageSection> = ({
  title,
  SvgIcon,
  autoExpand,
  data,
  count,
  starCount
}) => {
  return (
    <PageSectionContainer>
      <Disclosure
        autoExpand={autoExpand}
        Header={headerProps => (
          <PageSectionHeader
            {...headerProps}
            title={title}
            count={count}
            starCount={starCount}
            SvgIcon={SvgIcon}
            dataTest="section-header-container"
          />
        )}
        Panel={() => <PageSectionPanel {...data} />}
      />
    </PageSectionContainer>
  );
};

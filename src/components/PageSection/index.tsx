import React from "react";
import styled, { css } from "styled-components";

import { useMediaQueries } from "utils";
import { Disclosure } from "../Disclosure";
import { PageSectionHeader } from "../PageSectionHeader";
import { PageSectionPanel } from "../PageSectionPanel";

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
  icon,
  data,
  count,
  starCount,
  staticAlways,
  staticIf2Columns,
  autoExpandAlways,
  autoExpandIf2Columns,
  onlyHeaderClickable
}) => {
  const { pageUses2Columns } = useMediaQueries();

  return (
    <PageSectionContainer>
      <Disclosure
        isStatic={staticAlways || (pageUses2Columns && staticIf2Columns)}
        autoExpand={
          autoExpandAlways || (pageUses2Columns && autoExpandIf2Columns)
        }
        onlyHeaderClickable={onlyHeaderClickable}
        Header={
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
};

import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "styles";

import { Disclosure } from "../Disclosure";
import { PageSectionHeader } from "./PageSectionHeader";
import { PageSectionPanel } from "./PageSectionPanel";

const { GRAY_LIGHT } = COLORS;

const PageSectionContainer = styled.section(
  ({
    theme: {
      borderRadius,
      pageSection: { background, padding, margin }
    }
  }) => css`
    background: ${background};
    box-shadow: ${`0 0 5px ${GRAY_LIGHT}`};
    border-radius: ${borderRadius};
    padding: 0 ${padding.horizontal};
    margin-bottom: ${margin.bottom};
  `
);

export const PageSection: React.FC<IPageSection> = props => {
  const { autoExpand } = props;
  return (
    <PageSectionContainer>
      <Disclosure
        autoExpand={autoExpand}
        Header={headerProps => (
          <PageSectionHeader {...headerProps} {...props} />
        )}
        Panel={() => <PageSectionPanel {...props} />}
      />
    </PageSectionContainer>
  );
};

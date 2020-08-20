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
      boxShadow,
      borderRadius,
      pageSection: { background, padding, margin }
    }
  }: I_Theme) => css`
    background: ${background};
    box-shadow: ${boxShadow.light};
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

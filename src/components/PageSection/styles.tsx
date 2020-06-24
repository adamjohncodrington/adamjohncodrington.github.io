import styled, { css } from "styled-components";

export const PageSectionContainer = styled.section`
  ${({
    theme: {
      section: { background, boxShadow, borderRadius, padding, margin }
    }
  }) => css`
    background: ${background};
    box-shadow: ${boxShadow};
    border-radius: ${borderRadius};
    padding: 0 ${padding.horizontal};
    margin-bottom: ${margin.bottom};
  `}
`;

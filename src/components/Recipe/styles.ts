import styled, { css } from "styled-components";

import { H3, FlexColumn, FlexRow } from "primitives";
import { CSS } from "styles";

export const RecipeTitle = styled(H3)`
  text-transform: lowercase;
`;

export const RecipePanelContainer = styled.div(
  ({ theme: { recipe } }: I_Theme) => css`
    margin-top: ${recipe.panel.padding.top};

    > * {
      margin-top: ${recipe.panel.children.padding.top};
    }
  `
);

export const RecipeCostsContainer = styled(FlexColumn)`
  text-align: center;
`;

export const RecipePortionCost = styled.span(
  ({ theme: { recipe } }: I_Theme) => css`
    margin-top: ${recipe.portionCost.margin.top};
    ${CSS.FONT_SIZE_75_PERCENT}
  `
);

export const RecipeHeaderContainer = styled(FlexRow)`
  align-items: baseline;

  svg {
    margin-right: 0.5rem;
  }

  .recipe-title {
    flex: 1;
  }
`;

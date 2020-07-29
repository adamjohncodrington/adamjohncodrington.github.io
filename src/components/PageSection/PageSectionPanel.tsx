import React, { FC } from "react";

import { PAGE_SECTION_PANEL_TYPES } from "@constants";
import { Li } from "primitives";
import { shuffleArray } from "utils";

import { Card } from "../Card";
import { MiniCard } from "../MiniCard";
import { PhotoGrid } from "../PhotoGrid";
import { Recipe } from "../Recipe";

import { PageSectionPanelList, StyledComingSoonPlaceholder } from "./styles";

export const PageSectionPanel: FC<IPageSection> = ({
  data: { cards: unshuffledCards, comingSoon, miniCards, recipes, photoGrid },
  shuffle
}) => {
  const cards: Array<ICard> | undefined = unshuffledCards
    ? shuffle
      ? shuffleArray(unshuffledCards)
      : unshuffledCards
    : undefined;

  const pageSectionPanelType: string = recipes
    ? PAGE_SECTION_PANEL_TYPES.RECIPES
    : miniCards
    ? PAGE_SECTION_PANEL_TYPES.MINI_CARDS
    : PAGE_SECTION_PANEL_TYPES.CARDS;

  return comingSoon ? (
    <StyledComingSoonPlaceholder>coming soon</StyledComingSoonPlaceholder>
  ) : photoGrid ? (
    <PhotoGrid {...photoGrid} />
  ) : (
    <PageSectionPanelList pageSectionPanelType={pageSectionPanelType}>
      {cards &&
        cards.map((card: ICard, index: number) => (
          <Card key={index} {...card} />
        ))}

      {miniCards &&
        miniCards.map((miniCard: IMiniCard, index: number) => (
          <MiniCard key={index} {...miniCard} />
        ))}

      {recipes &&
        recipes.map(
          (recipe: IRecipe, index: number) =>
            !recipe.hide && (
              <Li key={index}>
                <Recipe key={index} {...recipe} />
              </Li>
            )
        )}
    </PageSectionPanelList>
  );
};

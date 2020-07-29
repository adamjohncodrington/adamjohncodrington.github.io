import React, { FC } from "react";

import { Li } from "primitives";
import { shuffleArray } from "utils";

import { Card } from "../Card";
import { MiniCard } from "../MiniCard";
import { PhotoGrid } from "../PhotoGrid";
import { Recipe } from "../Recipe";

import { PageSectionPanelList, StyledComingSoonPlaceholder } from "./styles";

export const PageSectionPanel: FC<IPageSection> = ({ panelData, shuffle }) => {
  const { cards, comingSoon, miniCards, recipes, photoGrid } = panelData;

  const CARDS: Array<ICard> | undefined = cards
    ? shuffle
      ? shuffleArray(cards)
      : cards
    : undefined;

  return comingSoon ? (
    <StyledComingSoonPlaceholder>coming soon</StyledComingSoonPlaceholder>
  ) : photoGrid ? (
    <PhotoGrid {...photoGrid} />
  ) : (
    <PageSectionPanelList {...panelData}>
      {CARDS &&
        CARDS.map((card: ICard, index: number) => (
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

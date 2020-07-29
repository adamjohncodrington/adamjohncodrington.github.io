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
          <Li key={index}>
            <Card {...card} />
          </Li>
        ))}

      {miniCards &&
        miniCards.map((miniCard: IMiniCard, index: number) => (
          <Li key={index}>
            <MiniCard {...miniCard} />
          </Li>
        ))}

      {recipes &&
        recipes.map(
          (recipe: IRecipe, index: number) =>
            !recipe.hide && (
              <Li key={index}>
                <Recipe {...recipe} />
              </Li>
            )
        )}
    </PageSectionPanelList>
  );
};

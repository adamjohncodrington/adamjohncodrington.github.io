import React, { FC } from "react";

import { Li } from "primitives";
import { shuffleArrayIf } from "utils";

import { Card } from "../Card";
import { MiniCard } from "../MiniCard";
import { PhotoGrid } from "../PhotoGrid";
import { Recipe } from "../Recipe";

import { PageSectionPanelList, StyledComingSoonPlaceholder } from "./styles";

export const PageSectionPanel: FC<IPageSection> = ({ panelData, shuffle }) => {
  const { cards, comingSoon, miniCards, recipes, photoGrid } = panelData;

  return comingSoon ? (
    <StyledComingSoonPlaceholder>coming soon</StyledComingSoonPlaceholder>
  ) : photoGrid ? (
    <PhotoGrid {...photoGrid} />
  ) : (
    <PageSectionPanelList {...panelData}>
      {cards &&
        shuffleArrayIf(cards, !!shuffle).map((card: ICard, index: number) => (
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

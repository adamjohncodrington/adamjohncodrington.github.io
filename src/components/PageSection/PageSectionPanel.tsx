import React, { FC } from "react";

import { Li } from "primitives";
import { shuffleArray, sortCards, sortMiniCards } from "utils";

import { Card } from "../Card";
import { MiniCard } from "../MiniCard";
import { PhotoGrid } from "../PhotoGrid";
import { Recipe } from "../Recipe";

import {
  PageSectionPanelList,
  StyledHeadlineTextContainer,
  StyledPhotoGridContainer
} from "./styles";

export const PageSectionPanel: FC<PageSectionProps> = ({ data, shuffle }) => {
  const { cards, comingSoon, costs, miniCards, recipes, photoGrid } = data;

  if (comingSoon)
    return (
      <StyledHeadlineTextContainer faded={true}>
        coming soon
      </StyledHeadlineTextContainer>
    );

  if (costs) {
    const { totalCost, unit, unitCost } = costs;
    return (
      <StyledHeadlineTextContainer faded={false}>
        <div>
          <strong>{totalCost}</strong> spent so far
        </div>
        <div>
          (approx <strong>{unitCost}</strong> per {unit})
        </div>
      </StyledHeadlineTextContainer>
    );
  }

  if (photoGrid)
    return (
      <StyledPhotoGridContainer>
        <PhotoGrid {...photoGrid} />
      </StyledPhotoGridContainer>
    );

  return (
    <PageSectionPanelList {...data}>
      {cards &&
        (shuffle ? shuffleArray(cards) : sortCards(cards)).map(
          (card: CardProps, i: number) => (
            <Li key={i}>
              <Card {...card} />
            </Li>
          )
        )}

      {miniCards &&
        sortMiniCards(miniCards).map((miniCard: MiniCardProps, i: number) => (
          <Li key={i}>
            <MiniCard {...miniCard} />
          </Li>
        ))}

      {recipes &&
        recipes.map(
          (recipe: IRecipe, i: number) =>
            !recipe.hide && (
              <Li key={i}>
                <Recipe {...recipe} />
              </Li>
            )
        )}
    </PageSectionPanelList>
  );
};

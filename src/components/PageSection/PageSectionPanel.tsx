import React, { FC } from "react";

import { Li } from "primitives";
import { shuffleArray, sortCards, sortMiniCards } from "utils";

import { Card } from "../Card";
import { MiniCard } from "../MiniCard";
import { PhotoGrid } from "../PhotoGrid";
import { Recipe } from "../Recipe";

import { PageSectionPanelList, StyledHeadlineTextContainer } from "./styles";

export const PageSectionPanel: FC<IPageSection> = ({ data, shuffle }) => {
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

  if (photoGrid) return <PhotoGrid {...photoGrid} />;

  return (
    <PageSectionPanelList {...data}>
      {cards &&
        (shuffle ? shuffleArray(cards) : sortCards(cards)).map(
          (card: ICard, index: number) => (
            <Li key={index}>
              <Card {...card} />
            </Li>
          )
        )}

      {miniCards &&
        sortMiniCards(miniCards).map((miniCard: IMiniCard, index: number) => (
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

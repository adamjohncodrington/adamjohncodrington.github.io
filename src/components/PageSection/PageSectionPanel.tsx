import React, { FC } from "react";

import { Li } from "primitives";
import { shuffleArray, sortCards, sortMiniCards } from "utils";

import { Card } from "../Card";
import { MiniCard } from "../MiniCard";
import { PhotoGrid } from "../PhotoGrid";
import { Recipe } from "../Recipe";

import { PageSectionPanelList, StyledHeadlineTextContainer } from "./styles";

export const PageSectionPanel: FC<IPageSection> = ({ panelData, shuffle }) => {
  const { cards, headline, miniCards, recipes, photoGrid } = panelData;

  if (headline) {
    const { faded, text, subText } = headline;
    return (
      <StyledHeadlineTextContainer faded={!!faded}>
        <div>{text}</div>
        {subText && <div>({subText})</div>}
      </StyledHeadlineTextContainer>
    );
  }

  return photoGrid ? (
    <PhotoGrid {...photoGrid} />
  ) : (
    <PageSectionPanelList {...panelData}>
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

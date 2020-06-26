import React from "react";

import { Li } from "primitives";

import { CountedListItem } from "../CountedListItem";
import { GigCard } from "../GigCard";
import { RecipeCard } from "../RecipeCard";
import { TheatreCard } from "../TheatreCard";
import { TravelCard } from "../TravelCard";
import { VinylCard } from "../VinylCard";

import { PageSectionList, RecipeGroupList } from "./styles";

export const PageSectionPanel: React.FC<IPageSectionDataTypes> = ({
  countedItems,
  gigCards,
  recipeCards,
  theatreCards,
  travelCards,
  vinylCards
}) => {
  const extraVerticalPaddingBetweenListItems: boolean = !!(
    gigCards ||
    theatreCards ||
    travelCards ||
    vinylCards
  );

  if (recipeCards)
    return (
      <RecipeGroupList>
        {recipeCards.map(
          (recipeCard: IRecipeCard, index: number) =>
            !recipeCard.hide && (
              <Li key={index}>
                <RecipeCard key={index} {...recipeCard} />
              </Li>
            )
        )}
      </RecipeGroupList>
    );

  return (
    <PageSectionList
      extraVerticalPaddingBetweenListItems={
        extraVerticalPaddingBetweenListItems
      }
    >
      {gigCards &&
        gigCards.map((gigCard: IGigCard, index: number) => (
          <Li key={index}>
            <GigCard {...gigCard} />
          </Li>
        ))}

      {theatreCards &&
        theatreCards.map((theateCard: ITheatreCard, index: number) => (
          <Li key={index}>
            <TheatreCard {...theateCard} />
          </Li>
        ))}

      {travelCards &&
        travelCards.map((travelCard: ITravelCard, index: number) => (
          <Li key={index}>
            <TravelCard {...travelCard} />
          </Li>
        ))}

      {vinylCards &&
        vinylCards.map((vinylCard: IVinylCard, index: number) => (
          <Li key={index}>
            <VinylCard {...vinylCard} />
          </Li>
        ))}

      {countedItems &&
        countedItems.map((countedListItem: ICountedItem, index: number) => (
          <CountedListItem key={index} {...countedListItem} />
        ))}
    </PageSectionList>
  );
};

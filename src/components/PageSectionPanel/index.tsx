import React from "react";

import { PAGE_SECTION_PANEL_TYPES } from "@constants";
import { Li } from "primitives";

import { CountedListItem } from "../CountedListItem";
import { GigCard } from "../GigCard";
import { RecipeCard } from "../RecipeCard";
import { TheatreCard } from "../TheatreCard";
import { TravelCard } from "../TravelCard";
import { VinylCard } from "../VinylCard";

import { PageSectionPanelList } from "./styles";

export const PageSectionPanel: React.FC<IPageSectionDataTypes> = ({
  countedItems,
  gigCards,
  recipeCards,
  theatreCards,
  travelCards,
  vinylCards
}) => {
  const pageSectionPanelType: string = !!recipeCards
    ? PAGE_SECTION_PANEL_TYPES.RECIPE_CARDS
    : !!countedItems
    ? PAGE_SECTION_PANEL_TYPES.COUNTED_LIST
    : PAGE_SECTION_PANEL_TYPES.REGULAR_CARDS;

  return (
    <PageSectionPanelList pageSectionPanelType={pageSectionPanelType}>
      {recipeCards &&
        recipeCards.map(
          (recipeCard: IRecipeCard, index: number) =>
            !recipeCard.hide && (
              <Li key={index}>
                <RecipeCard key={index} {...recipeCard} />
              </Li>
            )
        )}

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
    </PageSectionPanelList>
  );
};

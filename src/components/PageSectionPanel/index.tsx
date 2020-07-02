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

interface IPageSectionPanel extends IPageSectionDataTypes {
  isLeaderboard?: boolean;
}

export const PageSectionPanel: React.FC<IPageSectionPanel> = ({
  isLeaderboard,
  countedListItems,
  gigCards,
  recipeCards,
  theatreCards,
  travelCards,
  vinylCards
}) => {
  const pageSectionPanelType: string = !!recipeCards
    ? PAGE_SECTION_PANEL_TYPES.RECIPE_CARDS
    : !!countedListItems
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

      {countedListItems &&
        countedListItems.map(
          (countedListItem: ICountedListItem, index: number) => (
            <CountedListItem key={index} {...countedListItem} />
          )
        )}
    </PageSectionPanelList>
  );
};

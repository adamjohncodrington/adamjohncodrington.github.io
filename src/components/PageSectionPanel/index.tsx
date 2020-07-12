import React from "react";

import { PAGE_SECTION_PANEL_TYPES } from "@constants";
import { Li } from "primitives";
import {
  getGigCardSubtitle,
  getGigCardTitle,
  getTheatreCardSubtitle,
  getTheatreCardTitle,
  getTravelCardSubtitle,
  getTravelCardTitle,
  moveTheSuffixToPrefix,
  getCountdownText,
  getDatesText,
  getDateText
} from "utils";

import { CountedListItem } from "../CountedListItem";
import { EventCard } from "../EventCard";
import { RecipeCard } from "../RecipeCard";
import { VinylCard } from "../VinylCard";

import { PageSectionPanelList } from "./styles";

export const PageSectionPanel: React.FC<IPageSectionDataTypes> = ({
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
        gigCards.map((gigCard: IGigCard, index: number) => {
          const { venue, favourite, company, dates, ticketType } = gigCard;
          return (
            <Li key={index}>
              <EventCard
                title={getGigCardTitle(gigCard)}
                subtitle={getGigCardSubtitle(gigCard)}
                body={moveTheSuffixToPrefix(venue.name)}
                favourite={favourite}
                company={company}
                dateText={getDatesText(dates)}
                countdownText={getCountdownText(dates[0])}
                note={ticketType}
              />
            </Li>
          );
        })}

      {theatreCards &&
        theatreCards.map((theatreCard: ITheatreCard, index: number) => {
          const { favourite, company, theatre, date } = theatreCard;
          return (
            <Li key={index}>
              <EventCard
                title={getTheatreCardTitle(theatreCard)}
                subtitle={getTheatreCardSubtitle(theatreCard)}
                body={theatre.name}
                favourite={favourite}
                company={company}
                dateText={getDateText(date)}
              />
            </Li>
          );
        })}

      {travelCards &&
        travelCards.map((travelCard: ITravelCard, index: number) => {
          const { favourite, company, dates, photos } = travelCard;
          return (
            <Li key={index}>
              <EventCard
                title={getTravelCardTitle(travelCard)}
                subtitle={getTravelCardSubtitle(travelCard)}
                favourite={favourite}
                company={company}
                dateText={getDatesText(dates)}
                photos={photos}
              />
            </Li>
          );
        })}

      {vinylCards &&
        vinylCards.map(
          (vinylCard: IVinylCard | undefined, index: number) =>
            vinylCard && (
              <Li key={index}>
                <VinylCard {...vinylCard} />
              </Li>
            )
        )}

      {countedListItems &&
        countedListItems.map(
          (countedListItem: ICountedListItem, index: number) => (
            <CountedListItem key={index} {...countedListItem} />
          )
        )}
    </PageSectionPanelList>
  );
};

import React, { FC } from "react";

import { PAGE_SECTION_PANEL_TYPES } from "@constants";
import { Li } from "primitives";
import {
  getGigSubtitle,
  getGigTitle,
  getTheatreVisitSubtitle,
  getTheatreVisitTitle,
  getTripSubtitle,
  getTripTitle,
  moveTheSuffixToPrefix,
  getCountdownText,
  getDatesText,
  getDateText,
  getTripBody
} from "utils";

import { CountedListItem } from "../CountedListItem";
import { EventCard } from "../EventCard";
import { RecipeCard } from "../RecipeCard";
import { VinylCard } from "../VinylCard";

import { PageSectionPanelList } from "./styles";

export const PageSectionPanel: FC<IPageSectionDataTypes> = ({
  countedListItems,
  gigs,
  recipes,
  theatreVisits,
  trips,
  vinyls
}) => {
  const pageSectionPanelType: string = recipes
    ? PAGE_SECTION_PANEL_TYPES.RECIPE_CARDS
    : countedListItems
    ? PAGE_SECTION_PANEL_TYPES.COUNTED_LIST
    : PAGE_SECTION_PANEL_TYPES.REGULAR_CARDS;

  return (
    <PageSectionPanelList pageSectionPanelType={pageSectionPanelType}>
      {recipes &&
        recipes.map(
          (recipe: IRecipe, index: number) =>
            !recipe.hide && (
              <Li key={index}>
                <RecipeCard key={index} {...recipe} />
              </Li>
            )
        )}

      {gigs &&
        gigs.map((gig: IGig, index: number) => {
          const { venue, favourite, company, dates, ticketType } = gig;
          return (
            <Li key={index}>
              <EventCard
                title={getGigTitle(gig)}
                subtitle={getGigSubtitle(gig)}
                body={moveTheSuffixToPrefix(venue.name)}
                secondaryBody={getDatesText(dates)}
                favourite={favourite}
                company={company}
                countdownText={getCountdownText(dates[0])}
                note={ticketType}
              />
            </Li>
          );
        })}

      {theatreVisits &&
        theatreVisits.map((theatreVisit: ITheatreVisit, index: number) => {
          const { favourite, company, theatre, date } = theatreVisit;
          return (
            <Li key={index}>
              <EventCard
                title={getTheatreVisitTitle(theatreVisit)}
                subtitle={getTheatreVisitSubtitle(theatreVisit)}
                body={theatre.name}
                secondaryBody={getDateText(date)}
                favourite={favourite}
                company={company}
              />
            </Li>
          );
        })}

      {trips &&
        trips.map((trip: ITrip, index: number) => {
          const { favourite, company, dates, photos } = trip;
          return (
            <Li key={index}>
              <EventCard
                title={getTripTitle(trip)}
                subtitle={getTripSubtitle(trip)}
                secondaryBody={getTripBody(trip)}
                favourite={favourite}
                company={company}
                body={getDatesText(dates)}
                photos={photos}
              />
            </Li>
          );
        })}

      {vinyls &&
        vinyls.map(
          (vinyl: IVinyl | undefined, index: number) =>
            vinyl && (
              <Li key={index}>
                <VinylCard {...vinyl} />
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

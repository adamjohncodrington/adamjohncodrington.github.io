import React, { FC } from "react";

import { PAGE_SECTION } from "@constants";
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
import { PhotoGrid } from "../PhotoGrid";
import { EventCard } from "../EventCard";
import { RecipeCard } from "../RecipeCard";
import { VinylCard } from "../VinylCard";
import { YouTubeVideo } from "../YouTubeVideo";

import { PageSectionPanelList, StyledComingSoonPlaceholder } from "./styles";

export const PageSectionPanel: FC<IPageSectionDataTypes> = ({
  countedListItems,
  gigs,
  recipes,
  theatreVisits,
  trips,
  vinyls,
  photoGrid,
  videos,
  comingSoon
}) => {
  const pageSectionPanelType: string = recipes
    ? PAGE_SECTION.PANEL_TYPES.RECIPE_CARDS
    : countedListItems
    ? PAGE_SECTION.PANEL_TYPES.COUNTED_LIST
    : PAGE_SECTION.PANEL_TYPES.REGULAR;

  if (comingSoon)
    return (
      <StyledComingSoonPlaceholder>coming soon</StyledComingSoonPlaceholder>
    );

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
          const { venue, dates, ticketType } = gig;
          return (
            <Li key={index}>
              <EventCard
                {...gig}
                title={getGigTitle(gig)}
                subtitle={getGigSubtitle(gig)}
                body={moveTheSuffixToPrefix(venue.name)}
                secondaryBody={getDatesText(dates)}
                countdownText={getCountdownText(dates[0])}
                note={ticketType}
              />
            </Li>
          );
        })}

      {theatreVisits &&
        theatreVisits.map((theatreVisit: ITheatreVisit, index: number) => (
          <Li key={index}>
            <EventCard
              {...theatreVisit}
              title={getTheatreVisitTitle(theatreVisit)}
              subtitle={getTheatreVisitSubtitle(theatreVisit)}
              body={theatreVisit.theatre.name}
              secondaryBody={getDateText(theatreVisit.date)}
            />
          </Li>
        ))}

      {trips &&
        trips.map((trip: ITripLeg, index: number) => (
          <Li key={index}>
            <EventCard
              {...trip}
              title={getTripTitle(trip)}
              subtitle={getTripSubtitle(trip)}
              secondaryBody={getTripBody(trip)}
              body={getDatesText(trip.dates)}
            />
          </Li>
        ))}

      {vinyls &&
        vinyls.map(
          (vinyl: IVinyl, index: number) =>
            vinyl && (
              <Li key={index}>
                <VinylCard {...vinyl} />
              </Li>
            )
        )}

      {photoGrid && <PhotoGrid {...photoGrid} />}

      {videos &&
        videos.map((video: IVideo, index: number) => (
          <YouTubeVideo key={index} {...video} />
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

import React, { FC } from "react";

import { PAGE_SECTION_PANEL_TYPES } from "@constants";
import { Li } from "primitives";
import {
  // getTheatreVisitSubtitle,
  getTheatreVisitTitle,
  // getTripSubtitle,
  getTripTitle,
  moveTheSuffixToPrefix,
  getCountdownText,
  getDatesText,
  getDateText,
  getTripBody,
  getMusicianStageNameAtTime
} from "utils";

import { CountedListItem } from "../CountedListItem";
import { PhotoGrid } from "../PhotoGrid";
import { Card } from "../Card";
import { Recipe } from "../Recipe";
import { VideoCards } from "../VideoCards";

import { PageSectionPanelList, StyledComingSoonPlaceholder } from "./styles";

const { COUNTED_LIST_ITEMS, RECIPES, CARDS } = PAGE_SECTION_PANEL_TYPES;

export const PageSectionPanel: FC<IPageSectionDataTypes> = ({
  countedListItems,
  gigsAndFestivals,
  recipes,
  theatreVisits,
  trips,
  vinylCards,
  photoGrid,
  videoCards,
  comingSoon
}) => {
  const pageSectionPanelType: string = recipes
    ? RECIPES
    : countedListItems
    ? COUNTED_LIST_ITEMS
    : CARDS;

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
                <Recipe key={index} {...recipe} />
              </Li>
            )
        )}

      {gigsAndFestivals &&
        gigsAndFestivals.map((gigOrFestival: IGigOrFestival, index: number) => {
          const { venue, dates, ticketType } = gigOrFestival;
          return (
            <Li key={index}>
              <Card
                {...gigOrFestival}
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
            <Card
              {...theatreVisit}
              title={getTheatreVisitTitle(theatreVisit)}
              // subtitle={getTheatreVisitSubtitle(theatreVisit)}
              body={moveTheSuffixToPrefix(theatreVisit.theatre.name)}
              secondaryBody={getDateText(theatreVisit.date)}
            />
          </Li>
        ))}

      {trips &&
        trips.map((trip: ITripLeg, index: number) => (
          <Li key={index}>
            <Card
              {...trip}
              title={getTripTitle(trip)}
              // subtitle={getTripSubtitle(trip)}
              secondaryBody={getTripBody(trip)}
              body={getDatesText(trip.dates)}
            />
          </Li>
        ))}

      {vinylCards &&
        vinylCards.vinyls.map(
          (
            {
              title,
              musician,
              year,
              artwork,
              hideYear,
              appleMusicId
            }: IVinylCard,
            index: number
          ) => (
            <Li key={index}>
              <Card
                title={title}
                subtitle={moveTheSuffixToPrefix(
                  getMusicianStageNameAtTime({ musician, year })
                )}
                body={hideYear ? undefined : year.toString()}
                company={[]}
                headerPhoto={{
                  ...artwork,
                  href: "https://music.apple.com/gb/album/" + appleMusicId
                }}
              />
            </Li>
          )
        )}

      {photoGrid && <PhotoGrid {...photoGrid} />}

      {videoCards && <VideoCards videoCards={videoCards} />}

      {countedListItems &&
        countedListItems.map(
          (countedListItem: ICountedListItem, index: number) => (
            <CountedListItem key={index} {...countedListItem} />
          )
        )}
    </PageSectionPanelList>
  );
};

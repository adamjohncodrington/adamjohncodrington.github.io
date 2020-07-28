import React, { FC } from "react";

import { PAGE_SECTION_PANEL_TYPES } from "@constants";
import { Li } from "primitives";
//TODO: we should not be importing factories at this UI level!!!
import {
  mapMusicEventsToCards,
  mapPoleRoutinesToCards,
  mapTheatreVisitsToCards,
  mapTripLegsToCards,
  mapTravelVideosToCards,
  mapAlbumsToCards
} from "data-factories";
import { shuffleArray } from "utils";

import { MiniCard } from "../MiniCard";
import { PhotoGrid } from "../PhotoGrid";
import { Card } from "../Card";
import { Recipe } from "../Recipe";
import { VideoCard } from "../Card/VideoCard";

import { PageSectionPanelList, StyledComingSoonPlaceholder } from "./styles";

export const PageSectionPanel: FC<IPageSection> = ({
  data: {
    // PANEL TYPES
    cards,
    miniCards,
    recipes,
    photoGrid,

    // DATA TYPES
    poleRoutines,
    musicEvents,
    travelVideos,
    theatreVisits,
    tripLegs,
    vinyls,
    videoCards,
    comingSoon
  },
  shuffle
}) => {
  const pageSectionPanelType: string = recipes
    ? PAGE_SECTION_PANEL_TYPES.RECIPES
    : miniCards
    ? PAGE_SECTION_PANEL_TYPES.MINI_CARDS
    : PAGE_SECTION_PANEL_TYPES.CARDS;

  if (comingSoon)
    return (
      <StyledComingSoonPlaceholder>coming soon</StyledComingSoonPlaceholder>
    );

  const CARDS_TOO_LATE: Array<ICard> | undefined = musicEvents
    ? mapMusicEventsToCards(musicEvents)
    : poleRoutines
    ? mapPoleRoutinesToCards(poleRoutines)
    : theatreVisits
    ? mapTheatreVisitsToCards(theatreVisits)
    : tripLegs
    ? mapTripLegsToCards(tripLegs)
    : vinyls
    ? mapAlbumsToCards(vinyls)
    : travelVideos
    ? mapTravelVideosToCards(travelVideos)
    : undefined;

  const CARDS: Array<ICard> | undefined = CARDS_TOO_LATE
    ? shuffle
      ? shuffleArray(CARDS_TOO_LATE)
      : CARDS_TOO_LATE
    : undefined;

  const MINI_CARDS: Array<IMiniCard> | undefined = miniCards
    ? shuffle
      ? shuffleArray(miniCards)
      : miniCards
    : undefined;

  return (
    <PageSectionPanelList pageSectionPanelType={pageSectionPanelType}>
      {CARDS &&
        CARDS.map((card: ICard, index: number) => (
          <Li key={index}>
            <Card {...card} />
          </Li>
        ))}
      {videoCards &&
        videoCards.map((videoCard: IVideoCard, index: number) => (
          <Li key={index}>
            <VideoCard {...videoCard} />
          </Li>
        ))}
      {photoGrid && <PhotoGrid {...photoGrid} />}

      {/* BELOW IS WHAT WE WANT THIS FILE REDUCED TO */}
      {cards &&
        cards.map((card: ICard, index: number) => (
          <Card key={index} {...card} />
        ))}

      {MINI_CARDS &&
        MINI_CARDS.map((miniCard: IMiniCard, index: number) => (
          <MiniCard key={index} {...miniCard} />
        ))}

      {recipes &&
        recipes.map(
          (recipe: IRecipe, index: number) =>
            !recipe.hide && (
              <Li key={index}>
                <Recipe key={index} {...recipe} />
              </Li>
            )
        )}
    </PageSectionPanelList>
  );
};

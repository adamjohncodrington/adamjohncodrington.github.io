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

import { MiniCard } from "../MiniCard";
import { PhotoGrid } from "../PhotoGrid";
import { Card } from "../Card";
import { Recipe } from "../Recipe";
import { VideoCard } from "../Card/VideoCard";

import { PageSectionPanelList, StyledComingSoonPlaceholder } from "./styles";

const { MINI_CARDS, RECIPES, CARDS } = PAGE_SECTION_PANEL_TYPES;

export const PageSectionPanel: FC<IPageSection> = ({
  data: {
    // PANEL TYPES
    cards,
    miniCards,
    recipes,

    // DATA TYPES
    poleRoutines,
    musicEvents,
    travelVideos,
    theatreVisits,
    tripLegs,
    vinyls,
    photoGrid,
    videoCards,
    comingSoon
  }
}) => {
  const pageSectionPanelType: string = recipes
    ? RECIPES
    : miniCards
    ? MINI_CARDS
    : CARDS;

  if (comingSoon)
    return (
      <StyledComingSoonPlaceholder>coming soon</StyledComingSoonPlaceholder>
    );

  const CARD_madetoolate: Array<ICard> | undefined = musicEvents
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

  return (
    <PageSectionPanelList pageSectionPanelType={pageSectionPanelType}>
      {CARD_madetoolate &&
        CARD_madetoolate.map((card: ICard, index: number) => (
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

      {miniCards &&
        miniCards.map((miniCard: IMiniCard, index: number) => (
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

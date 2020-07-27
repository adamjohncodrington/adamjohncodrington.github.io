import React, { FC } from "react";

import { PAGE_SECTION_PANEL_TYPES } from "@constants";
import { Li } from "primitives";
import {
  mapMusicEventToCard,
  mapTheatreVisitToCard,
  mapTripLegToCard,
  mapAlbumCardToCard
} from "utils";

import { MiniCard } from "../MiniCard";
import { PhotoGrid } from "../PhotoGrid";
import { Card } from "../Card";
import { Recipe } from "../Recipe";
import { VideoCard } from "../Card/VideoCard";

import { PageSectionPanelList, StyledComingSoonPlaceholder } from "./styles";

const { MINI_CARDS, RECIPES, CARDS } = PAGE_SECTION_PANEL_TYPES;

export const PageSectionPanel: FC<IPageSection> = ({
  data: {
    miniCards,

    musicEvents,
    recipes,
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

  const cardsMadeTooLate: Array<ICard> | undefined = musicEvents
    ? musicEvents.map(
        (musicEvent: IMusicEvent): ICard => mapMusicEventToCard(musicEvent)
      )
    : theatreVisits
    ? theatreVisits.map(
        (theatreVisit: ITheatreVisit): ICard =>
          mapTheatreVisitToCard(theatreVisit)
      )
    : tripLegs
    ? tripLegs.map((tripLeg: ITripLeg): ICard => mapTripLegToCard(tripLeg))
    : vinyls
    ? vinyls.map(
        (vinylCard: IAlbumCard): ICard => mapAlbumCardToCard(vinylCard)
      )
    : undefined;

  return (
    <PageSectionPanelList pageSectionPanelType={pageSectionPanelType}>
      {cardsMadeTooLate &&
        cardsMadeTooLate.map((card: ICard, index: number) => (
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

      {recipes &&
        recipes.map(
          (recipe: IRecipe, index: number) =>
            !recipe.hide && (
              <Li key={index}>
                <Recipe key={index} {...recipe} />
              </Li>
            )
        )}

      {miniCards &&
        miniCards.map((miniCard: IMiniCard, index: number) => (
          <MiniCard key={index} {...miniCard} />
        ))}

      {photoGrid && <PhotoGrid {...photoGrid} />}
    </PageSectionPanelList>
  );
};

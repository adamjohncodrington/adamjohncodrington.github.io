import React, { FC } from "react";

import { PAGE_SECTION_PANEL_TYPES } from "@constants";
import { Li } from "primitives";
import {
  mapGigOrFestivalToCard,
  mapTheatreVisitToCard,
  mapTripLegToCard,
  mapVinylCardToCard
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
    gigsAndFestivals,
    recipes,
    theatreVisits,
    tripLegs,
    vinylCards,
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

  const cards: Array<ICard> | undefined = gigsAndFestivals
    ? gigsAndFestivals.map(
        (gigOrFestival: IGigOrFestival): ICard =>
          mapGigOrFestivalToCard(gigOrFestival)
      )
    : theatreVisits
    ? theatreVisits.map(
        (theatreVisit: ITheatreVisit): ICard =>
          mapTheatreVisitToCard(theatreVisit)
      )
    : tripLegs
    ? tripLegs.map((tripLeg: ITripLeg): ICard => mapTripLegToCard(tripLeg))
    : vinylCards
    ? vinylCards.vinyls.map(
        (vinylCard: IVinylCard): ICard => mapVinylCardToCard(vinylCard)
      )
    : undefined;

  return (
    <PageSectionPanelList pageSectionPanelType={pageSectionPanelType}>
      {cards &&
        cards.map((card: ICard, index: number) => (
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

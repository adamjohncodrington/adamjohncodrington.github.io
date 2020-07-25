import React, { FC } from "react";

import { PAGE_SECTION_PANEL_TYPES } from "@constants";
import { Li } from "primitives";
import {
  mapGigOrFestivalToCard,
  mapTheatreVisitToCard,
  mapTripLegToCard,
  mapVinylCardToCard
} from "utils";

import { BasicListItem } from "../BasicListItem";
import { PhotoGrid } from "../PhotoGrid";
import { Card } from "../Card";
import { Recipe } from "../Recipe";
import { VideoCards } from "../VideoCards";

import { PageSectionPanelList, StyledComingSoonPlaceholder } from "./styles";

const { COUNTED_LIST_ITEMS, RECIPES, CARDS } = PAGE_SECTION_PANEL_TYPES;

export const PageSectionPanel: FC<IPageSectionDataTypes> = ({
  basicListItems,
  gigsAndFestivals,
  recipes,
  theatreVisits,
  tripLegs,
  vinylCards,
  photoGrid,
  videoCards,
  comingSoon
}) => {
  const pageSectionPanelType: string = recipes
    ? RECIPES
    : basicListItems
    ? COUNTED_LIST_ITEMS
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
      {videoCards && <VideoCards videoCards={videoCards} />}

      {recipes &&
        recipes.map(
          (recipe: IRecipe, index: number) =>
            !recipe.hide && (
              <Li key={index}>
                <Recipe key={index} {...recipe} />
              </Li>
            )
        )}

      {basicListItems &&
        basicListItems.map((basicListItem: IBasicListItem, index: number) => (
          <BasicListItem key={index} {...basicListItem} />
        ))}

      {photoGrid && <PhotoGrid {...photoGrid} />}
    </PageSectionPanelList>
  );
};

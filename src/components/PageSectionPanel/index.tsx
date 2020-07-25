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
  trips,
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

      {basicListItems &&
        basicListItems.map((basicListItem: IBasicListItem, index: number) => (
          <BasicListItem key={index} {...basicListItem} />
        ))}

      {gigsAndFestivals &&
        gigsAndFestivals.map((gigOrFestival: IGigOrFestival, index: number) => (
          <Li key={index}>
            <Card {...mapGigOrFestivalToCard(gigOrFestival)} />
          </Li>
        ))}

      {theatreVisits &&
        theatreVisits.map((theatreVisit: ITheatreVisit, index: number) => (
          <Li key={index}>
            <Card {...mapTheatreVisitToCard(theatreVisit)} />
          </Li>
        ))}

      {trips &&
        trips.map((tripLeg: ITripLeg, index: number) => (
          <Li key={index}>
            <Card {...mapTripLegToCard(tripLeg)} />
          </Li>
        ))}

      {vinylCards &&
        vinylCards.vinyls.map((vinylCard: IVinylCard, index: number) => (
          <Li key={index}>
            <Card {...mapVinylCardToCard(vinylCard)} />
          </Li>
        ))}

      {photoGrid && <PhotoGrid {...photoGrid} />}

      {videoCards && <VideoCards videoCards={videoCards} />}
    </PageSectionPanelList>
  );
};

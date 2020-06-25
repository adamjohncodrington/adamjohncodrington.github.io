import React from "react";

import { CountedList } from "../CountedList";
import { Disclosure } from "../Disclosure";
import { GigCardList } from "../GigCardList";
import { PageSectionHeader } from "../PageSectionHeader";
import { RecipeCardList } from "../RecipeCardList";
import { TheatreCardList } from "../TheatreCardList";
import { TravelCardList } from "../TravelCardList";
import { VinylCardList } from "../VinylCardList";

import { PageSectionContainer } from "./styles";

export const PageSection: React.FC<IPageSection> = ({
  title,
  icon,
  data: {
    countedItems,
    gigCards,
    recipeCards,
    theatreCards,
    travelCards,
    vinylCards
  },
  count,
  starredCount,
  isStatic,
  initiallyExpandedAlways,
  initiallyExpandedOnDesktop,
  onlyHeaderClickable
}) => (
  <PageSectionContainer>
    <Disclosure
      isStatic={isStatic}
      initiallyExpandedAlways={initiallyExpandedAlways}
      initiallyExpandedOnDesktop={initiallyExpandedOnDesktop}
      onlyHeaderClickable={onlyHeaderClickable}
      headerComponent={
        <PageSectionHeader
          text={title}
          count={count}
          starredCount={starredCount}
          icon={icon}
          dataTest="disclosure-header"
        />
      }
    >
      <section data-test="page-section-body">
        {countedItems && <CountedList countedItems={countedItems} />}
        {gigCards && <GigCardList gigCards={gigCards} />}
        {recipeCards && <RecipeCardList recipeCards={recipeCards} />}
        {theatreCards && <TheatreCardList theatreCards={theatreCards} />}
        {travelCards && <TravelCardList travelCards={travelCards} />}
        {vinylCards && <VinylCardList vinylCards={vinylCards} />}
      </section>
    </Disclosure>
  </PageSectionContainer>
);

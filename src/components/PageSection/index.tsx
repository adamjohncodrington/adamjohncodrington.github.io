import React from "react";

import { PAGE_SECTION_TYPES } from "../../constants";

import { EventCard } from "../EventCard";
import { PageSectionHeader } from "./PageSectionHeader";
import { RecipeCard } from "../RecipeCard";
import { CountedListItem } from "../CountedListItem";
import { VisibilityToggle } from "../VisibilityToggle";

import { PageSectionContainer, RecipeGroupBody, SectionBody } from "./styles";

export const PageSection: React.FC<IPageSection> = ({
  details: { id, title, type },
  icon,
  data,
  showSectionLength = false,
  expandedAutomatically = false,
  leaderboard
}) => {
  const isCountedList: boolean = type === PAGE_SECTION_TYPES.COUNTED_LIST;
  const isEventCards: boolean = type === PAGE_SECTION_TYPES.EVENT_CARDS;
  const isRecipes: boolean = type === PAGE_SECTION_TYPES.RECIPES;

  const noData: boolean =
    data.length === 0 ||
    (isRecipes && data.filter((item: IRecipeCard) => !item.hide).length) === 0;

  if (noData) return null;

  return (
    <PageSectionContainer data-test={id && `${id}-section`}>
      <VisibilityToggle
        onlyHeaderClickable={isRecipes}
        expandedAutomatically={expandedAutomatically}
        headerComponent={
          <PageSectionHeader
            text={title}
            showCounts={showSectionLength}
            data={data}
            icon={icon}
            dataTest="visibility-toggle-header"
          />
        }
      >
        <section data-test="section-content">
          {isRecipes ? (
            <RecipeGroupBody>
              {data.map((item: IRecipeCard, index: number) => (
                <RecipeCard key={index} {...item} />
              ))}
            </RecipeGroupBody>
          ) : (
            <SectionBody
              data-test="page-section-content"
              isEventCards={isEventCards}
            >
              {data.map((item: any, index: number) => {
                if (isEventCards) return <EventCard key={index} {...item} />;

                if (isCountedList)
                  return (
                    <CountedListItem
                      key={index}
                      {...item}
                      leaderboard={leaderboard}
                    />
                  );

                return null;
              })}
            </SectionBody>
          )}
        </section>
      </VisibilityToggle>
    </PageSectionContainer>
  );
};

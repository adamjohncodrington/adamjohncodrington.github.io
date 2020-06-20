import React from "react";

import { PAGE_SECTION_TYPES, PAGE_SECTIONS } from "../../constants";
import { Li } from "../../primitives";

import { CountedListItem } from "../CountedListItem";
import { Disclosure } from "../Disclosure";
import { EventCard } from "../EventCard";
import { PageSectionHeader } from "./PageSectionHeader";
import { RecipeCard } from "../RecipeCard";

import {
  PageSectionContainer,
  RecipeGroupList,
  SectionPanelList
} from "./styles";

export const PageSection: React.FC<IPageSection> = ({
  details: { id, title, type },
  icon,
  data,
  showSectionLength = false,
  expandedAutomatically = false
}) => {
  const isCountedList: boolean = type === PAGE_SECTION_TYPES.COUNTED_LIST;
  const isEventCards: boolean = type === PAGE_SECTION_TYPES.EVENT_CARDS;
  const isRecipes: boolean = type === PAGE_SECTION_TYPES.RECIPES;
  const isFriendsSection: boolean = id === PAGE_SECTIONS.FRIEND.id;

  const noData: boolean =
    data.length === 0 ||
    (isRecipes && data.filter((item: IRecipeCard) => !item.hide).length) === 0;

  if (noData) return null;

  return (
    <Li data-test={`section-${id}`}>
      <PageSectionContainer>
        <Disclosure
          onlyHeaderClickable={isRecipes}
          expandedAutomatically={expandedAutomatically}
          headerComponent={
            <PageSectionHeader
              text={title}
              showCounts={showSectionLength}
              data={data}
              icon={icon}
              dataTest="disclosure-header"
            />
          }
        >
          <section data-test="page-section-body">
            {isRecipes ? (
              <Recipes recipes={data} />
            ) : isCountedList ? (
              <CountedList
                countedListItems={data}
                leaderboard={isFriendsSection}
              />
            ) : (
              isEventCards && <EventCards eventCards={data} />
            )}
          </section>
        </Disclosure>
      </PageSectionContainer>
    </Li>
  );
};

interface IRecipes {
  recipes: Array<IRecipeCard>;
}

const Recipes: React.FC<IRecipes> = ({ recipes }) => (
  <RecipeGroupList>
    {recipes.map(
      (item: IRecipeCard, index: number) =>
        !item.hide && (
          <Li>
            <RecipeCard key={index} {...item} />
          </Li>
        )
    )}
  </RecipeGroupList>
);

interface ICountedList {
  countedListItems: Array<ICountedListItem>;
  leaderboard?: boolean;
}

const CountedList: React.FC<ICountedList> = ({
  countedListItems,
  leaderboard
}) => (
  <SectionPanelList data-test="page-section-panel" isEventCards={false}>
    {countedListItems.map((listItem: ICountedListItem, index: number) => (
      <CountedListItem key={index} {...listItem} leaderboard={leaderboard} />
    ))}
  </SectionPanelList>
);

interface IEventCards {
  eventCards: Array<IEventCard>;
}

const EventCards: React.FC<IEventCards> = ({ eventCards }) => (
  <SectionPanelList data-test="page-section-panel" isEventCards>
    {eventCards.map((eventCard: IEventCard, index: number) => (
      <Li>
        <EventCard key={index} {...eventCard} />
      </Li>
    ))}
  </SectionPanelList>
);

import React from "react";
import styled, { css } from "styled-components";

import { EventCard } from "./EventCard";
import { PageSectionHeader } from "./PageSectionHeader";
import { RecipeCard } from "./RecipeCard";
import { SimpleListItem } from "./SimpleListItem";
import { VisibilityToggle } from "./VisibilityToggle";

import { PAGE_SECTION_TYPES } from "../../constants";

const PageSectionContainer = styled.section`
  //TODO: move this color to theme
  background: Gainsboro;
  box-shadow: ${props => props.theme.section.boxShadow};
  border-radius: ${props => props.theme.section.borderRadius};

  padding: 0 ${props => props.theme.section.padding.horizontal};
  margin-bottom: ${props => props.theme.section.margin.bottom};
`;

interface ISectionBody {
  listOfEventCards: boolean;
  theme: ITheme;
}
const SectionBody = styled.div`
  ${({ theme, listOfEventCards }: ISectionBody) => css`
    padding-bottom: ${theme.section.body.padding.bottom};

    > * {
      border-bottom: ${theme.section.body.basicList.border.bottom};
      padding: ${listOfEventCards
        ? `${theme.section.body.eventCardList.padding.vertical} 0`
        : `${theme.section.body.basicList.padding.vertical} 0`};
    }

    > *:last-child {
      ${listOfEventCards && `padding-bottom: 5px;`}
      border-bottom: 0;
    }

    ${listOfEventCards &&
    css`
      > *:first-child {
        padding-top: 0;
      }
    `}
  `}
`;

const RecipeGroupBody = styled.div`
  > * {
    border-bottom: ${props => props.theme.recipe.border.bottom};
    padding: ${props => props.theme.recipe.title.padding.vertical} 0;
  }

  > *:first-child {
    padding-top: ${props => props.theme.recipe.first.padding.top};
  }

  > *:last-child {
    border-bottom: 0;
    padding-bottom: ${props => props.theme.recipe.last.padding.bottom};
  }
`;

export const PageSection: React.FC<IPageSection> = ({
  details,
  icon,
  listOfEventCards,
  data,
  showSectionLength = false,
  expandedAutomatically = false,
  leaderboard,
  onlySectionHeaderClickable
}) => {
  const { id, title, type } = details;

  const isEventsCards: boolean = type === PAGE_SECTION_TYPES.EVENT_CARDS;
  const isRecipes: boolean = type === PAGE_SECTION_TYPES.RECIPES;
  const isCountedList: boolean = type === PAGE_SECTION_TYPES.COUNTED_LIST;

  // Precautionary exit
  const proceed =
    data.length > 0 ||
    // e.g. if pesto is hidden, do not show sauces section because there will be no section children
    //@ts-ignore
    (isRecipes && data.filter((item: IRecipeCard) => !item.hide).length);
  if (!proceed) return null;

  return (
    <PageSectionContainer data-test={id && `${id}-section`}>
      <VisibilityToggle
        onlyHeaderClickable={onlySectionHeaderClickable}
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
          {type === PAGE_SECTION_TYPES.RECIPES ? (
            <RecipeGroupBody>
              {data.map((item: IRecipeCard, index: number) => (
                <RecipeCard key={index} {...item} />
              ))}
            </RecipeGroupBody>
          ) : (
            <SectionBody
              data-test="page-section-content"
              //@ts-ignore
              listOfEventCards={listOfEventCards}
            >
              {data.map((item: any, index: number) =>
                listOfEventCards ? (
                  <EventCard key={index} {...item} />
                ) : (
                  <SimpleListItem
                    key={index}
                    {...item}
                    leaderboard={leaderboard}
                  />
                )
              )}
            </SectionBody>
          )}
        </section>
      </VisibilityToggle>
    </PageSectionContainer>
  );
};

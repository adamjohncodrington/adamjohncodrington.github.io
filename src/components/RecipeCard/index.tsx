import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import {
  Circle,
  FlexRow,
  CentredDiv,
  SeventyFivePercentSpan,
  SquareImage
} from "primitives";
import { getIngredientsHeader, numberToCurrencyString } from "@utils";

import { Disclosure } from "../Disclosure";
import { List } from "../List";

import {
  mapMethodToListItems,
  mapServeWithToListItems,
  mapRecipeIngredientsToListItems
} from "./factory";
import { RecipeCardTitle, RecipeBody, PaddedFlexColumn } from "./styles";

export const RecipeCard: React.FC<IRecipeCard> = ({
  title,
  makes,
  ingredients,
  method,
  favourite,
  serveWith,
  newRecipe,
  diet,
  image,
  totalCost,
  portionCost
}) => {
  const theme: ITheme = useContext(ThemeContext);

  const defaultIngredientsHeader: string = "ingredients";
  const ingredientsHeader: string = makes
    ? getIngredientsHeader({ makes, defaultIngredientsHeader })
    : defaultIngredientsHeader;

  return (
    <Disclosure
      initiallyExpandedAlways={newRecipe}
      headerComponent={
        <FlexRow>
          <RecipeCardTitle favourite={favourite}>{title}</RecipeCardTitle>

          <Circle fontSize="13.5px" size="27px" invert color={diet.color}>
            {diet.abbreviation}
          </Circle>
        </FlexRow>
      }
    >
      <RecipeBody>
        <List
          title={ingredientsHeader}
          listItems={mapRecipeIngredientsToListItems(ingredients)}
        />

        {serveWith && (
          <List
            title="serve with"
            listItems={mapServeWithToListItems(serveWith)}
          />
        )}

        {method && (
          <List
            title="method"
            listItems={mapMethodToListItems(method)}
            showBullets
          />
        )}

        {image && (
          <CentredDiv>
            <SquareImage imgSrc={image} size={theme.recipe.image.size} />
          </CentredDiv>
        )}

        {totalCost && (
          <PaddedFlexColumn>
            <span>
              approx. <strong>{numberToCurrencyString(totalCost)}</strong> to
              make
            </span>

            {portionCost && makes && makes.measurement && (
              <SeventyFivePercentSpan>
                <strong>{numberToCurrencyString(portionCost)}</strong> per
                {makes.measurement}
              </SeventyFivePercentSpan>
            )}
          </PaddedFlexColumn>
        )}
      </RecipeBody>
    </Disclosure>
  );
};

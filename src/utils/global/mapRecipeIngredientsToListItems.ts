import { generateIngredientListItem } from "../local";

export const mapRecipeIngredientsToListItems = (
  ingredientsGroups: Array<Array<IRecipeIngredient>>
): Array<IListItemWithPaddingTopFlag> => {
  let ingredientsWithPaddingFlags: Array<IListItemWithPaddingTopFlag> = [];

  ingredientsGroups.map(
    (ingredientsGroup: Array<IRecipeIngredient>, INDEX_HIGH: number) => {
      ingredientsGroup.map(
        (ingredient: IRecipeIngredient, INDEX_LOW: number) => {
          ingredientsWithPaddingFlags.push({
            text: generateIngredientListItem(ingredient),
            addPaddingTop: INDEX_HIGH !== 0 && INDEX_LOW === 0
          });
          return null;
        }
      );
      return null;
    }
  );

  return ingredientsWithPaddingFlags;
};

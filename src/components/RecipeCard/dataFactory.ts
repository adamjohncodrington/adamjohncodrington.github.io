import { generateIngredientListItem } from "../../utils";

export const mapMethodToListItems = (
  method: IRecipeMethod
): Array<IListItemWithPaddingTopFlag> =>
  method.map(
    (item: string): IListItemWithPaddingTopFlag => ({
      text: item,
      addPaddingTop: false
    })
  );

const getServeWithListItem = (
  serveWithItems: Array<IRecipeIngredient>
): string => {
  let stringList = serveWithItems[0].ingredient.displayText;

  for (let i = 1; i < serveWithItems.length; i++) {
    const ingredient = serveWithItems[i].ingredient.displayText;
    if (i === serveWithItems.length - 1) {
      stringList += ` or ${ingredient}`;
    } else {
      stringList += `, ${ingredient}`;
    }
  }
  return stringList;
};

export const mapServeWithToListItems = (
  serveWith: Array<Array<IRecipeIngredient>>
): Array<IListItemWithPaddingTopFlag> =>
  serveWith.map(
    (item: Array<IRecipeIngredient>): IListItemWithPaddingTopFlag => ({
      text: getServeWithListItem(item),
      addPaddingTop: false
    })
  );

export const mapRecipeIngredientsToListItems = (
  ingredientsGroups: Array<Array<IRecipeIngredient>>
): Array<IListItemWithPaddingTopFlag> => {
  let ingredientsWithPaddingFlags: Array<IListItemWithPaddingTopFlag> = [];

  ingredientsGroups.forEach(
    (ingredientsGroup: Array<IRecipeIngredient>, INDEX_HIGH: number) => {
      ingredientsGroup.forEach(
        (ingredient: IRecipeIngredient, INDEX_LOW: number) => {
          ingredientsWithPaddingFlags.push({
            text: generateIngredientListItem(ingredient),
            addPaddingTop: INDEX_HIGH !== 0 && INDEX_LOW === 0
          });
        }
      );
    }
  );

  return ingredientsWithPaddingFlags;
};

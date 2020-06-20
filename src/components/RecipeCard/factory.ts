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

export const mapServeWithToListItems = (
  serveWith: Array<Array<IRecipeIngredient>>
): Array<IListItemWithPaddingTopFlag> => {
  const getServeWithListItem = (
    lineOptions: Array<IRecipeIngredient>
  ): string => {
    let output: string = "";

    lineOptions.forEach(
      ({ ingredient: { displayText } }: IRecipeIngredient, index: number) =>
        (output +=
          index === 0
            ? displayText
            : index === lineOptions.length - 1
            ? ` or ${displayText}`
            : `, ${displayText}`)
    );

    return output;
  };

  return serveWith.map(
    (lineOptions: Array<IRecipeIngredient>): IListItemWithPaddingTopFlag => ({
      text: getServeWithListItem(lineOptions),
      addPaddingTop: false
    })
  );
};

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

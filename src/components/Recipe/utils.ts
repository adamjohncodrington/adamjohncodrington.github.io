import { generateIngredientListItem } from "utils";

export const mapMethodToListItems = (method: string[]): IRecipeListItem[] =>
  method.map(
    (item: string): IRecipeListItem => ({
      listItemText: item,
      addPaddingTop: false
    })
  );

export const mapServeWithToListItems = (
  serveWith: IRecipeIngredient[][]
): IRecipeListItem[] => {
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
    (lineOptions: Array<IRecipeIngredient>): IRecipeListItem => ({
      listItemText: getServeWithListItem(lineOptions),
      addPaddingTop: false
    })
  );
};

export const mapIngredientsToListItems = (
  ingredientsGroups: IRecipeIngredient[][]
): IRecipeListItem[] => {
  let ingredientsWithPaddingFlags: IRecipeListItem[] = [];
  ingredientsGroups.forEach(
    (ingredientsGroup: Array<IRecipeIngredient>, INDEX_HIGH: number) => {
      ingredientsGroup.forEach(
        (ingredient: IRecipeIngredient, INDEX_LOW: number) => {
          ingredientsWithPaddingFlags.push({
            listItemText: generateIngredientListItem(ingredient),
            addPaddingTop: INDEX_HIGH !== 0 && INDEX_LOW === 0
          });
        }
      );
    }
  );
  return ingredientsWithPaddingFlags;
};

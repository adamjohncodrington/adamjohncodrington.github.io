export const getServeWithListItem = (
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

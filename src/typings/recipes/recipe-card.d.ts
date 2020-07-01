interface IRecipeCard {
  title: string;
  makes?: IRecipeMakes;
  image?: IImageSrc;
  serveWith?: Array<Array<IServeWithItem>>;
  ingredients: Array<Array<IRecipeIngredient>>;
  diet: IRecipeDiet;
  method: Array<string>;
  favourite?: boolean;
  newRecipe?: boolean;
  hide?: boolean;
  totalCost?: number;
  portionCost?: number;
}

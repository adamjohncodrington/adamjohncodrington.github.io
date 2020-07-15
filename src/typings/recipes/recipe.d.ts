interface IListItemWithPaddingTopFlag {
  text: string;
  addPaddingTop?: boolean;
}

interface IRecipeIngredient {
  ingredient: IInventoryIngredient;
  quantity?: number;
  measurement?: string;
  optional?: boolean;
  notes?: string;
}

interface IServeWithItem {
  ingredient: IInventoryIngredient;
  notes?: string;
}

interface IRecipeDiet {
  abbreviation: string;
  color: string;
}

interface IRecipeMakes {
  quantity: number;
  measurement?: string;
}

interface IRecipe extends IFavourite {
  title: string;
  makes?: IRecipeMakes;
  image?: IJpgSrc;
  ingredients: Array<Array<IRecipeIngredient>>;
  serveWith?: Array<Array<IServeWithItem>>;
  diet: IRecipeDiet;
  method: Array<string>;
  newRecipe?: boolean;
  hide?: boolean;
  totalCost?: number;
  portionCost?: number;
}

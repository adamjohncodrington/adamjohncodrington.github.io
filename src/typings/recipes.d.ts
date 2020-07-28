interface IIngredientCost {
  price: number;
  quantity?: number;
  measurement?: string;
  payFullAmountAlways?: boolean;
}

interface IInventoryIngredient {
  displayText: string;
  knownCost?: IIngredientCost;
}

interface IRecipeListItem {
  listItemText: string;
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
}

interface IRecipeMakes {
  quantity: number;
  measurement?: string;
}

interface IRecipe extends I__Favourite, I__Hide {
  title: string;
  makes?: IRecipeMakes;
  photo?: IPhoto;
  ingredients: Array<Array<IRecipeIngredient>>;
  serveWith?: Array<Array<IServeWithItem>>;
  diet: IRecipeDiet;
  method: Array<string>;
  newRecipe?: boolean;
  totalCost?: number;
  portionCost?: number;
}

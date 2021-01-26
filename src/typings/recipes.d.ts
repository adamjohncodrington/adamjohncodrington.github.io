interface IngredientCost {
  price: number;
  quantity?: number;
  measurement?: string;
  payFullAmountAlways?: boolean;
}

interface IInventoryIngredient {
  displayText: string;
  knownCost?: IngredientCost;
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

interface RecipeDiet {
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
  ingredients: IRecipeIngredient[][];
  serveWith?: IServeWithItem[][];
  diet: RecipeDiet;
  method: string[];
  newRecipe?: boolean;
  totalCost?: number;
  portionCost?: number;
}

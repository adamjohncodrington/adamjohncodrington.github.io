type IIngredientMeasurement = string | undefined;
type IIngredientQuantity = number;
type IRecipeDietCategory = string;
type IRecipeTitle = string;
type IRecipeImage = string;

interface IIngredientCost {
  quantity?: IIngredientQuantity;
  price: number;
  measurement?: IIngredientMeasurement;
  payFullAmountAlways?: boolean;
}

interface IInventoryIngredient {
  displayText: string;
  cost?: IIngredientCost;
}
interface IServeWithItem {
  ingredient: IInventoryIngredient;
  notes?: string;
}
interface IRecipeMakes {
  quantity: IIngredientQuantity;
  measurement: IIngredientMeasurement;
}

interface IRecipeIngredient {
  ingredient: IInventoryIngredient;
  quantity?: IIngredientQuantity;
  measurement?: IIngredientMeasurement;
  optional?: boolean;
  notes?: string;
}

type IRecipeDiet = string;
type IRecipeIngredients = Array<Array<IRecipeIngredient>>;
type IServeWith = Array<Array<IServeWithItem>>;
type IRecipeMethod = Array<string>;

interface IRecipeCard {
  title: IRecipeTitle;
  makes?: IRecipeMakes;
  image?: IRecipeImage;
  serveWith?: IServeWith;
  ingredients: IRecipeIngredients;
  diet: IRecipeDietCategory;
  method: IRecipeMethod;
  favourite?: boolean;
  newRecipe?: boolean;
  hide?: boolean;
}

interface IRecipeGroup {
  category: string;
  data: Array<IRecipeCard>;
}

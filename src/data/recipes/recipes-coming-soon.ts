const recipeComingSoon: Array<string> = [
  "gingerbread",
  "spinach sweet potato hash",
  "shortbread",
  "courgette rösti fritters",
  "key lime pie",
  "meatball tagine",
  "aubergine teriyaki",
  "loaded potato skins",
  "mushroom stroganoff",
  "carrot and ginger cake",
  "jackfruit mac",
  "lemon meringue pie",
  "chilli sin carne",
  "passionfruit cheesecake",
  "victoria sponge",
  "thai green curry",
  "dahl"
];

interface IListItem {
  listEntry: string;
}

export const RECIPES_COMING_SOON: Array<IListItem> = recipeComingSoon
  .sort((a, b) => (a > b ? 1 : -1))
  .map(item => ({ listEntry: item }));

const recipesComingSoon: Array<string> = [
  "gingerbread",
  "spinach sweet potato hash",
  "courgette rösti fritters",
  "key lime pie",
  "meatball tagine",
  "aubergine teriyaki",
  "loaded potato skins",
  "mushroom stroganoff",
  "carrot ginger cake",
  "jackfruit mac",
  "lemon meringue pie",
  "chilli sin carne",
  "passionfruit cheesecake",
  "victoria sponge",
  "roast potatoes",
  "thai green curry",
  "dahl"
];

export const RECIPES_COMING_SOON: Array<ICountedItem> = recipesComingSoon
  .map((item: string) => ({
    text: item,
    countInfoIrrelevant: true,
    futureCount: 0,
    pastCount: 0
  }))
  .sort((a: ICountedItem, b: ICountedItem) => (a.text > b.text ? 1 : -1));

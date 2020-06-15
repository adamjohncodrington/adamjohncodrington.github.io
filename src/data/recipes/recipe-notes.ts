const recipeNotes: Array<string> = [
  "75g rice to be cooked in 150ml water (scales up proportionally)",
  "sift flour in baking always (makes all the difference)",
  "1 lemon typically yields just over 2 tbsp fresh lemon juice",
  "1 baking potato typically weighs between 300g and 350g and loses 15% weight once peeled",
  "1 sweet potato typically weighs between 400g and 450g and loses 15% weight once peeled",
  "rinse lentils (and all legumes) very very well, They may look clean, coming out of the bag, but if you dumped them into a bowl of water, you'll probably see they're not! You might find that they are quite dusty"
];

export const RECIPE_NOTES = recipeNotes.map(item => ({ listEntry: item }));

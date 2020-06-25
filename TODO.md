# TO DO LIST

- make `link` a compulsory attribute on `IVinylCard` by adding remaining links to all vinyl data

## Refactoring

- move final instances of `px` in `EventCard` and `RecipeCard` to `theme`
- rationalise theme
- rationalise `data-test` attributes
- review semantics of page structure, landmarks, accessibility, etc.
- recipe method array should be `ol` not `ul`?
- move the `cost` and `displayCost` to the definition of recipes

## Features

- add sorting to vinyls collection and wishlist
- reinstate circles indicating `company` on cards

## Styling

- make page count font size larger again (review `FONT_SIZES`)
- reduce whitespace between bullet points and list text?

## TypeScript

- remove as many remaining instances of `any` and `@ts-ignore` as possible

## Testing

- add more unit tests

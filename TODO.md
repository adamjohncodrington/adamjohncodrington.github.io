# TO DO LIST

## Refactoring

- add `dataFactory` files, nest all components in their own folders
- move final remaining instances of `px` to `theme`
  - `CountedListItem`
  - `EventCard`
  - `UnorderedList`
  - `PageSection`
  - `RecipeCard`
  - `RecipeCardHeader`
  - `RecipeCardIngredients`
- review semantics of page structure, landmarks, accessibility, etc.

## TypeScript

- remove all instances of `any`
- add absolute paths/imports
- remove all instances of `@ts-ignore` where possible

## Tests

- add tests to all utils functions
- add snapshot tests to components

## Data

- store data to a database and call with APIs

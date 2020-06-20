# TO DO LIST

## Refactoring

- review the name of all the files in `factories` and `utils`
- amalgamate `data` and `pages` folders, there is too much overlap
- move final instances of `px` (in `EventCard` and `RecipeCard`) to `theme`
- add a high-level `factories` folder
- rationalise theme
- rationalise `data-test` attributes
- review semantics of page structure, landmarks, accessibility, etc.

## TypeScript

- remove instances of `any` and `@ts-ignore` where possible
- add absolute paths/imports

## Tests

- add tests to all utils functions
- add snapshot tests to components

## Data

- store data to a database and call with APIs

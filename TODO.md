# TO DO LIST

## Refactoring

- amalgamate `data` and `pages` folders, there is too much overlap
- review the name of all the files in `factories` and `utils`
- move final instances of `px` in `EventCard` and `RecipeCard` to `theme`
- rationalise theme
- rationalise `data-test` attributes
- review semantics of page structure, landmarks, accessibility, etc.

## TypeScript

- `generateSectionData` and `mapDataToEventCards` could benefit from being rewritten
- add absolute paths/imports
- remove as many instances of `any` and `@ts-ignore` as possible

## Data

- store data to a database and call with APIs

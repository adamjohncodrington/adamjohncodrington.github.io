# TO DO LIST

- SEARCH ENTIRE REPO FOR //TODO or // TO DO

## Refactoring

- add section types to page sections, e.g. `recipes`, `eventCards`, `simpleList`, `nestedList`, etc.
- automatically sort all section entries by date
- move all instances of `Text.js` to the file itself, with loads of exports such as `PageTitleText`, `SectionTitleText`, etc.

## TypeScript

- review `formatData` return type `string | null`
- remove every instance of type = `any`
- absolute paths/imports
- remove all instances of `@ts-ignore`
- add types to constants files

## Data

- move data to a database and call with APIs

## Testing

- test that all `date[X] < date[X + 1]` in data

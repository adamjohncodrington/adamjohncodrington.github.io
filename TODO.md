# TO DO LIST

- ABANDON `VideoCard` and `IVideoCard` entirely!!!!!
- do not export recipe data in nest

- auto sort `Card`s by date

- rationalise `IVideo` into `I_Video` and `I__Video`

- refactor symbols!!
- convert `DAYS TO GO` into a dark number symbol


- add `shuffleData` boolean to `IPageSetion`
- reinstate vinyl shuffle functionality

- `RECIPE LIST` / `CARD LIST` / `BASIC LIST`
- reinstate festival videos
- add symbols to vinyl cards to indicate color and side count

- define `IDates` as `{start, end, only}`
- convert all `travel` data to use `IStartEndDate`
- review outstanding `//TODO:`s
- split festivals into `IDayFestival`, `IMultiDayFestival`, `INightOut`, etc.
- make festival dates prop `start/end`???
- implement sorting at `PageSectionLayout` level
- totally refactor `travel` in `@constants`
- add Apple Music links and details to Vinyl `artists` section

## Enhancements

- beef up POLE section
- make YouTube videos play in HD
- add images to theatre page (poster art)
- display festival lineups by day????
- merge trips together again as arrays of "trip legs"
- reinstate 49 abroad trips page count
- add more travel photos!!!
- add alt text to all photos
- add tooltips to `RoundedSymbol`s
- refine Nav Bar (colors persist for active page, mobile behaviour)
- prevent `Router` from allowing you to go back between pages?

## Refactoring

- review whether parents or children should be styling the children across whole site
- review all instances of `.forEach`, potentially replace with `.reduce`, `.some` and/or `.every`
- move `BasicListItemPanel` style values to theme??
- review semantics of page structure, landmarks, accessibility, etc.
- rationalise `data-test` attributes

## Testing

- add tests for more utils

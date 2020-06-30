interface IAttraction extends ILocation {
  themePark?: boolean;
  highlight?: boolean;
}
interface IAttractionCounted extends IAttraction, IPastAndFutureCounts {}

type IAttractionsObject = { [attraction: string]: IAttraction };
type IAttractions = { attractions: IAttractionsObject };

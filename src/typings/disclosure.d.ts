interface IOnlyHeaderClicable {
  onlyHeaderClickable?: boolean;
}

interface IDisclosure extends IOnlyHeaderClicable {
  Header: React.ReactElement;
  autoExpand?: boolean;
  isStatic?: boolean;
}

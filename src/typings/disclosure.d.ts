interface IDisclosureHeader {
  className?: string;
  panelIsVisible: boolean;
}

interface I__AutoExpand {
  autoExpand?: boolean;
}

interface IDisclosure extends I__AutoExpand {
  Header: React.FC<IDisclosureHeader>;
  Panel: React.FC;
  autoExpand?: boolean;
  isStatic?: boolean;
}

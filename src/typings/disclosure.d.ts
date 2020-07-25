interface IDisclosureHeader {
  className?: string;
  panelIsVisible: boolean;
}

interface IDisclosure {
  Header: React.FC<IDisclosureHeader>;
  Panel: React.FC;
  autoExpand?: boolean;
  isStatic?: boolean;
}

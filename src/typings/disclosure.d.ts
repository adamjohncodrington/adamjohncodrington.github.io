interface IPanelIsVisible {
  panelIsVisible: boolean;
}

interface IDisclosure {
  Header: React.FC<IPanelIsVisible>;
  Panel: React.ReactElement;
  autoExpand?: boolean;
  isStatic?: boolean;
}

interface IClassName {
  className?: string;
}

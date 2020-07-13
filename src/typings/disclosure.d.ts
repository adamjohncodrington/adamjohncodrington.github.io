interface IPanelIsVisible {
  panelIsVisible: boolean;
}

interface IDisclosure {
  Header: React.FC<IPanelIsVisible>;
  autoExpand?: boolean;
  isStatic?: boolean;
}

interface IClassName {
  className?: string;
}

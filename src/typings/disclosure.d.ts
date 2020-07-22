interface IPanelIsVisible {
  panelIsVisible: boolean;
}

interface IDisclosure {
  Header: React.FC<IPanelIsVisible>;
  Panel: React.ReactElement;
  autoExpand?: boolean;
  isStatic?: boolean;
}

interface I_ClassName {
  className?: string;
}

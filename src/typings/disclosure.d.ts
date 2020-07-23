interface I_PanelIsVisible {
  panelIsVisible: boolean;
}

interface IDisclosure {
  Header: React.FC<I_PanelIsVisible>;
  Panel: React.ReactElement;
  autoExpand?: boolean;
  isStatic?: boolean;
}

interface I_ClassName {
  className?: string;
}

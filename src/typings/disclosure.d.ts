interface I__AutoExpand {
  autoExpand?: boolean;
}

interface I_PanelExists {
  panelExists: boolean;
}

interface IDisclosureHeader extends I_PanelExists {
  className?: string;
  panelVisible: boolean;
}

interface IDisclosure extends I__AutoExpand, I_PanelExists {
  Header: React.FC<IDisclosureHeader>;
  Panel: React.FC;
}

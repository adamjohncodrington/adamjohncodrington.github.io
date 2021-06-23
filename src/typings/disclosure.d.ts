type I__AutoExpand = { autoExpand?: boolean };
type I_PanelExists = { panelExists: boolean };
type DisclosureHeader = I_PanelExists & {
  className?: string;
  panelVisible: boolean;
};

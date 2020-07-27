interface I__AutoExpand {
  autoExpand?: boolean;
}

interface I__IsStatic {
  isStatic?: boolean;
}

interface IDisclosureHeader extends I__IsStatic {
  className?: string;
  panelVisible: boolean;
}

interface IDisclosure extends I__AutoExpand, I__IsStatic {
  Header: React.FC<IDisclosureHeader>;
  Panel: React.FC;
}

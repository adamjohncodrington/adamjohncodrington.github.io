import React, { useState, ReactElement } from "react";

import { PanelContainer, ClickableDiv } from "./styles";

export const Disclosure: React.FC<IDisclosure> = ({
  Header,
  children,
  autoExpand,
  isStatic,
  onlyHeaderClickable
}) => {
  const [panelIsVisible, switchPanelVisibility] = useState<boolean>(
    !!(autoExpand || isStatic)
  );
  const onClick = (): void => switchPanelVisibility(!panelIsVisible);
  const dataTestClickableDiv: string = "disclosure-clickable-region";

  const Panel: ReactElement = (
    <PanelContainer
      data-test="disclosure-panel"
      panelIsVisible={panelIsVisible}
    >
      {children}
    </PanelContainer>
  );

  return isStatic ? (
    <>
      {Header}
      {children}
    </>
  ) : onlyHeaderClickable ? (
    <>
      <ClickableDiv data-test={dataTestClickableDiv} onClick={onClick}>
        {Header}
      </ClickableDiv>
      {Panel}
    </>
  ) : (
    <ClickableDiv data-test={dataTestClickableDiv} onClick={onClick}>
      {Header}
      {Panel}
    </ClickableDiv>
  );
};

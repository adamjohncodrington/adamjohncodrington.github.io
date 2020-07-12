import React, { useState } from "react";

import { PanelContainer, StyledDiv } from "./styles";

export const Disclosure: React.FC<IDisclosure> = ({
  Header,
  children,
  autoExpand,
  isStatic
}) => {
  const [panelIsVisible, switchPanelVisibility] = useState<boolean>(
    !!(autoExpand || isStatic)
  );
  const onClick = (): void => switchPanelVisibility(!panelIsVisible);
  const dataTestClickableDiv: string = "disclosure-clickable-region";

  return isStatic ? (
    <>
      {Header}
      {children}
    </>
  ) : (
    <>
      <StyledDiv data-test={dataTestClickableDiv} onClick={onClick}>
        {Header}
      </StyledDiv>
      <PanelContainer
        data-test="disclosure-panel"
        panelIsVisible={panelIsVisible}
      >
        {children}
      </PanelContainer>
    </>
  );
};

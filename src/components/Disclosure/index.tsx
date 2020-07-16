import React, { FC, useState, ReactElement } from "react";

import { SPEED_UP_PAGE_LOAD } from "config";

import { PanelContainer, StyledDiv } from "./styles";

export const Disclosure: FC<IDisclosure> = ({
  Header,
  Panel,
  autoExpand,
  isStatic
}) => {
  const [panelIsVisible, switchPanelVisibility] = useState<boolean>(
    !!(autoExpand || isStatic)
  );
  const onClick = (): void => switchPanelVisibility(!panelIsVisible);
  const dataTestClickableDiv: string = "disclosure-clickable-region";

  const ClickableHeader: ReactElement = (
    <StyledDiv data-test={dataTestClickableDiv} onClick={onClick}>
      <Header panelIsVisible={panelIsVisible} />
    </StyledDiv>
  );

  return isStatic ? (
    <>
      <Header panelIsVisible={panelIsVisible} />
      {Panel}
    </>
  ) : SPEED_UP_PAGE_LOAD ? (
    <>
      {ClickableHeader}
      {panelIsVisible && Panel}
    </>
  ) : (
    <>
      {ClickableHeader}
      <PanelContainer
        data-test="disclosure-panel"
        panelIsVisible={panelIsVisible}
      >
        {Panel}
      </PanelContainer>
    </>
  );
};

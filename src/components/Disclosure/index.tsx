import React, { FC, useState } from "react";

import { SPEED_UP_PAGE_LOAD } from "config";

import { PanelContainer, StyledDiv, DisclosureContainer } from "./styles";

export const Disclosure: FC<IDisclosure> = ({
  Header,
  Panel,
  autoExpand,
  isStatic
}) => {
  const [panelVisible, switchPanelVisibility] = useState<boolean>(!!autoExpand);

  const ClickableHeader: FC = () => (
    <StyledDiv onClick={() => switchPanelVisibility(!panelVisible)}>
      <Header panelVisible={panelVisible} />
    </StyledDiv>
  );

  return (
    <DisclosureContainer>
      {isStatic ? (
        <Header panelVisible={true} />
      ) : SPEED_UP_PAGE_LOAD ? (
        <>
          <ClickableHeader />
          {panelVisible && <Panel />}
        </>
      ) : (
        <>
          {ClickableHeader}
          <PanelContainer
            data-test="disclosure-panel"
            panelVisible={panelVisible}
          >
            <Panel />
          </PanelContainer>
        </>
      )}
    </DisclosureContainer>
  );
};

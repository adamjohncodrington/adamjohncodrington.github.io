import React, { FC, useState } from "react";

import { SPEED_UP_PAGE_LOAD } from "config";

import { PanelContainer, StyledDiv, DisclosureContainer } from "./styles";

type Props = I__AutoExpand &
  I_PanelExists & {
    Header: React.FC<DisclosureHeader>;
    Panel: React.FC;
  };

export const Disclosure: FC<Props> = ({
  Header,
  Panel,
  autoExpand,
  panelExists
}) => {
  const [panelVisible, switchPanelVisibility] = useState<boolean>(!!autoExpand);

  const ClickableHeader: FC = () => (
    <StyledDiv onClick={() => switchPanelVisibility(!panelVisible)}>
      <Header panelExists={panelExists} panelVisible={panelVisible} />
    </StyledDiv>
  );

  return (
    <DisclosureContainer>
      {panelExists ? (
        SPEED_UP_PAGE_LOAD ? (
          <>
            <ClickableHeader />
            {panelVisible && <Panel />}
          </>
        ) : (
          <>
            <ClickableHeader />
            <PanelContainer
              data-test="disclosure-panel"
              panelVisible={panelVisible}
            >
              <Panel />
            </PanelContainer>
          </>
        )
      ) : (
        <Header panelExists={panelExists} panelVisible={true} />
      )}
    </DisclosureContainer>
  );
};

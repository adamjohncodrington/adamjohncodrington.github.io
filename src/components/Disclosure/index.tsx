import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

import { PanelContainer, StyledDiv } from "./styles";

export const Disclosure: FC<IDisclosure> = ({
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

  const StyledHeader = styled(Header)(
    () =>
      panelIsVisible &&
      css`
        * {
          font-weight: bold;
        }
      `
  );

  return isStatic ? (
    <>
      <StyledHeader />
      {children}
    </>
  ) : (
    <>
      <StyledDiv data-test={dataTestClickableDiv} onClick={onClick}>
        <StyledHeader />
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

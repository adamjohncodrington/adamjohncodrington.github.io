import React, { ReactElement } from "react";

import { PanelContainer, ClickableDiv } from "./styles";

export type IBodyHeight = number | null;

export const Disclosure: React.FC<IDisclosure> = ({
  Header,
  children,
  autoExpand,
  isStatic,
  onlyHeaderClickable
}) => {
  const [panelIsVisible, switchPanelVisibility] = React.useState<boolean>(
    !!(autoExpand || isStatic)
  );
  const [panelContainerHeight, setPanelContainerHeight] = React.useState<
    IBodyHeight
  >(null);

  const refCallback = (element: HTMLDivElement): void => {
    if (element && !panelContainerHeight)
      setPanelContainerHeight(element.getBoundingClientRect().height);
  };

  const getPanelContainerClass = (
    bodyHeight: IBodyHeight,
    panelIsVisible: boolean
  ): string =>
    !bodyHeight
      ? "initial-state"
      : panelIsVisible
      ? "panel-visible"
      : "panel-invisible";

  const Panel: ReactElement = (
    <PanelContainer
      data-test="disclosure-panel"
      className={getPanelContainerClass(panelContainerHeight, panelIsVisible)}
      bodyHeight={panelContainerHeight}
      ref={refCallback}
    >
      {children}
    </PanelContainer>
  );

  const dataTestClickableDiv: string = "disclosure-clickable-region";
  const onClick = (): void => switchPanelVisibility(!panelIsVisible);

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

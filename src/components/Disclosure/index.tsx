import React, { ReactElement } from "react";

import { useScreenWidths } from "utils";

import { PanelContainer, ClickableRegion } from "./styles";

export type IBodyHeight = number | null;

interface IDisclosure extends IPageSectionDisclosure {
  headerComponent: React.ReactNode;
}

export const Disclosure: React.FC<IDisclosure> = ({
  headerComponent,
  children,
  initiallyExpandedAlways = false,
  initiallyExpandedOnDesktop = false,
  onlyHeaderClickable = false,
  isStatic = false
}) => {
  const { isDesktop } = useScreenWidths();

  const [panelIsVisible, switchPanelVisibility] = React.useState<boolean>(
    initiallyExpandedAlways ||
      (isDesktop && initiallyExpandedOnDesktop) ||
      isStatic
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

  const dataTestClickableRegion: string = "disclosure-clickable-region";
  const onClick = (): void => switchPanelVisibility(!panelIsVisible);

  return isStatic ? (
    <>
      {headerComponent}
      {children}
    </>
  ) : onlyHeaderClickable ? (
    <>
      <ClickableRegion data-test={dataTestClickableRegion} onClick={onClick}>
        {headerComponent}
      </ClickableRegion>
      {Panel}
    </>
  ) : (
    <ClickableRegion data-test={dataTestClickableRegion} onClick={onClick}>
      {headerComponent}
      {Panel}
    </ClickableRegion>
  );
};

import React from "react";

import { PanelContainer, ClickableRegion } from "./styles";

export type IBodyHeight = number | null;

interface DisclosureProps {
  initiallyExpanded?: boolean;
  isStatic?: boolean;
  headerComponent: React.ReactNode;
  children: React.ReactNode;
}

export const Disclosure: React.FC<DisclosureProps> = ({
  initiallyExpanded = false,
  headerComponent,
  isStatic = false,
  children
}) => {
  const [panelIsVisible, switchPanelVisibility] = React.useState<boolean>(
    !!(initiallyExpanded || isStatic)
  );
  const [panelContainerHeight, setPanelContainerHeight] = React.useState<
    IBodyHeight
  >(null);

  const refCallback = (element: HTMLDivElement): void => {
    if (element && !panelContainerHeight)
      setPanelContainerHeight(element.getBoundingClientRect().height);
  };

  const getPanelContainerClass = (
    bodyHeight: number | null,
    panelIsVisible: boolean
  ): string =>
    !bodyHeight
      ? "initial-state"
      : panelIsVisible
      ? "panel-visible"
      : "panel-invisible";

  const panel = (
    <PanelContainer
      data-test="disclosure-panel"
      className={getPanelContainerClass(panelContainerHeight, panelIsVisible)}
      bodyHeight={panelContainerHeight}
      ref={refCallback}
    >
      {children}
    </PanelContainer>
  );

  return isStatic ? (
    <>
      {headerComponent}
      {children}
    </>
  ) : (
    <ClickableRegion
      data-test="disclosure-container"
      onClick={() => switchPanelVisibility(!panelIsVisible)}
    >
      {headerComponent}
      {panel}
    </ClickableRegion>
  );
};

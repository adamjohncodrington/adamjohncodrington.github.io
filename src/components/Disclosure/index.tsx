import React from "react";
import styled, { css } from "styled-components";

interface PanelContainerProps extends IThemeProp {
  bodyHeight: IBodyHeight;
}
const PanelContainer = styled.div`
  &.initial-state {
    max-height: unset;
  }

  transition: ${(props: PanelContainerProps) => props.theme.animationDuration}s
    ease;
  overflow: hidden;
  max-height: 0;

  &.panel-visible {
    max-height: ${(props: PanelContainerProps) => props.bodyHeight}px;
  }
`;

interface ClickableRegionProps {
  expandedAutomatically?: boolean;
}
const ClickableRegion = styled.div`
  ${(props: ClickableRegionProps) =>
    !props.expandedAutomatically &&
    css`
      cursor: pointer;
    `}
`;

type IBodyHeight = number | null;

interface DisclosureProps {
  expandedAutomatically?: boolean;
  onlyHeaderClickable?: boolean;
  headerComponent: React.ReactNode;
  children: React.ReactNode;
}

export const Disclosure: React.FC<DisclosureProps> = ({
  expandedAutomatically = false,
  onlyHeaderClickable = false,
  headerComponent,
  children
}) => {
  const [panelIsVisible, switchPanelVisibility] = React.useState<boolean>(
    expandedAutomatically
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

  const hiddenPanel = (
    <PanelContainer
      data-test="disclosure-panel"
      className={getPanelContainerClass(panelContainerHeight, panelIsVisible)}
      bodyHeight={panelContainerHeight}
      ref={refCallback}
    >
      {children}
    </PanelContainer>
  );

  const dataTestDisclosure: string = "disclosure-container";

  return onlyHeaderClickable ? (
    <>
      <ClickableRegion
        expandedAutomatically={expandedAutomatically}
        data-test={dataTestDisclosure}
        onClick={() =>
          !expandedAutomatically && switchPanelVisibility(!panelIsVisible)
        }
      >
        {headerComponent}
      </ClickableRegion>
      {hiddenPanel}
    </>
  ) : (
    <ClickableRegion
      data-test={dataTestDisclosure}
      onClick={() => switchPanelVisibility(!panelIsVisible)}
    >
      {headerComponent}
      {hiddenPanel}
    </ClickableRegion>
  );
};

import React from "react";
import styled, { css } from "styled-components";

interface ChildrenContainerProps extends ThemeProps {
  bodyHeight: IBodyHeight;
}
const ChildrenContainer = styled.div`
  &.initial-state {
    max-height: unset;
  }

  transition: ${(props: ChildrenContainerProps) =>
      props.theme.animationDuration}s
    ease;
  overflow: hidden;
  max-height: 0;

  &.child-visible {
    max-height: ${(props: ChildrenContainerProps) => props.bodyHeight}px;
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

interface VisibilityToggleProps {
  expandedAutomatically?: boolean;
  onlyHeaderClickable?: boolean;
  headerComponent: React.ReactNode;
  children: React.ReactNode;
}

export const VisibilityToggle: React.FC<VisibilityToggleProps> = ({
  expandedAutomatically = false,
  onlyHeaderClickable = false,
  headerComponent,
  children
}) => {
  const [childIsVisible, switchChildVisibility] = React.useState<boolean>(
    expandedAutomatically
  );
  const [childrenContainerHeight, setChildrenContainerHeight] = React.useState<
    IBodyHeight
  >(null);

  const refCallback = (element: HTMLDivElement): void => {
    if (element && !childrenContainerHeight)
      setChildrenContainerHeight(element.getBoundingClientRect().height);
  };

  const getChildrenContainerClass = (
    bodyHeight: number | null,
    childIsVisible: boolean
  ): string =>
    !bodyHeight
      ? "initial-state"
      : childIsVisible
      ? "child-visible"
      : "child-invisible";

  const hiddenPanel = (
    <ChildrenContainer
      data-test="visibility-toggle-children"
      className={getChildrenContainerClass(
        childrenContainerHeight,
        childIsVisible
      )}
      bodyHeight={childrenContainerHeight}
      ref={refCallback}
    >
      {children}
    </ChildrenContainer>
  );

  const dataTestVisibilityToggle = "visibility-toggle-container";

  return onlyHeaderClickable ? (
    <>
      <ClickableRegion
        expandedAutomatically={expandedAutomatically}
        data-test={dataTestVisibilityToggle}
        onClick={() =>
          !expandedAutomatically && switchChildVisibility(!childIsVisible)
        }
      >
        {headerComponent}
      </ClickableRegion>
      {hiddenPanel}
    </>
  ) : (
    <ClickableRegion
      data-test={dataTestVisibilityToggle}
      onClick={() => switchChildVisibility(!childIsVisible)}
    >
      {headerComponent}
      {hiddenPanel}
    </ClickableRegion>
  );
};

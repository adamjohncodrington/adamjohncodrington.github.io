import React from "react";
import styled from "styled-components";

import { FlexRow } from "primitives";
import { useMediaQueries } from "@utils";

const MediaQueryChecksContainer = styled.div`
  font-size: 20px;
  background: pink;
`;

const QueryRow = styled(FlexRow)`
  padding: 10px;
`;

interface IQuery {
  query: boolean;
}

interface IQueryAndName extends IQuery {
  name: string;
}

const TrueOrFalse = ({ query }: IQuery) =>
  query ? <strong>true</strong> : <span>false</span>;

const FixedWidthSpan = styled.span`
  width: 300px;
`;

export const MediaQueryChecks: React.FC = () => {
  const {
    isPhoneSmall,
    isPhoneLarge,
    isPhone,
    isTabletSmall,
    isTabletSmallOrLarger,
    isTabletLarge,
    isTablet,
    isLaptop,
    isDesktop,
    isLaptopOrDesktop,
    isPortrait,
    isLandscape,
    isRetina,

    displayPageSectionsIn1Column,
    displayPageSectionsIn2Columns
  } = useMediaQueries();

  const QUERIES_AND_NAMES: Array<IQueryAndName> = [
    { query: isPhoneSmall, name: "isPhoneSmall" },
    { query: isPhoneLarge, name: "isPhoneLarge" },
    { query: isPhone, name: "isPhone" },
    { query: isTabletSmall, name: "isTabletSmall" },
    { query: isTabletSmallOrLarger, name: "isTabletSmallOrLarger" },
    { query: isTabletLarge, name: "isTabletLarge" },
    { query: isTablet, name: "isTablet" },
    { query: isLaptop, name: "isLaptop" },
    { query: isDesktop, name: "isDesktop" },
    { query: isLaptopOrDesktop, name: "isLaptopOrDesktop" },
    { query: isPortrait, name: "isPortrait" },
    { query: isLandscape, name: "isLandscape" },
    { query: isRetina, name: "isRetina" },

    {
      query: displayPageSectionsIn1Column,
      name: "displayPageSectionsIn1Column"
    },
    {
      query: displayPageSectionsIn2Columns,
      name: "displayPageSectionsIn2Columns"
    }
  ];

  return (
    <MediaQueryChecksContainer>
      {QUERIES_AND_NAMES.map(({ query, name }: IQueryAndName) => (
        <QueryRow>
          <FixedWidthSpan>{name}: </FixedWidthSpan>
          <TrueOrFalse query={query} />
        </QueryRow>
      ))}
    </MediaQueryChecksContainer>
  );
};

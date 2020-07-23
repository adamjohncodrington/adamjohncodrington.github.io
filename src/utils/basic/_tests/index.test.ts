import { UNICODE } from "@constants";

import { arrayToString } from "../arrayToString";
import { moveTheSuffixToPrefix } from "../moveTheSuffixToPrefix";
import { replaceSpacesWithDashes } from "../replaceSpacesWithDashes";
import { decimalToFractionString } from "../decimalToFractionString";

describe("Basic utils", () => {
  describe("decimalToFractionString function", () => {
    const { QUARTER, HALF, THREE_QUARTERS } = UNICODE;

    it("should work on all decimal types", () => {
      expect(decimalToFractionString(0)).toEqual("0");
      expect(decimalToFractionString(0.25)).toEqual(QUARTER);
      expect(decimalToFractionString(0.5)).toEqual(HALF);
      expect(decimalToFractionString(0.75)).toEqual(THREE_QUARTERS);
      expect(decimalToFractionString(1)).toEqual("1");
      expect(decimalToFractionString(1.25)).toEqual("1" + QUARTER);
      expect(decimalToFractionString(1.5)).toEqual("1" + HALF);
      expect(decimalToFractionString(1.75)).toEqual("1" + THREE_QUARTERS);
      expect(decimalToFractionString(2)).toEqual("2");
      expect(decimalToFractionString(2.25)).toEqual("2" + QUARTER);
      expect(decimalToFractionString(2.5)).toEqual("2" + HALF);
      expect(decimalToFractionString(2.75)).toEqual("2" + THREE_QUARTERS);
      expect(decimalToFractionString(3)).toEqual("3");
    });
  });

  describe("arrayToString function", () => {
    //TODO: test that this implicitly calls `moveTheSuffixToPrefix`
    it("should separate a string of arrays with commas", () => {
      expect(arrayToString(["Apple", "Banana", "Carrot"])).toEqual(
        "Apple, Banana, Carrot"
      );
    });

    it("should output an ampersand on a pair if requested", () => {
      expect(
        arrayToString(["Apple", "Banana"], { useAmpersandsForPair: true })
      ).toEqual("Apple & Banana");
    });
  });

  describe("moveTheSuffixToPrefix function", () => {
    it("should make a word ending in `, The` read properly", () => {
      expect(moveTheSuffixToPrefix("Website, The")).toEqual("The Website");
    });

    it("should not affect words that do not contain `, The`", () => {
      expect(moveTheSuffixToPrefix("Website")).toEqual("Website");
    });
  });

  describe("replaceSpacesWithDashes function", () => {
    it("should replace spaces with dashes and transform to lower case", () => {
      expect(replaceSpacesWithDashes("Adam John Codrington")).toEqual(
        "adam-john-codrington"
      );
    });
  });
});

import { arrayToString } from "../arrayToString";
import { moveTheSuffixToPrefix } from "../moveTheSuffixToPrefix";
import { replaceSpacesWithDashes } from "../replaceSpacesWithDashes";

describe("Basic utils", () => {
  describe("arrayToString function", () => {
    //TODO: test that this implicitly calls `moveTheSuffixToPrefix`
    it("should separate a string of arrays with commas", () => {
      expect(
        arrayToString({ stringArray: ["Apple", "Banana", "Carrot"] })
      ).toEqual("Apple, Banana, Carrot");
    });

    it("should output an ampersand on a pair if requested", () => {
      expect(
        arrayToString({
          stringArray: ["Apple", "Banana"],
          useAmpersandsForPair: true
        })
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

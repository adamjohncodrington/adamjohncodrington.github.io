import React from "react";

import { Ul, Li } from "../../../primitives";

interface RecipeCardMethodProps {
  method: IRecipeMethod;
}

export const RecipeCardMethod: React.FC<RecipeCardMethodProps> = ({
  method
}) => {
  if (method.length === 0) return null;

  return (
    <Ul>
      method
      {method.map((item, index) => (
        // TODO: this is not ok, use pseudo elements or CSS
        <Li key={index}>• {item}</Li>
      ))}
    </Ul>
  );
};

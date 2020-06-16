import React from "react";

import { Ul, Li } from "../../primitives";

interface RecipeCardMethodProps {
  method: IRecipeMethod;
}

export const RecipeCardMethod: React.FC<RecipeCardMethodProps> = ({
  method
}) => (
  <Ul>
    method
    {method.map((item, index) => (
      <Li key={index}>• {item}</Li>
    ))}
  </Ul>
);

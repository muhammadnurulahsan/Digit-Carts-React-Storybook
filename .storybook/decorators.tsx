import React from "react";
import { DecoratorFn } from "@storybook/react";

export const widthMaxWidth: DecoratorFn = (StoryFn) => {
  return (
    <div style={{ maxWidth: 400, margin: "auto", border: "2px solid #fab" }}>
      <StoryFn />
    </div>
  );
};

export const globalDecorators = [];

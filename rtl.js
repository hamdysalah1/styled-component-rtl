import { css } from "styled-components/macro";

export const rtl = (rule, property) => css`
  ${({ lang }) =>
    lang === "ar"
      ? `${getOppositeValue(rule)}: ${property};`
      : `${rule} : ${property};`}
`;

export const textAlign = (property) => css`
  ${({ lang }) =>
    `text-align: ${lang === "ar" ? getOppositeValue(property) : property};`}
`;

export const getOppositeValue = (rule) => {
  switch (rule) {
    case "left":
      return "right";
    case "right":
      return "left";
    case "margin-right":
      return "margin-left";
    case "marginLeft":
      return "margin-right";
    case "padding-left":
      return "padding-right";
    case "padding-right":
      return "padding-left";
    case "border-right":
      return "border-left";
    case "border-left":
      return "border-right";
    default:
      return rule;
  }
};

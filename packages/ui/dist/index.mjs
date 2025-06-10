// src/components/Text/Text.tsx
import styled from "@emotion/styled";

// src/components/Text/styles.ts
import { css } from "@emotion/react";
import { font } from "@odyssey-horizon/design-system";
var baseTextStyle = css`
  font-family: ${font.fontFamily.suit};
  line-height: ${font.fontHeight[140]};
  letter-spacing: ${font.letterSpacing[2]};
`;
var makeTextStyle = (size, weight) => css`
  ${baseTextStyle};
  font-size: ${font.fontSize[size]};
  font-weight: ${font.fontWeight[weight]};
`;
var getTextStyles = (variant) => {
  const styles = {
    H_B_28: makeTextStyle(28, "bold"),
    H_B_24: makeTextStyle(24, "bold"),
    H_B_20: makeTextStyle(20, "bold"),
    H_B_16: makeTextStyle(16, "bold"),
    H_B_12: makeTextStyle(12, "bold"),
    T_SB_24: makeTextStyle(24, "semibold"),
    T_SB_20: makeTextStyle(20, "semibold"),
    T_SB_16: makeTextStyle(16, "semibold"),
    T_SB_14: makeTextStyle(14, "semibold"),
    T_SB_12: makeTextStyle(12, "semibold"),
    B_M_20: makeTextStyle(20, "medium"),
    B_M_16: makeTextStyle(16, "medium"),
    B_M_14: makeTextStyle(14, "medium"),
    B_M_12: makeTextStyle(12, "medium"),
    B_M_8: makeTextStyle(8, "medium"),
    C_SB_12: makeTextStyle(12, "medium"),
    L_M_12: makeTextStyle(12, "medium"),
    P_R_16: makeTextStyle(16, "medium"),
    P_R_12: makeTextStyle(12, "medium"),
    BTN_SB_16: makeTextStyle(16, "medium"),
    BTN_SB_14: makeTextStyle(14, "medium"),
    BTN_SB_12: makeTextStyle(12, "medium")
  };
  return styles[variant] || styles.H_B_16;
};

// src/components/Text/Text.tsx
import { jsx } from "@emotion/react/jsx-runtime";
var Text = ({
  children,
  variant,
  color,
  width = "auto",
  textAlign = "left",
  ellipsis = false,
  whiteSpace = "nowrap",
  tag = "span",
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    StyledText,
    {
      as: tag,
      variant,
      ellipsis,
      color,
      width,
      textAlign,
      whiteSpace,
      ...props,
      children
    }
  );
};
var StyledText = styled.span`
  ${({ variant }) => getTextStyles(variant)}
  ${({ ellipsis }) => ellipsis && `
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
			`}
  color: ${({ color }) => color};
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
  white-space: ${({ whiteSpace }) => whiteSpace};
`;

// src/components/Icon/Icon.tsx
import styled2 from "@emotion/styled";
import { css as css2 } from "@emotion/react";
import { icon } from "@odyssey-horizon/design-system";
import { jsx as jsx2 } from "@emotion/react/jsx-runtime";
var DEFAULT_ICON_PROPS = {
  size: "medium",
  weight: "regular",
  fill: "regular"
};
var Icon = ({
  name,
  size = DEFAULT_ICON_PROPS.size,
  weight = DEFAULT_ICON_PROPS.weight,
  fill = DEFAULT_ICON_PROPS.fill,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden,
  ...props
}) => /* @__PURE__ */ jsx2(
  StyledIcon,
  {
    size,
    weight,
    fill,
    role: ariaLabel ? "img" : void 0,
    "aria-label": ariaLabel,
    "aria-hidden": ariaHidden != null ? ariaHidden : !ariaLabel ? true : void 0,
    ...props,
    children: name
  }
);
var baseIconStyle = css2`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${icon.fontFamily.materialSymbols};
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-feature-settings: 'liga';
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
`;
var makeIconStyle = (size, weight, fill) => css2`
  ${baseIconStyle};
  font-size: ${icon.iconSize[size]};
  font-variation-settings: 'FILL' ${icon.fill[fill]},
    'wght' ${weight === "regular" ? icon.weight.regular : icon.weight.light};
`;
var StyledIcon = styled2.span`
  ${({ size, weight, fill }) => makeIconStyle(size, weight, fill)}
`;
export {
  Icon,
  Text
};

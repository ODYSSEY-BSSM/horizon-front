// src/components/Text/Text.tsx
import styled from "@emotion/styled";

// src/components/Text/styles.ts
import { css } from "@emotion/react";
import { font } from "@horizon/design-system";
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
      style: { color, textAlign, width, whiteSpace },
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
`;
export {
  Text
};

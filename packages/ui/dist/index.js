"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Text: () => Text
});
module.exports = __toCommonJS(index_exports);

// src/components/Text/Text.tsx
var import_styled = __toESM(require("@emotion/styled"));

// src/components/Text/styles.ts
var import_react = require("@emotion/react");
var import_design_system = require("@horizon/design-system");
var baseTextStyle = import_react.css`
  font-family: ${import_design_system.font.fontFamily.suit};
  line-height: ${import_design_system.font.fontHeight[140]};
  letter-spacing: ${import_design_system.font.letterSpacing[2]};
`;
var makeTextStyle = (size, weight) => import_react.css`
  ${baseTextStyle};
  font-size: ${import_design_system.font.fontSize[size]};
  font-weight: ${import_design_system.font.fontWeight[weight]};
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
var import_jsx_runtime = require("@emotion/react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var StyledText = import_styled.default.span`
  ${({ variant }) => getTextStyles(variant)}
  ${({ ellipsis }) => ellipsis && `
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
			`}
`;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Text
});

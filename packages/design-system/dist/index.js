"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors,
  font: () => font,
  globalStyle: () => globalStyle
});
module.exports = __toCommonJS(src_exports);

// src/global.ts
var import_react = require("@emotion/react");

// src/color.ts
var colors = {
  primary: {
    100: "#E5EAFF",
    200: "#CCD4FF",
    300: "#AAB6F2",
    400: "#798DF2",
    500: "#5C5CE5",
    600: "#4747B2",
    700: "#333380",
    800: "#1F1F4D",
    900: "#0A0A1A"
  },
  secondary: {
    100: "#E6FFF2",
    200: "#C2F2DA",
    300: "#8AE5B8",
    400: "#57D998",
    500: "#29CC7A",
    600: "#179958",
    700: "#0A6638",
    800: "#03331B",
    900: "#001A0D"
  },
  grayscale: {
    100: "#E6E6E6",
    200: "#CCCCCC",
    300: "#B3B3B3",
    400: "#999999",
    500: "#808080",
    600: "#666666",
    700: "#4D4D4D",
    800: "#333333",
    900: "#1A1A1A"
  },
  warning: {
    light: "#FFAE33",
    dark: "#FF5533"
  },
  white: "#FFFFFF",
  black: "#000000",
  background: "#FFFFFF"
};

// src/global.ts
var globalStyle = import_react.css`
  @import url('https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: 'SUIT Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.5;
    background-color: ${colors.background};
    color: ${colors.grayscale[900]};
  }

  a {
    color: ${colors.primary[500]};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font: inherit;
    color: inherit;
  }

  input,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  ul,
  ol {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 600;
    line-height: 1.2;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  :focus-visible {
    outline: 2px solid ${colors.primary[500]};
    outline-offset: 2px;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.grayscale[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.grayscale[400]};
    border-radius: 4px;

    &:hover {
      background: ${colors.grayscale[500]};
    }
  }

  ::selection {
    background-color: ${colors.primary[200]};
    color: ${colors.primary[900]};
  }
`;

// src/font.ts
var font = {
  fontFamily: {
    suit: "'SUIT Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  fontWeight: {
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400
  },
  fontSize: {
    28: "1.75rem",
    24: "1.5rem",
    20: "1.25rem",
    18: "1.125rem",
    16: "1rem",
    14: "0.875rem",
    12: "0.75rem",
    8: "0.5rem"
  },
  letterSpacing: {
    2: "2%",
    4: "4%"
  },
  fontHeight: {
    140: "140%"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  font,
  globalStyle
});

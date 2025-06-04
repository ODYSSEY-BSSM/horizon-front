import * as _emotion_react from '@emotion/react';

declare const globalStyle: _emotion_react.SerializedStyles;

declare const colors: {
    readonly primary: {
        readonly 100: "#E5EAFF";
        readonly 200: "#CCD4FF";
        readonly 300: "#AAB6F2";
        readonly 400: "#798DF2";
        readonly 500: "#5C5CE5";
        readonly 600: "#4747B2";
        readonly 700: "#333380";
        readonly 800: "#1F1F4D";
        readonly 900: "#0A0A1A";
    };
    readonly secondary: {
        readonly 100: "#E6FFF2";
        readonly 200: "#C2F2DA";
        readonly 300: "#8AE5B8";
        readonly 400: "#57D998";
        readonly 500: "#29CC7A";
        readonly 600: "#179958";
        readonly 700: "#0A6638";
        readonly 800: "#03331B";
        readonly 900: "#001A0D";
    };
    readonly grayscale: {
        readonly 100: "#E6E6E6";
        readonly 200: "#CCCCCC";
        readonly 300: "#B3B3B3";
        readonly 400: "#999999";
        readonly 500: "#808080";
        readonly 600: "#666666";
        readonly 700: "#4D4D4D";
        readonly 800: "#333333";
        readonly 900: "#1A1A1A";
    };
    readonly warning: {
        readonly light: "#FFAE33";
        readonly dark: "#FF5533";
    };
    readonly white: "#FFFFFF";
    readonly black: "#000000";
    readonly background: "#FFFFFF";
};

declare const font: {
    readonly fontFamily: {
        readonly suit: "'SUIT Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
    };
    readonly fontWeight: {
        readonly bold: 700;
        readonly semibold: 600;
        readonly medium: 500;
        readonly regular: 400;
    };
    readonly fontSize: {
        readonly 28: "1.75rem";
        readonly 24: "1.5rem";
        readonly 20: "1.25rem";
        readonly 18: "1.125rem";
        readonly 16: "1rem";
        readonly 14: "0.875rem";
        readonly 12: "0.75rem";
        readonly 8: "0.5rem";
    };
    readonly letterSpacing: {
        readonly 2: "2%";
        readonly 4: "4%";
    };
    readonly fontHeight: {
        readonly 140: "140%";
    };
};

export { colors, font, globalStyle };

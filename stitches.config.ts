import { createStitches } from "@stitches/react";
const container_xl = "1440px";
const container_lg = "1140px";
const container_md = "960px";
const container_sm = "540px";
const container_xs = "360px";

export const media = {
  xxs: `screen and (max-width: ${container_xs})`,
  xs: `screen and (max-width: ${container_sm})`,
  sm: `screen and (max-width: ${container_md})`,
  md: `screen and (max-width: ${container_lg}) and (min-width: ${container_sm})`,
  lg: `screen and (max-width: ${container_xl}) and (min-width: ${container_lg})`,
  xl: `screen and (min-width: ${container_xl})`,
};

export const defaultTheme = {
  theme: {
    colors: {
      pink: "#ff0099",
      purple: "#6e0dd0",
      green: "#83f52c",
      red: "#ff6600",

      light_text_100: "rgba(0, 0, 0, 0.87)",
      light_text_200: "rgba(0, 0, 0, 0.6)",
      light_text_300: "rgba(0, 0, 0, 0.38)",

      dark_50: "#0C0E14",
      dark_100: "#1F2127",
      dark_200: "#282A2F",
      dark_300: "#47484D",

      dark_other_100: "rgba(255, 255, 255, 0.5)",
      dark_other_200: "rgba(255, 255, 255, 0.24)",
      dark_other_300: "rgba(255, 255, 255, 0.08)",
      dark_other_400: "rgba(255, 255, 255, 0.16)",

      dark_text_100: "#FFFFFF",
      dark_text_200: "rgba(255, 255, 255, 0.6)",
      dark_text_300: "rgba(255, 255, 255, 0.38)",
    },
    space: {
      quarck: "4px",
      nano: "8px",
      xxxs: "16px",
      xxs: "24px",
      xs: "32px",
      sm: "40px",
      md: "48px",
      lg: "56px",
      xl: "64px",
      xxl: "80px",
      xxxl: "120px",
      huge: "160px",
      giant: "200px",
    },
    sizes: {
      quarck: "4px",
      nano: "8px",
      xxxs: "16px",
      xxs: "24px",
      xs: "32px",
      sm: "40px",
      md: "48px",
      lg: "56px",
      xl: "64px",
      xxl: "80px",
      xxxl: "120px",
      huge: "160px",
      giant: "200px",
      container_xl: "1440px",
      container_lg: "1140px",
      container_md: "960px",
      container_sm: "540px",
      logo: "98px",
    },
    fontSizes: {
      header_6: "20px",
      header_5: "20px",
      header_4: "24px",
      header_3: "24px",
      header_2: "36px",
      header_1: "36px",

      body_4: "14px",
      body_3: "14px",
      body_2: "16px",
      body_1: "16px",

      caption_6: "8px",
      caption_5: "10px",
      caption_4: "10px",
      caption_3: "10px",
      caption_2: "12px",
      caption_1: "12px",
    },
    fontWeights: {
      header_6: "400",
      header_5: "700",
      header_4: "400",
      header_3: "800",
      header_2: "400",
      header_1: "800",

      body_4: "400",
      body_3: "600",
      body_2: "400",
      body_1: "600",

      caption_6: "400",
      caption_5: "600",
      caption_4: "400",
      caption_3: "600",
      caption_2: "400",
      caption_1: "600",

      light: "300",
    },
    lineHeights: {
      header_6: "28px",
      header_5: "28px",
      header_4: "32px",
      header_3: "32px",
      header_2: "48px",
      header_1: "48px",

      body_4: "20px",
      body_3: "20px",
      body_2: "24px",
      body_1: "24px",

      caption_6: "10px",
      caption_5: "14px",
      caption_4: "14px",
      caption_3: "14px",
      caption_2: "16px",
      caption_1: "16px",
    },
    fonts: {
      primary: '"Ubuntu", sans-serif',
    },
    radii: {
      none: "0px",
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      pill: "500px",
      circular: "50%",
    },
  },
  media: {
    ...media,
  },
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches(defaultTheme);

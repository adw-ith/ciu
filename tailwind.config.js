/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        h1: ["64px", { lineHeight: "76px", fontWeight: "600" }],
        h2: ["36px", { lineHeight: "44px", fontWeight: "600" }],
        h3: ["28px", { lineHeight: "36px", fontWeight: "600" }],
        h4: ["20px", { lineHeight: "28px", fontWeight: "600" }],

        body1: ["18px", { lineHeight: "28px", fontWeight: "400" }],
        body1_medium: ["18px", { lineHeight: "28px", fontWeight: "500" }],
        body2: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        body2_medium: ["16px", { lineHeight: "24px", fontWeight: "500" }],

        body3: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        body3_medium: ["14px", { lineHeight: "20px", fontWeight: "500" }],

        body4: ["12px", { lineHeight: "16px", fontWeight: "400" }],
        body4_medium: ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },
      colors: {
        primary: "#4CAF4F",
        secondary: "#263238",
        info: "#2194f3",
        black: "#263238",
        white_stroke: "#ABBED1",
        d_grey: "#4D4D4D",
        grey: "#717171",
        i_grey: "#89939E",
        greyblue: "#ABBED1",
        silver: "#F5F7FA",
        white: "#FFFFFF",

        shade_1: "#43A046",
        shade_2: "#388E3B",
        shade_3: "#237D31",
        shade_4: "#1B5E1F",
        shade_5: "#103E13",

        tint_1: "#66BB69",
        tint_2: "#81C784",
        tint_3: "#A5D6A7",
        tint_4: "#C8E6C9",
        tint_5: "#E8F5E9",

        warning: "#FBC02D",
        error: "#E53835",
        success: "#2E7D31",
      },
      boxShadow: {
        shadow_c1: "0px 2px 4px 0px rgba(171, 190, 209, 0.20)",
        shadow_c2: "0px 4px 8px 0px rgba(171, 190, 209, 0.40)",
        shadow_c3: "0px 6px 12px 0px rgba(171, 190, 209, 0.30)",
        shadow_c4: "0px 8px 16px 0px rgba(171, 190, 209, 0.40)",
        shadow_c5: "0px 16px 32px 0px rgba(171, 190, 209, 0.30)",
      },
    },
  },
  plugins: [],
};

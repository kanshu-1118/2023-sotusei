import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          main : {value : "#F57F17"},
          accent : {value : "#86E58A"},
          red : {value : "#F15742"},
          base : {value : "#FAFCFF"},
          fontColor : {value : "#100F0F"},
          gray:{value: "#D9D9D9"},
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});

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
      keyframes:{
        fadeIn:{
          "from":{opacity:"0"},
          "to":{opacity:"1"}
        },
        slideUp:{
          "from":{bottom:"-100%"},
          "to":{ bottom:"0%"}
        }
      },
      tokens: {
        animations:{
          animations:{
            fadeIn:{
              value: "fadeIn .3s ease"
            },
            slideUp:{
              value:"slideUp .3s ease forwards"
            }
          }
        },
        colors: {
          main : {value : "#F57F17"},
          accent : {value : "#86E58A"},
          red : {value : "#F15742"},
          base : {value : "#FAFCFF"},
          fontColor : {value : "#100F0F"},
          gray:{value: "#D9D9D9"},
        },

      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});

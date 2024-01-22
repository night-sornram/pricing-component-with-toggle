import type { Config } from "tailwindcss";

const {colors : defaultColors } = require("tailwindcss/defaultTheme")

const colors = {
  ...defaultColors,
  ...{
    "custom" : {
      "linear-start" : "hsl(236, 72%, 79%)",
      "linear-end" : "hsl(237, 63%, 64%)",
      "100" : "hsl(240, 78%, 98%)",
      "200" : "hsl(234, 14%, 74%)",
      "300" : "hsl(233, 13%, 49%)",
      "400" : "hsl(232, 13%, 33%)"
      
    }
  }
}


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "bottom" : "url('/images/bg-bottom.svg')",
          "top" : "url('/images/bg-top.svg')"
      },
      colors : colors
    },
  },
  plugins: [],
};
export default config;

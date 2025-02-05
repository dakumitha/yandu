/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        line: "#d9d9d9",
        text: "#666",
        "backgorund-1": "#f5f5f5",
        "background-3": "#f3f9fb",
        heading: "#222",
        primary: "#008ecc",
        "light-greyscale-text-primary": "#181818",
        border: "#ededed",
        deepskyblue: "#05abf3",
        peachpuff: "#ffd1b0",
        linen: "#ffecdf",
        khaki: "#f6de8d",
        lemonchiffon: "#fff3cc",
        darkslategray: {
          100: "#494949",
          200: "#313131",
        },
        black: "#000",
        forestgreen: "#249b3e",
        gray: "#212844",
      },
      spacing: {},
      fontFamily: {
        "hk-grotesk": "'HK Grotesk'",
        inherit: "inherit",
      },
      borderRadius: {
        lg: "18px",
        "3xs": "10px",
        "43xl": "62px",
        mini: "15px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

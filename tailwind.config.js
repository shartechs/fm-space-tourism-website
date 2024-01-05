/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      colors: {
        "blue": "#0B0D17",
        "purple": "#D0D6F9",
        "white": "#FFFFFF",
        "grey": "#979797",
      },
      fontFamily: {
        "barlow": ["Barlow Condensed", "sans-serif"], // Primary sans-serif font
        "bellafair": ["Bellafair", "sans-serif"], // Secondary sans-serif font
      },
      extend: {
        screens: {
          sm: "375px",
          md: "768px",
          lg: "976px",
          xl: "1440px",
        },
        fontSize: {
          "h1-desktop": "150px",
          "h1-mobile": "80px",
          "h2-desktop": "100px",
          "h2-tablet": "80px",
          "h2-mobile": "56px",
          "h3-desktop": "56px",
          "h3-tablet": "40px",
          "h3-mobile": "24px",
          "h4-desktop": "32px",
          "h4-tablet": "24px",
          "h4-mobile": "16px",
          "h5-desktop": "28px",
          "h5-tablet": "20px",
          "h5-mobile": "16px",
          "sh1": "28px",
          "sh2": "14px",
          "nav-desktop": "16px",
          "nav-mobile": "14px",
          "sm": "15px",
          "md": "16px",
          "xl": "18px",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xsss: "385px",
      apple: "380px",
      xss: "400px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      xlg: "850px",
      lg: "960px",
      xll: "1100px",
      xl: "1200px",
      xxl: "1440px",
    },
    extend: {
      backgroundImage: {
        bg1: "url('../src/Assets/anand/bg.png')",
        bg2: "url('../src/Assets/anand/bg2.png')",
        bg3: "url('../src/Assets/anand/bg3.png')",
        bg4: "url('../src/Assets/anand/bg4.png')",
        navBg: "url('../src/Assets/anand/navbg.png')",
        navBg2: "url('../src/Assets/anand/navbg2.png')",
        dBg: "url('../src/Assets/anand/dBg.png')",
        "bg-t": "url('../src/Assets/anand/t-bg.png')",
        form: "url('../src/Assets/anand/form.png')",
        f1: "url('../src/Assets/anand/fi-1.png')",
        f2: "url('../src/Assets/anand/fi-2.png')",
        contactBg: "url('../src/Assets/bg/bg1.png')",
        contactscroll: "url('../src/Assets/bg/contact.png')",
      },
      fontFamily: {
        "lobster-two": ["Lobster Two", "sans-serif"],
        merienda: ["Merienda", "sans-serif"],
        domine: ["Domine", "serif"],
        dm: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

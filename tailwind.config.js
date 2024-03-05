/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        CTAtext: "hsl(356, 100%, 66%)",
        CTAhoverbackground: "hsl(355, 100%, 74%)",
        heading: "hsl(208, 49%, 24%)",
        footerText: "hsl(240, 2%, 79%)",
        bodyCopy: "hsl(207, 13%, 34%)",
        footerBackground: "hsl(240, 10%, 16%)",
      },
      backgroundImage: {
        introMoblie: "linear-gradient(hsl(13, 100%, 72%),hsl(353, 100%, 62%))",
        body: "linear-gradient(hsl(237, 17%, 21%),hsl(237, 23%, 32%))",
        bgIntroMoblie: "url(../public/images/bg-pattern-intro-mobile.svg)",
        bgIntroDesktop: "url(../public/images/bg-pattern-intro-desktop.svg)",
        patterCircles: "url(../public/images/bg-pattern-circles.svg)",
      },
      fontFamily: {
        Ubuntu: "Ubuntu , sans-serif",
      },
    },
  },
  plugins: [],
};

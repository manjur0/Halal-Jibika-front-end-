/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://html.creativegigstf.com/khuj/khuj/images/bg/bg-1.png')",
      },
    },
  },
  plugins: [],
};

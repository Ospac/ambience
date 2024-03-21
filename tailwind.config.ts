import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '400%' : '400%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  
      },
      animation: {
        "gradient-moving":
          "gradient 10s ease infinite", 
      },
      keyframes : {
        gradient : {
            '0%' : {
              'background-position': '0% 50%'
            },
            '50%' :{
              'background-position': '100% 50%'
            },
            '100%':{
              'background-position': '0% 50%'
            }
        }
      },

  },
  plugins: [],
}};
export default config;

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {   colors: {
      customGreen: '#198754',
      customDark: '#212529',
    },},
  },
  plugins: [],
});
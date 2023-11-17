/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 10px 20px 0px rgba(32, 253, 201, 0.15)",
        custom_login: "0px 0px 0px 4px rgba(132, 220, 245, 0.24);",
        custom_history: "0px 0px 0px 4px rgba(0, 0, 0, 0.26);",
        checkbox:
          "0px 1px 3px 0px rgba(0, 0, 0, 0.05), 0px 1px 2px -1px rgba(0, 0, 0, 0.05);",
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [],
};

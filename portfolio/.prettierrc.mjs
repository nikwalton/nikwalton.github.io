//** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overridees: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

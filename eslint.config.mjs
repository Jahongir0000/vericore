import eslintConfigNext from "eslint-config-next";

const eslintConfig = [
  ...eslintConfigNext,
  {
    ignores: ["coverage/**", "*.md"],
  },
];

export default eslintConfig;

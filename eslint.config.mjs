import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Import plugins and parser
import typescriptParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});


const eslintConfig = [
  // Extends legacy `.eslintrc`-style configurations
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier"
  ),

  // Global configuration
  {
    ignores: ["node_modules", "dist"], // Ignore common directories
  },

  // Global plugins and rules
  {
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      "tailwindcss/classnames-order": "off",
    },
  },

  // Overrides for TypeScript files
  {
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      "tailwindcss/classnames-order": "off",
    },
  },

    // React-specific settings 
	{
		settings: {
		  react: {
			version: "detect", // Automatically detect React version
		  },
		},
	  },
];

export default eslintConfig;

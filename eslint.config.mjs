import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-config-prettier';
//import tailwind from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  //...tailwind.configs['flat/recommended'],
  prettier,
  {
    ignores: [
      'node_modules',
      'out',
      'dist',
      'build',
      'coverage',
      '.next',
      '.turbo',
      'public/static',
      'public/assets',
      'public/favicon.ico',
      'public/robots.txt',
      'public/sitemap.xml',
    ],
  },
];

export default eslintConfig;

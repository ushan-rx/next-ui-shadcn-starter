# 🚀 Hero UI + Shadcn UI Starter Project.

This Project integrates **Hero UI** and **Shadcn UI** components in a single Next.js project, providing developers with a seamless experience of using both libraries together.

---

## 🌟 What's Included
- **Tailwind CSS**: Fully styled for responsive and modern design.
- **Pre-configured Setup**: Start building immediately with this ready-to-use integration.
- **Prettier & eslint**: pre-configured as for a typescript react project with next.js.
- **Pre-commit**: added pre-commit formatting testing with husky, lint-staged & prettier.

- **Component Management**:  
  - You can remove or add components from these libraries using the standard CLI process.
  - Already added
    - *Hero UI Components:*
        - Button
        - Skeleton
        - Card
    - *Shadcn UI Components:* (New York and Neutral styles used):
        - Button
        - Calendar
  - **To change the default style of Shadcn UI components**:  
    Update the style in the `components.json` file and re-install the components.
---

## ⚠️ Known Issues
1. **Default Style Conflicts**:  
   Using the same default component out of the box (e.g., `Button`) from both libraries on a single page can cause styling issues because they are on different design systems.  
   **Workaround**: Avoid using identical components from both libraries on the same page or create a custom theme.

2. **Theme System in Progress**:  
   A unified theme system to resolve style incompatibilities is under development and will be included in future releases.

---

## 📧 Feedback & Bug Reporting
- **Found a bug?** Open an issue: [GitHub Issues](https://github.com/ushan-rx/next-ui-shadcn-starter/issues)
- **Suggestions?** Email me: [ushan.r.senarathna@gmail.com](mailto:ushan.r.senarathna@gmail.com)

---

## 🛠 Getting Started

First clone the repository
```bash
git clone https://github.com/ushan-rx/next-ui-shadcn-starter
```
Then inside project directory:
```bash
npm install
```

Run the development server locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, Shadcn, HeroUI(next ui) take a look at the following resources:

- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [Hero UI Documentation](https://www.heroui.com/docs/guide/introduction)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Your feedback & contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

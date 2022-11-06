This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Code Documentation (Syntax)
1.  npx create-next-app@latest --ts app-name
2. create tailwindcss (npm install -D tailwindcss postcss autoprefixer) and create config file (npx tailwindcss init -p)
    - Add the paths to all of your template files in your in tailwind.config.js (
        content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components(**/*.{js,jsx,ts,tsx}",
  ],
    )
    - Add tailwind layers into globals.css 
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

    @layer components {
      .className {
        @apply css 
      }
    }

** For the contact page i prefer to use [react-hook-form] (https://blog.logrocket.com/react-hook-form-complete-guide/#:~:text=React%20Hook%20Form%20is%20a%20library%20that%20helps,fewer%20lines%20of%20code%20than%20other%20form%20libraries.) package to validate 
## Sanity backend setup
 1. install the cli globally [npm install -g@sanity/cli]
 2. [sanity init] to initialize the sanity 
 Create a project and schemas and put all schemas into one global schema(schema.js)
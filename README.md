<div align="center">
  <h1>aulianza.id</h1>
  <p>🔥 Personal website built with Next.js, TypeScript, Tailwind CSS, SWR and Prisma with MySQL</p>
</div>
<br />

## Introduction

This website was built from scratch using Next.js and was first initialized in June 2023. It will undergo regular updates and serve as both a valuable learning resource and a platform for me to share my knowledge.
<br /><br />

## Features

On this website there are several features that will continue to be updated and added in the future.

### 🤖 ChatGPT AI

You can access this feature by opening the command palette [cmd+k], then typing whatever you want to search/ask for.

Note: 
Due this site is using free cloud hosting services (Vercel) with certain limitations, sometimes an error will occur if the response from the open AI API is too long, but you can change it in the verce.json file to upgrade memory and maxDuration to be bigger according to the capabilities of your vercel plan.

### 🕗 Wakatime

Data is retrieved using the Wakatime API and then displayed on the dashboard, built with Next.js API routes deployed as serverless functions.

### 📝 Blogs

The CMS Blog on this website utilizes the API from the dev.to platform. The displayed articles are one-to-one with the articles published on my dev.to blog and are updated in real-time.

The data fetching technique used to retrieve articles from dev.to involves using Client-Side Rendering (CSR) for the blog list and Server-Side Rendering (SSR) for the blog details.

### 🗳 Projects

The data projects on this blog are taken from the MySQL database connected through the Prisma Client. The database for this application is hosted on PlanetScale DB.

The data fetching method used to retrieve data projects is Incremental Static Regeneration (ISR) with 1 second revalidation and Server-Side Rendering (SSR) for the project details..
<br /><br />

## Performance

### PageSpeed Insights

Report URL: https://pagespeed.web.dev/analysis/https-aulianza-id/pk0y6xcz25?form_factor=desktop

![image](https://github.com/aulianza/aulianza.id/assets/15605885/d87a6083-caf3-4b84-ba59-975c07193a9f)

### GTmetrix

Report URL: [https://pagespeed.web.dev/analysis/https-aulianza-id/pk0y6xcz25?form_factor=desktop](https://gtmetrix.com/reports/aulianza.id/REEiduoo/)

![image](https://github.com/aulianza/aulianza.id/assets/15605885/953dc131-bf52-4ef6-913c-f6eb8fb6c6a7)
<br /><br />

## Getting Started

If you are interested in running this project on your local machine, you can do so in just 3 easy steps below. Additionally, remember to update the ".env.example" file to ".env" and replace the variables with your own in the ".env" file.

### 1. Clone this template using one of the three ways:

1. Clone using git

   ```bash
   git clone https://github.com/aulianza/aulianza.id
   ```

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/aulianza/aulianza.id project-name
   ```

3. Using `degit`

   ```bash
   npx degit aulianza/aulianza.id YOUR_APP_NAME
   ```

4. Deploy to Vercel or Netlify, etc

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/aulianza/aulianza.id)
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aulianza/aulianza.id)

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.
<br /><br />

## License

Licensed under the [GPL-3.0 license](https://github.com/aulianza/aulianza.id/blob/master/LICENSE).

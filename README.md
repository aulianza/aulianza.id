<div align="center">
  <h1>aulianza.id</h1>
  <p>🔥 Personal website was built originally from scratch using Next.js, TypeScript, Tailwind CSS, SWR, Firebase and Prisma with PostgreSQL</p>

[![GitHub Repo stars](https://img.shields.io/github/stars/aulianza/aulianza.id)](https://github.com/aulianza/aulianza.id/stargazers)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/status.svg)](https://depfu.com)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/overview.svg)](https://depfu.com/github/aulianza/aulianza.id?project_id=38809)
[![Depfu](https://badges.depfu.com/badges/02483ebb21fdb2182a66a28b68d1b7b0/count.svg)](https://depfu.com/github/aulianza/aulianza.id?project_id=38809)
[![Last Update](https://img.shields.io/badge/deps%20update-every%20sunday-blue.svg)](https://shields.io/)

</div>
<br />

<img width="1359" alt="image" src="https://github.com/aulianza/aulianza.id/assets/15605885/e9665038-6e84-4c8e-a847-fb90138c0303">

## Introduction

This website was meticulously crafted from the ground up using Next.js, along with various complementary technologies. Its inception dates back to June 2023.

Ongoing enhancements, encompassing both functionality and content, are in the pipeline. This website stands as a treasured repository of my acquired knowledge, also serving as a platform for me to disseminate insights.

Feel welcome to utilize this website as a point of reference, a wellspring of inspiration, or as a template, all in accordance with the provided license. The source code is at your disposal to suit your specific requirements.

Should you find value in this resource, your consideration of leaving a rating is greatly appreciated. 😎👍🏻

If you have any questions, suggestions, input or anything else, don't hesitate to contact me🧑‍💻
<br /><br />

## Features

On this website there are several features that will continue to be updated and added in the future.

### 🤖 ChatGPT AI (Offline)

You can access this feature by opening the command palette [cmd+k], then typing whatever you want to search/ask for.

Note:

If you're using Chat Completions engine model of ChatGPT, please concern about this:

Due this site is using free cloud hosting services (Vercel) with certain limitations (Serverless Function Execution Timeout), sometimes an error will occur if the response from the open AI API is too long, but you can change it in the vercel.json file to upgrade memory and maxDuration to be bigger according to the capabilities of your vercel plan.

### 💻 JavaScript Playground

A no-fuss pure JavaScript playground with a live feedback loop.

### 💬 Realtime Guestbook

Realtime guestbook chat is powered by Firebase. Anyone can leave me a message in this website.

### 🎧 Spotify

Displays song information being played on spotify in real time using the Spotify API and SWR.

### 🕗 Wakatime

Data is retrieved using the Wakatime API and then displayed on the dashboard, built with Next.js API routes deployed as serverless functions.

### 📝 Blogs

The content on this blog is meticulously managed and sourced from a self-hosted headless CMS powered by WordPress, exemplifying our commitment to a streamlined and efficient content delivery system.

The data fetching technique used to retrieve articles from WordPress CMS API involves using Client-Side Rendering (CSR) for the blog list and Server-Side Rendering (SSR) for the blog details.

### 🗳 Projects

The data projects on this blog are taken from the PostgreSQL database connected through the Prisma Client. The database for this application is hosted on Supabase DB.

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

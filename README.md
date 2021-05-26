## Welcome to Robban's Swedish Corner!

This is the GitHub repository for [Robban's Swedish Corner](http://robbansswedishcorner.com), a website with the aim of teaching the Swedish language to beginners and advanced learners alike. 

You may submit PRs to this repository.

Please contact me at admin[at]robbansswedishcorner[dot]com if you have any technical inquires.


### Table of contents



- [Copyright](#copyright)
- [Tech stack](#tech-stack)
- [Getting Started](#getting-started)
- [Building](#building)
- [Folder structure](#folder-structure)


## Copyright

You may browse and use the code as you wish, however, you may not use the lesson contents or images without permission.

## Tech stack

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The project includes frontend and backend components written in Typescript. Frontend components are written in React with [`Material UI`](https://material-ui.com).

## Getting Started

If you haven't done so already, download and install [NodeJS](https://nodejs.org/).

Clone the repo and go to the svenska2-next folder:

```
git clone https://github.com/pgrobban/svenska2-next.git
cd svenska2-next
```

Install the dependencies:

```
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. If you wish to use a different port, change the ```dev``` script in package.json 

```bash
 "dev": "next dev -p 3001"
```

and restart the server. 

You are now ready to begin developing. Since NextJS has a built in hot reloader, you don't need to restart the development server when making changes; you should see changes in your browser as soon as you save files.

## Building for production

The development server is suitable for development but slow and insecure for production use. To make a production build, use the following commands:

```bash
npm run build
npm run start
```

If everything went well, you can open your browser on the same URL as in the development step. 


## Folder structure

The ```components``` folder contains frontend components that can be reused over multiple views. 

The subfolder ```exercises``` contains base components for exercises.Lessons can have different instances of exercise components.
The subfolder ```layout``` that the desgn is built upon. Specifically, the file ```Layout.tsx``` should be used as the base layout for all views.

The ```helpers``` folder contains frontend helper functions, type definitions and default props for external dependency components.

The ```models``` folder contains course and lesson contents, as well as exercises components.

The ```pages``` folder contains routes for the server-side rendering of the views. These pages are matched with the URL either statically (such as ```/about``` matches ```about.tsx```) or dynamically using parameters (such as ```lesson/from-a-to-ö``` will match the ```lesson/[lessonUrlName].tsx``` route).

The ```public``` folder contains all asset files that the browser is allowed to see, such as images, sounds and fonts.
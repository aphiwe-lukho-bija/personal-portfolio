# personal-portfolio
# Aphiwe Lukho Bija - Portfolio Website
## Features
**Home**
Hero section with introduction and profile picture. Woody theme with cream content sections.

**About Me**  
Personal background, strengths, and journey in software development. Round profile picture with consistent styling.

**My Goals**
Short-term and long-term goals in tech and entrepreneurship. Clean layout with centered content.

**Gallery/Interests**
14 interest cards with round images. Hover effects and fade animations using CSS only.

**Contact Me**
Contact details: Email, LinkedIn, GitHub, Location. Consistent round profile picture.





# Aphiwe Lukho Bija - Vue Portfolio

This is a personal portfolio website built with **Vue 3** and **Vite**. The original portfolio used separate static HTML pages. It was converted into a Vue single-page application so that the content and navigation can update without refreshing the browser.

## Features

- Home page with introduction and profile image
- About, Goals, Interests, and Contact views
- Reactive navigation using Vue
- Data-driven interest cards using `v-for`
- Reactive contact form using `v-model`
- Responsive layout for desktop and mobile screens
- CSS animations and custom styling

## Project Structure

```text
personal-portfolio/
├── index.html          # Vite entry page
├── package.json        # Project scripts and dependencies
├── vite.config.js      # Vite and Vue configuration
├── src/
│   ├── App.vue         # Main Vue application
│   ├── main.js         # Creates and mounts the Vue app
│   └── style.css       # Vue app styling
└── legacy-static/      # Original HTML version kept for reference
```

## How to Run

Open a terminal in the project folder:

```powershell
cd C:\Users\Trainee\Desktop\portfolio\personal-portfolio
npm.cmd install
npm.cmd run dev
```

Open the local address shown in the terminal, usually:

```text
http://localhost:5173
```

To create a production build:

```powershell
npm.cmd run build
```

## How the Conversion Was Done

1. Added Vue 3 and the Vite Vue plugin to the project.
2. Created `src/main.js` to mount the Vue application to `#app`.
3. Moved the portfolio content into `src/App.vue`.
4. Replaced separate HTML page links with Vue navigation and reactive view switching.
5. Used `v-if` for different views, `v-for` for interest cards, and `v-model` for the contact form.
6. Moved the new design styles into `src/style.css`.

## Challenges Faced

- Understanding the Vue project structure and how `main.js`, `App.vue`, and `index.html` work together.
- Moving content from several static HTML pages into one Vue application.
- Keeping the navigation and contact form interactive without full-page reloads.
- Running commands from the correct folder because `package.json` is inside `personal-portfolio`.
- PowerShell blocked the normal `npm` command, so `npm.cmd` was used instead.

## What I Learned

- How to create and mount a Vue 3 application.
- How Vue directives such as `v-if`, `v-for`, and `v-model` work.
- How reactive state can control navigation and form feedback.
- How Vue and Vite work together during development and production builds.

## Author

Aphiwe Lukho Bija

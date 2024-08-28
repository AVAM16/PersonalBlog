# My Personal Website

This is my personal website, built using Astro. It is a work in progress.
Used Tailwwind CSS for styling with the typography plugin to properly format markdown text.
Used React with Shadcn/ui for components.
Used Preline UI for the timeline component.

This website is designed to be fast and lightweight, with a focus on performance and accessibility.
React is used only for certain components.

[Astro](https://astro.build)

[TailwindCSS](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

[React](https://docs.astro.build/en/guides/integrations-guide/react/)

[Shadcn/ui](https://ui.shadcn.com/docs/installation/astro)

[Tailwind Typography](https://docs.astro.build/en/recipes/tailwind-rendered-markdown/)

[Preline UI](https://www.preline.co/)

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── ui/ (Shadcn/ui components)
│   │   └── Footer.astro
│   │   └── Header.astro
│   │   └── Timeline.astro
│   │   └── Tsx Components (React components)
│   ├── layouts/
│   │   └── MainLayout.astro
│   │   └── NewsLayout.astro
│   └── pages/
│       └── news/ (News pages)
│       └── index.astro
│       └── experience.astro
│       └── projects.astro
│       └── thenews.astro
│       └── styles/ (Tailwind CSS)
├── package.json
└── other configuration files
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

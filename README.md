# Basebone Technical Test

The app has been made with a Nuxt 3 environment as a test for the company Basebone. 

A few notes before engaging in the setup:

- To be able to achieve the Home page functionality I had to create a server from nuxt with the proper API since OMDb doesn't provide that functionality (featured series and movies).
- There is a Movies page and a Series page to search for shows and the corresponding detail page to see additional information.
  The logic has been separated as much as possible for each of them so it can be escalable.
  The API calls are integrated in composables as can be escalable and omits noise in the index of the pages.
- A contact form with validation and mock submit has been created using the Library Vee-validate to easily perform validations together with Yup.
- Even thought it's not indicated in the test guidelines PDF, Typescript has been added as it is a common standard.
- The most recent titles visited are being saved in the local storage of the browser using the built in composables by Nuxt
- Tailwind has been used as the main styling engine.
- State logic has been build to save the last search result while navigating between pages. Made with Pinia.

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

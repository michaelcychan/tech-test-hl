# tech-test-HL

This was an extension of a technical assessment. The page is published [here](https://michaelcychan.github.io/tech-test-hl/).  

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
# HL Technical Assessment

You are provided with a set of products and are required to create a products listing page for a footwear retailer.

Write functionality and styling to:

- Lay out all products in a responsive product grid
- Create a filter toggle that shows only available products
- Create a brand filter that shows only toggled brand products
- Add a counter for the number of resulting products
- Create a dropdown to sort all products into ascending or descending price order
- Add an option to sort all products by relevance - with all available products shown first in ascending rank order, then all unavailable products in ascending rank order.

You will be assessed on both behaviour and design. Don't spend more than 2 hours on this.

## Instructions

To start, fork [this](/) project and set the project name to include your name. When you're finished, download the project and email the zipped file with a link to this project back to us.
If you wish to continue past the allocated time, please create another fork.


## Deployment to GitHub Pages

To edit the config file `vite.config.js`:

```js
export default defineConfig({
  // some other existing config
  base: '/<repo-name>/'
})
```

Then run the following commands for publishing

```bash
# to build the current code into /dist directory
npm run build 

# to force add /dist directory
git add dist -f
git commit - m 'some comment'

# to push /dist directory into subtree
git subtree push --prefix dist origin gh-pages
```

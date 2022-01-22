# vladimirv99.github.io

This is my personal portfolio website built using [Next.js](https://nextjs.org/) hosted at [vladimirv99.github.io](https://vladimirv99.github.io).

## Building

### For development

To build for development and start the dev server, run the following commands:

```bash
npm install
npm run dev
```

### For production

To create an optimized build for production, run the following commands:

```bash
npm install
npm run build
```

### Generating a static site

To generate a static version of the website that doesn't need a node server, run the following commands:

```bash
npm run build
npm run export
```

## Deployment

To deploy to github pages, run the following command:

```bash
npm run deploy
```

This uses the `gh-pages` package to push to the github pages branch of the repository specified in the `homepage` field in `package.json`. Before pushing, the `predeploy` script is executed to generate a static version of the website and create a `.nojekyll` file which enables serving folders that start with an underscore like `_next`.

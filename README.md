This is the on the beach search Next JS app.

## Getting Started

To start the application run `npm install` then `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) to see the site in your browser.

You can run all the tests by entering `npm run test`, this will run all the tests in watch mode.

## Approach

I followed a TDD approach where possible, starting by creating smaller components and building up the full layout. I have implemented the styling using Tailwind, as the utility class style lends itself quite nicely to this minimal design. Creating a small file size and reducing the amount of CSS needed. I have created several unit tests, covering all the small components and the larger search results component. Given more time it might be worth looking into Storybook and creating snapshot tests or even looking at end-end tests as the website grew.

I have used a number of frameworks and libraries in this project:

-   Next JS
-   Tailwind CSS
-   Jest
-   React Testing Library

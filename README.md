# Simple youtube - User App

Welcome to the Simple youtube Front-end repository!

## What's inside?

This Turborepo includes the following packages and apps:

## Getting Started

To get started with this project, follow these steps:

1. Install dependencies by running `npm install`.
2. Make `.env` file from `.env.exampe` to `/apps/user` .
3. Start the development server by running `npm dev`.
4. Open your browser and visit `http://localhost:4000` for user app.

# Tech stacks

- Turbo repo
- ReactJS
- ViteJS
- Zustand
- React-query
- Ant Design
- Tailwind Css
- DayJS

### Root Directory

- **/apps**: Contains the main applications of the project.
  - **/user**: The Youtube User App.
- **/packages**: Contains shared packages used across the apps.
  - **@repo/constants**: Shared constants used throughout the project.
  - **@repo/data**: Shared data mechanisms.
  - **@repo/models**: Shared data interfaces.
  - **@repo/ui**: Shared UI components.
  - **@repo/utils**: Utility modules or functions for common tasks such as data manipulation, formatting, validation, and miscellaneous operations.
  - **@repo/eslint-config**: Shared ESLint configurations.
  - **@repo/typescript-config**: Shared TypeScript configurations.

## File Usage

- **/apps/user**

  - **index.tsx**: Entry point for the User App.
  - **components/**: Contains React components specific to the User App.
  - **pages/**: Contains page components for routing.
  - **styles/**: Contains CSS or styled-components for the User App.
  - **.env**: Environment variables specific to the User App.

- **apps**: Contains specify application, .
  - **app-name**: admin or user
    - **public**: Contains static assets that may be moved to remote asset in the furture.
    - **src**: Contains the main source code of the project.
      - **assets**: Contains images, fonts, or any other static assets that are used for bundling into the application.
      - **constants**: Contains global constant variables.
      - **api**: Contains api endpoints with Axios request.
      - **services**: Contains business logic before http requests were called.
      - **components**: Contains reusable React components.
      - **containers**: Contains page containers: UnUnAuthenticatedLayout, UnAuthenticatedLayout.
      - **contexts**: Contains global React contexts.
      - **pages**: Contains the main pages of the application.
      - **layouts**: Contains the layouts which are used in page components.
      - **models**: Contains interfaces.
      - **utils**: Contains utility modules or functions used for common tasks such as data manipulation, formatting, validation, and miscellaneous operations..
      - **App.tsx**: Entry point for the React application.
      - **App.css**: Contains global css.
      - **Router.tsx**: Contains application routing.
      - **main.tsx**: Entry point for the Typescript bundling.
    - **.env.sample**: Remove .sample to use as app environment variables.
    - **index.html**: Serves as the entry point for web application.
- **packages**: Contains common UI or business logic.
  - **config-eslint**: Contains shared eslint config.
  - **config-typescript**: Contains shared typescript config.
  - **constants**: Contains shared constants.
  - **data**: Contains shared mechanism of data.
    - **src**:
      - **api**: Contains RTK query API.
      - **services**: Contains business logic to deal with API.
      - **store**: Contains mechanism of RTK store.
  - **models**: Contains data interfaces.
  - **ui**: Contains shared components.
    - **components**: Contains reusable React components.
    - **layouts**: Contains page layouts: UnAuthenticatedLayout, AuthenticatedLayout,...
    - **contexts**: Contains global React contexts.
    - **pages**: Contains the main pages of the application.
    - **icons**: Contains SVG component icons.
  - **utils**: Contains utility modules or functions used for common tasks such as data manipulation, formatting, validation, and miscellaneous operations..

## Theme Setup

The project utilizes Ant Design for its UI components. The theme configuration can be found in **src/contexts/Theme.tsx**.

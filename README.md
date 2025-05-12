# Angular 19 HMR Demo

This project demonstrates Hot Module Replacement (HMR) functionality in Angular 19. Created for the Devtrio newsletter as an example of how HMR can improve the development experience.

## Features

- Simple form with two-way binding
- Counter component with increment/decrement functionality
- Modern UI with responsive design
- Demonstrates HMR capabilities

## Development server

### Without HMR

To run the application without Hot Module Replacement:

```bash
ng serve --no-hmr
```

This will start the development server in traditional mode, where the page will fully reload when you make changes.

### With HMR (Default)

To run the application with Hot Module Replacement enabled:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

With HMR enabled, you can:
- Modify component styles
- Update template logic
- Change component state

And see the changes instantly without losing the current state of your application!

## Testing HMR

Try these modifications while the app is running:

1. Change button colors in `app.component.css`
2. Modify the counter logic in `app.component.ts`
3. Update the template in `app.component.html`

With HMR enabled, you'll see your changes immediately without losing your application state!

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## About This Demo

This demo was created for the Devtrio newsletter to showcase modern Angular features and development practices. It demonstrates how HMR can significantly improve the development experience by maintaining application state during code changes.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Further Help

To learn more about Angular CLI commands, use `ng help` or visit the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

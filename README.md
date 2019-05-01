# [get-the-solution.net](https://get-the-solution.net/)

## Prerequisites

- nodejs
- `npm install`

## Build for github with

1. Convert *.md files with pandoc
2. `ng build --output-path=docs --prod --base-href "https://get-the-solution.net/"`
3. push to github

## Convert markdown files to html files
Using pandoc in Linux: 

	cd src/assets/database; for file in *.md; do pandoc $file -o `basename -s .md $file`.html; done
	
	`ng build --output-path=docs --prod --base-href "https://get-the-solution.net/"`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding


Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## GetTheSolutionApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

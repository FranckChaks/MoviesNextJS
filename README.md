## Structure du site autour des films en NextJS

### Install packages
`npm install`: Install node modules dependencies
___
### Run NextJS project
`next dev`: Build project for development<br>

Listen on http://localhost:3000

`next build`, `next run`: Build and run project for production<br>
___
### Run Cypress for tests
`npm run test`: Start server and run cypress
#### or
`cypress open`: Open the Cypress Test Runner in the browser

`cypress run`: Run Cypress tests to completion

___
### Run BackstopJS for visual regressions
`npm run backstop-test`: Start server and run backstop test

`npm run backstop-reference`: Start server and generate backstop reference for comparison
#### or
`backstop test`: Start backstop test (might crash if server not started)

`backstop reference`Generate backstop reference for comparison (might crash if server not started)

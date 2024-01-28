In order to run the tests once the project has been clone using `git clone ` (git needs to be installed)
you also need to have node and npm install
then step into the project folder using a terminal and after running  `npm install` in order to install all dependencies
then run the script `npm run cypress:open` to open cypress UI and click on the only test available to get it runnning.

You can run headless mode by running `npm run test`

on the qubikaE2e.cy.js file there is the E2E test of the challenge, we could create several mini tests to test different parts of that flow and have only one assert per test, but we could say that this test falls into an E2E type of flow, we could then bundle all steps into one test with several assertions, since E2E tests tend tl be long is a good practice to have several assertions along the way instead of only one at the end.

for this project I selected the well known Page Object Model as design pattern
also added some best rpactices like adding a base url, and some scripts.

I added a reporting tool, in order to run the tests with report just run `npm run tests:report`
Once the execution is complete, Cypress Generates the HTML report. Navigate to the folder with the name “reports”, where you will find the HTML report, you copy the path of the index.html and paste it on a browser to see it.

Proposed enhancements are mainly to have data-test attributes as unique selectors for elements
for future growth of the project is always great to have some commands made and have some beforeEach, before, after and afterEach methods to add effectivness and readability.

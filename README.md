# Cypress-API-Automation
This repo contains API Tests using Cypress

The framework contains the following 10 API calls for the website https://reqres.in/


1. List users
2. List <Resources>
3. Create user
4. Update user
4. Update user - PATCH
5. Delete user
6. Register user - SUCCESSFUL
7. Register user - UNSUCCESSFUL
8. Login - SUCCESSFUL
9. Login - UNSUCCESSFUL

# Tech Stack

* [Javascript.](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
* [Nodejs.](https://nodejs.org/en/about/)
* [Cypress.](https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn)


# Before installing

* Node.js must be installed in order to run the project.


# Installation

* Clone the repository from Github.
```bash
git clone https://github.com/AlfredPolanco/Cypress-API-Automation.git
```
* Run the following command to install the project
```bash
npm i
```
## Run Locally

Go to the project directory

```bash
  cd Cypress-API-Testing
```

Install dependencies

```bash
  npm install
```

## Start Cypress

### Run using the Cypress GUI

```bash
  npx cypress open
```

* Select E2E testing in order to get access.

* Select your desired browser

* Start testing the API spect file

### Run Headless  (without Cypress GUI)

Go to the project directory

```bash
  cd Cypress-API-Automation
```

* Run API tests locally with the following command
```bash
npm run api-test
```

* After running a HTML report will be generated and saved at the  `cypress/reports` folder.

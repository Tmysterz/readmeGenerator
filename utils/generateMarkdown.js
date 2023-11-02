// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `input license link`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under the ${license} license ${renderLicenseBadge(license)}.
  The license link for this project is ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectName} README.md
  ![Github License](https://img.shields.io/badge/${data.license}-blue)

  ## Description

  ${data.description}

  ## Table Of Contents 

  * [Installation](#Installation)

  * [Usage](#usage)
  
  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  ${data.install}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing 

  ${data.contributing}

  ## Tests

  To run tests run the following command:

  ${data.tests}

  ## Questions

  if you have any questions about the repo, Please feel free to open a issue or contact me directly at ${data.email}
  You can find more of my work at https://github.com/${data.username}


`;
}

module.exports = {
  generateMarkdown
}


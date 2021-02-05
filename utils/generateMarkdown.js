// TODO: Create a function that returns a license badge based on which license is passed in
//const HTML = require('HTML')

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports.generateMarkdown = function (data) {
  return`
  #${data.title}

  ## Description
  ${data.description}
  * Added a descriptive title.
  * Fixed all of the navigation buttons.
  * Added semantic tags. 
  * Consolidated and organized their css selectors and page. 
  * Added comments to help decipher fuctionalilty. 
  
  ## Finished-Page
  ![Refactored Webpage](./assets/images/whole-webpage.png)

  ## Contents
  ${data.contents}

  ## Installation
  ${data.installation}

  ## usage
  ${data.usage}

  ##license
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.tests}
  
  ## questions
  ${data.questions}
  `;
}



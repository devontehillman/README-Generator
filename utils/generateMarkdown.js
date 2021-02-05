// TODO: Create a function that returns a license badge based on which license is passed in
//const HTML = require('HTML')

//example of lisensing https://github.com/necolas/react-native-web
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //link to all badges
  //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //api for lisenses
  //https://docs.github.com/en/rest/reference/licenses
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // license 
  //https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#licenses
}

// TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
  return`
  #${data.title}

  ## Description
  ${data.description}

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

module.exports = generateMarkdown;

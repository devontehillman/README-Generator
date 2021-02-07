// TODO: Create a function that returns a license badge based on which license is passed in
//const HTML = require('HTML')

//example of lisensing https://github.com/necolas/react-native-web
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //console.log(license)
  if (license == 'No License'){
  var str = '\n[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  return str 
  }
  if (license == 'Apache'){
    var str = '\n[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)'
    return str 
    }
  if (license == 'MIT'){
    var str = '\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    return str 
    }
  //GPlv2
  if (license == 'GPL'){
  var str = '\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  return str 
  }
  //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
}

// TODO: Create a function that returns the license section of README//
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // license 
  //https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#licenses
}

// TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
  let arryToReturn = []
    

  arryToReturn.push(`# ${data.title}`)
  arryToReturn.push(`\n(Githubprofile)[https://github.com/${data.github}]`)
  
  arryToReturn.push(renderLicenseBadge(data.license))

  if (data.description === ''){
    console.log('no tile');
  } else{
  arryToReturn.push(
  `\n# Description\n${data.description}\n`
    )
   }

  if (data.title === ''){
    console.log('no tile');
  } else{
   // # Finished-Page
  // ![Refactored Webpage](./assets/images/whole-webpage.png)
  }

  if (data.contents === true){
    let contentSTR = ['\nTable of Contents']
    let count = 1
    
    if (data.description !== ''){contentSTR.push(`\n${count}. [Description](#Description)`); count++;}
    if (data.installation !== ''){contentSTR.push(`\n${count}. [Installation](#Installation)`); count++;}
    if (data.usage !== ''){contentSTR.push(`\n${count}. [Usage](#Usage)`); count++;}
    if (data.license === ''){contentSTR.push(`\n${count}. [License](#License)`); count++;}
    if (data.contributing !== ''){contentSTR.push(`\n${count}. [Contributing](#Contributing)`); count++;}
    if (data.tests !== ''){contentSTR.push(`\n${count}. [Tests](#Tests)`); count++;}
    if (data.questions !== ''){contentSTR.push(`\n${count}. [Questions](#Questions)`); count++;}

  arryToReturn.push(contentSTR.join(''))
  }

  if (data.installation === ''){
    console.log('no tile');
  } else{
  arryToReturn.push(  
  `\n# Installation\n${data.installation}\n`
  )
  }

  if (data.usage === ''){
    console.log('no tile');
  } else{
  arryToReturn.push(
  `\n# Usage\n${data.usage}\n`
  )
  }
 
  if (data.license === ''){
    console.log('no tile');
  } else{
  arryToReturn.push(
  `\n# license\n To see license click ${data.license} badge at the top of this README.\n`
  ) 
  }

  if (data.contributing === ''){
    console.log('no tile');
  } else{
  arryToReturn.push(
  `\n# Contributing\n${data.contributing}\n`
  )
  }

  if (data.tests === ''){
    console.log('no tile');
  } else{
    arryToReturn.push(
  `\n# Tests\n${data.tests}\n`
  ) 
  }
  
  if (data.questions === ''){
    console.log('no tile');
  } else{
  arryToReturn.push(
  `\n# Questions\n${data.questions}\n`
  )
  }
  
return arryToReturn.join('')
 
}

module.exports = generateMarkdown;

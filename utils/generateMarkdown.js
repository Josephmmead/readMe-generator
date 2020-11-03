// function passing in liscense as an arg
// validate lisense exists
// return ![GitHub license](https://img.shields.io/badge/license- ROUTE HERE -blue.svg)


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  ${data.userName}


  ## Description

  ${data.description}

  ## Installation

  ${data.Installation}

  ## Usage


  ${data.Usage}

  ## Contributing

  ${data.contributing}

  ## License

  ${data.License}


`;
}

module.exports = generateMarkdown;

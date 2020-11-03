// function passing in liscense as an arg
// validate lisense exists
// return ![GitHub license](https://img.shields.io/badge/license- ROUTE HERE -blue.svg)


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.repo}
  ${data.userName}


  ## Description

  ${data.description}

  ## Installation

  ${data.Installation}

  ## Usage

  ${data.Usage}

  ## License

  ${data.License}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}


`;
}

module.exports = generateMarkdown;

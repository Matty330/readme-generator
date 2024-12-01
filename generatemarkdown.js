function generateMarkdown(answers) {
    const { title, description, installation, usage, license, contributing, tests, github, email } = answers;

    return `
# ${title}

![License](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-blue)

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${installation}
\`\`\`

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${contributing}

## Tests
\`\`\`
${tests}
\`\`\`

## Questions
If you have any questions, feel free to contact me:
- GitHub: [${github}](https://github.com/${github})
- Email: ${email}
`;
}

export default generateMarkdown;

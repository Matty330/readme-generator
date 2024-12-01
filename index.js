import fs from 'fs'; // File system module for writing files
import promptUser from './promptUser.js'; // Prompting function
import generateMarkdown from './generateMarkdown.js'; // Markdown generation function

// Main function to initialize the app
function init() {
    promptUser()
        .then((answers) => {
            // Generate the README content
            const markdown = generateMarkdown(answers);

            // Write the generated content to a README.md file
            fs.writeFile('README.md', markdown, (err) => {
                if (err) {
                    console.error('Error writing README.md:', err);
                } else {
                    console.log('README.md has been successfully generated!');
                }
            });
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

// Start the app
init();

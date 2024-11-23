module.exports = [
    {
        name: 'system',
        detail: 'Issue an operating system command.',
        documentation: `
**Description:**  
Executes a command in the operating system's shell.

**Parameters:**  
- \`command\`: The command to execute.

**Return Value:**  
Termination status of the command.

**Examples:**  
\`\`\`pixi
system("rm /tmp/data.txt") // Remove a file
\`\`\`
        `
    },
    {
        name: 'argc',
        detail: 'Get the number of arguments passed to the program.',
        documentation: `
**Description:**  
Returns the number of command-line arguments passed to the program.

**Examples:**  
\`\`\`pixi
arg_count = argc()
\`\`\`
        `
    },
    {
        name: 'argv',
        detail: 'Get a specific command-line argument.',
        documentation: `
**Description:**  
Returns the container with the value of a specified argument.

**Parameters:**  
- \`n\`: The index of the argument to retrieve.

**Examples:**  
\`\`\`pixi
if argc() >= 4 {
    arg = argv(3) // Get the fourth argument
    remove(arg) // Remove the file specified by the argument
}
\`\`\`
        `
    },
    {
        name: 'exit',
        detail: 'Exit the program with a specified exit code.',
        documentation: `
**Description:**  
Terminates the program with the specified exit code.

**Parameters:**  
- \`exit_code\`: The exit code to return to the operating system.

**Examples:**  
\`\`\`pixi
exit(4) // Exit with code 4
\`\`\`
        `
    }
];

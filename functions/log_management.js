module.exports = [
    {
        name: 'logf',
        detail: 'Write formatted output to the Pixilang log buffer.',
        documentation: `
**Description:**  
The same as \`printf\`, but the destination is the Pixilang log buffer.

**Parameters:**  
- \`format\`: Format string.  
- Additional arguments.

**Examples:**  
\`\`\`pixi
logf("This is a log message: %d", 42)
\`\`\`
        `
    },
    {
        name: 'get_log',
        detail: 'Retrieve the Pixilang log buffer.',
        documentation: `
**Description:**  
Gets the Pixilang log buffer and returns it as a new container.  
**Note:** The returned container must be manually removed.

**Return Value:**  
A new container with the log buffer.

**Examples:**  
\`\`\`pixi
log_container = get_log()
fputs(log_container) // Print the log buffer
remove(log_container) // Clean up the container
\`\`\`
        `
    },
    {
        name: 'get_system_log',
        detail: 'Retrieve the Pixilang system log buffer.',
        documentation: `
**Description:**  
Gets the Pixilang system log buffer and returns it as a new container.  
**Note:** The returned container must be manually removed.

**Return Value:**  
A new container with the system log buffer.

**Examples:**  
\`\`\`pixi
system_log = get_system_log()
fputs(system_log) // Print the system log buffer
remove(system_log) // Clean up the container
\`\`\`
        `
    }
];

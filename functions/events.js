module.exports = [
    {
        name: 'get_event',
        detail: 'Retrieve a new event from the system.',
        documentation: `
**Description:**  
Fetches a new event from the system and places it into the container \`EVT\`.

**Return Value:**  
- \`0\`: No events.  
- \`1\`: An event has been received and placed into \`EVT\`.

**Examples:**  
\`\`\`pixi
while(get_event()) {
    if EVT[EVT_TYPE] == EVT_QUIT {
        break // Handle quit event
    }
}
\`\`\`
        `
    },
    {
        name: 'set_quit_action',
        detail: 'Set the behavior for EVT_QUIT events.',
        documentation: `
**Description:**  
Configures the program's behavior when it receives an \`EVT_QUIT\` event.

**Parameters:**  
- \`action\`: Specifies the action to take.  
  Possible values:
  - \`QA_NONE\`: Do nothing.  
  - \`QA_CLOSE_VM\`: Close the current virtual machine but do not quit Pixilang (default).

**Examples:**  
\`\`\`pixi
set_quit_action(QA_NONE) // Ignore EVT_QUIT events
set_quit_action(QA_CLOSE_VM) // Default behavior: Close the VM
\`\`\`
        `
    }
];

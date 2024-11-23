module.exports = [
    {
        name: 'midi_open_client',
        detail: 'Open a new MIDI client.',
        documentation: `
**Description:**  
Opens a new MIDI client with the specified name.

**Parameters:**  
- \`client_name\`: Name of the MIDI client.

**Return Value:**  
The client ID, or a negative value in case of an error.

**Examples:**  
\`\`\`pixi
client_id = midi_open_client("MyMIDIClient")
\`\`\`
        `
    },
    {
        name: 'midi_close_client',
        detail: 'Close an existing MIDI client.',
        documentation: `
**Description:**  
Closes the specified MIDI client.

**Parameters:**  
- \`client_id\`: ID of the MIDI client to close.

**Examples:**  
\`\`\`pixi
midi_close_client(client_id)
\`\`\`
        `
    },
    {
        name: 'midi_get_device',
        detail: 'Get the name of a MIDI device.',
        documentation: `
**Description:**  
Retrieves the name of the specified MIDI device.

**Parameters:**  
- \`client_id\`: ID of the MIDI client.  
- \`device_num\`: Device number.  
- \`flags\`: Additional flags for the query.

**Return Value:**  
The name of the selected device, or \`-1\` if the device does not exist.

**Examples:**  
\`\`\`pixi
device_name = midi_get_device(client_id, 0, 0)
\`\`\`
        `
    },
    {
        name: 'midi_open_port',
        detail: 'Open a new MIDI port.',
        documentation: `
**Description:**  
Opens a MIDI port for communication.

**Parameters:**  
- \`client_id\`: ID of the MIDI client.  
- \`port_name\`: Name of the MIDI port.  
- \`device_name\`: Name of the MIDI device.  
- \`flags\`: Additional flags for the port.

**Return Value:**  
The port ID, or a negative value in case of an error.

**Examples:**  
\`\`\`pixi
port_id = midi_open_port(client_id, "MyMIDIPort", "MyMIDIDevice", 0)
\`\`\`
        `
    },
    {
        name: 'midi_reopen_port',
        detail: 'Reopen an existing MIDI port.',
        documentation: `
**Description:**  
Reopens a previously opened MIDI port.

**Parameters:**  
- \`client_id\`: ID of the MIDI client.  
- \`port_id\`: ID of the MIDI port.

**Examples:**  
\`\`\`pixi
midi_reopen_port(client_id, port_id)
\`\`\`
        `
    },
    {
        name: 'midi_close_port',
        detail: 'Close a MIDI port.',
        documentation: `
**Description:**  
Closes the specified MIDI port.

**Parameters:**  
- \`client_id\`: ID of the MIDI client.  
- \`port_id\`: ID of the MIDI port.

**Examples:**  
\`\`\`pixi
midi_close_port(client_id, port_id)
\`\`\`
        `
    },
    {
        name: 'midi_get_event',
        detail: 'Get the current MIDI event data.',
        documentation: `
**Description:**  
Retrieves the current MIDI event and stores it in the specified container.

**Parameters:**  
- \`client_id\`: ID of the MIDI client.  
- \`port_id\`: ID of the MIDI port.  
- \`data_cont\`: Container to store the MIDI event data.

**Return Value:**  
The size of the current MIDI event (in bytes).

**Examples:**  
\`\`\`pixi
event_size = midi_get_event(client_id, port_id, event_data)
\`\`\`
        `
    },
    {
        name: 'midi_get_event_time',
        detail: 'Get the time of the current MIDI event.',
        documentation: `
**Description:**  
Retrieves the time of the current MIDI event, in system ticks.

**Parameters:**  
- \`client_id\`: ID of the MIDI client.  
- \`port_id\`: ID of the MIDI port.

**Return Value:**  
The time of the current MIDI event.

**Examples:**  
\`\`\`pixi
event_time = midi_get_event_time(client_id, port_id)
\`\`\`
        `
    },
    {
        name: 'midi_next_event',
        detail: 'Move to the next MIDI event.',
        documentation: `
**Description:**  
Advances to the next MIDI event in the queue.

**Parameters:**  
- \`client_id\`: ID of the MIDI client.  
- \`port_id\`: ID of the MIDI port.

**Examples:**  
\`\`\`pixi
midi_next_event(client_id, port_id)
\`\`\`
        `
    },
    {
        name: 'midi_send_event',
        detail: 'Send a MIDI event.',
        documentation: `
**Description:**  
Sends a MIDI event to the specified port.

**Parameters:**  
- \`client_id\`: ID of the MIDI client.  
- \`port_id\`: ID of the MIDI port.  
- \`data_cont\`: Container with the MIDI event data.  
- \`data_size\`: Size of the MIDI event data (in bytes).  
- \`t\`: Time of the event.

**Examples:**  
\`\`\`pixi
midi_send_event(client_id, port_id, event_data, 3, get_ticks())
\`\`\`
        `
    }
];

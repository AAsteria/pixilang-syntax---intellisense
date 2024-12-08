module.exports = [
    {
        name: 'sv_get_ticks',
        detail: 'Get the current tick counter.',
        documentation: `
**Description:**  
Returns the current tick counter provided by the system.  
The value ranges from 0 to 0xFFFFFFFF.

**Prototypes:**  
- **C:** \`uint32_t sv_get_ticks( void );\`
- **Java:** \`int get_ticks();\`
- **JS:** \`int sv_get_ticks();\`
- **Pixilang:** \`get_ticks();\`

**Return Value:**  
Current tick counter.
        `
    },
    {
        name: 'sv_get_ticks_per_second',
        detail: 'Get the number of system ticks per second.',
        documentation: `
**Description:**  
Returns the number of system ticks per second.  
This value is required for functions like \`sv_audio_callback()\` and \`sv_set_event_t()\`.

**Prototypes:**  
- **C:** \`uint32_t sv_get_ticks_per_second( void );\`
- **Java:** \`int get_ticks_per_second();\`
- **JS:** \`int sv_get_ticks_per_second();\`
- **Pixilang:** \`get_tps();\`

**Return Value:**  
Number of system ticks per second.
        `
    },
    {
        name: 'sv_get_log',
        detail: 'Get the latest messages from the log.',
        documentation: `
**Description:**  
Retrieves the latest messages from the SunVox engine log.

**Prototypes:**  
- **C:** \`const char* sv_get_log( int size );\`
- **Java:** \`String get_log( int size );\`
- **JS:** \`sv_get_log( size );\`
- **Pixilang:** \`get_system_log();\`

**Parameters:**  
- \`size\`: Maximum number of bytes to read.

**Return Value:**  
Pointer to a null-terminated string with the latest log messages.
        `
    }
];

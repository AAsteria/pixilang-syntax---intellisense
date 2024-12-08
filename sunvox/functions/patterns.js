module.exports = [
    {
        name: 'sv_new_pattern',
        detail: 'Create a new pattern.',
        documentation: `
**Description:**  
Creates a new pattern.

**Important:**  
USE LOCK/UNLOCK!

**Prototypes:**  
- **C:** \`int sv_new_pattern( int slot, int clone, int x, int y, int tracks, int lines, int icon_seed, const char* name );\`
- **Java:** \`int new_pattern( int slot, int clone, int x, int y, int tracks, int lines, int icon_seed, String name );\`
- **JS:** \`sv_new_pattern( slot, clone, x, y, tracks, lines, icon_seed, name );\`
- **Pixilang:** \`sv_new_pattern( sv, clone, x, y, tracks, lines, icon_seed, name );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`clone\`: Parent pattern number if we need a linked clone, or -1.
- \`x\`: Line number (horizontal position on the timeline).
- \`y\`: Vertical position on the timeline.
- \`tracks\`: Number of tracks.
- \`lines\`: Number of lines.
- \`icon_seed\`: Unique number for the icon generator.
- \`name\`: Pattern name.

**Return Value:**  
The number of the newly created pattern, or a negative error code.
        `
    },
    {
        name: 'sv_remove_pattern',
        detail: 'Remove the specified pattern.',
        documentation: `
**Description:**  
Removes the specified pattern.

**Important:**  
USE LOCK/UNLOCK!

**Prototypes:**  
- **C:** \`int sv_remove_pattern( int slot, int pat_num );\`
- **Java:** \`int remove_pattern( int slot, int pat_num );\`
- **JS:** \`sv_remove_pattern( slot, pat_num );\`
- **Pixilang:** \`sv_remove_pattern( sv, pat_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat_num\`: Pattern number.

**Return Value:**  
0 (success) or a negative error code.
        `
    },
    {
        name: 'sv_get_number_of_patterns',
        detail: 'Get the number of pattern slots in the project.',
        documentation: `
**Description:**  
Returns the number of pattern slots. The slot can be empty or contain a pattern.  
Use sv_get_pattern_lines(slot, X) > 0 to determine if a slot is filled.

**Prototypes:**  
- **C:** \`int sv_get_number_of_patterns( int slot );\`
- **Java:** \`int get_number_of_patterns( int slot );\`
- **JS:** \`sv_get_number_of_patterns( slot );\`
- **Pixilang:** \`sv_get_number_of_patterns( sv );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.

**Return Value:**  
Number of pattern slots or a negative error code.
        `
    },
    {
        name: 'sv_find_pattern',
        detail: 'Find a pattern by name.',
        documentation: `
**Description:**  
Find a pattern by its name.

**Prototypes:**  
- **C:** \`int sv_find_pattern( int slot, const char* name );\`
- **Java:** \`int find_pattern( int slot, String name );\`
- **JS:** \`sv_find_pattern( slot, name );\`
- **Pixilang:** \`sv_find_pattern( sv, name );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`name\`: Pattern name.

**Return Value:**  
Pattern number or -1 if not found.
        `
    },
    {
        name: 'sv_get_pattern_x',
        detail: 'Get the X (line number) coordinate of the pattern on the timeline.',
        documentation: `
**Description:**  
Returns the X position (line number) of the specified pattern on the timeline.

**Prototypes:**  
- **C:** \`int sv_get_pattern_x( int slot, int pat_num );\`
- **Java:** \`int get_pattern_x( int slot, int pat_num );\`
- **JS:** \`sv_get_pattern_x( slot, pat_num );\`
- **Pixilang:** \`sv_get_pattern_x( sv, pat_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat_num\`: Pattern number.

**Return Value:**  
X coordinate (line number) of the pattern.
        `
    },
    {
        name: 'sv_get_pattern_y',
        detail: 'Get the Y coordinate of the pattern on the timeline.',
        documentation: `
**Description:**  
Returns the Y position of the specified pattern on the timeline.

**Prototypes:**  
- **C:** \`int sv_get_pattern_y( int slot, int pat_num );\`
- **Java:** \`int get_pattern_y( int slot, int pat_num );\`
- **JS:** \`sv_get_pattern_y( slot, pat_num );\`
- **Pixilang:** \`sv_get_pattern_y( sv, pat_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat_num\`: Pattern number.

**Return Value:**  
Y coordinate of the pattern on the timeline.
        `
    },
    {
        name: 'sv_set_pattern_xy',
        detail: 'Set pattern position.',
        documentation: `
**Description:**  
Sets the pattern position on the timeline.

**Important:**  
USE LOCK/UNLOCK!

**Prototypes:**  
- **C:** \`int sv_set_pattern_xy( int slot, int pat_num, int x, int y );\`
- **Java:** \`int set_pattern_xy( int slot, int pat_num, int x, int y );\`
- **JS:** \`sv_set_pattern_xy( slot, pat_num, x, y );\`
- **Pixilang:** \`sv_set_pattern_xy( sv, pat_num, x, y );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat_num\`: Pattern number.
- \`x\`: Horizontal position (line number).
- \`y\`: Vertical position.

**Return Value:**  
0 (success) or a negative error code.
        `
    },
    {
        name: 'sv_get_pattern_tracks',
        detail: 'Get the number of tracks of the specified pattern.',
        documentation: `
**Description:**  
Returns the number of tracks in the specified pattern.

**Prototypes:**  
- **C:** \`int sv_get_pattern_tracks( int slot, int pat_num );\`
- **Java:** \`int get_pattern_tracks( int slot, int pat_num );\`
- **JS:** \`sv_get_pattern_tracks( slot, pat_num );\`
- **Pixilang:** \`sv_get_pattern_tracks( sv, pat_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat_num\`: Pattern number.

**Return Value:**  
Number of tracks or a negative error code.
        `
    },
    {
        name: 'sv_get_pattern_lines',
        detail: 'Get the number of lines of the specified pattern.',
        documentation: `
**Description:**  
Returns the number of lines in the specified pattern.

**Prototypes:**  
- **C:** \`int sv_get_pattern_lines( int slot, int pat_num );\`
- **Java:** \`int get_pattern_lines( int slot, int pat_num );\`
- **JS:** \`sv_get_pattern_lines( slot, pat_num );\`
- **Pixilang:** \`sv_get_pattern_lines( sv, pat_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat_num\`: Pattern number.

**Return Value:**  
Number of lines or a negative error code.
        `
    },
    {
        name: 'sv_set_pattern_size',
        detail: 'Set pattern size.',
        documentation: `
**Description:**  
Sets the size (tracks, lines) of the specified pattern.

**Important:**  
USE LOCK/UNLOCK!

**Prototypes:**  
- **C:** \`int sv_set_pattern_size( int slot, int pat_num, int tracks, int lines );\`
- **Java:** \`int set_pattern_size( int slot, int pat_num, int tracks, int lines );\`
- **JS:** \`sv_set_pattern_size( slot, pat_num, tracks, lines );\`
- **Pixilang:** \`sv_set_pattern_size( sv, pat_num, tracks, lines );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat_num\`: Pattern number.
- \`tracks\`: Number of tracks or -1 (unchanged).
- \`lines\`: Number of lines or -1 (unchanged).

**Return Value:**  
0 (success) or a negative error code.
        `
    },
    {
        name: 'sv_get_pattern_name',
        detail: 'Get the name of the specified pattern.',
        documentation: `
**Description:**  
Returns the name of the specified pattern.

**Prototypes:**  
- **C:** \`const char* sv_get_pattern_name( int slot, int pat_num );\`
- **Java:** \`String get_pattern_name( int slot, int pat_num );\`
- **JS:** \`sv_get_pattern_name( slot, pat_num );\`
- **Pixilang:** \`sv_get_pattern_name( sv, pat_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat_num\`: Pattern number.

**Return Value:**  
Pattern name or NULL.
In Pixilang the returned string container must be removed manually.
        `
    },
    {
        name: 'sv_set_pattern_name',
        detail: 'Set pattern name.',
        documentation: `
**Description:**  
Sets the name of the specified pattern.

**Important:**  
USE LOCK/UNLOCK!

**Prototypes:**  
- **C:** \`int sv_set_pattern_name( int slot, int pat_num, const char* name );\`
- **Java:** \`int set_pattern_name( int slot, int pat_num, String name );\`
- **JS:** \`sv_set_pattern_name( slot, pat_num, name );\`
- **Pixilang:** \`sv_set_pattern_name( sv, pat_num, name );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat_num\`: Pattern number.
- \`name\`: Pattern name.

**Return Value:**  
0 (success) or a negative error code.
        `
    },
    {
        name: 'sv_get_pattern_data',
        detail: 'Get the raw pattern data.',
        documentation: `
**Description:**  
Returns a pointer/array with the contents of the specified pattern.  
Pattern is a byte array of size (tracks * lines * 8) bytes.  
In C: returns \`sunvox_note*\`.  
In other languages: returns a byte array.

**Prototypes:**  
- **C:** \`sunvox_note* sv_get_pattern_data( int slot, int pat_num );\`
- **Java:** \`byte[] get_pattern_data( int slot, int pat_num );\`
- **JS:** \`sv_get_pattern_data( slot, pat_num );\` // returns UInt8Array
- **Pixilang:** \`sv_get_pattern_data( sv, pat_num );\` // returns INT8 container

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat_num\`: Pattern number.

**Return Value:**  
Pointer/array of the pattern data or NULL.  
In Pixilang the returned container must be removed manually.
        `
    },
    {
        name: 'sv_set_pattern_data',
        detail: 'Set the raw pattern data.',
        documentation: `
**Description:**  
Sets the pattern data from a given byte array.

**Prototypes:**  
- **Java:** \`int set_pattern_data( int slot, int pat_num, byte[] pat_data );\`
- **JS:** Not directly provided; manipulate data returned by sv_get_pattern_data or use events
- **Pixilang:** Not directly provided; manipulate data in the returned container

**Parameters (Java only):**  
- \`slot\`: Slot number.
- \`pat_num\`: Pattern number.
- \`pat_data\`: Byte array with pattern data.

**Return Value (Java):**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_set_pattern_event',
        detail: 'Write an event into the specified pattern cell.',
        documentation: `
**Description:**  
Writes a pattern event into the cell at the specified line and track. Only non-negative values will be written.

**Prototypes:**  
- **C:** \`int sv_set_pattern_event( int slot, int pat, int track, int line, int nn, int vv, int mm, int ccee, int xxyy );\`
- **Java:** \`int set_pattern_event( int slot, int pat, int track, int line, int nn, int vv, int mm, int ccee, int xxyy );\`
- **JS:** \`sv_set_pattern_event( slot, pat, track, line, nn, vv, mm, ccee, xxyy );\`
- **Pixilang:** \`sv_set_pattern_event( sv, pat, track, line, nn, vv, mm, ccee, xxyy );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat\`: Pattern number.
- \`track\`: Track number.
- \`line\`: Line number.
- \`nn\`: Note.
- \`vv\`: Velocity.
- \`mm\`: Module number + 1.
- \`ccee\`: Controller + effect code (0xCCEE).
- \`xxyy\`: Controller value or effect parameter (0xXXYY).

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_get_pattern_event',
        detail: 'Read a pattern event at the specified cell.',
        documentation: `
**Description:**  
Reads a pattern event at the specified line, track, and column.

**Prototypes:**  
- **C:** \`int sv_get_pattern_event( int slot, int pat, int track, int line, int column );\`
- **Java:** \`int get_pattern_event( int slot, int pat, int track, int line, int column );\`
- **JS:** \`sv_get_pattern_event( slot, pat, track, line, column );\`
- **Pixilang:** \`sv_get_pattern_event( sv, pat, track, line, column );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat\`: Pattern number.
- \`track\`: Track number.
- \`line\`: Line number.
- \`column\`:
   - 0: note (NN)
   - 1: velocity (VV)
   - 2: module (MM)
   - 3: controller number or effect (CCEE)
   - 4: controller value or effect parameter (XXYY)

**Return Value:**  
Value of the specified field or negative error code.
        `
    },
    {
        name: 'sv_pattern_mute',
        detail: 'Mute/unmute the specified pattern.',
        documentation: `
**Description:**  
Mutes or unmutes the specified pattern.

**Important:**  
USE LOCK/UNLOCK!

**Prototypes:**  
- **C:** \`int sv_pattern_mute( int slot, int pat_num, int mute );\`
- **Java:** \`int pattern_mute( int slot, int pat_num, int mute );\`
- **JS:** \`sv_pattern_mute( slot, pat_num, mute );\`
- **Pixilang:** \`sv_pattern_mute( sv, pat_num, mute );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`pat_num\`: Pattern number.
- \`mute\`: 1 - mute; 0 - unmute.

**Return Value:**  
Previous state (1 - muted; 0 - unmuted) or negative error code.
        `
    }
];

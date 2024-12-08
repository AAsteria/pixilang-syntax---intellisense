module.exports = [
    {
        name: "sv_get_song_name",
        detail: "Project Info: Get Song Name",
        documentation: `Gets the project name.

**Prototypes:**
- C: \`const char* sv_get_song_name(int slot);\`
- Java: \`String get_song_name(int slot);\`
- JS: \`sv_get_song_name(slot);\`
- Pixilang: \`sv_get_name(sv);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** Project name (or NULL). In Pixilang, the returned string container must be removed manually.`
    },
    {
        name: "sv_set_song_name",
        detail: "Project Info: Set Song Name",
        documentation: `Sets the project name.

**Prototypes:**
- C: \`int sv_set_song_name(int slot, const char* name);\`
- Java: \`int sv_set_song_name(int slot, String name);\`
- JS: \`sv_set_song_name(slot, name);\`
- Pixilang: \`sv_set_name(sv, name);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.
- \`name\`: Project name.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_get_song_bpm",
        detail: "Project Info: Get BPM",
        documentation: `Gets the project BPM (Beats Per Minute).

**Prototypes:**
- C: \`int sv_get_song_bpm(int slot);\`
- Java: \`int get_song_bpm(int slot);\`
- JS: \`sv_get_song_bpm(slot);\`
- Pixilang: \`sv_get_bpm(sv);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** Project BPM.`
    },
    {
        name: "sv_get_song_tpl",
        detail: "Project Info: Get TPL",
        documentation: `Gets the project TPL (Ticks Per Line).

**Prototypes:**
- C: \`int sv_get_song_tpl(int slot);\`
- Java: \`int get_song_tpl(int slot);\`
- JS: \`sv_get_song_tpl(slot);\`
- Pixilang: \`sv_get_tpl(sv);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** Project TPL.`
    },
    {
        name: "sv_get_song_length_frames",
        detail: "Project Info: Get Length in Frames",
        documentation: `Gets the project length in frames. A frame is a pair of audio signal samples (left and right channel amplitudes).

**Prototypes:**
- C: \`uint32_t sv_get_song_length_frames(int slot);\`
- Java: \`int get_song_length_frames(int slot);\`
- JS: \`sv_get_song_length_frames(slot);\`
- Pixilang: \`sv_get_length_frames(sv);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** Project length in frames.`
    },
    {
        name: "sv_get_song_length_lines",
        detail: "Project Info: Get Length in Lines",
        documentation: `Gets the project length in lines.

**Prototypes:**
- C: \`uint32_t sv_get_song_length_lines(int slot);\`
- Java: \`int get_song_length_lines(int slot);\`
- JS: \`sv_get_song_length_lines(slot);\`
- Pixilang: \`sv_get_length_lines(sv);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** Project length in lines.`
    },
    {
        name: "sv_get_time_map",
        detail: "Project Info: Get Time Map",
        documentation: `Gets the project time map.

**Prototypes:**
- C: \`int sv_get_time_map(int slot, int start_line, int len, uint32_t* dest, int flags);\`
- Java: \`int get_time_map(int slot, int start_line, int len, int[] dest, int flags);\`
- JS: \`sv_get_time_map(slot, start_line, len, dest, flags);\`
- Pixilang: \`sv_get_time_map(sv, start_line, len, dest, flags);\` (dest is a container of type INT32)

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.
- \`start_line\`: First line to read (usually 0).
- \`len\`: Number of lines to read.
- \`dest\`: Pointer to the buffer (size = \`len*sizeof(uint32_t)\`) for storing the map values.
- \`flags\`:
  - \`SV_TIME_MAP_SPEED\`: \`dest[X] = BPM | ( TPL << 16 )\` (speed at the beginning of line X).
  - \`SV_TIME_MAP_FRAMECNT\`: \`dest[X] = frame counter at the beginning of line X.

**Return Value:** 0 (success) or negative error code.`
    }
];

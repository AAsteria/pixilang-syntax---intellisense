module.exports = [
    {
        name: "sv_play",
        detail: "Playback: Play",
        documentation: `Starts playback from the current position.

**Prototypes:**
- C: \`int sv_play(int slot);\`
- Java: \`int play(int slot);\`
- JS: \`sv_play(slot);\`
- Pixilang: \`sv_play(sv, line_num);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_play_from_beginning",
        detail: "Playback: Play from Beginning",
        documentation: `Starts playback from the beginning (line 0).

**Prototypes:**
- C: \`int sv_play_from_beginning(int slot);\`
- Java: \`int play_from_beginning(int slot);\`
- JS: \`sv_play_from_beginning(slot);\`
- Pixilang: \`sv_play(sv, 0);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_stop",
        detail: "Playback: Stop",
        documentation: `Stops playback. A second call resets SunVox activity and switches the engine to standby mode.

**Prototypes:**
- C: \`int sv_stop(int slot);\`
- Java: \`int stop(int slot);\`
- JS: \`sv_stop(slot);\`
- Pixilang: \`sv_stop(sv);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_pause",
        detail: "Playback: Pause",
        documentation: `Pauses the audio stream on the specified slot.

**Prototypes:**
- C: \`int sv_pause(int slot);\`
- Java: \`int pause(int slot);\`
- JS: \`sv_pause(slot);\`
- Pixilang: \`sv_pause(sv);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_resume",
        detail: "Playback: Resume",
        documentation: `Resumes the audio stream on the specified slot.

**Prototypes:**
- C: \`int sv_resume(int slot);\`
- Java: \`int resume(int slot);\`
- JS: \`sv_resume(slot);\`
- Pixilang: \`sv_resume(sv);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_sync_resume",
        detail: "Playback: Sync Resume",
        documentation: `Waits for sync (pattern effect 0x33 on any slot) and resumes the audio stream on the specified slot.

**Prototypes:**
- C: \`int sv_sync_resume(int slot);\`
- Java: \`int sync_resume(int slot);\`
- JS: \`sv_sync_resume(slot);\`
- Pixilang: \`sv_sync_resume(sv);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_set_autostop",
        detail: "Playback: Set Autostop",
        documentation: `Enables or disables autostop mode.

**Prototypes:**
- C: \`int sv_set_autostop(int slot, int autostop);\`
- Java: \`int set_autostop(int slot, int autostop);\`
- JS: \`sv_set_autostop(slot, autostop);\`
- Pixilang: \`sv_set_autostop(sv, autostop);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.
- \`autostop\`: 0 to disable; 1 to enable.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_get_autostop",
        detail: "Playback: Get Autostop",
        documentation: `Checks whether autostop mode is enabled.

**Prototypes:**
- C: \`int sv_get_autostop(int slot);\`
- Java: \`int get_autostop(int slot);\`
- JS: \`sv_get_autostop(slot);\`
- Pixilang: \`sv_get_autostop(sv);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** 1 if enabled; 0 if disabled.`
    },
    {
        name: "sv_end_of_song",
        detail: "Playback: End of Song",
        documentation: `Checks whether the project has finished playing.

**Prototypes:**
- C: \`int sv_end_of_song(int slot);\`
- Java: \`int end_of_song(int slot);\`
- JS: \`sv_end_of_song(slot);\`

**Parameters:**
- \`slot\`: Slot number.

**Return Value:** 0 if playing; 1 if stopped.`
    },
    {
        name: "sv_volume",
        detail: "Playback: Set Volume",
        documentation: `Sets the playback volume for the project.

**Prototypes:**
- C: \`int sv_volume(int slot, int vol);\`
- Java: \`int volume(int slot, int vol);\`
- JS: \`sv_volume(slot, vol);\`
- Pixilang: \`sv_volume(sv, vol);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.
- \`vol\`: Volume from 0 (min) to 256 (max 100%).

**Return Value:** Previous volume or negative error code.`
    },
    {
        name: "sv_rewind",
        detail: "Playback: Rewind",
        documentation: `Jumps to the specified line on the timeline.

**Prototypes:**
- C: \`int sv_rewind(int slot, int line_num);\`
- Java: \`int rewind(int slot, int line_num);\`
- JS: \`sv_rewind(slot, line_num);\`
- Pixilang: \`sv_rewind(sv, line_num);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.
- \`line_num\`: Line number on the timeline.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_get_current_line",
        detail: "Playback: Get Current Line",
        documentation: `Gets the current (real-time) line number on the timeline.

**Prototypes:**
- C: \`int sv_get_current_line(int slot);\`
- Java: \`int get_current_line(int slot);\`
- JS: \`sv_get_current_line(slot);\`
- Pixilang: \`sv_get_current_line(sv);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.

**Return Value:** Current line number (playback position).`
    },
    {
        name: "sv_get_current_signal_level",
        detail: "Playback: Get Signal Level",
        documentation: `Gets the current signal level from the Output module.

**Prototypes:**
- C: \`int sv_get_current_signal_level(int slot, int channel);\`
- Java: \`int get_current_signal_level(int slot, int channel);\`
- JS: \`sv_get_current_signal_level(slot, channel);\`
- Pixilang: \`sv_get_current_signal_level(sv, channel);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.
- \`channel\`: 0 for left, 1 for right.

**Return Value:** Signal level (0 to 255).`
    }
];

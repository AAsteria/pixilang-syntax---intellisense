module.exports = [
    {
        name: "sv_load_dll",
        detail: "Main: Load DLL",
        documentation: `Loads the SunVox library (for dynamic/shared versions such as DLL, SO, DYLIB, etc.).
**Return Value:** 0 (success) or a negative error code.`
    },
    {
        name: "sv_unload_dll",
        detail: "Main: Unload DLL",
        documentation: `Unloads the SunVox library (for dynamic/shared versions).
**Return Value:** 0 (success) or a negative error code.`
    },
    {
        name: "sv_init",
        detail: "Main: Initialize SunVox",
        documentation: `Initializes the global SunVox sound system.
**Prototypes:**
- C: \`int sv_init(const char* config, int sample_rate, int channels, uint32_t flags);\`
- Java: \`int init(String config, int sample_rate, int channels, int flags);\`
- JS: \`sv_init(config, sample_rate, channels, flags);\`
- Pixilang: see \`sv_new()\`.

**Parameters:**
- \`config\`: Configuration string in the format \`option_name=value|option_name=value\` or \`NULL\`.
- \`sample_rate\`: Desired sample rate (min 44100 Hz).
- \`channels\`: Number of audio channels (only 2 supported).
- \`flags\`: Set of \`SV_INIT_FLAG_*\`.

**Return Value:** SunVox version or negative error code.`
    },
    {
        name: "sv_deinit",
        detail: "Main: Deinitialize SunVox",
        documentation: `Deinitializes the global SunVox sound system.
**Return Value:** 0 (success) or a negative error code.`
    },
    {
        name: "sv_new",
        detail: "Main: Create New SunVox Engine Object",
        documentation: `Creates a new SunVox engine object (Pixilang only).
**Prototypes:**
- Pixilang: \`sv_new(sample_rate, flags);\`

**Parameters:**
- \`sample_rate\`: Desired sample rate (min 44100 Hz; optional).
- \`flags\`: Set of \`SV_INIT_FLAG_*\` (optional).

**Return Value:** New SunVox object ID or negative error code.`
    },
    {
        name: "sv_remove",
        detail: "Main: Remove SunVox Engine Object",
        documentation: `Removes an existing SunVox engine object (Pixilang only).
**Prototype:** \`sv_remove(sv);\`
**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_get_sample_rate",
        detail: "Main: Get Sample Rate",
        documentation: `Gets the current sampling rate of the SunVox engine.
**Prototypes:**
- C: \`int sv_get_sample_rate(void);\`
- Java: \`int get_sample_rate();\`
- JS: \`sv_get_sample_rate();\`
- Pixilang: \`sv_get_sample_rate(sv);\`

**Return Value:** Sampling rate or negative error code.`
    },
    {
        name: "sv_update_input",
        detail: "Main: Update Input Ports",
        documentation: `Handles input ON/OFF requests to enable/disable input ports. Call from the main thread only.

**Prototypes:**
- C: \`int sv_update_input(void);\`
- Java: \`int update_input();\`
- JS: \`sv_update_input();\`

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_audio_callback",
        detail: "Main: Audio Callback",
        documentation: `Retrieves the next piece of SunVox audio (output from the Output module).
**Prototypes:**
- C: \`int sv_audio_callback(void* buf, int frames, int latency, uint32_t out_time);\`
- Java: \`int audio_callback(byte[] buf, int frames, int latency, int out_time);\`
- JS: \`sv_audio_callback(out_buf, frames, latency, out_time);\`

**Parameters:**
- \`buf\`: Output buffer.
- \`frames\`: Number of frames in the destination buffer.
- \`latency\`: Audio latency (in frames).
- \`out_time\`: Buffer output time (in system ticks).

**Return Value:** 0 (silence) or 1 (buffer filled).`
    },
    {
        name: "sv_audio_callback2",
        detail: "Main: Audio Callback with Input",
        documentation: `Similar to \`sv_audio_callback\`, but also processes data from the Input module.
**Prototypes:**
- C: \`int sv_audio_callback2(void* buf, int frames, int latency, uint32_t out_time, int in_type, int in_channels, void* in_buf);\`
- Java: \`int audio_callback2(byte[] buf, int frames, int latency, int out_time, int in_type, int in_channels, byte[] in_buf);\`
- JS: \`sv_audio_callback2(out_buf, frames, latency, out_time, in_type, in_channels, in_buf);\`

**Parameters:**
- \`buf\`: Output buffer.
- \`frames\`: Number of frames in the destination buffer.
- \`latency\`: Audio latency (in frames).
- \`out_time\`: Buffer output time (in system ticks).
- \`in_type\`: Input buffer type (0 - int16_t, 1 - float).
- \`in_channels\`: Number of input channels.
- \`in_buf\`: Input buffer.

**Return Value:** 0 (silence) or 1 (buffer filled).`
    },
    {
        name: "sv_render",
        detail: "Main: Render Audio",
        documentation: `Processes input and output buffers for SunVox (Pixilang only).
**Prototype:** \`sv_render(sv, buf, frames, latency, out_time, in_buf, in_channels);\`

**Parameters:**
- \`sv\`: SunVox object ID.
- \`buf\`: Output buffer (container ID).
- \`frames\`: Number of frames in the destination buffer (optional).
- \`latency\`: Audio latency (in frames; optional).
- \`out_time\`: Buffer output time (in system ticks; optional).
- \`in_buf\`: Input buffer (container ID; optional).
- \`in_channels\`: Number of input channels (optional).

**Return Value:** 0 (silence), 1 (buffer filled), or 2 (silence with zeroed buffer).`
    },
    {
        name: "sv_open_slot",
        detail: "Main: Open Slot",
        documentation: `Opens a SunVox sound slot.
**Prototypes:**
- C: \`int sv_open_slot(int slot);\`
- Java: \`int open_slot(int slot);\`
- JS: \`sv_open_slot(slot);\`

**Parameters:**
- \`slot\`: Slot number.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_close_slot",
        detail: "Main: Close Slot",
        documentation: `Closes a SunVox sound slot.
**Prototypes:**
- C: \`int sv_close_slot(int slot);\`
- Java: \`int close_slot(int slot);\`
- JS: \`sv_close_slot(slot);\`

**Parameters:**
- \`slot\`: Slot number.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_lock_slot",
        detail: "Main: Lock Slot",
        documentation: `Locks the specified SunVox slot for thread-safe modifications.
**Prototypes:**
- C: \`int sv_lock_slot(int slot);\`
- Java: \`int lock_slot(int slot);\`
- JS: \`sv_lock_slot(slot);\`

**Parameters:**
- \`slot\`: Slot number.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_unlock_slot",
        detail: "Main: Unlock Slot",
        documentation: `Unlocks the specified SunVox slot.
**Prototypes:**
- C: \`int sv_unlock_slot(int slot);\`
- Java: \`int unlock_slot(int slot);\`
- JS: \`sv_unlock_slot(slot);\`

**Parameters:**
- \`slot\`: Slot number.

**Return Value:** 0 (success) or negative error code.`
    }
];

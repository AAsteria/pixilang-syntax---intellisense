module.exports = [
    {
        name: "sv_set_event_t",
        detail: "Events: Set Event Timestamp",
        documentation: `Sets the timestamp of events to be sent by \`sv_send_event()\`.

**Prototypes:**
- C: \`int sv_set_event_t(int slot, int set, int t);\`
- Java: \`int set_event_t(int slot, int set, int t);\`
- JS: \`sv_set_event_t(slot, set, t);\`
- Pixilang: \`sv_set_event_t(sv, set, t);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.
- \`set\`: 1 to set timestamp, 0 to reset to automatic time setting (ignores \`t\`; default mode).
- \`t\`: Timestamp (in system ticks) for all further events. Must be greater than or equal to the previous timestamp for the same slot.

**Return Value:** 0 (success) or negative error code.

**Examples:**
- Process events as quickly as possible:
  \`\`\`
  sv_set_event_t(slot, 1, 0);
  \`\`\`
- Process events at the current system time + latency:
  \`\`\`
  sv_set_event_t(slot, 1, sv_get_ticks());
  \`\`\`
`
    },
    {
        name: "sv_send_event",
        detail: "Events: Send Event",
        documentation: `Sends an event (e.g., Note ON, Note OFF, controller change) to the SunVox engine for further processing.

**Prototypes:**
- C: \`int sv_send_event(int slot, int track_num, int note, int vel, int module, int ctl, int ctl_val);\`
- Java: \`int send_event(int slot, int track_num, int note, int vel, int module, int ctl, int ctl_val);\`
- JS: \`sv_send_event(slot, track_num, note, vel, module, ctl, ctl_val);\`
- Pixilang: \`sv_send_event(sv, track_num, note, vel, module, ctl, ctl_val);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.
- \`track_num\`: Track number (within the virtual pattern).
- \`note\`: Note or command:
  - 0: Nothing.
  - 1..127: Note number.
  - 128: Note OFF.
  - 129, 130...: See NOTECMD_* constants.
- \`vel\`: Velocity (1..129); 0 for default.
- \`module\`: 0 for empty or \`module number + 1\` (1..65535).
- \`ctl\`: \`0xCCEE\`, where:
  - \`CC\`: Controller number (1..255).
  - \`EE\`: Effect.
- \`ctl_val\`: Controller value (0..32768) or effect parameter (0..65535).

**Return Value:** 0 (success) or negative error code.

**Examples:**
- Find a module named "Sampler" and handle events as quickly as possible:
  \`\`\`
  let module = sv_find_module(slot, "Sampler");
  sv_set_event_t(slot, 1, 0);
  \`\`\`
- Set controller 2 (Panning) to maximum:
  \`\`\`
  let ctl_num = 2;
  let ctl_val = 32768;
  sv_send_event(slot, 0, 0, 0, module + 1, ctl_num << 8, ctl_val);
  \`\`\`
- Send Note ON to the module:
  \`\`\`
  let note = 5 * 12 + 4; // Octave 5, Note 4
  sv_send_event(slot, 0, note + 1, 129, module + 1, 0, 0);
  \`\`\`
- Send Note OFF to the module:
  \`\`\`
  sv_send_event(slot, 0, NOTECMD_NOTE_OFF, 0, 0, 0, 0);
  \`\`\`
- Play a specific frequency in Hz:
  \`\`\`
  let freq = 440; // Hz
  // Method 1 (C only):
  sv_send_event(slot, 0, NOTECMD_SET_PITCH, 129, module + 1, 0, SV_FREQUENCY_TO_PITCH(freq));

  // Method 2:
  let pitch = 30720 - Math.log2(freq / 16.333984375) * 3072;
  sv_send_event(slot, 0, NOTECMD_SET_PITCH, 129, module + 1, 0, pitch);
  \`\`\`

**Conversion Formulas:**
- From SunVox pitch to Hz:
  \`\`\`
  freq = Math.pow(2, (30720 - pitch) / 3072) * 16.333984375;
  \`\`\`
- From Hz to SunVox pitch:
  \`\`\`
  pitch = 30720 - Math.log2(freq / 16.333984375) * 3072;
  \`\`\`
`
    }
];

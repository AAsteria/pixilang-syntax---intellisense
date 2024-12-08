module.exports = [
    {
        name: "NOTECMD_NOTE_OFF",
        detail: "Note Command: Note Off",
        documentation: "Stops the current note in the module."
    },
    {
        name: "NOTECMD_ALL_NOTES_OFF",
        detail: "Note Command: All Notes Off",
        documentation: "Sends a 'note off' command to all modules, stopping all notes."
    },
    {
        name: "NOTECMD_CLEAN_SYNTHS",
        detail: "Note Command: Clean Synths",
        documentation: "Stops all modules, clears their internal buffers, and puts them into standby mode."
    },
    {
        name: "NOTECMD_STOP",
        detail: "Note Command: Stop",
        documentation: "Stops playback in the module."
    },
    {
        name: "NOTECMD_PLAY",
        detail: "Note Command: Play",
        documentation: "Starts playback in the module."
    },
    {
        name: "NOTECMD_SET_PITCH",
        detail: "Note Command: Set Pitch",
        documentation: `Sets the pitch specified in column XXYY. Range:
0x0000 - highest possible pitch,
0x7800 - lowest pitch (note C0).
One semitone = 0x100.

Pitch conversion formulas:
- From SunVox pitch to Hz: freq = pow(2, (30720 - pitch) / 3072) * 16.333984375
- From Hz to SunVox pitch: pitch = 30720 - log2(freq / 16.333984375) * 3072.`
    },
    {
        name: "NOTECMD_CLEAN_MODULE",
        detail: "Note Command: Clean Module",
        documentation: "Stops the module, clears its internal buffers, and puts it into standby mode."
    },
    {
        name: "1..127",
        detail: "Note Number Range",
        documentation: "Represents the note numbers from 1 to 127."
    }
];

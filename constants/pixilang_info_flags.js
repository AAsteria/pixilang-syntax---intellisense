module.exports = [
    {
        name: "PIXINFO_MULTITOUCH",
        detail: "Pixilang Info Flag: Multi-touch",
        documentation: "Indicates multi-touch support."
    },
    {
        name: "PIXINFO_TOUCHCONTROL",
        detail: "Pixilang Info Flag: Touch Control",
        documentation: "Indicates touch control support."
    },
    {
        name: "PIXINFO_NOWINDOW",
        detail: "Pixilang Info Flag: No Window",
        documentation: "Indicates the absence of a window for rendering."
    },
    {
        name: "PIXINFO_MIDIIN",
        detail: "Pixilang Info Flag: MIDI Input",
        documentation: "Indicates MIDI input support."
    },
    {
        name: "PIXINFO_MIDIOUT",
        detail: "Pixilang Info Flag: MIDI Output",
        documentation: "Indicates MIDI output support."
    },
    {
        name: "PIXINFO_OPENGL",
        detail: "Pixilang Info Flag: OpenGL",
        documentation: "Indicates OpenGL support. Example usage: `if PIXILANG_INFO & PIXINFO_OPENGL {}`."
    }
];

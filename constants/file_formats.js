module.exports = [
    {
        name: "FORMAT_RAW",
        detail: "Raw data without a header",
        documentation: "Supports reading and writing (RW)."
    },
    {
        name: "FORMAT_WAVE",
        detail: "Waveform Audio File Format",
        documentation: "Supports reading and writing (RW)."
    },
    {
        name: "FORMAT_AIFF",
        detail: "Audio Interchange File Format",
        documentation: "Supports reading (R) only."
    },
    {
        name: "FORMAT_OGG",
        detail: "Ogg Vorbis",
        documentation: "Supports reading and writing (RW)."
    },
    {
        name: "FORMAT_MP3",
        detail: "MP3 Audio",
        documentation: "Supports reading (R) only."
    },
    {
        name: "FORMAT_FLAC",
        detail: "Free Lossless Audio Codec",
        documentation: "Supports reading and writing (RW)."
    },
    {
        name: "FORMAT_MIDI",
        detail: "MIDI file",
        documentation: "Supports reading (R) only with `sv_load()`."
    },
    {
        name: "FORMAT_SUNVOX",
        detail: "SunVox Project File",
        documentation: "Supports reading and writing (RW) with `sv_load()` and `sv_save()`."
    },
    {
        name: "FORMAT_SUNVOXMODULE",
        detail: "SunVox Module File",
        documentation: "Supports reading (R) only with `sv_load_module()`."
    },
    {
        name: "FORMAT_XM",
        detail: "FastTracker 2 Extended Module",
        documentation: "Supports reading (R) only with `sv_load()`."
    },
    {
        name: "FORMAT_MOD",
        detail: "ProTracker Module",
        documentation: "Supports reading (R) only with `sv_load()`."
    },
    {
        name: "FORMAT_JPEG",
        detail: "JPEG Image",
        documentation: "Supports reading and writing (RW)."
    },
    {
        name: "FORMAT_PNG",
        detail: "PNG Image",
        documentation: "Supports reading and writing (RW)."
    },
    {
        name: "FORMAT_GIF",
        detail: "GIF Image",
        documentation: "Supports reading and writing (RW)."
    },
    {
        name: "FORMAT_AVI",
        detail: "AVI Video",
        documentation: "No explicit read/write information provided."
    },
    {
        name: "FORMAT_MP4",
        detail: "MP4 Video",
        documentation: "No explicit read/write information provided."
    },
    {
        name: "FORMAT_ZIP",
        detail: "ZIP Archive",
        documentation: "No explicit read/write information provided."
    },
    {
        name: "FORMAT_PIXICONTAINER",
        detail: "Pixilang Container",
        documentation: "Entire container with properties and animation. Supports reading and writing (RW)."
    }
];

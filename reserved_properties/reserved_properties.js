module.exports = [
    { name: "file_format", detail: "Reserved Property", documentation: "Specifies the file format of the container." },
    { name: "sample_rate", detail: "Reserved Property", documentation: "Specifies the sample rate (Hz)." },
    { name: "channels", detail: "Reserved Property", documentation: "Specifies the number of channels." },
    { name: "loop_start", detail: "Reserved Property", documentation: "Starting point (frame number) of the sample loop." },
    { name: "loop_len", detail: "Reserved Property", documentation: "Sample loop length (number of frames)." },
    { name: "loop_type", detail: "Reserved Property", documentation: "Sample loop type: 0-none; 1-normal; 2-bidirectional." },
    { name: "frames", detail: "Reserved Property", documentation: "Specifies the number of frames in the container." },
    { name: "frame", detail: "Reserved Property", documentation: "Specifies the current frame number." },
    { name: "fps", detail: "Reserved Property", documentation: "Frames per second for the container." },
    { name: "play", detail: "Reserved Property", documentation: "Auto-play status (0/1)." },
    { name: "repeat", detail: "Reserved Property", documentation: "Repeat count (-1 for infinite repeat)." },
    { name: "start_time", detail: "Reserved Property", documentation: "Start time (in system ticks), automatically set by `play()`." },
    { name: "start_frame", detail: "Reserved Property", documentation: "Start frame, automatically set by `play()`." }
];

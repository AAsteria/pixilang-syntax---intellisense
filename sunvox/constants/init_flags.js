module.exports = [
    {
        name: "SV_INIT_FLAG_NO_DEBUG_OUTPUT",
        detail: "Initialization Flag: No Debug Output",
        documentation: "Disables debug output during initialization."
    },
    {
        name: "SV_INIT_FLAG_USER_AUDIO_CALLBACK",
        detail: "Initialization Flag: User Audio Callback",
        documentation: `Offline mode: The system-dependent audio stream will not be created. 
The user must call sv_audio_callback() to generate the next piece of the sound stream.`
    },
    {
        name: "SV_INIT_FLAG_OFFLINE",
        detail: "Initialization Flag: Offline",
        documentation: `Equivalent to SV_INIT_FLAG_USER_AUDIO_CALLBACK. 
Used for offline processing of audio.`
    },
    {
        name: "SV_INIT_FLAG_AUDIO_INT16",
        detail: "Initialization Flag: Audio INT16",
        documentation: "Desired sample type of the output sound stream: int16_t."
    },
    {
        name: "SV_INIT_FLAG_AUDIO_FLOAT32",
        detail: "Initialization Flag: Audio FLOAT32",
        documentation: `Desired sample type of the output sound stream: float. 
The actual sample type may differ if SV_INIT_FLAG_USER_AUDIO_CALLBACK is not set.`
    },
    {
        name: "SV_INIT_FLAG_ONE_THREAD",
        detail: "Initialization Flag: One Thread",
        documentation: `Ensures audio callback and song modifications occur in a single thread. 
Should only be used with SV_INIT_FLAG_USER_AUDIO_CALLBACK.`
    }
];

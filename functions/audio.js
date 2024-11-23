module.exports = [
    {
        name: 'set_audio_callback',
        detail: 'Set an audio callback function to generate or process audio.',
        documentation: `
**Description:**  
Sets the audio callback function, which will be used to generate or process audio data.

**Parameters:**  
- \`callback\`: The audio callback function.  
- \`userdata\`: User-defined data passed to the callback.  
- \`sample_rate\`: Sample rate (set to 0 to use the global sample rate from Pixilang preferences).  
- \`format\`: Audio sample format.  
- \`channels\`: Number of audio channels.  
- \`flags\`: Audio flags (\`AUDIO_FLAG_*\`).

**Examples:**  
\`\`\`pixi
fn audio_callback($stream, $userdata, $channels, $frames, $time) {
    generator(OP_SIN, $channels[0], 0, 32767 / 2, 0.1, 0) // Left channel
    generator(OP_SIN, $channels[1], 0, 32767 / 2, 0.1, 0) // Right channel
    ret(1) // Output channels are filled
}

set_audio_callback(audio_callback, 0, 22050, INT16, 2, AUDIO_FLAG_INTERP2) // Start audio
set_audio_callback(-1) // Stop audio
\`\`\`

**Callback Return Values:**  
- \`0\`: Silence, output channels are not filled.  
- \`1\`: Output channels are filled.  
- \`2\`: Silence, output channels are filled with zeros (or values close to zero).
        `
    },
    {
        name: 'get_audio_sample_rate',
        detail: 'Get the sample rate for audio processing.',
        documentation: `
**Description:**  
Retrieves the current sample rate in Hz.

**Parameters:**  
- \`source\`:  
  - \`0\`: Local sample rate.  
  - \`1\`: Global sample rate (from Preferences).

**Return Value:**  
The sample rate in Hz.

**Examples:**  
\`\`\`pixi
sample_rate = get_audio_sample_rate(0) // Get the local sample rate
\`\`\`
        `
    },
    {
        name: 'enable_audio_input',
        detail: 'Enable or disable audio input.',
        documentation: `
**Description:**  
Enables or disables audio input.

**Parameters:**  
- \`disable_enable\`:  
  - \`0\`: Disable audio input.  
  - \`1\`: Enable audio input.

**Examples:**  
\`\`\`pixi
enable_audio_input(1) // Enable audio input
enable_audio_input(0) // Disable audio input
\`\`\`
        `
    },
    {
        name: 'get_note_freq',
        detail: 'Get the frequency of a specified musical note.',
        documentation: `
**Description:**  
Retrieves the frequency of a specified note using a fast but not highly accurate algorithm.

**Parameters:**  
- \`note\`: Note number (\`0\` = C-0, \`1\` = C#0, \`2\` = D-0, etc.).  
- \`finetune\`: Fine-tuning value (-64 for the previous note to 64 for the next note).

**Return Value:**  
The frequency of the note in Hz.

**Examples:**  
\`\`\`pixi
freq = get_note_freq(60, 0) // Get the frequency of MIDI note 60 (C-4)
freq = get_note_freq(60, -32) // Get a slightly lower frequency
\`\`\`
        `
    }
];

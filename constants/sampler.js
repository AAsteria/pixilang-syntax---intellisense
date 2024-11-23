module.exports = [
    // Sampler constants
    {
        name: "SMP_INFO_SIZE",
        detail: "Sampler Info: Size",
        documentation: "Defines the size of the container with sample info."
    },
    // Sample info field numbers
    {
        name: "SMP_DEST",
        detail: "Sampler Destination",
        documentation: "Specifies the destination container."
    },
    {
        name: "SMP_DEST_OFF",
        detail: "Sampler Destination Offset",
        documentation: "Defines the offset in the destination container."
    },
    {
        name: "SMP_DEST_LEN",
        detail: "Sampler Destination Length",
        documentation: "Defines the length of the destination container."
    },
    {
        name: "SMP_SRC",
        detail: "Sampler Source",
        documentation: "Specifies the container with the sample data."
    },
    {
        name: "SMP_SRC_OFF_H",
        detail: "Sampler Source Offset High",
        documentation: "Defines the high part of the sample offset in fixed-point format."
    },
    {
        name: "SMP_SRC_OFF_L",
        detail: "Sampler Source Offset Low",
        documentation: "Defines the low part of the sample offset in fixed-point format (0 to 65535)."
    },
    {
        name: "SMP_SRC_SIZE",
        detail: "Sampler Source Size",
        documentation: "Specifies the size of the sample (0 for the whole sample)."
    },
    {
        name: "SMP_LOOP",
        detail: "Sampler Loop Start",
        documentation: "Specifies the starting point of the loop."
    },
    {
        name: "SMP_LOOP_LEN",
        detail: "Sampler Loop Length",
        documentation: "Defines the loop length (0 if no loop is applied)."
    },
    {
        name: "SMP_VOL1",
        detail: "Sampler Start Volume",
        documentation: "Defines the starting volume (32768 = 1.0)."
    },
    {
        name: "SMP_VOL2",
        detail: "Sampler End Volume",
        documentation: "Defines the ending volume (32768 = 1.0)."
    },
    {
        name: "SMP_DELTA",
        detail: "Sampler Delta",
        documentation: "Defines the delta (playing speed) in fixed-point format (real_value * 65536)."
    },
    {
        name: "SMP_FLAGS",
        detail: "Sampler Flags",
        documentation: "Specifies flags associated with the sampler."
    },

    // Sample info flags
    {
        name: "SMP_FLAG_INTERP2",
        detail: "Sampler Flag: Linear Interpolation",
        documentation: "Applies linear interpolation (2 points) to the sampler."
    },
    {
        name: "SMP_FLAG_INTERP4",
        detail: "Sampler Flag: Cubic Spline Interpolation",
        documentation: "Applies cubic spline interpolation (4 points) to the sampler."
    },
    {
        name: "SMP_FLAG_PINGPONG",
        detail: "Sampler Flag: Ping-Pong Loop",
        documentation: "Enables a ping-pong loop for the sample."
    },
    {
        name: "SMP_FLAG_REVERSE",
        detail: "Sampler Flag: Reverse Direction",
        documentation: "Plays the sample in reverse direction."
    }
];

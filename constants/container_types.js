module.exports = [
    {
        name: "INT",
        detail: "Signed integer",
        documentation: "Size depends on the version of Pixilang."
    },
    {
        name: "INT8",
        detail: "8-bit signed integer",
        documentation: "Range: -128 to 127."
    },
    {
        name: "INT16",
        detail: "16-bit signed integer",
        documentation: "Range: -32768 to 32767."
    },
    {
        name: "INT32",
        detail: "32-bit signed integer",
        documentation: "Range: -2147483648 to 2147483647."
    },
    {
        name: "INT64",
        detail: "64-bit signed integer",
        documentation: "Not supported by default; enable in pixilang.h for custom builds."
    },
    {
        name: "FLOAT",
        detail: "Floating point",
        documentation: "Size depends on the version of Pixilang."
    },
    {
        name: "FLOAT32",
        detail: "32-bit floating point",
        documentation: ""
    },
    {
        name: "FLOAT64",
        detail: "64-bit floating point",
        documentation: ""
    },
    {
        name: "PIXEL",
        detail: "Pixel in native color format",
        documentation: "Converted to INTx type, where x is the number of bits per pixel."
    }
];

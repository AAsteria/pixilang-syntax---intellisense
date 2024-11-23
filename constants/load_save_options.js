module.exports = [
    {
        name: "LOAD_FIRST_FRAME",
        detail: "Load first frame only",
        documentation: "Used to load just the first frame of a file, often for animations or multi-frame files."
    },
    {
        name: "LOAD_AS_RAW",
        detail: "Load as raw data",
        documentation: "Load the file as raw data (array of bytes) without decoding."
    },
    {
        category: "GIF Saving",
        constants: [
            {
                name: "GIF_GRAYSCALE",
                detail: "GIF grayscale",
                documentation: "Save GIF in grayscale mode."
            },
            {
                name: "GIF_DITHER",
                detail: "GIF dithering",
                documentation: "Apply dithering when saving the GIF file."
            }
        ]
    },
    {
        category: "JPEG Saving",
        constants: [
            {
                name: "JPEG_H1V1",
                detail: "YCbCr, no subsampling",
                documentation: "YCbCr H1V1 subsampling (YCbCr 1x1x1, 3 blocks per MCU)."
            },
            {
                name: "JPEG_H2V1",
                detail: "YCbCr, H2V1 subsampling",
                documentation: "YCbCr 2x1x1 subsampling (4 blocks per MCU)."
            },
            {
                name: "JPEG_H2V2",
                detail: "YCbCr, H2V2 subsampling",
                documentation: "YCbCr 4x1x1 subsampling (6 blocks per MCU). This is the default setting."
            },
            {
                name: "JPEG_TWOPASS",
                detail: "Two-pass JPEG saving",
                documentation: "Save JPEG with two passes for higher quality."
            }
        ]
    }
];

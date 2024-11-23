module.exports = [
    {
        name: "RESIZE_INTERP1",
        detail: "Rough resizing",
        documentation: "Used for resizing a container with minimal interpolation for speed."
    },
    {
        name: "RESIZE_INTERP2",
        detail: "Resize with linear interpolation",
        documentation: "Performs container resizing with linear interpolation for better quality."
    },
    {
        name: "RESIZE_UNSIGNED_INTERP2",
        detail: "Resize unsigned with linear interpolation",
        documentation: "Used for unsigned data resizing with linear interpolation."
    },
    {
        name: "RESIZE_COLOR_INTERP1",
        detail: "Color rough resizing",
        documentation: "Rough resizing specifically for color containers."
    },
    {
        name: "RESIZE_COLOR_INTERP2",
        detail: "Color resize with linear interpolation",
        documentation: "Resizes color containers using linear interpolation."
    }
];

module.exports = [
    {
        name: "CFLAG_INTERP",
        detail: "Enable software interpolation",
        documentation: "Used to enable interpolation when resizing or manipulating containers."
    },
    {
        name: "GL_MIN_LINEAR",
        detail: "OpenGL acceleration flag",
        documentation: "Specifies linear interpolation for minimizing textures in OpenGL."
    },
    {
        name: "GL_MAG_LINEAR",
        detail: "OpenGL acceleration flag",
        documentation: "Specifies linear interpolation for magnifying textures in OpenGL."
    },
    {
        name: "GL_NICEST",
        detail: "OpenGL acceleration flag",
        documentation: "Uses 32-bit color, when possible, for better image quality."
    },
    {
        name: "GL_NO_XREPEAT",
        detail: "OpenGL acceleration flag",
        documentation: "Disables horizontal texture repetition."
    },
    {
        name: "GL_NO_YREPEAT",
        detail: "OpenGL acceleration flag",
        documentation: "Disables vertical texture repetition."
    },
    {
        name: "GL_NO_ALPHA",
        detail: "OpenGL acceleration flag",
        documentation: "Disables the use of alpha (transparency) channel."
    },
    {
        name: "GL_NPOT",
        detail: "OpenGL acceleration flag",
        documentation: "Allows the use of OpenGL textures with non-power-of-two dimensions. On iOS, this must be combined with GL_NO_XREPEAT and GL_NO_YREPEAT."
    }
];

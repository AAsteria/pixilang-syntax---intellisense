module.exports = [
    {
        name: "PIXILANG_VERSION",
        detail: "Misc: Pixilang Version",
        documentation: "Pixilang version encoded as ((major<<24) + (minor<<16) + (minor2<<16) + minor3). Example: `PIXILANG_VERSION = 0x03040700` for v3.4.7."
    },
    {
        name: "OS_NAME",
        detail: "Misc: Operating System Name",
        documentation: "Container with the system name. Examples: `ios`, `win32`, `linux`."
    },
    {
        name: "ARCH_NAME",
        detail: "Misc: Architecture Name",
        documentation: "Container with the architecture name. Examples: `x86`, `x86_64`, `arm`, `mips`."
    },
    {
        name: "LANG_NAME",
        detail: "Misc: Language Name",
        documentation: "Container with the name of the current system language in POSIX format. Examples: `en_US`, `ru_RU.utf8`."
    },
    {
        name: "CURRENT_PATH",
        detail: "Misc: Current Path",
        documentation: "Represents the current working path."
    },
    {
        name: "USER_PATH",
        detail: "Misc: User Path",
        documentation: "Represents the user directory path."
    },
    {
        name: "TEMP_PATH",
        detail: "Misc: Temporary Path",
        documentation: "Represents the temporary directory path."
    },
    {
        name: "OPENGL",
        detail: "Misc: OpenGL Availability",
        documentation: "Indicates OpenGL availability. Value is `1` if available, `0` otherwise."
    },
    {
        name: "INT_SIZE",
        detail: "Misc: Integer Size",
        documentation: "Maximum size (in bytes) of the signed integer."
    },
    {
        name: "FLOAT_SIZE",
        detail: "Misc: Float Size",
        documentation: "Maximum size (in bytes) of the floating point number."
    },
    {
        name: "INT_MAX",
        detail: "Misc: Maximum Integer",
        documentation: "Maximum positive integer value."
    },
    {
        name: "COLORBITS",
        detail: "Misc: Color Bits",
        documentation: "Number of bits per pixel."
    }
];

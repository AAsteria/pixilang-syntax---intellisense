module.exports = [
    {
        name: 'dlopen',
        detail: 'Open a dynamic library.',
        documentation: `
**Description:**  
Opens a dynamic library (e.g., .DLL on Windows or .SO on Linux).

**Parameters:**  
- \`lib_file_name\`: The file name of the dynamic library.

**Return Value:**  
Library ID, or \`-1\` if an error occurred.

**Examples:**  
\`\`\`pixi
dl = dlopen("mylib.dll") // Open the library
if dl >= 0 {
    f = dlsym(dl, "show_info", "iip") // Get the function 'show_info' from the library
    if f >= 0 {
        retval = dlcall(dl, f, 1, 2, "blahblah") // Call the function with parameters
    }
    dlclose(dl) // Close the library
}
\`\`\`
        `
    },
    {
        name: 'dlclose',
        detail: 'Close a dynamic library.',
        documentation: `
**Description:**  
Closes a previously opened dynamic library.

**Parameters:**  
- \`lib_id\`: The ID of the library to close.

**Examples:**  
\`\`\`pixi
dlclose(lib_id) // Close the library
\`\`\`
        `
    },
    {
        name: 'dlsym',
        detail: 'Get a symbol (function or variable) from a dynamic library.',
        documentation: `
**Description:**  
Retrieves a symbol (function or variable) from an open dynamic library.

**Parameters:**  
- \`lib_id\`: Library ID from \`dlopen\`.  
- \`symbol_name\`: Name of the function or variable.  
- \`format\`: Function format (e.g., \`"iip"\`); optional.  
- \`calling_convention\`: Calling convention; optional; default is \`CCONV_DEFAULT\`.

**Return Value:**  
Symbol ID, or \`-1\` if an error occurred.

**Examples:**  
\`\`\`pixi
f = dlsym(dl, "show_info", "iip") // Get the function with format "iip"
\`\`\`
        `
    },
    {
        name: 'dlcall',
        detail: 'Call a function from a dynamic library.',
        documentation: `
**Description:**  
Calls a function from an open dynamic library.

**Parameters:**  
- \`lib_id\`: Library ID from \`dlopen\`.  
- \`symbol_id\`: Symbol ID from \`dlsym\`.  
- \`optional_function_parameters\`: Parameters for the function (optional).

**Examples:**  
\`\`\`pixi
retval = dlcall(dl, f, 1, 2, "blahblah") // Call the function with parameters
\`\`\`
        `
    }
];

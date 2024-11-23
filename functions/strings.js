module.exports = [
    {
        name: 'num_to_str',
        detail: 'Convert a number to a string.',
        documentation: `
**Aliases:**  
\`num2str\`

**Description:**  
Converts a number to a string.

**Parameters:**  
- \`str\`: Container for the string.  
- \`num\`: Numeric value.  
- \`radix\`: Supported values are \`10\` and \`16\`; optional (default: \`10\`).  
- \`str_offset\`: Offset within the string; optional.  
- \`no_null_term\`: If true, no NULL terminator is added; optional.

**Examples:**  
\`\`\`pixi
v = 45.64
s = ""
num_to_str(s, v)
fputs(s)
fputs("\\n")
\`\`\`
        `
    },
    {
        name: 'str_to_num',
        detail: 'Convert a string to a number.',
        documentation: `
**Aliases:**  
\`str2num\`

**Description:**  
Converts a string to a number.

**Parameters:**  
- \`str\`: Container with the string.  
- \`str_offset\`: Offset within the string; optional.  
- \`len\`: Length of substring with the number; optional.

**Return Value:**  
Numeric value.

**Examples:**  
\`\`\`pixi
a = str_to_num("-55.44")
b = a + 4
\`\`\`
        `
    },
    {
        name: 'strcat',
        detail: 'Append one string to another.',
        documentation: `
**Description:**  
Appends a copy of the source string to the destination string.  

**Parameters:**  
- \`destination\`: The destination string.  
- \`source\`: The source string.  

Or:  
- \`dest\`: The destination string.  
- \`dest_offset\`: Offset within the destination string.  
- \`source\`: The source string.  
- \`source_offset\`: Offset within the source string.
        `
    },
    {
        name: 'strcmp',
        detail: 'Compare two strings.',
        documentation: `
**Description:**  
Compares \`str1\` to \`str2\`. Both strings can include a NULL terminator or exclude it (if the container size equals the string length).

**Parameters:**  
- \`str1\`: First string.  
- \`str2\`: Second string.  

Or:  
- \`str1\`: First string.  
- \`str1_offset\`: Offset in the first string.  
- \`str2\`: Second string.  
- \`str2_offset\`: Offset in the second string.  

**Return Value:**  
- \`0\`: Strings are equal.  
- Greater than \`0\`: First non-matching character in \`str1\` is greater.  
- Less than \`0\`: First non-matching character in \`str1\` is smaller.
        `
    },
    {
        name: 'strlen',
        detail: 'Get the length of a string.',
        documentation: `
**Description:**  
Returns the length of \`str\`. The string can include a NULL terminator or exclude it (if the container size equals the string length).

**Parameters:**  
- \`str\`: String to measure.  
- \`str_offset\`: Offset in the string; optional.

**Return Value:**  
Length of the string.
        `
    },
    {
        name: 'strstr',
        detail: 'Find the first occurrence of a substring.',
        documentation: `
**Description:**  
Returns the offset of the first occurrence of \`str2\` in \`str1\`.  

**Parameters:**  
- \`str1\`: The main string.  
- \`str2\`: The substring to find.  

Or:  
- \`str1\`: The main string.  
- \`str1_offset\`: Offset in \`str1\`.  
- \`str2\`: The substring to find.  
- \`str2_offset\`: Offset in \`str2\`.

**Return Value:**  
Offset of the first occurrence of \`str2\` in \`str1\`, or \`-1\` if \`str2\` is not found.
        `
    },
    {
        name: 'sprintf',
        detail: 'Format data into a string.',
        documentation: `
**Description:**  
Writes into \`str\` a formatted string based on the \`format\` argument. The size of the \`str\` container will automatically increase if needed.

**Parameters:**  
- \`str\`: Destination container.  
- \`format\`: Format string.  
- Additional arguments.

**Return Value:**  
Number of characters written on success, or a negative number on failure.

**Examples:**  
\`\`\`pixi
sprintf(str, "Some text\\n")           // Write simple text
sprintf(str, "Number: %d\\n", 12)      // Write formatted integer
\`\`\`
        `
    },
    {
        name: 'sprintf2',
        detail: 'Format data into a string with additional parameters.',
        documentation: `
**Description:**  
Same as \`sprintf\`, but with extra parameters.

**Parameters:**  
- \`str\`: Destination container.  
- \`str_offset\`: Offset in the destination string.  
- \`no_null_term\`: If non-zero, NULL terminator is omitted.  
- \`format\`: Format string.  
- Additional arguments.

**Return Value:**  
Number of characters written on success, or a negative number on failure.

**Examples:**  
\`\`\`pixi
str = "######"
val = 24
sprintf2(str, 2, 1, "%d", val)
// Container str now contains: "##24##"
\`\`\`
        `
    },
    {
        name: 'printf',
        detail: 'Print formatted output to STDOUT.',
        documentation: `
**Description:**  
Same as \`sprintf\`, but the output goes to \`STDOUT\`.

**Parameters:**  
- \`format\`: Format string.  
- Additional arguments.
        `
    },
    {
        name: 'fprintf',
        detail: 'Print formatted output to a stream.',
        documentation: `
**Description:**  
Prints formatted output to a specified stream.

**Parameters:**  
- \`stream\`: Stream (opened with \`fopen\` or \`fopen_mem\`).  
- \`format\`: Format string.  
- Additional arguments.
        `
    }
];

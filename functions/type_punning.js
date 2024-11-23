module.exports = [
    {
        name: 'reinterpret_type',
        detail: 'Perform type punning between INT and FLOAT with specified bit size.',
        documentation: `
**Description:**  
Converts a value between INT and FLOAT using the specified bit size for intermediate representation.

**Parameters:**  
- \`value\`: The value to be converted.  
- \`mode\`: Determines the conversion direction:  
  - \`0\`: \`FLOAT -> X-bit FLOAT -> INT\`  
  - \`1\`: \`INT -> X-bit FLOAT -> FLOAT\`  
- \`intermediate_value_bits\`: The size of the intermediate representation in bits (\`32\` or \`64\`).

**Return Value:**  
The converted value (\`INT\` or \`FLOAT\`, depending on the mode).

**Examples:**  
\`\`\`pixi
// Convert a 32-bit FLOAT to INT
int_value = reinterpret_type(3.14, 0, 32)

// Convert a 32-bit INT to FLOAT
float_value = reinterpret_type(123456, 1, 32)
\`\`\`

**Notes:**  
- Ensure \`intermediate_value_bits\` is either \`32\` or \`64\`, depending on the desired precision.
- Type punning is useful for low-level bit manipulation and representation conversion.
        `
    }
];

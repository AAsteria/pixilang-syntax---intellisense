module.exports = [
    {
        name: 'acos',
        detail: 'Calculate the arccosine of a value.',
        documentation: `
**Description:**  
Returns the arccosine of a number in radians.

**Parameters:**  
- \`x\`: The value for which to calculate the arccosine.

**Examples:**  
\`\`\`pixi
result = acos(0.5) // Arccosine of 0.5
\`\`\`
        `
    },
    {
        name: 'acosh',
        detail: 'Calculate the hyperbolic arccosine of a value.',
        documentation: `
**Description:**  
Returns the hyperbolic arccosine of a number.

**Parameters:**  
- \`x\`: The value for which to calculate the hyperbolic arccosine.

**Examples:**  
\`\`\`pixi
result = acosh(1.5)
\`\`\`
        `
    },
    {
        name: 'asin',
        detail: 'Calculate the arcsine of a value.',
        documentation: `
**Description:**  
Returns the arcsine of a number in radians.

**Parameters:**  
- \`x\`: The value for which to calculate the arcsine.

**Examples:**  
\`\`\`pixi
result = asin(0.5) // Arcsine of 0.5
\`\`\`
        `
    },
    {
        name: 'asinh',
        detail: 'Calculate the hyperbolic arcsine of a value.',
        documentation: `
**Description:**  
Returns the hyperbolic arcsine of a number.

**Parameters:**  
- \`x\`: The value for which to calculate the hyperbolic arcsine.

**Examples:**  
\`\`\`pixi
result = asinh(1.5)
\`\`\`
        `
    },
    {
        name: 'atan',
        detail: 'Calculate the arctangent of a value.',
        documentation: `
**Description:**  
Returns the arctangent of a number in radians.

**Parameters:**  
- \`x\`: The value for which to calculate the arctangent.

**Examples:**  
\`\`\`pixi
result = atan(1) // Arctangent of 1
\`\`\`
        `
    },
    {
        name: 'atan2',
        detail: 'Calculate the angle between the positive X axis and a vector.',
        documentation: `
**Description:**  
Returns the angle in radians between the positive X axis and the vector (x, y).

**Parameters:**  
- \`y\`: The y-coordinate of the vector.  
- \`x\`: The x-coordinate of the vector.

**Examples:**  
\`\`\`pixi
angle = atan2(1, 1) // Angle of vector (1, 1)
\`\`\`
        `
    },
    {
        name: 'atanh',
        detail: 'Calculate the hyperbolic arctangent of a value.',
        documentation: `
**Description:**  
Returns the hyperbolic arctangent of a number.

**Parameters:**  
- \`x\`: The value for which to calculate the hyperbolic arctangent.

**Examples:**  
\`\`\`pixi
result = atanh(0.5)
\`\`\`
        `
    },
    {
        name: 'ceil',
        detail: 'Round a number up to the nearest integer.',
        documentation: `
**Description:**  
Returns the smallest integer value not less than the input.

**Parameters:**  
- \`x\`: The number to round up.

**Examples:**  
\`\`\`pixi
result = ceil(4.2) // Result: 5
\`\`\`
        `
    },
    {
        name: 'cos',
        detail: 'Calculate the cosine of an angle.',
        documentation: `
**Description:**  
Returns the cosine of an angle in radians.

**Parameters:**  
- \`x\`: The angle in radians.

**Examples:**  
\`\`\`pixi
result = cos(3.14159 / 2) // Cosine of 90 degrees
\`\`\`
        `
    },
    {
        name: 'rand',
        detail: 'Generate a random number between 0 and 32767.',
        documentation: `
**Description:**  
Generates a random integer between 0 and 32767.

**Examples:**  
\`\`\`pixi
random_number = rand() // Generate a random number
\`\`\`
        `
    },
    {
        name: 'rand_seed',
        detail: 'Set the seed for the random number generator.',
        documentation: `
**Description:**  
Initializes the random number generator with the specified seed.

**Parameters:**  
- \`seed\`: The seed value to initialize the random generator.

**Examples:**  
\`\`\`pixi
rand_seed(12345) // Set seed for reproducible random numbers
\`\`\`
        `
    },
    ...[
        { name: 'cosh', desc: 'Hyperbolic cosine.' },
        { name: 'exp', desc: 'e raised to a given power.' },
        { name: 'exp2', desc: '2 raised to a given power.' },
        { name: 'floor', desc: 'Round a number down to the nearest integer.' },
        { name: 'log', desc: 'Natural logarithm (base e).' },
        { name: 'log2', desc: 'Binary logarithm (base 2).' },
        { name: 'log10', desc: 'Common logarithm (base 10).' },
        { name: 'mod', desc: 'Floating-point remainder of x / y.' },
        { name: 'pow', desc: 'Raise a number to a power.' },
        { name: 'sin', desc: 'Sine of an angle in radians.' },
        { name: 'sinh', desc: 'Hyperbolic sine.' },
        { name: 'sqrt', desc: 'Square root of a number.' },
        { name: 'tan', desc: 'Tangent of an angle in radians.' },
        { name: 'tanh', desc: 'Hyperbolic tangent.' }
    ].map(({ name, desc }) => ({
        name,
        detail: desc,
        documentation: `
**Description:**  
${desc}

**Examples:**  
\`\`\`pixi
result = ${name}(value)
\`\`\`
        `
    }))
];

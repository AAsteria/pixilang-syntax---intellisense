module.exports = [
    {
        name: 'op_cn',
        detail: 'Perform an operation on each element of a container with a numerical value.',
        documentation: `
**Description:**  
Applies an operation to each element in a container with the specified numerical value.

**Parameters:**  
- \`opcode\`: The operation to perform.  
- \`C1\`: The destination container.  
- \`N\`: The numerical value.  
- \`x, xsize\`: 1D region parameters (optional).  
- \`x, y, xsize, ysize\`: 2D region parameters (optional).

**Examples:**  
\`\`\`pixi
op_cn(OP_ADD, img, 32) // Add 32 to the entire container
op_cn(OP_ADD, img, 32, 128, 128) // Add 32 to elements 128–256
op_cn(OP_ADD, img, 32, 8, 8, 32, 32) // Add 32 to region (8,8,32,32)
\`\`\`
        `
    },
    {
        name: 'op_cc',
        detail: 'Perform an operation on two containers.',
        documentation: `
**Description:**  
Applies an operation between two containers element-by-element.

**Parameters:**  
- \`opcode\`: The operation to perform.  
- \`C1\`: The destination container.  
- \`C2\`: The source container.  
- \`dest_x, src_x, xsize\`: 1D region parameters (optional).  
- \`dest_x, dest_y, src_x, src_y, xsize, ysize\`: 2D region parameters (optional).

**Examples:**  
\`\`\`pixi
op_cc(OP_ADD, dest, src) // Add source to destination element-by-element
\`\`\`
        `
    },
    {
        name: 'op_ccn',
        detail: 'Perform an operation on two containers with a numerical value.',
        documentation: `
**Description:**  
Applies an operation between two containers with an additional numerical value.

**Parameters:**  
- \`opcode\`: The operation to perform.  
- \`C1\`: The destination container.  
- \`C2\`: The source container.  
- \`N\`: The numerical value.  
- \`dest_x, src_x, xsize\`: 1D region parameters (optional).  
- \`dest_x, dest_y, src_x, src_y, xsize, ysize\`: 2D region parameters (optional).
        `
    },
    {
        name: 'generator',
        detail: 'Generate a signal in a container.',
        documentation: `
**Description:**  
Generates a signal in the specified container.

**Parameters:**  
- \`opcode\`: The operation to perform (e.g., OP_SIN).  
- \`pixi\`: The destination container.  
- \`phase, amplitude, delta_x, delta_y\`: Signal properties.  
- \`x, y, xsize, ysize\`: Region parameters (optional).

**Examples:**  
\`\`\`pixi
generator(OP_SIN, img, 0, 1, 0.1, 0.1) // Generate a sine wave
\`\`\`
        `
    },
    {
        name: 'wavetable_generator',
        detail: 'Generate audio using a wavetable.',
        documentation: `
**Description:**  
Fast multichannel sampler for looping audio samples of a fixed size.

**Parameters:**  
- \`dest, dest_offset, dest_length\`: Destination parameters.  
- \`table\`: Wavetable container.  
- \`amp, amp_delta, pos, pos_delta\`: Audio properties.  
- \`gen_offset, gen_step, gen_count\`: Generator parameters.

**Return Value:**  
\`0\` if successful.

**Examples:**  
\`\`\`pixi
wavetable_generator(dest, 0, 256, wavetable, amp, amp_delta, pos, pos_delta, 0, 1, 8)
\`\`\`
        `
    },
    {
        name: 'fft',
        detail: 'Perform a fast Fourier transform.',
        documentation: `
**Description:**  
Performs a fast Fourier transform (FFT).

**Parameters:**  
- \`inverse\`: Set to \`1\` for inverse FFT.  
- \`im, re\`: Imaginary and real parts of the data.  
- \`size\`: Size of the FFT.

**Examples:**  
\`\`\`pixi
fft(0, imag_part, real_part, 256) // Perform FFT on 256 elements
\`\`\`
        `
    },
    {
        name: 'replace_values',
        detail: 'Replace container values based on a lookup table.',
        documentation: `
**Description:**  
Replaces container values based on a substitution table.

**Parameters:**  
- \`dest\`: Destination container.  
- \`src\`: Source container.  
- \`values\`: Substitution table.  
- \`dest_offset, src_offset, size\`: Optional offsets and size.

**Examples:**  
\`\`\`pixi
replace_values(screen, img8, palette) // Convert 8-bit image with a palette
\`\`\`
        `
    },
    {
        name: 'gradient',
        detail: 'Apply a gradient to a container region.',
        documentation: `
**Description:**  
Fills intermediate values between the key points of a rectangle in the specified container.

**Parameters:**  
- \`container\`: Destination container.  
- \`val1, val2, val3, val4\`: Values of the 4 key points.  
- \`x, y, xsize, ysize, x_step, y_step\`: Rectangle and step parameters.

**Examples:**  
\`\`\`pixi
gradient(container, 10, 20, 30, 40, 0, 0, 32, 32, 1, 1)
\`\`\`
        `
    },
    {
        name: 'apply_filter',
        detail: 'Apply a filter to a container.',
        documentation: `
**Description:**  
Applies a convolution or custom filter to a container.

**Parameters:**  
- \`filter\`: The filter container.  
- \`output, input\`: Input and output containers.  
- \`flags, offset, size\`: Optional parameters.

**Return Value:**  
\`0\` if successful.
        `
    },
    {
        name: 'replace_values',
        detail: 'Replace container values based on a lookup table.',
        documentation: `
    **Description:**  
    For each element in the destination container, replaces its value based on a substitution table.
    
    **Parameters:**  
    - \`dest\`: Destination container.  
    - \`src\`: Source container.  
    - \`values\`: Lookup table for substitutions.  
    - \`dest_offset\`: Offset in the destination container (optional).  
    - \`src_offset\`: Offset in the source container (optional).  
    - \`size\`: Number of elements to replace (optional).
    
    **Examples:**  
    \`\`\`pixi
    // Convert an 8-bit image using a palette:
    replace_values(screen, img8, palette)
    \`\`\`
            `
    },
    {
        name: 'copy_and_resize',
        detail: 'Copy and resize a source container into a destination container.',
        documentation: `
    **Description:**  
    Copies and resizes the contents of a source container into a destination container. Supports resizing with optional interpolation flags.
    
    **Parameters:**  
    - \`dest\`: The destination container.  
    - \`src\`: The source container.  
    - \`flags\`: Resizing flags (\`RESIZE_*\`); optional; default is \`RESIZE_INTERP1\`.  
    - \`dest_x, dest_y, dest_rect_xsize, dest_rect_ysize\`: Destination region parameters (optional).  
    - \`src_x, src_y, src_rect_xsize, src_rect_ysize\`: Source region parameters (optional).
    
    **Examples:**  
    \`\`\`pixi
    // Resize and copy the source to the destination:
    copy_and_resize(dest, src, RESIZE_INTERP4, 0, 0, 128, 128, 0, 0, 64, 64)
    \`\`\`
            `
    },
    {
        name: 'conv_filter',
        detail: 'Apply a convolution filter to a container.',
        documentation: `
    **Description:**  
    Applies a convolution filter (kernel matrix) to a source container and stores the result in a destination container. Allows additional control with optional kernel offsets, regions, and step parameters.
    
    **Parameters:**  
    - \`dest\`: The destination container.  
    - \`src\`: The source container.  
    - \`kernel\`: The convolution matrix container.  
    - \`div\`: Division factor for the result value (default: 1); optional.  
    - \`offset\`: Offset for the result value (default: 0); optional.  
    - \`flags\`: Convolution flags (\`CONV_FILTER_*\`); optional.  
    - \`kernel_xcenter\`: Horizontal center of the kernel (optional).  
    - \`kernel_ycenter\`: Vertical center of the kernel (optional).  
    - \`dest_x, dest_y, src_x, src_y, xsize, ysize, xstep, ystep\`: Optional parameters for defining the regions and steps.
    
    **Examples:**  
    \`\`\`pixi
    // Apply a 3x3 convolution kernel to a source container:
    conv_filter(dest, src, kernel, 1, 0, CONV_FILTER_DEFAULT, 1, 1, 0, 0, 0, 0, 128, 128, 1, 1)
    \`\`\`
            `
    }  
];

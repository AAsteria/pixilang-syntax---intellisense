module.exports = [
    {
        name: 'new',
        detail: 'Create a new data container.',
        documentation: `
**Description:**  
Creates a new data container. Immediately after its creation, the container may contain random values. Clean it or fill it with useful data.  

**Parameters:**  
- \`xsize\`: Width.  
- \`ysize\`: Height.  
- \`type\`: Type of atomic elements. Valid values:
  - \`INT\`, \`INT8\`, \`INT16\`, \`INT32\`, \`INT64\` (signed integers).
  - \`FLOAT\`, \`FLOAT32\`, \`FLOAT64\` (floating point numbers).
  - \`PIXEL\` (converted to type \`INTx\`, where x = bits per pixel).

**Return Value:**  
ID of the container, or \`-1\` (error).

**Examples:**  
\`\`\`pixi
p = new()              // Create a 1x1 container (type = pixel)
p = new(4)             // Create a 4x1 container (type = pixel)
p = new(4, 4)          // Create a 4x4 container (type = pixel)
p = new(4, 4, INT32)   // Create a 4x4 container (type = INT32)
\`\`\`
        `
    },
    {
        name: 'remove',
        detail: 'Remove a container.',
        documentation: `
**Description:**  
Removes a container from memory.

**Parameters:**  
- \`pixi\`: Container ID.

**Examples:**  
\`\`\`pixi
p = new()  // Create a new container
remove(p)  // Remove the container
\`\`\`
        `
    },
    {
        name: 'remove_with_alpha',
        detail: 'Remove a container and its alpha channel (linked container).',
        documentation: `
**Description:**  
Removes the container and its associated alpha channel.

**Parameters:**  
- \`pixi\`: Container ID.
        `
    },
    {
        name: 'resize',
        detail: 'Resize a container.',
        documentation: `
**Description:**  
Resize a container to new dimensions or type.

**Parameters:**  
- \`pixi\`: Container ID.  
- \`xsize\`: New width (\`-1\` to keep the current width).  
- \`ysize\`: New height (\`-1\` to keep the current height).  
- \`type\`: New type (\`-1\` to keep the current type). Valid values:
  - \`INT8\`, \`INT16\`, \`INT32\`, \`INT64\` (signed integers).
  - \`FLOAT32\`, \`FLOAT64\` (floating points).
  - \`PIXEL\` (converted to type \`INTx\`).  
- \`flags\`: Optional resizing flags (e.g., \`RESIZE_*\`).

**Return Value:**  
\`0\` - Success, \`1\` - Error.

**Examples:**  
\`\`\`pixi
p = new(4, 4)       // Create a 4x4 container
resize(p, 32, 32)   // Resize to 32x32
resize(p, -1, 64)   // Keep width, change height to 64
remove(p)           // Remove the container
\`\`\`
        `
    },
    {
        name: 'rotate',
        detail: 'Rotate a container by angle * 90 degrees (clockwise).',
        documentation: `
**Parameters:**  
- \`pixi\`: Container ID.  
- \`angle\`: The rotation angle in multiples of 90 degrees.
        `
    },
    {
        name: 'convert_type',
        detail: 'Convert the type of a container.',
        documentation: `
**Parameters:**  
- \`pixi\`: Container ID.  
- \`new_type\`: The new type for the container's elements.
        `
    },
    {
        name: 'clean',
        detail: 'Fill a container with zeroes or a specific value.',
        documentation: `
**Parameters:**  
- \`dest_cont\`: Container ID.  
- \`v\`: Value to fill (default: \`0\`).  
- \`offset\`: Starting index (default: \`0\`).  
- \`count\`: Number of elements to fill (default: whole container).

**Examples:**  
\`\`\`pixi
p = new(4, 4)     // Create a 4x4 container
clean(p)          // Fill with zeroes
clean(p, 3)       // Fill with 3s
clean(p, 3, 0, 4) // Fill first 4 elements with 3
remove(p)         // Remove the container
\`\`\`
        `
    },
    {
        name: 'clone',
        detail: 'Create a duplicate of a container.',
        documentation: `
**Parameters:**  
- \`pixi\`: Container ID.

**Return Value:**  
ID of the new container, or \`-1\` (error).
        `
    },
    {
        name: 'copy',
        detail: 'Copy elements from one container to another.',
        documentation: `
**Parameters:**  
- \`dest\`: Destination container.  
- \`src\`: Source container.  
- \`dest_offset\`: Start index in destination.  
- \`src_offset\`: Start index in source.  
- \`count\`: Number of elements to copy.  
- \`dest_step\`: Destination step (default: \`1\`).  
- \`src_step\`: Source step (default: \`1\`).  
- \`flags\`: Copy flags (optional).

**Examples:**  
\`\`\`pixi
// Copy all elements from img1 to img2
copy(img2, img1)
// Copy elements 8 to 200 from img1 to img2
copy(img2, img1, 8, 8, 192)
// Copy every 2nd element from img1 to img2
copy(img2, img1, 8, 8, 192, 2, 2)
\`\`\`
        `
    },
    {
        name: 'get_size',
        detail: 'Get the total number of elements in a container.',
        documentation: `
**Parameters:**  
- \`pixi\`: Container ID.

**Examples:**  
\`\`\`pixi
p = new(8, 8)       // Create an 8x8 container
size = get_size(p)  // Get the size
remove(p)           // Remove the container
\`\`\`
        `
    },
    {
        name: 'get_xsize',
        detail: 'Get the width of a container.',
        documentation: `
**Parameters:**  
- \`pixi\`: Container ID.

**Examples:**  
\`\`\`pixi
p = new(8, 8)       // Create an 8x8 container
xsize = get_xsize(p) // Get the width
remove(p)           // Remove the container
\`\`\`
        `
    },
    {
        name: 'get_ysize',
        detail: 'Get the height of a container.',
        documentation: `
    **Parameters:**  
    - \`pixi\`: Container ID.
    
    **Examples:**  
    \`\`\`pixi
    p = new(8, 8)        // Create an 8x8 container
    ysize = get_ysize(p) // Get the height
    remove(p)            // Remove the container
    \`\`\`
        `
    },
    {
        name: 'get_esize',
        detail: 'Get the size of each element in the container (in bytes).',
        documentation: `
    **Parameters:**  
    - \`pixi\`: Container ID.
    
    **Examples:**  
    \`\`\`pixi
    p = new(8, 8, INT32) // Create an 8x8 container (element type: INT32)
    esize = get_esize(p) // Get element size (in bytes)
    // esize = 4
    remove(p)
    \`\`\`
        `
    },
    {
        name: 'get_type',
        detail: 'Get the type of elements in the container.',
        documentation: `
    **Parameters:**  
    - \`pixi\`: Container ID.
    
    **Examples:**  
    \`\`\`pixi
    p = new(8, 8, FLOAT32) // Create an 8x8 container (type: FLOAT32)
    type = get_type(p)     // Get the element type
    // type = FLOAT32
    remove(p)
    \`\`\`
        `
    },
    {
        name: 'get_flags',
        detail: 'Get the flags of a container.',
        documentation: `
    **Parameters:**  
    - \`pixi\`: Container ID.
    
    **Return Value:**  
    Flags associated with the container.
        `
    },
    {
        name: 'set_flags',
        detail: 'Set the flags for a container.',
        documentation: `
    **Parameters:**  
    - \`pixi\`: Container ID.  
    - \`flags\`: Flags to set.
    
    **Examples:**  
    \`\`\`pixi
    set_flags(img, GL_MIN_LINEAR | GL_MAG_LINEAR)
    \`\`\`
        `
    },
    {
        name: 'reset_flags',
        detail: 'Reset the flags for a container.',
        documentation: `
    **Parameters:**  
    - \`pixi\`: Container ID.  
    - \`flags\`: Flags to reset.
        `
    },
    {
        name: 'get_prop',
        detail: 'Get the value of a property in a container.',
        documentation: `
    **Parameters:**  
    - \`pixi\`: Container ID.  
    - \`prop_name\`: Property name.  
    - \`def_value\`: Default value (optional, if the property does not exist).
    
    **Return Value:**  
    Value of the specified property.
    
    **Examples:**  
    \`\`\`pixi
    p = new(8, 8, INT32)     // Create a container
    set_prop(p, "speed", 777) // Set a "speed" property
    v = get_prop(p, "speed")  // Retrieve the property value
    // OR:
    p.speed = 777             // Set property with dot operator
    v = p.speed               // Get property with dot operator
    \`\`\`
        `
    },
    {
        name: 'set_prop',
        detail: 'Set a property value in a container.',
        documentation: `
    **Parameters:**  
    - \`pixi\`: Container ID.  
    - \`prop_name\`: Property name.  
    - \`value\`: Property value.
    
    **Examples:**  
    \`\`\`pixi
    p = new(8, 8, INT32)      // Create a container
    set_prop(p, "speed", 777) // Set a "speed" property
    // OR:
    p.speed = 777             // Set property with dot operator
    \`\`\`
        `
    },
    {
        name: 'remove_prop',
        detail: 'Remove a property from a container.',
        documentation: `
    **Parameters:**  
    - \`pixi\`: Container ID.  
    - \`prop_name\`: Name of the property to remove.
        `
    },
    {
        name: 'remove_props',
        detail: 'Remove all properties from a container.',
        documentation: `
    **Parameters:**  
    - \`pixi\`: Container ID.
        `
    },
    {
        name: 'get_proplist',
        detail: 'Get a list of all properties for a container.',
        documentation: `
    **Parameters:**  
    - \`pixi\`: Container ID.
    
    **Return Value:**  
    Array of strings containing property names.
        `
    },
    {
        name: 'remove_proplist',
        detail: 'Remove the list of properties from a container.',
        documentation: `
    **Parameters:**  
    - \`list\`: The property list to remove.
        `
    },
    {
        name: 'show_memory_debug_messages',
        detail: 'Enable or disable memory debug messages.',
        documentation: `
    **Parameters:**  
    - \`enable\`: Boolean to enable (\`true\`) or disable (\`false\`).
        `
    },
    {
        name: 'zlib_pack',
        detail: 'Compress a container using Zlib.',
        documentation: `
    **Parameters:**  
    - \`source\`: Container to compress.  
    - \`level\`: Compression level (optional). Valid values:
      - \`Z_NO_COMPRESSION\`
      - \`Z_BEST_SPEED\`
      - \`Z_BEST_COMPRESSION\`
      - \`Z_DEFAULT_COMPRESSION\`
    
    **Return Value:**  
    ID of the compressed container, or \`-1\` if an error occurs.
        `
    },
    {
        name: 'zlib_unpack',
        detail: 'Decompress a container using Zlib.',
        documentation: `
    **Parameters:**  
    - \`source\`: Container to decompress.
    
    **Return Value:**  
    ID of the decompressed container, or \`-1\` if an error occurs.
        `
    } 
];

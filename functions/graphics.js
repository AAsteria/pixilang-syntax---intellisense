module.exports = [
    {
        name: 'frame',
        detail: 'Draw the current screen on the display and sleep for a specified number of milliseconds.',
        documentation: `
**Description:**  
Draws the current screen and optionally pauses execution.

**Parameters:**  
- \`delay\`: Pause length in milliseconds.  
- \`x, y, xsize, ysize\`: Region of the screen (optional).

**Return Value:**  
- \`0\`: Successful.  
- \`-1\`: No screen.  
- \`-2\`: Timeout (graphics engine suspended?).
        `
    },
    {
        name: 'vsync',
        detail: 'Enable or disable vertical synchronization.',
        documentation: `
**Description:**  
Enables or disables vertical synchronization (if possible).

**Parameters:**  
- \`enable\`: Set to \`1\` to enable, \`0\` to disable.
        `
    },
    {
        name: 'set_pixel_size',
        detail: 'Change the size of the screen pixels.',
        documentation: `
**Description:**  
Changes the size of the screen pixels.

**Parameters:**  
- \`size\`: New pixel size (default = 1).
        `
    },
    {
        name: 'get_pixel_size',
        detail: 'Get the size of the screen pixels.',
        documentation: `
**Return Value:**  
The current size of the screen pixels.
        `
    },
    {
        name: 'set_screen',
        detail: 'Set the current screen as the destination for all graphic commands.',
        documentation: `
**Description:**  
Sets the current screen (a container with an image) as the destination for all graphic commands.

**Parameters:**  
- \`pixi\`: ID of the container to use as the current screen.
        `
    },
    {
        name: 'get_screen',
        detail: 'Get the current screen container.',
        documentation: `
**Return Value:**  
The ID of the current screen container.
        `
    },
    {
        name: 'set_zbuf',
        detail: 'Set a container with Z-buffer.',
        documentation: `
**Description:**  
Sets a container (with \`INT32\` elements) as the Z-buffer.

**Parameters:**  
- \`zbuf_container\`: ID of the Z-buffer container.
        `
    },
    {
        name: 'get_zbuf',
        detail: 'Get the current Z-buffer container.',
        documentation: `
**Return Value:**  
The ID of the current Z-buffer container.
        `
    },
    {
        name: 'clear_zbuf',
        detail: 'Clear the current Z-buffer.',
        documentation: `
**Description:**  
Clears the contents of the current Z-buffer.
        `
    },
    {
        name: 'get_color',
        detail: 'Get a color value by red, green, and blue components.',
        documentation: `
**Description:**  
Creates a color value from the specified red, green, and blue intensities.

**Parameters:**  
- \`red\`: Red intensity (\`0..255\`).  
- \`green\`: Green intensity (\`0..255\`).  
- \`blue\`: Blue intensity (\`0..255\`).

**Return Value:**  
The resulting color value.
        `
    },
    {
        name: 'get_red',
        detail: 'Get the red component intensity of a color.',
        documentation: `
**Description:**  
Gets the red component intensity from a given color.

**Parameters:**  
- \`color\`: Color value.

**Return Value:**  
Red intensity (\`0..255\`).
        `
    },
    {
        name: 'get_green',
        detail: 'Get the green component intensity of a color.',
        documentation: `
**Description:**  
Gets the green component intensity from a given color.

**Parameters:**  
- \`color\`: Color value.

**Return Value:**  
Green intensity (\`0..255\`).
        `
    },
    {
        name: 'get_blue',
        detail: 'Get the blue component intensity of a color.',
        documentation: `
**Description:**  
Gets the blue component intensity from a given color.

**Parameters:**  
- \`color\`: Color value.

**Return Value:**  
Blue intensity (\`0..255\`).
        `
    },
    {
        name: 'transp',
        detail: 'Set transparency level.',
        documentation: `
**Description:**  
Sets the transparency level for subsequent graphics operations.

**Parameters:**  
- \`t\`: Transparency level (\`0..255\`).
        `
    },
    {
        name: 'dot',
        detail: 'Draw a dot on the screen.',
        documentation: `
**Description:**  
Draws a dot at the specified position with the specified color.

**Parameters:**  
- \`x, y\`: Coordinates of the dot.  
- \`color\`: Color of the dot.
        `
    },
    {
        name: 'line',
        detail: 'Draw a line between two points.',
        documentation: `
**Description:**  
Draws a line from one point to another.

**Parameters:**  
- \`x1, y1\`: Starting point.  
- \`x2, y2\`: Ending point.  
- \`color\`: Color of the line.
        `
    },
    {
        name: 'box',
        detail: 'Draw a rectangle.',
        documentation: `
**Description:**  
Draws a rectangle on the screen.

**Parameters:**  
- \`x, y\`: Top-left corner of the rectangle.  
- \`xsize, ysize\`: Dimensions of the rectangle.  
- \`color\`: Color of the rectangle.
        `
    },
    {
        name: 'fbox',
        detail: 'Draw a filled rectangle.',
        documentation: `
**Description:**  
Draws a filled rectangle on the screen.

**Parameters:**  
- \`x, y\`: Top-left corner of the rectangle.  
- \`xsize, ysize\`: Dimensions of the rectangle.  
- \`color\`: Color of the rectangle.
        `
    },
    {
        name: 'pixi',
        detail: 'Display a container with an image.',
        documentation: `
**Description:**  
Displays a container with an image at the specified position and scale.

**Parameters:**  
- \`pixi_cont\`: Container ID.  
- \`x, y\`: Position of the image.  
- \`color\`: Filter color (default: \`WHITE\`).  
- \`xscale, yscale\`: Scaling factors (default: \`1\`).  
- \`src_x, src_y, src_xsize, src_ysize\`: Source region (default: entire container).

**Examples:**  
\`\`\`pixi
pixi(image)                     // Display the image
pixi(image, 10, 20)             // Display at (10, 20)
pixi(image, 30, 40, GREEN)      // Add a green filter
pixi(image, 90, 20, GREEN, 0.5) // Scale to 50% size
\`\`\`
        `
    },
    {
        name: 'triangles3d',
        detail: 'Draw an array of 3D triangles.',
        documentation: `
    **Description:**  
    Draws an array of triangles in 3D space.
    
    **Parameters:**  
    - \`vertices\`: Container of vertices.  
    - \`triangles\`: Container of triangles.  
    - \`tnum\`: Number of triangles (optional).
    
    **Vertex Data Format:**  
    - \`X, Y, Z, TextureX, TextureY, Unused, Unused, Unused\`.
    
    **Triangle Data Format:**  
    - \`Vertex1, Vertex2, Vertex3, Color, Texture, Opacity, Unused, Order\`.
    
    **Examples:**  
    \`\`\`pixi
    triangles3d(vertices, triangles)
    \`\`\`
        `
    },
    {
        name: 'sort_triangles3d',
        detail: 'Sort triangles by their Z value.',
        documentation: `
    **Description:**  
    Sorts the triangles by their Z value to determine drawing order.
    
    **Parameters:**  
    - \`vertices\`: Container of vertices.  
    - \`triangles\`: Container of triangles.  
    - \`tnum\`: Number of triangles (optional).
            `
    },
    {
        name: 'set_key_color',
        detail: 'Set or reset the transparency color for a container.',
        documentation: `
    **Description:**  
    Sets or resets the transparency color for the specified container.
    
    **Parameters:**  
    - \`pixi\`: Container ID.  
    - \`color\`: Transparency color; optional.
            `
    },
    {
        name: 'get_key_color',
        detail: 'Get the transparency color of a container.',
        documentation: `
    **Return Value:**  
    The transparency color of the container.
            `
    },
    {
        name: 'set_alpha',
        detail: 'Attach an alpha channel container to another container.',
        documentation: `
    **Description:**  
    Attaches an alpha channel (of type \`INT8\`) to the specified container.
    
    **Parameters:**  
    - \`pixi\`: Container ID.  
    - \`alpha\`: Alpha channel container; optional to disable alpha channel.
            `
    },
    {
        name: 'get_alpha',
        detail: 'Get the alpha channel container linked to a container.',
        documentation: `
    **Return Value:**  
    The ID of the alpha channel container, or \`-1\` if none is linked.
            `
    },
    {
        name: 'print',
        detail: 'Display text on the screen.',
        documentation: `
    **Description:**  
    Displays text on the screen at the specified position, alignment, and color.
    
    **Parameters:**  
    - \`text\`: Text to display (container).  
    - \`x, y\`: Position of the text.  
    - \`color\`: Text color.  
    - \`align\`: Text alignment (optional).  
    - \`max_xsize\`: Maximum text width (optional).  
    - \`str_offset\`: Offset in the text container (optional).  
    - \`str_size\`: Number of bytes to display (optional).
    
    **Examples:**  
    \`\`\`pixi
    print("Hello Pixi!", 0, 0)                       // Centered white text
    print("line1\\nline2", 50, 50, RED)              // Red text, centered
    print("line1\\nline2", -50, 50, RED, TOP | LEFT) // Red text, top-left aligned
    \`\`\`
            `
    },
    {
        name: 'get_text_xsize',
        detail: 'Get the width of a text string in pixels.',
        documentation: `
    **Description:**  
    Returns the width of the specified text in pixels.
    
    **Parameters:**  
    - \`text\`: Text to measure.  
    - \`align\`: Text alignment (optional).  
    - \`max_xsize\`: Maximum width (optional).  
    - \`str_offset\`: Offset in the text container (optional).  
    - \`str_size\`: Number of bytes to measure (optional).
    
    **Return Value:**  
    Text width in pixels.
            `
    },
    {
        name: 'get_text_ysize',
        detail: 'Get the height of a text string in pixels.',
        documentation: `
    **Description:**  
    Returns the height of the specified text in pixels.
    
    **Parameters:**  
    - \`text\`: Text to measure.  
    - \`align\`: Text alignment (optional).  
    - \`max_xsize\`: Maximum width (optional).  
    - \`str_offset\`: Offset in the text container (optional).  
    - \`str_size\`: Number of bytes to measure (optional).
    
    **Return Value:**  
    Text height in pixels.
            `
    },
    {
        name: 'get_text_xysize',
        detail: 'Get the size of a text string in pixels.',
        documentation: `
    **Description:**  
    Returns the width and height of the specified text in pixels.
    
    **Parameters:**  
    - \`text\`: Text to measure.  
    - \`align\`: Text alignment (optional).  
    - \`max_xsize\`: Maximum width (optional).  
    - \`str_offset\`: Offset in the text container (optional).  
    - \`str_size\`: Number of bytes to measure (optional).
    
    **Return Value:**  
    \`Width\`: \`retval & 0xFFFF\`.  
    \`Height\`: \`(retval >> 16) & 0xFFFF\`.
            `
    },
    {
        name: 'set_font',
        detail: 'Set the font for rendering text.',
        documentation: `
    **Description:**  
    Sets the font using the specified container and parameters.
    
    **Parameters:**  
    - \`first_char_utf32\`: First character's UTF-32 code.  
    - \`font_image\`: Container with the font texture.  
    - \`xchars, ychars\`: Characters horizontally and vertically (optional).  
    - \`last_char\`: Last character's code (optional).  
    - \`char_xsize, char_ysize\`: Character width and height (screen).  
    - \`char_xsize2, char_ysize2\`: Character width and height (texture).  
    - \`grid_xoffset, grid_yoffset\`: Grid offsets (optional).  
    - \`grid_cell_xsize, grid_cell_ysize\`: Grid cell dimensions (optional).
            `
    },
    {
        name: 'get_font',
        detail: 'Get the font container for a specified character.',
        documentation: `
    **Description:**  
    Returns the font container used for the specified character.
    
    **Parameters:**  
    - \`char_utf32\`: UTF-32 code of the character.
    
    **Return Value:**  
    Font container for the specified character.
            `
    },
    {
        name: 'effector',
        detail: 'Apply an effect to a selected screen area.',
        documentation: `
    **Description:**  
    Applies an effect to the specified screen area. This function's coordinates are not affected by transformations.
    
    **Parameters:**  
    - \`type, power, color, x, y, xsize, ysize, x_step, y_step\`: Effect parameters.
            `
    },
    {
        name: 'color_gradient',
        detail: 'Draw a smooth color transition in a rectangle.',
        documentation: `
    **Description:**  
    Draws a smooth gradient between four colors in a rectangle.
    
    **Parameters:**  
    - \`color1, opacity1\`: Top-left color and opacity.  
    - \`color2, opacity2\`: Top-right color and opacity.  
    - \`color3, opacity3\`: Bottom-left color and opacity.  
    - \`color4, opacity4\`: Bottom-right color and opacity.  
    - \`x, y, xsize, ysize\`: Rectangle dimensions (optional).  
    - \`x_step, y_step\`: Horizontal and vertical steps (optional).
            `
    },
    {
        name: 'split_rgb',
        detail: 'Split a container into RGB channels or combine RGB channels into a container.',
        documentation: `
    **Description:**  
    Splits a container with pixels into red, green, and blue channels, or combines RGB channels into a single container.
    
    **Parameters:**  
    - \`direction\`:  
      - \`0\`: Split from image to RGB.  
      - \`1\`: Combine RGB into an image.  
    - \`image\`: Source/destination container of type \`PIXEL\`.  
    - \`red_channel\`: Container for the red components; optional (\`-1\` to ignore).  
    - \`green_channel\`: Container for the green components; optional (\`-1\` to ignore).  
    - \`blue_channel\`: Container for the blue components; optional (\`-1\` to ignore).  
    - \`image_offset\`: Offset in the image container; optional.  
    - \`channel_offset\`: Offset in the channel containers; optional.  
    - \`size\`: Number of pixels to process; optional.
    
    **Examples:**  
    \`\`\`pixi
    img = load("some_image.jpg")
    xsize = get_xsize(img)
    ysize = get_ysize(img)
    r = new(xsize, ysize, INT16)
    g = new(xsize, ysize, INT16)
    b = new(xsize, ysize, INT16)
    split_rgb(0, img, r, g, b) // Split image into RGB channels
    value = r[0]               // Get red value of the first pixel (0-255)
    \`\`\`
        `
    },
    {
        name: 'split_ycbcr',
        detail: 'Split a container into YCbCr channels or combine YCbCr channels into a container.',
        documentation: `
    **Description:**  
    Splits a container with pixels into Y (luminance), Cb (blue chroma), and Cr (red chroma) channels, or combines YCbCr channels into a single container.
    
    **Parameters:**  
    - \`direction\`:  
      - \`0\`: Split from image to YCbCr.  
      - \`1\`: Combine YCbCr into an image.  
    - \`image\`: Source/destination container of type \`PIXEL\`.  
    - \`y_channel\`: Container for the Y (luminance) components; optional (\`-1\` to ignore).  
    - \`cb_channel\`: Container for the Cb (blue chroma) components; optional (\`-1\` to ignore).  
    - \`cr_channel\`: Container for the Cr (red chroma) components; optional (\`-1\` to ignore).  
    - \`image_offset\`: Offset in the image container; optional.  
    - \`channel_offset\`: Offset in the channel containers; optional.  
    - \`size\`: Number of pixels to process; optional.
    
    **Examples:**  
    \`\`\`pixi
    img = load("some_image.jpg")
    xsize = get_xsize(img)
    ysize = get_ysize(img)
    y = new(xsize, ysize, INT16)
    cb = new(xsize, ysize, INT16)
    cr = new(xsize, ysize, INT16)
    split_ycbcr(0, img, y, cb, cr) // Split image into YCbCr channels
    value = y[0]                  // Get Y (luminance) value of the first pixel
    \`\`\`
        `
    }     
];

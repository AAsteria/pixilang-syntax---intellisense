module.exports = [
    {
        name: 'set_gl_callback',
        detail: 'Set the OpenGL frame drawing callback function.',
        documentation: `
**Description:**  
Sets the OpenGL callback function for frame drawing.

**Parameters:**  
- \`gl_callback\`: Callback function with parameter \`$user_data\`. Almost all graphics functions are redirected to OpenGL within this callback.  
- \`user_data\`: User-defined data passed to the callback.

**Examples:**  
\`\`\`pixi
fn gl_callback($user_data) {
    set_screen(GL_SCREEN) // Enable OpenGL drawing mode
    clear(YELLOW)
    set_screen(0)         // Return to the default screen
}

set_gl_callback(
    gl_callback, // OpenGL frame drawing function
    0            // User-defined data
)

while(1) {
    while(get_event()) {
        if EVT[EVT_TYPE] == EVT_QUIT { break2 }
    }
    frame()
}

set_gl_callback(-1) // Remove OpenGL callback
\`\`\`
        `
    },
    {
        name: 'remove_gl_data',
        detail: 'Remove all GL-specific data from a container.',
        documentation: `
**Description:**  
Removes all OpenGL-specific data from a container. This data is recreated during the next OpenGL callback.

**Parameters:**  
- \`container\`: The container to clean up.
        `
    },
    {
        name: 'update_gl_data',
        detail: 'Request an update for the OpenGL texture of a container.',
        documentation: `
**Description:**  
Requests an update to the OpenGL texture associated with a container. Use this function if the contents of the container have changed, but its size remains the same.

**Parameters:**  
- \`container\`: The container to update.
        `
    },
    {
        name: 'gl_draw_arrays',
        detail: 'Render primitives using OpenGL ES arrays.',
        documentation: `
**Description:**  
A hybrid function for OpenGL rendering operations.

**Parameters:**  
- \`mode\`: Rendering mode:
  - \`GL_POINTS\`, \`GL_LINE_STRIP\`, \`GL_LINE_LOOP\`, \`GL_LINES\`,  
    \`GL_TRIANGLE_STRIP\`, \`GL_TRIANGLE_FAN\`, \`GL_TRIANGLES\`.  
- \`first\`: Starting vertex in the arrays.  
- \`count\`: Number of vertices to render.  
- \`color_r, color_g, color_b, color_a\`: RGBA color (\`0..255\` per channel). Ignored if \`color_array\` is used.  
- \`texture\`: Container with texture, or \`-1\`.  
- \`vertex_array\`: INT8, INT16, or FLOAT32 container with vertices (width = components per vertex, height = vertices).  
- \`color_array\`: INT8 or FLOAT32 container with colors, or \`-1\`; optional.  
- \`texcoord_array\`: INT8, INT16, or FLOAT32 container with texture coordinates; optional.
        `
    },
    {
        name: 'gl_blend_func',
        detail: 'Set the OpenGL blending function.',
        documentation: `
**Description:**  
Sets the blending function for rendering.

**Parameters:**  
- \`sfactor\`: Specifies how the source blending factors are computed.  
- \`dfactor\`: Specifies how the destination blending factors are computed.  
- \`sfactor_alpha\`: Optional; specifies how the alpha source blending factor is computed.  
- \`dfactor_alpha\`: Optional; specifies how the alpha destination blending factor is computed.

**Usage:**  
Call without parameters to reset blending to default.
        `
    },
    {
        name: 'gl_bind_framebuffer',
        detail: 'Bind a container as an OpenGL framebuffer.',
        documentation: `
**Description:**  
Converts a container to an OpenGL framebuffer and binds it. All rendering operations are redirected to this framebuffer.

**Parameters:**  
- \`cnum\`: Container ID.  
- \`flags\`: Optional flags (\`GL_BFB_*\`).  
- \`x, y, width, height\`: Optional viewport coordinates and size.
        `
    },
    {
        name: 'gl_bind_texture',
        detail: 'Bind a container to a texture image unit.',
        documentation: `
**Description:**  
Binds a container to the specified texture image unit.

**Parameters:**  
- \`cnum\`: Container ID.  
- \`texture_unit\`: Texture image unit number (\`0\` is the default texture used by \`pixi()\`).

**Examples:**  
\`\`\`pixi
fn gl_callback($userdata) {
    set_screen(GL_SCREEN)
    gl_bind_texture(some_image2, 1) // Bind some_image2 to texture unit 1
    gl_bind_texture(some_image3, 2) // Bind some_image3 to texture unit 2
    gl_use_prog(gl_prog)           // Use user-defined GLSL program
    gl_uniform(gl_prog.g_texture2, 1) // Set shader variable
    gl_uniform(gl_prog.g_texture3, 2) // Set shader variable
    pixi(some_image)
    gl_use_prog()                 // Return to the default GLSL program
    set_screen(0)                 // Return to the default screen
}
\`\`\`
        `
    },
    {
        name: 'gl_get_int',
        detail: 'Get the value of a GL integer state variable.',
        documentation: `
**Description:**  
Retrieves the value of an OpenGL integer state variable.

**Parameters:**  
- \`pname\`: Symbolic constant indicating the state variable to retrieve.

**Return Value:**  
The value of the specified state variable.
        `
    },
    {
        name: 'gl_get_float',
        detail: 'Get the value of a GL float state variable.',
        documentation: `
**Description:**  
Retrieves the value of an OpenGL float state variable.

**Parameters:**  
- \`pname\`: Symbolic constant indicating the state variable to retrieve.

**Return Value:**  
The value of the specified state variable.
        `
    }
];

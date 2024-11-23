module.exports = [
    // gl_draw_arrays() modes
    {
        name: "GL_POINTS",
        detail: "OpenGL mode: Points",
        documentation: "Specifies points for the `gl_draw_arrays()` function."
    },
    {
        name: "GL_LINE_STRIP",
        detail: "OpenGL mode: Line Strip",
        documentation: "Specifies a connected group of line segments for the `gl_draw_arrays()` function."
    },
    {
        name: "GL_LINE_LOOP",
        detail: "OpenGL mode: Line Loop",
        documentation: "Specifies a closed loop of connected line segments for the `gl_draw_arrays()` function."
    },
    {
        name: "GL_LINES",
        detail: "OpenGL mode: Lines",
        documentation: "Specifies individual line segments for the `gl_draw_arrays()` function."
    },
    {
        name: "GL_TRIANGLE_STRIP",
        detail: "OpenGL mode: Triangle Strip",
        documentation: "Specifies a connected group of triangles for the `gl_draw_arrays()` function."
    },
    {
        name: "GL_TRIANGLE_FAN",
        detail: "OpenGL mode: Triangle Fan",
        documentation: "Specifies a fan of triangles for the `gl_draw_arrays()` function."
    },
    {
        name: "GL_TRIANGLES",
        detail: "OpenGL mode: Triangles",
        documentation: "Specifies individual triangles for the `gl_draw_arrays()` function."
    },

    // gl_blend_func() operations
    {
        name: "GL_ZERO",
        detail: "OpenGL blend: Zero",
        documentation: "Specifies a blend factor of zero in the `gl_blend_func()` operation."
    },
    {
        name: "GL_ONE",
        detail: "OpenGL blend: One",
        documentation: "Specifies a blend factor of one in the `gl_blend_func()` operation."
    },
    {
        name: "GL_SRC_COLOR",
        detail: "OpenGL blend: Source Color",
        documentation: "Specifies the source color as a blend factor in the `gl_blend_func()` operation."
    },
    {
        name: "GL_ONE_MINUS_SRC_COLOR",
        detail: "OpenGL blend: One Minus Source Color",
        documentation: "Specifies one minus the source color as a blend factor in the `gl_blend_func()` operation."
    },
    {
        name: "GL_DST_COLOR",
        detail: "OpenGL blend: Destination Color",
        documentation: "Specifies the destination color as a blend factor in the `gl_blend_func()` operation."
    },
    {
        name: "GL_ONE_MINUS_DST_COLOR",
        detail: "OpenGL blend: One Minus Destination Color",
        documentation: "Specifies one minus the destination color as a blend factor in the `gl_blend_func()` operation."
    },
    {
        name: "GL_SRC_ALPHA",
        detail: "OpenGL blend: Source Alpha",
        documentation: "Specifies the source alpha as a blend factor in the `gl_blend_func()` operation."
    },
    {
        name: "GL_ONE_MINUS_SRC_ALPHA",
        detail: "OpenGL blend: One Minus Source Alpha",
        documentation: "Specifies one minus the source alpha as a blend factor in the `gl_blend_func()` operation."
    },
    {
        name: "GL_DST_ALPHA",
        detail: "OpenGL blend: Destination Alpha",
        documentation: "Specifies the destination alpha as a blend factor in the `gl_blend_func()` operation."
    },
    {
        name: "GL_ONE_MINUS_DST_ALPHA",
        detail: "OpenGL blend: One Minus Destination Alpha",
        documentation: "Specifies one minus the destination alpha as a blend factor in the `gl_blend_func()` operation."
    },
    {
        name: "GL_SRC_ALPHA_SATURATE",
        detail: "OpenGL blend: Source Alpha Saturate",
        documentation: "Specifies a source alpha saturate blend factor in the `gl_blend_func()` operation."
    },

    // gl_bind_framebuffer() options
    {
        name: "GL_BFB_IDENTITY_MATRIX",
        detail: "OpenGL framebuffer: Identity Matrix",
        documentation: "Specifies the use of the identity matrix for `gl_bind_framebuffer()` in left-handed normalized device coordinates."
    },

    // State variables
    {
        name: "GL_MAX_TEXTURE_SIZE",
        detail: "OpenGL State Variable: Maximum Texture Size",
        documentation: "Specifies the maximum texture size supported by the hardware."
    },
    {
        name: "GL_MAX_VERTEX_ATTRIBS",
        detail: "OpenGL State Variable: Maximum Vertex Attributes",
        documentation: "Specifies the maximum number of vertex attributes supported by the hardware."
    },
    {
        name: "GL_MAX_VERTEX_UNIFORM_VECTORS",
        detail: "OpenGL State Variable: Maximum Vertex Uniform Vectors",
        documentation: "Specifies the maximum number of vertex uniform vectors supported by the hardware."
    },
    {
        name: "GL_MAX_VARYING_VECTORS",
        detail: "OpenGL State Variable: Maximum Varying Vectors",
        documentation: "Specifies the maximum number of varying vectors supported by the hardware."
    },
    {
        name: "GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS",
        detail: "OpenGL State Variable: Maximum Vertex Texture Image Units",
        documentation: "Specifies the maximum number of vertex texture image units supported by the hardware."
    },
    {
        name: "GL_MAX_TEXTURE_IMAGE_UNITS",
        detail: "OpenGL State Variable: Maximum Texture Image Units",
        documentation: "Specifies the maximum number of texture image units supported by the hardware."
    },
    {
        name: "GL_MAX_FRAGMENT_UNIFORM_VECTORS",
        detail: "OpenGL State Variable: Maximum Fragment Uniform Vectors",
        documentation: "Specifies the maximum number of fragment uniform vectors supported by the hardware."
    },

    // Default shader names
    {
        name: "GL_SHADER_SOLID",
        detail: "Default Shader: Solid Color",
        documentation: "Specifies a shader for solid color rendering."
    },
    {
        name: "GL_SHADER_GRAD",
        detail: "Default Shader: Gradient Color",
        documentation: "Specifies a shader for gradient color rendering."
    },
    {
        name: "GL_SHADER_TEX_ALPHA_SOLID",
        detail: "Default Shader: Texture Alpha + Solid Color",
        documentation: "Specifies a shader for solid color rendering with one channel (opacity) texture."
    },
    {
        name: "GL_SHADER_TEX_ALPHA_GRAD",
        detail: "Default Shader: Texture Alpha + Gradient Color",
        documentation: "Specifies a shader for gradient color rendering with one channel (opacity) texture."
    },
    {
        name: "GL_SHADER_TEX_RGB_SOLID",
        detail: "Default Shader: Texture RGB + Solid Color",
        documentation: "Specifies a shader for solid color rendering with RGB texture."
    },
    {
        name: "GL_SHADER_TEX_RGB_GRAD",
        detail: "Default Shader: Texture RGB + Gradient Color",
        documentation: "Specifies a shader for gradient color rendering with RGB texture."
    },

    // Global OpenGL containers
    {
        name: "GL_SCREEN",
        detail: "Global OpenGL Container: Screen",
        documentation: "Specifies the default OpenGL screen container. Pixels cannot be read directly but can be copied using the `copy()` function."
    },
    {
        name: "GL_ZBUF",
        detail: "Global OpenGL Container: Z-Buffer",
        documentation: "Specifies the default Z-buffer container for depth operations."
    }
];

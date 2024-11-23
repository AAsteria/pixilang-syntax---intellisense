module.exports = [
    {
        name: 'gl_new_prog',
        detail: 'Create a new GLSL program with a vertex shader and fragment shader.',
        documentation: `
**Description:**  
Creates a new GLSL program container using the specified vertex and fragment shaders.  
The shaders will be compiled, and the program will be linked during the \`gl_use_prog()\` function call.

**Parameters:**  
- \`vertex_shader\`: Container with the source code of the vertex shader, or one of the \`GL_SHADER_*\` constants (predefined shaders).  
- \`fragment_shader\`: Container with the source code of the fragment shader, or one of the \`GL_SHADER_*\` constants (predefined shaders).

**Return Value:**  
The new GLSL program container, or a negative value in case of an error. The container must be removed manually.

**Examples:**  
\`\`\`pixi
gl_prog = gl_new_prog(GL_SHADER_TEX_RGB_SOLID, custom_fragment_shader)
\`\`\`
        `
    },
    {
        name: 'gl_use_prog',
        detail: 'Use a GLSL program in the OpenGL drawing callback.',
        documentation: `
**Description:**  
Activates the specified GLSL program.  
If the program is being used for the first time, it will be compiled and linked automatically.

**Parameters:**  
- \`prog\`: The GLSL program container created by \`gl_new_prog()\`.

**Examples:**  
\`\`\`pixi
gl_use_prog(gl_prog) // Use GLSL program gl_prog
\`\`\`
        `
    },
    {
        name: 'gl_uniform',
        detail: 'Change the value of a uniform variable in a GLSL program.',
        documentation: `
**Description:**  
Modifies the value of a uniform variable within the active GLSL program.  
Can also modify array contents when called with additional parameters.

**Parameters:**  
- \`var_location\`: Location of the uniform variable, retrievable from the GLSL program container (\`PROGRAM.UNIFORM_NAME\`).  
- \`v0, v1, v2, v3\`: New values for the uniform variable.  
  - \`v1, v2, v3\` are optional.  
  - The number of values depends on the data type of the uniform variable.

**Array Usage:**  
Use the following signature to update arrays:  
\`gl_uniform(var_location, src_container, vector_size, first_vector, count)\`.

**Examples:**  
\`\`\`pixi
gl_use_prog(gl_prog) // Use GLSL program
gl_uniform(gl_prog.g_time, get_timer(0)) // Update uniform variable g_time
\`\`\`
        `
    },
    {
        name: 'gl_uniform_matrix',
        detail: 'Change the value of a uniform matrix in a GLSL program.',
        documentation: `
**Description:**  
Updates the value of a uniform matrix within the active GLSL program.

**Parameters:**  
- \`size\`: Dimensionality of the matrix (\`2\` for 2x2, \`3\` for 3x3, \`4\` for 4x4).  
- \`matrix_location\`: Location of the matrix, retrievable from the GLSL program container (\`PROGRAM.MATRIX_NAME\`).  
- \`transpose\`: Whether to transpose the matrix (\`0\` = no, \`1\` = yes).  
- \`matrix\`: ID of the container with the matrix.

**Examples:**  
\`\`\`pixi
gl_use_prog(gl_prog) // Use GLSL program
gl_uniform_matrix(4, gl_prog.g_mat, 0, source_matrix) // Update uniform matrix g_mat
\`\`\`
        `
    }
];

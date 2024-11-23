module.exports = [
    {
        name: 't_reset',
        detail: 'Reset the transformation matrix to the identity matrix.',
        documentation: `
**Description:**  
Resets the current transformation matrix to the identity matrix, removing all previous transformations.

**Examples:**  
\`\`\`pixi
t_reset() // Reset transformation to default
\`\`\`
        `
    },
    {
        name: 't_rotate',
        detail: 'Apply a rotation transformation to the coordinate system.',
        documentation: `
**Description:**  
Applies a rotation transformation around the specified vector.

**Parameters:**  
- \`angle\`: The angle of rotation, in degrees.  
- \`x, y, z\`: The x, y, and z coordinates of the vector to rotate around.

**Examples:**  
\`\`\`pixi
t_rotate(45, 0, 0, 1) // Rotate 45 degrees around the z-axis
\`\`\`
        `
    },
    {
        name: 't_translate',
        detail: 'Apply a translation transformation to the coordinate system.',
        documentation: `
**Description:**  
Moves the coordinate system by the specified amounts along the x, y, and z axes.

**Parameters:**  
- \`x, y, z\`: The translation values along the x, y, and z axes.

**Examples:**  
\`\`\`pixi
t_translate(32, 0, 0) // Move 32 pixels horizontally
\`\`\`
        `
    },
    {
        name: 't_scale',
        detail: 'Apply a scaling transformation to the coordinate system.',
        documentation: `
**Description:**  
Scales the coordinate system by the specified factors along the x, y, and z axes.

**Parameters:**  
- \`x, y, z\`: The scaling factors along the x, y, and z axes.

**Examples:**  
\`\`\`pixi
t_scale(2, 2, 2) // Double the size of the coordinate system
\`\`\`
        `
    },
    {
        name: 't_push_matrix',
        detail: 'Save the current transformation matrix to the stack.',
        documentation: `
**Description:**  
Saves the current transformation matrix to a stack, allowing it to be restored later with \`t_pop_matrix\`.

**Examples:**  
\`\`\`pixi
t_push_matrix() // Save the current transformation matrix
\`\`\`
        `
    },
    {
        name: 't_pop_matrix',
        detail: 'Restore the transformation matrix from the stack.',
        documentation: `
**Description:**  
Restores the last transformation matrix saved with \`t_push_matrix\`.

**Examples:**  
\`\`\`pixi
t_pop_matrix() // Restore the saved transformation matrix
\`\`\`
        `
    },
    {
        name: 't_get_matrix',
        detail: 'Retrieve the current transformation matrix.',
        documentation: `
**Description:**  
Gets the current transformation matrix (4x4 FLOAT) and stores it in the specified container.

**Parameters:**  
- \`matrix_container\`: The container to store the transformation matrix.

**Examples:**  
\`\`\`pixi
matrix = new(4, 4, FLOAT)
t_get_matrix(matrix) // Save the current matrix to the container
\`\`\`
        `
    },
    {
        name: 't_set_matrix',
        detail: 'Set the transformation matrix.',
        documentation: `
**Description:**  
Sets the transformation matrix to the specified 4x4 FLOAT matrix.

**Parameters:**  
- \`matrix_container\`: The container holding the new transformation matrix.

**Examples:**  
\`\`\`pixi
t_set_matrix(matrix) // Apply a new transformation matrix
\`\`\`
        `
    },
    {
        name: 't_mul_matrix',
        detail: 'Multiply the current transformation matrix by another matrix.',
        documentation: `
**Description:**  
Multiplies the current transformation matrix by the specified matrix.

**Parameters:**  
- \`matrix_container\`: The container holding the matrix to multiply by.

**Examples:**  
\`\`\`pixi
t_mul_matrix(matrix) // Multiply the current matrix by another matrix
\`\`\`
        `
    },
    {
        name: 't_point',
        detail: 'Transform a point using the current transformation matrix.',
        documentation: `
**Description:**  
Transforms a point by applying the current transformation matrix.

**Parameters:**  
- \`point_coordinates\`: A container with 3 elements of type FLOAT representing the point's coordinates.

**Examples:**  
\`\`\`pixi
point = new(3, 1, FLOAT)
point[0] = 1 // x-coordinate
point[1] = 2 // y-coordinate
point[2] = 3 // z-coordinate
t_point(point) // Transform the point
\`\`\`
        `
    }
];

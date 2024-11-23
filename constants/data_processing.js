module.exports = [
    // For op_cn() function
    {
        name: "OP_MIN",
        detail: "Data Processing: Minimum",
        documentation: "Returns the minimum value among the container elements: min(C1[i], C1[i+1], ...)."
    },
    {
        name: "OP_MAX",
        detail: "Data Processing: Maximum",
        documentation: "Returns the maximum value among the container elements: max(C1[i], C1[i+1], ...)."
    },
    {
        name: "OP_MAXABS",
        detail: "Data Processing: Max Absolute Value",
        documentation: "Returns the maximum absolute value of the container elements: max(|C1[i] + N|, ...)."
    },
    {
        name: "OP_SUM",
        detail: "Data Processing: Sum",
        documentation: "Returns the sum of the container elements: C1[i] + C1[i+1] + ...."
    },
    {
        name: "OP_LIMIT_TOP",
        detail: "Data Processing: Limit Top",
        documentation: "If C1[i] > N, sets C1[i] = N."
    },
    {
        name: "OP_LIMIT_BOTTOM",
        detail: "Data Processing: Limit Bottom",
        documentation: "If C1[i] < N, sets C1[i] = N."
    },
    {
        name: "OP_ABS",
        detail: "Data Processing: Absolute Value",
        documentation: "Converts container elements to their absolute values."
    },
    {
        name: "OP_SUB2",
        detail: "Data Processing: Subtraction Reverse",
        documentation: "Subtracts each element from N: N - C1[i]."
    },
    {
        name: "OP_COLOR_SUB2",
        detail: "Data Processing: Color Subtraction Reverse",
        documentation: "Performs color subtraction with reversed operands: N - C1[i]."
    },
    {
        name: "OP_DIV2",
        detail: "Data Processing: Division Reverse",
        documentation: "Divides N by each element: N / C1[i]."
    },
    {
        name: "OP_H_INTEGRAL",
        detail: "Data Processing: Horizontal Integral",
        documentation: "Calculates the running sum horizontally."
    },
    {
        name: "OP_V_INTEGRAL",
        detail: "Data Processing: Vertical Integral",
        documentation: "Calculates the running sum vertically."
    },
    {
        name: "OP_H_DERIVATIVE",
        detail: "Data Processing: Horizontal Derivative",
        documentation: "Calculates the first difference horizontally."
    },
    {
        name: "OP_V_DERIVATIVE",
        detail: "Data Processing: Vertical Derivative",
        documentation: "Calculates the first difference vertically."
    },
    {
        name: "OP_H_FLIP",
        detail: "Data Processing: Horizontal Flip",
        documentation: "Flips the container horizontally."
    },
    {
        name: "OP_V_FLIP",
        detail: "Data Processing: Vertical Flip",
        documentation: "Flips the container vertically."
    },

    // For op_cn(), op_cc() function
    {
        name: "OP_ADD",
        detail: "Data Processing: Addition",
        documentation: "Adds corresponding elements or a value to container elements."
    },
    {
        name: "OP_SADD",
        detail: "Data Processing: Saturation Addition",
        documentation: "Adds elements with saturation to avoid overflow."
    },
    {
        name: "OP_COLOR_ADD",
        detail: "Data Processing: Color Addition",
        documentation: "Adds color values of container elements."
    },
    {
        name: "OP_SUB",
        detail: "Data Processing: Subtraction",
        documentation: "Subtracts corresponding elements or a value from container elements."
    },
    {
        name: "OP_SSUB",
        detail: "Data Processing: Saturation Subtraction",
        documentation: "Subtracts elements with saturation to avoid overflow."
    },
    {
        name: "OP_COLOR_SUB",
        detail: "Data Processing: Color Subtraction",
        documentation: "Subtracts color values of container elements."
    },
    {
        name: "OP_MUL",
        detail: "Data Processing: Multiplication",
        documentation: "Multiplies corresponding elements or a value with container elements."
    },
    {
        name: "OP_SMUL",
        detail: "Data Processing: Saturation Multiplication",
        documentation: "Multiplies elements with saturation to avoid overflow."
    },
    {
        name: "OP_MUL_RSHIFT15",
        detail: "Data Processing: Multiplication with Right Shift",
        documentation: "Multiplies elements and right shifts the result by 15."
    },
    {
        name: "OP_COLOR_MUL",
        detail: "Data Processing: Color Multiplication",
        documentation: "Multiplies color values of container elements."
    },
    {
        name: "OP_DIV",
        detail: "Data Processing: Division",
        documentation: "Divides corresponding elements or a value by container elements."
    },
    {
        name: "OP_COLOR_DIV",
        detail: "Data Processing: Color Division",
        documentation: "Divides color values of container elements."
    },
    {
        name: "OP_AND",
        detail: "Data Processing: Bitwise AND",
        documentation: "Performs a bitwise AND operation on container elements."
    },
    {
        name: "OP_OR",
        detail: "Data Processing: Bitwise OR",
        documentation: "Performs a bitwise OR operation on container elements."
    },
    {
        name: "OP_XOR",
        detail: "Data Processing: Bitwise XOR",
        documentation: "Performs a bitwise XOR operation on container elements."
    },
    {
        name: "OP_LSHIFT",
        detail: "Data Processing: Bitwise Left Shift",
        documentation: "Shifts container elements to the left by a specified number of bits."
    },
    {
        name: "OP_RSHIFT",
        detail: "Data Processing: Bitwise Right Shift",
        documentation: "Shifts container elements to the right by a specified number of bits."
    },
    {
        name: "OP_EQUAL",
        detail: "Data Processing: Equality Check",
        documentation: "Checks if container elements are equal."
    },
    {
        name: "OP_LESS",
        detail: "Data Processing: Less Than",
        documentation: "Checks if C1[i] < C2[i]."
    },
    {
        name: "OP_GREATER",
        detail: "Data Processing: Greater Than",
        documentation: "Checks if container elements are greater than a specified value."
    },
    {
        name: "OP_COPY",
        detail: "Data Processing: Copy",
        documentation: "Copies values from one container to another."
    },
    {
        name: "OP_COPY_LESS",
        detail: "Data Processing: Copy if Less",
        documentation: "Copies values only if C1[i] < C2[i]."
    },
    {
        name: "OP_COPY_GREATER",
        detail: "Data Processing: Copy if Greater",
        documentation: "Copies values only if C1[i] > C2[i]."
    },

    // For op_cc() function
    {
        name: "OP_BMUL",
        detail: "Data Processing: Conditional Zero Multiplication",
        documentation: "If C2[i] == 0, sets C1[i] = 0."
    },
    {
        name: "OP_EXCHANGE",
        detail: "Data Processing: Exchange",
        documentation: "Exchanges values between two containers."
    },
    {
        name: "OP_COMPARE",
        detail: "Data Processing: Compare",
        documentation: "Compares containers and returns 0, 1, or -1 based on the comparison."
    },

    // For op_ccn() function
    {
        name: "OP_MUL_DIV",
        detail: "Data Processing: Multiply and Divide",
        documentation: "Calculates - C1[i] * C2[i] / N."
    },
    {
        name: "OP_MUL_RSHIFT",
        detail: "Data Processing: Multiply and Right Shift",
        documentation: "Multiplies elements of two containers and right shifts the result."
    },

    // For generator() function
    {
        name: "OP_SIN",
        detail: "Data Processing: Sine Wave",
        documentation: "Generates a sine wave."
    },
    {
        name: "OP_SIN8",
        detail: "Data Processing: Fast Sine Wave",
        documentation: "Generates a fast but less precise sine wave using an 8-bit table."
    },
    {
        name: "OP_RAND",
        detail: "Data Processing: Random Value",
        documentation: "Generates a pseudo-random value within the specified range."
    }
];

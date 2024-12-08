module.exports = [
    {
        name: "sv_load",
        detail: "Project File: Load from File",
        documentation: `Loads a SunVox project from a file.

**Prototypes:**
- C: \`int sv_load(int slot, const char* filename);\`
- Java: \`int load(int slot, String filename);\`
- JS: \`sv_load(slot, filename);\`
- Pixilang: \`sv_load(sv, filename);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.
- \`filename\`: Name of the project file.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_load_from_memory",
        detail: "Project File: Load from Memory",
        documentation: `Loads a SunVox project from a memory block.

**Prototypes:**
- C: \`int sv_load_from_memory(int slot, void* data, uint32_t data_size);\`
- Java: \`int load_from_memory(int slot, byte[] data);\`
- JS: \`sv_load_from_memory(slot, data);\`
- Pixilang: \`sv_fload(sv, f);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.
- \`data\`: Byte array containing the project.
- \`data_size\`: Number of bytes to read.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_save",
        detail: "Project File: Save to File",
        documentation: `Saves the current SunVox project to a file.

**Prototypes:**
- C: \`int sv_save(int slot, const char* filename);\`
- Java: \`int save(int slot, String filename);\`
- JS: \`sv_save(slot, filename);\`
- Pixilang: \`sv_save(sv, filename);\`

**Parameters:**
- \`slot / sv\`: Slot number or SunVox object ID.
- \`filename\`: Name of the file to save the project to.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_save_to_memory",
        detail: "Project File: Save to Memory",
        documentation: `Saves the current SunVox project to a memory block.

**Prototypes:**
- C: \`void* sv_save_to_memory(int slot, size_t* size);\`
- Java: \`byte[] save_to_memory(int slot);\`
- JS: \`sv_save_to_memory(slot);\`

**Parameters:**
- \`slot\`: Slot number.
- \`size\`: Pointer to a variable where the size of the data will be stored.

**Return Value:** Memory block with the SunVox project or null in case of error.`
    },
    {
        name: "sv_fsave",
        detail: "Project File: Save to Stream",
        documentation: `Saves the current SunVox project to a stream (Pixilang only).

**Prototype:** \`sv_fsave(sv, f);\`

**Parameters:**
- \`sv\`: SunVox object ID.
- \`f\`: File stream.

**Return Value:** 0 (success) or negative error code.`
    },
    {
        name: "sv_fload",
        detail: "Project File: Load from Stream",
        documentation: `Loads a SunVox project from a stream (Pixilang only).

**Prototype:** \`sv_fload(sv, f);\`

**Parameters:**
- \`sv\`: SunVox object ID.
- \`f\`: File stream.

**Return Value:** 0 (success) or negative error code.`
    }
];

module.exports = [
    {
        name: 'sv_new_module',
        detail: 'Create a new module.',
        documentation: `
**Description:**  
Creates a new module in SunVox.

**Prototypes:**  
- **C:** \`int sv_new_module( int slot, const char* type, const char* name, int x, int y, int z );\`
- **Java:** \`int new_module( int slot, String type, String name, int x, int y, int z );\`
- **JS:** \`sv_new_module( slot, type, name, x, y, z );\`
- **Pixilang:** \`sv_new_module( sv, type, name, x, y, z );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`type\`: String with module type, e.g., "Sampler".
- \`name\`: Module name.
- \`x, y\`: Module coordinates. Center: 512,512; Working area: 0,0 ... 1024,1024.
- \`z\`: Layer number (0 to 7).

**Return Value:**  
The number of the newly created module, or a negative error code.

**Examples:**  
\`\`\`pixi
id = sv_new_module( sv, "Sampler", "MySampler", 512, 512, 0 );
if id < 0 {
    // Handle error
}
\`\`\`
        `
    },
    {
        name: 'sv_remove_module',
        detail: 'Remove the specified module.',
        documentation: `
**Description:**  
Removes a module from SunVox.

**Prototypes:**  
- **C:** \`int sv_remove_module( int slot, int mod_num );\`
- **Java:** \`int remove_module( int slot, int mod_num );\`
- **JS:** \`sv_remove_module( slot, mod_num );\`
- **Pixilang:** \`sv_remove_module( sv, mod_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number to remove.

**Return Value:**  
0 (success) or a negative error code.

**Examples:**  
\`\`\`pixi
result = sv_remove_module( sv, 3 );
if result != 0 {
    // Handle error
}
\`\`\`
        `
    },
    {
        name: 'sv_connect_module',
        detail: 'Connect two specified modules.',
        documentation: `
**Description:**  
Connects two modules in SunVox: source --> destination.

**Prototypes:**  
- **C:** \`int sv_connect_module( int slot, int source, int destination );\`
- **Java:** \`int connect_module( int slot, int source, int destination );\`
- **JS:** \`sv_connect_module( slot, source, destination );\`
- **Pixilang:** \`sv_connect_module( sv, source, destination );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`source\`: Source module number.
- \`destination\`: Destination module number.

**Return Value:**  
0 (success) or a negative error code.

**Examples:**  
\`\`\`pixi
result = sv_connect_module( sv, 2, 5 );
if result != 0 {
    // Handle error
}
\`\`\`
        `
    },
    {
        name: 'sv_disconnect_module',
        detail: 'Disconnect two specified modules.',
        documentation: `
**Description:**  
Disconnects two modules in SunVox.

**Prototypes:**  
- **C:** \`int sv_disconnect_module( int slot, int source, int destination );\`
- **Java:** \`int disconnect_module( int slot, int source, int destination );\`
- **JS:** \`sv_disconnect_module( slot, source, destination );\`
- **Pixilang:** \`sv_disconnect_module( sv, source, destination );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`source\`: Source module number.
- \`destination\`: Destination module number.

**Return Value:**  
0 (success) or a negative error code.

**Examples:**  
\`\`\`pixi
result = sv_disconnect_module( sv, 2, 5 );
if result != 0 {
    // Handle error
}
\`\`\`
        `
    },
    {
        name: 'sv_load_module',
        detail: 'Load a module from file.',
        documentation: `
**Description:**  
Loads a module or sample from a file.

**Prototypes:**  
- **C:** \`int sv_load_module( int slot, const char* filename, int x, int y, int z );\`
- **Java:** \`int load_module( int slot, String filename, int x, int y, int z );\`
- **JS:** \`sv_load_module( slot, filename, x, y, z );\`
- **Pixilang:** \`sv_load_module( sv, filename, x, y, z );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`filename\`: Path to the file to load.
- \`x, y, z\`: Coordinates and layer of the module.

**Return Value:**  
The number of the newly created module, or a negative error code.

**Examples:**  
\`\`\`pixi
id = sv_load_module( sv, "module.sunsynth", 512, 512, 0 );
if id < 0 {
    // Handle error
}
\`\`\`
        `
    },
    {
        name: 'sv_load_module_from_memory',
        detail: 'Load a module from memory.',
        documentation: `
**Description:**  
Load the module or sample directly from a memory buffer. Supported file formats: sunsynth, xi, wav, aiff, mp3, ogg (vorbis), flac.  
For WAV and AIFF: only uncompressed PCM format is supported.

**Prototypes:**  
- **C:** \`int sv_load_module_from_memory( int slot, void* data, uint32_t data_size, int x, int y, int z );\`
- **Java:** \`int load_module_from_memory( int slot, byte[] data, int x, int y, int z );\`
- **JS:** \`sv_load_module_from_memory( slot, data, x, y, z );\` // load from data (Uint8Array)
- **Pixilang:** Not available (see sv_fload_module for file streams)

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`data\`: Byte array with file contents.
- \`data_size\` (C only): Number of bytes in the array.
- \`x, y, z\`: Coordinates and layer.

**Return Value:**  
The number of the newly created module, or a negative error code.
        `
    },
    {
        name: 'sv_fload_module',
        detail: 'Load a module from a file stream (Pixilang only).',
        documentation: `
**Description:**  
Load the module or sample from a file stream. Supported file formats: sunsynth, xi, wav, aiff, mp3, ogg (vorbis), flac.  
For WAV and AIFF: only uncompressed PCM format is supported.

**Prototypes:**  
- **Pixilang:** \`sv_fload_module( sv, f, x, y, z );\`

**Parameters:**  
- \`sv\`: SunVox object ID.
- \`f\`: File stream.
- \`x, y, z\`: Coordinates and layer.

**Return Value:**  
The number of the newly created module, or a negative error code.
        `
    },
    {
        name: 'sv_sampler_load',
        detail: 'Load a sample (xi, wav, aiff, mp3, ogg (vorbis), flac) into the Sampler module from file.',
        documentation: `
**Description:**  
Loads a sample into the Sampler module from a file.  
For WAV and AIFF: only uncompressed PCM format is supported.  
To replace the whole sampler, set \`sample_slot\` to -1.

**Prototypes:**  
- **C:** \`int sv_sampler_load( int slot, int mod_num, const char* filename, int sample_slot );\`
- **Java:** \`int sampler_load( int slot, int mod_num, String filename, int sample_slot );\`
- **Pixilang:** \`sv_sampler_load( sv, mod_num, filename, sample_slot );\` // sample_slot - optional

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Sampler module number.
- \`filename\`: File name (C and Java only).
- \`sample_slot\`: Sample slot number inside the Sampler, or -1 to replace the whole module.

**Return Value:**  
0 (success) or a negative error code.
        `
    },
    {
        name: 'sv_sampler_load_from_memory',
        detail: 'Load a sample into the Sampler module from a memory buffer.',
        documentation: `
**Description:**  
Loads a sample into the Sampler module from memory.  
For WAV and AIFF: only uncompressed PCM format is supported.  
To replace the whole sampler, set \`sample_slot\` to -1.

**Prototypes:**  
- **C:** \`int sv_sampler_load_from_memory( int slot, int mod_num, void* data, uint32_t data_size, int sample_slot );\`
- **Java:** \`int sampler_load_from_memory( int slot, int mod_num, byte[] data, int sample_slot );\`
- **JS:** \`sv_sampler_load_from_memory( slot, mod_num, data, sample_slot );\` // data: Uint8Array

**Parameters:**  
- \`slot\`: Slot number / SunVox object ID.
- \`mod_num\`: Sampler module number.
- \`data\`: Byte array with file contents.
- \`data_size\` (C only): Number of bytes in the array.
- \`sample_slot\`: Sample slot number, or -1 to replace the whole module.

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_sampler_fload',
        detail: 'Load a sample into the Sampler module from a file stream (Pixilang only).',
        documentation: `
**Description:**  
Loads a sample into the Sampler module from a file stream.  
For WAV and AIFF: only uncompressed PCM format is supported.  
To replace the whole sampler, set \`sample_slot\` to -1.

**Prototypes:**  
- **Pixilang:** \`sv_sampler_fload( sv, mod_num, f, sample_slot );\`

**Parameters:**  
- \`sv\`: SunVox object ID.
- \`mod_num\`: Sampler module number.
- \`f\`: File stream.
- \`sample_slot\`: Sample slot number, or -1 to replace the whole module.

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_sampler_par',
        detail: 'Get or set a parameter of a Sampler sample slot.',
        documentation: `
**Description:**  
Get or set parameters of a loaded sample within the Sampler module.

Parameters (par):  
0 - Loop begin: 0 ... (sample_length - 1)  
1 - Loop length: 0 ... (sample_length - loop_begin)  
2 - Loop type: 0 - none; 1 - fwd; 2 - bidirectional  
3 - Loop release flag: 0 - none; 1 - loop will finish after note release  
4 - Volume: 0 ... 64  
5 - Panning: 0 (left) ... 128 (center) ... 255 (right)  
6 - Finetune: -128 ... 0 ... +127  
7 - Relative note: -128 ... 0 ... +127  
8 - Start position: 0 ... (sample_length - 1)

\`set\`: 0 - get value; 1 - set value.

**Prototypes:**  
- **C:** \`int sv_sampler_par( int slot, int mod_num, int sample_slot, int par, int par_val, int set );\`
- **Java:** \`int sampler_par( int slot, int mod_num, int sample_slot, int par, int par_val, int set );\`
- **JS:** \`sv_sampler_par( slot, mod_num, sample_slot, par, par_val, set );\`
- **Pixilang:** \`sv_sampler_par( sv, mod_num, sample_slot, par, par_val, set );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Sampler module number.
- \`sample_slot\`: Sample slot number, or -1 if affecting the whole module (where applicable).
- \`par\`: Parameter ID as listed above.
- \`par_val\`: Parameter value.
- \`set\`: 0 to get the current value, 1 to set the parameter.

**Return Value:**  
If \`set=0\`: returns the current value of the parameter, or 0 if parameter not found.  
If \`set=1\`: returns the previous value of the parameter, or 0 if parameter not found.
        `
    },
    {
        name: 'sv_metamodule_load',
        detail: 'Load the project (sunvox, mod, xm, midi) into the MetaModule from file.',
        documentation: `
**Description:**  
Loads a project file (sunvox, mod, xm, midi) into the MetaModule.

**Prototypes:**  
- **C:** \`int sv_metamodule_load( int slot, int mod_num, const char* filename );\`
- **Java:** \`int metamodule_load( int slot, int mod_num, String filename );\`
- **Pixilang:** \`sv_metamodule_load( sv, mod_num, filename );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: MetaModule number.
- \`filename\`: File name (C and Java only).

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_metamodule_load_from_memory',
        detail: 'Load the project (sunvox, mod, xm, midi) into the MetaModule from memory.',
        documentation: `
**Description:**  
Loads a project file (sunvox, mod, xm, midi) into the MetaModule from a memory buffer.

**Prototypes:**  
- **C:** \`int sv_metamodule_load_from_memory( int slot, int mod_num, void* data, uint32_t data_size );\`
- **Java:** \`int metamodule_load_from_memory( int slot, int mod_num, byte[] data );\`
- **JS:** \`sv_metamodule_load_from_memory( slot, mod_num, data );\` // data: Uint8Array

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: MetaModule number.
- \`data\`: Byte array with file contents (C, Java, JS).
- \`data_size\` (C only): Number of bytes in the array.

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_metamodule_fload',
        detail: 'Load the project (sunvox, mod, xm, midi) into the MetaModule from a file stream (Pixilang only).',
        documentation: `
**Description:**  
Loads a project file (sunvox, mod, xm, midi) into the MetaModule from a file stream.

**Prototypes:**  
- **Pixilang:** \`sv_metamodule_fload( sv, mod_num, f );\`

**Parameters:**  
- \`sv\`: SunVox object ID.
- \`mod_num\`: MetaModule number.
- \`f\`: File stream.

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_vplayer_load',
        detail: 'Load an OGG Vorbis file into the Vorbis Player module from file.',
        documentation: `
**Description:**  
Loads an OGG Vorbis file into the Vorbis Player module.

**Prototypes:**  
- **C:** \`int sv_vplayer_load( int slot, int mod_num, const char* filename );\`
- **Java:** \`int vplayer_load( int slot, int mod_num, String filename );\`
- **Pixilang:** \`sv_vplayer_load( sv, mod_num, filename );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Vorbis Player module number.
- \`filename\`: File name (C and Java only).

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_vplayer_load_from_memory',
        detail: 'Load an OGG Vorbis file into the Vorbis Player module from memory.',
        documentation: `
**Description:**  
Loads an OGG Vorbis file into the Vorbis Player module from a memory buffer.

**Prototypes:**  
- **C:** \`int sv_vplayer_load_from_memory( int slot, int mod_num, void* data, uint32_t data_size );\`
- **Java:** \`int vplayer_load_from_memory( int slot, int mod_num, byte[] data );\`
- **JS:** \`sv_vplayer_load_from_memory( slot, mod_num, data );\` // data: Uint8Array

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Vorbis Player module number.
- \`data\`: Byte array with file contents (C, Java, JS).
- \`data_size\` (C only): Number of bytes in the array.

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_vplayer_fload',
        detail: 'Load an OGG Vorbis file into the Vorbis Player module from a file stream (Pixilang only).',
        documentation: `
**Description:**  
Loads an OGG Vorbis file into the Vorbis Player module from a file stream.

**Prototypes:**  
- **Pixilang:** \`sv_vplayer_fload( sv, mod_num, f );\`

**Parameters:**  
- \`sv\`: SunVox object ID.
- \`mod_num\`: Vorbis Player module number.
- \`f\`: File stream.

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_get_number_of_modules',
        detail: 'Get the number of module slots in the project.',
        documentation: `
**Description:**  
Get the total number of module slots (not necessarily all filled).

**Prototypes:**  
- **C:** \`int sv_get_number_of_modules( int slot );\`
- **Java:** \`int get_number_of_modules( int slot );\`
- **JS:** \`sv_get_number_of_modules( slot );\`
- **Pixilang:** \`sv_get_number_of_modules( sv );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.

**Return Value:**  
Number of modules or negative error code.
        `
    },
    {
        name: 'sv_find_module',
        detail: 'Find a module by name.',
        documentation: `
**Description:**  
Find a module by its name.

**Prototypes:**  
- **C:** \`int sv_find_module( int slot, const char* name );\`
- **Java:** \`int find_module( int slot, String name );\`
- **JS:** \`sv_find_module( slot, name );\`
- **Pixilang:** \`sv_find_module( sv, name );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`name\`: Module name.

**Return Value:**  
Module number or -1 if not found.
        `
    },
    {
        name: 'sv_get_module_flags',
        detail: 'Get flags of the specified module.',
        documentation: `
**Description:**  
Returns the flags of the specified module.

**Prototypes:**  
- **C:** \`uint32_t sv_get_module_flags( int slot, int mod_num );\`
- **Java:** \`int get_module_flags( int slot, int mod_num );\`
- **JS:** \`sv_get_module_flags( slot, mod_num );\`
- **Pixilang:** \`sv_get_module_flags( sv, mod_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.

**Return Value:**  
Set of flags (SV_MODULE_FLAG_*) or -1 (error).
        `
    },
    {
        name: 'sv_get_module_inputs',
        detail: 'Get input links of the specified module.',
        documentation: `
**Description:**  
Returns an array of module numbers that are inputs of the specified module.

**Prototypes:**  
- **C:** \`int* sv_get_module_inputs( int slot, int mod_num );\`
- **Java:** \`int[] get_module_inputs( int slot, int mod_num );\`
- **JS:** \`sv_get_module_inputs( slot, mod_num );\` // returns Int32Array
- **Pixilang:** \`sv_get_module_inputs( sv, mod_num );\` // returns INT32 container ID

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.

**Return Value:**  
Pointer/array of input links or NULL on error.
        `
    },
    {
        name: 'sv_get_module_outputs',
        detail: 'Get output links of the specified module.',
        documentation: `
**Description:**  
Returns an array of module numbers that are outputs of the specified module.

**Prototypes:**  
- **C:** \`int* sv_get_module_outputs( int slot, int mod_num );\`
- **Java:** \`int[] get_module_outputs( int slot, int mod_num );\`
- **JS:** \`sv_get_module_outputs( slot, mod_num );\` // returns Int32Array
- **Pixilang:** \`sv_get_module_outputs( sv, mod_num );\` // returns INT32 container ID

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.

**Return Value:**  
Pointer/array of output links or NULL on error.
        `
    },
    {
        name: 'sv_get_module_type',
        detail: 'Get the module type (string).',
        documentation: `
**Description:**  
Returns the type of the specified module as a string.

**Prototypes:**  
- **C:** \`const char* sv_get_module_type( int slot, int mod_num );\`
- **Java:** \`String get_module_type( int slot, int mod_num );\`
- **JS:** \`sv_get_module_type( slot, mod_num );\`
- **Pixilang:** \`sv_get_module_type( sv, mod_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.

**Return Value:**  
Module type string or NULL.
        `
    },
    {
        name: 'sv_get_module_name',
        detail: 'Get the module name.',
        documentation: `
**Description:**  
Returns the name of the specified module.

**Prototypes:**  
- **C:** \`const char* sv_get_module_name( int slot, int mod_num );\`
- **Java:** \`String get_module_name( int slot, int mod_num );\`
- **JS:** \`sv_get_module_name( slot, mod_num );\`
- **Pixilang:** \`sv_get_module_name( sv, mod_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.

**Return Value:**  
Module name string or NULL.
        `
    },
    {
        name: 'sv_set_module_name',
        detail: 'Set the module name.',
        documentation: `
**Description:**  
Sets the name of the specified module.

**Prototypes:**  
- **C:** \`int sv_set_module_name( int slot, int mod_num, const char* name );\`
- **Java:** \`set_module_name( int slot, int mod_num, String name );\`
- **JS:** \`sv_set_module_name( slot, mod_num, name );\`
- **Pixilang:** \`sv_set_module_name( sv, mod_num, name );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`name\`: Module name.

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_get_module_xy',
        detail: 'Get the module coordinates (XY) packed in a single uint32.',
        documentation: `
**Description:**  
Returns the module coordinates packed into one integer.  
(x & 0xFFFF) | ((y & 0xFFFF) << 16)

**Prototypes:**  
- **C:** \`uint32_t sv_get_module_xy( int slot, int mod_num );\`
- **Java:** \`int get_module_xy( int slot, int mod_num );\`
- **JS:** \`sv_get_module_xy( slot, mod_num );\`
- **Pixilang:** \`sv_get_module_xy( sv, mod_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.

**Return Value:**  
Packed XY coordinates.
        `
    },
    {
        name: 'sv_set_module_xy',
        detail: 'Set the module coordinates.',
        documentation: `
**Description:**  
Sets the module coordinates.

**Prototypes:**  
- **C:** \`int sv_set_module_xy( int slot, int mod_num, int x, int y );\`
- **Java:** \`set_module_xy( int slot, int mod_num, int x, int y );\`
- **JS:** \`sv_set_module_xy( slot, mod_num, x, y );\`
- **Pixilang:** \`sv_set_module_xy( sv, mod_num, x, y );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`x, y\`: Coordinates.

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_get_module_color',
        detail: 'Get the module color.',
        documentation: `
**Description:**  
Returns the module color.  
Other languages: 0xBBGGRR format.  
Pixilang: native color value.

**Prototypes:**  
- **C:** \`int sv_get_module_color( int slot, int mod_num );\`
- **Java:** \`int get_module_color( int slot, int mod_num );\`
- **JS:** \`sv_get_module_color( slot, mod_num );\`
- **Pixilang:** \`sv_get_module_color( sv, mod_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.

**Return Value:**  
Module color (0xBBGGRR or native Pixilang color).
        `
    },
    {
        name: 'sv_set_module_color',
        detail: 'Set the module color.',
        documentation: `
**Description:**  
Sets the module color.

**Prototypes:**  
- **C:** \`int sv_set_module_color( int slot, int mod_num, int color );\`
- **Java:** \`set_module_color( int slot, int mod_num, int color );\`
- **JS:** \`sv_set_module_color( slot, mod_num, color );\`
- **Pixilang:** \`sv_set_module_color( sv, mod_num, color );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`color\`: 0xBBGGRR or native Pixilang color value.

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_get_module_finetune',
        detail: 'Get the module relative note and finetune packed in a single uint32.',
        documentation: `
**Description:**  
Get the module relative note (transposition) and finetune.  
(relnote & 0xFFFF) | ((finetune & 0xFFFF) << 16)

**Prototypes:**  
- **C:** \`uint32_t sv_get_module_finetune( int slot, int mod_num );\`
- **Java:** \`int get_module_finetune( int slot, int mod_num );\`
- **JS:** \`sv_get_module_finetune( slot, mod_num );\`
- **Pixilang:** \`sv_get_module_finetune( sv, mod_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.

**Return Value:**  
Packed relative note and finetune.
        `
    },
    {
        name: 'sv_set_module_finetune',
        detail: 'Set the module finetune.',
        documentation: `
**Description:**  
Sets the module finetune immediately.

**Prototypes:**  
- **C:** \`int sv_set_module_finetune( int slot, int mod_num, int finetune );\`
- **Java:** \`int set_module_finetune( int slot, int mod_num, int finetune );\`
- **JS:** \`sv_set_module_finetune( slot, mod_num, finetune );\`
- **Pixilang:** \`sv_set_module_finetune( sv, mod_num, finetune );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`finetune\`: -256 ... 0 ... +256

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_set_module_relnote',
        detail: 'Set the module relative note (transposition).',
        documentation: `
**Description:**  
Sets the module relative note (transposition) immediately.

**Prototypes:**  
- **C:** \`int sv_set_module_relnote( int slot, int mod_num, int relative_note );\`
- **Java:** \`int set_module_relnote( int slot, int mod_num, int relative_note );\`
- **JS:** \`sv_set_module_relnote( slot, mod_num, relative_note );\`
- **Pixilang:** \`sv_set_module_relnote( sv, mod_num, relative_note );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`relative_note\`: >0 transpose up; <0 transpose down.

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_get_module_scope2',
        detail: 'Get the currently playing piece of sound from the specified module (C, JS).',
        documentation: `
**Description:**  
Get the currently playing piece of sound from the output of the specified module.

**Prototypes:**  
- **C:** \`uint32_t sv_get_module_scope2( int slot, int mod_num, int channel, int16_t* dest_buf, uint32_t samples_to_read );\`
- **Java:** \`int get_module_scope( int slot, int mod_num, int channel, short[] dest_buf, int samples_to_read );\`
- **JS:** \`sv_get_module_scope2( slot, mod_num, channel, dest_buf, samples_to_read );\` //dest_buf: Int16Array
- **Pixilang:** \`sv_get_module_scope( sv, mod_num, channel, dest_buf, samples_to_read );\` //dest_buf: INT16 container

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`channel\`: 0 - left; 1 - right.
- \`dest_buf\`: Pointer/array to store the audio fragment (int16).
- \`samples_to_read\`: Number of samples to read.

**Return Value:**  
Number of samples received (<= samples_to_read).
        `
    },
    {
        name: 'sv_module_curve',
        detail: 'Access the curve values of the specified module.',
        documentation: `
**Description:**  
Read/write curve values of a specified module.

**Prototypes:**  
- **C:** \`int sv_module_curve( int slot, int mod_num, int curve_num, float* data, int len, int w );\`
- **Java:** \`int module_curve( int slot, int mod_num, int curve_num, float[] data, int len, int w );\`
- **JS:** \`sv_module_curve( slot, mod_num, curve_num, data, len, w );\` //data: Float32Array
- **Pixilang:** \`sv_module_curve( sv, mod_num, curve_num, data, len, w );\` //data: FLOAT32 container

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`curve_num\`: Curve number.
- \`data\`: Destination/source array.
- \`len\`: Number of items to read/write.
- \`w\`: Mode: 0 - read, 1 - write.

**Return Value:**  
Number of items processed successfully or negative error code.
        `
    },
    {
        name: 'sv_get_number_of_module_ctls',
        detail: 'Get the number of the module controllers.',
        documentation: `
**Description:**  
Returns the number of controllers available in the specified module.

**Prototypes:**  
- **C:** \`int sv_get_number_of_module_ctls( int slot, int mod_num );\`
- **Java:** \`int get_number_of_module_ctls( int slot, int mod_num );\`
- **JS:** \`sv_get_number_of_module_ctls( slot, mod_num );\`
- **Pixilang:** \`sv_get_number_of_module_ctls( sv, mod_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.

**Return Value:**  
Number of module controllers or negative error code.
        `
    },
    {
        name: 'sv_get_module_ctl_name',
        detail: 'Get the name of the specified module controller.',
        documentation: `
**Description:**  
Returns the name of the specified controller.

**Prototypes:**  
- **C:** \`const char* sv_get_module_ctl_name( int slot, int mod_num, int ctl_num );\`
- **Java:** \`String get_module_ctl_name( int slot, int mod_num, int ctl_num );\`
- **JS:** \`sv_get_module_ctl_name( slot, mod_num, ctl_num );\`
- **Pixilang:** \`sv_get_module_ctl_name( sv, mod_num, ctl_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`ctl_num\`: Controller number (from 0).

**Return Value:**  
Controller name or NULL.
        `
    },
    {
        name: 'sv_get_module_ctl_value',
        detail: 'Get the value of the specified module controller.',
        documentation: `
**Description:**  
Returns the value of the specified controller.

**Prototypes:**  
- **C:** \`int sv_get_module_ctl_value( int slot, int mod_num, int ctl_num, int scaled );\`
- **Java:** \`int get_module_ctl_value( int slot, int mod_num, int ctl_num, int scaled );\`
- **JS:** \`sv_get_module_ctl_value( slot, mod_num, ctl_num, scaled );\`
- **Pixilang:** \`sv_get_module_ctl_value( sv, mod_num, ctl_num, scaled );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`ctl_num\`: Controller number (from 0).
- \`scaled\`:
  - 0: Real value.
  - 1: Scaled value.
  - 2: Final displayed value.

**Return Value:**  
Value of the specified controller.
        `
    },
    {
        name: 'sv_set_module_ctl_value',
        detail: 'Set the value of the specified module controller.',
        documentation: `
**Description:**  
Sets the value of the specified controller by sending an event internally.

**Prototypes:**  
- **C:** \`int sv_set_module_ctl_value( int slot, int mod_num, int ctl_num, int val, int scaled );\`
- **Java:** \`int set_module_ctl_value( int slot, int mod_num, int ctl_num, int val, int scaled );\`
- **JS:** \`sv_set_module_ctl_value( slot, mod_num, ctl_num, val, scaled );\`
- **Pixilang:** \`sv_set_module_ctl_value( sv, mod_num, ctl_num, val, scaled );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`ctl_num\`: Controller number.
- \`val\`: Value to set.
- \`scaled\`: See sv_get_module_ctl_value() description.

**Return Value:**  
0 (success) or negative error code.
        `
    },
    {
        name: 'sv_get_module_ctl_min',
        detail: 'Get the minimum value of the specified module controller.',
        documentation: `
**Description:**  
Returns the minimum value of the specified controller.

**Prototypes:**  
- **C:** \`int sv_get_module_ctl_min( int slot, int mod_num, int ctl_num, int scaled );\`
- **Java:** \`int get_module_ctl_min( int slot, int mod_num, int ctl_num, int scaled );\`
- **JS:** \`sv_get_module_ctl_min( slot, mod_num, ctl_num, scaled );\`
- **Pixilang:** \`sv_get_module_ctl_min( sv, mod_num, ctl_num, scaled );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`ctl_num\`: Controller number.
- \`scaled\`: See sv_get_module_ctl_value() description.

**Return Value:**  
Minimum value of the controller.
        `
    },
    {
        name: 'sv_get_module_ctl_max',
        detail: 'Get the maximum value of the specified module controller.',
        documentation: `
**Description:**  
Returns the maximum value of the specified controller.

**Prototypes:**  
- **C:** \`int sv_get_module_ctl_max( int slot, int mod_num, int ctl_num, int scaled );\`
- **Java:** \`int get_module_ctl_max( int slot, int mod_num, int ctl_num, int scaled );\`
- **JS:** \`sv_get_module_ctl_max( slot, mod_num, ctl_num, scaled );\`
- **Pixilang:** \`sv_get_module_ctl_max( sv, mod_num, ctl_num, scaled );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`ctl_num\`: Controller number.
- \`scaled\`: See sv_get_module_ctl_value() description.

**Return Value:**  
Maximum value of the controller.
        `
    },
    {
        name: 'sv_get_module_ctl_offset',
        detail: 'Get the display value offset of the specified module controller.',
        documentation: `
**Description:**  
Returns the display offset of the specified controller's value.

**Prototypes:**  
- **C:** \`int sv_get_module_ctl_offset( int slot, int mod_num, int ctl_num );\`
- **Java:** \`int get_module_ctl_offset( int slot, int mod_num, int ctl_num );\`
- **JS:** \`sv_get_module_ctl_offset( slot, mod_num, ctl_num );\`
- **Pixilang:** \`sv_get_module_ctl_offset( sv, mod_num, ctl_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`ctl_num\`: Controller number.

**Return Value:**  
Display offset of the controller.
        `
    },
    {
        name: 'sv_get_module_ctl_type',
        detail: 'Get the type of the specified module controller.',
        documentation: `
**Description:**  
Returns the controller type:  
0 - normal  
1 - selector

**Prototypes:**  
- **C:** \`int sv_get_module_ctl_type( int slot, int mod_num, int ctl_num );\`
- **Java:** \`int get_module_ctl_type( int slot, int mod_num, int ctl_num );\`
- **JS:** \`sv_get_module_ctl_type( slot, mod_num, ctl_num );\`
- **Pixilang:** \`sv_get_module_ctl_type( sv, mod_num, ctl_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`ctl_num\`: Controller number.

**Return Value:**  
Controller type (0 or 1).
        `
    },
    {
        name: 'sv_get_module_ctl_group',
        detail: 'Get the group of the specified module controller.',
        documentation: `
**Description:**  
Returns the group of the specified controller.

**Prototypes:**  
- **C:** \`int sv_get_module_ctl_group( int slot, int mod_num, int ctl_num );\`
- **Java:** \`int get_module_ctl_group( int slot, int mod_num, int ctl_num );\`
- **JS:** \`sv_get_module_ctl_group( slot, mod_num, ctl_num );\`
- **Pixilang:** \`sv_get_module_ctl_group( sv, mod_num, ctl_num );\`

**Parameters:**  
- \`slot / sv\`: Slot number / SunVox object ID.
- \`mod_num\`: Module number.
- \`ctl_num\`: Controller number.

**Return Value:**  
Group of the specified controller.
        `
    }
];
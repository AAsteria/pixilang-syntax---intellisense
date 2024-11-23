module.exports = [
    {
        name: 'load',
        detail: 'Load a container from a file.',
        documentation: `
**Description:**  
Loads a container from the specified file.

**Parameters:**  
- \`filename\`: Name of the file to load.  
- \`options\`: Set of \`LOAD_*\` flags; optional.

**Return Value:**  
The new loaded container, or \`-1\` on error.

**Examples:**  
\`\`\`pixi
c = load("smile.jpg")
if c >= 0 {
  file_format = c.file_format // FORMAT_RAW / FORMAT_JPEG / ...
  if file_format == FORMAT_WAVE {
    printf("This is an audio file\\n")
  }
}
\`\`\`
        `
    },
    {
        name: 'fload',
        detail: 'Load a container from a stream.',
        documentation: `
**Description:**  
Loads a container from the specified stream.

**Parameters:**  
- \`stream\`: Stream opened by \`fopen()\` or \`fopen_mem()\`.  
- \`options\`: Set of \`LOAD_*\` flags; optional.

**Return Value:**  
The new loaded container, or \`-1\` on error.
        `
    },
    {
        name: 'save',
        detail: 'Save a container to a file.',
        documentation: `
**Description:**  
Saves the container to the specified file.

**Parameters:**  
- \`pixi\`: The container to save.  
- \`filename\`: The name of the file.  
- \`format\`: File format (\`FORMAT_RAW\`, \`FORMAT_JPEG\`, etc.).  
- \`options\`: Optional format-specific options:
  - \`JPEG\`: Quality (0 to 100) + \`JPEG_*\` flags.
  - \`GIF\`: Flags (\`GIF_GRAYSCALE\`, \`GIF_DITHER\`).
  - \`FLAC\`: Quality (1 to 9); 0 = auto.
  - \`OGG\`: Quality (1 to 100); 0 = auto (default 40).

**Return Value:**  
\`0\` on success.

**Examples:**  
\`\`\`pixi
c = load("smile.jpg")
save(c, "smile.png", FORMAT_PNG)
save(c, "smile2.jpg", FORMAT_JPEG) // Default quality = 85
save(c, "smile3.jpg", FORMAT_JPEG, 100) // Quality = 100
\`\`\`
        `
    },
    {
        name: 'fsave',
        detail: 'Save a container to a stream.',
        documentation: `
**Description:**  
Saves the container to a specified stream.

**Parameters:**  
- \`pixi\`: The container to save.  
- \`stream\`: Stream opened by \`fopen()\` or \`fopen_mem()\`.  
- \`format\`: File format (\`FORMAT_RAW\`, \`FORMAT_JPEG\`, etc.).  
- \`options\`: Optional format-specific options.

**Return Value:**  
\`0\` on success.
        `
    },
    {
        name: 'get_real_path',
        detail: 'Convert Pixilang-style paths to real filesystem paths.',
        documentation: `
**Description:**  
Converts a Pixilang-style path (e.g., \`1:/img.png\`) to a real filesystem path.

**Parameters:**  
- \`path\`: Pixilang-style path.

**Return Value:**  
A new container with the real filesystem path (must be removed manually).

**Examples:**  
\`\`\`pixi
filename = "1:/some_file"
realpath = get_real_path(filename)
printf("File name: %s; Real path: %s\\n", filename, realpath)
remove(realpath)
\`\`\`
        `
    },
    {
        name: 'new_flist',
        detail: 'Create a new file list for the specified path.',
        documentation: `
**Description:**  
Creates a new file list based on the provided path and file mask.

**Parameters:**  
- \`path\`: Directory path.  
- \`mask\`: File mask (e.g., \`"txt/doc"\`); optional (\`-1\` for all files).

**Return Value:**  
File list ID.

**Examples:**  
\`\`\`pixi
path = CURRENT_PATH
mask = -1 // Match all files
fl = new_flist(path, mask)
if fl >= 0 {
  printf("Files found in %s\\n", path)
  while(1) {
    file_name = get_flist_name(fl)
    file_type = get_flist_type(fl) // 0 = file, 1 = directory
    if file_type == 0 {
      printf("FILE %s%s\\n", path, file_name)
    } else {
      printf("DIR  %s%s\\n", path, file_name)
    }
    if flist_next(fl) == 0 { break } // No more files
  }
  remove_flist(fl)
}
\`\`\`
        `
    },
    {
        name: 'get_file_size',
        detail: 'Get the size of a file.',
        documentation: `
**Description:**  
Returns the size of the specified file.

**Parameters:**  
- \`filename\`: Name of the file.

**Return Value:**  
File size in bytes.
        `
    },
    {
        name: 'get_file_format',
        detail: 'Get the format of a file or stream.',
        documentation: `
**Description:**  
Determines the format of the specified file or stream.

**Parameters:**  
- \`filename\`: Name of the file.  
- \`stream\`: Stream ID (optional).

**Return Value:**  
File format (\`FORMAT_*\` constants).
        `
    },
    {
        name: 'remove_file',
        detail: 'Delete a file.',
        documentation: `
**Parameters:**  
- \`filename\`: Name of the file to delete.
        `
    },
    {
        name: 'rename_file',
        detail: 'Rename a file.',
        documentation: `
**Parameters:**  
- \`old_filename\`: Current file name.  
- \`new_filename\`: New file name.
        `
    },
    {
        name: 'copy_file',
        detail: 'Copy a file.',
        documentation: `
**Parameters:**  
- \`source_filename\`: Source file name.  
- \`destination_filename\`: Destination file name.
        `
    },
    {
        name: 'create_directory',
        detail: 'Create a new directory.',
        documentation: `
**Parameters:**  
- \`directory_name\`: Name of the directory to create.  
- \`mode\`: System-specific mode; optional.
        `
    },
    {
        name: 'set_disk0',
        detail: 'Set a virtual disk for Pixilang.',
        documentation: `
**Description:**  
Uses a stream (opened by \`fopen()\` or \`fopen_mem()\`) as virtual disk \`0:/\`.

**Parameters:**  
- \`stream\`: Stream ID, or \`0\` to disable disk \`0:/\`.
        `
    },
    {
        name: 'get_disk0',
        detail: 'Get the virtual disk used by Pixilang.',
        documentation: `
**Return Value:**  
The stream ID for the current virtual disk, or \`0\` if no disk is set.
        `
    },
    {
        name: 'fopen',
        detail: 'Open a file and associate it with a stream.',
        documentation: `
    **Description:**  
    Opens a file and associates it with a stream.
    
    **Parameters:**  
    - \`filename\`: Name of the file.  
    - \`mode\`: File access mode:
      - \`r\`, \`rb\`: Read.
      - \`w\`, \`wb\`: Write (truncate or create).
      - \`a\`, \`ab\`: Append (write at end-of-file).
      - \`r+\`, \`rb+\`, \`r+b\`: Update (read and write).
      - \`w+\`, \`wb+\`, \`w+b\`: Truncate or create (update).
      - \`a+\`, \`ab+\`, \`a+b\`: Append or create (update).
    
    **Return Value:**  
    Stream ID on success, or \`0\` on failure.
    
    **Examples:**  
    \`\`\`pixi
    f = fopen("/tmp/data.txt", "rb") // Open file for reading
    fclose(f)                        // Close the stream
    \`\`\`
        `
    },
    {
        name: 'fopen_mem',
        detail: 'Open a data container as a file.',
        documentation: `
    **Description:**  
    Opens a data container and associates it with a stream.
    
    **Parameters:**  
    - \`data\`: Container to open.
    
    **Return Value:**  
    Stream ID on success, or \`0\` on failure.
        `
    },
    {
        name: 'fclose',
        detail: 'Close an open stream.',
        documentation: `
    **Description:**  
    Flushes and closes the specified stream.
    
    **Parameters:**  
    - \`stream\`: ID of the stream to close.
    
    **Return Value:**  
    \`0\` on success.
        `
    },
    {
        name: 'fputc',
        detail: 'Write a single byte to a stream.',
        documentation: `
    **Description:**  
    Writes a single byte to the specified stream.
    
    **Parameters:**  
    - \`c\`: Byte to write.  
    - \`stream\`: Stream to write to.
    
    **Examples:**  
    \`\`\`pixi
    f = fopen("/tmp/data.txt", "wb") // Open file for writing
    fputc(0x12, f)                  // Write byte 0x12
    fclose(f)                       // Close the stream
    \`\`\`
        `
    },
    {
        name: 'fputs',
        detail: 'Write a string to a stream.',
        documentation: `
    **Description:**  
    Writes a string to the specified stream.
    
    **Parameters:**  
    - \`s\`: String to write.  
    - \`stream\`: Stream to write to.
    
    **Examples:**  
    \`\`\`pixi
    f = fopen("/tmp/data.txt", "wb") // Open file for writing
    str = "Hello!"
    fputs(str, f)                   // Write string to file
    fclose(f)                       // Close the stream
    \`\`\`
        `
    },
    {
        name: 'fwrite',
        detail: 'Write data to a stream.',
        documentation: `
    **Description:**  
    Writes data from a container to the specified stream.
    
    **Parameters:**  
    - \`data\`: Data container.  
    - \`size\`: Number of bytes to write.  
    - \`stream\`: Stream to write to.  
    - \`data_offset_optional\`: Starting offset in the data container.
    
    **Return Value:**  
    The number of bytes successfully written.
    
    **Examples:**  
    \`\`\`pixi
    f = fopen("/tmp/data.txt", "wb") // Open file for writing
    str = "Hello!"
    fwrite(str, 2, f)               // Write first two bytes of "Hello!"
    fclose(f)                       // Close the stream
    \`\`\`
        `
    },
    {
        name: 'fgetc',
        detail: 'Read a single byte from a stream.',
        documentation: `
    **Description:**  
    Reads a single byte from the specified stream.
    
    **Parameters:**  
    - \`stream\`: Stream to read from.
    
    **Return Value:**  
    The next byte from the stream.
    
    **Examples:**  
    \`\`\`pixi
    f = fopen("/tmp/data.txt", "rb") // Open file for reading
    byte = fgetc(f)                 // Read a byte
    fclose(f)                       // Close the stream
    \`\`\`
        `
    },
    {
        name: 'fgets',
        detail: 'Read a string from a stream.',
        documentation: `
    **Description:**  
    Reads a string from the stream until one of the following conditions is met:
    1. The container's space is filled.
    2. End-of-file is reached.
    3. A newline (\`\\n\`) or carriage return (\`\\r\`) is encountered.
    
    **Parameters:**  
    - \`s\`: Container to store the string.  
    - \`n\`: Maximum number of bytes to read.  
    - \`stream\`: Stream to read from.  
    - \`offset\`: Starting position in the container; optional.
    
    **Return Value:**  
    - Length of the received string (\`>= 0\`), or  
    - \`-1\` if the string is empty and end-of-file is reached.
    
    **Examples:**  
    \`\`\`pixi
    string = new(256, 1, INT8)
    f = fopen("/tmp/data.txt", "rb") // Open file for reading
    fgets(string, 256, f)           // Read string from file
    fclose(f)                       // Close the stream
    \`\`\`
        `
    },
    {
        name: 'fread',
        detail: 'Read data from a stream into a container.',
        documentation: `
    **Description:**  
    Reads up to \`size\` bytes from the stream into the specified container.
    
    **Parameters:**  
    - \`data\`: Data container.  
    - \`size\`: Number of bytes to read.  
    - \`stream\`: Stream to read from.  
    - \`data_offset_optional\`: Starting offset in the container; optional.
    
    **Return Value:**  
    Number of bytes successfully read.
        `
    },
    {
        name: 'feof',
        detail: 'Check for end-of-file in a stream.',
        documentation: `
    **Description:**  
    Tests whether the end-of-file indicator is set for the specified stream.
    
    **Parameters:**  
    - \`stream\`: Stream to check.
    
    **Return Value:**  
    Non-zero if end-of-file is reached.
        `
    },
    {
        name: 'fflush',
        detail: 'Flush a stream.',
        documentation: `
    **Description:**  
    Flushes the specified stream.
    
    **Parameters:**  
    - \`stream\`: Stream to flush.
        `
    },
    {
        name: 'fseek',
        detail: 'Reposition a file pointer in a stream.',
        documentation: `
    **Description:**  
    Moves the file-position indicator in the stream.
    
    **Parameters:**  
    - \`stream\`: Stream to reposition.  
    - \`offset\`: Offset from the origin.  
    - \`origin\`: Reference point:
      - \`SEEK_SET\`: Beginning of the file.
      - \`SEEK_CUR\`: Current position.
      - \`SEEK_END\`: End of the file.
    
    **Examples:**  
    \`\`\`pixi
    f = fopen("/tmp/data.txt", "rb") // Open file
    fseek(f, 0, SEEK_END)           // Move to end of file
    size = ftell(f)                 // Get file size
    fclose(f)                       // Close the file
    \`\`\`
        `
    },
    {
        name: 'ftell',
        detail: 'Get the current file offset in a stream.',
        documentation: `
    **Description:**  
    Returns the current position of the file pointer, measured in bytes from the beginning of the file.
    
    **Parameters:**  
    - \`stream\`: Stream to query.
    
    **Return Value:**  
    Current file offset.
        `
    },
    {
        name: 'setxattr',
        detail: 'Set an extended attribute for a file.',
        documentation: `
    **Description:**  
    Sets an extended attribute for the specified file.
    
    **Parameters:**  
    - \`path\`: File path.  
    - \`attr_name\`: Attribute name.  
    - \`data\`: Data to set as the attribute value.  
    - \`data_size_in_bytes\`: Size of the data, in bytes.  
    - \`flags\`: System-specific flags.
    
    **Return Value:**  
    \`0\` on success, or \`-1\` on error.
    
    **Examples:**  
    \`\`\`pixi
    if strstr(OS_NAME, "ios") >= 0 {
        $val = new(1, 1, INT8)
        $val[0] = 1
        setxattr("myfile.txt", "com.apple.MobileBackup", $val, 1, 0)
        remove($val)
    }
    \`\`\`
        `
    }
];

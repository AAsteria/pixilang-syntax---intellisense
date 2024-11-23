module.exports = [
    {
        name: 'file_dialog',
        detail: 'Open a file dialog.',
        documentation: `
**Description:**  
Opens a file dialog to select or save a file.

**Parameters:**  
- \`dialog_name\`: Name of the dialog window.  
- \`mask\`: File type mask (e.g., "gif/jpg" for .gif and .jpg files, "" for all files).  
- \`id\`: Identifier to save the current dialog state.  
- \`default_name\`: Default file name (optional).  
- \`flags\`: Flags (\`FDIALOG_FLAG_*\`); optional.

**Return Value:**  
A string container with the name of the selected file, or \`-1\` if no file was selected. The container must be removed manually.

**Examples:**  
\`\`\`pixi
file_name = file_dialog("Open Image", "jpg/png", "image_dialog")
if file_name != -1 {
    printf("Selected file: %s\\n", file_name)
    remove(file_name) // Remove container after use
}
\`\`\`
        `
    },
    {
        name: 'prefs_dialog',
        detail: 'Open the Pixilang preferences dialog.',
        documentation: `
**Description:**  
Opens a window displaying global Pixilang preferences.

**Examples:**  
\`\`\`pixi
prefs_dialog()
\`\`\`
        `
    },
    {
        name: 'textinput_dialog',
        detail: 'Open a text input dialog.',
        documentation: `
**Description:**  
Displays a text input dialog and returns the entered string.

**Parameters:**  
- \`default_text\`: Pre-filled text in the input field (optional).  
- \`dialog_name\`: Name of the dialog window (optional).

**Return Value:**  
A string container with the entered text, or \`-1\` if the dialog was canceled. The container must be removed manually.

**Examples:**  
\`\`\`pixi
text = textinput_dialog("Default text", "Enter Name")
if text != -1 {
    printf("Entered text: %s\\n", text)
    remove(text) // Remove container after use
}
\`\`\`
        `
    }
];

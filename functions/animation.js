module.exports = [
    {
        name: 'pack_frame',
        detail: 'Pack the current frame from container data into the hidden frame storage.',
        documentation: `
**Description:**  
Packs the current frame (from container data) into the hidden storage for frames.  
The frame number must be stored in the \`frame\` property of the container.

**Parameters:**  
- \`pixi\`: The container to pack the frame into.

**Examples:**  
\`\`\`pixi
pack_frame(animation_container)
\`\`\`
        `
    },
    {
        name: 'unpack_frame',
        detail: 'Unpack the current frame from the hidden frame storage to container data.',
        documentation: `
**Description:**  
Unpacks the current frame (from the hidden storage) into the container data.  
The frame number must be stored in the \`frame\` property of the container.

**Parameters:**  
- \`pixi\`: The container to unpack the frame into.

**Examples:**  
\`\`\`pixi
unpack_frame(animation_container)
\`\`\`
        `
    },
    {
        name: 'create_anim',
        detail: 'Create hidden storage for frames (animation) in a container.',
        documentation: `
**Description:**  
Initializes hidden storage for frames (animation) within the specified container.

**Parameters:**  
- \`pixi\`: The container where the animation storage will be created.

**Examples:**  
\`\`\`pixi
create_anim(animation_container)
\`\`\`
        `
    },
    {
        name: 'remove_anim',
        detail: 'Remove the hidden frame storage (animation) from a container.',
        documentation: `
**Description:**  
Removes the hidden storage for frames (animation) from the specified container.

**Parameters:**  
- \`pixi\`: The container from which to remove the animation storage.

**Examples:**  
\`\`\`pixi
remove_anim(animation_container)
\`\`\`
        `
    },
    {
        name: 'clone_frame',
        detail: 'Clone the current frame in the container.',
        documentation: `
**Description:**  
Duplicates the current frame in the container.  
The frame number must be stored in the \`frame\` property of the container.

**Parameters:**  
- \`pixi\`: The container whose frame will be cloned.

**Examples:**  
\`\`\`pixi
clone_frame(animation_container)
\`\`\`
        `
    },
    {
        name: 'remove_frame',
        detail: 'Remove the current frame from the container.',
        documentation: `
**Description:**  
Deletes the current frame from the container.  
The frame number must be stored in the \`frame\` property of the container.

**Parameters:**  
- \`pixi\`: The container from which to remove the frame.

**Examples:**  
\`\`\`pixi
remove_frame(animation_container)
\`\`\`
        `
    },
    {
        name: 'play',
        detail: 'Enable auto-play mode for a container.',
        documentation: `
**Description:**  
Activates auto-play mode for the specified container.  
In this mode, the frame will automatically change during the \`pixi()\` function call.

**Parameters:**  
- \`pixi\`: The container to enable auto-play mode on.

**Examples:**  
\`\`\`pixi
play(animation_container)
\`\`\`
        `
    },
    {
        name: 'stop',
        detail: 'Disable auto-play mode for a container.',
        documentation: `
**Description:**  
Deactivates auto-play mode for the specified container.

**Parameters:**  
- \`pixi\`: The container to disable auto-play mode on.

**Examples:**  
\`\`\`pixi
stop(animation_container)
\`\`\`
        `
    }
];

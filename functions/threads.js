module.exports = [
    {
        name: 'thread_create',
        detail: 'Create a new thread.',
        documentation: `
**Description:**  
Creates a new thread and runs the specified function within it.

**Parameters:**  
- \`thread_function\`: The function to execute in the thread.  
- \`user_data\`: User-defined data to pass to the thread.  
- \`flags_optional\`: Optional flags (\`THREAD_*\`).  

**Return Value:**  
The thread ID, or \`-1\` if an error occurs.

**Examples:**  
\`\`\`pixi
fn thread_body($thread_id, $user_data) {
    printf("Thread code\\n")
}

thread_id = thread_create(thread_body, 0)
err = thread_destroy(thread_id, 1000) // Wait for the thread to terminate

if err == 0 {
    printf("Thread closed successfully\\n")
} else if err == 1 {
    printf("Time-out. Thread is not closed\\n")
} else if err == 2 {
    printf("Error in thread_destroy()\\n")
}
\`\`\`
        `
    },
    {
        name: 'thread_destroy',
        detail: 'Terminate a thread and optionally wait for it to finish.',
        documentation: `
**Description:**  
Destroys the specified thread, with an optional time-out period.

**Parameters:**  
- \`thread_id\`: The ID of the thread to destroy.  
- \`timeout_ms\`: Time-out in milliseconds.  
  - Negative values: Do not attempt to kill the thread after the timeout.  
  - \`INT_MAX\`: Wait indefinitely.

**Return Value:**  
- \`0\`: Thread closed successfully.  
- \`1\`: Time-out occurred.  
- \`2\`: Some error occurred.

**Examples:**  
\`\`\`pixi
err = thread_destroy(thread_id, 1000) // Wait 1 second for the thread to close
if err == 0 {
    printf("Thread closed successfully\\n")
}
\`\`\`
        `
    },
    {
        name: 'mutex_create',
        detail: 'Create a new mutex for thread synchronization.',
        documentation: `
**Description:**  
Creates a new mutex object for managing thread synchronization.

**Return Value:**  
The mutex ID.

**Examples:**  
\`\`\`pixi
new_mutex = mutex_create()
mutex_lock(new_mutex)
mutex_unlock(new_mutex)
mutex_destroy(new_mutex)
\`\`\`
        `
    },
    {
        name: 'mutex_destroy',
        detail: 'Destroy a mutex.',
        documentation: `
**Description:**  
Destroys the specified mutex object.

**Examples:**  
\`\`\`pixi
mutex_destroy(new_mutex)
\`\`\`
        `
    },
    {
        name: 'mutex_lock',
        detail: 'Lock a mutex.',
        documentation: `
**Description:**  
Locks the specified mutex, blocking if the mutex is already locked.

**Examples:**  
\`\`\`pixi
mutex_lock(new_mutex)
\`\`\`
        `
    },
    {
        name: 'mutex_trylock',
        detail: 'Try to lock a mutex without blocking.',
        documentation: `
**Description:**  
Attempts to lock the specified mutex without blocking.  
If the mutex is already locked, the function returns immediately.

**Return Value:**  
- \`0\`: Mutex successfully locked.  
- Non-zero: Mutex is already locked.

**Examples:**  
\`\`\`pixi
if mutex_trylock(new_mutex) == 0 {
    printf("Mutex locked successfully\\n")
} else {
    printf("Mutex is already locked\\n")
}
\`\`\`
        `
    },
    {
        name: 'mutex_unlock',
        detail: 'Unlock a mutex.',
        documentation: `
**Description:**  
Unlocks the specified mutex.

**Examples:**  
\`\`\`pixi
mutex_unlock(new_mutex)
\`\`\`
        `
    }
];

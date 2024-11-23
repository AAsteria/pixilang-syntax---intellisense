module.exports = [
    {
        name: 'start_timer',
        detail: 'Start the selected timer.',
        documentation: `
**Description:**  
Starts the specified timer.

**Parameters:**  
- \`timer_num\`: The timer number to start.

**Examples:**  
\`\`\`pixi
start_timer(0) // Start timer 0
\`\`\`
        `
    },
    {
        name: 'get_timer',
        detail: 'Get the value of the selected timer in milliseconds.',
        documentation: `
**Description:**  
Retrieves the value of the specified timer in milliseconds.

**Parameters:**  
- \`timer_num\`: The timer number to retrieve.

**Return Value:**  
A 32-bit value representing the elapsed time (in milliseconds).

**Examples:**  
\`\`\`pixi
time_elapsed = get_timer(0) // Get elapsed time from timer 0
\`\`\`
        `
    },
    {
        name: 'get_year',
        detail: 'Get the current year.',
        documentation: `
**Description:**  
Returns the current year.

**Examples:**  
\`\`\`pixi
current_year = get_year() // Get the current year
\`\`\`
        `
    },
    {
        name: 'get_month',
        detail: 'Get the current month.',
        documentation: `
**Description:**  
Returns the current month (1 = January, 12 = December).

**Examples:**  
\`\`\`pixi
current_month = get_month() // Get the current month
\`\`\`
        `
    },
    {
        name: 'get_day',
        detail: 'Get the current day of the month.',
        documentation: `
**Description:**  
Returns the current day of the month.

**Examples:**  
\`\`\`pixi
current_day = get_day() // Get the current day
\`\`\`
        `
    },
    {
        name: 'get_hours',
        detail: 'Get the current hour.',
        documentation: `
**Description:**  
Returns the current hour (0-23).

**Examples:**  
\`\`\`pixi
current_hour = get_hours() // Get the current hour
\`\`\`
        `
    },
    {
        name: 'get_minutes',
        detail: 'Get the current minute.',
        documentation: `
**Description:**  
Returns the current minute (0-59).

**Examples:**  
\`\`\`pixi
current_minute = get_minutes() // Get the current minute
\`\`\`
        `
    },
    {
        name: 'get_seconds',
        detail: 'Get the current second.',
        documentation: `
**Description:**  
Returns the current second (0-59).

**Examples:**  
\`\`\`pixi
current_second = get_seconds() // Get the current second
\`\`\`
        `
    },
    {
        name: 'get_ticks',
        detail: 'Get the current system tick counter.',
        documentation: `
**Description:**  
Retrieves the current system tick counter as a 32-bit value.

**Return Value:**  
The current system tick counter.

**Examples:**  
\`\`\`pixi
ticks = get_ticks() // Get the current system tick count
\`\`\`
        `
    },
    {
        name: 'get_tps',
        detail: 'Get the number of system ticks per second.',
        documentation: `
**Description:**  
Returns the number of system ticks per second.

**Examples:**  
\`\`\`pixi
ticks_per_second = get_tps() // Get the ticks per second
\`\`\`
        `
    },
    {
        name: 'sleep',
        detail: 'Pause execution for a specified duration.',
        documentation: `
**Description:**  
Pauses the program for the specified delay in milliseconds.

**Parameters:**  
- \`delay\`: The delay duration in milliseconds.

**Examples:**  
\`\`\`pixi
sleep(1000) // Pause execution for 1 second
\`\`\`
        `
    }
];

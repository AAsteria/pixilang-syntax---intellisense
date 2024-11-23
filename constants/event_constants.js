module.exports = [
    // Main EVT container
    {
        name: "EVT",
        detail: "Event Container",
        documentation: "ID of the container with events, used by `get_event()`."
    },
    // EVT field numbers
    {
        name: "EVT_TYPE",
        detail: "Event Field: Type",
        documentation: "Field in the `EVT` container specifying the event type."
    },
    {
        name: "EVT_FLAGS",
        detail: "Event Field: Flags",
        documentation: "Field in the `EVT` container specifying event flags."
    },
    {
        name: "EVT_TIME",
        detail: "Event Field: Time",
        documentation: "Field in the `EVT` container specifying the event time."
    },
    {
        name: "EVT_X",
        detail: "Event Field: X Coordinate",
        documentation: "Field in the `EVT` container specifying the X coordinate of the event (0 is center of the screen)."
    },
    {
        name: "EVT_Y",
        detail: "Event Field: Y Coordinate",
        documentation: "Field in the `EVT` container specifying the Y coordinate of the event (0 is center of the screen)."
    },
    {
        name: "EVT_KEY",
        detail: "Event Field: Key",
        documentation: "Field in the `EVT` container specifying the ASCII code of the pressed key or a `KEY_*` constant."
    },
    {
        name: "EVT_SCANCODE",
        detail: "Event Field: Scancode",
        documentation: "Field in the `EVT` container specifying the key scancode or touch number for multitouch devices."
    },
    {
        name: "EVT_PRESSURE",
        detail: "Event Field: Pressure",
        documentation: "Field in the `EVT` container specifying touch pressure (normal is 1024)."
    },
    // Event types
    {
        name: "EVT_MOUSEBUTTONDOWN",
        detail: "Event Type: Mouse Button Down",
        documentation: "Specifies a mouse button down event (first touch)."
    },
    {
        name: "EVT_MOUSEBUTTONUP",
        detail: "Event Type: Mouse Button Up",
        documentation: "Specifies a mouse button up event."
    },
    {
        name: "EVT_MOUSEMOVE",
        detail: "Event Type: Mouse Move",
        documentation: "Specifies a mouse movement event."
    },
    {
        name: "EVT_TOUCHBEGIN",
        detail: "Event Type: Touch Begin",
        documentation: "Specifies the start of a 2nd, 3rd, etc. touch on multitouch devices."
    },
    {
        name: "EVT_TOUCHEND",
        detail: "Event Type: Touch End",
        documentation: "Specifies the end of a touch on multitouch devices."
    },
    {
        name: "EVT_TOUCHMOVE",
        detail: "Event Type: Touch Move",
        documentation: "Specifies a touch movement on multitouch devices."
    },
    {
        name: "EVT_BUTTONDOWN",
        detail: "Event Type: Button Down",
        documentation: "Specifies a button down event."
    },
    {
        name: "EVT_BUTTONUP",
        detail: "Event Type: Button Up",
        documentation: "Specifies a button up event."
    },
    {
        name: "EVT_SCREENRESIZE",
        detail: "Event Type: Screen Resize",
        documentation: "Specifies a screen resize event."
    },
    {
        name: "EVT_QUIT",
        detail: "Event Type: Quit",
        documentation: "Specifies a quit event. If `EVT[ EVT_SCANCODE ]` is 0, this event cannot be ignored, and user code must terminate."
    },
    // Event flags
    {
        name: "EVT_FLAG_SHIFT",
        detail: "Event Flag: Shift",
        documentation: "Specifies the Shift key is active during the event."
    },
    {
        name: "EVT_FLAG_CTRL",
        detail: "Event Flag: Ctrl",
        documentation: "Specifies the Ctrl key is active during the event."
    },
    {
        name: "EVT_FLAG_ALT",
        detail: "Event Flag: Alt",
        documentation: "Specifies the Alt key is active during the event."
    },
    {
        name: "EVT_FLAG_MODE",
        detail: "Event Flag: Mode",
        documentation: "Specifies the Mode key is active during the event."
    },
    {
        name: "EVT_FLAG_MODS",
        detail: "Event Flag: Mods",
        documentation: "Mask with all active modifiers (Shift, Ctrl, Alt, etc.)."
    },
    {
        name: "EVT_FLAG_DOUBLECLICK",
        detail: "Event Flag: Double Click",
        documentation: "Specifies a double-click event."
    },
    // Key codes
    {
        name: "KEY_MOUSE_LEFT",
        detail: "Key Code: Mouse Left Button",
        documentation: "Specifies the left mouse button."
    },
    {
        name: "KEY_MOUSE_MIDDLE",
        detail: "Key Code: Mouse Middle Button",
        documentation: "Specifies the middle mouse button."
    },
    {
        name: "KEY_MOUSE_RIGHT",
        detail: "Key Code: Mouse Right Button",
        documentation: "Specifies the right mouse button."
    },
    {
        name: "KEY_MOUSE_SCROLLUP",
        detail: "Key Code: Mouse Scroll Up",
        documentation: "Specifies scrolling up on the mouse wheel."
    },
    {
        name: "KEY_MOUSE_SCROLLDOWN",
        detail: "Key Code: Mouse Scroll Down",
        documentation: "Specifies scrolling down on the mouse wheel."
    },
    {
        name: "KEY_BACKSPACE",
        detail: "Key Code: Backspace",
        documentation: "Specifies the Backspace key."
    },
    {
        name: "KEY_TAB",
        detail: "Key Code: Tab",
        documentation: "Specifies the Tab key."
    },
    {
        name: "KEY_ENTER",
        detail: "Key Code: Enter",
        documentation: "Specifies the Enter key."
    },
    {
        name: "KEY_ESCAPE",
        detail: "Key Code: Escape",
        documentation: "Specifies the Escape key."
    },
    {
        name: "KEY_SPACE",
        detail: "Key Code: Space",
        documentation: "Specifies the Space key."
    },
    {
        name: "KEY_F1",
        detail: "Key Code: F1",
        documentation: "Specifies the F1 key."
    },
    {
        name: "KEY_F2",
        detail: "Key Code: F2",
        documentation: "Specifies the F2 key."
    },
    {
        name: "KEY_F3",
        detail: "Key Code: F3",
        documentation: "Specifies the F3 key."
    },
    {
        name: "KEY_F4",
        detail: "Key Code: F4",
        documentation: "Specifies the F4 key."
    },
    {
        name: "KEY_F5",
        detail: "Key Code: F5",
        documentation: "Specifies the F5 key."
    },
    {
        name: "KEY_F6",
        detail: "Key Code: F6",
        documentation: "Specifies the F6 key."
    },
    {
        name: "KEY_F7",
        detail: "Key Code: F7",
        documentation: "Specifies the F7 key."
    },
    {
        name: "KEY_F8",
        detail: "Key Code: F8",
        documentation: "Specifies the F8 key."
    },
    {
        name: "KEY_F9",
        detail: "Key Code: F9",
        documentation: "Specifies the F9 key."
    },
    {
        name: "KEY_F10",
        detail: "Key Code: F10",
        documentation: "Specifies the F10 key."
    },
    {
        name: "KEY_F11",
        detail: "Key Code: F11",
        documentation: "Specifies the F11 key."
    },
    {
        name: "KEY_F12",
        detail: "Key Code: F12",
        documentation: "Specifies the F12 key."
    },
    {
        name: "KEY_UP",
        detail: "Key Code: Up Arrow",
        documentation: "Specifies the Up Arrow key."
    },
    {
        name: "KEY_DOWN",
        detail: "Key Code: Down Arrow",
        documentation: "Specifies the Down Arrow key."
    },
    {
        name: "KEY_LEFT",
        detail: "Key Code: Left Arrow",
        documentation: "Specifies the Left Arrow key."
    },
    {
        name: "KEY_RIGHT",
        detail: "Key Code: Right Arrow",
        documentation: "Specifies the Right Arrow key."
    },
    {
        name: "KEY_INSERT",
        detail: "Key Code: Insert",
        documentation: "Specifies the Insert key."
    },
    {
        name: "KEY_DELETE",
        detail: "Key Code: Delete",
        documentation: "Specifies the Delete key."
    },
    {
        name: "KEY_HOME",
        detail: "Key Code: Home",
        documentation: "Specifies the Home key."
    },
    {
        name: "KEY_END",
        detail: "Key Code: End",
        documentation: "Specifies the End key."
    },
    {
        name: "KEY_PAGEUP",
        detail: "Key Code: Page Up",
        documentation: "Specifies the Page Up key."
    },
    {
        name: "KEY_PAGEDOWN",
        detail: "Key Code: Page Down",
        documentation: "Specifies the Page Down key."
    },
    {
        name: "KEY_CAPS",
        detail: "Key Code: Caps Lock",
        documentation: "Specifies the Caps Lock key."
    },
    {
        name: "KEY_SHIFT",
        detail: "Key Code: Shift",
        documentation: "Specifies the Shift key."
    },
    {
        name: "KEY_CTRL",
        detail: "Key Code: Ctrl",
        documentation: "Specifies the Ctrl key."
    },
    {
        name: "KEY_ALT",
        detail: "Key Code: Alt",
        documentation: "Specifies the Alt key."
    },
    {
        name: "KEY_MENU",
        detail: "Key Code: Menu",
        documentation: "Specifies the Menu key."
    },
    {
        name: "KEY_UNKNOWN",
        detail: "Key Code: Unknown",
        documentation: "Specifies an unknown key (system virtual key code)."
    },    
    {
        name: "QA_NONE",
        detail: "Quit Action: None",
        documentation: "Specifies no action on quit."
    },
    {
        name: "QA_CLOSE_VM",
        detail: "Quit Action: Close Virtual Machine",
        documentation: "Specifies closing the current virtual machine on quit."
    }
];

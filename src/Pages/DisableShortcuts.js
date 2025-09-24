// src/DisableShortcuts.js
import { useEffect } from "react";

function DisableShortcuts() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();

    // Disable text selection
    const handleSelectStart = (e) => e.preventDefault();

    // Disable copy/cut/paste/drag
    const blockEvent = (e) => e.preventDefault();

    // Disable all keyboard shortcuts
    const handleKeyDown = (e) => {
      // Block ALL key combos with Ctrl, Shift, Alt, Meta (Command ⌘)
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
        e.preventDefault();
      }

      // Block common function keys
      const blockedKeys = ["F12", "F11", "F10", "F9", "F8", "F7"];
      if (blockedKeys.includes(e.key)) {
        e.preventDefault();
      }
    };

    // Attach listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("copy", blockEvent);
    document.addEventListener("cut", blockEvent);
    document.addEventListener("paste", blockEvent);
    document.addEventListener("dragstart", blockEvent);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("copy", blockEvent);
      document.removeEventListener("cut", blockEvent);
      document.removeEventListener("paste", blockEvent);
      document.removeEventListener("dragstart", blockEvent);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}

export default DisableShortcuts;

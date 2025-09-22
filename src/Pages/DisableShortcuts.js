// src/DisableShortcuts.js
import { useEffect } from "react";

function DisableShortcuts() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable specific keyboard shortcuts
    const handleKeyDown = (e) => {
      // 🔹 Block F12 (DevTools)
      if (e.key === "F12") {
        e.preventDefault();
      }

      // 🔹 Block Ctrl+Shift+I / J / C (Inspect, Console, Elements)
      if (e.ctrlKey && e.shiftKey) {
        const blockedShiftKeys = ["i", "j", "c"];
        if (blockedShiftKeys.includes(e.key.toLowerCase())) {
          e.preventDefault();
        }
      }

      // 🔹 Block Ctrl/⌘ + common shortcuts
      if (e.ctrlKey || e.metaKey) {
        const blockedKeys = [
          "a", // Select all
          "c", // Copy
          "v", // Paste
          "s", // Save
          "p", // Print
          "u", // View source
          "+", // Zoom in
          "-", // Zoom out
          "0", // Reset zoom
          "=", // Also covers Ctrl+= for zoom
        ];

        if (blockedKeys.includes(e.key.toLowerCase())) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // This component doesn’t render anything
}

export default DisableShortcuts;

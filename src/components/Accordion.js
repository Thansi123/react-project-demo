import React, { useState } from "react";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded p-2">
      <button
        className="w-full text-left font-semibold text-gray-700"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>
      {open && <div className="mt-2 text-gray-600">{children}</div>}
    </div>
  );
}

export default Accordion;

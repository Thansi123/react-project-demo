import React, { useState } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState({ text: "", sentiment: "Positive" });

  const handleChange = (e) =>
    setFeedback({ ...feedback, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted: ${feedback.text} (${feedback.sentiment})`);
  };

  return (
    <section className="p-6 mt-16 max-w-md mx-auto bg-white shadow rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
        Submit Feedback
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          name="text"
          placeholder="Your feedback"
          className="w-full border rounded p-2"
          onChange={handleChange}
          required
        />
        <select
          name="sentiment"
          className="w-full border rounded p-2"
          onChange={handleChange}
        >
          <option>Positive</option>
          <option>Negative</option>
          <option>Neutral</option>
        </select>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white px-3 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Feedback;

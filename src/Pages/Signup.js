import React, { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "founder",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signup for ${form.username} completed!`);
  };

  return (
    <section className="p-6 mt-16 max-w-md mx-auto bg-white shadow rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full border rounded p-2"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border rounded p-2"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border rounded p-2"
          onChange={handleChange}
          required
        />
        <select
          name="role"
          className="w-full border rounded p-2"
          onChange={handleChange}
        >
          <option value="founder">Founder</option>
          <option value="investor">Investor</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          disabled
          className="w-full bg-gray-400 text-white px-3 py-2 rounded cursor-not-allowed"
        >
          Sign Up 
        </button>
      </form>
    </section>
  );
}

export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield } from "lucide-react";

function AdminLogin() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin login submitted:", formData);
    // TODO: Add your admin login API here
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 via-yellow-600 to-gray-800 animate-gradient px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition duration-500 hover:scale-105">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2 flex items-center justify-center gap-2">
          <Shield size={28} className="text-yellow-600" />
          Admin Login
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Secure access to the admin panel 🔐
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Admin username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Admin password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-yellow-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white py-2 rounded-lg shadow-lg hover:opacity-90 hover:scale-105 transition transform"
          >
            Login as Admin
          </button>
        </form>

        {/* Back to Login Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          <button
            onClick={() => navigate("/login")}
            className="text-yellow-600 font-semibold hover:underline"
          >
            Back to Login
          </button>
        </p>
      </div>
    </section>
  );
}

export default AdminLogin;

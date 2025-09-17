import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, X } from "lucide-react";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  // Delete Account states
  const [deletePassword, setDeletePassword] = useState("");
  const [showDeletePassword, setShowDeletePassword] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Reset Password handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Forgot Password Data:", formData);
    // TODO: Call Reset Password API
  };

  // ✅ Delete Account handler
  const handleDelete = (e) => {
    e.preventDefault();

    if (!deletePassword) {
      alert("Please enter your password to delete the account.");
      return;
    }

    const payload = {
      email: formData.email, // auto-use entered email
      password: deletePassword,
    };

    console.log("Delete Account Request:", payload);
    // TODO: Call Delete Account API

    setIsDeleteModalOpen(false); // close modal after submit
    setDeletePassword(""); // reset
  };

  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* ✅ Background gradient animation (same as login) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-yellow-500 to-yellow-500 animate-gradient-diagonal z-0"></div>

      {/* Main Card */}
      <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition-all duration-500 hover:scale-105 animate-fadeIn z-10">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-white mb-4 animate-pulse">
          Reset Your Password 🔑
        </h2>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Enter your details below to reset your password securely
        </p>

        {/* Reset Password Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-white text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              placeholder="Enter your email"
            />
          </div>

          {/* OTP */}
          <div>
            <label className="block text-white text-sm">OTP</label>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              placeholder="Enter OTP"
            />
          </div>

          {/* New Password */}
          <div className="relative">
            <label className="block text-white text-sm">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 rounded-lg px-4 py-2 pr-10 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              placeholder="Enter new password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400 hover:text-yellow-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-white text-sm">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 rounded-lg px-4 py-2 pr-10 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              placeholder="Confirm new password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 text-gray-400 hover:text-yellow-600"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white py-2 rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Reset Password
          </button>
        </form>

        {/* Delete Account Trigger */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsDeleteModalOpen(true)}
            className="text-gray-200 font-semibold hover:underline"
          >
            Delete My Account
          </button>
        </div>

        {/* Back to Login */}
        <p className="text-sm text-gray-300 text-center mt-6">
          Remembered your password?{" "}
          <Link to="/login" className="text-yellow-400 font-semibold hover:underline">
            Back to Login
          </Link>
        </p>
      </div>

      {/* ✅ Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl shadow-xl p-6 w-full max-w-sm relative">
            {/* Close */}
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-white text-center mb-4">
              Confirm Delete ❌
            </h3>
            <p className="text-sm text-gray-300 text-center mb-4">
              This action is irreversible. Enter your password to delete your account.
            </p>

            <form onSubmit={handleDelete} className="space-y-4">
              {/* Email (auto-filled) */}
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full border border-gray-700 bg-gray-800 rounded-lg px-4 py-2 text-gray-400"
              />

              {/* Password */}
              <div className="relative">
                <input
                  type={showDeletePassword ? "text" : "password"}
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                  required
                  className="w-full border border-gray-700 rounded-lg px-4 py-2 pr-10 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowDeletePassword(!showDeletePassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-red-500"
                >
                  {showDeletePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Delete Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-800 to-red-600 text-white py-2 rounded-lg shadow-lg hover:opacity-90 transition"
              >
                Delete Account
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          .animate-pulse {
            animation: pulse 2s infinite;
          }
          @keyframes gradientDiagonal {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
          }
          .animate-gradient-diagonal {
            background-size: 300% 300%;
            animation: gradientDiagonal 15s ease infinite;
          }
        `}
      </style>
    </section>
  );
}

export default ForgotPassword;

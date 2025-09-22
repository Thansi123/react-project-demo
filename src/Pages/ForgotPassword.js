import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Send OTP handler
  const handleSendOtp = () => {
    if (!formData.email) {
      alert("Please enter your email first.");
      return;
    }

    // Mock API call
    console.log("Sending OTP to:", formData.email);
    alert("📩 OTP has been sent to your email!");
    setOtpSent(true);
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

  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* ✅ Background gradient animation */}
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

          {/* OTP with Send Button */}
          <div>
            <label className="block text-white text-sm">OTP</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                required
                className="flex-1 border border-gray-600 rounded-lg px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                placeholder="Enter OTP"
              />
              <button
                type="button"
                onClick={handleSendOtp}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  otpSent
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-yellow-500 text-gray-900 hover:bg-yellow-600"
                }`}
              >
                {otpSent ? "Resend" : "Send"}
              </button>
            </div>
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

        {/* Back to Login */}
        <p className="text-sm text-gray-300 text-center mt-6">
          Remembered your password?{" "}
          <Link
            to="/login"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Back to Login
          </Link>
        </p>
      </div>

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

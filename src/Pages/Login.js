import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Lock } from "lucide-react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "founder",
  });

  const [changePasswordData, setChangePasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangePasswordChange = (e) => {
    setChangePasswordData({
      ...changePasswordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // TODO: Add login API
    // Example: navigate("/dashboard");
  };

  const handleChangePasswordSubmit = (e) => {
    e.preventDefault();

    if (changePasswordData.newPassword !== changePasswordData.confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }

    const payload = {
      email: formData.email, // auto-filled
      oldPassword: changePasswordData.oldPassword,
      newPassword: changePasswordData.newPassword,
    };

    console.log("Change Password Submitted:", payload);
    // TODO: Call Change Password API
  };

  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* Background gradient animation (Grey → Golden) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-yellow-500 to-yellow-500 animate-gradient-diagonal z-0"></div>

      {/* Login Card */}
      <div className="bg-gray-900 shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl transform transition duration-500 hover:scale-105 animate-fadeIn z-10">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-white mb-6 animate-pulse">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Please login to continue to your account
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-white text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:border-yellow-400 bg-gray-800 text-white placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white text-sm mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-600 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:border-yellow-400 bg-gray-800 text-white placeholder-gray-400"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-yellow-600 transition-colors duration-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {/* Forgot Password */}
            <p className="text-sm text-right mt-1">
              <Link
                to="/forgot-password"
                className="text-yellow-400 hover:underline transition-colors duration-300"
              >
                Forgot Password?
              </Link>
            </p>
          </div>

          {/* Role */}
          <div>
            <label className="block text-white text-sm mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:border-yellow-400 bg-gray-800 text-white"
              required
            >
              <option value="founder" className="text-white">Founder</option>
              <option value="investor" className="text-white">Investor</option>
              <option value="admin" className="text-white">Admin</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white py-2 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Register Now */}
        <p className="text-sm text-gray-300 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-yellow-400 font-semibold hover:underline transition-colors duration-300"
          >
            Register now
          </Link>
        </p>

        {/* Admin Login */}
        <p className="text-sm text-gray-300 text-center mt-2">
          Admins use{" "}
          <Link
            to="/admin-login"
            className="text-yellow-400 font-semibold hover:underline transition-colors duration-300"
          >
            Admin Login
          </Link>
        </p>

        {/* Change Password Section */}
        <div className="mt-8">
          <button
            onClick={() => setShowChangePassword(!showChangePassword)}
            className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <Lock size={18} />
            Change Password
          </button>

          {showChangePassword && (
            <form
              onSubmit={handleChangePasswordSubmit}
              className="mt-6 space-y-4 border-t border-gray-700 pt-6"
            >
              {/* Email (auto-filled) */}
              <div>
                <label className="block text-sm font-medium text-white">
                  Email (Auto-filled)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-800 text-white cursor-not-allowed"
                />
              </div>

              {/* Old Password */}
              <div>
                <label className="block text-sm font-medium text-white">
                  Old Password
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  value={changePasswordData.oldPassword}
                  onChange={handleChangePasswordChange}
                  required
                  className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:border-yellow-400 bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Enter old password"
                />
              </div>

              {/* New Password */}
              <div className="relative">
                <label className="block text-sm font-medium text-white">
                  New Password
                </label>
                <input
                  type={showNewPassword ? "text" : "password"}
                  name="newPassword"
                  value={changePasswordData.newPassword}
                  onChange={handleChangePasswordChange}
                  required
                  className="w-full border border-gray-600 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:border-yellow-400 bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-yellow-600 transition-colors duration-300"
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Confirm New Password */}
              <div className="relative">
                <label className="block text-sm font-medium text-white">
                  Confirm New Password
                </label>
                <input
                  type={showConfirmNewPassword ? "text" : "password"}
                  name="confirmNewPassword"
                  value={changePasswordData.confirmNewPassword}
                  onChange={handleChangePasswordChange}
                  required
                  className="w-full border border-gray-600 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:border-yellow-400 bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-yellow-600 transition-colors duration-300"
                >
                  {showConfirmNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white py-2 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
              >
                Update Password
              </button>
            </form>
          )}
        </div>
      </div>

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

export default Login;

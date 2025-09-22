import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    // Fake success
    alert("✅ Signed up with Google as Investor!");
    localStorage.setItem("isSignedUp", "true"); // mock signup flag
    localStorage.setItem("role", "Investor");   // store role
    navigate("/login"); // 👉 redirect to login page after signup
  };

  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-yellow-500 to-yellow-500 animate-gradient-diagonal z-0"></div>

      {/* Signup Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center transform transition duration-500 hover:scale-105 animate-fadeIn z-10">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Create an Account ✨
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Sign up quickly using Google
        </p>

        {/* Fixed Role Field */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <input
            type="text"
            value="Investor"
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Google Sign Up Button */}
        <button
          onClick={handleGoogleSignup}
          className="flex items-center justify-center w-full border border-gray-300 rounded-lg px-4 py-3 shadow-md hover:bg-gray-100 transition"
        >
          <FcGoogle size={24} className="mr-3" />
          <span className="font-semibold text-gray-700">
            Sign Up with Google
          </span>
        </button>

        {/* Already have an account */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-yellow-600 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.6s ease-in-out; }
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

export default Signup;

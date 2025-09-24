// src/Pages/Login.js
import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);

      // Save login info
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(userCredential.user));

      // Redirect after login
      const redirectPath = location.state?.from || "/dashboard";
      navigate(redirectPath, { replace: true });
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-yellow-500 to-yellow-500 animate-gradient-diagonal z-0"></div>

      {/* Login Card */}
      <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition-all duration-500 hover:scale-105 animate-fadeIn z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white mb-2 animate-pulse">
            Welcome Back 👋
          </h2>
          <p className="text-gray-300">Sign in with Google to continue</p>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 py-3 px-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 border border-gray-300 font-medium"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to our{" "}
          <Link to="/terms" className="text-yellow-400 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-yellow-400 hover:underline">
            Privacy Policy
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
          button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
          button:active {
            transform: translateY(0);
          }
        `}
      </style>
    </section>
  );
}

export default Login;

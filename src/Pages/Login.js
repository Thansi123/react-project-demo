// src/Pages/Login.js
import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
  microsoftProvider,
  yahooProvider,
  appleProvider,
} from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = async (providerName) => {
    try {
      let userCredential;

      switch (providerName) {
        case "google":
          userCredential = await signInWithPopup(auth, googleProvider);
          break;
        case "facebook":
          userCredential = await signInWithPopup(auth, facebookProvider);
          break;
        case "apple":
          userCredential = await signInWithPopup(auth, appleProvider);
          break;
        case "microsoft":
          userCredential = await signInWithPopup(auth, microsoftProvider);
          break;
        case "twitter":
          userCredential = await signInWithPopup(auth, twitterProvider);
          break;
        case "yahoo":
          userCredential = await signInWithPopup(auth, yahooProvider);
          break;
        default:
          alert("Provider not supported yet.");
          return;
      }

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

      {/* Login Card with animation */}
      <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition-all duration-500 hover:scale-105 animate-fadeIn z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white mb-2 animate-pulse">
            Welcome Back 👋
          </h2>
          <p className="text-gray-300">Choose your preferred login method</p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4">
          {/* Google */}
          <button
            onClick={() => handleSocialLogin("google")}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 py-3 px-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 border border-gray-300 font-medium"
          >
            {/* Google Icon */}
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

          {/* Facebook */}
          <button
            onClick={() => handleSocialLogin("facebook")}
            className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Continue with Facebook
          </button>

          {/* Apple */}
          <button
            onClick={() => handleSocialLogin("apple")}
            className="w-full flex items-center justify-center gap-3 bg-black text-white py-3 px-4 rounded-lg shadow-lg hover:bg-gray-900 transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Continue with Apple
          </button>

          {/* Microsoft */}
          <button
            onClick={() => handleSocialLogin("microsoft")}
            className="w-full flex items-center justify-center gap-3 bg-gray-800 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 0h11v11H0V0zm12 0h12v11H12V0zM0 12h11v12H0V12zm12 0h12v12H12V12z" />
            </svg>
            Continue with Microsoft
          </button>

          {/* Twitter */}
          <button
            onClick={() => handleSocialLogin("twitter")}
            className="w-full flex items-center justify-center gap-3 bg-blue-400 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            Continue with Twitter
          </button>

          {/* Yahoo */}
          <button
            onClick={() => handleSocialLogin("yahoo")}
            className="w-full flex items-center justify-center gap-3 bg-purple-600 text-white py-3 px-4 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.86 1.56L14.28 11.97H14.31L9.69 1.56H6.77L12.72 14.22L12.68 14.28L6.77 22.44H9.69L14.31 12.03H14.28L18.86 22.44H21.78L15.82 9.78L15.86 9.69L21.78 1.56H18.86Z" />
            </svg>
            Continue with Yahoo
          </button>
        </div>

       

        

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

          /* Button hover effects */
          button {
            transition: all 0.3s ease;
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

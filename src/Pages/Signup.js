import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Upload, Camera, Trash2, Eye, EyeOff } from "lucide-react";

// Country list
const countries = [
  { name: "United Arab Emirates", code: "+971" },
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Germany", code: "+49" },
  { name: "Australia", code: "+61" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Qatar", code: "+974" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Bangladesh", code: "+880" },
  { name: "Nepal", code: "+977" },
  { name: "Sri Lanka", code: "+94" },
  { name: "China", code: "+86" },
  { name: "Japan", code: "+81" },
  { name: "South Korea", code: "+82" },
  { name: "Singapore", code: "+65" },
  { name: "Malaysia", code: "+60" },
  { name: "Indonesia", code: "+62" },
  { name: "Philippines", code: "+63" },
  { name: "Thailand", code: "+66" },
  { name: "Vietnam", code: "+84" },
  { name: "Egypt", code: "+20" },
  { name: "South Africa", code: "+27" },
  { name: "Kenya", code: "+254" },
  { name: "Nigeria", code: "+234" },
  { name: "Turkey", code: "+90" },
  { name: "Russia", code: "+7" },
  { name: "France", code: "+33" },
  { name: "Italy", code: "+39" },
  { name: "Spain", code: "+34" },
  { name: "Brazil", code: "+55" },
  { name: "Mexico", code: "+52" },
  { name: "Argentina", code: "+54" },
  { name: "Chile", code: "+56" },
  { name: "Colombia", code: "+57" },
  { name: "New Zealand", code: "+64" },
];

function Signup() {
  const [formData, setFormData] = useState({
    userType: "Founder",
    fullName: "",
    dob: "",
    gender: "Male",
    nationality: "",
    country: "United Arab Emirates",
    countryCode: "+971",
    mobile: "",
    confirmMobile: "",
    email: "",
    residentType: "UAE Resident",
    password: "",
    confirmPassword: "",
    profilePhoto: null,
    passportFile: null,
    passportNumber: "",
    passportExpiry: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else if (name === "userType") {
      if (value === "Founder") {
        setFormData({
          ...formData,
          userType: value,
          country: "United Arab Emirates",
          countryCode: "+971",
        });
      } else {
        setFormData({
          ...formData,
          userType: value,
          country: "",
          countryCode: "",
        });
      }
    } else if (name === "country") {
      const selectedCountry = countries.find((c) => c.name === value);
      setFormData({
        ...formData,
        country: value,
        countryCode: selectedCountry ? selectedCountry.code : "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};
    if (formData.password !== formData.confirmPassword)
      newErrors.password = "Passwords do not match";
    if (formData.mobile !== formData.confirmMobile)
      newErrors.mobile = "Mobile numbers do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    console.log("Signup Payload:", formData);
    alert("Signup successful!");
  };

  return (
    <section className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-yellow-500 to-yellow-500 animate-gradient-diagonal z-0"></div>

      {/* Signup Card */}
      <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-4xl transform transition duration-500 hover:scale-105 animate-fadeIn z-10">
        <h2 className="text-3xl font-extrabold text-center text-white mb-2">
          Create an Account ✨
        </h2>
        <p className="text-center text-gray-300 mb-6 text-sm">
          Fill out the details below to register
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Photo */}
          <div className="col-span-2 text-center">
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Profile Photo
            </label>
            {formData.profilePhoto ? (
              <div className="flex flex-col items-center space-y-3">
                <img
                  src={URL.createObjectURL(formData.profilePhoto)}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border shadow"
                />
                <div className="flex space-x-4">
                  <label className="cursor-pointer bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-700 transition">
                    <Camera size={18} />
                    <span>Change</span>
                    <input
                      type="file"
                      name="profilePhoto"
                      accept="image/*"
                      hidden
                      onChange={handleChange}
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, profilePhoto: null })}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-900 transition"
                  >
                    <Trash2 size={18} />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ) : (
              <label className="cursor-pointer bg-gray-100 px-6 py-3 rounded-lg inline-flex items-center space-x-2 hover:bg-gray-200 transition">
                <Upload size={18} />
                <span>Add Photo</span>
                <input
                  type="file"
                  name="profilePhoto"
                  accept="image/*"
                  hidden
                  onChange={handleChange}
                />
              </label>
            )}
          </div>

          {/* User Type */}
          <div>
            <label className="block text-sm font-medium text-gray-200">User Type</label>
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
            >
              <option value="Founder">Founder</option>
              <option value="Investor">Investor</option>
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Nationality</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Country + Code */}
          <div className="md:col-span-2 grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-200">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                disabled={formData.userType === "Founder"}
                className={`w-full border border-gray-600 rounded-lg p-2 focus:ring-2 focus:ring-yellow-500 bg-gray-800 text-white ${
                  formData.userType === "Founder" ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                <option value="">Select Country</option>
                {countries.map((c, i) => (
                  <option key={i} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-200">Code</label>
              <input
                type="text"
                name="countryCode"
                value={formData.countryCode}
                readOnly
                className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white"
              />
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Confirm Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Confirm Mobile</label>
            <input
              type="tel"
              name="confirmMobile"
              value={formData.confirmMobile}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
            />
            {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
          </div>

          {/* Email */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Resident Type */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-200">Resident Type</label>
            <select
              name="residentType"
              value={formData.residentType}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
            >
              <option value="UAE Resident">UAE Resident</option>
              <option value="Tourist/Visitor">Tourist/Visitor</option>
            </select>
          </div>

          {/* Passport Info */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-white mb-2">Passport Information</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <label className="cursor-pointer bg-gray-800 border border-gray-600 px-6 py-3 rounded-lg inline-flex items-center space-x-2 hover:bg-gray-700 transition text-white">
                <Upload size={18} />
                <span>Upload Passport</span>
                <input
                  type="file"
                  name="passportFile"
                  accept="application/pdf,image/*"
                  hidden
                  onChange={handleChange}
                />
              </label>
              {formData.passportFile && (
                <p className="text-sm text-gray-300 col-span-3">
                  Uploaded: {formData.passportFile.name}
                </p>
              )}
              <input
                type="text"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleChange}
                placeholder="Passport Number"
                className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="date"
                name="passportExpiry"
                value={formData.passportExpiry}
                onChange={handleChange}
                className="w-full border border-gray-600 rounded-lg p-2 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg p-2 pr-10 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400 hover:text-yellow-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-200">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg p-2 pr-10 bg-gray-800 text-white focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 text-gray-400 hover:text-yellow-600"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>

          {/* Submit */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-800 to-yellow-600 text-white py-3 rounded-lg shadow-lg hover:opacity-90 transition"
            >
              Signup
            </button>
          </div>
        </form>

        {/* Already have account */}
        <p className="text-sm text-gray-300 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-400 font-semibold hover:underline">
            Login
          </Link>
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

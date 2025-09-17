import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  // Sample profile data (replace with API call)
  const profileData = {
    fullName: "John Doe",
    age: 30,
    dob: "15/09/1995",
    gender: "Male",
    nationality: "UAE",
    userType: "Founder",
    accountType: "UAE Resident",
    mobile: "+971 50 123 4567",
    email: "john@example.com",
    passportNo: "ABC123",
    expiryDate: "15/09/2030",
    expiringIn: "5 years",
    accountCreateTime: "16 Sep 2025, 02:34 PM IST",
    lastLoginTime: "16 Sep 2025, 02:34 PM IST",
    profilePhoto: "https://via.placeholder.com/150", // Placeholder image
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">EternalShares</h1>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-orange-600">Home</Link>
            <Link to="/projects" className="text-gray-600 hover:text-orange-600">Projects</Link>
            <Link to="/start-project" className="text-gray-600 hover:text-orange-600">Start Project</Link>
            <Link to="/login" className="text-gray-600 hover:text-orange-600">Login</Link>
            <Link to="/signup" className="text-gray-600 hover:text-orange-600">Sign Up</Link>
            <Link to="/profile" className="text-gray-600 hover:text-orange-600">Profile</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4">
        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">User Profile</h2>

          {/* Profile Card */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Photo */}
            <div className="w-40 h-40 mx-auto md:mx-0">
              <img
                src={profileData.profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-orange-500"
              />
            </div>

            {/* Profile Details */}
            <div className="w-full space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 font-medium">Full Name:</p>
                  <p className="text-gray-800">{profileData.fullName}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Age (DOB):</p>
                  <p className="text-gray-800">{profileData.age} ({profileData.dob})</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Gender:</p>
                  <p className="text-gray-800">{profileData.gender}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Nationality:</p>
                  <p className="text-gray-800">{profileData.nationality}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">User Type:</p>
                  <p className="text-gray-800">{profileData.userType}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Account Type:</p>
                  <p className="text-gray-800">{profileData.accountType}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Mobile:</p>
                  <p className="text-gray-800">{profileData.mobile}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Email:</p>
                  <p className="text-gray-800">{profileData.email}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Passport No.:</p>
                  <p className="text-gray-800">{profileData.passportNo}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Expiry Date (Expiring In):</p>
                  <p className="text-gray-800">{profileData.expiryDate} ({profileData.expiringIn})</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Account Created:</p>
                  <p className="text-gray-800">{profileData.accountCreateTime}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">Last Login:</p>
                  <p className="text-gray-800">{profileData.lastLoginTime}</p>
                </div>
              </div>

              {/* Edit Profile Button */}
              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="bg-gradient-to-r from-gray-800 via-gray-700 to-orange-600 text-white py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-200 font-semibold"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
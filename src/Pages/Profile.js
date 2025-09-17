import React, { useEffect, useState } from "react";
import { User, Mail, Phone, Globe, Calendar, Clock } from "lucide-react";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // TODO: Replace with your API endpoint
    fetch("http://localhost:5000/api/profile") 
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  if (!profile) {
    return <p className="text-center mt-20 text-gray-600">Loading profile...</p>;
  }

  return (
    <section className="p-6 mt-16 max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        User Profile
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Profile Image */}
        <img
          src={profile.photo || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-yellow-500"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900">{profile.fullName}</h3>
          <p className="text-gray-600">{profile.userType} • {profile.accountType}</p>
          <p className="text-gray-500 text-sm">Nationality: {profile.nationality}</p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="font-semibold text-gray-700">📅 Date of Birth:</p>
          <p>{profile.dob}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="font-semibold text-gray-700">🎂 Age:</p>
          <p>{profile.age} years</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="font-semibold text-gray-700">⚥ Gender:</p>
          <p>{profile.gender}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="font-semibold text-gray-700">📱 Mobile:</p>
          <p>{profile.mobile}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="font-semibold text-gray-700">📧 Email:</p>
          <p>{profile.email}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="font-semibold text-gray-700">🛂 Passport No:</p>
          <p>{profile.passportNo}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="font-semibold text-gray-700">📆 Expiry Date:</p>
          <p>{profile.passportExpiry}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="font-semibold text-gray-700">⏳ Expiring In:</p>
          <p>{profile.expiringIn}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="font-semibold text-gray-700">🕒 Account Created:</p>
          <p>{profile.createdAt}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <p className="font-semibold text-gray-700">🔑 Last Login:</p>
          <p>{profile.lastLogin}</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;

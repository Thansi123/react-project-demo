import React from "react";

const DoctorAvatar = ({ size = 100, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`doctor-avatar ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Face */}
      <circle cx="50" cy="50" r="45" fill="#F9D9AB" />
      
      {/* Hair */}
      <path d="M30,35 Q50,25 70,35 Q65,45 50,40 Q35,45 30,35" fill="#333" />
      
      {/* White Coat */}
      <path d="M30,55 L30,85 L70,85 L70,55 L60,55 L60,70 L40,70 L40,55 Z" fill="white" />
      <path d="M40,55 L40,70 L60,70 L60,55" fill="#E6E6E6" />
      
      {/* Blue Scrubs Top */}
      <path d="M35,55 L35,65 L40,65 L40,55 Z" fill="#4A86E8" />
      <path d="M60,55 L60,65 L65,65 L65,55 Z" fill="#4A86E8" />
      
      {/* Neck */}
      <rect x="45" y="55" width="10" height="5" fill="#F9D9AB" />
      
      {/* Stethoscope */}
      <path d="M45,60 Q40,65 35,70 Q30,75 30,80 Q35,78 40,75 Q45,72 50,70 Q55,72 60,75 Q65,78 70,80 Q70,75 65,70 Q60,65 55,60" 
            fill="none" stroke="#4A86E8" strokeWidth="2" />
      <circle cx="30" cy="80" r="5" fill="#4A86E8" />
      <circle cx="70" cy="80" r="5" fill="#4A86E8" />
      
      {/* Eyes */}
      <circle cx="40" cy="45" r="5" fill="white" />
      <circle cx="60" cy="45" r="5" fill="white" />
      <circle cx="42" cy="45" r="2" fill="#333" />
      <circle cx="58" cy="45" r="2" fill="#333" />
      
      {/* Glasses */}
      <rect x="32" y="40" width="16" height="10" rx="2" fill="none" stroke="#333" strokeWidth="1" />
      <rect x="52" y="40" width="16" height="10" rx="2" fill="none" stroke="#333" strokeWidth="1" />
      <line x1="48" y1="45" x2="52" y2="45" stroke="#333" strokeWidth="1" />
      
      {/* Smile */}
      <path d="M40,60 Q50,65 60,60" fill="none" stroke="#333" strokeWidth="1.5" />
      
      {/* Medical Cross Symbol */}
      <rect x="47" y="65" width="6" height="6" fill="#E53935" />
      <rect x="49" y="63" width="2" height="10" fill="white" />
      <rect x="45" y="67" width="10" height="2" fill="white" />
    </svg>
  );
};

export default DoctorAvatar;
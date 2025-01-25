import React from "react";

const SocialButton = ({ href, icon: Icon, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center justify-center p-3 transition-all duration-300 ease-in-out ${className}`}
    >
      {/* Icon with constant white glow on hover */}
      <Icon className="w-10 h-8 text-white transition-all duration-300 social-icon" />
    </a>
  );
};

export default SocialButton;

// src/components/Login.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Login = ({ onClose }) => {
    const handleAppleLogin = () => {
        // Implement your Apple login logic here
        console.log("Continue with Apple clicked");
    };

    const handleFacebookLogin = () => {
        // Implement your Facebook login logic here
        console.log("Facebook login clicked");
    };

    const handleGoogleLogin = () => {
        // Implement your Google login logic here
        console.log("Google login clicked");
    };

    const handleEmailLogin = () => {
        // Implement your Email login flow here (e.g., show an email/password form)
        console.log("Email login clicked");
        // You might want to manage a different state here to show an email form
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl w-[95%] max-w-md relative shadow-lg">
                <button
                    className="absolute right-5 top-5 text-gray-500 hover:text-black focus:outline-none"
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                </button>

                <div className="flex justify-center mb-6">
                    <span className="text-3xl font-semibold text-[#007aff]">Skyscanner</span>
                </div>

                <h2 className="text-2xl font-semibold text-center text-black mb-5">Get the full experience</h2>
                <p className="text-lg text-gray-700 text-center mb-8">
                    Track prices, make trip planning easier and enjoy faster booking.
                </p>

                <button
                    onClick={handleAppleLogin}
                    className="w-full bg-black text-white py-4 rounded-md mb-3 flex items-center justify-center gap-3 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-colors duration-200 hover:bg-gray-800"
                >
                    <FontAwesomeIcon icon={faApple} size="lg" />
                    Continue with Apple
                </button>

                <button
                    onClick={handleFacebookLogin}
                    className="w-full bg-[#1877F2] text-white py-4 rounded-md mb-2 flex items-center justify-center gap-3 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 hover:bg-[#1565C0]"
                >
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                    Facebook
                </button>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full bg-[#DB4437] text-white py-4 rounded-md mb-2 flex items-center justify-center gap-3 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200 hover:bg-[#C53929]"
                >
                    <FontAwesomeIcon icon={faGoogle} size="lg" />
                    Google
                </button>

                <button
    onClick={handleEmailLogin}
    className="w-full bg-white text-gray-700 py-4 rounded-md mb-2 flex items-center justify-center gap-3 text-lg font-medium border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-200 hover:bg-gray-100"
>
    <FontAwesomeIcon icon={faEnvelope} size="lg" />
    Email
</button>

                <div className="flex items-center gap-2 mt-4">
                    <input
                        type="checkbox"
                        id="remember"
                        className="form-checkbox h-5 w-5 text-blue-500 focus:ring-blue-500 rounded border-gray-300"
                    />
                    <label htmlFor="remember" className="text-lg text-gray-700">
                        Remember me
                    </label>
                </div>

                <p className="text-sm text-gray-600 mt-5 text-center">
                    By continuing you agree to our{" "}
                    <a href="#" className="text-blue-600 underline">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 underline">
                        Privacy Policy
                    </a>.
                </p>
            </div>
        </div>
    );
};

export default Login;
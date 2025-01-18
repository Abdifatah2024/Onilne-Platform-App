// export default RegisterPage;
import { useState } from "react";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Password Mismatch",
        text: "Your passwords do not match. Please try again.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Registration Successful",
      text: `Welcome, ${name}! Your account has been created.`,
    });

    // Reset form (Optional)
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Create Your Account</h1>
          <p className="text-gray-500">Join us today for a better experience</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Register
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            <i className="fab fa-facebook-f mr-2"></i> Sign up with Facebook
          </button>
          <button className="flex items-center justify-center w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900">
            <i className="fab fa-google mr-2"></i> Sign up with Google
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

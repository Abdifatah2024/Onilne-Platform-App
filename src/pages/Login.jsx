// 
import React from 'react';
import Swal from 'sweetalert2';

const Login = () => {
  const handleLoginSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Retrieve user inputs
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Validate user input
    if (email && password) {
      // Show success notification
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        html: `
          <p>Welcome back, <strong>${email}</strong>!</p>
          <p>You have successfully logged in.</p>
        `,
        confirmButtonColor: '#ff6600',
      });

      // Reset form (optional)
      event.target.reset();
    } else {
      // Show error notification if fields are empty
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Please enter both your email and password to log in.',
        confirmButtonColor: '#ff6600',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        {/* Logo or Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-orange-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            <i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook
          </button>
          <button className="flex items-center justify-center w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900">
            <i className="fab fa-google mr-2"></i> Sign in with Google
          </button>
        </div>

        {/* Bottom Signup Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <a href="#" className="text-orange-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

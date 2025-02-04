import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const Login = () => {
  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Validation Schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    const { email } = values;

    // Success notification
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      html: ` 
        <p>Welcome back, <strong>${email}</strong>!</p>
        <p>You have successfully logged in.</p>
      `,
      confirmButtonColor: '#ff6600',
    });

    // Optionally reset form fields
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        {/* Logo or Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500">Sign in to your account</p>
        </div>

        {/* Formik Form */}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-6 relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field
                  type={showPassword ? 'text' : 'password'} // Toggle between text and password
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />

                {/* Password visibility toggle */}
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
                      <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12.5A3.5 3.5 0 0011.5 9C9.5 9 8 7.5 8 5.5A3.5 3.5 0 005.5 2 6 6 0 000 5a6 6 0 006 6h9a6 6 0 006-6 6 6 0 00-6-6 3.5 3.5 0 015 5.5c0 2-1.5 3.5-3.5 3.5z" />
                    </svg> // Eye Slash Icon (Hide)
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
                      <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4a6 6 0 016 6c0 1.745-.697 3.58-1.852 5.02l-1.192-1.61A4.992 4.992 0 0014 10a5 5 0 10-5 5c-.252 0-.493-.056-.725-.161l-1.203 1.614A6.074 6.074 0 0110 16a6 6 0 010-12zm1 9a3 3 0 11-2-5.236A5.975 5.975 0 0010 14z" />
                    </svg> // Eye Icon (Show)
                  )}
                </button>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                  <Field
                    type="checkbox"
                    name="rememberMe"
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
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </button>
            </Form>
          )}
        </Formik>

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

// import React from 'react'

// const ContactUs = () => {
//   return (
// <div className="min-h-screen  bg-gray-100 flex items-center justify-center p-6">
//       <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full overflow-hidden">
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           {/* Left Section */}
//           <div className="bg-[rgb(37,37,40)] text-white flex flex-col items-center justify-center p-8">
//             <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//             <p className="text-lg mb-6 text-center">
//               We'd love to hear from you! Fill out the form, or contact us using the details below.
//             </p>
//             <div className="space-y-4 text-sm">
//               <p>
//                 <strong>Email:</strong> support@example.com
//               </p>
//               <p>
//                 <strong>Phone:</strong> +123 456 7890
//               </p>
//               <p>
//                 <strong>Address:</strong> 123 Orange Lane, Tailwind City
//               </p>
//             </div>
//           </div>

//           {/* Right Section (Form) */}
//           <div className="p-8">
//             <h2 className="text-2xl font-bold mb-6 text-[rgb(37,37,40)]">Contact Us</h2>
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
//                   placeholder="Your Message"
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[rgb(37,37,40)] text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
  

// export default ContactUs

import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    
    // Retrieve form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name && email && message) {
      // Show success notification including the user's message
      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p>Thank you for contacting us! We'll get back to you shortly.</p>
        `,
        confirmButtonColor: '#ff6600',
      });

      // Clear form (optional)
      event.target.reset();
    } else {
      // Show error notification if fields are missing
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields before submitting.',
        confirmButtonColor: '#ff6600',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="bg-[rgb(37,37,40)] text-white flex flex-col items-center justify-center p-8">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg mb-6 text-center">
              We'd love to hear from you! Fill out the form, or contact us using the details below.
            </p>
            <div className="space-y-4 text-sm">
              <p>
                <strong>Email:</strong> support@example.com
              </p>
              <p>
                <strong>Phone:</strong> +123 456 7890
              </p>
              <p>
                <strong>Address:</strong> 123 Orange Lane, Tailwind City
              </p>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-[rgb(37,37,40)]">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(37,37,40)] text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// import React from "react";

// const courses = [
//   {
//     id: 1,
//     title: "Web Development Bootcamp",
//     instructor: "John Doe",
//     progress: 80, // Percentage of progress
//     image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/FSIjaoI2QtKWZL65cogd",
//   },
//   {
//     id: 2,
//     title: "Introduction to Python",
//     instructor: "Jane Smith",
//     progress: 45,
//     image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIVFRUXFxUVFRgXFxUWFRUVFxYWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy8lICYtLS0tMCstLS0tLzUtLS0vLy0tLS8tLSstLS0tLy0tLS0tLy0tLS0tLy0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAEAAECAwUGBwj/xABTEAACAQIEAwQFBggHDgcBAAABAhEAAwQSITEFQVEGEyJhBzJxgZEUI0JSodEVYnKCkrHB8CZEsrO00+EWJCUzQ1NUVXN0k7XC8TQ1Y6KjpNIX/8QAGwEAAwEBAQEBAAAAAAAAAAAAAQIDAAQFBgf/xAAwEQACAgEDAgMIAgEFAAAAAAAAAQIRAxIhMQRBIlGhBRMyYXGBsdGR4fAUI0JSwf/aAAwDAQACEQMRAD8A9x...",
//   },
//   {
//     id: 3,
//     title: "Mastering React",
//     instructor: "Emily Johnson",
//     progress: 65,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s",
//   },
//   {
//     id: 4,
//     title: "Digital Marketing Essentials",
//     instructor: "Michael Brown",
//     progress: 20,
//     image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2022/11/DM_blog_post_image_03_guetzli.jpg",
//   },
//   {
//     id: 5,
//     title: "Data Science with R",
//     instructor: "Sophia Davis",
//     progress: 90,
//     image: "https://media.assettype.com/analyticsinsight%2F2024-07%2Fc8ae2226-856c-4d71-93d1-aa57c264fe58%2FBest_Free_Platforms_to_Learn_R_for_Data_Science.jpg",
//   },
// ];

// const CourseProgressPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Course Progress</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
//           >
//             <img
//               src={course.image}
//               alt={course.title}
//               className="w-full h-40 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-lg font-semibold">{course.title}</h2>
//               <p className="text-sm text-gray-600">By {course.instructor}</p>

//               {/* Progress Bar */}
//               <div className="mt-4">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-sm text-gray-600">
//                     Progress: {course.progress}%
//                   </span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-4">
//                   <div
//                     className="bg-blue-500 h-4 rounded-full"
//                     style={{ width: `${course.progress}%` }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="mt-4">
//                 <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//                   Continue Course
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CourseProgressPage;
import React from "react";

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    instructor: "John Doe",
    progress: 80, // Percentage of progress
    image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/FSIjaoI2QtKWZL65cogd",
  },
  {
    id: 2,
    title: "Introduction to Python",
    instructor: "Jane Smith",
    progress: 45,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s",
  },
  {
    id: 3,
    title: "Mastering React",
    instructor: "Emily Johnson",
    progress: 65,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s",
  },
  {
    id: 4,
    title: "Digital Marketing Essentials",
    instructor: "Michael Brown",
    progress: 20,
    image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2022/11/DM_blog_post_image_03_guetzli.jpg",
  },
  {
    id: 5,
    title: "Data Science with R",
    instructor: "Sophia Davis",
    progress: 90,
    image: "https://media.assettype.com/analyticsinsight%2F2024-07%2Fc8ae2226-856c-4d71-93d1-aa57c264fe58%2FBest_Free_Platforms_to_Learn_R_for_Data_Science.jpg",
  },
];

const CreativeCourseProgressPage = () => {
  return (
    <div className=" min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Track Your Course Progress
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Course Image */}
            <div className="h-40 w-full bg-gray-200">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Progress Bar (Vertical) */}
            <div className="absolute top-4 right-4 w-10 bg-gray-200 rounded-full h-24 flex flex-col justify-end overflow-hidden shadow-inner">
              <div
                className="bg-gradient-to-b from-blue-400 to-blue-600 h-full"
                style={{ height: `${course.progress}%` }}
              ></div>
            </div>

            {/* Course Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                By {course.instructor}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Progress: {course.progress}%
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    course.progress >= 75
                      ? "bg-green-100 text-green-600"
                      : course.progress >= 50
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {course.progress >= 75
                    ? "Almost Done"
                    : course.progress >= 50
                    ? "Halfway"
                    : "Just Started"}
                </span>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Continue Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreativeCourseProgressPage;

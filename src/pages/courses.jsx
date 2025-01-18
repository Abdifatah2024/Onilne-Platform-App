// 
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const initialCourses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    instructor: "John Doe",
    rating: 4.5,
    price: "$49.99",
    image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/FSIjaoI2QtKWZL65cogd",
    completed: false,
  },
  {
    id: 2,
    title: "Introduction to Python",
    instructor: "Jane Smith",
    rating: 4.8,
    price: "$39.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s",
    completed: false,
  },
  {
    id: 3,
    title: "Mastering React",
    instructor: "Emily Johnson",
    rating: 4.7,
    price: "$59.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s",
    completed: false,
  },
  {
    id: 4,
    title: "Digital Marketing Essentials",
    instructor: "Michael Brown",
    rating: 4.6,
    price: "$29.99",
    image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2022/11/DM_blog_post_image_03_guetzli.jpg",
    completed: false,
  },
];

const CoursesPage = () => {
  // State to manage the courses
  const [courses, setCourses] = useState(initialCourses);

  // Mark all courses as completed
  const completeAllCourses = () => {
    const updatedCourses = courses.map((course) => ({
      ...course,
      completed: true,
    }));
    setCourses(updatedCourses);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Courses</h1>
      <Link to="/learning">
        <button className="px-4 py-3 rounded-md bg-blue-500 text-white m-4 hover:bg-blue-600 transition duration-300">
          My Learning
        </button>
      </Link>

      {/* Complete All Button */}
      <button
        onClick={completeAllCourses}
        className="px-4 py-3 rounded-md bg-green-500 text-white m-4 hover:bg-green-600 transition duration-300"
      >
        Complete All Courses
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <animated.div
            key={course.id}
            className={`bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ${
              course.completed ? "border-4 border-green-500" : ""
            }`}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-sm text-gray-600">By {course.instructor}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 font-bold text-sm">
                  {course.rating}★
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  ({Math.floor(course.rating * 200)} reviews)
                </span>
              </div>
              <p className="mt-3 text-lg font-semibold text-blue-600">
                {course.price}
              </p>

              {/* Show completed status */}
              {course.completed && (
                <p className="mt-2 text-green-500 font-bold">Completed</p>
              )}

              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                Enroll Now
              </button>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

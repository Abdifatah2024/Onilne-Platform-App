import { createBrowserRouter } from 'react-router-dom';
import MainRouter from './pages/main';
import Home from './pages/Home';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import RegisterPage from './pages/Register';
import CoursesPage from './pages/courses';
import CourseProgressPage from './pages/Mylearning';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRouter />,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        path: '/Login',
        element: <Login/>
      },
      {
        path: '/contact',
        element: <ContactUs/>
      },
      {
path:'/Register',
element: <RegisterPage/>// Add your Register page component here.
      },
      {
        path: '/courses',
        element: <CoursesPage/>
      },
      {
        path:'/learning',
        element: <CourseProgressPage/>
      }
    ]
  }
]);

export default router;

import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Root from '../root/Root';
import Error from '../pages/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/queries',
        element: <About />,
      },
      {
        path: '/recommendations-for-me',
        element: <About />,
      },
      {
        path: '/my-queries',
        element: <About />,
      },
      {
        path: '/my-recommendations',
        element: <About />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
export default router;

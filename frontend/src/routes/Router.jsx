import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import RegistrationPage from '../pages/RegistrationPage';
import PrivateRoutes from './PrivateRoutes';
const router = createBrowserRouter([
	{
		element: <PrivateRoutes />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/me',
				element: <ProfilePage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegistrationPage />,
	},
	{
		path: '*',
		element: <h1>404 Not Found!!!</h1>,
	},
]);
export default router;

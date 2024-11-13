import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../hooks';
import ProfileProvider from '../providers/ProfileProvider';

const PrivateRoutes = () => {
	const { auth } = useAuth();
	return (
		<div>
			{auth.authToken ? (
				<ProfileProvider>
					<Navbar />
					<main className="mx-auto max-w-[1020px] py-8">
						<div className="container">
							<Outlet />
						</div>
					</main>
				</ProfileProvider>
			) : (
				<Navigate to="/login" />
			)}
		</div>
	);
};

export default PrivateRoutes;

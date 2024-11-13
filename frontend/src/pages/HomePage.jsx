import { Link } from 'react-router-dom';
import { useAuth } from '../hooks';

const HomePage = () => {
	const { auth } = useAuth();
	console.log(auth);
	return (
		<div>
			<h1>Home Page</h1>
			<Link to="/me">Profile</Link>
		</div>
	);
};

export default HomePage;

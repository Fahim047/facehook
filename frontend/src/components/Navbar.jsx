import { Link } from 'react-router-dom';
import HomeIcon from '../assets/icons/home.svg';
import LogoutIcon from '../assets/icons/logout.svg';
import NotificationIcon from '../assets/icons/notification.svg';
import Logo from '../assets/images/logo.svg';
import { useAuth, useProfile } from '../hooks';
const Navbar = () => {
	const { auth } = useAuth();
	const { state } = useProfile();
	const user = state?.user ?? auth?.user;
	return (
		<nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
			<div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
				{/* <!-- Logo --> */}
				<Link to="/">
					<img
						className="max-w-[100px] rounded-full lg:max-w-[130px]"
						src={Logo}
					/>
				</Link>
				{/* <!-- nav links  --> */}

				<div className="flex items-center space-x-4">
					<Link to="/" className="btn-primary">
						<img src={HomeIcon} alt="Home" />
						Home
					</Link>
					<button className="icon-btn">
						<img src={NotificationIcon} alt="Notification" />
					</button>
					<button className="icon-btn">
						<img src={LogoutIcon} alt="Logout" />
					</button>

					<button className="flex-center !ml-8 gap-3">
						<span className="text-lg font-medium lg:text-xl">
							{`${user?.firstName} ${user?.lastName}`}
						</span>
						<img
							className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
							src={`${import.meta.env.VITE_SERVER_URL}/${user.avatar}`}
							alt=""
						/>
					</button>
				</div>
				{/* <!-- nav links ends --> */}
			</div>
		</nav>
	);
};

export default Navbar;

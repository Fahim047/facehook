import { useEffect } from 'react';
import { actions } from '../actions';
import MyPosts from '../components/MyPosts';
import ProfileInfo from '../components/ProfileInfo';
import { useAuth, useAxios, useProfile } from '../hooks';
const ProfilePage = () => {
	const { state, dispatch } = useProfile();
	const { api } = useAxios();
	const { auth } = useAuth();

	useEffect(() => {
		dispatch({
			type: actions.profile.DATA_FETCHING,
		});
		const fetchProfile = async () => {
			try {
				const response = await api.get(
					`${import.meta.env.VITE_SERVER_URL}/profile/${auth?.user?.id}`
				);

				if (response.status === 200) {
					dispatch({
						type: actions.profile.DATA_FETCHED,
						payload: response.data,
					});
				}
			} catch (error) {
				console.log(error);
				dispatch({
					type: actions.profile.DATA_FETCH_ERROR,
					payload: error,
				});
			}
		};
		fetchProfile();
	}, [api, auth?.user?.id]);

	if (state?.loading) return <p>Loading...</p>;

	return (
		<main className="mx-auto max-w-[1020px] py-8">
			<div className="container">
				<ProfileInfo />
				<MyPosts />
			</div>
		</main>
	);
};

export default ProfilePage;

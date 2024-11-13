import { useState } from 'react';
import { actions } from '../actions';
import CheckIcon from '../assets/icons/check.svg';
import EditIcon from '../assets/icons/edit.svg';
import { useAxios, useProfile } from '../hooks';
const Bio = () => {
	const { api } = useAxios();
	const { state, dispatch } = useProfile();
	const [bio, setBio] = useState(state?.user?.bio);
	const [editMode, setEditMode] = useState(false);
	const handleBioUpdate = async () => {
		console.log('updating');
		dispatch({ type: actions.profile.DATA_FETCHING });

		try {
			const response = await api.patch(
				`${import.meta.env.VITE_SERVER_URL}/profile/${state?.user?.id}`,
				{ bio }
			);

			if (response.status === 200) {
				dispatch({
					type: actions.profile.USER_DATA_EDITED,
					payload: response.data,
				});
				setEditMode(false);
			}
		} catch (error) {
			dispatch({ type: actions.profile.DATA_FETCH_ERROR, payload: error });
		}
	};
	return (
		<div className="mt-4 flex items-start gap-2 lg:mt-6">
			<div className="flex-1">
				{editMode ? (
					<textarea
						className="bg-inherit border p-2 rounded-md"
						rows={5}
						cols={40}
						value={bio}
						onChange={(e) => setBio(e.target.value)}
					/>
				) : (
					<p className="leading-[188%] text-gray-400 lg:text-lg">{bio}</p>
				)}
			</div>
			{/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
			{editMode ? (
				<button
					className="flex-center h-7 w-7 rounded-full"
					onClick={handleBioUpdate}
				>
					<img src={CheckIcon} alt="Edit" />
				</button>
			) : (
				<button
					className="flex-center h-7 w-7 rounded-full"
					onClick={() => setEditMode(true)}
				>
					<img src={EditIcon} alt="Edit" />
				</button>
			)}
		</div>
	);
};

export default Bio;

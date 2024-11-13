import { useRef } from 'react';
import { actions } from '../actions';
import EditIcon from '../assets/icons/edit.svg';
import { useAxios, useProfile } from '../hooks';
const ProfileImage = () => {
	const { state, dispatch } = useProfile();
	const { api } = useAxios();
	const fileUploadRef = useRef(null);
	const handleImageUpload = () => {
		fileUploadRef.current.addEventListener('change', updateImageDisplay);
		fileUploadRef.current.click();
	};
	const updateImageDisplay = async () => {
		try {
			const file = fileUploadRef.current.files[0];
			console.log(file);
			const formData = new FormData();
			formData.append('avatar', file);
			const response = await api.post(
				`${import.meta.env.VITE_SERVER_URL}/profile/${state?.user?.id}/avatar`,
				formData
			);
			if (response.status === 200) {
				dispatch({
					type: actions.profile.IMAGE_UPDATED,
					payload: response.data,
				});
			}
		} catch (error) {
			dispatch({ type: actions.profile.DATA_FETCH_ERROR, payload: error });
		}
	};
	return (
		<div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
			<img
				className="max-w-full max-h-40"
				src={`${import.meta.env.VITE_SERVER_URL}/${state?.user?.avatar}`}
				alt={state?.user?.firstName}
			/>

			<button
				className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
				onClick={handleImageUpload}
			>
				<img src={EditIcon} alt="Edit" />
			</button>
			<input ref={fileUploadRef} type="file" id="file" className="hidden" />
		</div>
	);
};

export default ProfileImage;

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import Field from '../shared/Field';
const LoginForm = () => {
	const { auth, setAuth } = useAuth();
	console.log(auth);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const submitForm = async (formData) => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_SERVER_URL}/auth/login`,
				formData
			);
			if (response.status === 200) {
				const { user, token } = response.data;
				if (token) {
					const authToken = token.token;
					const refreshToken = token.refreshToken;
					console.log(`Login successful, token: ${authToken}`);
					setAuth({ user, authToken, refreshToken });
					navigate('/');
				}
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form
			onSubmit={handleSubmit(submitForm)}
			className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
		>
			{/* <!-- email --> */}
			<Field label="Email" error={errors.email}>
				<input
					{...register('email', { required: 'Email is required' })}
					className={`auth-input ${errors.email ? 'border-red-500' : ''}`}
					name="email"
					type="email"
					id="email"
				/>
			</Field>
			{/* <!-- password --> */}
			<Field label="Password" error={errors.password}>
				<input
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 8,
							message: 'Password must be at least 8 characters',
						},
					})}
					className={`auth-input ${errors.email ? 'border-red-500' : ''}`}
					name="password"
					type="password"
					id="password"
				/>
			</Field>
			{/* <!-- Submit --> */}
			<button
				className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
				type="submit"
			>
				Login
			</button>
		</form>
	);
};

export default LoginForm;

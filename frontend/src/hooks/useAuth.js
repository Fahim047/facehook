import { useContext, useDebugValue } from 'react';
import { AuthContext } from '../contexts';

const useAuth = () => {
	const { auth } = useContext(AuthContext);
	useDebugValue(auth, () => (auth?.user ? 'Logged In' : 'Logged Out'));
	return useContext(AuthContext);
};

export default useAuth;

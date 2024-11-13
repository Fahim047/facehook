import { useProfile } from '../hooks';
import PostsList from './posts/PostsList';

const MyPosts = () => {
	const { state } = useProfile();
	const posts = state?.posts;
	return (
		<>
			<h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>
			<PostsList posts={posts} />
		</>
	);
};

export default MyPosts;

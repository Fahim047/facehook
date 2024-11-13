const PostBody = ({ poster, content = 'no content' }) => {
	return (
		<div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
			{/* <!-- If Post has Image, Render this block --> */}
			{poster && (
				<div className="flex items-center justify-center overflow-hidden">
					<img
						className="max-w-full"
						src={`${import.meta.env.VITE_SERVER_URL}/${poster}`}
						alt="poster"
					/>
				</div>
			)}
			<p>{content}</p>
		</div>
	);
};

export default PostBody;

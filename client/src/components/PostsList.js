import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/posts';
import CommentForm from './CommentForm';

const PostsList = () => {
	const [posts, setPosts] = useState({});
	const [loaded, setLoaded] = useState(false);

	const handleFetchPosts = async () => {
		const fetchedPosts = await fetchPosts();
		setPosts(fetchedPosts);
		setLoaded(true);
	};

	const renderedPosts = Object.values(posts).map((post) => (
		<li
			className='card'
			key={post.id}
			style={{ width: '30%', marginBottom: '20px' }}
		>
			<div className='card-body'>
				<h3>{post.title}</h3>
				<CommentForm post_id={post.id} />
			</div>
		</li>
	));

	useEffect(() => {
		handleFetchPosts();
	}, [posts]);

	if (!loaded) {
		return <h3>Loading posts..</h3>;
	}

	if (loaded && Object.values(posts).length === 0) {
		return <h3>No posts created </h3>;
	}

	return (
		<div>
			<h1 className='my-4'>Post lists</h1>

			<ul className='d-flex flex-row flex-wrap justify-content-between'>
				{renderedPosts}
			</ul>
		</div>
	);
};

export default PostsList;

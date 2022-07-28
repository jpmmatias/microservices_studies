import React, { useEffect, useState, useCallback } from 'react';
import { fetchComments } from '../services/comments';

const CommentsList = ({ post_id }) => {
	const [comments, setComments] = useState([]);

	const handleFetchComments = useCallback(async () => {
		const fetchedComments = await fetchComments(post_id);
		setComments(fetchedComments);
	}, [post_id]);

	const renderCommments = comments.map((comment) => (
		<li
			key={`${post_id}${comment.id}`}
			style={{ width: '100%', marginBottom: '20px' }}
		>
			<div className='card-body'>
				<h4>{comment.content}</h4>
			</div>
		</li>
	));

	useEffect(() => {
		handleFetchComments();
	}, [handleFetchComments]);

	if (comments.length === 0) {
		return <h3>No commments created </h3>;
	}

	return (
		<div>
			<h4 className='my-4'>Comments list</h4>

			<ul className='d-flex flex-column flex-wrap justify-content-center align-items-center'>
				{renderCommments}
			</ul>
		</div>
	);
};

export default CommentsList;

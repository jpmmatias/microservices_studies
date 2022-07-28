import React from 'react';

const CommentsList = ({ comments, post_id }) => {
	const renderCommments = comments.map((comment) => {
		if (comment.status === 'rejected') return null;

		return (
			<li
				key={`${post_id}${comment.id}`}
				style={{ width: '100%', marginBottom: '20px' }}
			>
				<div className='card-body'>
					<h4>
						{comment.status === 'approved'
							? comment.content
							: 'Waiting approval'}
					</h4>
				</div>
			</li>
		);
	});

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

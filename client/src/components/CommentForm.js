import React, { useState } from 'react';
import { createComment } from '../services/comments';

const CommentForm = ({ post_id }) => {
	const [content, setContent] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		createComment(content, post_id);
		setContent('');
	};

	return (
		<div>
			<h1 className='my-4'>Create Comment</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className='form-group mb-4'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						className='form-control'
						value={content}
						onChange={({ target: { value } }) => {
							setContent(value);
						}}
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
};

export default CommentForm;

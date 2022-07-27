import React, { useState } from 'react';
import { createPost } from '../services/posts';

const PostForm = () => {
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		createPost(title);
		setTitle('');
	};

	return (
		<div>
			<h1 className='my-4'>Create Post</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className='form-group mb-4'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						className='form-control'
						value={title}
						onChange={({ target: { value } }) => {
							setTitle(value);
						}}
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
};

export default PostForm;

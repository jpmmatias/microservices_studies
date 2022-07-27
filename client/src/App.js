import React from 'react';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';

const App = () => {
	return (
		<div className='container'>
			<PostForm />
			<PostsList />
		</div>
	);
};

export default App;

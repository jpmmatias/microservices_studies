import axios from 'axios';

const createPost = async (title) => {
	try {
		await axios.post('http://posts.com/posts/create', { title });
	} catch (error) {
		console.log(error);
	}
};

const fetchPosts = async () => {
	try {
		const response = await axios.get('posts.com/posts');
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export { createPost, fetchPosts };

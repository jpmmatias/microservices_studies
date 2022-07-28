import axios from 'axios';

const createPost = async (title) => {
	try {
		await axios.post('http://localhost:4000/posts', { title });
	} catch (error) {
		console.log(error);
	}
};

const fetchPosts = async () => {
	try {
		const response = await axios.get('http://localhost:4002/posts');
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export { createPost, fetchPosts };

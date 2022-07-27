import axios from 'axios';

const createPost = async (title) => {
	try {
		const response = await axios.post('http://localhost:4000/posts', { title });
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

const fetchPosts = async () => {
	try {
		const response = await axios.get('http://localhost:4000/posts');
		console.log(Object.values(response.data)[0]);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export { createPost, fetchPosts };

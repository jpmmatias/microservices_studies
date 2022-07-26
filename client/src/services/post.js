import axios from 'axios';

const createPost = async (title) => {
	try {
		const response = await axios.post('http://localhost:4000/posts', { title });
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

export { createPost };

import axios from 'axios';

const createPost = async (title) => {
	try {
		await axios.post('http://localhost:4000/', { title });
	} catch (error) {
		console.log(error);
	}
};

export { createPost };

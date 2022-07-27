import axios from 'axios';

const createComment = async (content, post_id) => {
	try {
		const response = await axios.post(
			`http://localhost:4001/posts/${post_id}/comments`,
			{ content }
		);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};

export { createComment };

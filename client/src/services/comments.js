import axios from 'axios';

const createComment = async (content, post_id) => {
	try {
		await axios.post(`http://localhost:4001/posts/${post_id}/comments`, {
			content,
		});
	} catch (error) {
		console.log(error);
	}
};

export { createComment };

import axios from 'axios';

const createComment = async (content, post_id) => {
	try {
		await axios.post(`http://posts.com/posts/${post_id}/comments`, {
			content,
		});
	} catch (error) {
		console.log(error);
	}
};

export { createComment };

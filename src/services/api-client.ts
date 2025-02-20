import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "dacabcce9ceb45c5bf084c812e636a56",
	},
});

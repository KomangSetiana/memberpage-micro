import axios from "configs/axios";

const upload = (image) => axios.post(`/media`, { image });

export default upload;

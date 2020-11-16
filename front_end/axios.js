import Axios from "axios";

const instance = Axios.create({
    baseURL: "https://my-tiktok-clone.herokuapp.com/"
});

export default instance;
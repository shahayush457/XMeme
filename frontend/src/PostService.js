import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const url = "memes/";

class PostService {
  // Get memes
  static getMemes() {
    return new Promise((resolve, reject) => {
      let data = "";
      axios
        .get(url)
        .then(res => {
          data = res.data;
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Post memes
  static postMemes(info) {
    return axios.post(url, info);
  }
}

export default PostService;

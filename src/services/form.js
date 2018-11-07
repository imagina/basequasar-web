import config from 'src/config/index'
import http from "axios"

export default {

  /**
   * Send data to form
   */
  sendForm(data) {
    return new Promise((resolve, reject) => {
      http.post(config('api.api_url') + '/iform',data)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject([]);
        })
    });
  },
}

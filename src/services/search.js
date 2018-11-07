import config from 'src/config/index'
import http from "axios"

export default {

  /**
   * Send data to form
   */
  search(data) {
    return new Promise((resolve, reject) => {
      http.get(config('api.api_url') + '/isearch',
        {
          params: {
            search : data,
            include : 'category'
          }
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject([]);
        })
    });
  },
}

import axios from 'axios'

class Lights {
    constructor(){
      this.host = 'http://192.168.1.103';
      this.port = '3000';
      this.url = `${this.host}:${this.port}`;
    }

    getDarkModeStatus(){
      return axios.get(`${this.url}/dark`)
          .then(function (response) {
            console.log(response);
            return response.data.isON;
          })
        .catch(function (error) {
          console.log(error);
        });
    }

    getLightModeStatus(){
      return axios.get(`${this.url}/light`)
          .then(function (response) {
            console.log(response);
            return response.data.isON;
          })
        .catch(function (error) {
          console.log(error);
        });
    }

    toggleDarkMode(){  
        axios.post(`${this.url}/dark`)
          .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
          console.log(error);
        });
    }

    toggleLightMode(){  
        axios.post(`${this.url}/light`)
          .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
          console.log(error);
        });
    }
}

export default Lights;
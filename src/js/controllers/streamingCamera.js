import axios from 'axios'

class StreamingCamera {
  constructor(){

    this.gain = 0;
    this.dim = 0;

    this.host = 'http://localhost';
    this.port = '3000';
    this.url = `${this.host}:${this.port}`;
  }

  takePicture(){
      axios.get(`${this.url}/photo`)
        .then(function (response) {
          console.log(response);
        })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default StreamingCamera;
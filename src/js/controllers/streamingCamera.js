import axios from 'axios'

class StreamingCamera {
  constructor(){

    this.gain = 0;
    this.dim = 0;

    this.host = 'http://192.168.1.103';
    this.port = '3000';
    this.url = `${this.host}:${this.port}`;
  }

  takePicture(){
      axios.get('/photo')
        .then(function (response) {
          console.log(response);
        })
      .catch(function (error) {
        console.log(error);
      });
  }

  async setDim(direction, dim){
    this.dim = await axios.post(`${this.url}/dim`, {direction: direction, dim: dim})
      .then(function (response) {
        document.getElementById("dim").value = response.data.currentDim;
        console.log(response);
        return response.data.currentDim;
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  

  async getDim(){
    this.dim = await axios.get(`${this.url}/dim`)
      .then(function (response) {
        document.getElementById("dim").value = response.data.currentDim;
        console.log(response);
        return response.data.currentDim;
      })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  async getGain(){
    this.gain = await axios.get(`${this.url}/gain`)
      .then(function (response) {
        document.getElementById("gain").value = response.data.currentGain;
        console.log(response);
        return response.data.currentGain;
      })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  async setGain(direction, gain){
    this.dim = await axios.post(`${this.url}/gain`, {direction: direction, gain: gain})
      .then(function (response) {
        document.getElementById("gain").value = response.data.currentGain;
        console.log(response);
        return response.data.currentGain;
      })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default StreamingCamera;
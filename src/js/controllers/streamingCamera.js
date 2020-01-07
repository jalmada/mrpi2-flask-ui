import axios from 'axios'

class StreamingCamera {
  constructor(){

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

  setDim(direction, dim){
    axios.post('/dim', {direction: direction, dim: dim})
      .then(function (response) {
        document.getElementById("dim").value = response.data.currentDim;
        console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  getDim(){
    axios.get('/dim')
      .then(function (response) {
        document.getElementById("dim").value = response.data.currentDim;
        console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  getGain(){
    axios.get('/gain')
      .then(function (response) {
        document.getElementById("gain").value = response.data.currentGain;
        console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  setGain(direction, gain){
    axios.post('/gain', {direction: direction, gain: gain})
      .then(function (response) {
        document.getElementById("gain").value = response.data.currentGain;
        console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default StreamingCamera;
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
}

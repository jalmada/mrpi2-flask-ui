import axios from 'axios'

class Lights {
    constructor(){

    }

    toggleDarkMode(){  
        axios.post('/dark')
          .then(function (response) {
            document.getElementById("darkStatus").innerHTML = response.data.isON  ? "ON" : "OFF";
            console.log(response);
          })
        .catch(function (error) {
          console.log(error);
        });
    }

    toggleLightMode(){  
        axios.post('/light')
          .then(function (response) {
            document.getElementById("lightStatus").innerHTML = response.data.isON ? "ON" : "OFF";
            console.log(response);
          })
        .catch(function (error) {
          console.log(error);
        });
    }
}

export default Lights;
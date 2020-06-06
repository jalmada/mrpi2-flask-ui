import axios from 'axios';
import io from 'socket.io-client';

class Servo {
    constructor(){
      //this.host = 'http://locahost';
      this.host = 'http://192.168.1.103';
      this.port = '3000';
      this.url = `${this.host}:${this.port}`;

      this.servoNamespace = `${this.url}/servo`;
      this.socket = io(this.servoNamespace);

      this.currentX = 0;
      this.currentY = 0;
      this.timer = null;
    }

    moveServo (xd, xs, yd, ys){ 
     // Set the timer reference
      this.timer = setInterval(function() {
      this.socket.emit('move', {xstep: xd * xs, ystep: yd * ys});
     }.bind(this), 500);
    }
    
    stopServo (event){ 
      clearInterval(this.timer);
    }

    getStep(){
      console.log("getting step");
      return axios.get(`${this.url}/step`)
          .then(function (response) {
            console.log(response);
            return response.data;
          })
        .catch(function (error) {
          console.log(error);
        });
    }

    setStep(stepx, stepy){

      return axios.post(`${this.url}/step`, {xstep: stepx, ystep: stepy})
        .then(function (response) {
          console.log(response);
          return response.data;
        })
      .catch(function (error) {
        console.log(error);
      });
    }

    moveX(x){
        currentX = x;
        axios.post('/move', {x: x, y: currentY})
          .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
          console.log(error);
        });
      }

    moveY(y){
      currentY = y;
      axios.post('/move', {x: currentX, y: y})
        .then(function (response) {
          console.log(response);
        })
      .catch(function (error) {
        console.log(error);
      });
    }
}

export default Servo;
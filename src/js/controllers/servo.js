import axios from 'axios';
import io from 'socket.io-client';

class Servo {
    constructor(){
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
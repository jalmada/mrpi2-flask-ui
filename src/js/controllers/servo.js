import axios from 'axios';
import io from 'socket.io-client';

class Servo {
    constructor(){
        this.servoNamespace = '/servo';
        this.socket = io(servoNamespace);

        this.currentX = 0;
        this.currentY = 0;
        this.timer = null;
    }

    moveServo (xd, xs, yd, ys){ 
     // Set the timer reference
      this.timer = setInterval(function() {
      socket.emit('move', {xstep: xd * xs, ystep: yd * ys});
     }, 1000);
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
//startTime, endTime, duration and running  -> private variables
//start() -> If already started, then throw error
//stop() -> If already stopped, then throw error
//reset()
//Getter and setter for duration -> If not started, then throw error / return 0

function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  //start() -> Public Member!
  this.start = function () {
    if (running) {
      throw new Error("Stop watch already started!");
    }
    running = true;
    startTime = new Date();
  };

  //stop() -> Public Member!
  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch not started!");
    }

    running = false;
    endTime = new Date();
  };

  //reset() -> Public Member!
  this.reset = function () {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      if (startTime == null) {
        return 0;
      }

      let tillNow = null;
      if (running) {
        //Case -> Watch is still running, and duration is requested!
        tillNow = new Date();
      } else {
        //Case -> Watch is stopped! and duration is requested!
        tillNow = endTime;
      }

      const seconds = (tillNow.getTime() - startTime.getTime())/1000;
      return seconds;
    },
  });
}

let stopWatch = new StopWatch();
let UItime = document.getElementById('timer');
let timerID;

let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn')
let resetBtn = document.getElementById('reset');

let pomodoroBtn = document.getElementById('pomodoro');
let shortBreakBtn = document.getElementById('short');
let longBreakBtn = document.getElementById('long');



class Timer {
    constructor(minutes) {
         this.initialTime = minutes * 60;
         this.leftTime = this.initialTime;
         this.isStart = false;
    }

     

    UpdateTimer() {
        if (this.leftTime <= 0) {
            clearInterval(timerID);
            console.log("time end");
            return;
        } 
        this.leftTime--;
        this.updateScreen();
    }

    resetTime(){
        this.pause();
        this.leftTime = this.initialTime;
        this.updateScreen();
        startBtn.innerText = "start";
    }

    setDuration(minutes){
        this.initialTime = minutes * 60;
        this.leftTime = this.initialTime;
        this.updateScreen();
    }

    updateScreen(){
        let minutes = Math.floor(this.leftTime / 60);
        let seconds = this.leftTime % 60;
        const formatTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        console.log(this.leftTime);
        UItime.innerText = formatTime;
    }

    pause(){
        pomodoTimer.isStart = false;
        clearInterval(timerID)
    }
}


const pomodoTimer = new Timer(25);


startBtn.addEventListener("click", () => {
    if (pomodoTimer.isStart) return;
    pomodoTimer.isStart = true;
    timerID = setInterval(pomodoTimer.UpdateTimer.bind(pomodoTimer), 1000);  
});

pauseBtn.addEventListener("click", () =>{
    pomodoTimer.pause();
    
})

resetBtn.addEventListener("click",()=>{
    pomodoTimer.resetTime();

})

shortBreakBtn.addEventListener("click", ()=>{
    console.log("short choise");
     pomodoTimer.isStart = false;
    pomodoTimer.setDuration(5);
})
longBreakBtn.addEventListener("click", ()=>{
    console.log("short choise");
     pomodoTimer.isStart = false;
    pomodoTimer.setDuration(10);
})
pomodoroBtn.addEventListener("click", ()=>{
    console.log("short choise");
    pomodoTimer.isStart = false;
    pomodoTimer.setDuration(25);
})


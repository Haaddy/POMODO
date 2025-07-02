let UItime = document.getElementById('timer');
let timerID;

let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn')
let resetBtn = document.getElementById('reset');

let pomodoroBtn = document.getElementById('pomodoro');
let shortBreakBtn = document.getElementById('short');
let longBreakBtn = document.getElementById('long');

let pomodoro = {
    leftTime: 25 * 60,
    choise: true,

    UpdateTimer: function () {
        if (this.leftTime < 0) {
            clearInterval(timerID);
            console.log("time end");
            return;
        }

        let minutes = Math.floor(this.leftTime / 60);
        let seconds = this.leftTime % 60;
        const formatTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        console.log(this.leftTime);
        UItime.innerText = formatTime;

        this.leftTime--;
    },
    resetTime: function(){
        clearInterval(timerID);
        this.leftTime = 25*60;
        let minutes = Math.floor(this.leftTime / 60);
        let seconds = this.leftTime % 60;
        const formatTime = `${String(minutes).padStart(2,0)}:${String(seconds).padStart(2,0)}`;
        UItime.innerText = formatTime;
        startBtn.innerText = "start";
    }
};
let shortBreak ={
    leftTime: 5 * 60,
    choise: false,

    UpdateTimer: function () {
        if (this.leftTime < 0) {
            clearInterval(timerID);
            console.log("time end");
            return;
        }

        let minutes = Math.floor(this.leftTime / 60);
        let seconds = this.leftTime % 60;
        const formatTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        console.log(this.leftTime);
        UItime.innerText = formatTime;

        this.leftTime--;
    },
    resetTime: function(){
        clearInterval(timerID);
        this.leftTime = 5*60;
        let minutes = Math.floor(this.leftTime / 60);
        let seconds = this.leftTime % 60;
        const formatTime = `${String(minutes).padStart(2,0)}:${String(seconds).padStart(2,0)}`;
        UItime.innerText = formatTime;
        startBtn.innerText = "start";
    }
}
let longBreak ={
    leftTime: 10 * 60,
    choise: false,

    UpdateTimer: function () {
        if (this.leftTime < 0) {
            clearInterval(timerID);
            console.log("time end");
            return;
        }

        let minutes = Math.floor(this.leftTime / 60);
        let seconds = this.leftTime % 60;
        const formatTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        console.log(this.leftTime);
        UItime.innerText = formatTime;

        this.leftTime--;
    },
    resetTime: function(){
        clearInterval(timerID);
        this.leftTime = 10*60;
        let minutes = Math.floor(this.leftTime / 60);
        let seconds = this.leftTime % 60;
        const formatTime = `${String(minutes).padStart(2,0)}:${String(seconds).padStart(2,0)}`;
        UItime.innerText = formatTime;
        startBtn.innerText = "start";
    }
}

startBtn.addEventListener("click", () => {

    if(pomodoro.choise == true){
        pomodoro.UpdateTimer();
        startBtn.innerText = "Resume";

        timerID = setInterval(pomodoro.UpdateTimer.bind(pomodoro), 1000);
    }else if(shortBreak.choise == true){
        shortBreak.UpdateTimer();
        startBtn.innerText = "Resume";

        timerID = setInterval(shortBreak.UpdateTimer.bind(shortBreak), 1000);
    }else if(longBreak.choise == true){
        longBreak.UpdateTimer();
        startBtn.innerText = "Resume";

        timerID = setInterval(longBreak.UpdateTimer.bind(longBreak), 1000);
    }
    
});

pauseBtn.addEventListener("click", () =>{
    // pauseTime();
    clearInterval(timerID);
})

resetBtn.addEventListener("click",()=>{

    if (pomodoro.choise==true) {
        pomodoro.resetTime();
    }else if (shortBreak.choise == true) {
        shortBreak.resetTime();
    }else if (longBreak.choise == true) {
        longBreak.resetTime();
    }
   

})

shortBreakBtn.addEventListener("click", ()=>{
    console.log("short choise");
    UItime.innerText = "5:00"
    shortBreak.choise = true;
    pomodoro.choise = false;
    longBreak.choise = false;
    shortBreak.resetTime();

})

pomodoroBtn.addEventListener("click", ()=>{
    console.log("pomodor choise");
    UItime.innerText = "25:00"
    shortBreak.choise = false;
    pomodoro.choise = true;
    longBreak.choise = false;
    pomodoro.resetTime();
})

longBreakBtn.addEventListener("click", ()=>{
    console.log("long choise");
    UItime.innerText = "10:00"
    shortBreak.choise = false;
    pomodoro.choise = false;
    longBreak.choise = true;
    longBreak.resetTime();
})

let UItime = document.getElementById('timer');
let timerID;

let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn')
let resetBtn = document.getElementById('reset');
let settingBtn = document.getElementById('setting-btn');
let modal = document.getElementById('modal');
let closeModalBtn = document.getElementById('close-modal');
let saveModalBtn = document.getElementById('save-settings');
let pomodoroInput = document.getElementById('pomodoro-input');
let shortInput = document.getElementById('short-input');
let longInput = document.getElementById('long-input');

let pomodoroBtn = document.getElementById('pomodoro');
let shortBreakBtn = document.getElementById('short');
let longBreakBtn = document.getElementById('long');

const timersSettings = {
    pomodoro: 25,
    short: 5,
    long: 10
}

class Timer {
    constructor(minutes) {
         this.initialTime = minutes * 60;
         this.leftTime = this.initialTime;
         this.isStart = false;
    }

     

    UpdateTimer() {
        if (this.leftTime <= 0) {
            this.playEndTimerSound();
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
        let hours = Math.floor(this.leftTime / 3600);
        let minutes = Math.floor((this.leftTime % 3600) / 60);
        let seconds = this.leftTime % 60;
        let formatTime;

        if (hours == 0) {
              formatTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }else{
             formatTime = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
       

        console.log(this.leftTime);
        UItime.innerText = formatTime;
    }

    pause(){
        pomodoTimer.isStart = false;
        clearInterval(timerID)
    }

    playEndTimerSound(){
        console.log("play sound");
        
        let sound = new Audio('sounds/bell.wav');
        sound.volume = 0.2
        ;
        sound.play();
        setTimeout(() => {
            sound.pause();
            sound.currentTime = 0; 
        }, 5000); 
    }
}

function updateTimerData(){
    let pomodoroNewTime = parseInt(pomodoroInput.value);
    let shortNewTime = parseInt(shortInput.value);
    let longNewTime = parseInt(longInput.value);

    if (!isNaN(pomodoroNewTime)) timersSettings.pomodoro = pomodoroNewTime;
    if (!isNaN(shortNewTime)) timersSettings.short = shortNewTime;
    if (!isNaN(longNewTime)) timersSettings.long = longNewTime;


    pomodoTimer.setDuration(timersSettings.pomodoro);
    console.log("change complite");
    

}


const pomodoTimer = new Timer(timersSettings.pomodoro);





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
    pomodoTimer.pause();
    pomodoTimer.setDuration(timersSettings.short);
})
longBreakBtn.addEventListener("click", ()=>{
    console.log("short choise");
    pomodoTimer.pause();
    pomodoTimer.setDuration(timersSettings.long);
})
pomodoroBtn.addEventListener("click", ()=>{
    console.log("short choise");
    pomodoTimer.pause();
    pomodoTimer.setDuration(timersSettings.pomodoro);
})

settingBtn.addEventListener("click", ()=>{
    modal.classList.remove('hidden');
})

closeModalBtn.addEventListener("click", ()=>{
    modal.classList.add("hidden");
})

saveModalBtn.addEventListener("click", ()=>{
    updateTimerData();
})


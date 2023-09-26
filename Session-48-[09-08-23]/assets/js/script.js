const startTimeInput = document.getElementById('time1');
const endTimeInput = document.getElementById('time2');
const startBtn = document.getElementById('start-btn');
const captureBtn = document.getElementById('capture-btn');
const timerWatch = document.getElementById('timer-watch');
const timeUp = document.getElementById('timeup');
const note = document.getElementById('note');
const waitMessage = document.getElementById('wait-message');

const capturedTimesList = document.getElementById('captured-times-list');
const capturedTimes = []; // array to display captured time

let timerInterval; // To store the interval id

// disable button when any of the input is empty or both the input
function updateButtonStatus() {
    const isStartTimeEmpty = startTimeInput.value.trim() == '';
    const isEndTimeEmpty = endTimeInput.value.trim() == '';

    if (isStartTimeEmpty || isEndTimeEmpty) {
        note.style.display = "block";
    } else {
        note.style.display = "none";
    }

    waitMessage.style.display = "none";
    
    startBtn.disabled = isStartTimeEmpty || isEndTimeEmpty;
    captureBtn.disabled = timerInterval === undefined;
}
updateButtonStatus();
startTimeInput.addEventListener('input', updateButtonStatus);
endTimeInput.addEventListener('input', updateButtonStatus);

function updateTimerDisplay(timeInSeconds) {
    const timeValue = timeInSeconds + 1;
    console.log("Updating timer display with:", timeInSeconds+1, "seconds");
    const hours = Math.floor(timeValue / 3600);
    const minutes = Math.floor((timeValue % 3600) / 60);
    const seconds = timeValue % 60;
    timerWatch.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// countdown timer 
function startTimer() {
    const now = new Date();
    const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(startTimeInput.value.split(':')[0]), parseInt(startTimeInput.value.split(':')[1]));
    const endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(endTimeInput.value.split(':')[0]), parseInt(endTimeInput.value.split(':')[1]));
    
    if (startTime <= now || endTime <= startTime) {
        alert('Invalid start or end time.');
        return;
    }
    
    note.style.display = "none";
    waitMessage.style.display = "block";

    // Disable the start button while the timer is running
    startBtn.disabled = true;    
    
    timerInterval = setInterval(() => {
        const currentTime = new Date();
        if (currentTime >= startTime && currentTime <= endTime) {
            const elapsedTime = Math.floor((currentTime - startTime) / 1000);
            updateTimerDisplay(elapsedTime);
            captureBtn.disabled = false; 
        } 
        else if (currentTime > endTime) {
            clearInterval(timerInterval);
            startBtn.disabled = false; // Enable the start button when the timer ends
            captureBtn.disabled = true;
            timeUp.style.display = "block";
        }
    }, 1000);
}

// capture time from the timer
function captureTime() {
    const now = new Date();
    const capturedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    // Add the captured time to the beginning of the list (descending order)
    const listItem = document.createElement('li');
    listItem.textContent = timerWatch.textContent;
    capturedTimesList.insertBefore(listItem, capturedTimesList.firstChild);

    // Add the captured time to the beginning of the array
    capturedTimes.unshift(capturedTime);
    startBtn.disabled = true;
    captureBtn.disabled = false;
}

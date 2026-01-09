let startTime;
let timerInterval;

const input = document.getElementById('input');
const startBtn = document.getElementById('startBtn');
const timeDisplay = document.getElementById('time');
const wpmDisplay = document.getElementById('wpm');
const sentence = document.getElementById('sentence').innerText;

function startTest() {
    input.value = "";
    input.disabled = false;
    input.focus();

    startTime = new Date().getTime();
    timeDisplay.textContent = "0";
    wpmDisplay.textContent = "0";

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
        timeDisplay.textContent = elapsedSeconds;
    }, 1000);
}

function endTest() {
    const endTime = new Date().getTime();
    const totalTime = (endTime - startTime) / 1000; // seconds

    const wordsTyped = input.value.trim().split(/\s+/).length;
    const wpm = Math.round((wordsTyped / totalTime) * 60);

    wpmDisplay.textContent = wpm;
    clearInterval(timerInterval);
    input.disabled = true;
}

startBtn.addEventListener('click', startTest);

input.addEventListener('input', () => {
    if (input.value === sentence) {
        endTest();
    }
});

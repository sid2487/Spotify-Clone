console.log("Welcome to Spotify");

// Initialize the varraibles

let index = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Salam-e-Isk", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Isk", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Isk", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Isk", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Isk", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Isk", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Isk", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Isk", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Isk", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Isk", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    
]


// audioElement.play();


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    } 
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update SeekBar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}) 
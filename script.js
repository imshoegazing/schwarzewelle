const welcome = document.querySelector(".welcome");
const berlin = document.querySelector(".berlin");
const radio = document.querySelector(".radio");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
const content = document.querySelectorAll(".window");
const homeBtn = document.getElementById("home");
const listenBtn = document.getElementById("listen");
const historyBtn = document.getElementById("history");
const contactBtn = document.getElementById("contact");
const homeContent = document.querySelector(".window-home");
const listenContent = document.querySelector(".window-listen");
const historyContent = document.querySelector(".window-history");
const contactContent = document.querySelector(".window-contact");
const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Loading

window.addEventListener("load", function () {
  radio.classList.add("loaded");
  setTimeout(() => {
    menu.classList.add("active");
  }, "2500");
  setTimeout(() => {
    welcome.classList.add("active");
  }, 300);
  setTimeout(() => {
    berlin.classList.add("active");
  }, 800);
  setTimeout(() => {
    const delay = 1000;
    let i = 0;

    function showText() {
      document.getElementById("text").innerHTML = text[i];
      document.getElementById("text").style.opacity = 1;
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          document.getElementById("text").style.opacity = 0;
        }, delay);
      }
    }

    const intervalId = setInterval(showText, delay);

    showText();
  }, 2500);
});

logo.addEventListener("click", () => {
  logo.classList.add("clicked");
});

// Menu

function handleButtonClick() {
  content.forEach((element) => {
    element.classList.remove("active");
  });
}

homeBtn.addEventListener("click", () => {
  handleButtonClick();
  homeContent.classList.add("active");
});

listenBtn.addEventListener("click", () => {
  handleButtonClick();
  listenContent.classList.add("active");
});

historyBtn.addEventListener("click", () => {
  handleButtonClick();
  historyContent.classList.add("active");
});

contactBtn.addEventListener("click", () => {
  handleButtonClick();
  contactContent.classList.add("active");
});

// Logo

logo.addEventListener("click", () => {
  logo.classList.add("clicked");
});

// Listen Welcome Text

const text = [
  "We",
  "❤",
  "Post-Punk",
  "Coldwave",
  "Synthpop",
  "Minimal Synth",
  "Darkwave",
  "Enjoy!",
];

window.addEventListener("load", function () {
  radio.classList.add("loaded");
  setTimeout(() => {
    logo.classList.add("loaded");
  }, "1000");
});

// PLaylist

const playListHistory = [
  {
    id: 1,
    bandName: "HTRK",
    title: "Body Lotion",
  },
  {
    id: 2,
    bandName: "The Sisters Of Mercy",
    title: "Walk Away",
  },
  {
    id: 3,
    bandName: "Siouxsie & The Banshees",
    title: "Slowdive",
  },

  {
    id: 4,
    bandName: "Drab Majesty",
    title: "Too Soon to Tell",
  },
  {
    id: 5,
    bandName: "Position Parallele",
    title: "Si Calme",
  },
  {
    id: 6,
    bandName: "Boy Harsher",
    title: "Face The Fire",
  },
  {
    id: 6,
    bandName: "Body Of Light",
    title: "Tremble",
  },
  {
    id: 6,
    bandName: "The Soft Moon",
    title: "When It's Over",
  },
  {
    id: 7,
    bandName: "Automelodi",
    title: "La Poussiere",
  },
  {
    id: 8,
    bandName: "Joy Divison",
    title: "Dead Souls",
  },
];

const playlistHtml = playListHistory
  .map(
    (song) => `
    <ul>
      <li>
        <strong>${song.bandName}</strong> - ${song.title}
      </li>
    </ul>`
  )
  .join("");

document.getElementById("playlist-history").innerHTML = playlistHtml;

// Music Player

const songs = ["HTRK"];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  //  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  //  cover.src = `images/${song}.png`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

/* function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
} */

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);

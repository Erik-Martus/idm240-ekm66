// TODO: Impliment hover event listener

// var aud_cont = document.getElementById("audio");
// var aud_info = document.getElementById("audio_info");
// // aud_cont.addEventListener('transitionend', () => {

// // })

// aud_cont.addEventListener('mouseenter', () => {
//   var delayInMilliseconds = 200;

//   aud_cont.classList.add('expanded');
//   aud_cont.ontransitionend = () => {}
//   setTimeout(function () {
//     aud_info.classList.remove('hidden');
//     aud_info.classList.add('shown');
//   }, 200);
// });

// aud_cont.addEventListener('mouseleave', () => {
//   aud_cont.classList.remove('expanded');
// });

// ! Speaker Toggle
var speaker = document.getElementById("speaker");
var mute = document.getElementById("cross_out");
var cir_btm = document.getElementById("cir_btm");

var audioPlayer = document.getElementById('music');
var sndPlaying = false;

function musicPlaying() {
  var id = setInterval(frame, 5);
}

speaker.addEventListener('mousedown', () => {
  if (cross_out.classList.contains("off")) {
    cross_out.classList.remove("off");
    cross_out.classList.add("on");
    cir_btm.classList.remove("stop");
    cir_btm.classList.add("play");
    audioPlayer.play();
    sndPlaying = true;
  } else {
    cross_out.classList.remove("on");
    cross_out.classList.add("off");
    cir_btm.classList.remove("play");
    cir_btm.classList.add("stop");
    audioPlayer.pause();
    sndPlaying = false;
  }
}, false);

// ! Band Name and Logo Animation
var bandName = document.getElementById("band_name");
var logo = document.getElementById("logo");

function nameLogo_mobile(x) {
  if (x.matches) { // Executes on mobile
    bandName.addEventListener('mousedown', () => {
      if (bandName.classList.contains("tap")) {
        logo.classList.remove("mobile");
        console.log(logo);
        setTimeout(() => {
          bandName.classList.remove("hidden");
          bandName.classList.remove("tap");
          console.log(bandName);
        }, 300);
      } else {
        bandName.classList.add("tap");
        console.log(bandName);
        setTimeout(() => {
          bandName.classList.add("hidden");
          logo.classList.add("mobile");
          console.log(logo);
        }, 300);
      }
    }, false);
  } else { // Executes on tablet and larger

  }
}

var windowWidth = window.matchMedia("(max-width: 48rem)");
nameLogo_mobile(windowWidth);
windowWidth.addListener(nameLogo_mobile);
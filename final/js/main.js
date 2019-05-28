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

var speaker = document.getElementById("speaker");
var mute = document.getElementById("cross_out");

var audioPlayer = document.getElementById('music');
var sndPlaying = false;


console.log(speaker);
console.log(mute);

speaker.addEventListener('mousedown', () => {
  if (cross_out.classList.contains("off")) {
    cross_out.classList.remove("off");
    cross_out.classList.add("on");
    audioPlayer.play();
    sndPlaying = true;
  } else {
    cross_out.classList.remove("on");
    cross_out.classList.add("off");
    audioPlayer.pause();
    sndPlaying = false;
  }
}, false);